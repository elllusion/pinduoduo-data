(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[51],{Jo5p:function(e,n,i){"use strict";i.r(n);var t=i("lSNA"),o=i.n(t);!function(e,n){"function"==typeof define&&i("PDX0")?define(function(){return n(e)}):n(e,!0)}(window,function(e,n){function i(n,i,t){e.WeixinJSBridge?WeixinJSBridge.invoke(n,r(i),function(e){c(n,e,t)}):d(n,t)}function t(n,i,t){e.WeixinJSBridge?WeixinJSBridge.on(n,function(e){t&&t.trigger&&t.trigger(e),c(n,e,i)}):d(n,t||i)}function r(e){return(e=e||{}).appId=x.appId,e.verifyAppId=x.appId,e.verifySignType="sha1",e.verifyTimestamp=x.timestamp+"",e.verifyNonceStr=x.nonceStr,e.verifySignature=x.signature,e}function a(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function c(e,n,i){"openEnterpriseChat"==e&&(n.errCode=n.err_code),delete n.err_code,delete n.err_desc,delete n.err_detail;var t=n.errMsg;t||(t=n.err_msg,delete n.err_msg,t=function(e,n){var i=e,t=m[i];t&&(i=t);var o="ok";if(n){var r=n.indexOf(":");"confirm"==(o=n.substring(r+1))&&(o="ok"),"failed"==o&&(o="fail"),-1!=o.indexOf("failed_")&&(o=o.substring(7)),-1!=o.indexOf("fail_")&&(o=o.substring(5)),"access denied"!=(o=(o=o.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=o||(o="permission denied"),"config"==i&&"function not exist"==o&&(o="ok"),""==o&&(o="fail")}return n=i+":"+o}(e,t),n.errMsg=t),(i=i||{})._complete&&(i._complete(n),delete i._complete),t=n.errMsg||"",x.debug&&!i.isInnerInvoke&&alert(JSON.stringify(n));var o=t.indexOf(":");switch(t.substring(o+1)){case"ok":i.success&&i.success(n);break;case"cancel":i.cancel&&i.cancel(n);break;default:i.fail&&i.fail(n)}i.complete&&i.complete(n)}function s(e){if(e){for(var n=0,i=e.length;n<i;++n){var t=e[n],o=g[t];o&&(e[n]=o)}return e}}function d(e,n){if(!(!x.debug||n&&n.isInnerInvoke)){var i=m[e];i&&(e=i),n&&n._complete&&delete n._complete,console.log('"'+e+'",',n||"")}}function u(){return(new Date).getTime()}function l(n){w&&(e.WeixinJSBridge?n():h.addEventListener&&h.addEventListener("WeixinJSBridgeReady",n,!1)&&h.addEventListener("QQJSBridgeReady",n,!1))}function p(){E.invoke||(E.invoke=function(n,i,t){e.WeixinJSBridge&&WeixinJSBridge.invoke(n,r(i),t)},E.on=function(n,i){e.WeixinJSBridge&&WeixinJSBridge.on(n,i)})}if(!e.jWeixin){var f,g={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},m=function(){var e={};for(var n in g)e[g[n]]=n;return e}(),h=e.document,v=h.title,S=navigator.userAgent.toLowerCase(),I=navigator.platform.toLowerCase(),_=!(!I.match("mac")&&!I.match("win")),y=-1!=S.indexOf("wxdebugger"),w=!0,k=-1!=S.indexOf("android"),T=-1!=S.indexOf("iphone")||-1!=S.indexOf("ipad"),M=function(){var e=S.match(/micromessenger\/(\d+\.\d+\.\d+)/)||S.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),A={initStartTime:u(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},P={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:T?1:k?2:-1,clientVersion:M,url:encodeURIComponent(location.href)},x={},C={_completes:[]},V={state:0,data:{}};l(function(){A.initEndTime=u()});var L=!1,B=[],E=(f={config:function(e){x=e,d("config",e);var n=!1!==x.check;l(function(){if(n)i(g.config,{verifyJsApiList:s(x.jsApiList)},function(){C._complete=function(e){A.preVerifyEndTime=u(),V.state=1,V.data=e},C.success=function(e){P.isPreVerifyOk=0},C.fail=function(e){C._fail?C._fail(e):V.state=-1};var e=C._completes;return e.push(function(){!function(e){if(!(_||y||x.debug||M<"6.0.2"||P.systemType<0)){var n=new Image;P.appId=x.appId,P.initTime=A.initEndTime-A.initStartTime,P.preVerifyTime=A.preVerifyEndTime-A.preVerifyStartTime,E.getNetworkType({isInnerInvoke:!0,success:function(e){P.networkType=e.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+P.version+"&o="+P.isPreVerifyOk+"&s="+P.systemType+"&c="+P.clientVersion+"&a="+P.appId+"&n="+P.networkType+"&i="+P.initTime+"&p="+P.preVerifyTime+"&u="+P.url;n.src=i}})}}()}),C.complete=function(n){for(var i=0,t=e.length;i<t;++i)e[i]();C._completes=[]},C}()),A.preVerifyStartTime=u();else{V.state=1;for(var e=C._completes,t=0,o=e.length;t<o;++t)e[t]();C._completes=[]}}),p()},ready:function(e){0!=V.state?e():(C._completes.push(e),!w&&x.debug&&e())},error:function(e){M<"6.0.2"||(-1==V.state?e(V.data):C._fail=e)},checkJsApi:function(e){i("checkJsApi",{jsApiList:s(e.jsApiList)},(e._complete=function(e){if(k){var n=e.checkResult;n&&(e.checkResult=JSON.parse(n))}e=function(e){var n=e.checkResult;for(var i in n){var t=m[i];t&&(n[t]=n[i],delete n[i])}return e}(e)},e))},onMenuShareTimeline:function(e){t(g.onMenuShareTimeline,{complete:function(){i("shareTimeline",{title:e.title||v,desc:e.title||v,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){t(g.onMenuShareAppMessage,{complete:function(n){"favorite"===n.scene?i("sendAppMessage",{title:e.title||v,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):i("sendAppMessage",{title:e.title||v,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){t(g.onMenuShareQQ,{complete:function(){i("shareQQ",{title:e.title||v,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){t(g.onMenuShareWeibo,{complete:function(){i("shareWeiboApp",{title:e.title||v,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){t(g.onMenuShareQZone,{complete:function(){i("shareQZone",{title:e.title||v,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){i("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){i("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){i("startRecord",{},e)},stopRecord:function(e){i("stopRecord",{},e)},onVoiceRecordEnd:function(e){t("onVoiceRecordEnd",e)},playVoice:function(e){i("playVoice",{localId:e.localId},e)},pauseVoice:function(e){i("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){i("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){t("onVoicePlayEnd",e)},uploadVoice:function(e){i("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){i("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){i("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){i("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(k){var n=e.localIds;try{n&&(e.localIds=JSON.parse(n))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){i(g.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){i("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){i("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===L?(L=!0,i("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(L=!1,B.length>0){var n=B.shift();wx.getLocalImgData(n)}},e))):B.push(e)},getNetworkType:function(e){i("getNetworkType",{},(e._complete=function(e){e=function(e){var n=e.errMsg;e.errMsg="getNetworkType:ok";e.subtype;if(e.networkType)return e;var i=n.indexOf(":"),t=n.substring(i+1);switch(t){case"wifi":case"edge":case"wwan":e.networkType=t;break;default:e.errMsg="getNetworkType:fail"}return e}(e)},e))},openLocation:function(e){i("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)}},o()(f,"getLocation",function(e){e=e||{},i(g.getLocation,{type:e.type||"wgs84"},(e._complete=function(e){delete e.type},e))}),o()(f,"hideOptionMenu",function(e){i("hideOptionMenu",{},e)}),o()(f,"showOptionMenu",function(e){i("showOptionMenu",{},e)}),o()(f,"closeWindow",function(e){i("closeWindow",{},e=e||{})}),o()(f,"hideMenuItems",function(e){i("hideMenuItems",{menuList:e.menuList},e)}),o()(f,"showMenuItems",function(e){i("showMenuItems",{menuList:e.menuList},e)}),o()(f,"hideAllNonBaseMenuItem",function(e){i("hideAllNonBaseMenuItem",{},e)}),o()(f,"showAllNonBaseMenuItem",function(e){i("showAllNonBaseMenuItem",{},e)}),o()(f,"scanQRCode",function(e){i("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(T){var n=e.resultStr;if(n){var i=JSON.parse(n);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e))}),o()(f,"openAddress",function(e){i(g.openAddress,{},(e._complete=function(e){e=function(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}(e)},e))}),o()(f,"openProductSpecificView",function(e){i(g.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)}),o()(f,"addCard",function(e){for(var n=e.cardList,t=[],o=0,r=n.length;o<r;++o){var a=n[o],c={card_id:a.cardId,card_ext:a.cardExt};t.push(c)}i(g.addCard,{card_list:t},(e._complete=function(e){var n=e.card_list;if(n){for(var i=0,t=(n=JSON.parse(n)).length;i<t;++i){var o=n[i];o.cardId=o.card_id,o.cardExt=o.card_ext,o.isSuccess=!!o.is_succ,delete o.card_id,delete o.card_ext,delete o.is_succ}e.cardList=n,delete e.card_list}},e))}),o()(f,"chooseCard",function(e){i("chooseCard",{app_id:x.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))}),o()(f,"openCard",function(e){for(var n=e.cardList,t=[],o=0,r=n.length;o<r;++o){var a=n[o],c={card_id:a.cardId,code:a.code};t.push(c)}i(g.openCard,{card_list:t},e)}),o()(f,"consumeAndShareCard",function(e){i(g.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)}),o()(f,"chooseWXPay",function(e){i(g.chooseWXPay,a(e),e)}),o()(f,"openEnterpriseRedPacket",function(e){i(g.openEnterpriseRedPacket,a(e),e)}),o()(f,"startSearchBeacons",function(e){i(g.startSearchBeacons,{ticket:e.ticket},e)}),o()(f,"stopSearchBeacons",function(e){i(g.stopSearchBeacons,{},e)}),o()(f,"onSearchBeacons",function(e){t(g.onSearchBeacons,e)}),o()(f,"openEnterpriseChat",function(e){i("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)}),o()(f,"launchMiniProgram",function(e){i("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&e.length>0){var n=e.split("?")[0],i=e.split("?")[1];return n+=".html",void 0!==i?n+"?"+i:n}}(e.path),envVersion:e.envVersion},e)}),o()(f,"miniProgram",{navigateBack:function(e){e=e||{},l(function(){i("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)})},navigateTo:function(e){l(function(){i("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)})},redirectTo:function(e){l(function(){i("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)})},switchTab:function(e){l(function(){i("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)})},reLaunch:function(e){l(function(){i("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)})},postMessage:function(e){l(function(){i("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)})},getEnv:function(n){l(function(){n({miniprogram:"miniprogram"===e.__wxjs_environment})})}}),f),O=1,N={};return h.addEventListener("error",function(e){if(!k){var n=e.target,i=n.tagName,t=n.src;if(("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i)&&-1!=t.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var o=n["wx-id"];if(o||(o=O++,n["wx-id"]=o),N[o])return;N[o]=!0,wx.ready(function(){wx.getLocalImgData({localId:t,success:function(e){n.src=e.localData}})})}}},!0),h.addEventListener("load",function(e){if(!k){var n=e.target,i=n.tagName;if(n.src,"IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){var t=n["wx-id"];t&&(N[t]=!1)}}},!0),E&&(e.qq=e.wx=e.jWeixin=E),E}})},PDX0:function(e,n){(function(n){e.exports=n}).call(this,{})}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-eve-spike/js/51_f7c8d475f28efc9291b4.js.map