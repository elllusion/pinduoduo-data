(self.webpackChunk_name_mobile_dc=self.webpackChunk_name_mobile_dc||[]).push([["90f3"],{hqbd:function(t,e,r){"use strict";r.d(e,{Sl:function(){return a},bd:function(){return c},lb:function(){return i},Fs:function(){return u}});var n="promotion_monthly_wx",o="promotion_monthly_subject_wx",a={window_id:4020,cid:n,campaign:n,activity_params_keys:encodeURIComponent(["id"].join(","))},c={window_id:4021,cid:o,campaign:o,activity_params_keys:encodeURIComponent(["subject_id"].join(","))},i=(encodeURIComponent(["id","type"].join(",")),{_p_goapp:"h5_promotion_monthly"}),u={_p_goapp:"h5_promotion_monthly_subject"}},hCSv:function(t,e,r){"use strict";r.d(e,{w:function(){return s}});var n=r("/4JS"),o=r.n(n),a=r("4k0V"),c=r("DON7");function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(t.indexOf("_p_launch_id")>=0)return t;var r=t||"index.html",n=(e||{}).disableExtendTransferParameters,o=e.transferParams||{},i={};n||(i=(0,a.getExtendInfoFromQuery)(!0));var s=[(0,c.getPageSN)()||"",Date.now(),(0,a.nanoid)(10)].join("_"),f=document.createElement("a");f.href=r;var p=(0,a.parseQuery)(f.search),l=o;Object.keys(o).forEach((function(t){p[t]&&(l={})}));var h=(0,a.buildQuery)(u(u(u({},l),p),i));return h=h?"_p_launch_id=".concat(s,"&").concat(h):"_p_launch_id=".concat(s),(f.pathname+"?"+h+f.hash).slice(1)}},YkCx:function(t,e,r){"use strict";r.d(e,{Z:function(){return i}});var n=r("hCSv"),o=r("4k0V");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"index.html",e=document.createElement("a");e.href=t;var r=(0,o.parseQuery)(e.search);return r._p_launch_id||""}function c(t,e){var r=(0,n.w)(t,e);return{launchUrl:r,launchId:a(r)}}var i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"index.html",e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return c(t,{disableExtendTransferParameters:!e})}},JfhF:function(t,e,r){"use strict";r.d(e,{Z:function(){return x}});var n={LINK_ACTIVATION:"/p",APK_ACTIVATION:"/p/app",LAUNCH_ACTIVATION:"/p/pre",UNIVERSAL_LINK_ACTIVATION:"/p/pre/ul"},o=r("xeO4"),a=r.n(o),c=r("T6n4"),i=r.n(c),u=r("asOj"),s=r("4vPy");var f=function(t){if(t&&window&&(window.__DOWNLOAD_CONFIG||window.leoConfig&&window.leoConfig.__DOWNLOAD_CONFIG)){return(window.__DOWNLOAD_CONFIG?window.__DOWNLOAD_CONFIG:window.leoConfig.__DOWNLOAD_CONFIG||{})[t]}return null};var p=function(t){var e=u.default.get(location.host),r=(0,s.getCurrentPlatform)()||{},n=(t||{}).from_browser;n=parseInt(n,10)||0;var o=(t||{}).use_proxy_way;if(o=parseInt(o,10)||0,r.isIOSWeChatPlatform&&n)return"".concat(location.origin,"/proxy/at");if(o||e.useProxyDomain)return"".concat(location.origin,"/proxy/at");if(location&&location.hostname.indexOf("hutaojie")>=0)return"https://at.hutaojie.com";var a=(t||{}).at_host_value||"",c=f("at_host");return a||c||"https://at.pinduoduo.com"};var l=function(t,e){var r=(e||{}).pds_scene;if(r)return t===n.APK_ACTIVATION?"/c/"+r:"/b/"+r;if(t===n.LINK_ACTIVATION){var o=(e||{}).at_path_value||"",a=f("at_path");return o||a||"/s"}if(t===n.APK_ACTIVATION){var c=(e||{}).at_apppath_value||"",i=f("at_apppath");return c||i||"/p/app"}return t},h=r("4k0V");function _(t,e){return[].concat(t).filter((function(t){return 0===e.indexOf(t)})).length}var d=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];var n=Object.assign.apply(Object,[{}].concat(e,[{page_el_sn:null,page_id:null,page_sn:null,is_back:null,msgid:null}])),o={};for(var a in n)!n.hasOwnProperty(a)||!_(["refer_share"],a)&&_(["refer","_x_","_ex_"],a)||(o[a]=n[a]);return o},v=r("4mj9"),m=r("DON7");var g=function(){var t=u.default.get(location.host),e=(0,s.getCurrentPlatform)()||{};return e.platform===s.PLATFORM.WeChat?t.AppID.WeChat:e.platform===s.PLATFORM.Weibo?t.AppID.Weibo:e.platform===s.PLATFORM.QQ?e.isNativePlatform?t.AppID.QQ:t.AppID.QQConnect:""};var y=function(){return[Date.now(),(0,h.nanoid)(16)].join("")};var O=function(){var t=null;try{t=localStorage.getItem("WxCheckPdd")}catch(e){t=null}return null!=t?parseInt(t,10)||0:t};function b(){return b=a()(i().mark((function t(){var e,r,n,o,a,c,u,f,p,l,_,d,b,w=arguments;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(e=w.length,r=new Array(e),n=0;n<e;n++)r[n]=w[n];return o=Object.assign.apply(Object,[{}].concat(r)),a=y(),c=(0,s.getCurrentPlatform)()||{},u=(0,h.parseQuery)(window.location.search),f="",p="",t.prev=7,t.next=10,(0,v.getUid)();case 10:return f=t.sent,t.next=13,(0,v.getUin)();case 13:p=t.sent,t.next=18;break;case 16:t.prev=16,t.t0=t.catch(7);case 18:for(d in l=Object.assign({},(0,m.getKeyParams)(),{log_id:a,user_id:f,uin:p,platform:c.platform,app_version:c.version,app_id:g(),time:a.substring(0,13),wx_check_pdd:O(),api_uid:(0,h.getCookie)("api_uid"),refer_page_name:(0,m.getPageName)(),refer_page_id:(0,m.getPageID)(),refer_page_sn:(0,m.getPageSN)()},(0,h.getExtendInfoFromQuery)(!0)),["from"].forEach((function(t){var e="refer_channel_"+t,r=o[t]||u[t];r&&(l[e]=r)})),["src","campaign","cid","msgid","scene"].forEach((function(t){var e="refer_"+t,r=o[t]||u[t];r&&(l[e]=r)})),["refer_share_id","refer_share_uid","refer_share_channel","refer_share_form"].forEach((function(t){var e=o[t]||o[t.slice(6)]||u[t]||u[t.slice(6)];e&&(l[t]=e)})),_={_sid:"refer_share_id",_suid:"refer_share_uid",_sc:"refer_share_channel",_sf:"refer_share_form"})(b=o[d]||u[d])&&(l[_[d]]=b);return t.abrupt("return",l);case 28:case"end":return t.stop()}}),t,null,[[7,16]])}))),b.apply(this,arguments)}var w=function(){return b.apply(this,arguments)};function I(){return I=a()(i().mark((function t(){var e,r=arguments;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={},t.prev=1,t.next=4,w.apply(void 0,r);case 4:e=t.sent,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),e={};case 10:return t.abrupt("return",(0,h.buildQuery)(Object.assign({},d.apply(void 0,r),e)));case 11:case"end":return t.stop()}}),t,null,[[1,7]])}))),I.apply(this,arguments)}var P=function(){return I.apply(this,arguments)};function j(){return(j=a()(i().mark((function t(e){var r,o,a,c,u;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=(r=e||{}).downloadParams||{},a=r.activationType||n.LINK_ACTIVATION,c="",t.prev=4,t.next=7,P(o);case 7:c=t.sent,t.next=12;break;case 10:t.prev=10,t.t0=t.catch(4);case 12:return u="".concat(p(o)).concat(l(a,o),"?").concat(c),t.abrupt("return",u);case 14:case"end":return t.stop()}}),t,null,[[4,10]])})))).apply(this,arguments)}var C=function(t){return j.apply(this,arguments)};var x=function(t){var e=t||{};return e=Object.assign({},e,{activationType:n.LAUNCH_ACTIVATION}),C(e).then((function(t){var e="";t.indexOf("https://at.pinduoduo.com")>=0&&(e=t.replace("https://at.pinduoduo.com","https://at-ipv6.pinduoduo.com"));return Promise.all([(e&&fetch(e,{mode:"no-cors"}).then((function(){})).catch((function(){})),Promise.resolve()),fetch(t,{mode:"no-cors"}).then((function(){})).catch((function(){}))]).then((function(){})).catch((function(){}))})).catch((function(){}))}},vVfD:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return Q}});var n=r("U5BY"),o=r.n(n),a=r("hwDT"),c=r.n(a),i=r("f6/u"),u=r.n(i),s=r("f17R"),f=r.n(s),p=r("Vl5s"),l=r.n(p),h=r("9bdW"),_=r.n(h),d=r("KdYu"),v=r("ukrc"),m=r.n(v),g=r("om9U"),y=r.n(g),O=r("iuwq");function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var w=function(t){u()(n,t);var e,r=(e=n,function(){var t,r=l()(e);if(b()){var n=l()(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return f()(this,t)});function n(){var t;o()(this,n);for(var e=arguments.length,a=new Array(e),c=0;c<e;c++)a[c]=arguments[c];return(t=r.call.apply(r,[this].concat(a))).editors={bgImg:"",jumpUrl:""},t}return c()(n,[{key:"getRemark",value:function(){return[this.nickName]}}]),n}(r("wfOt").Z),I=r("BFRN"),P=r("V56i"),j=r("/4JS"),C=r.n(j),x=r("/18x"),A=r("YkCx"),D=r("JfhF"),k=r("4k0V"),N=r("hqbd"),T=r("H+T8");function S(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function R(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?S(Object(r),!0).forEach((function(e){C()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var E,V,U;function F(t){var e,r,n,o,a,c=t.targetUrl,i=t.store,u=function(t,e){var r=e.id?N.lb:N.Fs;return e.isEditor?"":(0,P.Vi)(t,R({is_back:null},r))}(c,i.rootStore);(0,x.sendClickMetrics)({op:"click",page_el_sn:426522}),e=(0,A.Z)(u),r=e.launchId,n=e.launchUrl,o=function(){(0,k.launchPDDApp)(n).catch((function(){(0,T.reload)(c)}))},a=R(R({},i.rootStore.id?N.Sl:N.bd),i.rootStore.query),(0,D.Z)({downloadParams:Object.assign({},a,{launch_id:r})}).then(o).catch(o)}function L(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var Q=m()(y())(E=(0,d.inject)("store")(E=(0,d.observer)((U=V=function(t){u()(n,t);var e,r=(e=n,function(){var t,r=l()(e);if(L()){var n=l()(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return f()(this,t)});function n(){var t;o()(this,n);for(var e=arguments.length,a=new Array(e),c=0;c<e;c++)a[c]=arguments[c];return(t=r.call.apply(r,[this].concat(a))).handleClick=function(){var e=(0,P.Vi)(t.store.editors.jumpUrl,{force_login:1,long_gray_num:t.rootStore.query.long_gray_num});F({targetUrl:e,store:t.store}),t.trackOnClickWithoutJump({targetUrl:e},0)},t}return c()(n,[{key:"render",value:function(){var t=this.store.editors.bgImg;return _().createElement("div",{id:this.componentId,style:this.style,className:y().wrapper},_().createElement(I.Z,{className:y().bgImg,src:t,onClick:this.handleClick}))}}]),n}(O.Z),V.Store=w,E=U))||E)||E)||E},om9U:function(t,e,r){var n=r("e6Az"),o=r("DDs0"),a="string"==typeof n?[[t.id,n,""]]:n;(e=t.exports=n.locals||{})._getContent=function(){return a},e._getCss=function(){return""+n},e._insertCss=function(t){return o(a,t)}},e6Az:function(t,e,r){(e=t.exports=r("Cgg2")(!1)).push([t.id,"._1B7z25G3{position:relative}._2qKHIGvP{width:100%;position:absolute;left:0;top:0}",""]),e.locals={wrapper:"_1B7z25G3",bgImg:"_2qKHIGvP"}},asOj:function(t,e,r){t.exports=r("xyHx")("3OdE")},DON7:function(t,e,r){t.exports=r("xyHx")("uf4C")}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/assets/js/mobile-dc/DcOpenScreenGuide-8135a563cde891553d9b.js.map