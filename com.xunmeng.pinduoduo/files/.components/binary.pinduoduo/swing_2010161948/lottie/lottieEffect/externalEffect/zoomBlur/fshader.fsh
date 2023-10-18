precision highp float;
varying vec2 ftexcoord;
uniform sampler2D texture;

uniform float blurIntensity;//1.46

void main()
{
    float blurSize = blurIntensity;
    vec2 blurCenter = vec2(0.5,0.5);
    highp vec2 samplingOffset = 1.0/100.0 * (blurCenter - ftexcoord) * blurSize;
    
    lowp vec4 fragmentColor = texture2D(texture, ftexcoord) * 0.18;
    fragmentColor += texture2D(texture, ftexcoord + samplingOffset) * 0.15;
    fragmentColor += texture2D(texture, ftexcoord + (2.0 * samplingOffset)) *  0.12;
    fragmentColor += texture2D(texture, ftexcoord + (3.0 * samplingOffset)) * 0.09;
    fragmentColor += texture2D(texture, ftexcoord + (4.0 * samplingOffset)) * 0.05;
    fragmentColor += texture2D(texture, ftexcoord - samplingOffset) * 0.15;
    fragmentColor += texture2D(texture, ftexcoord - (2.0 * samplingOffset)) *  0.12;
    fragmentColor += texture2D(texture, ftexcoord - (3.0 * samplingOffset)) * 0.09;
    fragmentColor += texture2D(texture, ftexcoord - (4.0 * samplingOffset)) * 0.05;
    
    gl_FragColor = fragmentColor;
}
