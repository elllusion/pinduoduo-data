uniform sampler2D inputImageTexture;

varying highp vec2 textureCoordinate;

varying highp vec4 texBlurShift1;
varying highp vec4 texBlurShift2;
varying highp vec4 texBlurShift3;
varying highp vec4 texBlurShift4;

void main()
{
    mediump vec3 sum = texture2D(inputImageTexture, textureCoordinate).rgb;
    sum += texture2D(inputImageTexture, texBlurShift1.xy).rgb;
    sum += texture2D(inputImageTexture, texBlurShift1.zw).rgb;
    sum += texture2D(inputImageTexture, texBlurShift2.xy).rgb;
    sum += texture2D(inputImageTexture, texBlurShift2.zw).rgb;
    sum += texture2D(inputImageTexture, texBlurShift3.xy).rgb;
    sum += texture2D(inputImageTexture, texBlurShift3.zw).rgb;
    sum += texture2D(inputImageTexture, texBlurShift4.xy).rgb;
    sum += texture2D(inputImageTexture, texBlurShift4.zw).rgb;

    gl_FragColor = vec4(sum * 0.1111, 1.0);
}
