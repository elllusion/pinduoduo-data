(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[104],{FlwM:function(e,t,r){"use strict";r.d(t,"a",function(){return c});r("J4zp"),r("lSNA");var a=r("cDf5"),n=r.n(a);function c(e){return"object"===n()(e)&&null!==e?e:{}}},Y112:function(e,t,r){"use strict";r.r(t);var a=r("FdF9"),n=r("TSYQ"),c=r.n(n),i=r("mFSr"),l=r("wm9J"),o=r("qTo4"),u=r("TzJd"),s=r("V2iB"),d=r("mQJE"),p=r("FPaQ"),f=r("zurc"),b=r.n(f),m=r("LyAW"),g=r("/N8V"),O=Object(l.b)("957f3014-2c99-4aa7-bffb-9660ef9dd0a1.png.slim.png"),h=Object(l.b)("01178142-fc6b-4971-9eaf-d53930f0c504.png.slim.png"),w=Object(l.b)("1a168a29-b4f9-4094-a254-e2f10dae2988.png.slim.png"),y=60,A={daily:{title:"获得每日提现福利",info:"看60秒视频可提现",button:"继续看视频",awardTip:"最高5元"},retain:{title:"你还有现金未提现哦",defaultBubbleText:"现金可提现",defaultProgress:100,tipClass:b.a.retainTip,button:"去提现",cancel:"残忍离开",awardTip:"最高5元"}};t.default=function(){var e=Object(a.useContext)(o.a),t=Object(u.c)().store,r=t.dailyWithdrawTipDialogType,n=t.closeDailyWithdrawDialog,l=t.dailyWithdrawDialogShowWithdraw,f=m.c.useValue().currentBubble,v=Object(a.useMemo)(function(){return Object(m.h)(f)},[f]),E=v.bubbleText,j=v.countDownSeconds,S=void 0===j?y:j,z=s.a.useActions().getStoreActions,D=g.b.useActions().notifyGoBack,P=A[r],_=P.title,N=P.info,W=P.button,T=P.defaultBubbleText,B=P.defaultProgress,F=P.cancel,C=P.tipClass,L=P.awardTip,I=B||100*(1-S/y);return Object(a.useEffect)(function(){if("daily"===r){var e=setTimeout(function(){z().closeDailyWithdrawDialog()},1e4);return function(){clearTimeout(e)}}},[r]),a.default.createElement(p.a,{name:"DailyWithdrawTip_".concat(r),mode:"rect",opacity:.6,className:b.a.dialog,onClose:n},a.default.createElement("p",{className:b.a.title},_),N&&a.default.createElement("p",{className:b.a.info},N),a.default.createElement("div",{className:b.a.content},a.default.createElement(i.a,{mode:"background",src:w,style:{backgroundSize:"100% 100%"},className:c()(b.a.bubbleWrap,C)},a.default.createElement("p",{className:b.a.tip},T||E)),a.default.createElement(i.a,{mode:"background",src:O,className:b.a.awardWrap,cdnOptimize:{webpEnable:e,width:44}},a.default.createElement(i.a,{src:h,className:b.a.awardImg,cdnOptimize:{webpEnable:e,width:36}}),a.default.createElement("p",{className:b.a.awardTip},L)),a.default.createElement("p",{className:b.a.progressWrap},a.default.createElement("p",{className:b.a.progressBar,style:{width:I+"%"}}))),a.default.createElement(d.a,{dialog:"dailyWithdrawTipDialog",text:W,onConfirm:function(){"retain"===r?l():n()}}),a.default.createElement("p",{className:b.a.cancel,onClick:function(){n(),D()}},F))}},mFSr:function(e,t,r){"use strict";var a=r("QILm"),n=r.n(a),c=r("pVnL"),i=r.n(c),l=r("lSNA"),o=r.n(l),u=r("FdF9"),s=(r("17x9"),r("GftL")),d=r("JUuB"),p=r("FlwM"),f=r("uPKN");function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach(function(t){o()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g=function(e){var t=e.placeholder,r=e.placeholderImageSrc,a=e.children;if(!t)return a;var n=Object(p.a)(t),c=n.type,i=n.style,l=n.className,o={width:"100%",height:"100%"};return"blur"===c&&r&&(o.background="url(".concat(r,") center/cover no-repeat")),u.default.createElement("div",{className:l,style:m(m({},o),i)},!!r&&u.default.createElement(s.a,{src:r,style:{display:"none"}}),a)},O=function(e){var t=e.mode,r=e.optimisedSrc,a=e.lazy,n=e.webpEnable,c=e.otherProps,l=r.split("?")[0].endsWith(".webp");return!n&&l||"background"===t?u.default.createElement("div",i()({},c,{style:m({background:"url(".concat(r,") center/cover no-repeat")},c.style)})):a?u.default.createElement(d.a,i()({src:r,alt:""},c)):u.default.createElement(s.a,i()({src:r,alt:""},c))},h=function(e){var t=e.lazy,r=(e.src,e.cdnOptimize),a=e.placeholder,c=e.mode,i=e.processedSrc,l=n()(e,["lazy","src","cdnOptimize","placeholder","mode","processedSrc"]),o=i||Object(f.d)(e),s=o.optimisedSrc,d=o.placeholderImageSrc;return u.default.createElement(g,{placeholder:a,placeholderImageSrc:d},u.default.createElement(O,{mode:c,lazy:t,optimisedSrc:s,otherProps:l,webpEnable:null===r||void 0===r?void 0:r.webpEnable}))};h.defaultProps={mode:"img",lazy:!1,placeholder:!1,cdnOptimize:{},processedSrc:null},t.a=Object(u.memo)(h)},mQJE:function(e,t,r){"use strict";var a=r("FdF9"),n=r("TzJd"),c=r("WEXL");t.a=function(e){var t=e.children,r=e.src,i=e.className,l=e.dialog,o=e.text,u=e.onConfirm,s=e.style,d=e.throttleWait,p=Object(n.c)().store.topDialog,f=(null===p||void 0===p?void 0:p.replace("Status",""))===l;return a.default.createElement(c.a,{src:r,breath:f,onConfirm:u,className:i,text:o,style:s,throttleWait:d},t)}},uPKN:function(e,t,r){"use strict";r.d(t,"a",function(){return g}),r.d(t,"c",function(){return h}),r.d(t,"b",function(){return y}),r.d(t,"d",function(){return A});var a=r("lSNA"),n=r.n(a),c=r("J4zp"),i=r.n(c),l=r("mwIZ"),o=r.n(l),u=r("ez7s"),s=r("AZ7A"),d=r("hA9s"),p=r("FlwM");function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach(function(t){n()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var m={resizeWidth:1300,quality:70,strip:!0,webpEnable:!1},g="%7C",O=["png","jpg","jpeg","webp"],h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;return[e*r,t*r]},w=function(e){var t=Object(p.a)(e),r=t.width,a=t.height,n=t.ratio;return"number"==typeof r?h(r,a,n)[0]:m.resizeWidth},y=function(e,t){if(!(e=e||""))return d.b&&console.trace("Emage src 必填"),"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";if(!1===t)return e;var r=o()(t,"webpEnable"),a=e.split("?")[0].trim().match(/.*\.(.+)$/)||[],n=i()(a,2)[1];return O.includes(n)||(r=!1),function(e,t){e=e||"";var r=Object(p.a)(t),a=r.processMore,n=r.width,c=r.height,l=r.ratio;return a?(Array.isArray(a)?a:[a]).reduce(function(e,r){if("function"==typeof r){var a=(e||"").split("?"),o=i()(a,2),u=o[0],s=void 0===u?"":u,d=o[1];return r({cdnSrc:e,dropQsUrl:s,qs:void 0===d?"":d,width:n,height:c,ratio:l,cdnOptimize:t})||e}return e},e):e}(Object(u.a)(e,b(b(b({},m),{},{resizeWidth:w(t)},t),{},{webpEnable:r})),t)},A=function(e){var t=e.lazy,r=e.src,a=e.cdnOptimize,n=e.placeholder;e.preloadConfig;return{optimisedSrc:t?function(e,t){return!1!==t?y(e,t):e||""}(r,a):y(r,a),placeholderImageSrc:function(e,t,r){if("blur"===o()(r,"type")){var a=Object(p.a)(r),n=a.blur,c=void 0===n?{radius:50,sigma:50}:n,i=a.resizeRate,l=void 0===i?4:i;return y(e,b(b({blur:c,resizeWidth:Object(s.c)(w(t)/l)},t),r))}return null}(r,a,n)}}},zurc:function(e,t,r){e.exports={dialog:"_1FiuRTo0",title:"_1V1RAhrt",info:"_r2wUN2v",content:"_1Vsr5uHy",bubbleWrap:"_18AztDWC",retainTip:"_3ZY3fYqu",tip:"_32-etsIw",awardWrap:"_3RhuzeBM",awardImg:"_2IUAoaXR",awardTip:"_3wTleaGw",progressWrap:"_2Jry8-PR",progressBar:"sOApF45W",cancel:"_1_KLVJRs"}}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-video-layer/js/loadable__DailyWithdrawTipDialog_974f71f000a696f0f8a6.js.map