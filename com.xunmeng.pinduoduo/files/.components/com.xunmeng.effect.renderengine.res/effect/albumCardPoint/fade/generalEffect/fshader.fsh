precision highp float;

uniform sampler2D image0;
uniform sampler2D extraImage;

varying vec2 texCoordinate;
uniform float toScale;
uniform float progress;

vec4 getFromColor(vec2 uv){
    return texture2D(extraImage, uv);
}

vec2 scaleCoords(float scale, vec2 uv) {
    float scaleX = 0.5 + (uv.x - 0.5) / scale;
    float scaleY = 0.5 + (uv.y - 0.5) / scale;
    return vec2(scaleX, scaleY);
}

vec4 getToColor(vec2 uv){
    return texture2D(image0, scaleCoords(toScale, uv));
}

void main() {
    gl_FragColor = mix(
                       getFromColor(texCoordinate),
                       getToColor(texCoordinate),
                       progress);
}
