#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

varying vec2 texCoordinate;

uniform sampler2D inputImageTexture;
uniform sampler2D inputImageTexture2;
uniform float alphaUV;
uniform float alpha;

void main() {

    vec4 imageColor1 = texture2D(inputImageTexture, texCoordinate);
    vec4 imageColor2 = texture2D(inputImageTexture2, texCoordinate);
    
    gl_FragColor = mix(imageColor2, imageColor1, alpha);
}
