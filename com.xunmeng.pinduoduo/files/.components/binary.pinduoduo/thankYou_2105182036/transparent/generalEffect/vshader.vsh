#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

attribute vec3 attPosition;
attribute vec2 attUV;
varying vec2 texCoordinate;

void main() {
    texCoordinate = attUV;
    gl_Position = vec4(attPosition, 1.0);
}
