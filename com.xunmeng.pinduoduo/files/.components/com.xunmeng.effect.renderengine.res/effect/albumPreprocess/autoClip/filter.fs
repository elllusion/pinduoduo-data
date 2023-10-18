precision mediump float;
varying vec2 textureCoordinate;

uniform sampler2D inputImageTexture;//blur
uniform sampler2D inputImageTexture2;//原图

//uniform vec2 imageOriginSize;//原图尺寸
//uniform vec4 faceRect;
//uniform vec4 safeArea;

uniform float imageOriginSize[2];
uniform float faceRect[4];
uniform float safeArea[4];

//vec4 faceRect = vec4(0.0,0.0,1.0,0.5);
//vec4 safeArea = vec4(0.0,0.3,1.0,0.8);
//vec2 imageOriginSize = vec2(720.0, 1280.0);

 vec4 getBlurColor(vec2 uv){
     vec2 u_resolution = vec2(720.0, 1280.0);
     float widthScale = u_resolution.x*(1.0/imageOriginSize[0]);
     float heightScale = u_resolution.y*(1.0/imageOriginSize[1]);
     if (widthScale >= heightScale) {
         float realWidth = u_resolution.x;
         float realHeight = u_resolution.y*widthScale;
         float ndcHeight = realHeight/u_resolution.y;
         float ndcBottom = 0.5 - ndcHeight/2.0;
         float ndcTop = 0.5 + ndcHeight/2.0;
         float tempY = uv.y;
         float coordY = (tempY - ndcBottom)*(1.0/ndcHeight);
         return texture2D(inputImageTexture,vec2(uv.x,coordY));
         
     } else {
         float realHeight = u_resolution.y;
         float realWidth = u_resolution.x*heightScale;
         float ndcWidth = realWidth / u_resolution.x;
         float ndcLeft = 0.5 - ndcWidth/2.0;
         float ndcRight = 0.5 + ndcWidth/2.0;
         float coordX = (uv.x - ndcLeft)*(1.0/ndcWidth);
         return texture2D(inputImageTexture, vec2(coordX,uv.y));
     }
 }

 vec4 getImageColor(vec2 uv){
     vec2 u_resolution = vec2(720.0, 1280.0);
     vec2 faceCenter = vec2((faceRect[2] + faceRect[0])/2.0,(faceRect[3] + faceRect[1])/2.0);
     vec2 safeCenter = vec2((safeArea[2] + safeArea[0])/2.0,(safeArea[3] + safeArea[1])/2.0);
     
     float safeWidth = (safeArea[2] - safeArea[0])*u_resolution[0];
     float realImageWidth = safeWidth;
     float scale =realImageWidth/(1.0 * imageOriginSize[0]);
     float realHeight = scale * imageOriginSize[1];
     
     float ndcWidth = safeArea[2] - safeArea[0];
     float ndcHeight = realHeight/u_resolution[1];
     
     float offsetX = safeCenter[0] - faceCenter[0];
     offsetX = 0.0;
     float offsetY = safeCenter[1] - faceCenter[1];
     
     float scaleWidthRealCompareResolution = realImageWidth * 1.0/u_resolution[0];
     float scaleHeightRealCompareResolution = realHeight * 1.0/u_resolution[1];
     
     float minY = safeCenter[1] - ndcHeight/2.0 + offsetY * scaleHeightRealCompareResolution;
     float maxY = safeCenter[1] + ndcHeight/2.0 + offsetY * scaleHeightRealCompareResolution;
     
     float minX = safeCenter[0] - ndcWidth/2.0 + offsetX * scaleWidthRealCompareResolution;
     float maxX = safeCenter[0] + ndcWidth/2.0 + offsetX * scaleWidthRealCompareResolution;
     
     if (uv.x >= minX && uv.x <= maxX && uv.y >= minY && uv.y <= maxY) {
         float coordX = (uv.x - minX)*(1.0/ndcWidth);
         float coordY = (uv.y - minY)*(1.0/ndcHeight);
         return texture2D(inputImageTexture2,vec2(coordX,coordY));
     }else{
         return getBlurColor(uv);
     }
 }

 void main() {
     vec2 uv = vec2(textureCoordinate.x,textureCoordinate.y);
     vec2 p=uv.xy/vec2(1.0).xy;
     gl_FragColor = getImageColor(p);
     //gl_FragColor = vec4(1.0,0.0,0.0,1.0);
 }
