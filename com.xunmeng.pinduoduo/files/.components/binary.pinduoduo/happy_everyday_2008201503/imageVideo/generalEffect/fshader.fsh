precision highp float;

uniform sampler2D image0;
uniform sampler2D video;

uniform float cropCenterX;
uniform float cropCenterY;
uniform float cropWidth;
uniform float cropHeight;

varying vec2 imageUV;
varying vec2 videoUV;
varying vec2 alphaUV;

void main() {
    float cropCenterYRation = cropCenterY * 0.00078125;
    float ration = 720.0 / cropWidth;
    float realHeight = 1280.0 / ration;
    float ndcHeight = realHeight * 0.00078125;
    float ndcBottom = cropCenterYRation - ndcHeight * 0.5;
    float ndcTop = cropCenterYRation + ndcHeight * 0.5;
    float coordY = (imageUV.y - ndcBottom) * (1.0 / ndcHeight);
    
    float cropCenterXRation = cropCenterX * 0.001388889;
    float ndcWidth = cropWidth * 0.001388889;
    float ndcLeft = cropCenterXRation - ndcWidth * 0.5;
    float ndcRight = cropCenterXRation + ndcWidth * 0.5;
    float coordX = (imageUV.x - ndcLeft) * (1.0 / ndcWidth);
    
    vec3 imageColor = vec3(0.0);
    float level = step(ndcBottom, imageUV.y) * step(imageUV.y, ndcTop) * step(ndcLeft, imageUV.x) * step(imageUV.x, ndcRight);
    imageColor = texture2D(image0, vec2(coordX,coordY)).rgb * level + imageColor * (1.0-level);
    
    vec3 videoColor = texture2D(video, videoUV).rgb;
    vec3 maskColor  = texture2D(video, alphaUV).rgb;
    
    vec3 color = imageColor * (1.0 - maskColor) + videoColor;
       
    gl_FragColor = vec4(color, 1.0);
}
