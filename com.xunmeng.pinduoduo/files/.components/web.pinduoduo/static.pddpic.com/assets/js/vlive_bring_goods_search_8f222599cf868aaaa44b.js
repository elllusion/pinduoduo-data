!function(){var e,t,r,n,o,a,c,i={19043:function(e,t,r){"use strict";r(96253),r(40851);var n,o,a,c=r(45063),i=function(e){return(0,c.D4)(e)},u=r(67376),s=r(87401),l=r(70798),f=r(61824),d=r(36102),p=r.n(d),m=(r(82139),r(38796)),h=r(68309),v=r(69348),b=r(99057),g=r(45558),_=r(91074),y=r(11269),E=r(43736),O=(r(11246),r(22188)),w=r(24649),D=r(94537),S="vlive_bring_goods_search_result.html",I="vlive_week_hot_search_result.html";function N(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,y.Z)(e);if(t){var o=(0,y.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,_.Z)(this,r)}}!function(e){e[e.BringGoods=0]="BringGoods",e[e.WeekHot=1]="WeekHot"}(a||(a={}));var P=(n=function(e){(0,g.Z)(r,e);var t=N(r);function r(){var e;(0,h.Z)(this,r);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return e=t.call.apply(t,[this].concat(c)),(0,m.Z)(e,"baseUrl",o,(0,b.Z)(e)),e.getLocalData=function(){var t=e.$ctx.query||{},r=t.search_page_type,n=t.change_goods_flag,o=t.feed_id,c=t.select_goods_first,i="";return r&&(i=Number(r)===a.BringGoods?(0,w.ru)({change_goods_flag:n,select_goods_first:c,feed_id:o},S):I),{baseUrl:i}},e}return(0,v.Z)(r,[{key:"getDatasource",value:function(){return[this.getLocalData]}}]),r}(D.u),o=(0,E.Z)(n.prototype,"baseUrl",[O.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),n),C=r(77153),k=r(8224);var T=r(18482),j=r(23877),x=r(86056),A=r(92263),Z=r(94184),L=r.n(Z),G=r(33628),M=r(344),q=r(95813),B=(r(51876),r(27476),r(95767),r(98837),r(94882),r(98351),r(37548)),W=r(42202),H=r(3009),X=r(31658),z=["processParam","resizeWidth","quality","lazy","trimUrlQuery","src"];function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){(0,T.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function F(e){var t,r=e.processParam,n=e.resizeWidth,o=e.quality,a=e.lazy,c=void 0!==a&&a,i=e.trimUrlQuery,u=void 0!==i&&i,l=e.src,f=(0,q.Z)(e,z),d=(0,s.useContext)(H.Z),p=(0,s.useContext)(X.Z),m=null==p||null===(t=p.platform)||void 0===t?void 0:t.system,h=!!m&&m!==W.we.IOS,v=l||"";return u&&(v=v.split("?")[0]),s.createElement(B.Z,(0,M.Z)({processParam:V({webpEnable:d,enableGifToWebp:h,resizeWidth:n,quality:o},r),lazy:c,src:v},f))}var U;!function(e){e[e.GoodsName=0]="GoodsName",e[e.GoodsId=1]="GoodsId"}(U||(U={}));var K=["商品名","商品ID"],Q=(r(19371),r(46756)),J=r.n(Q);function Y(e){var t=e||{},r=t.curDropdown,n=t.changeDropdown;return s.createElement("div",{className:J().dropDownMenu},K.map((function(e,t){return s.createElement("section",{key:e,className:L()(J().dropDownItem,(0,T.Z)({},J().dropDownItemSelected,r===t)),onClick:function(){return n(t)}},e)})))}var $,ee=(0,s.memo)(Y),te=($={},(0,T.Z)($,U.GoodsName,"商品名"),(0,T.Z)($,U.GoodsId,"商品ID"),$);var re=function(e){var t=(0,s.useState)(e),r=(0,j.Z)(t,2),n=r[0],o=r[1],a=te[n];return(0,s.useEffect)((function(){o(e)}),[e]),{curDropdown:n,curDropdownName:a,changeDropdown:(0,s.useCallback)((function(e){o(e)}),[])}},ne=r(74711);var oe,ae=(oe=window.navigator.userAgent,(0,ne.Xf)(oe)).system===W.we.IOS,ce=("undefined"!=typeof window&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),r(22691));var ie=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=(0,s.useState)(""),r=(0,j.Z)(t,2),n=r[0],o=r[1],a=(0,s.useRef)(null);(0,s.useEffect)((function(){if(e){var t=setTimeout((function(){a.current&&a.current.focus()}),500);return ae||(0,ce.Q6)("JSKeyboard","showKeyboard",{}),function(){return clearTimeout(t)}}}),[e]);var c=(0,s.useCallback)((function(e){e.stopPropagation();var t=e.currentTarget.value.trim();o(t)}),[]),i=(0,s.useCallback)((function(){o("")}),[]);return{searchValue:n,searchInputRef:a,resetSearchValue:i,changeSearchValue:c}},ue=r(41154),se=r.n(ue);function le(e){var t=(0,s.useContext)(G.Nx),r=t.navigationHeight,n=t.statusbarHeight,o=e||{},a=o.baseUrl,c=void 0===a?"":a,i=o.isCanToggleMenu,u=void 0===i||i,l=o.isShowSearchBtn,f=void 0===l||l,d=o.dropdownIdx,p=o.searchTagValue,m=re(d||U.GoodsName),h=m.curDropdown,v=m.curDropdownName,b=m.changeDropdown,g=(0,s.useState)(!1),_=(0,j.Z)(g,2),y=_[0],E=_[1],O=ie(f),D=O.searchValue,S=O.changeSearchValue,I=O.searchInputRef,N=O.resetSearchValue;(0,s.useEffect)((function(){var e=function(){E(!1)};if(u&&y)return document.addEventListener("click",e),function(){return document.removeEventListener("click",e)}}),[u,y]);var P=(0,s.useCallback)((function(e){b(e),E(!1),N()}),[b,N]),C=h===U.GoodsName?"输入商品名称":"输入商品ID",k=(0,s.useMemo)((function(){return{height:0===r?".44rem":r,paddingTop:n}}),[r,n]),Z=function(){!f&&(0,x.op)()};return s.createElement("div",{className:se().searchWrap,style:k},s.createElement("div",{className:se().searchFix},s.createElement("section",{className:se().backIcon,onClick:x.op},s.createElement(F,{src:"https://funimg.pddpic.com/mobile_short_video/7188424a-d6e6-4270-b0a1-ee7b47f1029c.png.slim.png"})),s.createElement("section",{className:L()(se().searchInput,(0,T.Z)({},se().maxSearchArea,!f)),onClick:Z},s.createElement("div",{className:se().dropMenuDes,onClick:function(e){e.stopPropagation(),u&&E(!y)}},v,s.createElement("span",{className:se().dropMenuIcon})),y&&s.createElement("div",{className:se().dropMenu},s.createElement(ee,{curDropdown:h,changeDropdown:P})),f?s.createElement("form",{onSubmit:function(e){if(e.stopPropagation(),e.preventDefault(),f)if(D)if(c){var t=(0,w.ru)({search_value:D,cur_dropdown:h,_pdd_sbs:0,_pdd_fs:1,_pdd_tc:"00ffffff"},c);(0,x.UL)(t)}else(0,A.Z)("搜索失败");else(0,A.Z)("搜索内容不能为空")},action:""},s.createElement("input",{ref:I,type:"search",value:D,onChange:S,className:se().qInput,placeholder:C}),s.createElement("button",{className:se().searchBtn},"搜索")):s.createElement("div",{className:se().searchTag},s.createElement("section",{className:se().searchTagContent},s.createElement("span",null,p),s.createElement(F,{src:"https://promotion.pddpic.com/promo/short_video/e3c64e46-38bf-4a26-aef8-fbe97e45f9ce.png.slim.png",className:se().reClearIcon,onClick:Z}))),!!D&&s.createElement(F,{src:"https://funimg.pddpic.com/mobile_short_video/77bc93c0-5a44-4478-a168-8b33fac682c1.png.slim.png",className:se().clearIcon,onClick:N}))))}var fe=(0,s.memo)(le),de=r(34112),pe=r.n(de);var me=(0,l.Pi)((function(){var e=((0,s.useContext)(l.yX).store||{}).baseUrl;return s.createElement("div",{className:pe().appWrap},s.createElement(fe,{baseUrl:e}))})),he=p()((0,C.k)(),(0,c.Iq)({store:P},{serverTemplateName:"vlive_bring_goods_search",title:"搜索商品",fallbackCSR:!0,options:{pageProperty:{pageName:"ddvideo_goods_search",pageSN:110557},shareInfo:{noDefaultShare:!0},noDefaultShare:!0,disablePullReload:!0}}),(0,l.f3)("store"),l.Pi)((function(e){var t=e.store;return s.createElement(k.I,{store:t},s.createElement(me,null),s.createElement(f.eA,null))})),ve=i(he),be=(0,u.Z)(he),ge=r(19303);Promise.resolve("function"==typeof be&&be()).then((function(){return(0,ge.x)(ve)}))},81114:function(e,t,r){"use strict";var n;!function(e){e[e.DouYin=1]="DouYin",e[e.KuaiShou=2]="KuaiShou",e[e.ShiPinHao=3]="ShiPinHao",e[e.Bilibili=4]="Bilibili",e[e.XiaoHongShu=5]="XiaoHongShu",e[e.Taobao=6]="Taobao",e[e.Other=7]="Other",e[e.WeiSi=8]="WeiSi",e[e.DuXiaoSi=9]="DuXiaoSi",e[e.XiGua=10]="XiGua"}(n||(n={}));var o,a,c;n.DouYin,n.KuaiShou,n.XiaoHongShu,n.Bilibili;!function(e){e[e.DOING=0]="DOING",e[e.COMPLETED=1]="COMPLETED",e[e.FAILED=2]="FAILED",e[e.INIT=3]="INIT"}(o||(o={})),function(e){e[e.NOT=0]="NOT",e[e.LOADING=1]="LOADING",e[e.COMPLETE=2]="COMPLETE",e[e.FAILED=3]="FAILED"}(a||(a={})),function(e){e[e.PullDownRefresh=1]="PullDownRefresh",e[e.NormalLoad=0]="NormalLoad"}(c||(c={}))},57753:function(e,t,r){"use strict";var n;!function(e){e.Impr="impr",e.Click="click"}(n||(n={}))},24316:function(){},34112:function(e){e.exports={appWrap:"_1APHiEQp"}},46756:function(e){e.exports={"fixed-cover":"_1U8VAGN_",dropDownMenu:"_7JaIWEov",dropDownItem:"_26ybxITi",dropDownItemSelected:"_3OSznPi1",zoomIn:"_3JW4TEbN"}},41154:function(e){e.exports={"fixed-cover":"_2-3VTcIp",searchWrap:"_3esHKA8H",backIcon:"mFgcfS3_",dropMenuDes:"_1lqOQfjW",dropMenuIcon:"_2S-Brbve",searchInput:"_2vpaKX1H",dropMenu:"VzfzXv2L",clearIcon:"_1EhqpChG",maxSearchArea:"_3mEc6ACi",searchBtn:"_2PQCobWo",searchFix:"X3dv6W4S",searchTag:"_2wC3qh4V",searchTagContent:"_3Oj6sqSs",reClearIcon:"_1b2_m6Gn",qInput:"_1KVyfJNs",zoomIn:"_2AXFeOSo"}},29807:function(e){"use strict";e.exports=pinbridge}},u={};function s(e){var t=u[e];if(void 0!==t)return t.exports;var r=u[e]={id:e,loaded:!1,exports:{}};return i[e].call(r.exports,r,r.exports,s),r.loaded=!0,r.exports}s.m=i,e=[],s.O=function(t,r,n,o){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],n=e[l][1],o=e[l][2];for(var c=!0,i=0;i<r.length;i++)(!1&o||a>=o)&&Object.keys(s.O).every((function(e){return s.O[e](r[i])}))?r.splice(i--,1):(c=!1,o<a&&(a=o));if(c){e.splice(l--,1);var u=n();void 0!==u&&(t=u)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,n,o]},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,{a:t}),t},r=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},s.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);s.r(o);var a={};t=t||[null,r({}),r([]),r(r)];for(var c=2&n&&e;"object"==typeof c&&!~t.indexOf(c);c=r(c))Object.getOwnPropertyNames(c).forEach((function(t){a[t]=function(){return e[t]}}));return a.default=function(){return e},s.d(o,a),o},s.d=function(e,t){for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.f={},s.e=function(e){return Promise.all(Object.keys(s.f).reduce((function(t,r){return s.f[r](e,t),t}),[]))},s.u=function(e){return"assets/js/"+({699:"ms_web_c",1437:"pdd-mod/qq-service",2840:"ms_wx_c",3400:"ms_wx_app_c",3910:"monitor-dev-panel",5911:"ms_native_c",6795:"ms_qq_c",8920:"pdd-mod/wechat-service"}[e]||e)+"_"+{699:"6732b5028e99ec3711b5",1437:"8c02393760457f458cb0",2568:"6a9075934c166e207340",2840:"6434b9a1d923ed8182f5",3400:"24b2cb1994a4daafc256",3910:"1463c1311397215db064",4369:"5a4a3b3070791597ae79",5911:"7eb7b058f14ab10fa6ff",5929:"a14da7d1d823f43f659e",6795:"0c9491c4660477c5771a",8920:"02c40a20678ac528640a"}[e]+".js"},s.miniCssF=function(e){return"assets/css/monitor-dev-panel_d314c614b241f08063cc.css"},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n={},o="mobile-live-video:",s.l=function(e,t,r,a){if(n[e])n[e].push(t);else{var c,i;if(void 0!==r)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var f=u[l];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==o+r){c=f;break}}c||(i=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.setAttribute("data-webpack",o+r),c.src=e),n[e]=[t];var d=function(t,r){c.onerror=c.onload=null,clearTimeout(p);var o=n[e];if(delete n[e],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(r)})),t)return t(r)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),i&&document.head.appendChild(c)}},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},s.j=5617,s.p="https://static.pddpic.com/",s.p=window.__webpack_public_path__||s.p,a=function(e){return new Promise((function(t,r){var n=s.miniCssF(e),o=s.p+n;if(function(e,t){for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=(c=r[n]).getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(o===e||o===t))return c}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){var c;if((o=(c=a[n]).getAttribute("data-href"))===e||o===t)return c}}(n,o))return t();!function(e,t,r,n){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(a){if(o.onerror=o.onload=null,"load"===a.type)r();else{var c=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=c,u.request=i,o.parentNode.removeChild(o),n(u)}},o.href=t,document.head.appendChild(o)}(e,o,t,r)}))},c={5617:0},s.f.miniCss=function(e,t){c[e]?t.push(c[e]):0!==c[e]&&{3910:1}[e]&&t.push(c[e]=a(e).then((function(){c[e]=0}),(function(t){throw delete c[e],t})))},function(){var e={5617:0};s.f.j=function(t,r){var n=s.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise((function(r,o){n=e[t]=[r,o]}));r.push(n[2]=o);var a=s.p+s.u(t),c=new Error;s.l(a,(function(r){if(s.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,n[1](c)}}),"chunk-"+t,t)}},s.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,o,a=r[0],c=r[1],i=r[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(n in c)s.o(c,n)&&(s.m[n]=c[n]);if(i)var l=i(s)}for(t&&t(r);u<a.length;u++)o=a[u],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(l)},r=self.webpackChunkmobile_live_video=self.webpackChunkmobile_live_video||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var l=s.O(void 0,[1216,6457,4115],(function(){return s(19043)}));l=s.O(l)}();
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/assets/js/vlive_bring_goods_search_8f222599cf868aaaa44b.js.map