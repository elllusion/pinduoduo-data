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
    float cropCenterYRation = cropCenterY * 1.0/1280.0;
    float ration = 720.0/cropWidth;
    float realHeight = 1280.0/ration;
    float ndcHeight = realHeight*(1.0/1280.0);
    float ndcBottom = cropCenterYRation - ndcHeight/2.0;
    float ndcTop = cropCenterYRation + ndcHeight/2.0;
    float coordY = (imageUV.y - ndcBottom)*(1.0/ndcHeight);
    
    float cropCenterXRation = cropCenterX * 1.0/720.0;
    float ndcWidth = cropWidth*(1.0/720.0);
    float ndcLeft = cropCenterXRation - ndcWidth/2.0;
    float ndcRight = cropCenterXRation + ndcWidth/2.0;
    float coordX = (imageUV.x - ndcLeft)*(1.0/ndcWidth);
    
    vec3 imageColor0;
    if (imageUV.y >= ndcBottom && imageUV.y <= ndcTop && imageUV.x >= ndcLeft && imageUV.x <= ndcRight ) {
        imageColor0 = texture2D(image0, vec2(coordX,coordY)).rgb;
    }else{
        imageColor0 = vec3(0.0);
    }

    vec3 imageColor = imageColor0;
    
    vec3 videoColor = texture2D(video, videoUV).rgb;
    vec3 maskColor  = texture2D(video, alphaUV).rgb;
    
    vec3 color = imageColor * (1.0 - maskColor) + videoColor;
       
    gl_FragColor = vec4(color, 1.0);
}
