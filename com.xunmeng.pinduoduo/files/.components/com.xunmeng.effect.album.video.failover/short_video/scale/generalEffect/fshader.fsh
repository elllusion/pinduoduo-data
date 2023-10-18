precision highp float;

uniform sampler2D image0;

varying vec2 texCoordinate;
uniform float scale;

void main() {
    gl_FragColor = texture2D(image0, (texCoordinate - 0.5)/scale + 0.5);;
}








































