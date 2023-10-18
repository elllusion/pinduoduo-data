#ifdef GL_ES
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
#endif

varying vec2 textureCoordinate;
uniform sampler2D inputImageTexture;
void main() {
    vec2 uv = textureCoordinate;
    gl_FragColor = texture2D(inputImageTexture,textureCoordinate);
}

