precision highp float;
varying vec2 textureCoordinate;

uniform sampler2D inputImageTexture;
uniform sampler2D inputImageTexture2;

uniform float progress;

void main() 
{
    vec4 imageColor1 = texture2D(inputImageTexture, textureCoordinate);
    vec4 imageColor2 = texture2D(inputImageTexture2, textureCoordinate);
    
    gl_FragColor = mix(imageColor1, imageColor2, progress);
}
