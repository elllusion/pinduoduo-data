!function(){var e,t,n,r,i,a,o,c={61115:function(e,t,n){"use strict";n(96253),n(40851);var r=n(45063),i=function(e){return(0,r.D4)(e)},a=n(67376),o=n(87401),c=n(70798),u=n(36102),s=n.n(u),l=n(77153),f=n(8224);n(19371);var p,d,m,v=n(18482),h=1,b=2,y=3,g=[{type:h,name:"兴趣认证",icon:"https://funimg.pddpic.com/9e541a02-7d07-47c4-b440-b59f177883a3.png.slim.png",description:"适合个人申请，如美食博主、互联网自媒体等"},{type:b,name:"职业认证",icon:"https://funimg.pddpic.com/794140d9-bc89-41ba-b334-10f3c1d1b4c5.png.slim.png",description:"适合个人申请，如时尚、金融、财经行业从业者等"},{type:y,name:"企业和机构认证",icon:"https://funimg.pddpic.com/7a5d3db5-f0ca-408a-9e2d-4178ca8c5559.png.slim.png",description:"适合企业、个体工商户、机构申请"}],O=(p={},(0,v.Z)(p,h,6973780),(0,v.Z)(p,b,6973779),(0,v.Z)(p,y,6973778),p),E=n(86056),_=1,w=2,P=3,N=(d={},(0,v.Z)(d,_,"兴趣认证"),(0,v.Z)(d,w,"职业认证"),(0,v.Z)(d,P,"企业和机构认证"),0),S=4,k=2,Z=(m={},(0,v.Z)(m,S,{name:"认证审核中",btnText:"关闭",image:"https://funimg.pddpic.com/d3f38f60-f928-4b06-acba-e78d0385f3a2.png.slim.png",description:"你已成功提交兴趣认证申请，我们将会对你的申请进行审核，7个工作日内会通过站内信将结果通知给你，请耐心等待。"}),(0,v.Z)(m,k,{name:"审核通过",btnText:"修改资料",image:"https://funimg.pddpic.com/9c4a488c-fb06-49b4-b8ef-4d86a3156bbc.png.slim.png",description:"兴趣认证信息已生效"}),m),D=n(344),j=n(95813),x=(n(51876),n(27476),n(95767),n(98837),n(94882),n(98351),n(37548)),T=n(42202),C=n(3009),A=n(31658),L=["processParam","resizeWidth","quality","lazy","trimUrlQuery","src"];function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){(0,v.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function R(e){var t,n=e.processParam,r=e.resizeWidth,i=e.quality,a=e.lazy,c=void 0!==a&&a,u=e.trimUrlQuery,s=void 0!==u&&u,l=e.src,f=(0,j.Z)(e,L),p=(0,o.useContext)(C.Z),d=(0,o.useContext)(A.Z),m=null==d||null===(t=d.platform)||void 0===t?void 0:t.system,v=!!m&&m!==T.we.IOS,h=l||"";return s&&(h=h.split("?")[0]),o.createElement(x.Z,(0,D.Z)({processParam:z({webpEnable:p,enableGifToWebp:v,resizeWidth:r,quality:i},n),lazy:c,src:h},f))}n(49385);var B=n(25118),F=n(37883),M=n.n(F),q=(n(62850),n(62773),n(74711));var U;(U=window.navigator.userAgent,(0,q.Xf)(U)).system,T.we.IOS,"undefined"!=typeof window&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);var X=n(24201),G=n.n(X),H=n(51049),W=n.n(H);var Y=(0,c.Pi)((function(e){var t=e.status,n=e.lastEditTimePass,r=Z[t],i=t===k,a=i&&!n;return o.createElement("div",{className:W().wrap},o.createElement("div",{className:G().title},"认证申请进度"),o.createElement("div",{className:W().content},!!r.image&&o.createElement(R,{className:W().icon,src:r.image,resizeWidth:564}),o.createElement("span",{className:W().name},r.name),o.createElement("span",{className:W().desc},r.description),!a&&o.createElement("div",{className:W().btn,onClick:function(){i?(0,E.UL)("vlive_edit_author_certification.html?certification_type=1"):E.ZP.back()}},r.btnText)))})),K=n(52505),Q=n(57753),J=n(48234),$=n.n(J);var V=(0,c.Pi)((function(e){var t=e.data,n=t.name,r=t.icon,i=t.description,a=t.type;return o.createElement(K.Z,{trackingInfo:{page_el_sn:O[a]}},o.createElement("div",{className:$().wrap,onClick:function(){(0,Q.hJ)({page_el_sn:O[a]}),(0,E.UL)("vlive_interest_certification.html?certification_type=".concat(a))}},o.createElement("div",{className:$().content},o.createElement(R,{className:$().icon,src:r,resizeWidth:120}),o.createElement("div",{className:$().center},o.createElement("span",{className:$().name},n),o.createElement("span",{className:$().description},i))),o.createElement("div",{className:$().arrow})))})),ee=n(88190),te=n.n(ee);var ne,re,ie,ae,oe=(0,c.Pi)((function(){var e=(0,o.useContext)(c.yX).store||{},t=e.showEntrance,n=e.authStatus,r=e.lastEditTimePass;return o.createElement("div",{className:te().container},t?o.createElement(o.Fragment,null,o.createElement("div",{className:te().title},"请选择认证类型"),o.createElement("div",{className:te().content},g.map((function(e,t){return o.createElement(V,{key:t,data:e})})))):o.createElement(Y,{status:n,lastEditTimePass:r}))})),ce=(n(82139),n(38796)),ue=n(68309),se=n(69348),le=n(99057),fe=n(45558),pe=n(91074),de=n(11269),me=n(43736),ve=n(22188),he=n(94537);function be(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,de.Z)(e);if(t){var i=(0,de.Z)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(0,pe.Z)(this,n)}}var ye=(ne=ve.aD.bound,re=function(e){(0,fe.Z)(i,e);var t,n,r=be(i);function i(){var e;(0,ue.Z)(this,i);for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return(e=r.call.apply(r,[this].concat(n))).service=void 0,(0,ce.Z)(e,"authStatus",ie,(0,le.Z)(e)),(0,ce.Z)(e,"lastEditTimePass",ae,(0,le.Z)(e)),e.getRemoteData=function(){return e.getAuthStatus()},e}return(0,se.Z)(i,[{key:"platform",get:function(){return this.$ctx.platform}},{key:"isNativePlatform",get:function(){return this.platform.isNativePlatform}},{key:"showEntrance",get:function(){return this.authStatus!==S}},{key:"getAuthStatus",value:(n=(0,B.Z)(M().mark((function e(){var t,n,r,i;return M().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.service.queryQualifications();case 3:t=e.sent,n=(null==t?void 0:t.result)||{},r=n.authStatus,i=n.lastEditTimePass,this.authStatus=r||N,this.lastEditTimePass=i||!1,e.next=12;break;case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",{});case 12:case"end":return e.stop()}}),e,this,[[0,9]])}))),function(){return n.apply(this,arguments)})},{key:"getDatasource",value:function(){return[this.getRemoteData]}},{key:"prepareClientData",value:(t=(0,B.Z)(M().mark((function e(){return M().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})}]),i}(he.u),ie=(0,me.Z)(re.prototype,"authStatus",[ve.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return N}}),ae=(0,me.Z)(re.prototype,"lastEditTimePass",[ve.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),(0,me.Z)(re.prototype,"showEntrance",[ve.Fl],Object.getOwnPropertyDescriptor(re.prototype,"showEntrance"),re.prototype),(0,me.Z)(re.prototype,"getAuthStatus",[ne],Object.getOwnPropertyDescriptor(re.prototype,"getAuthStatus"),re.prototype),re),ge=s()((0,l.k)(),(0,r.Iq)({store:ye},{serverTemplateName:"vlive_author_identify_entry",title:"创作者认证",fallbackCSR:!0,options:{pageProperty:{pageName:"author_identify_entry",pageSN:116124},shareInfo:{noDefaultShare:!0},noDefaultShare:!0}}),(0,c.f3)("store"),c.Pi)((function(e){var t=e.store;return o.createElement(f.I,{store:t},o.createElement(oe,null))})),Oe=i(ge),Ee=(0,a.Z)(ge),_e=n(19303);Promise.resolve("function"==typeof Ee&&Ee()).then((function(){return(0,_e.x)(Oe)}))},81114:function(e,t,n){"use strict";var r;!function(e){e[e.DouYin=1]="DouYin",e[e.KuaiShou=2]="KuaiShou",e[e.ShiPinHao=3]="ShiPinHao",e[e.Bilibili=4]="Bilibili",e[e.XiaoHongShu=5]="XiaoHongShu",e[e.Taobao=6]="Taobao",e[e.Other=7]="Other",e[e.WeiSi=8]="WeiSi",e[e.DuXiaoSi=9]="DuXiaoSi",e[e.XiGua=10]="XiGua"}(r||(r={}));var i,a,o;r.DouYin,r.KuaiShou,r.XiaoHongShu,r.Bilibili;!function(e){e[e.DOING=0]="DOING",e[e.COMPLETED=1]="COMPLETED",e[e.FAILED=2]="FAILED",e[e.INIT=3]="INIT"}(i||(i={})),function(e){e[e.NOT=0]="NOT",e[e.LOADING=1]="LOADING",e[e.COMPLETE=2]="COMPLETE",e[e.FAILED=3]="FAILED"}(a||(a={})),function(e){e[e.PullDownRefresh=1]="PullDownRefresh",e[e.NormalLoad=0]="NormalLoad"}(o||(o={}))},57753:function(e,t,n){"use strict";n.d(t,{hJ:function(){return a}});var r,i=n(35607);!function(e){e.Impr="impr",e.Click="click"}(r||(r={}));var a=function(e){return(0,i.ax)(e)}},24316:function(){},88190:function(e){e.exports={container:"vLEOPi2v",title:"_2gffp-3-"}},48234:function(e){e.exports={"fixed-cover":"M7AFEAyF",wrap:"_3ce2-s8c",content:"_2hb-E1Ch",center:"_3YGjsBwO",name:"EIvO-yh6",description:"_1eP7TOnC",icon:"_1z8-dsba",arrow:"pHzU5cor",zoomIn:"_1h5kosLY"}},24201:function(e){e.exports={container:"TJ4kNwMC",title:"_1C9eigNF"}},51049:function(e){e.exports={wrap:"_3UhwutZB",content:"_34xQ0YQx",icon:"_2mRKLr-J",name:"_28O1HURy",desc:"_1sRedOYf",btn:"_2NUZOL_K"}},29807:function(e){"use strict";e.exports=pinbridge}},u={};function s(e){var t=u[e];if(void 0!==t)return t.exports;var n=u[e]={id:e,loaded:!1,exports:{}};return c[e].call(n.exports,n,n.exports,s),n.loaded=!0,n.exports}s.m=c,e=[],s.O=function(t,n,r,i){if(!n){var a=1/0;for(l=0;l<e.length;l++){n=e[l][0],r=e[l][1],i=e[l][2];for(var o=!0,c=0;c<n.length;c++)(!1&i||a>=i)&&Object.keys(s.O).every((function(e){return s.O[e](n[c])}))?n.splice(c--,1):(o=!1,i<a&&(a=i));if(o){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[n,r,i]},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},s.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var i=Object.create(null);s.r(i);var a={};t=t||[null,n({}),n([]),n(n)];for(var o=2&r&&e;"object"==typeof o&&!~t.indexOf(o);o=n(o))Object.getOwnPropertyNames(o).forEach((function(t){a[t]=function(){return e[t]}}));return a.default=function(){return e},s.d(i,a),i},s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.f={},s.e=function(e){return Promise.all(Object.keys(s.f).reduce((function(t,n){return s.f[n](e,t),t}),[]))},s.u=function(e){return"assets/js/"+({699:"ms_web_c",1437:"pdd-mod/qq-service",2840:"ms_wx_c",3400:"ms_wx_app_c",3910:"monitor-dev-panel",5911:"ms_native_c",6795:"ms_qq_c",8920:"pdd-mod/wechat-service"}[e]||e)+"_"+{699:"6732b5028e99ec3711b5",1437:"8c02393760457f458cb0",2568:"6a9075934c166e207340",2840:"6434b9a1d923ed8182f5",3400:"24b2cb1994a4daafc256",3910:"1463c1311397215db064",4369:"5a4a3b3070791597ae79",5911:"7eb7b058f14ab10fa6ff",5929:"a14da7d1d823f43f659e",6795:"0c9491c4660477c5771a",8920:"02c40a20678ac528640a"}[e]+".js"},s.miniCssF=function(e){return"assets/css/monitor-dev-panel_d314c614b241f08063cc.css"},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},i="mobile-live-video:",s.l=function(e,t,n,a){if(r[e])r[e].push(t);else{var o,c;if(void 0!==n)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var f=u[l];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==i+n){o=f;break}}o||(c=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,s.nc&&o.setAttribute("nonce",s.nc),o.setAttribute("data-webpack",i+n),o.src=e),r[e]=[t];var p=function(t,n){o.onerror=o.onload=null,clearTimeout(d);var i=r[e];if(delete r[e],o.parentNode&&o.parentNode.removeChild(o),i&&i.forEach((function(e){return e(n)})),t)return t(n)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=p.bind(null,o.onerror),o.onload=p.bind(null,o.onload),c&&document.head.appendChild(o)}},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},s.j=5282,s.p="https://static.pddpic.com/",s.p=window.__webpack_public_path__||s.p,a=function(e){return new Promise((function(t,n){var r=s.miniCssF(e),i=s.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var i=(o=n[r]).getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){var o;if((i=(o=a[r]).getAttribute("data-href"))===e||i===t)return o}}(r,i))return t();!function(e,t,n,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",i.onerror=i.onload=function(a){if(i.onerror=i.onload=null,"load"===a.type)n();else{var o=a&&("load"===a.type?"missing":a.type),c=a&&a.target&&a.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=o,u.request=c,i.parentNode.removeChild(i),r(u)}},i.href=t,document.head.appendChild(i)}(e,i,t,n)}))},o={5282:0},s.f.miniCss=function(e,t){o[e]?t.push(o[e]):0!==o[e]&&{3910:1}[e]&&t.push(o[e]=a(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))},function(){var e={5282:0};s.f.j=function(t,n){var r=s.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(n,i){r=e[t]=[n,i]}));n.push(r[2]=i);var a=s.p+s.u(t),o=new Error;s.l(a,(function(n){if(s.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;o.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",o.name="ChunkLoadError",o.type=i,o.request=a,r[1](o)}}),"chunk-"+t,t)}},s.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,i,a=n[0],o=n[1],c=n[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(r in o)s.o(o,r)&&(s.m[r]=o[r]);if(c)var l=c(s)}for(t&&t(n);u<a.length;u++)i=a[u],s.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return s.O(l)},n=self.webpackChunkmobile_live_video=self.webpackChunkmobile_live_video||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var l=s.O(void 0,[1216,6457,4115],(function(){return s(61115)}));l=s.O(l)}();
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/assets/js/vlive_author_identify_entry_81947fa0b11aaae55230.js.map