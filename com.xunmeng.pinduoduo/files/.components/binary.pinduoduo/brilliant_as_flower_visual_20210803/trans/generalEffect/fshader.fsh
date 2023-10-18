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

void main() {
    vec2 imageUV = textureCoordinate;
    vec3 imageColor0 = texture2D(inputImageTexture, imageUV).rgb;
    vec3 imageColor1 = texture2D(inputImageTexture2, imageUV).rgb;
    vec3 maskColor  = texture2D(video, alphaUV).rgb;
    vec3 color = mix(imageColor1, imageColor0, maskColor);
    gl_FragColor = vec4(color, 1.0);
}
