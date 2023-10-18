precision highp float;

attribute vec3 position;
attribute vec2 texcoord;
uniform mat4 matrixMVP;
varying vec2 ftexcoord;

void main() {
    gl_Position = matrixMVP * vec4(position, 1.0);
    ftexcoord = texcoord;
}
