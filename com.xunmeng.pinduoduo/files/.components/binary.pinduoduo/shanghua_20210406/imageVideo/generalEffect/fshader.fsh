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
    float centerXRation = cropCenterX * 0.00138888889; // 1/720
    float centerYRation = cropCenterY * 0.00078125;
    
    float ndcHeight = cropHeight * 0.00078125;
    float ndcBottom = centerYRation - ndcHeight * 0.5;
    float ndcTop = centerYRation + ndcHeight * 0.5;
    float coordY = (imageUV.y - ndcBottom)*(1.0/ndcHeight);
    
    float ndcWidth = cropWidth * 0.00138888889;
    float ndcLeft = centerXRation - ndcWidth * 0.5;
    float ndcRight = centerXRation + ndcWidth * 0.5;
    float coordX = (imageUV.x - ndcLeft)*(1.0/ndcWidth);
    
    vec3 imageColor = vec3(0.0);
    float level = step(0., imageUV.y - ndcBottom) * step(0., ndcTop - imageUV.y) * step(0., imageUV.x - ndcLeft) * step(0., ndcRight - imageUV.x);
    imageColor = level * texture2D(image0, vec2(coordX,coordY)).rgb + (1. - level) * imageColor;
    // if (imageUV.y >= ndcBottom && imageUV.y <= ndcTop && imageUV.x >= ndcLeft && imageUV.x <= ndcRight ) {
    //     imageColor = texture2D(image0, vec2(coordX,coordY)).rgb;
    // }

    vec3 videoColor = texture2D(video, videoUV).rgb;
    vec3 maskColor  = texture2D(video, alphaUV).rgb;
    
    vec3 color = imageColor * (1.0 - maskColor) + videoColor;
       
    gl_FragColor = vec4(color, 1.0);
}
