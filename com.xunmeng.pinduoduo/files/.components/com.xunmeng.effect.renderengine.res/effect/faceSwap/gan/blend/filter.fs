precision highp float;

varying vec2 textureCoordinate;

uniform sampler2D inputImageTexture;  // 256x256原图
uniform sampler2D swapedTempTexture;  // 256x256换脸后图
uniform sampler2D mask;


void main()
{
    vec4 inputColor = texture2D(inputImageTexture, textureCoordinate);
    vec4 swapedColor = texture2D(swapedTempTexture, textureCoordinate);
    vec4 maskColor = texture2D(mask, textureCoordinate);
    
    gl_FragColor = mix(inputColor, swapedColor, maskColor.r);
}
