(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[18,15,55],{"+F/Z":function(t,e,n){"use strict";var r,o=n("o0o1"),i=n.n(o),s=n("lSNA"),a=n.n(s),c=n("yXPU"),u=n.n(c),l=n("rIj9"),f=n("uf4C"),p=n("yfU7");function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach(function(e){a()(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}e.a=function(){var t=u()(i.a.mark(function t(e){var n;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r||(n=f.a.getInstance().getPageID(),r=Object(l.a)({pageInfo:{pageId:n}})),t.abrupt("return",r(d(d({},e),{},{encodeNativeResponse:!1,defaultErrorHandler:function(){},useNativeAntiToken:!!Object(p.a)()})));case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},"1Irm":function(t,e,n){"use strict";n.d(e,"a",function(){return l}),n.d(e,"b",function(){return p});var r,o=n("o0o1"),i=n.n(o),s=n("yXPU"),a=n.n(s),c=n("MpJ2"),u=function(){var t={};return{register:function(e,n){return n?t[e]?(t[e].add(n),Promise.resolve()):(t[e]=new Set,Object(c.e)("JSNotification","register",{name:e}).then(function(){t[e].add(n)})):Promise.reject(new Error("pinnotification register lack callback param"))},unregister:function(e,n){var r=t[e];r.delete(n),r.size||(t[e]=null,Object(c.e)("JSNotification","unregister",{name:e}))},message:function(e,n){var r=t[e];null!=r&&r.forEach(function(t){try{t(n)}catch(t){return Promise.reject(t)}})}}}();function l(t,e){return f.apply(this,arguments)}function f(){return(f=a()(i.a.mark(function t(e,n){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.register(e,n);case 2:return t.abrupt("return",function(){u.unregister(e,n)});case 3:case"end":return t.stop()}},t)}))).apply(this,arguments)}function p(t,e){return Object(c.e)("JSNotification","send",{name:t,payload:e})}window.pinnotification&&(r=window.pinnotification,console.warn("存在其他版本的pinnotification对象,请检查是否多版本或者存在其他notification包")),window.pinnotification={},Object.defineProperty(window.pinnotification,"message",{value:function(t,e){r&&"function"==typeof r.message&&r.message(t,e),u.message(t,e)},writable:!1})},EXg9:function(t,e,n){"use strict";n.r(e);var r,o=n("o0o1"),i=n.n(o),s=n("yXPU"),a=n.n(s),c=n("J4zp"),u=n.n(c),l=n("mwIZ"),f=n.n(l),p=n("FdF9"),h=n("lSNA"),d=n.n(h),m={GroupFreeCoupon:7,MallCoupon:8,TradeCoupon:9,VirtualGoods:13,TZYYCoupon:16,GoodsTypeCoupon:17,Category:18,App:19,AppMobileFare:20,Cash:21,PddCoupon:23,Plural:25,Exclusive:26,LittleCash:27,Walfare:28,Commodity:29,PartReturn:30,ShortCoupon:32,Classfication:34,PercentDiscount:35,MallCollection:36,DataTraffic:37,ShortPercent:38},g=(r={},d()(r,m.Commodity,"mallCommodityCoupon"),d()(r,m.MallCollection,"likeMallCoupon"),n("KNr+")),v=n("UWUP"),b=n.n(v),y=86400;e.default=function(t){var e=Object(p.useState)(""),n=u()(e,2),r=n[0],o=n[1],s=function(t){var e=new Date(1e3*t),n=new Date;if(!(parseInt(e-n)<0)){var r=parseInt((e-n)/1e3)%86400,i=Math.floor(r/3600);i=i>9?i:"0"+i,r%=3600;var s=Math.floor(r/60);s=s>9?s:"0"+s;var a=r%60;a=a>9?a:"0"+a;var c="".concat(i,":").concat(s,":").concat(a);o(c)}};Object(p.useEffect)(function(){var e;function n(){return(n=a()(i.a.mark(function n(){var r,a,c,u;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(g.getServerTime)();case 2:if(n.t0=n.sent,n.t0){n.next=5;break}n.t0=Date.now();case 5:r=n.t0,a=f()(t.returnDialogVo,"extend_map.expire_time"),c=a-parseInt(r/1e3,10),(u=parseInt(c/y,10))>0?o("".concat(u,"天")):(s(a),e=setInterval(function(){return s(a)},1e3));case 10:case"end":return n.stop()}},n)}))).apply(this,arguments)}var r=function(){return n.apply(this,arguments)}();return function(){return r.then(function(){return e&&clearInterval(e)})}},[]);var c=t.returnDialogVo&&t.returnDialogVo.extend_map&&t.returnDialogVo.extend_map.detail;return p.default.createElement("div",{className:b.a.couponExpire},p.default.createElement("div",{className:b.a.expireText},r,"后过期"),p.default.createElement("div",{className:b.a.couponList},c.map(function(t,e){var n,r,o=[m.PercentDiscount,m.ShortPercent].includes(parseInt(f()(t,"display_type"),10)),i=f()(t,"discount_param.value"),s=o?i/10:i/100;if(s){var a=(s+"").length;a<=3?(r=".4rem",n=".22rem"):a<=4?(r=".3rem",n=".22rem"):a<=5?(r=".24rem",n=".22rem"):a<=6?(r=".22rem",n=".14rem"):(r=".16rem",n=".14rem")}return p.default.createElement("div",{className:b.a.coupon,key:e},p.default.createElement("div",{className:b.a.discount,style:{color:f()(t,"discount_param.font_color"),fontSize:r}},!o&&p.default.createElement("i",{style:{fontSize:n}},"¥"),s,o&&p.default.createElement("i",null,"折")),p.default.createElement("div",{className:b.a.info},p.default.createElement("div",{className:b.a.desc,style:{color:f()(t,"usable_desc.font_color")}},f()(t,"usable_desc.value")),p.default.createElement("div",{className:b.a.type,style:{color:f()(t,"coupon_type_desc.font_color")}},f()(t,"coupon_type_desc.value"))))})))}},JEIG:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return d});var r=n("FdF9"),o=n("PlGL"),i=n("GftL"),s=n("SXY3"),a=n("mj+i"),c=n("1Irm"),u=n("do0s"),l=n("aoa4"),f=n.n(l),p=Object(a.g)(location.href).bio_type||0,h={0:{text:"",imgUrl:null},1:{text:"开启指纹支付，购物便捷又安全",imgUrl:"https://funimg.pddpic.com/transaction/2021-01-12/b8fb3478-270a-49bb-b3ed-cd459cdc363d.png.slim.png"},2:{text:"开启面容支付，购物便捷又安全",imgUrl:"https://funimg.pddpic.com/transaction/2021-01-12/ac403de8-2d2a-4602-8850-5e2f5a24e814.png.slim.png"}};function d(t){var e=t.closePopup,n=t.showPopup;Object(r.useEffect)(function(){n({overlay:1})},[]);var a=Object(r.useRef)({clicking:!1}),l=h[p]||{},d=l.text,m=l.imgUrl;return r.default.createElement(s.a,{trackingInfo:{op:"impr",page_el_sn:4637787}},r.default.createElement(o.a,null,r.default.createElement("div",{className:f.a.close,onClick:function(){a.current.clicking||(a.current.clicking=!0,Object(u.a)({op:"click",page_el_sn:4637788},function(){Object(c.b)("onCloseBioPaymentForWallet"),e({closeType:0})}))}}),r.default.createElement("div",{className:f.a.title},d),r.default.createElement("div",{className:f.a.imgLine},r.default.createElement(i.a,{className:f.a.image,src:m})),r.default.createElement("div",{className:f.a.mainBtn,onClick:function(){a.current.clicking||(a.current.clicking=!0,Object(u.a)({op:"click",page_el_sn:4637789,bio_payment_type:p},function(){Object(c.b)("onEnableBioPaymentForWallet"),e({closeType:1})}))}},"开启"),r.default.createElement("div",{className:f.a.safeTip},r.default.createElement(i.a,{src:"https://funimg.pddpic.com/2020-11-29/efbf6119-2f68-40e3-97e0-40b99dee00ff.png"})),r.default.createElement("div",{className:f.a.placeholder})))}},"KNr+":function(t,e,n){"use strict";n.r(e),n.d(e,"getServerTime",function(){return a}),n.d(e,"getDiversityComponent",function(){return c});var r=n("lSCD"),o=n.n(r),i=n("+F/Z"),s=n("FdF9"),a=function(){return Object(i.a)({method:"GET",url:"api/server/_stm"}).then(function(t){return t.server_time}).catch(function(){return Date.now()})},c=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,r=arguments.length,i=new Array(r>3?r-3:0),a=3;a<r;a++)i[a-3]=arguments[a];return t.split(/\#{(\S+?)}/).map(function(t,r){return 1&r?s.default.createElement("span",{key:r,className:e,onClick:function(){o()(n)&&n.apply(void 0,i)}},t):t})}},SXY3:function(t,e,n){"use strict";var r=n("lwsE"),o=n.n(r),i=n("W8MJ"),s=n.n(i),a=n("PJYZ"),c=n.n(a),u=n("7W2i"),l=n.n(u),f=n("a1gu"),p=n.n(f),h=n("Nsbk"),d=n.n(h),m=n("FdF9"),g=n("o0o1"),v=n.n(g),b=n("yXPU"),y=n.n(b),_=n("eHaf"),w=n("KoDT"),I=n("MpJ2"),E=function(t){Object(I.k)().then(t)},O=(n("Wr5T"),Object(w.a)()),T={rootMargin:"0px",threshold:[.75]},k=new function t(){var e=this;o()(this,t),this.init=y()(v.a.mark(function t(){var n;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:t.next=2;break;case 2:if(O.isNativePlatform&&O.statisfy&&O.statisfy("4.20.0","4.26.0","greaterThanEqual")){t.next=6;break}return e.createOberver(),t.abrupt("return");case 6:return t.prev=6,t.next=9,Object(I.e)("WebScene","getPageShownType",null);case 9:if(t.t0=t.sent,t.t0){t.next=12;break}t.t0={};case 12:n=t.t0,parseInt(n.shown_type,10)?E(function(){e.createOberver()}):e.createOberver(),t.next=20;break;case 17:t.prev=17,t.t1=t.catch(6),e.createOberver();case 20:case"end":return t.stop()}},t,null,[[6,17]])})),this.createOberver=function(){e.oberver=new IntersectionObserver(e.observerCallBack,T),Array.isArray(e.stashQuene)&&e.stashQuene.forEach(function(t){t&&t()}),e.stashQuene=null},this.observerCallBack=function(t){t.forEach(function(t){var n=parseInt(t.target.dataset.uniqid,10);if(n){if(t.isIntersecting&&t.intersectionRatio>=.75){if((e.elStore[n]||{}).immediate)return void e.log(n);e.entryQuene[n]=t}else e.entryQuene[n]&&(t.time-e.entryQuene[n].time>=300&&e.log(n),delete e.entryQuene[n]);e.lastTimer&&clearTimeout(e.lastTimer),e.lastTimer=setTimeout(function(){Object.keys(e.entryQuene).forEach(function(t){e.log(t),delete e.entryQuene[t]})},300)}})},this.log=function(t){if(e.elStore[t]){var n=e.elStore[t]||{},r=n.info,o=n.once,i=n.el,s=n.handleCustomTracking;o&&e.unRegister(i,t),s?s():Object(_.b)(r)}},this.register=function(t){var n=t.el,r=t.info,o=t.handleCustomTracking,i=t.once,s=void 0===i||i,a=t.immediate,c=void 0!==a&&a;if(n&&r){var u=e._uniqid;e._uniqid++,n.dataset.uniqid=u,e.elStore[u]=o?{el:n,info:r,once:s,immediate:c,handleCustomTracking:o}:{el:n,info:r,once:s,immediate:c},e.oberver?e.oberver.observe(n):e.stashQuene.push(function(){e.oberver.observe(n)})}},this.unRegister=function(t,n){e.oberver&&e.oberver.unobserve(t),delete e.elStore[n],delete e.entryQuene[n]},this._uniqid=1,this.oberver=null,this.entryQuene={},this.elStore={},this.stashQuene=[],this.init()},R=n("17x9"),C=n.n(R);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,r=d()(t);if(e){var o=d()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p()(this,n)}}var j=function(t){l()(n,t);var e=x(n);function n(){var t;o()(this,n);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).componentDidMount=function(){var e=t.props,n=e.id,r=e.doImpr;t.el=Object(m.findDOMNode)(c()(t))||document.getElementById(n),r&&t.registerImpr()},t.componentDidUpdate=function(e){t.lock||!e.doImpr&&t.props.doImpr&&(t.registerImpr(),t.lock=!0)},t.componentWillUnmount=function(){if(t.el&&t.isRegistered){var e=parseInt(t.el.dataset.uniqid,10)||0;k.unRegister(t.el,e)}},t.registerImpr=function(){var e=t.props,n=e.trackingInfo,r=e.once,o=e.handleCustomTracking,i=e.immediate;k.register({el:t.el,info:n,once:r,handleCustomTracking:o,immediate:i}),t.isRegistered=!0},t}return s()(n,[{key:"render",value:function(){return m.default.Children.only(this.props.children)}}]),n}(m.Component);j.defaultProps={doImpr:!0,id:"",once:!0,trackingInfo:{},immediate:!1},j.propTypes={doImpr:C.a.bool,id:C.a.string,once:C.a.bool,trackingInfo:C.a.object.isRequired,immediate:C.a.bool};var P=j;e.a=P},UWUP:function(t,e,n){t.exports={couponExpire:"_3nYsYJXS",expireText:"nsbeW9K0",coupon:"_1CV90_Pt",discount:"nLQIIsMt",desc:"_3LvLOLDZ",type:"_1lr46gab"}},Wr5T:function(t,e){!function(){"use strict";if("object"==typeof window)if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var t=window.document,e=[];r.prototype.THROTTLE_TIMEOUT=100,r.prototype.POLL_INTERVAL=null,r.prototype.USE_MUTATION_OBSERVER=!0,r.prototype.observe=function(t){if(!this._observationTargets.some(function(e){return e.element==t})){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},r.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter(function(e){return e.element!=t}),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},r.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},r.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},r.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter(function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]})},r.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map(function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}});return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},r.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(o(window,"resize",this._checkForIntersections,!0),o(t,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in window&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(t,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},r.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,i(window,"resize",this._checkForIntersections,!0),i(t,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},r.prototype._checkForIntersections=function(){var t=this._rootIsInDom(),e=t?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach(function(r){var o=r.element,i=a(o),s=this._rootContainsTarget(o),c=r.entry,u=t&&s&&this._computeTargetAndRootIntersection(o,e),l=r.entry=new n({time:window.performance&&performance.now&&performance.now(),target:o,boundingClientRect:i,rootBounds:e,intersectionRect:u});c?t&&s?this._hasCrossedThreshold(c,l)&&this._queuedEntries.push(l):c&&c.isIntersecting&&this._queuedEntries.push(l):this._queuedEntries.push(l)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},r.prototype._computeTargetAndRootIntersection=function(e,n){if("none"!=window.getComputedStyle(e).display){for(var r=a(e),o=u(e),i=!1;!i;){var c=null,l=1==o.nodeType?window.getComputedStyle(o):{};if("none"==l.display)return;if(o==this.root||o==t?(i=!0,c=n):o!=t.body&&o!=t.documentElement&&"visible"!=l.overflow&&(c=a(o)),c&&!(r=s(c,r)))break;o=u(o)}return r}},r.prototype._getRootRect=function(){var e;if(this.root)e=a(this.root);else{var n=t.documentElement,r=t.body;e={top:0,left:0,right:n.clientWidth||r.clientWidth,width:n.clientWidth||r.clientWidth,bottom:n.clientHeight||r.clientHeight,height:n.clientHeight||r.clientHeight}}return this._expandRectByRootMargin(e)},r.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map(function(e,n){return"px"==e.unit?e.value:e.value*(n%2?t.width:t.height)/100}),n={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},r.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,r=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==r)for(var o=0;o<this.thresholds.length;o++){var i=this.thresholds[o];if(i==n||i==r||i<n!=i<r)return!0}},r.prototype._rootIsInDom=function(){return!this.root||c(t,this.root)},r.prototype._rootContainsTarget=function(e){return c(this.root||t,e)},r.prototype._registerInstance=function(){e.indexOf(this)<0&&e.push(this)},r.prototype._unregisterInstance=function(){var t=e.indexOf(this);-1!=t&&e.splice(t,1)},window.IntersectionObserver=r,window.IntersectionObserverEntry=n}function n(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0},this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,r=this.intersectionRect,o=r.width*r.height;this.intersectionRatio=n?Number((o/n).toFixed(4)):this.isIntersecting?1:0}function r(t,e){var n=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(n.root&&1!=n.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=function(t,e){var n=null;return function(){n||(n=setTimeout(function(){t(),n=null},e))}}(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(n.rootMargin),this.thresholds=this._initThresholds(n.threshold),this.root=n.root||null,this.rootMargin=this._rootMarginValues.map(function(t){return t.value+t.unit}).join(" ")}function o(t,e,n,r){"function"==typeof t.addEventListener?t.addEventListener(e,n,r||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function i(t,e,n,r){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,r||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function s(t,e){var n=Math.max(t.top,e.top),r=Math.min(t.bottom,e.bottom),o=Math.max(t.left,e.left),i=Math.min(t.right,e.right),s=i-o,a=r-n;return s>=0&&a>=0&&{top:n,bottom:r,left:o,right:i,width:s,height:a}}function a(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function c(t,e){for(var n=e;n;){if(n==t)return!0;n=u(n)}return!1}function u(t){var e=t.parentNode;return e&&11==e.nodeType&&e.host?e.host:e&&e.assignedSlot?e.assignedSlot.parentNode:e}}()},aoa4:function(t,e,n){t.exports={title:"_34m_Glf8",imgLine:"_2sOnH77C",image:"yaKp6zWl",mainBtn:"_3T6f0mrY",safeTip:"_2nEm_2FX",close:"_2pn4M3Cg",placeholder:"_3PUDbhZc"}},yfU7:function(t,e,n){"use strict";var r=n("KoDT");e.a=function(){return Object(r.b)(navigator.userAgent).isNativePlatform}}}]);
//# sourceMappingURL=http://579abc.com/sourcemaps/mobile-transac-popups/js/unify_popup7_16c7d849b1bbcb4265e1.js.map