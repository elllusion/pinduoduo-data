precision highp float;
varying vec2 ftexcoord;
uniform sampler2D texture;

uniform float blurIntensity;//1.0

vec3 rotateBlur(sampler2D tex,vec2 center,vec2 resolution,vec2 curCoord,float intensity)
{
    vec2 dxy = curCoord - center;
    float r = length(dxy);
    float angle = atan(dxy.y,dxy.x);
    int num = 15;

    vec3 color = vec3(0.0);
    float step = 0.01;
    for(int i = 0; i < num; i++)
    {
       angle += (step * intensity);
       
       float  newX = r*cos(angle) + center.x;
       float  newY = r*sin(angle) + center.y;
       newX = abs(newX);
       if(newX > resolution.x)
               newX = resolution.x - mod(newX,resolution.x);
       newY = abs(newY);
       if(newY > resolution.y)
               newY = resolution.y - mod(newY,resolution.y);

       color += texture2D(tex, vec2(newX, newY)/resolution).rgb;
    }
    color /= float(num);
    return color;
}

void main()
{
    int inputWidth = 720;
    int inputHeight = 960;
    
    vec2 resolution = vec2(inputWidth,inputHeight);
    vec2 rotateCenter = resolution * 0.5;
    vec2 realCoord = ftexcoord * resolution;

    vec3 resultColor = vec3(0.0);
    resultColor = rotateBlur(texture,rotateCenter,resolution,realCoord,blurIntensity);
   
    gl_FragColor = vec4(resultColor,1.0);
}
