(window.ReadWeJsonp=window.ReadWeJsonp||[]).push([[51],{"Hwvr":function(e,n,t){var i,o,a=t("lSNA");o=window,void 0===(i=function(){return function(e,n){if(!e.jWeixin){var t,i,o={"config":"preVerifyJSAPI","onMenuShareTimeline":"menu:share:timeline","onMenuShareAppMessage":"menu:share:appmessage","onMenuShareQQ":"menu:share:qq","onMenuShareWeibo":"menu:share:weiboApp","onMenuShareQZone":"menu:share:QZone","previewImage":"imagePreview","getLocation":"geoLocation","openProductSpecificView":"openProductViewWithPid","addCard":"batchAddCard","openCard":"batchViewCard","chooseWXPay":"getBrandWCPayRequest","openEnterpriseRedPacket":"getRecevieBizHongBaoRequest","startSearchBeacons":"startMonitoringBeacons","stopSearchBeacons":"stopMonitoringBeacons","onSearchBeacons":"onBeaconsInRange","consumeAndShareCard":"consumedShareCard","openAddress":"editAddress"},r=function(){var e={};for(var n in o)e[o[n]]=n;return e}(),c=e.document,s=c.title,d=navigator.userAgent.toLowerCase(),u=navigator.platform.toLowerCase(),l=!(!u.match("mac")&&!u.match("win")),p=-1!=d.indexOf("wxdebugger"),f=-1!=d.indexOf("micromessenger"),m=-1!=d.indexOf("android"),g=-1!=d.indexOf("iphone")||-1!=d.indexOf("ipad"),h=(i=d.match(/micromessenger\/(\d+\.\d+\.\d+)/)||d.match(/micromessenger\/(\d+\.\d+)/))?i[1]:"",w={"initStartTime":L(),"initEndTime":0,"preVerifyStartTime":0,"preVerifyEndTime":0},S={"version":1,"appId":"","initTime":0,"preVerifyTime":0,"networkType":"","isPreVerifyOk":1,"systemType":g?1:m?2:-1,"clientVersion":h,"url":encodeURIComponent(location.href)},I={},v={"_completes":[]},y={"state":0,"data":{}};O((function(){w.initEndTime=L()}));var T=!1,_=[],k=(a(t={"config":function config(n){B("config",I=n);var t=!1!==I.check;O((function(){if(t)M(o.config,{"verifyJsApiList":C(I.jsApiList),"verifyOpenTagList":C(I.openTagList)},function(){v._complete=function(e){w.preVerifyEndTime=L(),y.state=1,y.data=e},v.success=function(e){S.isPreVerifyOk=0},v.fail=function(e){v._fail?v._fail(e):y.state=-1};var e=v._completes;return e.push((function(){!function(){if(!(l||p||I.debug||h<"6.0.2"||S.systemType<0)){var e=new Image;S.appId=I.appId,S.initTime=w.initEndTime-w.initStartTime,S.preVerifyTime=w.preVerifyEndTime-w.preVerifyStartTime,k.getNetworkType({"isInnerInvoke":!0,"success":function success(n){S.networkType=n.networkType;var t="https://open.weixin.qq.com/sdk/report?v="+S.version+"&o="+S.isPreVerifyOk+"&s="+S.systemType+"&c="+S.clientVersion+"&a="+S.appId+"&n="+S.networkType+"&i="+S.initTime+"&p="+S.preVerifyTime+"&u="+S.url;e.src=t}})}}()})),v.complete=function(n){for(var t=0,i=e.length;t<i;++t)e[t]();v._completes=[]},v}()),w.preVerifyStartTime=L();else{y.state=1;for(var e=v._completes,n=0,i=e.length;n<i;++n)e[n]();v._completes=[]}})),k.invoke||(k.invoke=function(n,t,i){e.WeixinJSBridge&&WeixinJSBridge.invoke(n,x(t),i)},k.on=function(n,t){e.WeixinJSBridge&&WeixinJSBridge.on(n,t)})},"ready":function ready(e){0!=y.state?e():(v._completes.push(e),!f&&I.debug&&e())},"error":function error(e){h<"6.0.2"||(-1==y.state?e(y.data):v._fail=e)},"checkJsApi":function checkJsApi(e){M("checkJsApi",{"jsApiList":C(e.jsApiList)},(e._complete=function(e){if(m){var n=e.checkResult;n&&(e.checkResult=JSON.parse(n))}e=function(e){var n=e.checkResult;for(var t in n){var i=r[t];i&&(n[i]=n[t],delete n[t])}return e}(e)},e))},"onMenuShareTimeline":function onMenuShareTimeline(e){P(o.onMenuShareTimeline,{"complete":function complete(){M("shareTimeline",{"title":e.title||s,"desc":e.title||s,"img_url":e.imgUrl||"","link":e.link||location.href,"type":e.type||"link","data_url":e.dataUrl||""},e)}},e)},"onMenuShareAppMessage":function onMenuShareAppMessage(e){P(o.onMenuShareAppMessage,{"complete":function complete(n){"favorite"===n.scene?M("sendAppMessage",{"title":e.title||s,"desc":e.desc||"","link":e.link||location.href,"img_url":e.imgUrl||"","type":e.type||"link","data_url":e.dataUrl||""}):M("sendAppMessage",{"title":e.title||s,"desc":e.desc||"","link":e.link||location.href,"img_url":e.imgUrl||"","type":e.type||"link","data_url":e.dataUrl||""},e)}},e)},"onMenuShareQQ":function onMenuShareQQ(e){P(o.onMenuShareQQ,{"complete":function complete(){M("shareQQ",{"title":e.title||s,"desc":e.desc||"","img_url":e.imgUrl||"","link":e.link||location.href},e)}},e)},"onMenuShareWeibo":function onMenuShareWeibo(e){P(o.onMenuShareWeibo,{"complete":function complete(){M("shareWeiboApp",{"title":e.title||s,"desc":e.desc||"","img_url":e.imgUrl||"","link":e.link||location.href},e)}},e)},"onMenuShareQZone":function onMenuShareQZone(e){P(o.onMenuShareQZone,{"complete":function complete(){M("shareQZone",{"title":e.title||s,"desc":e.desc||"","img_url":e.imgUrl||"","link":e.link||location.href},e)}},e)},"updateTimelineShareData":function updateTimelineShareData(e){M("updateTimelineShareData",{"title":e.title,"link":e.link,"imgUrl":e.imgUrl},e)},"updateAppMessageShareData":function updateAppMessageShareData(e){M("updateAppMessageShareData",{"title":e.title,"desc":e.desc,"link":e.link,"imgUrl":e.imgUrl},e)},"startRecord":function startRecord(e){M("startRecord",{},e)},"stopRecord":function stopRecord(e){M("stopRecord",{},e)},"onVoiceRecordEnd":function onVoiceRecordEnd(e){P("onVoiceRecordEnd",e)},"playVoice":function playVoice(e){M("playVoice",{"localId":e.localId},e)},"pauseVoice":function pauseVoice(e){M("pauseVoice",{"localId":e.localId},e)},"stopVoice":function stopVoice(e){M("stopVoice",{"localId":e.localId},e)},"onVoicePlayEnd":function onVoicePlayEnd(e){P("onVoicePlayEnd",e)},"uploadVoice":function uploadVoice(e){M("uploadVoice",{"localId":e.localId,"isShowProgressTips":0==e.isShowProgressTips?0:1},e)},"downloadVoice":function downloadVoice(e){M("downloadVoice",{"serverId":e.serverId,"isShowProgressTips":0==e.isShowProgressTips?0:1},e)},"translateVoice":function translateVoice(e){M("translateVoice",{"localId":e.localId,"isShowProgressTips":0==e.isShowProgressTips?0:1},e)},"chooseImage":function chooseImage(e){M("chooseImage",{"scene":"1|2","count":e.count||9,"sizeType":e.sizeType||["original","compressed"],"sourceType":e.sourceType||["album","camera"]},(e._complete=function(e){if(m){var n=e.localIds;try{n&&(e.localIds=JSON.parse(n))}catch(e){}}},e))},"getLocation":function getLocation(e){},"previewImage":function previewImage(e){M(o.previewImage,{"current":e.current,"urls":e.urls},e)},"uploadImage":function uploadImage(e){M("uploadImage",{"localId":e.localId,"isShowProgressTips":0==e.isShowProgressTips?0:1},e)},"downloadImage":function downloadImage(e){M("downloadImage",{"serverId":e.serverId,"isShowProgressTips":0==e.isShowProgressTips?0:1},e)},"getLocalImgData":function getLocalImgData(e){!1===T?(T=!0,M("getLocalImgData",{"localId":e.localId},(e._complete=function(e){if(T=!1,0<_.length){var n=_.shift();wx.getLocalImgData(n)}},e))):_.push(e)},"getNetworkType":function getNetworkType(e){M("getNetworkType",{},(e._complete=function(e){e=function(e){var n=e.errMsg;e.errMsg="getNetworkType:ok";var t=e.subtype;if(delete e.subtype,t)e.networkType=t;else{var i=n.indexOf(":"),o=n.substring(i+1);switch(o){case"wifi":case"edge":case"wwan":e.networkType=o;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},"openLocation":function openLocation(e){M("openLocation",{"latitude":e.latitude,"longitude":e.longitude,"name":e.name||"","address":e.address||"","scale":e.scale||28,"infoUrl":e.infoUrl||""},e)}},"getLocation",(function getLocation(e){M(o.getLocation,{"type":(e=e||{}).type||"wgs84"},(e._complete=function(e){delete e.type},e))})),a(t,"hideOptionMenu",(function hideOptionMenu(e){M("hideOptionMenu",{},e)})),a(t,"showOptionMenu",(function showOptionMenu(e){M("showOptionMenu",{},e)})),a(t,"closeWindow",(function closeWindow(e){M("closeWindow",{},e=e||{})})),a(t,"hideMenuItems",(function hideMenuItems(e){M("hideMenuItems",{"menuList":e.menuList},e)})),a(t,"showMenuItems",(function showMenuItems(e){M("showMenuItems",{"menuList":e.menuList},e)})),a(t,"hideAllNonBaseMenuItem",(function hideAllNonBaseMenuItem(e){M("hideAllNonBaseMenuItem",{},e)})),a(t,"showAllNonBaseMenuItem",(function showAllNonBaseMenuItem(e){M("showAllNonBaseMenuItem",{},e)})),a(t,"scanQRCode",(function scanQRCode(e){M("scanQRCode",{"needResult":(e=e||{}).needResult||0,"scanType":e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(g){var n=e.resultStr;if(n){var t=JSON.parse(n);e.resultStr=t&&t.scan_code&&t.scan_code.scan_result}}},e))})),a(t,"openAddress",(function openAddress(e){M(o.openAddress,{},(e._complete=function(e){e=function(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}(e)},e))})),a(t,"openProductSpecificView",(function openProductSpecificView(e){M(o.openProductSpecificView,{"pid":e.productId,"view_type":e.viewType||0,"ext_info":e.extInfo},e)})),a(t,"addCard",(function addCard(e){for(var n=e.cardList,t=[],i=0,a=n.length;i<a;++i){var r=n[i],c={"card_id":r.cardId,"card_ext":r.cardExt};t.push(c)}M(o.addCard,{"card_list":t},(e._complete=function(e){var n=e.card_list;if(n){for(var t=0,i=(n=JSON.parse(n)).length;t<i;++t){var o=n[t];o.cardId=o.card_id,o.cardExt=o.card_ext,o.isSuccess=!!o.is_succ,delete o.card_id,delete o.card_ext,delete o.is_succ}e.cardList=n,delete e.card_list}},e))})),a(t,"chooseCard",(function chooseCard(e){M("chooseCard",{"app_id":I.appId,"location_id":e.shopId||"","sign_type":e.signType||"SHA1","card_id":e.cardId||"","card_type":e.cardType||"","card_sign":e.cardSign,"time_stamp":e.timestamp+"","nonce_str":e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))})),a(t,"openCard",(function openCard(e){for(var n=e.cardList,t=[],i=0,a=n.length;i<a;++i){var r=n[i],c={"card_id":r.cardId,"code":r.code};t.push(c)}M(o.openCard,{"card_list":t},e)})),a(t,"consumeAndShareCard",(function consumeAndShareCard(e){M(o.consumeAndShareCard,{"consumedCardId":e.cardId,"consumedCode":e.code},e)})),a(t,"chooseWXPay",(function chooseWXPay(e){M(o.chooseWXPay,V(e),e)})),a(t,"openEnterpriseRedPacket",(function openEnterpriseRedPacket(e){M(o.openEnterpriseRedPacket,V(e),e)})),a(t,"startSearchBeacons",(function startSearchBeacons(e){M(o.startSearchBeacons,{"ticket":e.ticket},e)})),a(t,"stopSearchBeacons",(function stopSearchBeacons(e){M(o.stopSearchBeacons,{},e)})),a(t,"onSearchBeacons",(function onSearchBeacons(e){P(o.onSearchBeacons,e)})),a(t,"openEnterpriseChat",(function openEnterpriseChat(e){M("openEnterpriseChat",{"useridlist":e.userIds,"chatname":e.groupName},e)})),a(t,"launchMiniProgram",(function launchMiniProgram(e){M("launchMiniProgram",{"targetAppId":e.targetAppId,"path":function(e){if("string"==typeof e&&0<e.length){var n=e.split("?")[0],t=e.split("?")[1];return n+=".html",void 0!==t?n+"?"+t:n}}(e.path),"envVersion":e.envVersion},e)})),a(t,"openBusinessView",(function openBusinessView(e){M("openBusinessView",{"businessType":e.businessType,"queryString":e.queryString||"","envVersion":e.envVersion},(e._complete=function(e){if(m){var n=e.extraData;if(n)try{e.extraData=JSON.parse(n)}catch(n){e.extraData={}}}},e))})),a(t,"miniProgram",{"navigateBack":function navigateBack(e){e=e||{},O((function(){M("invokeMiniProgramAPI",{"name":"navigateBack","arg":{"delta":e.delta||1}},e)}))},"navigateTo":function navigateTo(e){O((function(){M("invokeMiniProgramAPI",{"name":"navigateTo","arg":{"url":e.url}},e)}))},"redirectTo":function redirectTo(e){O((function(){M("invokeMiniProgramAPI",{"name":"redirectTo","arg":{"url":e.url}},e)}))},"switchTab":function switchTab(e){O((function(){M("invokeMiniProgramAPI",{"name":"switchTab","arg":{"url":e.url}},e)}))},"reLaunch":function reLaunch(e){O((function(){M("invokeMiniProgramAPI",{"name":"reLaunch","arg":{"url":e.url}},e)}))},"postMessage":function postMessage(e){O((function(){M("invokeMiniProgramAPI",{"name":"postMessage","arg":e.data||{}},e)}))},"getEnv":function getEnv(n){O((function(){n({"miniprogram":"miniprogram"===e.__wxjs_environment})}))}}),t),b=1,W={};return c.addEventListener("error",(function(e){if(!m){var n=e.target,t=n.tagName,i=n.src;if(("IMG"==t||"VIDEO"==t||"AUDIO"==t||"SOURCE"==t)&&-1!=i.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var o=n["wx-id"];if(o||(o=b++,n["wx-id"]=o),W[o])return;W[o]=!0,wx.ready((function(){wx.getLocalImgData({"localId":i,"success":function success(e){n.src=e.localData}})}))}}}),!0),c.addEventListener("load",(function(e){if(!m){var n=e.target,t=n.tagName;if(n.src,"IMG"==t||"VIDEO"==t||"AUDIO"==t||"SOURCE"==t){var i=n["wx-id"];i&&(W[i]=!1)}}}),!0),k&&(e.wx=e.jWeixin=k),k}function M(n,t,i){e.WeixinJSBridge?WeixinJSBridge.invoke(n,x(t),(function(e){A(n,e,i)})):B(n,i)}function P(n,t,i){e.WeixinJSBridge?WeixinJSBridge.on(n,(function(e){i&&i.trigger&&i.trigger(e),A(n,e,t)})):B(n,i||t)}function x(e){return(e=e||{}).appId=I.appId,e.verifyAppId=I.appId,e.verifySignType="sha1",e.verifyTimestamp=I.timestamp+"",e.verifyNonceStr=I.nonceStr,e.verifySignature=I.signature,e}function V(e){return{"timeStamp":e.timestamp+"","nonceStr":e.nonceStr,"package":e.package,"paySign":e.paySign,"signType":e.signType||"SHA1"}}function A(e,n,t){"openEnterpriseChat"!=e&&"openBusinessView"!==e||(n.errCode=n.err_code),delete n.err_code,delete n.err_desc,delete n.err_detail;var i=n.errMsg;i||(i=n.err_msg,delete n.err_msg,i=function(e,n){var t=e,i=r[t];i&&(t=i);var o="ok";if(n){var a=n.indexOf(":");"confirm"==(o=n.substring(a+1))&&(o="ok"),"failed"==o&&(o="fail"),-1!=o.indexOf("failed_")&&(o=o.substring(7)),-1!=o.indexOf("fail_")&&(o=o.substring(5)),"access denied"!=(o=(o=o.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=o||(o="permission denied"),"config"==t&&"function not exist"==o&&(o="ok"),""==o&&(o="fail")}return t+":"+o}(e,i),n.errMsg=i),(t=t||{})._complete&&(t._complete(n),delete t._complete),i=n.errMsg||"",I.debug&&!t.isInnerInvoke&&alert(JSON.stringify(n));var o=i.indexOf(":");switch(i.substring(o+1)){case"ok":t.success&&t.success(n);break;case"cancel":t.cancel&&t.cancel(n);break;default:t.fail&&t.fail(n)}t.complete&&t.complete(n)}function C(e){if(e){for(var n=0,t=e.length;n<t;++n){var i=e[n],a=o[i];a&&(e[n]=a)}return e}}function B(e,n){if(!(!I.debug||n&&n.isInnerInvoke)){var t=r[e];t&&(e=t),n&&n._complete&&delete n._complete,console.log('"'+e+'",',n||"")}}function L(){return(new Date).getTime()}function O(n){f&&(e.WeixinJSBridge?n():c.addEventListener&&c.addEventListener("WeixinJSBridgeReady",n,!1))}}(o)}.call(n,t,n,e))||(e.exports=i)},"PVRb":function(e,n,t){"use strict";t.r(n);var i,o,a=t("o0o1"),r=t.n(a),c=t("HaE+"),s=t("VTBJ"),d=t("h7Yj"),u=t("rePB"),l=["addDownloadTask","queryDownloadTask","installDownloadTask","showMenuItems","hideMenuItems","onMenuShareAppMessage","onMenuShareTimeline","onMenuShareQQ","onMenuShareQZone","onMenuShareWeibo","addCard","openCard","chooseCard","previewImage","editAddress","chooseImage","uploadImage","getLocation","openAddress","getInstallState","launch3rdApp","launchApplication","startRecord","stopRecord","uploadVoice","openBusinessView"],p=["wx-open-launch-app","wx-open-launch-weapp","wx-open-subscribe","wx-open-audio"],f="menuItem:share:appMessage",m="menuItem:share:qq",g="menuItem:share:QZone",h="menuItem:share:timeline",w="menuItem:copyUrl",S=["menuItem:openWithSafari","menuItem:share:email"],I=1,v=2,y=4,T=5,_=(i={},Object(u.default)(i,I,f),Object(u.default)(i,v,h),Object(u.default)(i,y,m),Object(u.default)(i,T,g),i),k=(o={},Object(u.default)(o,I,0),Object(u.default)(o,v,0),Object(u.default)(o,y,0),Object(u.default)(o,T,0),o),b=(t("Hwvr"),t("eHaf"));t.d(n,"initWxConfig",(function(){return initWxConfig}));function initWxConfig(e,n){var t=e.wechatAppID,i=e.timestamp,o=e.nonceStr,a=e.signature,u=e.shareTypeEnable,f=void 0===u?{}:u;return new Promise((function(e){var u=top.wx||window.wx;u.config({"timestamp":i,"signature":a,"nonceStr":o,"debug":!1,"beta":!0,"appId":t,"jsApiList":l,"openTagList":p}),u.ready((function(){var t=function getShareMenuItems(e,n){var t=I,i=v;return e=Object(s.default)(Object(s.default)({},k),e),Object.keys(e).reduce((function(o,a){var r=_[a];if(n&&[t,i].indexOf(+a)<0)r&&o.menuShareItemsToHide.push(r);else{var c=e[a]?o.menuShareItemsToShow:o.menuShareItemsToHide;r&&c.push(r)}return o}),{"menuShareItemsToShow":[],"menuShareItemsToHide":[]})}(f,n.onlyWeChat),i=t.menuShareItemsToShow,o=t.menuShareItemsToHide,a=[],r=S.concat(o);n.disableShare?r=r.concat(i):a=a.concat(i),n.disableCopyUrl&&r.push(w),n.enableBrowserOpen&&r.splice(0,1),u.hideMenuItems({"menuList":r}),u.showMenuItems({"menuList":a}),window.wxReady||Object.defineProperty(window,"wxReady",{"get":function get(){return console.warn("window.wxReady 即将废弃，使用方尽快解除依赖"),!0}}),e()})),u.error((function(e){Object(d.throwErrorAsync)(e,{"error_type":"wx_config_error","error_message":JSON.stringify(e),"payload":{"signature":a}})})),function initAppInstallState(){window.wx.ready(Object(c.default)(r.a.mark((function _callee(){var e,n;return r.a.wrap((function _callee$(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,getAppInstallState();case 2:e=t.sent,n=e.wxCheckPdd,+localStorage.getItem("WxCheckPdd")!==n&&Object(b.sendMetrics)({"op":"event","sub_op":"app_check","uninstall_status":n}),localStorage.setItem("WxCheckPdd",""+n);case 7:case"end":return t.stop()}}),_callee)}))))}()}))}function getAppInstallState(){return window.WeixinJSBridge&&window.WeixinJSBridge.invoke?new Promise((function(e){window.WeixinJSBridge.invoke("getInstallState",{"packageName":"com.xunmeng.pinduoduo","packageUrl":"pinduoduo://"},(function(n){var t=n.err_msg,i=void 0===t?"":t,o=n.versionName,a=void 0===o?"":o,r=/get_install_state:yes/.test(i),c=/get_install_state:no/.test(i);e({"version":a,"wxCheckPdd":r?1:c?0:2})}))})):Promise.resolve({"version":"","wxCheckPdd":2})}}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-fun-read/js/pdd-mod/wechat-service~472d6bb7_526f708e120f91d4de5d.js.map