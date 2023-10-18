#ifdef GL_ES
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
#endif

varying vec2 textureCoordinate;
varying vec2 alphaUV;

uniform sampler2D inputImageTexture;
uniform sampler2D inputImageTexture2;
uniform sampler2D video;

uniform float cropCenterX;
uniform float cropCenterY;
uniform float cropWidth;
uniform float cropHeight;

void main() {
    vec2 imageUV = textureCoordinate;
    
    float centerXRation = cropCenterX*(1.0/720.0);
    float centerYRation = cropCenterY*(1.0/1280.0);
    
    float ration = 720.0/cropWidth;
    float realHeight = 1280.0/ration;
    float ndcHeight = realHeight*(1.0/1280.0);
    float ndcBottom = centerYRation - ndcHeight/2.0;
    float ndcTop = centerYRation + ndcHeight/2.0;
    float coordY = (imageUV.y - ndcBottom)*(1.0/ndcHeight);
    
    float ndcWidth = cropWidth*(1.0/720.0);
    float ndcLeft = centerXRation - ndcWidth/2.0;
    float ndcRight = centerXRation + ndcWidth/2.0;
    float coordX = (imageUV.x - ndcLeft)*(1.0/ndcWidth);
    
    vec3 imageColor1;
    vec3 imageColor2;
    
    if (imageUV.y >= ndcBottom && imageUV.y <= ndcTop && imageUV.x >= ndcLeft && imageUV.x <= ndcRight ) {        
        imageColor1 = texture2D(inputImageTexture, vec2(coordX,coordY)).rgb;
        imageColor2 = texture2D(inputImageTexture2, vec2(coordX,coordY)).rgb;
    }else{
        imageColor1 = vec3(0.0);
        imageColor2 = vec3(0.0);
    }
    
    vec3 maskColor  = texture2D(video, alphaUV).rgb;
    vec3 color = mix(imageColor2, imageColor1, maskColor);
    gl_FragColor = vec4(color, 1.0);
}
