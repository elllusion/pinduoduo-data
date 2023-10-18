attribute vec2 position;
attribute vec2 inputTextureCoordinate;
varying vec2 textureCoordinate;
//uniform mat4 modelMatrix;
uniform float imageWidth;
uniform float imageHeight;
void main()
{
//    gl_Position = modelMatrix*position;
//  textureCoordinate = inputTextureCoordinate.xy;
    vec2 resolution = vec2(imageWidth,imageHeight);
    vec2 pos = position/resolution * 2.0 - 1.0;
    gl_Position = vec4(pos,0.0,1.0);
    textureCoordinate = inputTextureCoordinate/resolution;
}
