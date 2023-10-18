precision highp float;

varying highp vec2 textureCoordinate;
uniform sampler2D inputImageTexture;
uniform float cropCoordinateRange[4];

void main()
{
    float x = textureCoordinate.x * (cropCoordinateRange[2]- cropCoordinateRange[0]) + cropCoordinateRange[0];
    float y = textureCoordinate.y * (cropCoordinateRange[3]- cropCoordinateRange[1]) + cropCoordinateRange[1];
    vec2 cropCoordinate = vec2(x, y);
    gl_FragColor = texture2D(inputImageTexture, cropCoordinate);
}
