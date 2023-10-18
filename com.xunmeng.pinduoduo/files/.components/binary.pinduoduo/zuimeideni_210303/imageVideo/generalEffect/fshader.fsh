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
    float cropCenterYRation = cropCenterY * 0.00078125;// 1.0/1280.0
    float ndcHeight = cropWidth * 0.001389; // 1280.0/720.0 * cropWidth * (1.0/1280.0)
    float ndcBottom = cropCenterYRation - ndcHeight * 0.5;
    float ndcTop = cropCenterYRation + ndcHeight * 0.5;
    float coordY = (imageUV.y - ndcBottom)*(1.0/ndcHeight);
    
    float cropCenterXRation = cropCenterX * 0.001389;
    float ndcWidth = cropWidth * 0.001389;
    float ndcLeft = cropCenterXRation - ndcWidth * 0.5;
    float ndcRight = cropCenterXRation + ndcWidth * 0.5;
    float coordX = (imageUV.x - ndcLeft)*(1.0/ndcWidth);
    
    float checkImageRange = step(0.0, imageUV.y - ndcBottom) * step(0.0, ndcTop - imageUV.y) * step(0.0, imageUV.x - ndcLeft) * step(0.0, ndcRight - imageUV.x);
    vec3 imageColor = texture2D(image0, vec2(coordX,coordY)).rgb * checkImageRange;

    vec3 videoColor = texture2D(video, videoUV).rgb;
    vec3 maskColor  = texture2D(video, alphaUV).rgb;
    
    vec3 color = imageColor * (1.0 - maskColor) + videoColor;
       
    gl_FragColor = vec4(color, 1.0);
}
