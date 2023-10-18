precision highp float;

uniform sampler2D image0;
varying vec2 imageUV;

void main() {
    gl_FragColor = texture2D(image0, imageUV);
}
