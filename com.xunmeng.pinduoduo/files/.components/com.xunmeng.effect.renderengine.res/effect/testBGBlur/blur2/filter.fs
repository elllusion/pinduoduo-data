precision highp float;
varying vec2 textureCoordinate;
uniform sampler2D inputImageTexture;
uniform sampler2D inputImageTexture2;
uniform vec2 inputImageTextureSize;
uniform int hasMask;

float CalcGauss( float x, float y, float sigma)
{
    if ( sigma <= 0.0 )
        return 0.0;
    return exp( -((x*x+y*y) / (2.0 * sigma*sigma))) /(2.0 * 3.14157*sigma*sigma);
}


void main()
{
    float sum = 0.0;
    vec2 s = vec2(1.0,1.0)/inputImageTextureSize;
    int w = 11;
    int half_w = w/2;
    float weight = 1.0/float(w*w);
    for ( int i = -half_w; i <= half_w; ++ i){
        for (int j= -half_w; j <= half_w; ++j) {
            float texColor = texture2D(inputImageTexture2, textureCoordinate + s * vec2(i,j)).a;
            sum += texColor * weight;
        }
    }
//    float a = texture2D(inputImageTexture2, textureCoordinate).a;
    gl_FragColor = vec4(sum,sum,sum,1.0);
//    gl_FragColor = vec4(a,a,a,1.0);
}
