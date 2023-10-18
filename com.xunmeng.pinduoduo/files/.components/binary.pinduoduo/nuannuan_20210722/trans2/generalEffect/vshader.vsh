//precision lowp float;

attribute vec3 attPosition;
attribute vec2 attUV;

varying vec2 textureCoordinate;
varying vec2 alphaUV;

void main() {
    textureCoordinate = attUV;
    alphaUV = vec2(attUV.x * 1.0/3.0 + 2.0/3.0, attUV.y);
    gl_Position = vec4(attPosition, 1.0);
}
