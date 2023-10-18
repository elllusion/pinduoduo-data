precision highp float;

uniform sampler2D image0;
varying vec2 imageUV;

void main() {
    vec3 color = texture2D(image0, imageUV).rgb;
    gl_FragColor = vec4(color, 1.0);
}
