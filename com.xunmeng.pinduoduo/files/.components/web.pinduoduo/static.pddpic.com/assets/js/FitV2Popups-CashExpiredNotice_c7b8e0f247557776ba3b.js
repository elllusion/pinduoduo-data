(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"63jg":function(e,t,a){e.exports={"main":"_2w9H-fU","icon":"_1GXcMwz","amount":"_2weceP1","unit":"syz35dZ","desc":"H_1FGtL","guide":"_2NAVdoL","guideIcon":"t-JSJ35","lock":"zp1_oMO","leftLock":"_3ms-aHb","rightLock":"UJKkyFD","middle":"_108DLEX","middleTitle":"FeFpI2r","middleInfo":"_1spPnLL","guideBtn":"_2nPlNiY"}},"hu+m":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return y}));var n,r=a("p5LO"),o=a("wzp5"),c=a("w9YI"),i=a("QjaO"),s=a("cJQI"),l=a("ZsPb"),d=a("JsaZ"),u=a("MQ17"),m=a("q1tI"),h=a.n(m),p=a("2oo6"),b=a("TyAF"),O=a("gpDe"),E=a("63jg"),f=a.n(E),g=a("7Qib"),_=a("lC+4"),j=a("ABVw"),k=a("TSYQ"),N=a.n(k),C=a("glIo"),w=a("hn0O"),v=a("3uR/"),x=a("ygAv"),y=Object(b.inject)(O.b.POPUP_QUEUE,O.b.GLOBAL,O.b.ENV,O.b.HOME_ORDER,O.b.EXPIRED_CASH)(n=Object(b.observer)(n=function(e){Object(l.a)(CashExpiredNotice,e);var t=Object(d.a)(CashExpiredNotice);function CashExpiredNotice(){var e;Object(c.a)(this,CashExpiredNotice);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return e=t.call.apply(t,[this].concat(n)),Object(u.a)(Object(s.a)(e),"onClose",(function(){e.popupQueueStore.close("showCashExpiredNotice")})),Object(u.a)(Object(s.a)(e),"handleOrderClick",(function(){e.onClose(),Object(C.h)({"globalStore":e.globalStore,"envStore":e.envStore})})),Object(u.a)(Object(s.a)(e),"renderGuide",(function(){var t,a,n=(null===(t=e.homeOrderStore)||void 0===t?void 0:t.homeOrderMission)||{},c=n.maxCount,i=n.rewards;return h.a.createElement(r.a,{"className":f.a.guide},h.a.createElement(o.a,{"className":N()(f.a.lock,f.a.leftLock),"src":Object(g.a)("exchange_for_cash_lock")}),h.a.createElement(o.a,{"className":N()(f.a.lock,f.a.rightLock),"src":Object(g.a)("exchange_for_cash_lock")}),h.a.createElement(o.a,{"className":f.a.guideIcon,"src":Object(g.a)("cash_expired_notice_order_icon")}),h.a.createElement(r.a,{"className":f.a.middle},h.a.createElement(r.a,{"className":f.a.middleTitle},"拼单加速提现"),h.a.createElement(r.a,{"className":f.a.middleInfo},h.a.createElement(_.a,{"text":"奖励<#r#".concat(Object(v.o)(((null==i||null===(a=i.find((function(e){return e.rewardType===w.i.CASH})))||void 0===a?void 0:a.rewardAmount)||0)/100),"元>{redpacket%14%}，每天").concat(c,"次")}))),h.a.createElement(r.a,{"className":f.a.guideBtn,"onClick":e.handleOrderClick},h.a.createElement(j.b,{"text":"去拼单","type":j.a.BorderPrize,"width":61,"size":"small"})))})),e}return Object(i.a)(CashExpiredNotice,[{"key":"render","value":function render(){return h.a.createElement(p.a,{"onClose":this.onClose,"mainTitle":this.mainTitle,"subTitle":"请尽快提现，否则".concat(Object(x.h)(this.store.remainTime),"后将被清掉"),"btn1Text":"去拼单加速提现","showClose":!0,"onBtn1Confirm":this.handleOrderClick},h.a.createElement(r.a,{"className":f.a.main},h.a.createElement(r.a,{"className":f.a.amount},Object(v.o)(this.info.expiredAmount/100),h.a.createElement(r.a,{"className":f.a.unit},"元")),h.a.createElement(r.a,{"className":f.a.desc},Object(x.h)(this.store.remainTime),"后清零"),h.a.createElement(o.a,{"src":Object(g.a)("cash_expired_notice_icon"),"className":f.a.icon})),this.renderGuide())}},{"key":"popupQueueStore","get":function get(){return this.props[O.b.POPUP_QUEUE]}},{"key":"homeOrderStore","get":function get(){return this.props[O.b.HOME_ORDER]}},{"key":"store","get":function get(){return this.props[O.b.EXPIRED_CASH]}},{"key":"globalStore","get":function get(){return this.props[O.b.GLOBAL]}},{"key":"envStore","get":function get(){return this.props[O.b.ENV]}},{"key":"info","get":function get(){var e;return(null===(e=this.store.featureItem)||void 0===e?void 0:e.featureDataVo)||{}}},{"key":"mainTitle","get":function get(){return["<#y#".concat(Object(v.o)(this.info.expiredAmount/100),"元>已过").concat(this.info.totalValidDays,"天有效期")]}}]),CashExpiredNotice}(m.Component))||n)||n}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-fit/js/FitV2Popups-CashExpiredNotice_c7b8e0f247557776ba3b.js.map