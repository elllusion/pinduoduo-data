(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"gJnt":function(e,a,t){},"s8i1":function(e,a,t){"use strict";t.r(a);var n,c=t("p5LO"),l=t("1OyB"),s=t("vuIU"),o=t("JX7q"),r=t("Ji7U"),m=t("LK+K"),i=t("rePB"),u=t("q1tI"),h=t.n(u),p=t("TyAF"),f=t("OG+G"),g=t("PS6B"),b=t("N6C/"),d=t("fCYF"),O=t("tSAD"),j=t("9CY4"),y=t("3uF5"),C=t("vHnQ"),E=t("RJQe"),N=t("Y0Ga"),w=t("q0O3"),k=t("h5Qt"),v=t("8tQc"),B=t("TRXh"),I=(t("gJnt"),t("bmJN")),P=Object(N.a)({"iconImg":"piggy_icon","iconName":"cash-back-icon"})(n=Object(p.observer)(n=function(e){Object(r.default)(CashBackPop,e);var a=Object(m.default)(CashBackPop);function CashBackPop(){var e;Object(l.default)(this,CashBackPop);for(var t=arguments.length,n=new Array(t),c=0;c<t;c++)n[c]=arguments[c];return e=a.call.apply(a,[this].concat(n)),Object(i.default)(Object(o.default)(e),"onClose",(function(){var a=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];f.a.showInitAmount&&f.a.set("showInitAmount",!1),e.props.onClose((function(){f.a.toggleCashPop.close(a)}))})),Object(i.default)(Object(o.default)(e),"onClick",(function(){var a=f.a.cashIsDraw;e.onClose(!1),a?Object(k.a)(v.h.missionCashBack,(function(){w.default.refreshData()})):w.default.feedStore.feed()})),Object(i.default)(Object(o.default)(e),"timeDone",(function(){f.a.toggleCashPop.close(),f.a.clearData(),B.a.showToast("时间到，活动已失效！")})),e}return Object(s.default)(CashBackPop,[{"key":"render","value":function render(){var e=f.a.cashStatus,a=f.a.stage1Time,t=f.a.stage2Time,n=f.a.current,l=f.a.target,s=f.a.cashIsDraw,o=f.a.initialAmount,r=f.a.showInitAmount,m=E.b[e]||{},i=m.title1,u=m.title2,p=m.tip,N=m.btn,w=m.countText;return h.a.createElement(c.a,{"className":"order-cash-pop"},h.a.createElement(b.a,{"bgStyle":this.props.closeStyle,"onClose":this.onClose,"renderTop":h.a.createElement(c.a,{"className":"ab-x fl-xy h-48 mt-40"},r?h.a.createElement(h.a.Fragment,null,h.a.createElement(O.a,{"src":Object(g.g)("init_title1"),"className":"h-full"}),h.a.createElement(j.a,{"num":o,"type":"y_n","className":"h-48"}),h.a.createElement(O.a,{"src":Object(g.g)("init_title2"),"className":"h-full"}),h.a.createElement(j.a,{"num":l,"type":"y_n","className":"h-48"}),h.a.createElement(O.a,{"src":Object(g.g)("piggy_title2"),"className":"h-full"})," "):h.a.createElement(h.a.Fragment,null,h.a.createElement(O.a,{"src":Object(g.g)(i),"className":"h-full"}),h.a.createElement(j.a,{"num":l,"type":"y_n","className":"h-48"}),h.a.createElement(O.a,{"src":Object(g.g)(u),"className":"h-full"}))),"customImg":{"randomImg":function randomImg(){return h.a.createElement(d.a,{"bg":Object(g.g)("piggy_pop"),"className":"piggy absolute text-center"},h.a.createElement(c.a,null,h.a.createElement(O.a,{"src":Object(g.g)(p),"className":"h-32"})),h.a.createElement(j.a,{"num":n,"type":"red_num","className":"h-64"}),h.a.createElement(O.a,{"src":Object(g.g)("red_yuan"),"className":"h-38 -ml-10"}))},"wrapperStyle":{"marginTop":Object(I.a)(16),"marginBottom":Object(I.a)(-40)}},"btnList":[{"type":"Main","content":N,"onClick":this.onClick}],"renderFooter":h.a.createElement(c.a,{"className":"text-28 text-center text-fff opacity-50 mt-28"},h.a.createElement(y.a,{"countDown":C.a.getLeftTime(s?t:a,!0),"countText":w,"onDone":this.timeDone}))}))}}]),CashBackPop}(u.Component))||n)||n;a.default=P}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-ranch/js/lazy_cashBackPop_3265f74e98eb6bdf847d.js.map