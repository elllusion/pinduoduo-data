(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"joqa":function(e,t,a){"use strict";a.r(t);var r=a("1OyB"),n=a("vuIU"),i=a("Ji7U"),h=a("LK+K"),o=a("dKgK"),c=a("a/1V"),s=a("/bZk"),l=a("chhR"),u=a("EECB"),b=a("o0o1"),S=a.n(b),E=a("HaE+"),C=a("YSLc"),p=a("W9H9"),y=function(e){Object(i.a)(WebShareEntity,e);var t,a=Object(h.a)(WebShareEntity);function WebShareEntity(){return Object(r.a)(this,WebShareEntity),a.apply(this,arguments)}return Object(n.a)(WebShareEntity,[{"key":"normalize","value":(t=Object(E.a)(S.a.mark((function _callee(e){var t;return S.a.wrap((function _callee$(a){for(;;)switch(a.prev=a.next){case 0:if(t=Object.assign({},this),e!==c.a.COPY_CIPHER){a.next=3;break}return a.abrupt("return",this.processCipher());case 3:return a.abrupt("return",{"title":t.shareURL});case 4:case"end":return a.stop()}}),_callee,this)}))),function normalize(e){return t.apply(this,arguments)})},{"key":"getShareForm","value":function getShareForm(e){return e===c.a.COPY_LINK?p.a.COPY_LINK:e===c.a.COPY_CIPHER?p.a.COMMAND:p.a.DEFAULT}},{"key":"getShareMethod","value":function getShareMethod(){return C.a.MANUAL}}]),WebShareEntity}(a("gfNA").a),O=[c.a.COPY_LINK,c.a.COPY_CIPHER],_=function(e){Object(i.a)(WebShareController,e);var t=Object(h.a)(WebShareController);function WebShareController(e){var a;return Object(r.a)(this,WebShareController),(a=t.call(this,e)).ShareEntityClass=y,a._enableShareTypes=O.concat(),a}return Object(n.a)(WebShareController,[{"key":"share","value":function share(e){var t=this;return this._enableShareTypes.indexOf(e)<0?s.a.SHARE_TYPE_DISABLED:c.a.COPY_CIPHER===e?this.copyCipher():(this.emit(l.a.ON_SHARE_TRIGGER,{"shareType":e}),this.getShareEntityByShareType(e).normalize(e).then((function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.emit(l.a.ON_SHARE_COMPLETED,{"shareType":e,"shareResultType":u.a.SUCCESS,"content":a.title})}),this.getNormalizeErrorHandler(e)),0)}}]),WebShareController}(o.a);t.default=_}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-farm/js/ms_web_c_8073e33c3ac73ffdf4d3.js.map