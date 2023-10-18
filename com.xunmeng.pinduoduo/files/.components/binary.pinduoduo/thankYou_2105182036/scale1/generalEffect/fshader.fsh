#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform sampler2D image0;

varying vec2 texCoordinate;
uniform float scale;

void main() 
{
    gl_FragColor = texture2D(image0, (texCoordinate - 0.5)/scale + 0.5);
}








































