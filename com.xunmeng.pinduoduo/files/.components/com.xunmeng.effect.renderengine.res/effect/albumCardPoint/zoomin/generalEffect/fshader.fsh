precision highp float;

uniform sampler2D image0;

varying vec2 texCoordinate;
uniform float fromScale;
uniform float progress;

vec2 scaleCoords(float scale, vec2 uv) {
    float scaleX = 0.5 + (uv.x - 0.5) / scale;
    float scaleY = 0.5 + (uv.y - 0.5) / scale;
    return vec2(scaleX, scaleY);
}

void main() {
    float maxScale = fromScale;
    float scale = maxScale - (maxScale-1.0) * progress;
    gl_FragColor = texture2D(image0, scaleCoords(scale, texCoordinate));
}
