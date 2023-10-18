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
    
    float x = (720.0*imageUV.x - (cropCenterX - 0.5*cropWidth))/cropWidth;
    float y = (1280.0*imageUV.y - (cropCenterY - 0.5*cropHeight))/cropHeight;
    
    vec3 imageColor;
    if (x>=0.0&&y>=0.0&&x<=1.0&&y<=1.0) {
        imageColor = texture2D(image0, vec2(x,y)).rgb;//3:4的图片
    }else{
        imageColor = vec3(0.0);
    }
    
    vec3 videoColor = texture2D(video, videoUV).rgb;
    vec3 maskColor  = texture2D(video, alphaUV).rgb;
    
    vec3 color = imageColor * (1.0 - maskColor) + videoColor;
       
    gl_FragColor = vec4(color, 1.0);
}
