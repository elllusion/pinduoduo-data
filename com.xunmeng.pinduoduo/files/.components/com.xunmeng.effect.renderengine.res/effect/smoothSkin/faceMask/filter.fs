precision mediump float;
uniform sampler2D faceMaskTexture;
uniform sampler2D shadowMaskTexture;

varying highp vec2 textureCoordinate;



void main()
{
    lowp vec4 faceMaskColor = texture2D(faceMaskTexture, textureCoordinate);
    lowp vec4 shadowMaskColor = texture2D(shadowMaskTexture, textureCoordinate);

    gl_FragColor = vec4(faceMaskColor.rgb,shadowMaskColor.r);
}
