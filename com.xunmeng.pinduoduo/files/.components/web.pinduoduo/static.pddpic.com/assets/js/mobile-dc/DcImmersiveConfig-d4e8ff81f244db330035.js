(self.webpackChunk_name_mobile_dc=self.webpackChunk_name_mobile_dc||[]).push([["bc01"],{AwV8:function(e,t,r){"use strict";r.d(t,{RL:function(){return n},Z:function(){return o},Cj:function(){return i},E5:function(){return a}});var n="ffffff",o="000000",i="".concat("#").concat(n),a="".concat("#").concat(o)},Jz2w:function(e,t,r){"use strict";var n=r("sdwB"),o=r.n(n),i=r("9bdW"),a=r.n(i),s=r("KdYu"),c=r("KVD2"),u=r.n(c),l=["store"];t.Z=function(e){return function(t){return u()((0,s.inject)("store")((0,s.observer)((function(r){var n,i,s,c,u,p=r.store,f=o()(r,l),m=f.rootStore||p,v=m.requestContext;return f.canDisplayWhenImmerse=!(null!==(n=v.plaform)&&void 0!==n&&n.isNativePlatform&&"1"===v.queries._pdd_fs&&(null===(i=m.pUnoContext)||void 0===i||!i.immerse)),f.immerseSupport=!(null===(s=m.getComponentByKeyReg(/(Dc)?ImmersiveConfig/)[0])||void 0===s||null===(c=s.store)||void 0===c||null===(u=c.finalImmerseContext)||void 0===u||!u.immerse),f.immerseHeight=m.pUnoContext?m.pUnoContext.nh:m.initialPreRender?m.immersiveConfig.topObligate:e,f.immerseStatusHeight=m.pUnoContext?m.pUnoContext.sh:0,a().createElement(t,f)}))),t)}}},UqIA:function(e,t){"use strict";t.Z=function(e,t,r){if(!t||!t.useTiming)return r;var n=t.timeArr.sort((function(e,t){return(null==e?void 0:e.date)-(null==t?void 0:t.date)})),o=(n=n.filter((function(e){return e.date&&e.value}))).findIndex((function(t){return t.date>e}));return 0===(o=-1===o?n.length:o)?r:n[o-1].value}},"44ub":function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return M}});var n,o,i,a,s,c=r("xeO4"),u=r.n(c),l=r("U5BY"),p=r.n(l),f=r("hwDT"),m=r.n(f),v=r("f6/u"),d=r.n(v),h=r("f17R"),g=r.n(h),b=r("Vl5s"),y=r.n(b),k=r("T6n4"),x=r.n(k),C=r("9bdW"),w=r.n(C),S=r("KdYu"),_=r("iOT4"),N=r("iuwq"),R=r("0Qln"),I=r.n(R),A=r("i/Q6"),O=r.n(A),P=r("jXLS"),j=r.n(P),B=(r("XC3m"),r("UK90")),D=r("wfOt"),E=r("4vPy");function T(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var U,z=(n=function(e){d()(n,e);var t,r=(t=n,function(){var e,r=y()(t);if(T()){var n=y()(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return g()(this,e)});function n(){var e;p()(this,n);for(var t=arguments.length,c=new Array(t),u=0;u<t;u++)c[u]=arguments[u];return(e=r.call.apply(r,[this].concat(c))).useImmersive=!0,I()(e,"isSupportImmersive",o,O()(e)),I()(e,"immersiveBg",i,O()(e)),I()(e,"immersiveMode",a,O()(e)),I()(e,"useNativeNavBar",s,O()(e)),e.checkSupportImmerse(),e}return m()(n,[{key:"finalImmerseContext",get:function(){return this.rootStore.pUnoContext||{immerse:this.isSupportImmersive,nh:this.rootStore.immersiveConfig.topObligate}}},{key:"checkSupportImmerse",value:function(){var e=!1,t=this.rootStore.requestContext;if(this.rootStore.initialPreRender)e=t.platform.isNativePlatform;else if("1"===t.queries._pdd_fs){var r=t.userAgent.match(/phh_(ios|android)_version\/([^ ]*)/i);if(r&&!t.userAgent.includes("app_type/tiny")){var n=r[1].toLowerCase(),o=r[2];e=(0,E.compareVersion)(o,"ios"===n?"4.34.0":"4.36.1")>=0}}this.isSupportImmersive=e}}]),n}(D.Z),o=j()(n.prototype,"isSupportImmersive",[B.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),i=j()(n.prototype,"immersiveBg",[B.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a=j()(n.prototype,"immersiveMode",[B.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),s=j()(n.prototype,"useNativeNavBar",[B.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),j()(n.prototype,"finalImmerseContext",[B.computed],Object.getOwnPropertyDescriptor(n.prototype,"finalImmerseContext"),n.prototype),j()(n.prototype,"checkSupportImmerse",[B.action],Object.getOwnPropertyDescriptor(n.prototype,"checkSupportImmerse"),n.prototype),n),q=r("CLTR"),V=r("tWNz"),Z=r("AwV8"),$=r("VCAa");function K(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var L=(0,S.inject)("store")(U=(0,S.observer)(U=function(e){d()(o,e);var t,r,n=(t=o,function(){var e,r=y()(t);if(K()){var n=y()(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return g()(this,e)});function o(){return p()(this,o),n.apply(this,arguments)}return m()(o,[{key:"componentDidMount",value:function(){this.checkImmerseAgain()}},{key:"checkImmerseAgain",value:(r=u()(x().mark((function e(){var t,r=this;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!_.ZP.isNativePlatform){e.next=13;break}return t=(0,B.action)((function(){r.store.isSupportImmersive=!1})),e.prev=2,e.next=5,(0,q.k$)("supportCustomNavigationBar");case 5:e.sent.enable||t(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),60001===e.t0&&t();case 13:case"end":return e.stop()}}),e,null,[[2,10]])}))),function(){return r.apply(this,arguments)})},{key:"render",value:function(){var e,t=this.rootStore,r=t.requestContext,n=(t.preRender,this.store),o=n.useImmersive,i=n.immersiveMode,a=n.useNativeNavBar,s=o?{rootStore:t,backupHeight:0,gradualContent:!0,alpha:a?[0,1]:void 0,useNativeNavBar:a}:{rootStore:t,fixed:!1,backgroundColor:r.platform.platform===E.PLATFORM.PddAndroid&&(0,E.compareVersion)(r.platform.version,"4.50.0")<0&&(null===(e=t.UIInfo)||void 0===e?void 0:e.backgroundColor)||Z.Cj,style:0,color:Z.E5},c=o&&1===i&&{color:Z.Cj}||{};return!t.getComponentByKeyReg(/((Dc)?SearchBar|SearchResult)/).length&&r.platform.isNativePlatform&&"1"===r.queries._pdd_fs&&w().createElement(V.Z,s,w().createElement("div",{style:c},t.pageTitle||t.name))||null}}],[{key:"createExtraQuerie",value:function(e){var t=e.immersiveMode,r=e.immersiveBg,n=e.useImmersive,o=e.rootStore.UIInfo;return n&&{_pdd_fs:1,_pdd_tc:t?Z.RL:Z.Z,_pdd_sbs:t,_pdd_nc:(0,$.uX)(r||(null==o?void 0:o.backgroundColor))}||{}}}]),o}(N.Z))||U)||U;L.Store=z;var M=L},tWNz:function(e,t,r){"use strict";r.d(t,{Z:function(){return te}});var n=r("0Qln"),o=r.n(n),i=r("/4JS"),a=r.n(i),s=r("xeO4"),c=r.n(s),u=r("U5BY"),l=r.n(u),p=r("hwDT"),f=r.n(p),m=r("i/Q6"),v=r.n(m),d=r("f6/u"),h=r.n(d),g=r("f17R"),b=r.n(g),y=r("Vl5s"),k=r.n(y),x=(r("XC3m"),r("jXLS")),C=r.n(x),w=r("T6n4"),S=r.n(w),_=r("9bdW"),N=r.n(_),R=r("UK90"),I=r("KdYu"),A=r("ukrc"),O=r.n(A),P=r("qIj8"),j=r("7Ahf"),B=r.n(j),D=r("pfaS"),E=r("VCAa"),T=r("2tVT"),U=r("4vPy"),z=r("CLTR"),q=r("AwV8"),V=r("TO2N"),Z=r("V56i");var $,K,L,M,H,W,X,F,Q=r("Jz2w"),J=r("UqIA");function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ee(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var te=($=(0,Q.Z)(),K=O()(B()),L=(0,D.Z)(60,{trailing:!0}),$(M=K(M=(0,I.observer)((F=X=function(e){h()(i,e);var t,r,n=(t=i,function(){var e,r=k()(t);if(ee()){var n=k()(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return b()(this,e)});function i(e){var t;l()(this,i),(t=n.call(this,e)).initNav=c()(S().mark((function e(){var r,n,o,i,a,s,c;return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.props.height||t.props.backupHeight,n=!0,o=t.props.rootStore,i=t.props,a=i.fixed,s=i.useNativeNavBar,t.setTopObligate(~~t.props.height),!((0,U.compareVersion)((0,U.getCurrentPlatform)().version,"4.31.0")>=0&&"1"===(0,Z.ZS)()._pdd_fs)){e.next=11;break}return e.next=8,t.initImmersive(t.props);case 8:(c=e.sent)?(r=c,o.isImmersive=!0):a||(n=!1),s&&(n=!1);case 11:t.setTopObligate(r),t.setState({isShow:n,height:r}),a&&(a&&window.addEventListener(V.ej,t.onScroll),t.onScroll());case 14:case"end":return e.stop()}}),e)}))),t.$isUsingNative=!1,t.rollingAlphaParams={},t.$isAlphaConstant=!1,t.setRollingAlpha=function(){var e=c()(S().mark((function e(r){var n;return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.props.rootStore.requestContext,e.next=3,(0,z.k$)("setRollingAlpha",G(G({},t.rollingAlphaParams),{},{alpha:(0,U.compareVersion)(n.platform.version,"4.40.0")<=0&&n.platform.isNativePlatform?[0,1]:r}),!1);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o()(t,"onScroll",W,v()(t));var r=e.canDisplayWhenImmerse,a=e.immerseHeight,s=e.height,u=e.rootStore,p=r&&a||s||!u.requestContext.platform.isNativePlatform&&e.backupHeight||u.requestContext.queries.nav_height;return t.state={isShow:!!p,opacity:e.fixed?0:1,height:p},t}return f()(i,[{key:"render",value:function(){var e,t,r=this.state,n=r.opacity,o=r.isShow,i=r.height,a=this.props,s=a.backgroundColor,c=a.backgroundImg,u=a.fixed,l=a.rootStore,p=a.gradualContent;if(!o)return null;var f=l.UIInfo,m=void 0===f?{}:f,v=null===(e=l.getComponentByKeyReg(/(Dc)?ImmersiveConfig/)[0])||void 0===e||null===(t=e.store)||void 0===t?void 0:t.immersiveBg,d=m.usage,h=m.backgroundColor,g=i?{height:i+"px"}:{},b=1===d?(0,J.Z)(l.serverTime,l.bgColorInfo,h):"",y={opacity:n,backgroundColor:s||v||b,backgroundImage:c&&"url(".concat(c,")")||""};y.backgroundColor=y.backgroundColor.startsWith("#")?y.backgroundColor:"#"+y.backgroundColor;var k={backgroundColor:(0,E.mR)(y.backgroundColor,n)};return i&&N().createElement("div",{style:u?{}:g},N().createElement("div",{className:B().content,style:k},N().createElement(T.ZP,{className:B().bg,style:y,optimize:!0},p&&this.props.children),N().createElement("div",{className:B().main,style:g},!p&&this.props.children)))||null}},{key:"componentDidMount",value:function(){this.props.rootStore.initialPreRender?this.dispose=(0,z.Q)(this.initNav):this.initNav()}},{key:"setTopObligate",value:function(e){this.props.rootStore.immersiveConfig.topObligate=e}},{key:"initImmersive",value:(r=c()(S().mark((function e(){var t,r,n,o,i,a,s,c,u,l,p,f,m,v,d,h,g,b,y,k,x,C,w=arguments;return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=w.length>0&&void 0!==w[0]?w[0]:{},e.prev=1,e.next=4,(0,z.k$)("supportCustomNavigationBar",null,!1);case 4:if(0!==e.sent.enable){e.next=8;break}return e.abrupt("return");case 8:return n=this.props.rootStore,o=n.UIInfo,i=n.requestContext,a=(null===(r=this.props.rootStore.getComponentByKeyReg(/(Dc)?ImmersiveConfig/)[0])||void 0===r?void 0:r.store)||{},s=a.immersiveBg,c=a.immersiveMode,u=void 0===c?1:c,l=t.color,p=void 0===l?u?q.Cj:q.E5:l,f=t.style,m=void 0===f?u:f,v=t.alpha,d=void 0===v?[0,1]:v,h=t.offset,g=void 0===h?[0,200]:h,b=t.useNativeNavBar,y=t.backgroundColor||s||(null==o?void 0:o.backgroundColor)||q.Cj,k=[],b&&([(0,z.k$)("setNaviBarColor",{color:(0,E.JL)(y)},!1)].forEach((function(e){k.push(e)})),this.$isUsingNative=!0),this.rollingAlphaParams={btn_style:[p,p],status_bar_style:[m,m],continuous:1,offset:g,height:window.innerHeight},[(0,z.k$)("getNavigationHeight",null,!1),(0,z.k$)("setRollingAlpha",G(G({},this.rollingAlphaParams),{},{alpha:(0,U.compareVersion)(i.platform.version,"4.40.0")<=0&&i.platform.isNativePlatform?[0,1]:d}),!1),(0,z.k$)("setBackground",{background_color:(0,E.JL)(y)},!1)].forEach((function(e){k.push(e)})),e.next=18,Promise.all(k);case 18:return x=e.sent,C=x[b?1:0].navigation_height,e.abrupt("return",~~C);case 23:if(e.prev=23,e.t0=e.catch(1),60001!==e.t0){e.next=27;break}return e.abrupt("return");case 27:case"end":return e.stop()}}),e,this,[[1,23]])}))),function(){return r.apply(this,arguments)})},{key:"onNativeBarScroll",value:function(e){this.$isAlphaConstant?"fixed"!==document.body.style.position&&e<=200&&(this.setRollingAlpha([0,1]),this.$isAlphaConstant=!1):(e>=200||"fixed"===document.body.style.position)&&(this.setRollingAlpha([1,1]),this.$isAlphaConstant=!0)}},{key:"componentWillUnmount",value:function(){var e;window.removeEventListener(V.ej,this.onScroll),null===(e=this.dispose)||void 0===e||e.call(this)}}]),i}(P.Z),X.defaultProps={useNativeNavBar:!1,height:0,alpha:[0,0],gradualContent:!1,backupHeight:47,fixed:!0,disableChangeNav:!1},H=F,C()(H.prototype,"setTopObligate",[R.action],Object.getOwnPropertyDescriptor(H.prototype,"setTopObligate"),H.prototype),W=C()(H.prototype,"onScroll",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){if(!e.props.disableChangeNav){var t=document.documentElement.scrollTop||document.body.scrollTop;if(e.$isUsingNative)e.onNativeBarScroll(t);else{var r="fixed"===document.body.style.position?1:Math.max(Math.min(t/200,1),0);e.setState({opacity:r})}}}}}),M=H))||M)||M)||M)},"7Ahf":function(e,t,r){var n=r("s4pN"),o=r("DDs0"),i="string"==typeof n?[[e.id,n,""]]:n;(t=e.exports=n.locals||{})._getContent=function(){return i},t._getCss=function(){return""+n},t._insertCss=function(e){return o(i,e)}},s4pN:function(e,t,r){(t=e.exports=r("Cgg2")(!1)).push([e.id,"._70bS3z-K{position:fixed;top:0;width:100%;z-index:101;max-width:7.68rem;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}._3ASsR9po{position:absolute;width:100%;height:100%;top:0;left:0;background-repeat:no-repeat;opacity:0;-webkit-transition:opacity .1 ease;transition:opacity .1 ease;will-change:opacity;background-size:100% auto;background-position:0 bottom}._1vAEirxF{position:relative;-webkit-box-align:center;-webkit-align-items:center;align-items:center;min-height:.47rem}._1vAEirxF,._3ASsR9po{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}._1vAEirxF,._3ASsR9po{color:#000;font-size:.17rem;line-height:1.8;padding-bottom:.07rem;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}._1vAEirxF>div,._3ASsR9po>div{text-align:center;max-width:2.8rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",""]),t.locals={content:"_70bS3z-K",bg:"_3ASsR9po",main:"_1vAEirxF"}}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/assets/js/mobile-dc/DcImmersiveConfig-d4e8ff81f244db330035.js.map