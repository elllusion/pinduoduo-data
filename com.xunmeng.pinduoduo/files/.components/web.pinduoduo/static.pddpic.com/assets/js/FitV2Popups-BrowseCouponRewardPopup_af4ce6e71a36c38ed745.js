(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"DNVp":function(e,o,t){e.exports={"coupon":"_31aXCng","haveUsed":"_1-SDTDJ","bk":"_2EsOb8c","light":"JDr69IV","desc":"jpb_6q_","money":"J0n-Izu","symbol":"_3O__paR"}},"gUI8":function(e,o,t){"use strict";t.r(o),t.d(o,"default",(function(){return g}));var a,n=t("p5LO"),r=t("wzp5"),s=t("w9YI"),c=t("QjaO"),u=t("cJQI"),p=t("ZsPb"),l=t("JsaZ"),i=t("MQ17"),b=t("q1tI"),m=t.n(b),d=t("TyAF"),w=t("gpDe"),O=t("2oo6"),C=t("kly0"),h=t.n(C),j=t("oZ7d"),f=t("ygAv"),E=t("W1Es"),g=Object(d.inject)(w.b.GLOBAL,w.b.POPUP_QUEUE,w.b.HOME_ORDER)(a=Object(d.observer)(a=function(e){Object(p.a)(BrowseCouponRewardPopup,e);var o=Object(l.a)(BrowseCouponRewardPopup);function BrowseCouponRewardPopup(){var e;Object(s.a)(this,BrowseCouponRewardPopup);for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return e=o.call.apply(o,[this].concat(a)),Object(i.a)(Object(u.a)(e),"onClose",(function(){e.popupQueueStore.close("showBrowseCouponRewardPopup")})),Object(i.a)(Object(u.a)(e),"onBtnClick",(function(){e.onClose()})),e}return Object(c.a)(BrowseCouponRewardPopup,[{"key":"render","value":function render(){var e=this.store,o=e.browseMissionCoupon,t=e.browseMissionCouponTotalNum,a=this.globalStore.fakeTodayTimeLeft,s=Object(f.A)(t/100,2),c=null==o?void 0:o.length;return m.a.createElement(O.a,{"headerTitle":"走路赚现金","mainTitle":"恭喜获得".concat(s,"元优惠券，尽快使用吧"),"showClose":!0,"onClose":this.onClose,"footTitle":"<".concat(Object(f.g)(a),">后券失效"),"btn1Text":"立即使用","onBtn1Confirm":this.onBtnClick},m.a.createElement(n.a,{"className":h.a.content},m.a.createElement(n.a,{"className":h.a.couponArea},o.map((function(e,o){var t=e.discount,a=e.desc,n=e.usable;return m.a.createElement(m.a.Fragment,null,m.a.createElement(j.a,{"money":t,"desc":n?a:"已使用","disable":!n}),c-1!==o?m.a.createElement(r.a,{"className":h.a.add,"src":Object(E.a)("home-order-add-symbol")}):null)})))))}},{"key":"globalStore","get":function get(){return this.props[w.b.GLOBAL]}},{"key":"popupQueueStore","get":function get(){return this.props[w.b.POPUP_QUEUE]}},{"key":"store","get":function get(){return this.props[w.b.HOME_ORDER]}}]),BrowseCouponRewardPopup}(b.Component))||a)||a},"kly0":function(e,o,t){e.exports={"content":"_3QIK1rb","couponArea":"_3CYZxc3","add":"_3Ets1kh"}},"oZ7d":function(e,o,t){"use strict";t.d(o,"a",(function(){return j}));var a=t("p5LO"),n=t("a+Ds"),r=t("wzp5"),s=t("MQ17"),c=t("w9YI"),u=t("QjaO"),p=t("ZsPb"),l=t("JsaZ"),i=t("q1tI"),b=t.n(i),m=t("7Qib"),d=t("DNVp"),w=t.n(d),O=t("TSYQ"),C=t.n(O),h=t("ygAv"),j=function(e){Object(p.a)(HomeBrowseCouponItem,e);var o=Object(l.a)(HomeBrowseCouponItem);function HomeBrowseCouponItem(){return Object(c.a)(this,HomeBrowseCouponItem),o.apply(this,arguments)}return Object(u.a)(HomeBrowseCouponItem,[{"key":"render","value":function render(){var e=this.props,o=e.money,t=e.desc,c=e.needLight,u=e.disable;return b.a.createElement(a.a,{"className":C()(w.a.coupon,Object(s.a)({},w.a.haveUsed,u))},c?b.a.createElement(r.a,{"className":w.a.light,"src":Object(m.a)("water_new_light")}):null,b.a.createElement(r.a,{"className":w.a.bk,"src":Object(m.a)("browse-reward-coupon")}),b.a.createElement(a.a,{"className":w.a.money},b.a.createElement(n.a,{"className":w.a.symbol},"¥"),Object(h.A)(o/100,2)),b.a.createElement(a.a,{"className":w.a.desc},t))}}]),HomeBrowseCouponItem}(i.Component)}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-fit/js/FitV2Popups-BrowseCouponRewardPopup_af4ce6e71a36c38ed745.js.map