precision highp float;

varying vec2 textureCoordinate;

uniform sampler2D inputImageTexture;
uniform sampler2D inputImageTexture2;

void main()
{
    vec4 color1 = texture2D(inputImageTexture, textureCoordinate);
    vec4 color2 = texture2D(inputImageTexture2, textureCoordinate);
    vec4 color = color1.a > 0.99 ? color1 : color2;
    gl_FragColor = color;

}
