precision highp float;

varying vec2 textureCoordinate;
uniform sampler2D inputImageTexture;
uniform float scale;

void main() {
    float width = 1.0 * scale;
    float height = 1.0 * scale;

    float topX = (1.0 - width) * 0.5;
    float topY = (1.0 - height) * 0.5;

    float x = topX + textureCoordinate.x * width;
    float y = topY + textureCoordinate.y * height;

    gl_FragColor = texture2D(inputImageTexture, vec2(x, y));
}

