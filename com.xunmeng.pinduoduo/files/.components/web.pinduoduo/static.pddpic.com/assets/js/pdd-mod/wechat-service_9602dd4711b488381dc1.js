(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[28],{PDX0:function(e,n){(function(n){e.exports=n}).call(this,{})},PVRb:function(e,n,i){"use strict";i.r(n);var t,o,r=i("o0o1"),a=i.n(r),s=i("yXPU"),c=i.n(s),d=i("MVZn"),u=i.n(d),l=i("qnV/"),p=i("lSNA"),f=i.n(p),m=["addDownloadTask","queryDownloadTask","installDownloadTask","showMenuItems","hideMenuItems","onMenuShareAppMessage","onMenuShareTimeline","onMenuShareQQ","onMenuShareQZone","onMenuShareWeibo","addCard","openCard","chooseCard","previewImage","editAddress","chooseImage","uploadImage","getLocation","openAddress","getInstallState","launch3rdApp","launchApplication","startRecord","stopRecord","uploadVoice","openBusinessView"],g=["wx-open-launch-app","wx-open-launch-weapp","wx-open-subscribe","wx-open-audio"],h={SHARE_SESSION:"menuItem:share:appMessage",SHARE_QQ:"menuItem:share:qq",SHARE_QZONE:"menuItem:share:QZone",SHARE_QQ_WEIBO:"menuItem:share:weiboApp",FAVORITE:"menuItem:favorite",OPEN_WITH_SAFARI:"menuItem:openWithSafari",SHARE_EMAIL:"menuItem:share:email",SHARE_TIMELINE:"menuItem:share:timeline",COPY_URL:"menuItem:copyUrl"},S=[h.OPEN_WITH_SAFARI,h.SHARE_EMAIL],I={WECHAT_SESSION:1,WECHAT_TIMELINE:2,QQ_CHAT_SESSION:4,QQ_ZONE:5},_=(t={},f()(t,I.WECHAT_SESSION,h.SHARE_SESSION),f()(t,I.WECHAT_TIMELINE,h.SHARE_TIMELINE),f()(t,I.QQ_CHAT_SESSION,h.SHARE_QQ),f()(t,I.QQ_ZONE,h.SHARE_QZONE),t),w=(o={},f()(o,I.WECHAT_SESSION,0),f()(o,I.WECHAT_TIMELINE,0),f()(o,I.QQ_CHAT_SESSION,0),f()(o,I.QQ_ZONE,0),o);!function(e,n){"function"==typeof define&&i("PDX0")?define(function(){return n(e)}):n(e,!0)}(window,function(e,n){if(!e.jWeixin){var i,t,o={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},r=function(){var e={};for(var n in o)e[o[n]]=n;return e}(),a=e.document,s=a.title,c=navigator.userAgent.toLowerCase(),d=navigator.platform.toLowerCase(),u=!(!d.match("mac")&&!d.match("win")),l=-1!=c.indexOf("wxdebugger"),p=-1!=c.indexOf("micromessenger"),m=-1!=c.indexOf("android"),g=-1!=c.indexOf("iphone")||-1!=c.indexOf("ipad"),h=(t=c.match(/micromessenger\/(\d+\.\d+\.\d+)/)||c.match(/micromessenger\/(\d+\.\d+)/))?t[1]:"",S={initStartTime:V(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},I={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:g?1:m?2:-1,clientVersion:h,url:encodeURIComponent(location.href)},_={},w={_completes:[]},v={state:0,data:{}};R(function(){S.initEndTime=V()});var y=!1,T=[],A=(i={config:function(n){L("config",_=n);var i=!1!==_.check;R(function(){if(i)M(o.config,{verifyJsApiList:N(_.jsApiList),verifyOpenTagList:N(_.openTagList)},function(){w._complete=function(e){S.preVerifyEndTime=V(),v.state=1,v.data=e},w.success=function(e){I.isPreVerifyOk=0},w.fail=function(e){w._fail?w._fail(e):v.state=-1};var e=w._completes;return e.push(function(){!function(){if(!(u||l||_.debug||h<"6.0.2"||I.systemType<0)){var e=new Image;I.appId=_.appId,I.initTime=S.initEndTime-S.initStartTime,I.preVerifyTime=S.preVerifyEndTime-S.preVerifyStartTime,A.getNetworkType({isInnerInvoke:!0,success:function(n){I.networkType=n.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+I.version+"&o="+I.isPreVerifyOk+"&s="+I.systemType+"&c="+I.clientVersion+"&a="+I.appId+"&n="+I.networkType+"&i="+I.initTime+"&p="+I.preVerifyTime+"&u="+I.url;e.src=i}})}}()}),w.complete=function(n){for(var i=0,t=e.length;i<t;++i)e[i]();w._completes=[]},w}()),S.preVerifyStartTime=V();else{v.state=1;for(var e=w._completes,n=0,t=e.length;n<t;++n)e[n]();w._completes=[]}}),A.invoke||(A.invoke=function(n,i,t){e.WeixinJSBridge&&WeixinJSBridge.invoke(n,C(i),t)},A.on=function(n,i){e.WeixinJSBridge&&WeixinJSBridge.on(n,i)})},ready:function(e){0!=v.state?e():(w._completes.push(e),!p&&_.debug&&e())},error:function(e){h<"6.0.2"||(-1==v.state?e(v.data):w._fail=e)},checkJsApi:function(e){M("checkJsApi",{jsApiList:N(e.jsApiList)},(e._complete=function(e){if(m){var n=e.checkResult;n&&(e.checkResult=JSON.parse(n))}e=function(e){var n=e.checkResult;for(var i in n){var t=r[i];t&&(n[t]=n[i],delete n[i])}return e}(e)},e))},onMenuShareTimeline:function(e){x(o.onMenuShareTimeline,{complete:function(){M("shareTimeline",{title:e.title||s,desc:e.title||s,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){x(o.onMenuShareAppMessage,{complete:function(n){"favorite"===n.scene?M("sendAppMessage",{title:e.title||s,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):M("sendAppMessage",{title:e.title||s,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){x(o.onMenuShareQQ,{complete:function(){M("shareQQ",{title:e.title||s,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){x(o.onMenuShareWeibo,{complete:function(){M("shareWeiboApp",{title:e.title||s,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){x(o.onMenuShareQZone,{complete:function(){M("shareQZone",{title:e.title||s,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){M("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){M("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){M("startRecord",{},e)},stopRecord:function(e){M("stopRecord",{},e)},onVoiceRecordEnd:function(e){x("onVoiceRecordEnd",e)},playVoice:function(e){M("playVoice",{localId:e.localId},e)},pauseVoice:function(e){M("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){M("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){x("onVoicePlayEnd",e)},uploadVoice:function(e){M("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){M("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){M("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){M("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(m){var n=e.localIds;try{n&&(e.localIds=JSON.parse(n))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){M(o.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){M("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){M("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===y?(y=!0,M("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(y=!1,0<T.length){var n=T.shift();wx.getLocalImgData(n)}},e))):T.push(e)},getNetworkType:function(e){M("getNetworkType",{},(e._complete=function(e){e=function(e){var n=e.errMsg;e.errMsg="getNetworkType:ok";var i=e.subtype;if(delete e.subtype,i)e.networkType=i;else{var t=n.indexOf(":"),o=n.substring(t+1);switch(o){case"wifi":case"edge":case"wwan":e.networkType=o;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){M("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)}},f()(i,"getLocation",function(e){M(o.getLocation,{type:(e=e||{}).type||"wgs84"},(e._complete=function(e){delete e.type},e))}),f()(i,"hideOptionMenu",function(e){M("hideOptionMenu",{},e)}),f()(i,"showOptionMenu",function(e){M("showOptionMenu",{},e)}),f()(i,"closeWindow",function(e){M("closeWindow",{},e=e||{})}),f()(i,"hideMenuItems",function(e){M("hideMenuItems",{menuList:e.menuList},e)}),f()(i,"showMenuItems",function(e){M("showMenuItems",{menuList:e.menuList},e)}),f()(i,"hideAllNonBaseMenuItem",function(e){M("hideAllNonBaseMenuItem",{},e)}),f()(i,"showAllNonBaseMenuItem",function(e){M("showAllNonBaseMenuItem",{},e)}),f()(i,"scanQRCode",function(e){M("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(g){var n=e.resultStr;if(n){var i=JSON.parse(n);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e))}),f()(i,"openAddress",function(e){M(o.openAddress,{},(e._complete=function(e){e=function(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}(e)},e))}),f()(i,"openProductSpecificView",function(e){M(o.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)}),f()(i,"addCard",function(e){for(var n=e.cardList,i=[],t=0,r=n.length;t<r;++t){var a=n[t],s={card_id:a.cardId,card_ext:a.cardExt};i.push(s)}M(o.addCard,{card_list:i},(e._complete=function(e){var n=e.card_list;if(n){for(var i=0,t=(n=JSON.parse(n)).length;i<t;++i){var o=n[i];o.cardId=o.card_id,o.cardExt=o.card_ext,o.isSuccess=!!o.is_succ,delete o.card_id,delete o.card_ext,delete o.is_succ}e.cardList=n,delete e.card_list}},e))}),f()(i,"chooseCard",function(e){M("chooseCard",{app_id:_.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))}),f()(i,"openCard",function(e){for(var n=e.cardList,i=[],t=0,r=n.length;t<r;++t){var a=n[t],s={card_id:a.cardId,code:a.code};i.push(s)}M(o.openCard,{card_list:i},e)}),f()(i,"consumeAndShareCard",function(e){M(o.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)}),f()(i,"chooseWXPay",function(e){M(o.chooseWXPay,P(e),e)}),f()(i,"openEnterpriseRedPacket",function(e){M(o.openEnterpriseRedPacket,P(e),e)}),f()(i,"startSearchBeacons",function(e){M(o.startSearchBeacons,{ticket:e.ticket},e)}),f()(i,"stopSearchBeacons",function(e){M(o.stopSearchBeacons,{},e)}),f()(i,"onSearchBeacons",function(e){x(o.onSearchBeacons,e)}),f()(i,"openEnterpriseChat",function(e){M("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)}),f()(i,"launchMiniProgram",function(e){M("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&0<e.length){var n=e.split("?")[0],i=e.split("?")[1];return n+=".html",void 0!==i?n+"?"+i:n}}(e.path),envVersion:e.envVersion},e)}),f()(i,"openBusinessView",function(e){M("openBusinessView",{businessType:e.businessType,queryString:e.queryString||"",envVersion:e.envVersion},(e._complete=function(e){if(m){var n=e.extraData;if(n)try{e.extraData=JSON.parse(n)}catch(n){e.extraData={}}}},e))}),f()(i,"miniProgram",{navigateBack:function(e){e=e||{},R(function(){M("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)})},navigateTo:function(e){R(function(){M("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)})},redirectTo:function(e){R(function(){M("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)})},switchTab:function(e){R(function(){M("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)})},reLaunch:function(e){R(function(){M("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)})},postMessage:function(e){R(function(){M("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)})},getEnv:function(n){R(function(){n({miniprogram:"miniprogram"===e.__wxjs_environment})})}}),i),k=1,E={};return a.addEventListener("error",function(e){if(!m){var n=e.target,i=n.tagName,t=n.src;if(("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i)&&-1!=t.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var o=n["wx-id"];if(o||(o=k++,n["wx-id"]=o),E[o])return;E[o]=!0,wx.ready(function(){wx.getLocalImgData({localId:t,success:function(e){n.src=e.localData}})})}}},!0),a.addEventListener("load",function(e){if(!m){var n=e.target,i=n.tagName;if(n.src,"IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){var t=n["wx-id"];t&&(E[t]=!1)}}},!0),A&&(e.wx=e.jWeixin=A),A}function M(n,i,t){e.WeixinJSBridge?WeixinJSBridge.invoke(n,C(i),function(e){O(n,e,t)}):L(n,t)}function x(n,i,t){e.WeixinJSBridge?WeixinJSBridge.on(n,function(e){t&&t.trigger&&t.trigger(e),O(n,e,i)}):L(n,t||i)}function C(e){return(e=e||{}).appId=_.appId,e.verifyAppId=_.appId,e.verifySignType="sha1",e.verifyTimestamp=_.timestamp+"",e.verifyNonceStr=_.nonceStr,e.verifySignature=_.signature,e}function P(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function O(e,n,i){"openEnterpriseChat"!=e&&"openBusinessView"!==e||(n.errCode=n.err_code),delete n.err_code,delete n.err_desc,delete n.err_detail;var t=n.errMsg;t||(t=n.err_msg,delete n.err_msg,t=function(e,n){var i=e,t=r[i];t&&(i=t);var o="ok";if(n){var a=n.indexOf(":");"confirm"==(o=n.substring(a+1))&&(o="ok"),"failed"==o&&(o="fail"),-1!=o.indexOf("failed_")&&(o=o.substring(7)),-1!=o.indexOf("fail_")&&(o=o.substring(5)),"access denied"!=(o=(o=o.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=o||(o="permission denied"),"config"==i&&"function not exist"==o&&(o="ok"),""==o&&(o="fail")}return i+":"+o}(e,t),n.errMsg=t),(i=i||{})._complete&&(i._complete(n),delete i._complete),t=n.errMsg||"",_.debug&&!i.isInnerInvoke&&alert(JSON.stringify(n));var o=t.indexOf(":");switch(t.substring(o+1)){case"ok":i.success&&i.success(n);break;case"cancel":i.cancel&&i.cancel(n);break;default:i.fail&&i.fail(n)}i.complete&&i.complete(n)}function N(e){if(e){for(var n=0,i=e.length;n<i;++n){var t=e[n],r=o[t];r&&(e[n]=r)}return e}}function L(e,n){if(!(!_.debug||n&&n.isInnerInvoke)){var i=r[e];i&&(e=i),n&&n._complete&&delete n._complete,console.log('"'+e+'",',n||"")}}function V(){return(new Date).getTime()}function R(n){p&&(e.WeixinJSBridge?n():a.addEventListener&&a.addEventListener("WeixinJSBridgeReady",n,!1))}});var v=i("eHaf");i.d(n,"initWxConfig",function(){return A});var y="com.xunmeng.pinduoduo",T="WxCheckPdd";function A(e,n){var i=e.wechatAppID,t=e.timestamp,o=e.nonceStr,r=e.signature,s=e.shareTypeEnable,d=void 0===s?{}:s;return new Promise(function(e){var s=top.wx||window.wx;s.config({timestamp:t,signature:r,nonceStr:o,debug:!1,beta:!0,appId:i,jsApiList:m,openTagList:g}),s.ready(function(){var i=function(e,n){var i=I.WECHAT_SESSION,t=I.WECHAT_TIMELINE;return e=u()({},w,{},e),Object.keys(e).reduce(function(o,r){var a=_[r];if(n&&[i,t].indexOf(+r)<0)a&&o.menuShareItemsToHide.push(a);else{var s=e[r]?o.menuShareItemsToShow:o.menuShareItemsToHide;a&&s.push(a)}return o},{menuShareItemsToShow:[],menuShareItemsToHide:[]})}(d,n.onlyWeChat),t=i.menuShareItemsToShow,o=i.menuShareItemsToHide,r=[],a=S.concat(o);n.disableShare?a=a.concat(t):r=r.concat(t),n.disableCopyUrl&&a.push(h.COPY_URL),n.enableBrowserOpen&&a.splice(0,1),s.hideMenuItems({menuList:a}),s.showMenuItems({menuList:r}),window.wxReady||Object.defineProperty(window,"wxReady",{get:function(){return console.warn("window.wxReady 即将废弃，使用方尽快解除依赖"),!0}}),e()}),s.error(function(e){Object(l.c)(e,{error_type:"wx_config_error",error_message:JSON.stringify(e),payload:{signature:r}})}),window.wx.ready(c()(a.a.mark(function e(){var n,i;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:n=e.sent,i=n.wxCheckPdd,+localStorage.getItem(T)!==i&&Object(v.d)({op:"event",sub_op:"app_check",uninstall_status:i}),localStorage.setItem(T,""+i);case 7:case"end":return e.stop()}},e)})))})}function k(){return window.WeixinJSBridge&&window.WeixinJSBridge.invoke?new Promise(function(e){window.WeixinJSBridge.invoke("getInstallState",{packageName:y,packageUrl:"pinduoduo://"},function(n){var i=n.err_msg,t=void 0===i?"":i,o=n.versionName,r=void 0===o?"":o,a=/get_install_state:yes/.test(t),s=/get_install_state:no/.test(t);e({version:r,wxCheckPdd:a?1:s?0:2})})}):Promise.resolve({version:"",wxCheckPdd:2})}}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-eve-spike/js/pdd-mod/wechat-service_9602dd4711b488381dc1.js.map