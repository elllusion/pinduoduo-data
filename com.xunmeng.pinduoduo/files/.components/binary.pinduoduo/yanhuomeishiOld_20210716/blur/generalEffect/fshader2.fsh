#define PI 3.14159265359
#define E  2.71828182846
#define MIN_SAMPLES 1
#define MAX_SAMPLES 16

precision mediump float;
uniform sampler2D texture_in;

uniform float degree; // 0.0 ~ 50.0
uniform float textureWidth;
uniform float textureHeight;

varying vec2 ftexcoord;

void main(void) {
    float vDegree = degree * 0.02;
    vec4 color = vec4(0.0, 0.0, 0.0, 0.0);
    float sum = 0.0;
    float sigma = 0.05 + 24.95 * vDegree;
    float sigmaSquared = sigma * sigma;

    int samples = (MIN_SAMPLES + int(ceil(float(MAX_SAMPLES) * vDegree))) * 2 + 1;

    for (int index = 0; index < samples; index++)
    {
        float offset = (float(index) * 1.0/float(samples-1) - 0.5) * 6.0 * sigma;
        float gauss = 1.0/sqrt(2.0*PI*sigmaSquared) * pow(E, -offset*offset/(2.0*sigmaSquared));

        // vertical
        vec2 uv = ftexcoord + vec2(0.0, offset / textureHeight);
        
        color += step(0.0, uv.y) * step(uv.y, 1.0) * texture2D(texture_in, uv) * gauss;
        sum += step(0.0, uv.y) * step(uv.y, 1.0) * gauss;
    }
    color = color / sum;
    gl_FragColor = color;
}