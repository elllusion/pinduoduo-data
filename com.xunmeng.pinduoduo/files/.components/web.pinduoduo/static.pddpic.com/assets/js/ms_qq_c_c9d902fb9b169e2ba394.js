(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[23],{gouW:function(e,a,r){"use strict";r.r(a);var t,n,i=r("lwsE"),s=r.n(i),h=r("W8MJ"),u=r.n(h),_=r("a1gu"),S=r.n(_),E=r("Nsbk"),l=r.n(E),o=r("7W2i"),c=r.n(o),T=r("lSNA"),m=r.n(T),C=r("dKgK"),O=r("a/1V"),y=r("chhR"),f=r("EECB"),p=r("YSLc"),d=r("W9H9"),I=r("gfNA"),A=r("Upw4"),N=r("Ne86"),R=function(e){function a(){return s()(this,a),S()(this,l()(a).apply(this,arguments))}return c()(a,e),u()(a,[{key:"normalize",value:function(e){var a=this;return e===O.a.COPY_CIPHER?this.processCipher():new Promise(function(r,t){var n=Object.assign({},a);Object(A.a)(e)?(a.targetShareURL=Object(N.b)(e,n.shareURL),a.realShareURL=a.targetShareURL,r({title:n.title,desc:n.message,share_url:a.realShareURL,image_url:n.thumbnailURL,back:!0})):r({title:n.title,desc:n.message,share_url:n.shareURL,image_url:n.thumbnailURL,back:!0})})}},{key:"getShareForm",value:function(e){return e===O.a.COPY_LINK?d.a.COPY_LINK:e===O.a.COPY_CIPHER?d.a.COMMAND:d.a.CARD}},{key:"getShareMethod",value:function(e){return e===O.a.COPY_LINK||e===O.a.COPY_CIPHER?p.a.MANUAL:p.a.SDK}}]),a}(I.a),L=r("/bZk").b.ShareErrorCode,v=[O.a.QQ_CHAT_SESSION,O.a.QQ_ZONE,O.a.WECHAT_SESSION,O.a.WECHAT_TIMELINE,O.a.COPY_LINK,O.a.COPY_CIPHER],H=(t={},m()(t,O.a.QQ_CHAT_SESSION,0),m()(t,O.a.QQ_ZONE,1),m()(t,O.a.WECHAT_SESSION,2),m()(t,O.a.WECHAT_TIMELINE,3),t),P=(n={},m()(n,O.a.QQ_CHAT_SESSION,"menuItem:share:qq"),m()(n,O.a.QQ_ZONE,"menuItem:share:QZone"),m()(n,O.a.WECHAT_SESSION,"menuItem:share:appMessage"),m()(n,O.a.WECHAT_TIMELINE,"menuItem:share:timeline"),n),b=function(e){function a(e){var r;return s()(this,a),(r=S()(this,l()(a).call(this,e))).ShareEntityClass=R,r._enableShareTypes=v.concat(),r}return c()(a,e),u()(a,[{key:"share",value:function(e){var a=this;if(this._enableShareTypes.indexOf(e)<0)return L.SHARE_TYPE_DISABLED;if(O.a.COPY_CIPHER===e)return this.copyCipher();if("undefined"==typeof mqq||void 0===window.mqq.ui)return L.SHARE_NOT_SUPPORTED;var r=this.getShareEntityByShareType(e);return this.emit(y.a.ON_SHARE_TRIGGER,{shareType:e}),r.normalize(e).then(function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r.share_type=H[e],window.mqq.ui.shareMessage(r,a.createShareCallback(e))},this.getNormalizeErrorHandler(e)),0}},{key:"_adjustMenu",value:function(){var e=this,a=v.filter(function(a){return e._enableShareTypes.indexOf(a)<0}).map(function(e){return P[e]});window.mqq&&window.mqq.hideMenuItems({menuList:a})}},{key:"createShareCallback",value:function(e){var a=this;return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch(parseInt(r.retCode,10)){case 0:a.emit(y.a.ON_SHARE_COMPLETED,{shareType:e,shareResultType:f.a.SUCCESS});break;case 1:case-2:a.emit(y.a.ON_SHARE_COMPLETED,{shareType:e,shareResultType:f.a.CANCEL});break;default:a.emit(y.a.ON_SHARE_COMPLETED,{shareType:e,shareResultType:f.a.FAIL})}}}},{key:"_setupShareTypes",value:function(){var e=this,a=this._enableShareTypes.length;return this._enableShareTypes=v.filter(function(a){return(e.disableShareTypes||[]).indexOf(a)<0}),a===this._enableShareTypes.length}},{key:"_setupPlatformShareSDK",value:function(){var e=this;return"undefined"==typeof mqq||void 0===window.mqq.ui?(this.emit(y.a.SDK_INIT_FAILED),Promise.resolve()):(window.mqq.ui.setOnShareHandler(function(a){var r=v[parseInt(a,10)],t=e.getShareEntityByShareType(r);t&&P[r]&&(e.emit(y.a.ON_SHARE_TRIGGER,{shareType:r}),t.normalize(r).then(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.share_type=a,window.mqq.ui.shareMessage(t,e.createShareCallback(r))},e.getNormalizeErrorHandler(r)))}),Promise.resolve())}},{key:"checkShareTypeEnable",value:function(e){return this._enableShareTypes.indexOf(e)<0?L.SHARE_TYPE_DISABLED:0}}]),a}(C.a);b.SUPPORTED_SHARE_TYPE=v;a.default=b}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-eve-spike/js/ms_qq_c_c9d902fb9b169e2ba394.js.map