precision highp float;

varying vec2 textureCoordinate;
uniform sampler2D inputImageTexture;

uniform sampler2D stickerTexture;

void main()
{
    mediump vec4 color1 = texture2D(inputImageTexture, textureCoordinate);
    mediump vec4 color2 = texture2D(stickerTexture, textureCoordinate);
    
    mediump float ra = color2.r + (1.0 - color2.a) * color1.r;
    mediump float ga = color2.g + (1.0 - color2.a) * color1.g;
    mediump float ba = color2.b + (1.0 - color2.a) * color1.b;
    
    gl_FragColor = vec4(ra, ga, ba, color1.a);
}
