precision highp float;

varying vec2 textureCoordinate;
uniform sampler2D inputImageTexture;
uniform sampler2D inputImageTexture2;
uniform sampler2D inputImageTexture3;

void main()
{
    vec4 color1 = texture2D(inputImageTexture, textureCoordinate);
    vec4 color2 = texture2D(inputImageTexture2, textureCoordinate);
    float a = texture2D(inputImageTexture3, textureCoordinate).r;
    gl_FragColor = mix(color1, color2, a);
        
//    gl_FragColor = vec4(a,a,a,1.0);
}
