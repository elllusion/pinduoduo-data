(window["webpackJsonPmobile-new-game"]=window["webpackJsonPmobile-new-game"]||[]).push([["3d24"],{"+eIM":function(e,t,n){"use strict";n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return m}));var r=n("o0o1"),o=n.n(r),i=n("yXPU"),a=n.n(i),c=n("SJUw"),u=n.n(c),s=n("KoDT"),f=new Map,l="NOT_PDD_APP",p="NOT_SUPPORT_API",d="CHECK_SUPPORT_API_ERROR",b="CALL_API_ERROR",v=function(e,t,n,r){if(Object(s.getCurrentPlatform)().isNativePlatform){var o="".concat(e,":").concat(t),i=f.get(o);void 0!==i?i?n&&n():r&&r({errorCode:p,errorMsg:"当前app版本不支持".concat(e,":").concat(t)}):u.a.check(e,t,(function(i){i?(f.set(o,!0),n&&n()):(f.set(o,!1),r&&r({errorCode:p,errorMsg:"当前app版本不支持".concat(e,":").concat(t)}))}),(function(n){r&&r({errorCode:d,errorMsg:"执行pinbridge.check(".concat(e,",").concat(t,")异常"),err:n})}))}else r&&r({errorCode:l,errorMsg:"非端内，不支持".concat(e,":").concat(t)})};function h(e,t){return g.apply(this,arguments)}function g(){return(g=a()(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){return v(t,n,(function(){return e(!0)}),(function(){return e(!1)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var m=function(e,t,n){return new Promise((function(r,o){return v(e,t,(function(){u.a.callNative(e,t,n,r,(function(n,r){o({errorCode:b,errorMsg:"执行pinbridge.callNative(".concat(e,",").concat(t,")异常"),err:n,code:r})}))}),o)}))}},"/Mkd":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n("o0o1"),o=n.n(r),i=n("yXPU"),a=n.n(i),c=n("lwsE"),u=n.n(c),s=n("W8MJ"),f=n.n(s),l=n("+eIM");var p=new(function(){function e(){var t=this;u()(this,e),this.inited=!1,this.endMark=void 0,this.serverTime=void 0,this.initPromise=void 0,this.timer=void 0,this.syncTime(),this.timer=setInterval((function(){return t.syncTime()}),5e3)}return f()(e,[{key:"init",value:function(){return this.initPromise,this.initPromise}},{key:"syncTime",value:function(){var e=this,t=function(){var t=a()(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.a)("JSNetwork","getTimeInfo").then((function(e){return(null==e?void 0:e.server_time)||Date.now()}),(function(){return Date.now()}));case 2:e.serverTime=t.sent,e.endMark=Date.now(),e.inited=!0;case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();this.initPromise=t()}},{key:"getRealTime",value:function(){return this.inited?Math.floor(Date.now()-this.endMark+this.serverTime):Date.now()}},{key:"dispose",value:function(){clearInterval(this.timer)}}]),e}());p.init()},"2JHT":function(e,t,n){"use strict";function r(){return"undefined"==typeof window?"":window.bump_page_id_xyz||""}function o(e){return"undefined"==typeof window?"":(window.bump_page_id_xyz=e,e)}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}))},"38mt":function(e,t,n){e.exports=n("EQ+b")("38mt")},"5Ojd":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("SJUw"),o=n.n(r),i=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(r,i){return o.a.callNative(e,t,n,r,i)}))}},I8xV:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return s}));var r=n("h7Yj"),o=n("Fcpp"),i=n("Wgwc"),a=n.n(i);function c(e){var t;if(location.host.indexOf("m.hutaojie.com")>=0||"1"===Object(r.parseQuery)(location.search).show_debug_info||(null===(t=window)||void 0===t?void 0:t.show_debug_info)){for(var n,o=arguments.length,i=new Array(o>1?o-1:0),c=1;c<o;c++)i[c-1]=arguments[c];(n=console).debug.apply(n,[e].concat(i,[a()().format("mm:ss-SSS")]))}}function u(e){var t=e instanceof Error?e:new Error(JSON.stringify(e));o.default.trackingRecord({op:"real_error",page_url:location.href,error_msg:t.message})}function s(){}},J1eG:function(e,t,n){"use strict";n.d(t,"a",(function(){return L}));var r=n("QILm"),o=n.n(r),i=n("6MOg"),a=n.n(i),c=n("pVnL"),u=n.n(c),s=n("lSNA"),f=n.n(s),l=n("g5zU"),p=n.n(l),d=n("O7Vp"),b=n("jQz7"),v=n("S6GM"),h=n("38mt"),g=n.n(h);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var O,y=Object(i.memo)((function(e){p()(g.a);var t=e.src,n=e.lazy,r=void 0!==n&&n,i=e.highQuality,c=void 0!==i&&i,s=e.webpEnable,l=e.quality,h=e.resizeWidth,O=e.processParam,y=o()(e,["src","lazy","highQuality","webpEnable","quality","resizeWidth","processParam"]),w=Object(b.a)(s),j=Object(v.b)(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){f()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({webpEnable:w,resizeWidth:h,quality:l,highQuality:c},O)),P=j.src,k=j.param;return a.a.createElement(d.SimpleEmage,u()({lazy:r,src:P,processParam:k},y))})),w=n("lwsE"),j=n.n(w),P=n("W8MJ"),k=n.n(P),S=n("7W2i"),x=n.n(S),_=n("a1gu"),E=n.n(_),N=n("Nsbk"),C=n.n(N),R=n("zVJw"),A=n.n(R),D=n("kMCw"),I=n("KFxo");function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=C()(e);if(t){var o=C()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return E()(this,n)}}var M=n.n(I)()(A.a)(O=function(e){x()(n,e);var t=T(n);function n(){var e;j()(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={showSmall:!0},e.clearTimeout=void 0,e.rootRef=a.a.createRef(),e.originalImgOnLoad=function(t){var n,r;null===(n=(r=e.props).onLoad)||void 0===n||n.call(r,t),e.setState({showSmall:!1})},e}return k()(n,[{key:"componentDidMount",value:function(){var e,t,n=this,r=null===(e=this.rootRef.current)||void 0===e?void 0:e.querySelectorAll("img")[1];(t=r)&&t.complete&&t.naturalWidth&&(this.props.delayDeletion?this.clearTimeout=Object(D.b)((function(){n.setState({showSmall:!1})}),4e3):this.setState({showSmall:!1}))}},{key:"componentWillUnmount",value:function(){"function"==typeof this.clearTimeout&&this.clearTimeout()}},{key:"renderSmallImg",value:function(){var e=this.props.src,t=Object(v.b)(e,{quality:15,resizeWidth:150}),n=a.a.createElement(y,u()({},this.props,null==t?void 0:t.param,{className:A.a.smallImg}));return this.state.showSmall&&n}},{key:"render",value:function(){var e=this.props,t=(e.onLoad,o()(e,["onLoad"]));return a.a.createElement("div",{ref:this.rootRef,className:A.a.progressImg},this.renderSmallImg(),a.a.createElement(y,u()({},t,{onLoad:this.originalImgOnLoad})))}}]),n}(i.Component))||O;function L(e){var t=e.progress,n=o()(e,["progress"]);return t?a.a.createElement(M,n):a.a.createElement(y,n)}},KFxo:function(e,t,n){e.exports=n("AKpC")("KFxo")},O7Vp:function(e,t,n){e.exports=n("EQ+b")("O7Vp")},PtOt:function(e,t,n){"use strict";n.d(t,"a",(function(){return P}));var r=n("o0o1"),o=n.n(r),i=n("yXPU"),a=n.n(i),c=n("qJnZ"),u=n("kMCw"),s=n("/Mkd"),f=n("+eIM"),l=n("aCH8"),p=n.n(l);function d(e){return function(e){var t=0;e=e.toString();for(var n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n)&4294967295;return t}(p()(e||""))}function b(e,t){var n=e%t;return n<0&&(n+=t),n}function v(){return"".concat(Math.floor(Math.random()*Math.pow(10,15)))}function h(e){return g.apply(this,arguments)}function g(){return(g=a()(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n="",e.prev=1,Object(c.g)()){e.next=4;break}throw new Error("wrong platform");case 4:return e.next=6,Object(f.a)("AMDevice","deviceInfo");case 6:if(r=e.sent,n=null==r?void 0:r.uuid){e.next=10;break}throw new Error("no uuid");case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),n=v();case 15:t.hashCode=d(n);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}var m=null;function O(){return y.apply(this,arguments)}function y(){return(y=a()(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===m&&(t={hashCode:d(v())},m=a()(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.race([h(t),Object(u.i)(1e3)]);case 2:return e.abrupt("return",t.hashCode);case 3:case"end":return e.stop()}}),e)})))()),e.next=3,m;case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,t){return!(0===e||e>=t)}function j(e){var t=Object(u.c)(e)?e.filter((function(e){return Object(u.f)(e)&&e.begin&&e.end&&e.sampleRate})):[],n=s.a.getRealTime()/1e3,r=t.find((function(e){var t=e.begin,r=e.end;return n<r&&n>=t}));return{sampleRate:(null==r?void 0:r.sampleRate)||0,bucketCount:(null==r?void 0:r.bucketCount)||100}}function P(e){return k.apply(this,arguments)}function k(){return(k=a()(o.a.mark((function e(t){var n,r,i,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:return n=e.sent,r=j(t),i=r.sampleRate,a=r.bucketCount,c=b(n,a),e.abrupt("return",{isSampled:w(i,a),isInBucket:0===i||c<i,sampleRate:i,bucketCount:a});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},Pzip:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a}));var r=n("cDf5"),o=n.n(r);function i(e,t,n){return t?(n=n||[],Object.keys(e).forEach((function(r){var a;if("function"!=typeof e[r]&&""!==t[r]&&null!==t[r]&&void 0!==t[r])if(Array.isArray(e[r]))e[r]=Array.isArray(t[r])?t[r]:e[r];else if("boolean"==typeof e[r])e[r]=!!t[r];else if("object"!==o()(e[r])||null===e[r]||(null===(a=n)||void 0===a?void 0:a.includes(r)))e[r]=t[r];else{if(!(0===Object.keys(e[r]).length))return void(e[r]=i(e[r],t[r]))}})),e):e}function a(e){return Object.keys(e||{}).forEach((function(t){void 0===e[t]&&delete e[t]})),e}},QhKB:function(e,t,n){"use strict";n.d(t,"a",(function(){return y})),n.d(t,"d",(function(){return j})),n.d(t,"c",(function(){return k}));var r,o=n("o0o1"),i=n.n(o),a=n("yXPU"),c=n.n(a),u=n("I8xV"),s=n("qJnZ"),f=n("ti4I"),l=n("2JHT"),p=n("jWx1"),d=n("bZiB"),b=n("kTmA"),v=n("nw66"),h=!0,g=!0,m=[];function O(e,t){var n=h!==e;h=e,n&&(Object(u.b)("isPageVisible: changeVisible to",e),function(e){m.forEach((function(t){return Object(v.a)((function(){return t(P(),e)}))}))}(t))}function y(e,t){return w.apply(this,arguments)}function w(){return(w=c()(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s.b.isNativePlatform){e.next=2;break}return e.abrupt("return");case 2:return Object(d.a)()&&("onPageShow"===t?t=f.i+Object(l.a)():"onPageHide"===t&&(t=f.h+Object(l.a)())),e.abrupt("return",Object(p.addNotificationCallback)(t,n));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){if(s.b.isNativePlatform){var e=Object(b.a)()&&Object(s.d)();if(Object(p.addNotificationCallback)("onAppShow",(function(){Object(u.b)("isPageVisible: onAppShow, is tab3 visible",g),e&&!g||O(!0,r.onAppShow)})),Object(p.addNotificationCallback)("onAppHide",(function(){Object(u.b)("isPageVisible: onAppHide"),O(!1,r.onAppHide)})),e&&Object(p.addNotificationCallback)("onPageChangeAction",(function(e){var t=e||{},n=t.index;"selectTab"===t.type&&(g=2==+n,Object(u.b)("isPageVisible: onPageChangeAction",g,n),O(g,r.onSwitchTab))})),Object(d.a)())return Object(p.addNotificationCallback)(f.i+Object(l.a)(),(function(){Object(u.b)("isPageVisible( layer ): onPageShow"),O(!0,r.onPageShow)})),void Object(p.addNotificationCallback)(f.h+Object(l.a)(),(function(){Object(u.b)("isPageVisible( layer ): onPageHide"),O(!1,r.onPageHide)}));Object(p.addNotificationCallback)("onPageShow",c()(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(u.b)("isPageVisible: onPageShow"),O(!0,r.onPageShow),Object(p.send)(f.i+Object(l.a)(),{});case 3:case"end":return e.stop()}}),e)})))),Object(p.addNotificationCallback)("onPageHide",(function(){Object(u.b)("isPageVisible: onPageHide"),O(!1,r.onPageHide),Object(p.send)(f.h+Object(l.a)(),{})}))}}function P(){return h}function k(e){return m.push(e),function(){m=m.filter((function(t){return t!==e}))}}!function(e){e.onPageShow="onPageShow",e.onPageHide="onPageHide",e.onAppShow="onAppShow",e.onAppHide="onAppHide",e.onSwitchTab="onSwitchTab"}(r||(r={})),t.b=P},S6GM:function(e,t,n){"use strict";n.d(t,"c",(function(){return b})),n.d(t,"b",(function(){return v})),n.d(t,"a",(function(){return h}));var r=n("QILm"),o=n.n(r),i=n("lSNA"),a=n.n(i),c=(n("J4zp"),n("vxzG")),u=(n("b8gg"),n("h7Yj")),s=(n("NvUp"),n("Pzip")),f=n("wgpz");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}c.default.prototype.getInitialUrl=function(e,t){if(!e)return"";if(!t)return e;var n=new URL(e);return n.host=this._getBackupDomain(n.host,t),n.toString()};var d={quality:70,resizeWidth:void 0};function b(e){return{src:e,processParam:{quality:100}}}function v(e,t){var n;if(!e)return Object(f.d)(new Error("图片url格式不正确"),{src:e,processParam:t}),{src:"",param:{}};var r=p(p(p({},d),null==e?void 0:e.processParam),Object(s.b)(t)),i=r.highQuality,a=r.quality,c=void 0===a?70:a,u=r.optimize,l=void 0===u||u,b=r.webpEnable,v=o()(r,["highQuality","quality","optimize","webpEnable"]);return{src:null!==(n=null==e?void 0:e.src)&&void 0!==n?n:e,param:p(p({},v),{},{quality:i||!l&&void 0===c?100:c,webpEnable:!!l&&b})}}function h(e,t){var n=v(e,t),r=n.src,o=n.param;return Object(u.generateCDNImageUrl)(r,o)}},UweA:function(e,t,n){e.exports=n("EQ+b")("UweA")},ZVxM:function(e,t,n){e.exports=n("EQ+b")("ZVxM")},aCH8:function(e,t,n){e.exports=n("EQ+b")("aCH8")},b5Tp:function(e,t,n){"use strict";var r=n("QILm"),o=n.n(r),i=n("lSNA"),a=n.n(i),c=n("o0o1"),u=n.n(c),s=n("yXPU"),f=n.n(s),l=n("lwsE"),p=n.n(l),d=n("W8MJ"),b=n.n(d),v=n("7W2i"),h=n.n(v),g=n("a1gu"),m=n.n(g),O=n("Nsbk"),y=n.n(O),w=n("6MOg"),j=n.n(w),P=n("BfCG"),k=n.n(P),S=n("UweA"),x=n("KFxo"),_=n.n(x),E=n("WhBT"),N=n("1B7d"),C=n("PhQO"),R=n("fROO"),A=n("fHJ1"),D=n.n(A),I=n("atV/"),T=n("Fcpp"),M=n("NvUp"),L=n("kMCw"),U=n("qJnZ"),J=n("PtOt");function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var z=!1;var Q=function(e){(e||{}).shouldRewriteLog&&function(e){if(!z){z=!0;var t=!Object(U.a)("5.45.0","5.43.0"),n=T.default.trackingRecord;T.default.trackingRecord=function(){var r=f()(u.a.mark((function r(o,i){var a,c,s,f,l;return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("real_error"!==(null==o?void 0:o.op)||"api_error"!==(null==o?void 0:o.sub_op)||![909111004,90114081].includes(Number(null==o?void 0:o.error_code))){r.next=3;break}return null==i||i(),r.abrupt("return");case 3:if(t&&["pv","impr","click"].includes(null==o?void 0:o.op)){r.next=7;break}return r.abrupt("return",n(o,i));case 7:return r.next=9,Object(J.a)(e);case 9:if(a=r.sent,c=a.isSampled,s=a.isInBucket,f=a.sampleRate,!c){r.next=22;break}if(!s){r.next=19;break}return l=H(H({},o),{},{_sr:0===f?100:f}),r.abrupt("return",n(l,i));case 19:Object(L.d)(i)&&i();case 20:r.next=23;break;case 22:return r.abrupt("return",n(o,i));case 23:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()}}(Object(M.a)("mobile-new-year.bump.log_sample_rate_arr")||[])},q=n("QhKB");function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function F(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y()(e);if(t){var o=y()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m()(this,n)}}var K=function(){return _.a.apply(void 0,arguments)((function(){return null}))}(k.a,D.a);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(n){var r=function(r){h()(d,r);var i,a,c,s,l=F(d);function d(){return p()(this,d),l.apply(this,arguments)}return b()(d,[{key:"componentDidMount",value:function(){Q(t),Object(q.d)(),!(null==t?void 0:t.disablePv)&&this.sendLog()}},{key:"sendLog",value:(s=f()(u.a.mark((function e(){var t,n,r,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.a)(this.store);case 2:t=e.sent,n=t.logBase,t.doPv,Object.assign(this.store.trackingBase,n),Object(I.a)([function(e){return Object.assign({},e,n)}]),r=this.store,o=r.trackingBase,r.cmtInfo,!window.__INLINE_LOG_PV&&Object(C.b)(Object(C.a)(o)),window.__INLINE_LOG_PV=!1;case 11:case"end":return e.stop()}}),e,this)}))),function(){return s.apply(this,arguments)})},{key:"render",value:function(){var e=this.props.store;e.userInfo,e.imageConfig;return j.a.createElement(n,this.props)}},{key:"store",get:function(){return this.props.store}}],[{key:"getInitialProps",value:(c=f()(u.a.mark((function t(n){var r,o,i,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.req,o=n.res,i=n.params,a=new e(W({req:r,res:o},i)),t.next=4,a.getInitialStore();case 4:return t.abrupt("return",{store:a});case 5:case"end":return t.stop()}}),t)}))),function(e){return c.apply(this,arguments)})},{key:"getBigPipieInitial",value:(a=f()(u.a.mark((function t(r){var o,i,a,c,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=r.req,i=r.res,a=r.params,c=r.renderPagelet,s=new e(W({req:o,res:i},a)),c(K,{store:s}),t.next=5,s.getInitialStore();case 5:return t.next=7,c(n,{store:s});case 7:return t.abrupt("return",{store:s});case 8:case"end":return t.stop()}}),t)}))),function(e){return a.apply(this,arguments)})},{key:"getPrepareOption",value:function(){var e,n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=r||{},a=i.store,c=t.shareInfo||a.shareInfo||{},u=c,s=u.shareTitle,f=u.shareContent,l=u.shareImageURL,p=u.shareMiniProgramImageURL,d=u.shareURL,b=o()(u,["shareTitle","shareContent","shareImageURL","shareMiniProgramImageURL","shareURL"]),v=E.d.isWeChatMiniProgram;c=W({title:s,message:f,thumbnailURL:l,shareURL:a.shareURL||d||location.href,waterMark:""},b);var h=p||N.a;c=Object.assign({},c,v?{thumbnailURL:h,waterMark:S.default.NONE}:{});var g={pv:{indiv:!0}},m={};return g.pageSN=parseInt(null==r||null===(e=r.store)||void 0===e||null===(n=e.trackingBase)||void 0===n?void 0:n.pageSn,10),{requireLogin:!1,shareInfo:c,pageProperty:g,usePDDShare:!0,pageinfo:m,title:a.pageTitle||a.name,disablePullReload:a.disablePullReload}}},{key:"buildStore",value:(i=f()(u.a.mark((function t(n){var r,o,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=n.store,i=new e(W({},o)),t.next=4,null===(r=i.reBuildStore)||void 0===r?void 0:r.call(i,o);case 4:return t.abrupt("return",i);case 5:case"end":return t.stop()}}),t)}))),function(e){return i.apply(this,arguments)})}]),d}(w.Component);return _()(k.a,D.a)(r)}}},b8gg:function(e,t,n){e.exports=n("EQ+b")("b8gg")},bZiB:function(e,t,n){"use strict";function r(){return!!~location.pathname.indexOf("popup")}n.d(t,"a",(function(){return r}))},g5zU:function(e,t,n){e.exports=n("AKpC")("g5zU")},h3qu:function(e,t,n){e.exports=n("EQ+b")("h3qu")},jQz7:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("6MOg"),o=n("TyAF"),i=n("rBp/");function a(e){var t=Object(r.useContext)(o.MobXProviderContext);return null!=e?e:t.store?t.store.webpEnable:Object(i.a)()}},kMCw:function(e,t,n){"use strict";n.d(t,"i",(function(){return i})),n.d(t,"g",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return f})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return d})),n.d(t,"h",(function(){return b}));var r=n("cDf5"),o=n.n(r),i=function(e){return new Promise((function(t){return setTimeout(t,e)}))};function a(e){return function(t){return o()(t)===e}}var c=function(e){return a("string")(e)},u=function(e){return a("function")(e)};function s(e){return a("number")(e)}var f=function(e){return"[object Object]"===Object.prototype.toString.call(e)},l=function(e){return"[object Array]"===Object.prototype.toString.call(e)};function p(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if("function"!=typeof e)throw new TypeError("Expected a function");return"complete"!==document.readyState?window.addEventListener("load",(function(){t=setTimeout(e,n)})):t=setTimeout(e,n),function(){clearTimeout(t)}}var d=function(e){return JSON.parse(JSON.stringify(e))};function b(e){var t=e.onVisible,n=void 0===t?function(){}:t,r=e.onHidden,o=void 0===r?function(){}:r,i=function(){"visible"===document.visibilityState&&n?n():"hidden"===document.visibilityState&&o&&o()};return document.addEventListener("visibilitychange",i),function(){document.removeEventListener("visibilitychange",i)}}},kTmA:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("o0o1"),n("yXPU"),n("5Ojd"),n("wgpz");var r=n("h7Yj"),o=(n("uEDP"),function(){return Object(r.parseUrlQuery)(location.href).from_tab||"tab"===Object(r.parseUrlQuery)(location.href).pr_page_scene})},nw66:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a}));var r=n("cDf5"),o=n.n(r);function i(e,t){try{var n=e();return null==n?t:n}catch(e){return t}}function a(e,t){return"object"===o()(e)?e:i((function(){return JSON.parse(e)}),t||e)}},qJnZ:function(e,t,n){"use strict";n.d(t,"h",(function(){return i})),n.d(t,"f",(function(){return a})),n.d(t,"g",(function(){return c})),n.d(t,"e",(function(){return u})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return l}));var r=n("KoDT"),o=n("h3qu"),i=Object(r.getCurrentPlatform)(),a=function(){return i.system===r.SYSTEM.IOS},c=function(){return i.isNativePlatform},u=function(){return i.platform===r.PLATFORM.PddIOS},s=function(){return i.platform===r.PLATFORM.PddAndroid},f=function(e,t){var n=i.version;return!!(s()&&Object(r.compareVersion)(n,e)>=0||u()&&Object(r.compareVersion)(n,t)>=0)};t.b=i;var l=function(){return+Object(o.getSystemVersion)(navigator.userAgent).split(".")[0]||0}},"rBp/":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r,o=n("h7Yj");function i(){return r=void 0!==r?r:"1"===Object(o.getCookie)("webp")}},t0VV:function(e,t,n){(t=e.exports=n("I1BE")(!1)).push([e.i,".jCZmY4i3{position:relative;width:100%;height:100%}.jCZmY4i3>img{position:absolute;top:0;left:0;width:100%;height:100%}._6T91wH8q{z-index:-1}",""]),t.locals={progressImg:"jCZmY4i3",smallImg:"_6T91wH8q"}},ti4I:function(e,t,n){"use strict";n.d(t,"j",(function(){return r})),n.d(t,"l",(function(){return o})),n.d(t,"g",(function(){return i})),n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return s})),n.d(t,"e",(function(){return f})),n.d(t,"k",(function(){return l})),n.d(t,"n",(function(){return p})),n.d(t,"f",(function(){return d})),n.d(t,"m",(function(){return b})),n.d(t,"i",(function(){return v})),n.d(t,"h",(function(){return h}));var r="NEW_YEAR_H5_POPUP_",o=r+"SHOW",i=r+"HIDE",a=r+"CALLBACK",c=r+"ERROR",u=r+"CHANGE",s=r+"ACK",f=r+"GAME",l=r+"READY",p=r+"VISIBLE",d=r+"HEARTBEAT",b=r+"TEST_READY_MESSAGE",v=r+"ON_PAGE_SHOW",h=r+"ON_PAGE_HIDE"},uEDP:function(e,t,n){"use strict";n.d(t,"a",(function(){return R})),n.d(t,"b",(function(){return I})),n.d(t,"d",(function(){return T}));var r=n("lSNA"),o=n.n(r),i=n("cDf5"),a=n.n(i),c=n("o0o1"),u=n.n(c),s=n("yXPU"),f=n.n(s),l=n("5Otn"),p=n("wgpz"),d=n("qJnZ"),b=n("KoDT"),v=n("3VHQ"),h=n("uf4C"),g=n("+eIM"),m=n("NvUp"),O=n("PtOt"),y=n("h7Yj");function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P,k,S,x=["unknown","wifi","2g","3g","4g"],_=function(){var e=f()(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Object(d.g)()){e.next=5;break}return e.next=3,Object(g.a)("JSMeta","info").catch((function(){}));case 3:t=e.sent,P=null==t?void 0:t.pdd_id;case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function E(){return N.apply(this,arguments)}function N(){return(N=f()(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Object(d.f)()){e.next=2;break}return e.abrupt("return","apple");case 2:if(!(Object(b.compareVersion)(d.h.version,"4.60.0")>=0)){e.next=12;break}return e.prev=3,e.next=6,Object(v.invokeBridgeCallNativeFun)("AMApplication","getManufactureName",null);case 6:return t=e.sent,e.abrupt("return",(null==t?void 0:t.manufacture)||"unknown");case 10:e.prev=10,e.t0=e.catch(3);case 12:return e.abrupt("return","unknown");case 13:case"end":return e.stop()}}),e,null,[[3,10]])})))).apply(this,arguments)}var C=function(){var e=f()(u.a.mark((function e(t,n,r){var o,i,c,s,f,b,v;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(P){e.next=3;break}return e.next=3,_();case 3:if(k){e.next=7;break}return e.next=6,E();case 6:k=e.sent;case 7:if(S){e.next=11;break}return e.next=10,Object(y.getNetWorkType)();case 10:S=e.sent;case 11:return e.next=13,Object(l.getUid)();case 13:for(b in o=e.sent,i=d.h.system,c=d.h.systemVersion,s=d.h.version,f={},n)v=n[b],"object"===a()(v)?f[b]=JSON.stringify(v):f[b]=v;Object(p.c)({mutipleKvList:[{tags:j({groupId:"10699",type:3,systemVersion:String(c).split(".")[0],pageSn:Object(h.getPageSN)()},t),fields:j({userId:+o||0,pddid:P,platform:d.h.platform,app_version:s,system:i,isDebug:!1,os_version:c,url:location.href,host:location.hostname,brand:k,network:x[S]||"unknown"},f),longFields:j({fe_time:Date.now()},r)}]});case 18:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}();function R(e,t,n){d.h.isNativePlatform&&Object(p.a)({name:"kvLog",appendTags:e,appendFields:t,longFields:n})}var A=function(e,t,n){try{C(e,t,n),R(e,t,n)}catch(e){Object(p.d)(e)}};t.c=function(){var e=f()(u.a.mark((function e(t,n,r){var o,i,a,c,s,f,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=4;break;case 3:return e.abrupt("return");case 4:return o=Object(m.a)("mobile-new-year.bump.kv-log-sample-config")||[],e.next=7,Object(O.a)(o);case 7:if(i=e.sent,a=i.isSampled,c=i.isInBucket,s=i.sampleRate,f=i.bucketCount,!a){e.next=21;break}if(l=+(f/s).toFixed(3),!c){e.next=18;break}return e.abrupt("return",A(t,n,j(j({},r),{},{ratio:l})));case 18:return e.abrupt("return",R(t,n,j(j({},r),{},{ratio:l})));case 19:e.next=23;break;case 21:return 1,e.abrupt("return",A(t,n,j(j({},r),{},{ratio:1})));case 23:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}();var D={message:"message",singlemessage:"singlemessage",groupmessage:"groupmessage",timeline:"timeline"},I=function(e,t,n){try{var r=d.h.isNativePlatform?Object(v.getReferPageContext)():Promise.resolve(Object(h.getReferPageQuery)()),o=Object(y.parseUrlQuery)(window.location.href);r.then((function(r){var i,a,c=null==r?void 0:r.refer_page_sn;d.h.isNativePlatform?(null==o?void 0:o.pr_page_from)&&(c="pr_page_from"):c=c?/^\d{5,6}$/.test(c+"")?c:"unknown":D[null==o?void 0:o.from]||(null==o?void 0:o.refer_share_channel)&&"share"||((null==o?void 0:o._ex_campaign)||(null==o?void 0:o._x_campaign))&&"campaign"||"unknown",A(j(j({},e),{},{referPageSn:c||"unknown",verNo:(i=null===d.h||void 0===d.h?void 0:d.h.version,a=String(i).split(".").reverse().reduce((function(e,t,n){return+e+ +t*Math.pow(100,n)}),0),a>=54200?"after542":a>=53600?"536to542":a>=48700?"487to536":a>=45300?"453to486":a>=42600?"426to452":a>=4e4?"400to425":a>=35100?"351to399":a>0?"below350":0)}),t,n)})).catch((function(){}))}catch(e){}},T=function(e,t,n){return A(j({groupId:"10959"},e),t,j({ratio:1},n))}},vxzG:function(e,t,n){e.exports=n("EQ+b")("vxzG")},wgpz:function(e,t,n){"use strict";n.d(t,"e",(function(){return g})),n.d(t,"a",(function(){return O})),n.d(t,"d",(function(){return y})),n.d(t,"b",(function(){return w})),n.d(t,"h",(function(){return j})),n.d(t,"g",(function(){return P})),n.d(t,"f",(function(){return k})),n.d(t,"c",(function(){return S}));var r=n("lSNA"),o=n.n(r),i=n("cDf5"),a=n.n(i),c=n("Fcpp"),u=n("m7/H"),s=n.n(u),f=n("ZVxM"),l=n("qJnZ"),p=n("h7Yj"),d=n("3VHQ"),b=n("kMCw");function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e){return"object"===a()(e)?Object.getOwnPropertyNames(e).reduce((function(t,n){return t[n]=e[n],t}),{}):e}function m(e){return JSON.stringify(g(e))}function O(e){return Object(d.invokeBridgeCallNativeFun)("JSLogger","log",{message:m(e),module:"h5",level:2})}function y(e,t){var n=e instanceof Error;if(!(e&&["api_biz_error","api_http_error"].includes(e.errorType)&&["object","number"].includes(a()(e.errorCode)))){l.h.isNativePlatform&&O(e,3);var r=n?e:new Error(JSON.stringify(e)),o=s.a.computeStackTrace(r),i=o.name+":"+o.message;i+=(o.stack||[]).map((function(e){return"@ ".concat(e.func,"(").concat(e.url,":").concat(e.line,":").concat(e.column,")")})).join("");var u=location.search?location.href+"&"+Object(p.buildQuery)({JS_ERROR:i}):location.href+"?"+Object(p.buildQuery)({JS_ERROR:i});c.default.trackingRecord({op:"real_error",error_message:o.message,page:o?o.name+" "+o.message+" "+JSON.stringify(o.stack):"no info",page_url:location.href,debug_url:u,params:t})}}function w(e){return e instanceof Error?JSON.stringify(e,Object.getOwnPropertyNames(e)):JSON.stringify(e)}var j=function(e){return Promise.race([new Promise((function(t){c.default.trackingRecord(e,t)})),Object(b.i)(200)]).catch((function(e){}))},P=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return j(h({op:"impr",page_el_sn:e},t))},k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return j(h({op:"click",page_el_sn:e},t))},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(p.getNetWorkType)().then((function(t){var n=e.mutipleKvList||[],r=navigator.userAgent.toLowerCase(),o=0;r.indexOf("iphone")>=0?o=1:r.indexOf("android")>=0&&(o=2),n.forEach((function(e){e.tags=h({networkType:t,platformData:o},e.tags),e.fields=h({ua:r},e.fields)}));var i={mutipleKvList:n},a={method:"POST",body:JSON.stringify(i),data:JSON.stringify(i),headers:{"Content-Type":"application/json;charset=UTF-8"},credentials:"include"},c=Object(f.resolveCmtUrl)("/api/cmt/cmtc_h5");return l.h.isNativePlatform?(Object.assign(a,{url:c}),Object(d.invokeBridgeCallNativeFun)("JSNetwork","request",a)):fetch(c,a)})).catch((function(e){0}))}},zVJw:function(e,t,n){var r=n("t0VV"),o=n("Q8e5"),i="string"==typeof r?[[e.i,r,""]]:r;(t=e.exports=r.locals||{})._getContent=function(){return i},t._getCss=function(){return""+r},t._insertCss=function(e){return o(i,e)}}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/assets/js/mobile-new-game/award_goods~bumpCom~bumpPopup~exchange_code~exchange_goods_detail~launch_app~qa-bbeec1f4e6e4f7d1b319.js.map