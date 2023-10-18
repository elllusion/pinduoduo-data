precision highp float;

uniform sampler2D image0;
varying vec2 imageUV;
uniform float targetImageRatio;
void main() 
{
    float scale = 1.7777777778 * targetImageRatio;
    
    float u = imageUV.x;
    float v = ((imageUV.y - 0.5)/scale + 0.5);
    
    vec2 texCoordinate = vec2(u,v);
    
    vec3 imageColor = texture2D(image0, texCoordinate).rgb;
    gl_FragColor = vec4(imageColor, 1.0);
}
