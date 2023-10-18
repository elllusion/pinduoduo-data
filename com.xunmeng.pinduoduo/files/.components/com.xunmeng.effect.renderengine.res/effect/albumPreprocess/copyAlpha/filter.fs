precision mediump float;
varying vec2 textureCoordinate;

uniform sampler2D inputImageTexture;
uniform sampler2D inputImageTexture2;//原图

void main() {
    
    vec4 color = texture2D(inputImageTexture,textureCoordinate);
    vec4 originColor = texture2D(inputImageTexture2,textureCoordinate);
    
    gl_FragColor = vec4(color.rgb, 1.0)*originColor.a;
}
