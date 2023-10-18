precision mediump float;
varying vec2 textureCoordinate;

uniform sampler2D inputImageTexture;//blur
uniform sampler2D inputImageTexture2;//原图

uniform float imageSize[2];//原图尺寸

vec4 getBlurColor(vec2 uv){
    
    vec2 u_resolution = vec2(720.0, 1280.0);
    float widthScale = u_resolution.x*(1.0/imageSize[0]);
    float heightScale = u_resolution.y*(1.0/imageSize[1]);
    if (widthScale >= heightScale) {
        float realWidth = u_resolution.x;
        float realHeight = u_resolution.y*widthScale;
        float ndcHeight = realHeight/u_resolution.y;
        float ndcBottom = 0.5 - ndcHeight/2.0;
        float ndcTop = 0.5 + ndcHeight/2.0;
        float tempY = 1.0 - uv.y;
        float coordY = (tempY - ndcBottom)*(1.0/ndcHeight);
        return texture2D(inputImageTexture,vec2(uv.x,coordY));
        
    } else {
        float realHeight = u_resolution.y;
        float realWidth = u_resolution.x*heightScale;
        float ndcWidth = realWidth / u_resolution.x;
        float ndcLeft = 0.5 - ndcWidth/2.0;
        float ndcRight = 0.5 + ndcWidth/2.0;
        float coordX = (uv.x - ndcLeft)*(1.0/ndcWidth);
        return texture2D(inputImageTexture, vec2(coordX,1.0-uv.y));
    }
}

vec4 getImageColor(vec2 uv){
    vec2 u_resolution = vec2(720.0, 1280.0);
    float height = (imageSize[1]/imageSize[0])*u_resolution.x;
    float ndcHeight = height/u_resolution.y;
    float ndcBottom = 0.5 - ndcHeight/2.0;
    float ndcTop = 0.5 + ndcHeight/2.0;
    
    float tempY = 1.0 - uv.y;
    if (tempY >= ndcBottom && tempY <= ndcTop ) {
        float coordY = (tempY - ndcBottom)*(1.0/ndcHeight);
        return texture2D(inputImageTexture2,vec2(uv.x,coordY));
    } else {
        return getBlurColor(uv);
    }
}

void main() {
    vec2 uv = vec2(textureCoordinate.x,1.0-textureCoordinate.y);
    vec2 p=uv.xy/vec2(1.0).xy;
    gl_FragColor = getImageColor(p);
}
