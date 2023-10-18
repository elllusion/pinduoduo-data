uniform sampler2D inputImageTexture;

varying highp vec2 textureCoordinate;

varying highp vec4 texBlurShift1;
varying highp vec4 texBlurShift2;
varying highp vec4 texBlurShift3;
varying highp vec4 texBlurShift4;

void main()
{
    lowp vec4 color = texture2D(inputImageTexture, textureCoordinate);
    mediump float sum = color.a;
    sum += texture2D(inputImageTexture, texBlurShift1.xy).a;
    sum += texture2D(inputImageTexture, texBlurShift1.zw).a;
    sum += texture2D(inputImageTexture, texBlurShift2.xy).a;
    sum += texture2D(inputImageTexture, texBlurShift2.zw).a;
    sum += texture2D(inputImageTexture, texBlurShift3.xy).a;
    sum += texture2D(inputImageTexture, texBlurShift3.zw).a;
    sum += texture2D(inputImageTexture, texBlurShift4.xy).a;
    sum += texture2D(inputImageTexture, texBlurShift4.zw).a;
    
    //rgb channel for smoothSrcImage, alpha channel for smoothVarImage
    gl_FragColor = vec4(color.rgb, sum * 0.1111);
}
