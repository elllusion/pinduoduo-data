(self.webpackChunk_name_mobile_dc=self.webpackChunk_name_mobile_dc||[]).push([["c433"],{AwV8:function(e,t,r){"use strict";r.d(t,{RL:function(){return n},Z:function(){return o},Cj:function(){return i},E5:function(){return a}});var n="ffffff",o="000000",i="".concat("#").concat(n),a="".concat("#").concat(o)},Jz2w:function(e,t,r){"use strict";var n=r("sdwB"),o=r.n(n),i=r("9bdW"),a=r.n(i),s=r("KdYu"),c=r("KVD2"),l=r.n(c),u=["store"];t.Z=function(e){return function(t){return l()((0,s.inject)("store")((0,s.observer)((function(r){var n,i,s,c,l,p=r.store,f=o()(r,u),m=f.rootStore||p,v=m.requestContext;return f.canDisplayWhenImmerse=!(null!==(n=v.plaform)&&void 0!==n&&n.isNativePlatform&&"1"===v.queries._pdd_fs&&(null===(i=m.pUnoContext)||void 0===i||!i.immerse)),f.immerseSupport=!(null===(s=m.getComponentByKeyReg(/(Dc)?ImmersiveConfig/)[0])||void 0===s||null===(c=s.store)||void 0===c||null===(l=c.finalImmerseContext)||void 0===l||!l.immerse),f.immerseHeight=m.pUnoContext?m.pUnoContext.nh:m.initialPreRender?m.immersiveConfig.topObligate:e,f.immerseStatusHeight=m.pUnoContext?m.pUnoContext.sh:0,a().createElement(t,f)}))),t)}}},UqIA:function(e,t){"use strict";t.Z=function(e,t,r){if(!t||!t.useTiming)return r;var n=t.timeArr.sort((function(e,t){return(null==e?void 0:e.date)-(null==t?void 0:t.date)})),o=(n=n.filter((function(e){return e.date&&e.value}))).findIndex((function(t){return t.date>e}));return 0===(o=-1===o?n.length:o)?r:n[o-1].value}},tWNz:function(e,t,r){"use strict";r.d(t,{Z:function(){return te}});var n=r("0Qln"),o=r.n(n),i=r("/4JS"),a=r.n(i),s=r("xeO4"),c=r.n(s),l=r("U5BY"),u=r.n(l),p=r("hwDT"),f=r.n(p),m=r("i/Q6"),v=r.n(m),h=r("f6/u"),d=r.n(h),g=r("f17R"),b=r.n(g),y=r("Vl5s"),k=r.n(y),C=(r("XC3m"),r("jXLS")),x=r.n(C),w=r("T6n4"),S=r.n(w),R=r("9bdW"),A=r.n(R),_=r("UK90"),P=r("KdYu"),N=r("ukrc"),I=r.n(N),O=r("qIj8"),j=r("7Ahf"),D=r.n(j),B=r("pfaS"),E=r("VCAa"),T=r("2tVT"),U=r("4vPy"),q=r("CLTR"),K=r("AwV8"),V=r("TO2N"),$=r("V56i");var Z,z,L,H,W,M,F,J,X=r("Jz2w"),Y=r("UqIA");function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ee(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var te=(Z=(0,X.Z)(),z=I()(D()),L=(0,B.Z)(60,{trailing:!0}),Z(H=z(H=(0,P.observer)((J=F=function(e){d()(i,e);var t,r,n=(t=i,function(){var e,r=k()(t);if(ee()){var n=k()(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return b()(this,e)});function i(e){var t;u()(this,i),(t=n.call(this,e)).initNav=c()(S().mark((function e(){var r,n,o,i,a,s,c;return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.props.height||t.props.backupHeight,n=!0,o=t.props.rootStore,i=t.props,a=i.fixed,s=i.useNativeNavBar,t.setTopObligate(~~t.props.height),!((0,U.compareVersion)((0,U.getCurrentPlatform)().version,"4.31.0")>=0&&"1"===(0,$.ZS)()._pdd_fs)){e.next=11;break}return e.next=8,t.initImmersive(t.props);case 8:(c=e.sent)?(r=c,o.isImmersive=!0):a||(n=!1),s&&(n=!1);case 11:t.setTopObligate(r),t.setState({isShow:n,height:r}),a&&(a&&window.addEventListener(V.ej,t.onScroll),t.onScroll());case 14:case"end":return e.stop()}}),e)}))),t.$isUsingNative=!1,t.rollingAlphaParams={},t.$isAlphaConstant=!1,t.setRollingAlpha=function(){var e=c()(S().mark((function e(r){var n;return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.props.rootStore.requestContext,e.next=3,(0,q.k$)("setRollingAlpha",G(G({},t.rollingAlphaParams),{},{alpha:(0,U.compareVersion)(n.platform.version,"4.40.0")<=0&&n.platform.isNativePlatform?[0,1]:r}),!1);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o()(t,"onScroll",M,v()(t));var r=e.canDisplayWhenImmerse,a=e.immerseHeight,s=e.height,l=e.rootStore,p=r&&a||s||!l.requestContext.platform.isNativePlatform&&e.backupHeight||l.requestContext.queries.nav_height;return t.state={isShow:!!p,opacity:e.fixed?0:1,height:p},t}return f()(i,[{key:"render",value:function(){var e,t,r=this.state,n=r.opacity,o=r.isShow,i=r.height,a=this.props,s=a.backgroundColor,c=a.backgroundImg,l=a.fixed,u=a.rootStore,p=a.gradualContent;if(!o)return null;var f=u.UIInfo,m=void 0===f?{}:f,v=null===(e=u.getComponentByKeyReg(/(Dc)?ImmersiveConfig/)[0])||void 0===e||null===(t=e.store)||void 0===t?void 0:t.immersiveBg,h=m.usage,d=m.backgroundColor,g=i?{height:i+"px"}:{},b=1===h?(0,Y.Z)(u.serverTime,u.bgColorInfo,d):"",y={opacity:n,backgroundColor:s||v||b,backgroundImage:c&&"url(".concat(c,")")||""};y.backgroundColor=y.backgroundColor.startsWith("#")?y.backgroundColor:"#"+y.backgroundColor;var k={backgroundColor:(0,E.mR)(y.backgroundColor,n)};return i&&A().createElement("div",{style:l?{}:g},A().createElement("div",{className:D().content,style:k},A().createElement(T.ZP,{className:D().bg,style:y,optimize:!0},p&&this.props.children),A().createElement("div",{className:D().main,style:g},!p&&this.props.children)))||null}},{key:"componentDidMount",value:function(){this.props.rootStore.initialPreRender?this.dispose=(0,q.Q)(this.initNav):this.initNav()}},{key:"setTopObligate",value:function(e){this.props.rootStore.immersiveConfig.topObligate=e}},{key:"initImmersive",value:(r=c()(S().mark((function e(){var t,r,n,o,i,a,s,c,l,u,p,f,m,v,h,d,g,b,y,k,C,x,w=arguments;return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=w.length>0&&void 0!==w[0]?w[0]:{},e.prev=1,e.next=4,(0,q.k$)("supportCustomNavigationBar",null,!1);case 4:if(0!==e.sent.enable){e.next=8;break}return e.abrupt("return");case 8:return n=this.props.rootStore,o=n.UIInfo,i=n.requestContext,a=(null===(r=this.props.rootStore.getComponentByKeyReg(/(Dc)?ImmersiveConfig/)[0])||void 0===r?void 0:r.store)||{},s=a.immersiveBg,c=a.immersiveMode,l=void 0===c?1:c,u=t.color,p=void 0===u?l?K.Cj:K.E5:u,f=t.style,m=void 0===f?l:f,v=t.alpha,h=void 0===v?[0,1]:v,d=t.offset,g=void 0===d?[0,200]:d,b=t.useNativeNavBar,y=t.backgroundColor||s||(null==o?void 0:o.backgroundColor)||K.Cj,k=[],b&&([(0,q.k$)("setNaviBarColor",{color:(0,E.JL)(y)},!1)].forEach((function(e){k.push(e)})),this.$isUsingNative=!0),this.rollingAlphaParams={btn_style:[p,p],status_bar_style:[m,m],continuous:1,offset:g,height:window.innerHeight},[(0,q.k$)("getNavigationHeight",null,!1),(0,q.k$)("setRollingAlpha",G(G({},this.rollingAlphaParams),{},{alpha:(0,U.compareVersion)(i.platform.version,"4.40.0")<=0&&i.platform.isNativePlatform?[0,1]:h}),!1),(0,q.k$)("setBackground",{background_color:(0,E.JL)(y)},!1)].forEach((function(e){k.push(e)})),e.next=18,Promise.all(k);case 18:return C=e.sent,x=C[b?1:0].navigation_height,e.abrupt("return",~~x);case 23:if(e.prev=23,e.t0=e.catch(1),60001!==e.t0){e.next=27;break}return e.abrupt("return");case 27:case"end":return e.stop()}}),e,this,[[1,23]])}))),function(){return r.apply(this,arguments)})},{key:"onNativeBarScroll",value:function(e){this.$isAlphaConstant?"fixed"!==document.body.style.position&&e<=200&&(this.setRollingAlpha([0,1]),this.$isAlphaConstant=!1):(e>=200||"fixed"===document.body.style.position)&&(this.setRollingAlpha([1,1]),this.$isAlphaConstant=!0)}},{key:"componentWillUnmount",value:function(){var e;window.removeEventListener(V.ej,this.onScroll),null===(e=this.dispose)||void 0===e||e.call(this)}}]),i}(O.Z),F.defaultProps={useNativeNavBar:!1,height:0,alpha:[0,0],gradualContent:!1,backupHeight:47,fixed:!0,disableChangeNav:!1},W=J,x()(W.prototype,"setTopObligate",[_.action],Object.getOwnPropertyDescriptor(W.prototype,"setTopObligate"),W.prototype),M=x()(W.prototype,"onScroll",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){if(!e.props.disableChangeNav){var t=document.documentElement.scrollTop||document.body.scrollTop;if(e.$isUsingNative)e.onNativeBarScroll(t);else{var r="fixed"===document.body.style.position?1:Math.max(Math.min(t/200,1),0);e.setState({opacity:r})}}}}}),H=W))||H)||H)||H)},"5hd5":function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return T}});var n=r("xeO4"),o=r.n(n),i=r("U5BY"),a=r.n(i),s=r("hwDT"),c=r.n(s),l=r("f6/u"),u=r.n(l),p=r("f17R"),f=r.n(p),m=r("Vl5s"),v=r.n(m),h=r("jXLS"),d=r.n(h),g=r("T6n4"),b=r.n(g),y=r("9bdW"),k=r.n(y),C=r("UK90"),x=r("KdYu"),w=r("tWNz"),S=r("AwV8"),R=r("CLTR"),A=r("4vPy");function _(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var P,N,I,O,j=function(e){u()(n,e);var t,r=(t=n,function(){var e,r=v()(t);if(_()){var n=v()(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return f()(this,e)});function n(){return a()(this,n),r.apply(this,arguments)}return c()(n)}(r("wfOt").Z),D=j,B=r("iuwq");function E(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var T=(0,x.inject)("store")(P=(0,x.observer)((O=I=function(e){u()(n,e);var t,r=(t=n,function(){var e,r=v()(t);if(E()){var n=v()(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return f()(this,e)});function n(e){var t;return a()(this,n),(t=r.call(this,e)).checkImmersiveAgain=o()(b().mark((function e(){var r,n;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,A.getCurrentPlatform)().isNativePlatform){e.next=13;break}return r=(0,C.action)((function(){t.rootStore.isSupportImmersive=!1})),e.prev=2,e.next=5,(0,R.k$)("supportCustomNavigationBar");case 5:n=e.sent,n.enable||r(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),60001===e.t0&&r();case 13:case"end":return e.stop()}}),e,null,[[2,10]])}))),t.checkSupportImmersive(),t}return c()(n,[{key:"checkSupportImmersive",value:function(){var e=!1,t=this.rootStore.requestContext;if(this.rootStore.initialPreRender)e=t.platform.isNativePlatform;else if("1"===t.queries._pdd_fs){var r=t.userAgent.match(/phh_(ios|android)_version\/([^ ]*)/i);if(r){var n=r[1].toLowerCase(),o=r[2];e=(0,A.compareVersion)(o,"ios"===n?"4.34.0":"4.36.1")>=0}}this.rootStore.isSupportImmersive=e}},{key:"render",value:function(){var e,t=this.rootStore,r=t.requestContext,n=(t.preRender,(null===(e=t.getComponentByKeyReg(/(Dc)?ImmersiveConfig/))||void 0===e?void 0:e.store)||{}),o=n.useImmersive,i=n.immersiveMode,a=n.immersiveBg,s=o?{rootStore:t,backupHeight:0,gradualContent:!0,immersiveMode:i,backgroundColor:a}:{rootStore:t,fixed:!1,backgroundColor:r.platform.platform===A.PLATFORM.PddAndroid&&(0,A.compareVersion)(r.platform.version,"4.50.0")<0&&t.UIInfo.backgroundColor||S.Cj,style:0,color:S.E5},c=o&&1===i&&{color:S.Cj}||{};return!t.getComponentByKeyReg(/(Dc)?SearchBar/).length&&!t.getComponentByKeyReg(/(Dc)?ImmersiveConfig/).length&&r.platform.isNativePlatform&&"1"===r.queries._pdd_fs&&k().createElement(w.Z,s,k().createElement("div",{style:c},t.pageTitle))||null}},{key:"componentDidMount",value:function(){this.checkImmersiveAgain()}}]),n}(B.Z),I.Store=D,N=O,d()(N.prototype,"checkSupportImmersive",[C.action],Object.getOwnPropertyDescriptor(N.prototype,"checkSupportImmersive"),N.prototype),P=N))||P)||P},"7Ahf":function(e,t,r){var n=r("s4pN"),o=r("DDs0"),i="string"==typeof n?[[e.id,n,""]]:n;(t=e.exports=n.locals||{})._getContent=function(){return i},t._getCss=function(){return""+n},t._insertCss=function(e){return o(i,e)}},s4pN:function(e,t,r){(t=e.exports=r("Cgg2")(!1)).push([e.id,"._70bS3z-K{position:fixed;top:0;width:100%;z-index:101;max-width:7.68rem;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}._3ASsR9po{position:absolute;width:100%;height:100%;top:0;left:0;background-repeat:no-repeat;opacity:0;-webkit-transition:opacity .1 ease;transition:opacity .1 ease;will-change:opacity;background-size:100% auto;background-position:0 bottom}._1vAEirxF{position:relative;-webkit-box-align:center;-webkit-align-items:center;align-items:center;min-height:.47rem}._1vAEirxF,._3ASsR9po{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}._1vAEirxF,._3ASsR9po{color:#000;font-size:.17rem;line-height:1.8;padding-bottom:.07rem;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}._1vAEirxF>div,._3ASsR9po>div{text-align:center;max-width:2.8rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",""]),t.locals={content:"_70bS3z-K",bg:"_3ASsR9po",main:"_1vAEirxF"}}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/assets/js/mobile-dc/DcVirtualNav-7c622d1d85eca9df6564.js.map