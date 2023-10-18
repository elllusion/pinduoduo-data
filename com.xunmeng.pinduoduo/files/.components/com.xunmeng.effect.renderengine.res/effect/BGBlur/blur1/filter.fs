precision highp float;
varying vec2 textureCoordinate;
uniform sampler2D inputImageTexture;
uniform vec2 inputImageTextureSize;


float CalcGauss( float x, float y, float sigma)
{
    return exp( -((x*x+y*y) / (2.0 * sigma*sigma))) /(2.0 * 3.14157*sigma*sigma);
}

void main()
{
    float temp = min(inputImageTextureSize.x, inputImageTextureSize.y)*0.02083;
    float kernel_size = float(int(ceil(temp))/2*2+1);
    float sigma = (kernel_size/2.0-1.0)*0.3+0.8;
    
    vec4 gaussCol = vec4(0.0, 0.0, 0.0, 0.0);
    vec2 step = vec2(1.0,1.0)/inputImageTextureSize;
    int half_w = int(kernel_size/2.0);

    for ( int i = -half_w; i <= half_w; ++ i){
        for (int j= -half_w; j <= half_w; ++j) {
            float gw = CalcGauss(float(i), float(j), sigma);
            vec4 texColor    = texture2D(inputImageTexture, textureCoordinate + step * vec2(i,j));
            gaussCol += vec4( texColor.rgb *  gw,  gw);
        }
    }
    
    gaussCol.rgb = clamp( gaussCol.rgb / gaussCol.w, 0.0, 1.0 );
    gl_FragColor = vec4( gaussCol.rgb, 1.0 );

}
