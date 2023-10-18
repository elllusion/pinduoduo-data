precision mediump float;

varying vec2 texCoordinate;

uniform sampler2D image1;
uniform sampler2D image2;
uniform sampler2D image3;
uniform sampler2D image4;
uniform sampler2D image5;
uniform sampler2D image6;

uniform sampler2D video;

uniform vec2 imageSize1;
uniform vec2 imageSize2;
uniform vec2 imageSize3;
uniform vec2 imageSize4;
uniform vec2 imageSize5;
uniform vec2 imageSize6;

uniform vec2 position;
uniform vec2 scale;
uniform vec2 ratio;
uniform float iTime;//range 0~1
uniform float scaleMotion;//range 0~1
uniform float alphaMotion;//range 0~1
uniform float rotate;//AE中的角度大于0为顺时针
uniform vec2 rotateCenter;//旋转中心

vec4 imageFlow() {

         float aspect =0.5625; // 720.0/1280.0
         float realImageUVHeight[6];
         realImageUVHeight[0] = imageSize1.y/imageSize1.x * aspect;
         realImageUVHeight[1] = imageSize2.y/imageSize2.x * aspect;
         realImageUVHeight[2] = imageSize3.y/imageSize3.x * aspect;
         realImageUVHeight[3] = imageSize4.y/imageSize4.x * aspect;
         realImageUVHeight[4] = imageSize5.y/imageSize5.x * aspect;
         realImageUVHeight[5] = imageSize6.y/imageSize6.x * aspect;

         float blendHeightArray[5];
         float blendHeight = 0.1;
         float posBias = 0.0;
         for(int i = 0; i < 5; ++i)
         {
            float checkBlendHeight = step(blendHeight, realImageUVHeight[i] * 0.3);
            blendHeightArray[i] = blendHeight * checkBlendHeight + realImageUVHeight[i] * 0.25 * (1.0 - checkBlendHeight);
         }

         float realHeight1 = realImageUVHeight[0];
         vec2 imageUV1 = texCoordinate;
         imageUV1.y += posBias;
         imageUV1.y = 1.0/realImageUVHeight[0] * imageUV1.y;
         float flag2 = step(0.0, imageUV1.x) * step(imageUV1.x, 1.0) * step(0.0, imageUV1.y) * step(imageUV1.y, 1.0);
         vec4 imageColor1 = flag2 * texture2D(image1,imageUV1);
      
         float offset = realHeight1 - blendHeightArray[0];
         float realHeight2 = realImageUVHeight[1];
         vec2 imageUV2 = texCoordinate;
         imageUV2.y = 1.0/realHeight2 * (imageUV2.y + posBias - offset);
         float flag3 = step(0.0, imageUV2.x) * step(imageUV2.x, 1.0) * step(0.0, imageUV2.y) * step(imageUV2.y, 1.0);
         vec4 imageColor2 = flag3 * texture2D(image2,imageUV2);
         
         offset += realHeight2 - blendHeightArray[1];
         float realHeight3 = realImageUVHeight[2];
         vec2 imageUV3 = texCoordinate;
         imageUV3.y = 1.0/realHeight3 * (imageUV3.y + posBias - offset);
         float flag4 = step(0.0, imageUV3.x) * step(imageUV3.x, 1.0) * step(0.0, imageUV3.y) * step(imageUV3.y, 1.0);
         vec4 imageColor3 = flag4 * texture2D(image3,imageUV3);
         
         offset += realHeight3 - blendHeightArray[2];
         float realHeight4 = realImageUVHeight[3];
         vec2 imageUV4 = texCoordinate;
         imageUV4.y = 1.0/realHeight4 * (imageUV4.y + posBias - offset);
         float flag5 = step(0.0, imageUV4.x) * step(imageUV4.x, 1.0) * step(0.0, imageUV4.y) * step(imageUV4.y, 1.0);
         vec4 imageColor4 = flag5 * texture2D(image4,imageUV4);
      
         offset += realHeight4 - blendHeightArray[3];
         float realHeight5 = realImageUVHeight[4];
         vec2 imageUV5 = texCoordinate;
         imageUV5.y = 1.0/realHeight5 * (imageUV5.y + posBias - offset);
         float flag6 = step(0.0, imageUV5.x) * step(imageUV5.x, 1.0) * step(0.0, imageUV5.y) * step(imageUV5.y, 1.0);
         vec4 imageColor5 = flag6 * texture2D(image5,imageUV5);
      
         offset += realHeight5 - blendHeightArray[4];
         float realHeight6 = realImageUVHeight[5];
         vec2 imageUV6 = texCoordinate;
         imageUV6.y = 1.0/realHeight6 * (imageUV6.y + posBias - offset);
         float flag7 = step(0.0, imageUV6.x) * step(imageUV6.x, 1.0) * step(0.0, imageUV6.y) * step(imageUV6.y, 1.0);
         vec4 imageColor6 = flag7 * texture2D(image6,imageUV6);
         
         vec4 imageColor = imageColor1;
         //处理混合区域
         float range = 0.12* (1.0 - sin(texCoordinate.x*3.1415927)*0.1);

         float limit = blendHeightArray[0]*(1.0/realHeight2);
         if (imageUV2.y >= 0.0 && imageUV2.y <= limit + 0.5 * blendHeightArray[0]) {
            float alpha = min(1.0,max(0.0,(imageUV1.y-(1.0 - range))/range));
            imageColor = mix(imageColor1,imageColor2,alpha);
            return imageColor;
         }
         
         limit = blendHeightArray[1]*(1.0/realHeight3);
         if (imageUV3.y >= 0.0 && imageUV3.y <= limit + 0.5 * blendHeightArray[1]) {
            float alpha = min(1.0,max(0.0,(imageUV2.y-(1.0 - range))/range));
            imageColor = mix(imageColor2,imageColor3,alpha);
            return imageColor;
         }
         
         limit = blendHeightArray[2]*(1.0/realHeight4);
         if (imageUV4.y >= 0.0 && imageUV4.y <= limit + 0.5 * blendHeightArray[2]) {
            float alpha = min(1.0,max(0.0,(imageUV3.y-(1.0 - range))/range));
            imageColor = mix(imageColor3,imageColor4,alpha);
            return imageColor;
         }
      
         limit = blendHeightArray[3]*(1.0/realHeight5);
         if (imageUV5.y >= 0.0 && imageUV5.y <= limit + 0.5 * blendHeightArray[3]) {
            float alpha = min(1.0,max(0.0,(imageUV4.y-(1.0 - range))/range));
            imageColor = mix(imageColor4,imageColor5,alpha);
            return imageColor;
         }
      
         limit = blendHeightArray[4]*(1.0/realHeight6);
         if (imageUV6.y >= 0.0 && imageUV6.y <= limit + 0.5 * blendHeightArray[4]) {
            float alpha = min(1.0,max(0.0,(imageUV5.y-(1.0 - range))/range));
            imageColor = mix(imageColor5,imageColor6,alpha);
            return imageColor;
         }
      
         float flag9 = step(abs(imageColor.w), 0.000001);
         imageColor = imageColor * (1.0 - flag9) + flag9 * imageColor2;
         flag9 = step(abs(imageColor.w), 0.000001);
         imageColor = imageColor * (1.0 - flag9) + flag9 * imageColor3;
         flag9 = step(abs(imageColor.w), 0.000001);
         imageColor = imageColor * (1.0 - flag9) + flag9 * imageColor4;
         flag9 = step(abs(imageColor.w), 0.000001);
         imageColor = imageColor * (1.0 - flag9) + flag9 * imageColor5;
         flag9 = step(abs(imageColor.w), 0.000001);
         imageColor = imageColor * (1.0 - flag9) + flag9 * imageColor6;

         return imageColor;
}

void main() {
   gl_FragColor = imageFlow();
}