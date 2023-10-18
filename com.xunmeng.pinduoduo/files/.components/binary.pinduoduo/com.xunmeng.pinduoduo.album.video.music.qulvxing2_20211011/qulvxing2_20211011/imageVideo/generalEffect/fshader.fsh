precision highp float;

uniform sampler2D image0;
uniform sampler2D video;

varying vec2 imageUV;
varying vec2 videoUV;
varying vec2 alphaUV;

void main() {

    vec3 imageColor = texture2D(image0, imageUV).rgb;
    vec3 videoColor = texture2D(video, videoUV).rgb;
    vec3 maskColor  = texture2D(video, alphaUV).rgb;
    
    vec3 color = imageColor * (1.0 - maskColor) + videoColor;
       
    gl_FragColor = vec4(color, 1.0);
}








































