precision mediump float;

uniform sampler2D bg;
uniform sampler2D logo;
varying vec2 imageUV;
uniform vec2 imageSize;

void main() {
    vec2 anchorPoint = vec2(0.5, 0.5);
     
     // 位移
     vec2 uv = imageUV;
     uv -= anchorPoint;
     uv += vec2(0.5, 0.743);
     
     // 缩放
     uv -= anchorPoint;
     uv /= vec2(1.0, 0.5625);
     uv *= vec2(1.0, imageSize.x/imageSize.y);// imageW/H
     
//     uv /= 80.0/375.;// 缩放比列
     uv += anchorPoint;
     
     vec4 color;
     if(uv.x > 1.0 || uv.x < 0.0 || uv.y > 1.0 || uv.y < 0.0){
         color = texture2D(bg, imageUV);
     }else{
         color = texture2D(logo, uv);
     }
    gl_FragColor = color;
}
