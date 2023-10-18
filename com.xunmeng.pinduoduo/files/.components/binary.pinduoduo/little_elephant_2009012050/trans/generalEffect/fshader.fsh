#ifdef GL_ES
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
#endif

varying vec2 textureCoordinate;

uniform sampler2D inputImageTexture;
uniform sampler2D inputImageTexture2;

uniform float progress;

vec4 getFromColor(vec2 uv){
    return texture2D(inputImageTexture, uv);
}

vec2 scaleCoords(float scale, vec2 uv) {
    float scaleX = 0.5 + (uv.x - 0.5) / scale;
    float scaleY = 0.5 + (uv.y - 0.5) / scale;
    return vec2(scaleX, scaleY);
}

vec4 getToColor(vec2 uv){
    return texture2D(inputImageTexture2, scaleCoords(1.0, uv));
}

void main() {
    gl_FragColor = mix(
                       getFromColor(textureCoordinate),
                       getToColor(textureCoordinate),
                       progress);
}
