(self.webpackChunk_name_mobile_dc=self.webpackChunk_name_mobile_dc||[]).push([["e8e0"],{"25h1":function(e,t,r){"use strict";r.d(t,{c:function(){return s}});var n=r("swbT"),o=r("lb/N"),i=r("2tVT"),a=function e(t,r,i,a){if(t)return new Promise((function(c){if(r){a=a||c;var s=new Image;s.onload=a,s.onerror=function(){e(t,r-1,i,a),(0,n.y7)(new Error("【图片未成功加载】：".concat(t)))},s.src=(0,o.Z)(t)}else i.push(t),a()}))},c=function(e){var t=[];return Promise.all([].concat(e).map((function(e){return a(e,2,t,null)}))).then((function(){return t}))},s=function(e,t){c(e.map((function(e){return(0,i.BT)(e,t)})))};t.Z=c},Fxg3:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return tr}});var n,o,i,a=r("AIhP"),c=r.n(a),s=r("/4JS"),u=r.n(s),l=r("U5BY"),f=r.n(l),p=r("hwDT"),d=r.n(p),g=r("f6/u"),m=r.n(g),h=r("f17R"),v=r.n(h),b=r("Vl5s"),y=r.n(b),_=r("9bdW"),w=r.n(_),k=r("KdYu"),S=r("iuwq"),x=r("MV8a"),T=r("sdwB"),P=r.n(T),R=r("0Qln"),E=r.n(R),O=r("i/Q6"),F=r.n(O),C=r("jXLS"),L=r.n(C),j=(r("XC3m"),r("ukrc")),D=r.n(j),I=r("UK90"),A=r("9Q3p"),N=r("u2c9"),Q=r.n(N),M=r("iQJJ"),H=r.n(M),J=["className","seconds","onEndTime","showJumpBtn","onJumpClick","log"];function U(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var q=(0,k.observer)((o=function(e){m()(n,e);var t,r=(t=n,function(){var e,r=y()(t);if(U()){var n=y()(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return v()(this,e)});function n(){var e;f()(this,n);for(var t=arguments.length,o=new Array(t),a=0;a<t;a++)o[a]=arguments[a];return e=r.call.apply(r,[this].concat(o)),E()(e,"remainingTime",i,F()(e)),e}return d()(n,[{key:"updateRemainTime",value:function(){this.remainingTime=this.remainingTime-this.props.delay,this.remainingTime<=0?this.props.onEndTime&&this.props.onEndTime():this.creatTimer()}},{key:"creatTimer",value:function(){var e=this,t=setTimeout((function(){e.updateRemainTime()}),this.props.delay);this.removeTimer=function(){clearTimeout(t)}}},{key:"componentDidMount",value:function(){this.creatTimer()}},{key:"componentWillUnmount",value:function(){this.removeTimer()}},{key:"render",value:function(){return this.props.children(this.remainingTime)}}]),n}(w().Component),i=L()(o.prototype,"remainingTime",[I.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.props.millisecond}}),L()(o.prototype,"updateRemainTime",[I.action],Object.getOwnPropertyDescriptor(o.prototype,"updateRemainTime"),o.prototype),n=o))||n,B=D()(H())((function(e){var t=e.className,r=e.seconds,n=e.onEndTime,o=e.showJumpBtn,i=e.onJumpClick,a=e.log,s=P()(e,J),u=w().createElement(q,{onEndTime:n,delay:1e3,millisecond:r},(function(e){if(!o)return null;var t=e/1e3;return t>=10?t:"0".concat(t)}));return o?w().createElement(x.Z,{trackingInfo:a},w().createElement("div",c()({className:Q()(H().container,t)},s),w().createElement("div",{className:H().left},u),w().createElement("div",{className:H().right},w().createElement("span",{className:H().text,onClick:function(e){i&&i(e)}},"跳过"),w().createElement(A.Z,{size:3,color:"#fff",className:H().arrow}),w().createElement(A.Z,{size:3,color:"#fff",className:H().arrow})))):u})),V=r("BqXm"),G=r("V56i"),W=r("2tVT"),Z=r("VplU"),K=r.n(Z),z=["className","paddingTop","jumpIcon","guide","secondFloorImpr"],X=D()(K())((function(e){var t=e.className,r=e.paddingTop,n=e.jumpIcon,o=e.guide,i=e.secondFloorImpr,a=P()(e,z);return w().createElement(W.ZP,c()({},a,{className:Q()(K().container,t),style:{paddingTop:r}}),w().createElement("div",{className:K().content},w().createElement("div",{className:K().jumpIcon},n),w().createElement("div",{className:K().secondFloorImpr},i),o))})),Y=r("m8Qe"),$=r.n(Y),ee=r("asOj"),te=r("4vPy"),re=r("4k0V"),ne=r("UX2+"),oe={TrackingChannels:["src","from","campaign","cid","msgid"],TrackingEvent:{OpenAddress:"open_address",SkipAppGroup:"skip_app_group",AlertAppDownload:{Show:"a_a_d_s",Download:"a_a_d_d",Close:"a_a_d_c"}},ReferPageKeys:["refer_page_name","refer_page_section","refer_page_element","refer_page_id"],ReferShareKeys:["refer_share_id","refer_share_uid","refer_share_channel","refer_share_form"],ReferShareMapShort:{_sid:"refer_share_id",_suid:"refer_share_uid",_sc:"refer_share_channel",_sf:"refer_share_form"}},ie=r("Bw80"),ae=r("mMHC"),ce=r.n(ae),se=r("DON7"),ue=r("dXGj"),le=r("YO3V"),fe=r.n(le),pe=r("lSCD"),de=r.n(pe),ge=r("Z0cm"),me=r.n(ge),he=r("3OWR"),ve=r.n(he),be=r("QkVN"),ye=r.n(be),_e=se.default.getInstance(),we=ee.default.constant;function ke(e){var t=e.stack.replace(/\n/gi,"").split(/\bat\b/).slice(0,5).join("@").replace(/\?[^:]+/gi,""),r=e.toString();return t.indexOf(r)<0&&(t=r+"@"+t),t}function Se(){var e=[];return function(t,r){if(null!=r&&"object"===$()(r)){if(e.indexOf(r)>=0)return;e.push(r)}return r}}function xe(e){return e&&e.replace(/(PDDAccessToken=|AccessToken=|"AccessToken":)\s*"?([^;,"]+)"?([;,]?\s*)/gi,(function(e,t,r,n){return"".concat(t).concat(r.length).concat(n)}))}function Te(e){var t,r;return e instanceof Error&&(t=e.message,r=e.stack?ke(e):""),{error_msg:t,error_stack:r,Error:e}}ce().remoteFetching=!1,ce().extendToAsynchronousCallbacks();var Pe=function(){return[Date.now(),(0,re.nanoid)(16)].join("")},Re=function(){return Je.platform===te.PLATFORM.WeChat?Ue.AppID.WeChat:Je.platform===te.PLATFORM.Weibo?Ue.AppID.Weibo:Je.platform===te.PLATFORM.QQ?Je.isNativePlatform?Ue.AppID.QQ:Ue.AppID.QQConnect:""},Ee=function(){qe.isCached||Oe()},Oe=function(){var e=_e.getReferPageQuery();qe.refer=e||{},qe.hasReferQuery=!!e&&"{}"!==JSON.stringify(e),qe.isCached=qe.hasReferQuery},Fe=function(){var e=localStorage.getItem(we.LocalStorageKey.UID)||"";return e.toString().match(/[0-9]{10}/)?e:(e?parseInt(e,36):(0,re.getCookie)(we.CookieKey.UID))||0},Ce=function(){return localStorage.getItem(we.LocalStorageKey.UIN)||(0,re.getCookie)(we.CookieKey.UIN)},Le=function(){return(0,re.getCookie)("_nano_fp")},je=function(){return localStorage.getItem("_nano_fp")},De=function(e,t){var r=_e.getPageName()||location.pathname;Je.statisfy&&Je.statisfy("4.23.0","4.22.0","greaterThanEqual")&&(0,ne.invokeBridgeCallNativeFun)("JSLogger","log",{module:r,message:t,level:e})},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=Je.isNativePlatform&&(0,te.compareVersion)(Je.version,"5.41.0")>=0;if(!r&&window.__ERROR_SAMPLE_RATE__&&-1!==["chat_error","error","real_error"].indexOf(e.op)&&Math.random()>window.__ERROR_SAMPLE_RATE__)"function"==typeof t&&t();else{var n=(0,re.parseQuery)(window.location.search);e=ve()({},e,_e.getKeyParams()),Ee(),e.log_id=e.log_id||Pe(),e.user_id=e.user_id||Fe(),e.uin=e.uin||Ce(),e.cookie_fp=Le(),e.storage_fp=je(),e.app_id=e.app_id||Re()||"",e.time=e.time||e.log_id.substring(0,13),e.page_name=e.useExistsParams&&e.page_name?e.page_name:_e.getPageName(),e.page_id=_e.getPageID(),e.page_sn=_e.getPageSN();var o=localStorage.getItem("WxCheckPdd");null!==o&&(e.wx_check_pdd=parseInt(o,10)||0),ye()(e,qe.refer);var i=_e.getExtendTransferParameters();if(ye()(e,i),["pv","click","impr"].indexOf(e.op)>=0){oe.TrackingChannels.forEach((function(t){var r="refer_channel_"+t;e[r]=e[r]||n[t]})),oe.ReferShareKeys.forEach((function(t){var r=e[t]||n[t]||n[t.slice(6)];r&&(e[t]=r)}));var a=oe.ReferShareMapShort;for(var c in a){var s=e[c]||n[c];s&&(e[a[c]]=s)}}if("pv"===e.op){for(var u in n)n.hasOwnProperty(u)&&u&&0===u.indexOf("_p_")&&(e[u]=n[u]);e.event="page_show",e.page_url=location.href}"1"===n.is_back&&(e.is_back="1"),e.refer_channel_msgid=e.refer_channel_msgid||n.msgid,delete e.useExistsParams,Ve&&Ve.length>0&&(e=Ve.reduce((function(e,t,r,n){return t(e,r,n)}),e)),Be.push(e),Ae(t)}},Ae=function(e){if(0!==Be.length){for(var t=function(){var e=Be.pop();"epv"===e.op?r(e):setTimeout((function(){r(e)}),0)};Be.length>0;)t();e&&(Je.isNativePlatform||Je.isTinyNativePlatform?Promise.resolve().then((function(){e()})):setTimeout(e,100))}else e&&e();function r(e){var t=Ue.loggingURL,r=Ue.logRoutes||{};if(window.location&&"https:"===window.location.protocol&&(r=Ue.httpsLogRoutes,t=Ue.httpsLoggingURL),["chat_error","error","real_error"].indexOf(e.op)<0?(Je.isWeChatMiniProgram&&!ue.default.isGrey({name:"nologMiniProgram"})&&(r={},t=Ue.wxAppLoggingURL),Je.isQQMiniProgram&&!ue.default.isGrey({name:"nologMiniProgram"})&&(r={},t=Ue.qqAppLoggingURL)):e.platform=Je.platform,null==e.impr_id){e=ve()({},Ze,e||{}),Je.isNativePlatform||Je.isTinyNativePlatform||(e.dcf=function(e){var t=(0,re.getCookie)("pdd_vds"),r=t.substr(0,28),n=t.substr(28),o=e.time||"",i=e.op||"";Ke[i]||(Ke[i]=1);var a=(0,re.crc32)("".concat(o).concat(i).concat(n).concat(Ke[i])),c="".concat(r,".").concat(Ke[i],".").concat(a);return Ke[i]++,c}(e));var n=r[(e.ad||"ad"===e.routeKey)&&["click","impr"].indexOf(e.op)>=0?"ad":e.op]||t;delete e.routeKey,window.navigator.sendBeacon&&!Je.isNativePlatform&&(e.support_beacon=1);var o=Ne(e),i=o.q,a=o.entries,c="text/plain;charset=UTF-8";if("real_error"==e.op&&(e.status_code&&(e.payload?e.payload.status_code=e.status_code:e.payload={status_code:e.status_code},delete e.status_code),e.error_message&&(e.error_msg=e.error_message,delete e.error_message),e.params&&(e.payload?e.payload.params=e.params:e.payload={params:e.params},delete e.params),e.sub_op&&(e.payload?e.payload.sub_op=e.sub_op:e.payload={sub_op:e.sub_op},delete e.sub_op),e.debug_url&&(e.payload?e.payload.debug_url=e.debug_url:e.payload={debug_url:e.debug_url},delete e.debug_url),e.log_version="1.0.0",i=JSON.stringify(e)),Je.isNativePlatform||Je.isTinyNativePlatform){var s=Je.statisfy&&Je.statisfy("4.45.0","4.33.0","greaterThanEqual")||Je.isTinyNativePlatform;if(s&&a.length>0)return void a.forEach((function(e){(0,ne.invokeBridgeCallNativeFun)("AMAnalytics","send",{url:n,value:e}).catch(l)}));if(["chat_error","error","real_error"].indexOf(e.op)<0){if(s&&o.oriParams)return o.oriParams.use_AMAnalytics=1,void(0,ne.invokeBridgeCallNativeFun)("AMAnalytics","send",{url:n,value:o.oriParams}).catch(l)}else if((0,te.compareVersion)(Je.version,"5.41.0")>=0)return(0,ne.invokeBridgeCallNativeFun)("JSReporter","addMarmotLog",e).catch(l);(0,ne.invokeBridgeCallNativeFun)("JSNetwork","request",{method:"POST",url:n,headers:{"Content-Type":c},data:i}).catch(l)}else{if(window.navigator.sendBeacon&&ue.default.isGrey({name:"UseBeaconReport"})&&["pv","click","impr"].indexOf(e.op)>=0&&window.navigator.sendBeacon(n,i))return;try{var u;if(!window.XMLHttpRequest)return;(u=new XMLHttpRequest).open("POST",n,!0),u.setRequestHeader("Content-Type",c),u.withCredentials=!0,u.send(i)}catch(e){}}}function l(e){var t=Te(e);console.error(xe(JSON.stringify(t,Se())))}}},Ne=function(e){var t=(e=e||{}).items;if("string"==typeof t)try{t=JSON.parse(t)}catch(e){console.log(e)}if(me()(e.items)&&e.items.length>0){t=e.items,delete e.items;var r=t.map((function(t,r){t&&!t.log_id&&(t.log_id=Pe());var n=ve()({},e,t);return["ad","p_rec"].forEach((function(e,t){n[e]&&(n[e]=Me(n[e]))})),n})),n=r.reduce((function(e,t){var r=(0,re.buildQuery)(t);return"".concat(e).concat(r,"$")}),"");return{q:n=n.slice(0,n.length-1),entries:r}}return e.items=Me(e.items),{q:(0,re.buildQuery)(e),oriParams:Qe(e),entries:[]}},Qe=function(e){if(fe()(e)){var t={};for(var r in e)"object"===$()(e[r])?t[r]=JSON.stringify(e[r]):t[r]=e[r];return t}return null},Me=function(e){return e&&"string"!=typeof e?JSON.stringify(e):e},He=function(){ie.default.initCmtPage();var e=Date.now();window.addEventListener("load",(function(){try{if(window.parent!==window){var e=document.referrer;Ie({op:"real_error",page:"page been iframed by "+e,error_message:"iframe_injected",page_url:location.href})}}catch(e){console.log(e)}})),Je.isNativePlatform||(void 0!==document.hidden&&window.addEventListener("visibilitychange",(function(){document.hidden?Ie({op:"epv",sub_op:"leave",enter_time:e,time:Date.now()}):e=Date.now()})),window.addEventListener("unload",(function(){Ie({op:"epv",sub_op:"leave",enter_time:e,close_time:Date.now()})})))},Je=(0,te.getCurrentPlatform)(),Ue=ee.default.get(location.host),qe={isCached:!1,hasReferQuery:!1,refer:{refer_page_id:null,refer_page_name:null,refer_page_section:null,refer_page_element:null}},Be=[],Ve=[],Ge=window.onerror;if(window.onerror=function(e,t,r,n,o){if("function"==typeof Ge&&!Ge._raw){var i=e;o&&o.stack&&(i=ke(o)),a=i,c="Event",Object.prototype.toString.call(a)==="[object "+(c||"Object")+"]"&&(i+=i.type?"--"+i.type+"--"+(i.target?i.target.tagName+"::"+i.target.src:""):""),Ge(i,t,r,n,o)}var a,c},ce().report.subscribe((function(e){var t="";if(e&&(t=e.name+":"+e.message,e.stack&&e.stack.length))for(var r=0;r<e.stack.length;r++)t+="@ ".concat(e.stack[r].func,"(").concat(e.stack[r].url,":").concat(e.stack[r].line,":").concat(e.stack[r].column,")");var n=location.search?location.href+"&"+(0,re.buildQuery)({JS_ERROR:t}):location.href+"?"+(0,re.buildQuery)({JS_ERROR:t});Ie({page:e?e.name+" "+e.message+" "+JSON.stringify(e.stack):"no info",op:"real_error",page_url:location.href,debug_url:n})})),window.addEventListener("unhandledrejection",(function(e){var t=Te(e.reason);Ie({page:"unhandledrejection reason:"+xe(JSON.stringify(t,Se())),error_msg:t.error_msg,op:"real_error",page_url:location.href})})),location.search){var We=(0,re.parseQuery)(location.search);We.JS_ERROR&&console.error(We.JS_ERROR.replace(/\)@/g,"\n)@"))}var Ze={screen_width:window.screen.width,screen_height:window.screen.height,dpr:window.devicePixelRatio,app_version:"",platform:""},Ke={};Ze.app_version=Je.version,Ze.platform=Je.isTinyNativePlatform?te.PLATFORM.PddAndroid:Je.platform===te.PLATFORM.MaJiaBaoAndroid?te.PLATFORM.Unknown:Je.platform;var ze,Xe,Ye,$e={init:He,send:Ie,info:function(e){De(2,e)},warn:function(e){De(3,e)},error:function(e){De(4,e)},sendPv:function(e,t){e=ve()({},e,{op:"pv"}),Ie(e)},addDefaultParams:function(e){Ze=ve()({},Ze,e)},getLogID:Pe,isImprTester:function(){return true},getImprID:function(e){return Pe()},getImprTime:function(){return 1e3},initLogger:function(){He()},trackingRecord:function(e,t){null==Ue.loggingURL||Ue.loggingURL.length<=0||Ie(e,t)},hasReferQuery:function(){return qe.isCached||Ee(),qe.hasReferQuery},updateCacheContextInfo:Oe,isAdTrackingTester:function(e){e},addMiddleware:function(e){de()(e)?Ve.push(e):me()(e)&&e.forEach((function(e){Ve.push(e)}))}},et=r("fMgu"),tt=r.n(et),rt=["className","onClose"];function nt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ot(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?nt(Object(r),!0).forEach((function(t){u()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):nt(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function it(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var at,ct,st,ut,lt=$e.trackingRecord,ft=D()(tt())(ze=function(e){m()(n,e);var t,r=(t=n,function(){var e,r=y()(t);if(it()){var n=y()(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return v()(this,e)});function n(){return f()(this,n),r.apply(this,arguments)}return d()(n,[{key:"componentDidMount",value:function(){lt(ot({op:"impr"},this.props.guideLog)),lt(ot({op:"impr"},this.props.closeGuideIconLog))}},{key:"render",value:function(){var e=this.props,t=e.className,r=e.onClose,n=P()(e,rt);return delete n.guideLog,delete n.closeGuideIconLog,w().createElement("div",c()({className:Q()(tt().container,t)},n),w().createElement("div",{className:tt().close,onClick:r},Xe||(Xe=w().createElement("span",null)),Ye||(Ye=w().createElement("span",null))))}}]),n}(w().Component))||ze,pt=r("lrCg"),dt=r.n(pt),gt=r("xeO4"),mt=r.n(gt),ht=r("T6n4"),vt=r.n(ht),bt=r("L0qb"),yt=r("CLTR"),_t=r("25h1");function wt(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var kt,St,xt,Tt,Pt,Rt=0,Et=1,Ot=2,Ft=1,Ct=2,Lt=3,jt=4,Dt=(0,k.observer)((ct=function(e){m()(i,e);var t,r,n,o=(t=i,function(){var e,r=y()(t);if(wt()){var n=y()(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return v()(this,e)});function i(){var e;f()(this,i);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return e=o.call.apply(o,[this].concat(r)),E()(e,"statusbarHeight",st,F()(e)),E()(e,"currentFloor",ut,F()(e)),e.enterSecondFloorSource=null,e.removeSecondFloorListener=null,e.autoEnterSecondFloorTimer=null,e.showSecondFloor=mt()(vt().mark((function t(){var r=arguments;return vt().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,bt.rR.apply(void 0,r);case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),e.props.logError(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])}))),e.closeSecondFloor=mt()(vt().mark((function t(){var r=arguments;return vt().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,bt.kW.apply(void 0,r);case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),e.props.logError(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])}))),e.removeAutoEnterSecondFloorTimer=function(){null!==e.autoEnterSecondFloorTimer&&(clearTimeout(e.autoEnterSecondFloorTimer),e.autoEnterSecondFloorTimer=null)},e.onSecondFloorClose=function(){e.removeAutoEnterSecondFloorTimer(),e.toggleCurrentFloor(Rt),e.toggleEnterSecondFloorSource(null)},e.onSecondFloorOpen=function(t){t||e.props.logError(t);var r=t.isGuideLayerOpen,n=t.openType;return r===bt.tg.guide?(e.autoEnterSecondFloorTimer=setTimeout((function(){e.closeSecondFloor(!0)}),3e3),void e.toggleCurrentFloor(Et)):r===bt.tg.secondFloor?(e.removeAutoEnterSecondFloorTimer(),e.currentFloor===Et&&(n===bt.dP.jsApi&&e.toggleEnterSecondFloorSource(Ct),n===bt.dP.user&&e.toggleEnterSecondFloorSource(Ft)),e.currentFloor===Rt&&(n===bt.dP.jsApi&&e.toggleEnterSecondFloorSource(jt),n===bt.dP.user&&e.toggleEnterSecondFloorSource(Lt)),void e.toggleCurrentFloor(Ot)):void 0},e}return d()(i,[{key:"setStatusbarHeight",value:function(e){this.statusbarHeight=e}},{key:"toggleCurrentFloor",value:function(e){this.currentFloor=e}},{key:"toggleEnterSecondFloorSource",value:function(e){this.enterSecondFloorSource=e}},{key:"preLoadImg",value:(n=mt()(vt().mark((function e(){return vt().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,_t.Z)((0,G.lP)(this.props.bgImg,this.props.imgParams));case 2:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"getStatusbarHeight",value:(r=mt()(vt().mark((function e(){var t,r,n;return vt().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=44,e.prev=1,e.next=4,(0,yt.k$)("getNavigationHeight",{},!0);case 4:r=e.sent,n=r.statusbar_height,this.setStatusbarHeight(n>0?n:t),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),this.setStatusbarHeight(t),this.props.logError(e.t0);case 13:case"end":return e.stop()}}),e,this,[[1,9]])}))),function(){return r.apply(this,arguments)})},{key:"init",value:function(){var e=mt()(vt().mark((function e(){var t,r,n,o;return vt().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.getStatusbarHeight(),e.prev=1,e.next=4,Promise.all([(0,bt.qV)(this.onSecondFloorOpen),(0,bt.WB)(this.onSecondFloorClose),this.preLoadImg()]);case 4:return t=e.sent,r=dt()(t,2),n=r[0],o=r[1],this.removeSecondFloorListener=function(){n(),o()},e.next=11,(0,bt.Vj)({url:window.location.href});case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),this.props.logError(e.t0);case 16:case"end":return e.stop()}}),e,this,[[1,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.init()}},{key:"componentWillUnmount",value:function(){var e;null===(e=this.removeSecondFloorListener)||void 0===e||e.call(this),this.removeAutoEnterSecondFloorTimer()}},{key:"render",value:function(){return this.props.children({statusbarHeight:this.statusbarHeight+40,closeSecondFloor:this.closeSecondFloor,showSecondFloor:this.showSecondFloor,removeAutoEnterSecondFloorTimer:this.removeAutoEnterSecondFloorTimer,currentFloor:this.currentFloor,enterSecondFloorSource:this.enterSecondFloorSource})}}]),i}(w().Component),st=L()(ct.prototype,"statusbarHeight",[I.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),ut=L()(ct.prototype,"currentFloor",[I.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return Rt}}),L()(ct.prototype,"setStatusbarHeight",[I.action],Object.getOwnPropertyDescriptor(ct.prototype,"setStatusbarHeight"),ct.prototype),L()(ct.prototype,"toggleCurrentFloor",[I.action],Object.getOwnPropertyDescriptor(ct.prototype,"toggleCurrentFloor"),ct.prototype),at=ct))||at,It=r("A3+/"),At={index:0,label:"二楼"},Nt={index:1,label:"二楼跳过按钮"},Qt={index:2,label:"引导"},Mt={index:3,label:"引导关闭按钮"},Ht=function(e){return e.label},Jt=function(e){return e.index},Ut=[Ht(At),Ht(Nt),Ht(Qt),Ht(Mt)],qt=function(e){return e.getLog(Jt(At))},Bt=function(e){return e.getLog(Jt(Qt))},Vt=function(e){return e.getLog(Jt(Mt))};function Gt(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var Wt,Zt,Kt,zt,Xt=(kt=function(e){m()(n,e);var t,r=(t=n,function(){var e,r=y()(t);if(Gt()){var n=y()(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return v()(this,e)});function n(){var e;f()(this,n);for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return e=r.call.apply(r,[this].concat(o)),E()(e,"jumpUrl",St,F()(e)),E()(e,"bgImg",xt,F()(e)),E()(e,"showJumpBtn",Tt,F()(e)),E()(e,"residenceTime",Pt,F()(e)),e.getRemark=function(){return Ut},e}return d()(n)}(r("wfOt").Z),St=L()(kt.prototype,"jumpUrl",[I.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),xt=L()(kt.prototype,"bgImg",[I.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Tt=L()(kt.prototype,"showJumpBtn",[I.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),Pt=L()(kt.prototype,"residenceTime",[I.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 3}}),kt);function Yt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function $t(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Yt(Object(r),!0).forEach((function(t){u()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Yt(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function er(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var tr=(0,It.G)(!1)(Wt=(0,k.inject)("store")(Wt=(0,k.observer)((Kt=Zt=function(e){m()(n,e);var t,r=(t=n,function(){var e,r=y()(t);if(er()){var n=y()(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return v()(this,e)});function n(){var e;f()(this,n);for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return(e=r.call.apply(r,[this].concat(o))).renderGuide=function(t){var r=t.closeSecondFloor,n=t.showSecondFloor,o=t.removeAutoEnterSecondFloorTimer,i=Bt(e.store),a=Vt(e.store);return w().createElement(ft,{guideLog:i,closeGuideIconLog:a,onClose:function(e){e.stopPropagation(),o(),r(!0),(0,V.iH)(null,a)},onClick:function(e){e.stopPropagation(),o(),n(!0),(0,V.iH)(null,i)}})},e.logError=function(t){-999!==t&&e.store.logError(t)},e}return d()(n,[{key:"imgParams",get:function(){return{resizeWidth:1e3,quality:70}}},{key:"jumpToLandPage",value:function(e){this.store.jumpUrl&&this.commonForward((0,G.Vi)(this.store.jumpUrl,{refer_com_type:e.com_type}),e)}},{key:"renderJumpIcon",value:function(e){var t=this,r=e.closeSecondFloor,n=function(){setTimeout((function(){r(!1,0)}),100)},o=this.store.getLog(Jt(Nt));return w().createElement(B,{log:o,showJumpBtn:this.store.showJumpBtn,seconds:1e3*this.store.residenceTime,onEndTime:function(){t.jumpToLandPage(qt(t.store)),n()},onJumpClick:function(e){e.stopPropagation(),(0,V.iH)(null,o),t.jumpToLandPage(o),n()}})}},{key:"renderSecondFloorImpr",value:function(e){var t=e.enterSecondFloorSource;return w().createElement(x.Z,{trackingInfo:$t($t({},qt(this.store)),{},{enter_second_floor_source:t})},zt||(zt=w().createElement("div",null)))}},{key:"render",value:function(){var e=this;return w().createElement(Dt,{logError:this.logError,bgImg:this.store.bgImg,imgParams:$t($t({},this.imgParams),{},{webpEnable:this.rootStore.webpEnable})},(function(t){var r=t.statusbarHeight,n=t.closeSecondFloor,o=t.showSecondFloor,i=t.removeAutoEnterSecondFloorTimer,a=t.currentFloor,s=t.enterSecondFloorSource;return w().createElement(X,c()({},e.imgParams,{paddingTop:"".concat(r,"px"),backgroundImage:e.store.bgImg,jumpIcon:a===Ot&&e.renderJumpIcon({closeSecondFloor:n}),guide:a===Et&&e.renderGuide({closeSecondFloor:n,showSecondFloor:o,removeAutoEnterSecondFloorTimer:i}),secondFloorImpr:a===Ot&&e.renderSecondFloorImpr({enterSecondFloorSource:s})}))}))}}]),n}(S.Z),Zt.Store=Xt,Wt=Kt))||Wt)||Wt)||Wt},"A3+/":function(e,t,r){"use strict";r.d(t,{G:function(){return j}});var n=r("0Qln"),o=r.n(n),i=r("U5BY"),a=r.n(i),c=r("hwDT"),s=r.n(c),u=r("i/Q6"),l=r.n(u),f=r("f6/u"),p=r.n(f),d=r("f17R"),g=r.n(d),m=r("Vl5s"),h=r.n(m),v=r("jXLS"),b=r.n(v),y=(r("XC3m"),r("xeO4")),_=r.n(y),w=r("T6n4"),k=r.n(w),S=r("9bdW"),x=r.n(S),T=r("KdYu"),P=r("UK90"),R=r("CLTR"),E=r("L0qb"),O=r("KVD2"),F=r.n(O);function C(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var L=function(){var e=_()(k().mark((function e(){var t;return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,R.b4)("getUnoContext");case 3:return t=e.sent,e.abrupt("return",1===(null==t?void 0:t.is_second_floor_container));case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),j=function(e){return function(t){var r,n,i,c,u,f=(0,T.inject)("store")(r=(0,T.observer)((u=c=function(r){p()(f,r);var n,c,u=(n=f,function(){var e,t=h()(n);if(C()){var r=h()(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return g()(this,e)});function f(){var e;a()(this,f);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return(e=u.call.apply(u,[this].concat(r))).inited=!1,o()(e,"show",i,l()(e)),e}return s()(f,[{key:"rootStore",get:function(){return this.props.store}},{key:"setShow",value:function(e){this.show=e}},{key:"componentDidMount",value:(c=_()(k().mark((function t(){var r;return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=this.rootStore.requestContext,(0,E.Xs)(r.platform)){t.next=3;break}return t.abrupt("return");case 3:if(!e){t.next=10;break}if((0,E.WC)(r.queries)){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,L();case 8:if(t.sent){t.next=10;break}return t.abrupt("return");case 10:if(!f.hasLoadSecondFloor){t.next=12;break}return t.abrupt("return");case 12:f.hasLoadSecondFloor=!0,this.inited=!0,this.setShow(!0);case 15:case"end":return t.stop()}}),t,this)}))),function(){return c.apply(this,arguments)})},{key:"render",value:function(){return this.show?x().createElement(t,this.props):null}},{key:"componentWillUnmount",value:function(){this.inited&&(f.hasLoadSecondFloor=!1)}}]),f}(x().Component),c.hasLoadSecondFloor=!1,n=u,i=b()(n.prototype,"show",[P.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),b()(n.prototype,"setShow",[P.action],Object.getOwnPropertyDescriptor(n.prototype,"setShow"),n.prototype),r=n))||r)||r;return F()(f,t)}}},VplU:function(e,t,r){var n=r("WtrJ"),o=r("DDs0"),i="string"==typeof n?[[e.id,n,""]]:n;(t=e.exports=n.locals||{})._getContent=function(){return i},t._getCss=function(){return""+n},t._insertCss=function(e){return o(i,e)}},iQJJ:function(e,t,r){var n=r("xDb4"),o=r("DDs0"),i="string"==typeof n?[[e.id,n,""]]:n;(t=e.exports=n.locals||{})._getContent=function(){return i},t._getCss=function(){return""+n},t._insertCss=function(e){return o(i,e)}},fMgu:function(e,t,r){var n=r("Whla"),o=r("DDs0"),i="string"==typeof n?[[e.id,n,""]]:n;(t=e.exports=n.locals||{})._getContent=function(){return i},t._getCss=function(){return""+n},t._insertCss=function(e){return o(i,e)}},WtrJ:function(e,t,r){(t=e.exports=r("Cgg2")(!1)).push([e.id,"._1gKEaeRl{height:100vh;width:100vw;background-size:100% auto;background-repeat:no-repeat;background-position:bottom}._1GxsvSq6{display:-webkit-box;display:flex;display:-webkit-flex;-webkit-box-pack:end;justify-content:flex-end;-webkit-justify-content:flex-end;-webkit-box-align:center;align-items:center;-webkit-align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-flex-direction:column;width:100%;height:100%;position:relative}._3IVHidwL{position:absolute;right:.13rem;top:.03rem}.BQes_qr1{width:.1rem;height:.1rem;position:absolute;top:.3rem;left:.3rem}",""]),t.locals={container:"_1gKEaeRl",content:"_1GxsvSq6",jumpIcon:"_3IVHidwL",secondFloorImpr:"BQes_qr1"}},xDb4:function(e,t,r){(t=e.exports=r("Cgg2")(!1)).push([e.id,".Daaan7q0{display:-webkit-box;display:flex;display:-webkit-flex;-webkit-box-pack:center;justify-content:center;-webkit-justify-content:center;-webkit-box-align:center;align-items:center;-webkit-align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-flex-direction:row;padding:0 .07rem;min-width:.84rem;height:.27rem;border:.02rem solid #fff;border-radius:.13rem;font-size:.15rem;font-weight:700;color:#fff;background-color:rgba(0,0,0,.2)}._3thkSP7Z{margin-right:.05rem}._2_BC6IO4{display:-webkit-box;display:flex;display:-webkit-flex;-webkit-box-pack:center;justify-content:center;-webkit-justify-content:center;-webkit-box-align:center;align-items:center;-webkit-align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-flex-direction:row;height:100%}._3lXScTkL{margin-right:.02rem}._3Dgy9rsC{-webkit-flex-shrink:0;flex-shrink:0}",""]),t.locals={container:"Daaan7q0",left:"_3thkSP7Z",right:"_2_BC6IO4",text:"_3lXScTkL",arrow:"_3Dgy9rsC"}},Whla:function(e,t,r){(t=e.exports=r("Cgg2")(!1)).push([e.id,"._3GLvpIVU{height:100%;width:100%;position:relative}._3LY55ftr{position:absolute;right:.1rem;bottom:.34rem;width:.14rem;height:.14rem;border:.01rem solid #fff;border-radius:50%;background:rgba(0,0,0,.4)}._3LY55ftr span{display:inline-block;background:#fff;width:.08rem;height:.01rem;position:absolute;top:50%;left:50%;-webkit-transform-origin:center center;transform-origin:center center}._3LY55ftr span:first-child{-webkit-transform:translate(-50%,-50%) rotate(45deg);transform:translate(-50%,-50%) rotate(45deg)}._3LY55ftr span:last-child{-webkit-transform:translate(-50%,-50%) rotate(135deg);transform:translate(-50%,-50%) rotate(135deg)}",""]),t.locals={container:"_3GLvpIVU",close:"_3LY55ftr"}},t2Dn:function(e,t,r){var n=r("hypo"),o=r("ljhN");e.exports=function(e,t,r){(void 0!==r&&!o(e[t],r)||void 0===r&&!(t in e))&&n(e,t,r)}},"cq/+":function(e,t,r){var n=r("mc0g")();e.exports=n},"+Qka":function(e,t,r){var n=r("fmRc"),o=r("t2Dn"),i=r("cq/+"),a=r("T1AV"),c=r("ZwvR"),s=r("mTTR"),u=r("itsj");e.exports=function e(t,r,l,f,p){t!==r&&i(r,(function(i,s){if(p||(p=new n),c(i))a(t,r,s,l,e,f,p);else{var d=f?f(u(t,s),i,s+"",t,r,p):void 0;void 0===d&&(d=i),o(t,s,d)}}),s)}},T1AV:function(e,t,r){var n=r("t2Dn"),o=r("5Tg0"),i=r("yP5f"),a=r("Q1l4"),c=r("+iFO"),s=r("03A+"),u=r("Z0cm"),l=r("3L66"),f=r("DSRE"),p=r("lSCD"),d=r("ZwvR"),g=r("YO3V"),m=r("c6wG"),h=r("itsj"),v=r("jeLo");e.exports=function(e,t,r,b,y,_,w){var k=h(e,r),S=h(t,r),x=w.get(S);if(x)n(e,r,x);else{var T=_?_(k,S,r+"",e,t,w):void 0,P=void 0===T;if(P){var R=u(S),E=!R&&f(S),O=!R&&!E&&m(S);T=S,R||E||O?u(k)?T=k:l(k)?T=a(k):E?(P=!1,T=o(S,!0)):O?(P=!1,T=i(S,!0)):T=[]:g(S)||s(S)?(T=k,s(k)?T=v(k):d(k)&&!p(k)||(T=c(S))):P=!1}P&&(w.set(S,T),y(T,S,b,_,w),w.delete(S)),n(e,r,T)}}},EA7m:function(e,t,r){var n=r("zZ0H"),o=r("Ioao"),i=r("wclG");e.exports=function(e,t){return i(o(e,t,n),e+"")}},LsHQ:function(e,t,r){var n=r("EA7m"),o=r("mv/X");e.exports=function(e){return n((function(t,r){var n=-1,i=r.length,a=i>1?r[i-1]:void 0,c=i>2?r[2]:void 0;for(a=e.length>3&&"function"==typeof a?(i--,a):void 0,c&&o(r[0],r[1],c)&&(a=i<3?void 0:a,i=1),t=Object(t);++n<i;){var s=r[n];s&&e(t,s,n,a)}return t}))}},mc0g:function(e){e.exports=function(e){return function(t,r,n){for(var o=-1,i=Object(t),a=n(t),c=a.length;c--;){var s=a[e?c:++o];if(!1===r(i[s],s,i))break}return t}}},itsj:function(e){e.exports=function(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}},"3OWR":function(e,t,r){var n=r("MrPd"),o=r("juv8"),i=r("LsHQ"),a=r("MMmD"),c=r("6sVZ"),s=r("7GkX"),u=Object.prototype.hasOwnProperty,l=i((function(e,t){if(c(t)||a(t))o(t,s(t),e);else for(var r in t)u.call(t,r)&&n(e,r,t[r])}));e.exports=l},"3L66":function(e,t,r){var n=r("MMmD"),o=r("Vslq");e.exports=function(e){return o(e)&&n(e)}},QkVN:function(e,t,r){var n=r("+Qka"),o=r("LsHQ")((function(e,t,r){n(e,t,r)}));e.exports=o},jeLo:function(e,t,r){var n=r("juv8"),o=r("mTTR");e.exports=function(e){return n(e,o(e))}},asOj:function(e,t,r){e.exports=r("xyHx")("3OdE")},Bw80:function(e,t,r){e.exports=r("xyHx")("EhXv")},dXGj:function(e,t,r){e.exports=r("xyHx")("hQH6")},mMHC:function(e,t,r){e.exports=r("xyHx")("m7/H")},DON7:function(e,t,r){e.exports=r("xyHx")("uf4C")}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/assets/js/mobile-dc/DcNativeSecondFloorContainer-f5853487990aeee728fe.js.map