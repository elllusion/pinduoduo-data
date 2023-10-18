precision mediump float;
const float PI = 3.14;
const float E = 2.718;
const int MIN_SAMPLES = 1;
const int MAX_SAMPLES = 32;

uniform sampler2D inputImageTexture;
uniform vec2 inputImageTextureSize;


uniform float degree; // 0.0 ~ 50.0
uniform int origin; // 1.horizontal+vertical 2.horizontal 3.vertical

varying vec2 textureCoordinate;

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
            vec2 uv = textureCoordinate + vec2(offset / float(inputImageTextureSize.x), 0.0);
            if (uv.x >= 0.0 && uv.x <= 1.0)
            {
                color += texture2D(inputImageTexture, uv) * gauss;
                sum += gauss;
            }
        }

        // vertical
        if (origin == 1 || origin == 3)
        {
            vec2 uv = textureCoordinate + vec2(0.0, offset / float(inputImageTextureSize.y));
            if (uv.y >= 0.0 && uv.y <= 1.0)
            {
                color += texture2D(inputImageTexture, uv) * gauss;
                sum += gauss;
            }
        }

    }
    color = color / sum;
    gl_FragColor = color;
}
