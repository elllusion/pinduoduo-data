#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

attribute vec3 attPosition;
attribute vec2 attUV;

varying vec2 textureCoordinate;
varying vec2 alphaUV;

void main() {
    textureCoordinate = attUV;
    alphaUV = vec2((attUV.x + 2.0) * 0.33333333333, attUV.y);
    gl_Position = vec4(attPosition, 1.0);
}
