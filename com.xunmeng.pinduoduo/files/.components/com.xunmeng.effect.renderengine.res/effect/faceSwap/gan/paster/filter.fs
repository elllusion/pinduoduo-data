precision highp float;

varying vec2 textureCoordinate;

uniform sampler2D inputImageTexture;  // 256x256原图
uniform sampler2D swapedTexture;      // 160x160换脸后的图

uniform vec4 topLeft;
uniform vec4 bottomRight;


void main()
{
    if (textureCoordinate.x < topLeft.x || textureCoordinate.x > bottomRight.x || textureCoordinate.y < topLeft.y || textureCoordinate.y > bottomRight.y) {
        gl_FragColor = texture2D(inputImageTexture, textureCoordinate);
    } else {
        float sx = (textureCoordinate.x - topLeft.x) / (bottomRight.x - topLeft.x);
        float sy = (textureCoordinate.y - topLeft.y) / (bottomRight.y - topLeft.y);
        gl_FragColor = texture2D(swapedTexture, vec2(sx, sy));
    }
}
