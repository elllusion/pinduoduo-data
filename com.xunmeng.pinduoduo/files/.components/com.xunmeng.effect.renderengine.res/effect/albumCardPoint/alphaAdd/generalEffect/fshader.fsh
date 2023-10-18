precision highp float;

uniform sampler2D image0;
uniform sampler2D video;
uniform float mixturePercent;

varying vec2 texCoordinate;

void main()
{
    vec4 imageColor = texture2D(image0, texCoordinate);
    vec4 videoColor = texture2D(video, texCoordinate);
    
    gl_FragColor = vec4(imageColor.rgb + videoColor.rgb * videoColor.a * mixturePercent, imageColor.a);
}
