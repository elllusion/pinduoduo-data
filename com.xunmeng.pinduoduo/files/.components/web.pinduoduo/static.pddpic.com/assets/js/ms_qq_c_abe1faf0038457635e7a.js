"use strict";(self.webpackChunkmobile_fun_cashback=self.webpackChunkmobile_fun_cashback||[]).push([[6795],{573:function(e,t,r){r.r(t),r.d(t,{default:function(){return L}});var n=r(60112),o=r(73897),i=r(1906),u=r(7680),a=r(54466),c=r(82851),f=r(84100),s=r(65232),l=r(93556);function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _(e,t){return _=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},_(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=m(e);if(t){var o=m(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return S(this,r)}}function S(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}var E,O,v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(u,e);var t,r,n,i=b(u);function u(){return y(this,u),i.apply(this,arguments)}return t=u,(r=[{key:"normalize",value:function(e){var t=this;return e===o.Z.COPY_CIPHER?this.processCipher():new Promise((function(r,n){var o=Object.assign({},t);(0,s.i)(e)?(t.targetShareURL=(0,l.ls)(e,o.shareURL),t.realShareURL=t.targetShareURL,r({title:o.title,desc:o.message,share_url:t.realShareURL,image_url:o.thumbnailURL,back:!0})):r({title:o.title,desc:o.message,share_url:o.shareURL,image_url:o.thumbnailURL,back:!0})}))}},{key:"getShareForm",value:function(e){return e===o.Z.COPY_LINK?c.Z.COPY_LINK:e===o.Z.COPY_CIPHER?c.Z.COMMAND:c.Z.CARD}},{key:"getShareMethod",value:function(e){return e===o.Z.COPY_LINK||e===o.Z.COPY_CIPHER?a.Z.MANUAL:a.Z.SDK}}])&&p(t.prototype,r),n&&p(t,n),u}(f.Z),d=v;function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function C(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function R(e,t){return R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},R(e,t)}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=w(e);if(t){var o=w(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Z(this,r)}}function Z(e,t){if(t&&("object"===T(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}function I(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=r(69870).Z.ShareErrorCode,N=[o.Z.QQ_CHAT_SESSION,o.Z.QQ_ZONE,o.Z.WECHAT_SESSION,o.Z.WECHAT_TIMELINE,o.Z.COPY_LINK,o.Z.COPY_CIPHER],A=(I(E={},o.Z.QQ_CHAT_SESSION,0),I(E,o.Z.QQ_ZONE,1),I(E,o.Z.WECHAT_SESSION,2),I(E,o.Z.WECHAT_TIMELINE,3),E),H=(I(O={},o.Z.QQ_CHAT_SESSION,"menuItem:share:qq"),I(O,o.Z.QQ_ZONE,"menuItem:share:QZone"),I(O,o.Z.WECHAT_SESSION,"menuItem:share:appMessage"),I(O,o.Z.WECHAT_TIMELINE,"menuItem:share:timeline"),O),k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(c,e);var t,r,n,a=P(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=a.call(this,e)).ShareEntityClass=d,t._enableShareTypes=N.concat(),t}return t=c,r=[{key:"share",value:function(e){var t=this;if(this._enableShareTypes.indexOf(e)<0)return g.SHARE_TYPE_DISABLED;if(o.Z.COPY_CIPHER===e)return this.copyCipher();if("undefined"==typeof mqq||void 0===window.mqq.ui)return g.SHARE_NOT_SUPPORTED;var r=this.getShareEntityByShareType(e);return this.emit(i.Z.ON_SHARE_TRIGGER,{shareType:e}),r.normalize(e).then((function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r.share_type=A[e],window.mqq.ui.shareMessage(r,t.createShareCallback(e))}),this.getNormalizeErrorHandler(e)),0}},{key:"_adjustMenu",value:function(){var e=this,t=N.filter((function(t){return e._enableShareTypes.indexOf(t)<0})).map((function(e){return H[e]}));window.mqq&&window.mqq.hideMenuItems({menuList:t})}},{key:"createShareCallback",value:function(e){var t=this;return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=parseInt(r.retCode,10);switch(n){case 0:t.emit(i.Z.ON_SHARE_COMPLETED,{shareType:e,shareResultType:u.Z.SUCCESS});break;case 1:case-2:t.emit(i.Z.ON_SHARE_COMPLETED,{shareType:e,shareResultType:u.Z.CANCEL});break;default:t.emit(i.Z.ON_SHARE_COMPLETED,{shareType:e,shareResultType:u.Z.FAIL})}}}},{key:"_setupShareTypes",value:function(){var e=this,t=this._enableShareTypes.length;return this._enableShareTypes=N.filter((function(t){return(e.disableShareTypes||[]).indexOf(t)<0})),t===this._enableShareTypes.length}},{key:"_setupPlatformShareSDK",value:function(){var e=this;return"undefined"==typeof mqq||void 0===window.mqq.ui?(this.emit(i.Z.SDK_INIT_FAILED),Promise.resolve()):(window.mqq.ui.setOnShareHandler((function(t){var r=N[parseInt(t,10)],n=e.getShareEntityByShareType(r);n&&H[r]&&(e.emit(i.Z.ON_SHARE_TRIGGER,{shareType:r}),n.normalize(r).then((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n.share_type=t,window.mqq.ui.shareMessage(n,e.createShareCallback(r))}),e.getNormalizeErrorHandler(r)))})),Promise.resolve())}},{key:"checkShareTypeEnable",value:function(e){return this._enableShareTypes.indexOf(e)<0?g.SHARE_TYPE_DISABLED:0}}],r&&C(t.prototype,r),n&&C(t,n),c}(n.Z);k.SUPPORTED_SHARE_TYPE=N;var L=k}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-fun-cashback/js/ms_qq_c_abe1faf0038457635e7a.js.map