(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[6],{joqa:function(t,e,r){"use strict";r.r(e);var n=r("lwsE"),a=r.n(n),i=r("W8MJ"),u=r.n(i),c=r("7W2i"),o=r.n(c),s=r("a1gu"),f=r.n(s),h=r("Nsbk"),l=r.n(h),p=r("dKgK"),y=r("a/1V"),_=r("/bZk"),E=r("chhR"),R=r("EECB"),C=r("o0o1"),v=r.n(C),S=r("yXPU"),O=r.n(S),P=r("YSLc"),A=r("W9H9");function D(t){return function(){var e,r=l()(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var n=l()(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return f()(this,e)}}var L=function(t){o()(r,t);var e=D(r);function r(){return a()(this,r),e.apply(this,arguments)}return u()(r,[{key:"normalize",value:function(){var t=O()(v.a.mark(function t(e){var r;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=Object.assign({},this),e!==y.a.COPY_CIPHER){t.next=3;break}return t.abrupt("return",this.processCipher());case 3:return t.abrupt("return",{title:r.shareURL});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"getShareForm",value:function(t){return t===y.a.COPY_LINK?A.a.COPY_LINK:t===y.a.COPY_CIPHER?A.a.COMMAND:A.a.DEFAULT}},{key:"getShareMethod",value:function(){return P.a.MANUAL}}]),r}(r("gfNA").a);function d(t){return function(){var e,r=l()(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var n=l()(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return f()(this,e)}}var N=[y.a.COPY_LINK,y.a.COPY_CIPHER],g=function(t){o()(r,t);var e=d(r);function r(t){var n;return a()(this,r),(n=e.call(this,t)).ShareEntityClass=L,n._enableShareTypes=N.concat(),n}return u()(r,[{key:"share",value:function(t){var e=this;return this._enableShareTypes.indexOf(t)<0?_.a.SHARE_TYPE_DISABLED:y.a.COPY_CIPHER===t?this.copyCipher():(this.emit(E.a.ON_SHARE_TRIGGER,{shareType:t}),this.getShareEntityByShareType(t).normalize(t).then(function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.emit(E.a.ON_SHARE_COMPLETED,{shareType:t,shareResultType:R.a.SUCCESS,content:r.title})},this.getNormalizeErrorHandler(t)),0)}}]),r}(p.a);e.default=g}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-expert/js/ms_web_c_e857efa28ef7290da20a.js.map