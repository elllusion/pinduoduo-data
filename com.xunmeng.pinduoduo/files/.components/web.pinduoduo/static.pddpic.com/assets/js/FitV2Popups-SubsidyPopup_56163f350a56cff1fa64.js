(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{"6lxn":function(e,t,a){e.exports={"exchangeMask":"_2CHDnRt","fadeOut":"AWvFx8L","exchangeMaskChangeOut":"eGuEpHf","fadeIn":"_1RDN6fW","exchangeMaskChangeIn":"RqY1Yn7","opacityOut":"_3B7WnnJ","inner":"aSE46is","container":"_3TGHG8V","closeBtn":"_3XZzOpD","titleBody":"_3oVOnDS","title":"_1hE5Ke4","subTitle":"_10r_soV","content":"usXPSAg","textTime":"_3orZwQW","textBody":"-nZe3wV","textYuan":"P6yoEoh","btn":"_2vxk3pd","subsidyBody":"QhnZwSQ","felxChangeIn":"_3Vei_0k","felxChangeOut":"_3s4jngZ","subsidyBodyTwo":"_1dtP8sE","subsidyCon":"_1hzfD5o","subsidyLight":"qIGFJMv","subsidyLightChange":"b9wf6wI","subsidyImg":"_2ATB6fp","subsidyConText":"_15QMBvY","subsidyConKai0":"LuaJ7Od","subsidyConKai1":"_16wLUjN","subsidyConKai2":"jWSdGDP","subsidyConKai3":"c7g5Xue","subsidyLightBottom":"_16eXo6j","subsidyLightBottomShow":"_3AUAsY2","subsidyLightBottomtChange":"bqFlyQl","subsidyUsable":"_1OTf5rK"}},"Kc8l":function(e,t,a){"use strict";a.r(t);var s,n=a("p5LO"),o=a("wzp5"),c=a("kRu4"),i=a.n(c),u=a("RgDV"),r=a("w9YI"),l=a("QjaO"),b=a("cJQI"),p=a("ZsPb"),d=a("JsaZ"),y=a("MQ17"),m=a("q1tI"),h=a.n(m),O=a("6lxn"),g=a.n(O),f=a("W1Es"),j=a("TyAF"),x=a("gpDe"),w=a("RVLV"),C=a("tpcr"),_=a("lC+4"),E=a("TSYQ"),S=a.n(E),v=a("ygAv"),L=a("3uR/"),I=Object(j.inject)(x.b.HOME_ORDER,x.b.POPUP_QUEUE,x.b.GLOBAL)(s=Object(C.b)(w.a,"showSubsidyPopup")(s=Object(j.observer)(s=function(e){Object(p.a)(SubsidyPopup,e);var t=Object(d.a)(SubsidyPopup);function SubsidyPopup(){var e;Object(r.a)(this,SubsidyPopup);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return e=t.call.apply(t,[this].concat(s)),Object(y.a)(Object(b.a)(e),"state",{"popupAniStyle":{},"lightCss":{},"fadeOut":!1,"fadeIn":!1,"felxChangeIn":!1,"felxChangeOut":!1,"opacityOut":!1,"showLight":!1}),Object(y.a)(Object(b.a)(e),"onConfirm",Object(u.a)(i.a.mark((function _callee(){return i.a.wrap((function _callee$(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({"felxChangeIn":!1,"felxChangeOut":!0}),t.next=3,Object(L.v)(200);case 3:return e.setState({"popupAniStyle":{"position":"absolute"}}),t.next=6,Object(L.v)(130);case 6:return e.startAni(),t.next=9,Object(L.v)(900);case 9:return e.startLgiht(),t.next=12,Object(L.v)(330);case 12:e.popupQueueStore.close("showSubsidyPopup");case 13:case"end":return t.stop()}}),_callee)})))),Object(y.a)(Object(b.a)(e),"startAni",Object(u.a)(i.a.mark((function _callee2(){var t,a,s,n;return i.a.wrap((function _callee2$(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Object(v.l)("#subsidyBody","#subsidyCouponIcon");case 2:t=o.sent,s=(a=t||{}).moveX,n=a.moveY,e.setState({"popupAniStyle":{"transform":"translate3D(".concat(s,"px, ").concat(n,"px, 0px) scale(0.6)"),"opacity":.4,"position":"absolute"},"fadeOut":!0,"fadeIn":!1,"opacityOut":!0});case 5:case"end":return o.stop()}}),_callee2)})))),Object(y.a)(Object(b.a)(e),"startLgiht",Object(u.a)(i.a.mark((function _callee3(){var t,a,s,n;return i.a.wrap((function _callee3$(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Object(v.l)("#subsidyLightBottom","#subsidyCouponIcon");case 2:t=o.sent,s=(a=t||{}).moveX,n=a.moveY,e.setState({"lightCss":{"transform":"translate3D(".concat(s-120,"px, ").concat(n,"px, 0px)"),"opacity":1,"showLight":!0}});case 5:case"end":return o.stop()}}),_callee3)})))),e}return Object(l.a)(SubsidyPopup,[{"key":"componentDidMount","value":function componentDidMount(){this.setState({"fadeIn":!0,"felxChangeIn":!0}),this.homeOrderStore.set({"hasShowSubsidy":!0})}},{"key":"render","value":function render(){var e,t,a=this.homeOrderStore,s=a.allDiscount,c=a.coupons,i=void 0===c?[]:c,u=a.isIconClickPopup,r=this.globalStore.fakeTodayTimeLeft,l=this.state,b=l.fadeOut,p=l.fadeIn,d=l.opacityOut,m=l.felxChangeIn,O=l.felxChangeOut,j=l.popupAniStyle,x=l.lightCss,w=l.showLight;return h.a.createElement(n.a,{"className":S()(g.a.exchangeMask,(e={},Object(y.a)(e,g.a.fadeOut,b),Object(y.a)(e,g.a.fadeIn,p),e))},h.a.createElement(n.a,{"className":g.a.inner},h.a.createElement(o.a,{"enablewebp":0,"className":S()(g.a.closeBtn,d?g.a.opacityOut:""),"src":Object(f.c)("popup_close_btn_v2"),"onClick":this.onConfirm}),h.a.createElement(n.a,{"className":g.a.container},h.a.createElement(n.a,{"className":S()(g.a.titleBody,d?g.a.opacityOut:"")},h.a.createElement(o.a,{"enablewebp":0,"className":g.a.title,"src":Object(f.a)("subsidyPopupTitle")})),h.a.createElement(n.a,{"className":S()(g.a.subTitle,d?g.a.opacityOut:"")},h.a.createElement(_.a,{"text":"送你<#F7990F#".concat(s,"元>购物津贴，快去使用吧")})),h.a.createElement(n.a,{"className":g.a.content},h.a.createElement(n.a,{"className":S()(g.a.subsidyBody,(t={},Object(y.a)(t,g.a.felxChangeIn,m),Object(y.a)(t,g.a.felxChangeOut,O),t)),"id":"subsidyBody"},i.map((function(e,t){return h.a.createElement(n.a,{"className":S()(g.a.subsidyCon,null===g.a||void 0===g.a?void 0:g.a["subsidyConKai"+t]),"style":j,"key":e.discount},h.a.createElement(n.a,{"className":g.a.textBody},e.discount/100,h.a.createElement(n.a,{"className":g.a.textYuan},"元")),h.a.createElement(n.a,{"className":g.a.subsidyConText},e.minAmount===e.discount?"无门槛":"满".concat(e.minAmount/100,"可用")),h.a.createElement(o.a,{"enablewebp":0,"className":g.a.subsidyImg,"src":Object(f.a)("subsidyImg")}),h.a.createElement(o.a,{"enablewebp":0,"className":g.a.subsidyLight,"src":Object(f.a)("subsidyLight")}),null!=e&&e.usable?null:h.a.createElement(o.a,{"enablewebp":0,"className":g.a.subsidyUsable,"src":Object(f.a)("subsidyUsable")}))})),h.a.createElement(n.a,{"id":"subsidyLightBottom"},h.a.createElement(o.a,{"enablewebp":0,"style":x,"className":S()(g.a.subsidyLightBottom,w?g.a.subsidyLightBottomShow:null),"src":Object(f.a)("subsidyLight")}),h.a.createElement(o.a,{"enablewebp":0,"style":x,"className":S()(g.a.subsidyLightBottom,w?g.a.subsidyLightBottomShow:null),"src":Object(f.a)("subsidyLight")}))),h.a.createElement(n.a,{"className":S()(g.a.textTime,d?g.a.opacityOut:"")},h.a.createElement(_.a,{"text":"走路赚现金活动专用，<#F7990F#".concat(Object(v.g)(r),">后过期")})),h.a.createElement(n.a,{"onClick":this.onConfirm,"className":S()(g.a.btn,d?g.a.opacityOut:"")},u?"去使用优惠券":"开心收下，去使用")))))}},{"key":"popupQueueStore","get":function get(){return this.props[x.b.POPUP_QUEUE]}},{"key":"homeOrderStore","get":function get(){return this.props[x.b.HOME_ORDER]}},{"key":"globalStore","get":function get(){return this.props[x.b.GLOBAL]}}]),SubsidyPopup}(m.Component))||s)||s)||s;t.default=I},"RVLV":function(e,t,a){"use strict";var s=a("glIo"),n=a("Rj+r"),o=Object(s.b)("home order data is invalid",(function(e){var t=e.homeOrderStore;return!Object(n.b)(t.homeOrderMission)||!Object(n.b)(t.browseMissionInfo)||!!t.allDiscount}));t.a=o}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-fit/js/FitV2Popups-SubsidyPopup_56163f350a56cff1fa64.js.map