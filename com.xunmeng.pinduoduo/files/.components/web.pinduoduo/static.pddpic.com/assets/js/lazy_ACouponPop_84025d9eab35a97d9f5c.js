(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"P2WF":function(e,a,t){"use strict";t.r(a);var n,o,c,l=t("99ak"),u=t("aDV6"),r=t("ODXe"),p=t("p5LO"),s=t("brQG"),i=t("1OyB"),m=t("vuIU"),d=t("Ji7U"),b=t("LK+K"),C=t("Y65e"),E=t("q1tI"),f=t.n(E),O=t("TyAF"),v=t("4bvG"),w=t("opb1"),N=t("BBJc"),h=t("EFCC"),y=t("q0O3"),g=t("3uF5"),k=t("vHnQ"),P=t("h5Qt"),j=t("8tQc"),T=t("fGUZ"),F=t("lzTv"),S=(t("bF4J"),t("cwX1")),A=(n=Object(v.c)(w.a.COUPON_POP_FOOD_CLICK,""),o=function(e){Object(d.default)(Coupon1,e);var a=Object(b.default)(Coupon1);function Coupon1(){return Object(i.default)(this,Coupon1),a.apply(this,arguments)}return Object(m.default)(Coupon1,[{"key":"handleClick","value":function handleClick(){N.a.toggleCouponPop.close(),y.default.goOrderCommon()}},{"key":"render","value":function render(){var e=N.a.couponInfo,a=Object(F.a)(e)||{},t=a.couponText,n=void 0===t?"":t,o=a.couponValue,c=a.couponSymbol,l=a.couponRatio,u=a.endTime,r=void 0===u?0:u,i=r-k.a.dateNowSecond||0;return f.a.createElement(f.a.Fragment,null,f.a.createElement(p.a,{"className":"avl-discount"},f.a.createElement(p.a,{"className":"discount"},c,f.a.createElement(s.a,{"className":"num"},o,l)),f.a.createElement(p.a,{"className":"sub-text"},n)),f.a.createElement(p.a,{"className":"expire-wrap"},f.a.createElement(p.a,null,"仅限牧场内使用"),r>0&&f.a.createElement(p.a,{"className":"countdown-wrap"},f.a.createElement(g.a,{"outputType":"clockSecond","countDown":i,"countText":"后过期"}))),f.a.createElement(p.a,{"className":"content-btn","onClick":this.handleClick},"去使用"))}}]),Coupon1}(E.Component),Object(C.a)(o.prototype,"handleClick",[n],Object.getOwnPropertyDescriptor(o.prototype,"handleClick"),o.prototype),o);function Coupon2(e){var a=e.couponInfo,t=Object(r.default)(a,5),n=t[0],o=t[1],c=t[2],l=t[3],u=t[4],i=u-k.a.dateNowSecond||0;return f.a.createElement(f.a.Fragment,null,f.a.createElement(p.a,{"className":"avl-discount"},f.a.createElement(p.a,{"className":"discount"},"¥",f.a.createElement(s.a,{"className":"num"},c)),f.a.createElement(p.a,{"className":"sub-text"},l>0?"满".concat(l,"可用"):"无门槛")),f.a.createElement(p.a,{"className":"expire-wrap fl-xy"},f.a.createElement(p.a,null,"仅限牧场内使用"),u>0&&f.a.createElement(p.a,{"className":"countdown-wrap"},f.a.createElement(g.a,{"outputType":"clockSecond","countDown":i,"countText":"后过期"}))),f.a.createElement(p.a,{"className":"content-btn","onClick":function handleSpecialClick(){N.a.toggleCouponPop.close(!1),Object(P.a)(j.h.missionSpecialCouponView,(function(){y.default.refreshData()}))}},n?"浏览".concat(n,"秒，立即领取"):"去使用",o&&f.a.createElement(p.a,{"className":"btnBadge"},"用券最高得",o,"g")),f.a.createElement(p.a,{"className":"auto-open"},u>0&&f.a.createElement(g.a,{"outputType":"clockSecond","countDown":i,"countText":"后过期"})),f.a.createElement(S.a,{"cls":"-bottom-50"}))}var D=Object(O.observer)(c=function(e){Object(d.default)(AvailableCouponPop,e);var a=Object(b.default)(AvailableCouponPop);function AvailableCouponPop(){return Object(i.default)(this,AvailableCouponPop),a.apply(this,arguments)}return Object(m.default)(AvailableCouponPop,[{"key":"close","value":function close(){N.a.toggleCouponPop.close(!0)}},{"key":"render","value":function render(){var e=N.a.specialCouponMissionView,a=N.a.couponType;return f.a.createElement(l.a,{"isShow":!0},f.a.createElement(u.a,null),a===T.c.FEED_SPECIAL&&f.a.createElement(p.a,{"className":"coupon-light-bg bg-init"}),f.a.createElement(p.a,{"className":"avl-coupon-pop bg-init"},f.a.createElement(h.a,{"type":"inTopRightOutHigher","onClose":this.close}),a===T.c.NORMAL&&f.a.createElement(A,null),a===T.c.FEED_SPECIAL&&f.a.createElement(Coupon2,{"couponInfo":e,"couponType":a})))}}]),AvailableCouponPop}(E.Component))||c;a.default=D},"bF4J":function(e,a,t){}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-ranch/js/lazy_ACouponPop_84025d9eab35a97d9f5c.js.map