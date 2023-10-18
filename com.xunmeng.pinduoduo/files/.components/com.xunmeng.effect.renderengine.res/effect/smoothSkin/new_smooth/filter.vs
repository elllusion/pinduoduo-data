attribute vec3 position;
attribute vec2 inputTextureCoordinate;

varying vec2 textureCoordinate;

uniform float texEpmWidthOffset;
uniform float texEpmHeightOffset;

varying vec2 texEpmShift1;
varying vec2 texEpmShift2;
varying vec2 texEpmShift3;
varying vec2 texEpmShift4;


void main()
{
    gl_Position = vec4(position, 1.0);
    textureCoordinate = inputTextureCoordinate;

    vec2 step = vec2(texEpmWidthOffset,texEpmHeightOffset);
    texEpmShift1 = textureCoordinate + step * vec2(-0.5,-0.5);
    texEpmShift2 = textureCoordinate + step * vec2(-0.5, 0.5);
    texEpmShift3 = textureCoordinate + step * vec2( 0.5,-0.5);
    texEpmShift4 = textureCoordinate + step * vec2( 0.5, 0.5);
}
