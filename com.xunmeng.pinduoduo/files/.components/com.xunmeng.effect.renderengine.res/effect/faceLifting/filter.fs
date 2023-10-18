#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

varying vec2 coord;
uniform sampler2D inputImageTexture;

uniform float facePoints[212];
uniform vec2 u_resolution; ///< 720 1280

uniform float bigEyeDelta;
uniform float thinFaceDelta;

#define MIN_INTENSITY 0.001

 vec2 warpPositionToUse1(vec2 currentPoint, vec2 contourPointA,  vec2 contourPointB, float radius, float delta, float aspectRatio)
{
    vec2 positionToUse = currentPoint;
    
    vec2 currentPointToUse = vec2(currentPoint.x, currentPoint.y * aspectRatio + 0.5 - 0.5 * aspectRatio);
    vec2 contourPointAToUse = vec2(contourPointA.x, contourPointA.y * aspectRatio + 0.5 - 0.5 * aspectRatio);
    float r = distance(currentPointToUse, contourPointAToUse);
    
    if(r < radius)
    {
        vec2 dir = normalize(contourPointB - contourPointA);
        float dist = radius * radius - r * r;
        float alpha = dist / (dist + (r-delta) * (r-delta));
        alpha = alpha * alpha;
        
        positionToUse = positionToUse - alpha * delta * dir;
    }
    
    return positionToUse;
}
 
 
 //脸部调节
 vec2 adjust_thinFace(vec2 coord, float eye_dist, vec2 dir_up, vec2 dir_right, float aspect_ratio, float intensity)
{
    vec2 positionToUse = coord;
    int arraySize = 3;
    vec2 leftContourPoints[3];
    vec2 rightContourPoints[3];
    
    float deltaArray[3];
    
    leftContourPoints[0] = vec2(facePoints[4*2], facePoints[4*2 + 1]) - dir_right * eye_dist*0.13;
    leftContourPoints[1] = vec2(facePoints[9*2], facePoints[9*2 + 1]) - dir_right * eye_dist*0.33;
    leftContourPoints[2] = vec2(facePoints[13*2], facePoints[13*2 + 1])- dir_right * eye_dist*0.33;
    
    
    rightContourPoints[0] = vec2(facePoints[28*2], facePoints[28*2 + 1]) + dir_right * eye_dist*0.13;
    rightContourPoints[1] = vec2(facePoints[23*2], facePoints[23*2 + 1]) + dir_right * eye_dist*0.33;
    rightContourPoints[2] = vec2(facePoints[19*2], facePoints[19*2 + 1]) + dir_right * eye_dist*0.33;
    
    float x = 3.14159 / 30.0;
    float scaleFactor = eye_dist * 2.0;
    float radius = 0.4 * scaleFactor;
    
    
    deltaArray[0] = sin(x) * intensity * 0.150 * scaleFactor;
    deltaArray[1] = sin(x*2.0) * intensity * 0.150 * scaleFactor;
    deltaArray[2] = sin(x*2.0) * intensity * 0.150 * scaleFactor;
    
    
    for(int i = 0; i < arraySize; i++)
    {
        positionToUse = warpPositionToUse1(positionToUse, leftContourPoints[i], rightContourPoints[i], radius, deltaArray[i], aspect_ratio);
        positionToUse = warpPositionToUse1(positionToUse, rightContourPoints[i], leftContourPoints[i], radius, deltaArray[i], aspect_ratio);
    }
    
    return positionToUse;
}

vec2 enlargeEye(vec2 textureCoord, vec2 originPosition, float radius, float delta) {
    
    // 和老版逻辑保持一致
    float dis = distance(vec2(textureCoord.x, textureCoord.y) * u_resolution, vec2(originPosition.x, originPosition.y) * u_resolution);
    
    if (dis < radius) {
        float weight = dis / radius;
        weight = 1.0 - (weight - 1.0) * (weight - 1.0) * delta;
        textureCoord = originPosition + (textureCoord - originPosition) * weight * weight;
    }
    
    return textureCoord;
}

// eye
vec2 bigEye(vec2 currentCoordinate) {
    
    vec3 eyeIndexs[2];
    eyeIndexs[0] = vec3(74, 52, 55);
    eyeIndexs[1] = vec3(77, 58, 61);
    
    for (int i = 0; i < 2; i++) {
        int centerPointIndex = int(eyeIndexs[i].x);
        int minPointIndex = int(eyeIndexs[i].y);
        int maxPointIndex = int(eyeIndexs[i].z);
        
        vec2 centerPoint = vec2(facePoints[centerPointIndex * 2], facePoints[centerPointIndex * 2 + 1]);
        vec2 minPoint = vec2(facePoints[minPointIndex * 2], facePoints[minPointIndex * 2 + 1]);
        vec2 maxPoint = vec2(facePoints[maxPointIndex * 2], facePoints[maxPointIndex * 2 + 1]);
        
        // 和老版逻辑保持一致
        float radius = distance(vec2(maxPoint.x, maxPoint.y) * u_resolution, vec2(minPoint.x, minPoint.y) * u_resolution) * 1.5;
        
        currentCoordinate = enlargeEye(currentCoordinate, centerPoint, radius, bigEyeDelta);
    }
    
    return currentCoordinate;
}

// face
vec2 thinFace(vec2 currentCoordinate) {
    // 眼距
    vec2 leftEyeCenterPoint = vec2(facePoints[74 * 2], facePoints[74 * 2 + 1]);
    vec2 rightEyeCenterPoint = vec2(facePoints[77 * 2], facePoints[77 * 2 + 1]);
    float eye_dist = distance(leftEyeCenterPoint, rightEyeCenterPoint);
    
    // 屏幕高宽比
    float aspect_ratio = u_resolution.y / u_resolution.x;
    
    // 面部方向
    vec2 dir_up     = normalize(vec2(facePoints[43 * 2], facePoints[43 * 2 + 1]) - vec2(facePoints[16 * 2], facePoints[16 * 2 + 1]));
    vec2 dir_right  = normalize(vec2(facePoints[77 * 2], facePoints[77 * 2 + 1]) - vec2(facePoints[74 * 2], facePoints[74 * 2 + 1]));
    
    currentCoordinate = adjust_thinFace(currentCoordinate, eye_dist, dir_up, dir_right, aspect_ratio, thinFaceDelta);
    
    return currentCoordinate;
}

void main(){
    vec2 curCoord = coord;
    
    if (bigEyeDelta > MIN_INTENSITY) {
        curCoord = bigEye(curCoord);
    }
    
    if (thinFaceDelta > MIN_INTENSITY) {
        curCoord = thinFace(curCoord);
    }
    
    gl_FragColor = texture2D(inputImageTexture, curCoord);
}
