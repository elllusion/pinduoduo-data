uniform sampler2D inputImageTexture;
uniform sampler2D inputImageTexture2;

varying highp vec2 textureCoordinate;

varying highp vec4 texBlurShift1;
varying highp vec4 texBlurShift2;
varying highp vec4 texBlurShift3;
varying highp vec4 texBlurShift4;

uniform mediump float diffFactor;

void main()
{
    //firstly, boxblur src image horizontally
    mediump vec3 sum = texture2D(inputImageTexture2, textureCoordinate).rgb;
    sum += texture2D(inputImageTexture2, texBlurShift1.xy).rgb;
    sum += texture2D(inputImageTexture2, texBlurShift1.zw).rgb;
    sum += texture2D(inputImageTexture2, texBlurShift2.xy).rgb;
    sum += texture2D(inputImageTexture2, texBlurShift2.zw).rgb;
    sum += texture2D(inputImageTexture2, texBlurShift3.xy).rgb;
    sum += texture2D(inputImageTexture2, texBlurShift3.zw).rgb;
    sum += texture2D(inputImageTexture2, texBlurShift4.xy).rgb;
    sum += texture2D(inputImageTexture2, texBlurShift4.zw).rgb;
    
    mediump vec3 meanColor = sum * 0.1111;
    
    lowp vec3 inColor = texture2D(inputImageTexture, textureCoordinate).rgb;
    
    highp vec3 diffColor = (inColor - meanColor) * diffFactor;
    diffColor = min(diffColor * diffColor, 1.0);
    
    gl_FragColor = vec4(meanColor, (diffColor.r + diffColor.g + diffColor.b) * 0.3333);
}
