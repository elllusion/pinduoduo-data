(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[25],{Jo5p:function(e,n,i){var t,o;o=window,void 0===(t=(()=>((e,n)=>{function i(n,i,t){e.WeixinJSBridge?WeixinJSBridge.invoke(n,o(i),(e=>{c(n,e,t)})):l(n,t)}function t(n,i,t){e.WeixinJSBridge?WeixinJSBridge.on(n,(e=>{t&&t.trigger&&t.trigger(e),c(n,e,i)})):l(n,t||i)}function o(e){return(e=e||{}).appId=V.appId,e.verifyAppId=V.appId,e.verifySignType="sha1",e.verifyTimestamp=V.timestamp+"",e.verifyNonceStr=V.nonceStr,e.verifySignature=V.signature,e}function r(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function a(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}function c(e,n,i){"openEnterpriseChat"==e&&(n.errCode=n.err_code),delete n.err_code,delete n.err_desc,delete n.err_detail;let t=n.errMsg;t||(t=n.err_msg,delete n.err_msg,t=s(e,t),n.errMsg=t),(i=i||{})._complete&&(i._complete(n),delete i._complete),t=n.errMsg||"",V.debug&&!i.isInnerInvoke&&alert(JSON.stringify(n));const o=t.indexOf(":");switch(t.substring(o+1)){case"ok":i.success&&i.success(n);break;case"cancel":i.cancel&&i.cancel(n);break;default:i.fail&&i.fail(n)}i.complete&&i.complete(n)}function s(e,n){let i=e,t=S[i];t&&(i=t);let o="ok";if(n){const e=n.indexOf(":");"confirm"==(o=n.substring(e+1))&&(o="ok"),"failed"==o&&(o="fail"),-1!=o.indexOf("failed_")&&(o=o.substring(7)),-1!=o.indexOf("fail_")&&(o=o.substring(5)),"access denied"!=(o=(o=o.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=o||(o="permission denied"),"config"==i&&"function not exist"==o&&(o="ok"),""==o&&(o="fail")}return i+":"+o}function d(e){if(e){for(let n=0,i=e.length;n<i;++n){const i=e[n],t=h[i];t&&(e[n]=t)}return e}}function l(e,n){if(!(!V.debug||n&&n.isInnerInvoke)){const i=S[e];i&&(e=i),n&&n._complete&&delete n._complete,console.log('"'+e+'",',n||"")}}function u(e){if(!(k||T||V.debug||P<"6.0.2"||C.systemType<0)){const e=new Image;C.appId=V.appId,C.initTime=x.initEndTime-x.initStartTime,C.preVerifyTime=x.preVerifyEndTime-x.preVerifyStartTime,N.getNetworkType({isInnerInvoke:!0,success:function(n){C.networkType=n.networkType;const i="https://open.weixin.qq.com/sdk/report?v="+C.version+"&o="+C.isPreVerifyOk+"&s="+C.systemType+"&c="+C.clientVersion+"&a="+C.appId+"&n="+C.networkType+"&i="+C.initTime+"&p="+C.preVerifyTime+"&u="+C.url;e.src=i}})}}function p(){return(new Date).getTime()}function f(n){v&&(e.WeixinJSBridge?n():I.addEventListener&&I.addEventListener("WeixinJSBridgeReady",n,!1)&&I.addEventListener("QQJSBridgeReady",n,!1))}function g(){N.invoke||(N.invoke=function(n,i,t){e.WeixinJSBridge&&WeixinJSBridge.invoke(n,o(i),t)},N.on=function(n,i){e.WeixinJSBridge&&WeixinJSBridge.on(n,i)})}function m(e){if("string"==typeof e&&e.length>0){let n=e.split("?")[0],i=e.split("?")[1];return n+=".html",void 0!==i?n+"?"+i:n}}if(!e.jWeixin){var h={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},S=function(){const e={};for(const n in h)e[h[n]]=n;return e}(),I=e.document,_=I.title,y=navigator.userAgent.toLowerCase(),w=navigator.platform.toLowerCase(),k=!(!w.match("mac")&&!w.match("win")),T=-1!=y.indexOf("wxdebugger"),v=!0,M=-1!=y.indexOf("android"),A=-1!=y.indexOf("iphone")||-1!=y.indexOf("ipad"),P=function(){const e=y.match(/micromessenger\/(\d+\.\d+\.\d+)/)||y.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),x={initStartTime:p(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},C={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:A?1:M?2:-1,clientVersion:P,url:encodeURIComponent(location.href)},V={},L={_completes:[]},B={state:0,data:{}};f((()=>{x.initEndTime=p()}));var E=!1,O=[],N={config:function(e){V=e,l("config",e);const n=!1!==V.check;f((()=>{if(n)i(h.config,{verifyJsApiList:d(V.jsApiList)},function(){L._complete=function(e){x.preVerifyEndTime=p(),B.state=1,B.data=e},L.success=function(e){C.isPreVerifyOk=0},L.fail=function(e){L._fail?L._fail(e):B.state=-1};const e=L._completes;return e.push((()=>{u()})),L.complete=function(n){for(let i=0,t=e.length;i<t;++i)e[i]();L._completes=[]},L}()),x.preVerifyStartTime=p();else{B.state=1;for(let e=L._completes,n=0,i=e.length;n<i;++n)e[n]();L._completes=[]}})),g()},ready:function(e){0!=B.state?e():(L._completes.push(e),!v&&V.debug&&e())},error:function(e){P<"6.0.2"||(-1==B.state?e(B.data):L._fail=e)},checkJsApi:function(e){const n=function(e){const n=e.checkResult;for(const i in n){const e=S[i];e&&(n[e]=n[i],delete n[i])}return e};i("checkJsApi",{jsApiList:d(e.jsApiList)},(e._complete=function(e){if(M){const n=e.checkResult;n&&(e.checkResult=JSON.parse(n))}e=n(e)},e))},onMenuShareTimeline:function(e){t(h.onMenuShareTimeline,{complete:function(){i("shareTimeline",{title:e.title||_,desc:e.title||_,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){t(h.onMenuShareAppMessage,{complete:function(n){"favorite"===n.scene?i("sendAppMessage",{title:e.title||_,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):i("sendAppMessage",{title:e.title||_,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){t(h.onMenuShareQQ,{complete:function(){i("shareQQ",{title:e.title||_,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){t(h.onMenuShareWeibo,{complete:function(){i("shareWeiboApp",{title:e.title||_,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){t(h.onMenuShareQZone,{complete:function(){i("shareQZone",{title:e.title||_,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){i("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){i("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){i("startRecord",{},e)},stopRecord:function(e){i("stopRecord",{},e)},onVoiceRecordEnd:function(e){t("onVoiceRecordEnd",e)},playVoice:function(e){i("playVoice",{localId:e.localId},e)},pauseVoice:function(e){i("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){i("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){t("onVoicePlayEnd",e)},uploadVoice:function(e){i("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){i("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){i("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){i("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(M){const n=e.localIds;try{n&&(e.localIds=JSON.parse(n))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){i(h.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){i("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){i("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===E?(E=!0,i("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(E=!1,O.length>0){const e=O.shift();wx.getLocalImgData(e)}},e))):O.push(e)},getNetworkType:function(e){const n=function(e){const n=e.errMsg;if(e.errMsg="getNetworkType:ok",e.subtype,e.networkType)return e;{const i=n.indexOf(":"),t=n.substring(i+1);switch(t){case"wifi":case"edge":case"wwan":e.networkType=t;break;default:e.errMsg="getNetworkType:fail"}}return e};i("getNetworkType",{},(e._complete=function(e){e=n(e)},e))},openLocation:function(e){i("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},i(h.getLocation,{type:e.type||"wgs84"},(e._complete=function(e){delete e.type},e))},hideOptionMenu:function(e){i("hideOptionMenu",{},e)},showOptionMenu:function(e){i("showOptionMenu",{},e)},closeWindow:function(e){i("closeWindow",{},e=e||{})},hideMenuItems:function(e){i("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){i("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){i("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){i("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){i("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(A){const n=e.resultStr;if(n){const i=JSON.parse(n);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e))},openAddress:function(e){i(h.openAddress,{},(e._complete=function(e){e=a(e)},e))},openProductSpecificView:function(e){i(h.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var n=e.cardList,t=[],o=0,r=n.length;o<r;++o){const e=n[o],i={card_id:e.cardId,card_ext:e.cardExt};t.push(i)}i(h.addCard,{card_list:t},(e._complete=function(e){let n=e.card_list;if(n){for(let e=0,i=(n=JSON.parse(n)).length;e<i;++e){const i=n[e];i.cardId=i.card_id,i.cardExt=i.card_ext,i.isSuccess=!!i.is_succ,delete i.card_id,delete i.card_ext,delete i.is_succ}e.cardList=n,delete e.card_list}},e))},chooseCard:function(e){i("chooseCard",{app_id:V.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))},openCard:function(e){for(var n=e.cardList,t=[],o=0,r=n.length;o<r;++o){const e=n[o],i={card_id:e.cardId,code:e.code};t.push(i)}i(h.openCard,{card_list:t},e)},consumeAndShareCard:function(e){i(h.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){i(h.chooseWXPay,r(e),e)},openEnterpriseRedPacket:function(e){i(h.openEnterpriseRedPacket,r(e),e)},startSearchBeacons:function(e){i(h.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){i(h.stopSearchBeacons,{},e)},onSearchBeacons:function(e){t(h.onSearchBeacons,e)},openEnterpriseChat:function(e){i("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)},launchMiniProgram:function(e){i("launchMiniProgram",{targetAppId:e.targetAppId,path:m(e.path),envVersion:e.envVersion},e)},miniProgram:{navigateBack:function(e){e=e||{},f((()=>{i("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)}))},navigateTo:function(e){f((()=>{i("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)}))},redirectTo:function(e){f((()=>{i("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)}))},switchTab:function(e){f((()=>{i("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)}))},reLaunch:function(e){f((()=>{i("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)}))},postMessage:function(e){f((()=>{i("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)}))},getEnv:function(n){f((()=>{n({miniprogram:"miniprogram"===e.__wxjs_environment})}))}}},b=1,R={};return I.addEventListener("error",(e=>{if(!M){const n=e.target,i=n.tagName,t=n.src;if(("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i)&&-1!=t.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();let i=n["wx-id"];if(i||(i=b++,n["wx-id"]=i),R[i])return;R[i]=!0,wx.ready((()=>{wx.getLocalImgData({localId:t,success:function(e){n.src=e.localData}})}))}}}),!0),I.addEventListener("load",(e=>{if(!M){const n=e.target,i=n.tagName;if(n.src,"IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){const e=n["wx-id"];e&&(R[e]=!1)}}}),!0),N&&(e.qq=e.wx=e.jWeixin=N),N}})(o)).call(n,i,n,e))||(e.exports=t)}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-best-goods/js/25_f689dfc7dc13786cd3d2.module.js.map