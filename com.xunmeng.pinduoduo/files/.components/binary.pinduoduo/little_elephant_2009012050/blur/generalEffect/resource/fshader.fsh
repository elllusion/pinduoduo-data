#define PI 3.14159265359
#define E  2.71828182846
#define MIN_SAMPLES 1
#define MAX_SAMPLES 32

precision mediump float;
uniform sampler2D texture_in;

uniform float degree; // 0.0 ~ 50.0
uniform int origin; // 1.horizontal+vertical 2.horizontal 3.vertical
uniform int textureWidth;
uniform int textureHeight;

varying vec2 ftexcoord;

void main(void) {
    float vDegree = degree / 50.0;
    vec4 color = vec4(0.0, 0.0, 0.0, 0.0);
    float sum = 0.0;
    float sigma = 0.05 + 24.95 * vDegree;
    float sigmaSquared = sigma * sigma;

    int samples = (MIN_SAMPLES + int(ceil(float(MAX_SAMPLES) * vDegree))) * 2 + 1;

    for (int index = 0; index < samples; index++)
    {
        float offset = (float(index)/float(samples-1) - 0.5) * 6.0 * sigma;
        float gauss = 1.0/sqrt(2.0*PI*sigmaSquared) * pow(E, -offset*offset/(2.0*sigmaSquared));

        // horizontal
        if (origin == 1 || origin == 2)
        {
            vec2 uv = ftexcoord + vec2(offset / float(textureWidth), 0.0);
            if (uv.x >= 0.0 && uv.x <= 1.0)
            {
                color += texture2D(texture_in, uv) * gauss;
                sum += gauss;
            }
        }

        // vertical
        if (origin == 1 || origin == 3)
        {
            vec2 uv = ftexcoord + vec2(0.0, offset / float(textureHeight));
            if (uv.y >= 0.0 && uv.y <= 1.0)
            {
                color += texture2D(texture_in, uv) * gauss;
                sum += gauss;
            }
        }

    }
    color = color / sum;
    gl_FragColor = color;
}