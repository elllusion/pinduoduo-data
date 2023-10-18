attribute vec3 position;
attribute vec2 inputTextureCoordinate;

uniform float texBlurWidthOffset;
uniform float texBlurHeightOffset;

varying vec2 textureCoordinate;

varying vec4 texBlurShift1;
varying vec4 texBlurShift2;
varying vec4 texBlurShift3;
varying vec4 texBlurShift4;

void main()
{
    gl_Position = vec4(position, 1.0);
    textureCoordinate = inputTextureCoordinate;
    
    vec2 singleStepOffset = vec2(texBlurWidthOffset, texBlurHeightOffset) * 1.5;

    texBlurShift1 = vec4(inputTextureCoordinate - singleStepOffset, inputTextureCoordinate + singleStepOffset);
    texBlurShift2 = vec4(inputTextureCoordinate - 2.0*singleStepOffset, inputTextureCoordinate + 2.0*singleStepOffset);
    texBlurShift3 = vec4(inputTextureCoordinate - 3.0*singleStepOffset, inputTextureCoordinate + 3.0*singleStepOffset);
    texBlurShift4 = vec4(inputTextureCoordinate - 4.0*singleStepOffset, inputTextureCoordinate + 4.0*singleStepOffset);
}
