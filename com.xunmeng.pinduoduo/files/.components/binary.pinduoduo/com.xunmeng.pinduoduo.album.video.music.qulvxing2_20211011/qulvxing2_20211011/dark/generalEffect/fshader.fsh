precision highp float;

uniform sampler2D image0;

varying vec2 texCoordinate;
uniform float intensity;

void main() 
{
    vec4 color0 = texture2D(image0, texCoordinate);
    color0.r *= (1. - intensity);
    color0.g *= (1. - intensity);
    color0.b *= (1. - intensity);
    gl_FragColor = color0;
}








































