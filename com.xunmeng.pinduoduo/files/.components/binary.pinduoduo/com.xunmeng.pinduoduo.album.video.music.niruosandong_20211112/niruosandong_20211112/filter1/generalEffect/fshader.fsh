#ifdef GL_ES
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
#endif

varying vec2 imageUV;

uniform sampler2D image0;
uniform sampler2D video;

vec4 clut(vec4 textureColor, sampler2D textureLut) {
    float blueColor = textureColor.b * 63.0;
    
    vec2 quad1;
    quad1.y = floor(floor(blueColor) * 0.125); // 1/8
    quad1.x = floor(blueColor) - (quad1.y * 8.0);
    
    vec2 quad2;
    quad2.y = floor(ceil(blueColor) * 0.125);
    quad2.x = ceil(blueColor) - (quad2.y * 8.0);
    
    vec2 texPos1;
    texPos1.x = (quad1.x * 0.125) + 0.0009765625 + ((0.125 - 0.001953125) * textureColor.r);  // 0.5/512 1/512
    texPos1.y = (quad1.y * 0.125) + 0.0009765625 + ((0.125 - 0.001953125) * textureColor.g);
    
    vec2 texPos2;
    texPos2.x = (quad2.x * 0.125) + 0.0009765625 + ((0.125 - 0.001953125) * textureColor.r);
    texPos2.y = (quad2.y * 0.125) + 0.0009765625 + ((0.125 - 0.001953125) * textureColor.g);
    
    vec4 newColor1 = texture2D(textureLut, texPos1);
    vec4 newColor2 = texture2D(textureLut, texPos2);
    
    vec4 newColor = mix(newColor1, newColor2, fract(blueColor));
    return vec4(newColor.rgb, textureColor.w);
}

void main() {
    vec2 uv = imageUV;
    
    vec4 sourceColor = texture2D(image0, fract(uv));
    vec4 destColor = clut(sourceColor,video);
    
    gl_FragColor = sourceColor + (destColor - sourceColor) * 0.5;
}

