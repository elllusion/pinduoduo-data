"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[3882],{24684:function(e,n,t){t.d(n,{Z:function(){return Q}});var r=t(34575),i=t.n(r),a=t(93913),o=t.n(a),c=t(81506),s=t.n(c),u=t(2205),l=t.n(u),f=t(78585),m=t.n(f),p=t(29754),d=t.n(p),v=t(67294),h=t.n(v),g=t(73935),b=t(48926),y=t.n(b),k=t(87757),C=t.n(k),I=t(12045),_=t(28387),w=t(36792),E=(t(66337),(0,_.zT)()),R={rootMargin:"0px",threshold:[.75]},O=new(o()((function e(){var n=this;i()(this,e),this.init=y()(C().mark((function e(){var t;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;break;case 2:if(E.isNativePlatform&&E.statisfy&&E.statisfy("4.20.0","4.26.0","greaterThanEqual")){e.next=6;break}return n.createOberver(),e.abrupt("return");case 6:return e.prev=6,e.next=9,(0,w.Q6)("WebScene","getPageShownType",null);case 9:if(e.t0=e.sent,e.t0){e.next=12;break}e.t0={};case 12:t=e.t0,parseInt(t.shown_type,10)?(r=function(){n.createOberver()},(0,w.Rl)().then(r)):n.createOberver(),e.next=20;break;case 17:e.prev=17,e.t1=e.catch(6),n.createOberver();case 20:case"end":return e.stop()}var r}),e,null,[[6,17]])}))),this.createOberver=function(){n.oberver=new IntersectionObserver(n.observerCallBack,R),Array.isArray(n.stashQuene)&&n.stashQuene.forEach((function(e){e&&e()})),n.stashQuene=null},this.observerCallBack=function(e){e.forEach((function(e){var t=parseInt(e.target.dataset.uniqid,10);if(t){if(e.isIntersecting&&e.intersectionRatio>=.75){if((n.elStore[t]||{}).immediate)return void n.log(t);n.entryQuene[t]=e}else n.entryQuene[t]&&(e.time-n.entryQuene[t].time>=300&&n.log(t),delete n.entryQuene[t]);n.lastTimer&&clearTimeout(n.lastTimer),n.lastTimer=setTimeout((function(){Object.keys(n.entryQuene).forEach((function(e){n.log(e),delete n.entryQuene[e]}))}),300)}}))},this.log=function(e){if(n.elStore[e]){var t=n.elStore[e]||{},r=t.info,i=t.once,a=t.el,o=t.handleCustomTracking;i&&n.unRegister(a,e),o?o():(0,I.wI)(r)}},this.register=function(e){var t=e.el,r=e.info,i=e.handleCustomTracking,a=e.once,o=void 0===a||a,c=e.immediate,s=void 0!==c&&c;if(t&&r){var u=n._uniqid;n._uniqid++,t.dataset.uniqid=u,n.elStore[u]=i?{el:t,info:r,once:o,immediate:s,handleCustomTracking:i}:{el:t,info:r,once:o,immediate:s},n.oberver?n.oberver.observe(t):n.stashQuene.push((function(){n.oberver.observe(t)}))}},this.unRegister=function(e,t){n.oberver&&n.oberver.unobserve(e),delete n.elStore[t],delete n.entryQuene[t]},this._uniqid=1,this.oberver=null,this.entryQuene={},this.elStore={},this.stashQuene=[],this.init()})));t(45697);function x(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=d()(e);if(n){var i=d()(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return m()(this,t)}}var N=function(e){l()(t,e);var n=x(t);function t(){var e;i()(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=n.call.apply(n,[this].concat(a))).componentDidMount=function(){var n=e.props,t=n.id,r=n.doImpr;e.el=(0,g.findDOMNode)(s()(e))||document.getElementById(t),r&&e.registerImpr()},e.componentDidUpdate=function(n){e.lock||!n.doImpr&&e.props.doImpr&&(e.registerImpr(),e.lock=!0)},e.componentWillUnmount=function(){if(e.el&&e.isRegistered){var n=parseInt(e.el.dataset.uniqid,10)||0;O.unRegister(e.el,n)}},e.registerImpr=function(){var n=e.props,t=n.trackingInfo,r=n.once,i=n.handleCustomTracking,a=n.immediate;O.register({el:e.el,info:t,once:r,handleCustomTracking:i,immediate:a}),e.isRegistered=!0},e}return o()(t,[{key:"render",value:function(){return h().Children.only(this.props.children)}}]),t}(v.Component);N.defaultProps={doImpr:!0,id:"",once:!0,trackingInfo:{},immediate:!1};var Q=N},78928:function(e,n,t){var r=t(67294),i=t.n(r),a=t(94184),o=t.n(a),c=t(24684),s=t(57028),u=t(58322),l=(0,r.memo)((function(e){var n=e.item,t=void 0===n?{}:n,r=e.key,a=e.bannerLogger,l=e.imgClassName,f={page_el_sn:a,active_location:r,op:"impr"};return t.img?i().createElement(c.Z,{trackingInfo:f},i().createElement("div",{key:r,className:"swiper-slide"},i().createElement(s.Z,{src:t.img,className:o()(u.Z.carouseImg,l),background:!0}))):null}));n.Z=l},92072:function(e,n,t){t.r(n),t.d(n,{CarouselBox:function(){return O}});var r,i=t(48926),a=t.n(i),o=t(34575),c=t.n(o),s=t(93913),u=t.n(s),l=t(2205),f=t.n(l),m=t(78585),p=t.n(m),d=t(29754),v=t.n(d),h=t(87757),g=t.n(h),b=t(67294),y=t.n(b),k=t(49408),C=t(1607),I=t(12045),_=t(27457),w=t(78928),E=t(58322);function R(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=v()(e);if(n){var i=v()(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return p()(this,t)}}var O=(0,k.Pi)(r=function(e){f()(i,e);var n,r=R(i);function i(){return c()(this,i),r.apply(this,arguments)}return u()(i,[{key:"componentDidMount",value:(n=a()(g().mark((function e(){var n,r,i,a=this;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,_.T)((function(){return t.e(7209).then(t.t.bind(t,99387,23))}));case 3:n=e.sent,r=n.default,i=new r(".swiper-container",{watchOverflow:!0,loop:this.props.banners.length>1,direction:"horizontal",autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{clickable:!0},on:{click:function(){var e=i.realIndex;a.onItemClicked(e)}},onSlideChangeEnd:function(e){e.update(),i.startAutoplay(),i.reLoop()}}),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,this,[[0,8]])}))),function(){return n.apply(this,arguments)})},{key:"onItemClicked",value:function(e){var n=this.props,t=n.bannerClickConfig,r=n.bannerLogger,i=n.banners[e].url;if(i){if(t){var a=t[e]||{};(0,I.oP)(a)}if(r){var o={op:"click",page_el_sn:r,active_location:e};(0,I.oP)(o)}C.ZP.uniformForward(i)}}},{key:"render",value:function(){var e=this.props,n=e.banners,t=e.bannerLogger,r=e.imgClassName;return y().createElement("div",{className:E.Z.container},y().createElement("div",{className:"swiper-container",id:"banner-entrance"},y().createElement("div",{className:"swiper-wrapper"},n.map((function(e,n){return y().createElement(w.Z,{item:e,key:"".concat(null==e?void 0:e.img,"-").concat(n),bannerLogger:t,imgClassName:r})})))))}}]),i}(y().Component))||r;n.default=(0,k.Pi)((function(e){var n=e.banners,t=e.bannerClickConfig,r=e.bannerLogger,i=e.imgClassName;return n&&0!==n.length?y().createElement(O,{banners:n,bannerClickConfig:t,bannerLogger:r,imgClassName:i}):null}))},58322:function(e,n){n.Z={carouseImg:"q5golF6o",container:"WYJalafw"}}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/m100433/js/loadable_new_221carousel_09a2113c33ee7a0128f2.js.map