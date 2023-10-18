//precision lowp float;

attribute vec3 attPosition;
attribute vec2 attUV;

varying vec2 imageUV;
varying vec2 videoUV;
varying vec2 alphaUV;

void main() {
    imageUV = attUV;
    videoUV = vec2(attUV.x * 1.0/2.0, attUV.y);
    alphaUV = vec2(attUV.x * 1.0/2.0 + 1.0/2.0, attUV.y);
    gl_Position = vec4(attPosition, 1.0);
}
