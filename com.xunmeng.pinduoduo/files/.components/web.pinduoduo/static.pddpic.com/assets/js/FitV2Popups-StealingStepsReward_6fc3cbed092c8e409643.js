(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{"C1sG":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var o,r=n("w9YI"),a=n("QjaO"),u=n("cJQI"),s=n("ZsPb"),i=n("JsaZ"),p=n("MQ17"),c=n("q1tI"),l=n.n(c),S=n("wl2/"),d=n("3uR/"),w=n("TyAF"),b=n("gpDe"),g=Object(w.inject)(b.b.POPUP_QUEUE,b.b.STEALING_STEPS,b.b.GUIDE_TO_PAY)(o=Object(w.observer)(o=function(e){Object(s.a)(StealingStepsReward,e);var t=Object(i.a)(StealingStepsReward);function StealingStepsReward(){var e;Object(r.a)(this,StealingStepsReward);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o)),Object(p.a)(Object(u.a)(e),"onClose",(function(){e.popupQueueStore.close("showStealingStepsReward"),e.guideToPayStore.shoudleShowGuiToPayPopup({"popupQueueStore":e.popupQueueStore})})),e}return Object(a.a)(StealingStepsReward,[{"key":"componentWillUnmount","value":function componentWillUnmount(){this.store.rewardInfo={"step":0,"rewardAmount":0}}},{"key":"render","value":function render(){var e,t=(null===(e=this.store)||void 0===e?void 0:e.rewardInfo)||{},n=t.step,o=t.rewardAmount,r=Object(d.o)(o/100);return l.a.createElement(S.a,{"btnText":"开心收下","needAutoClick":!0,"showClose":!0,"onClose":this.onClose,"onConfirm":this.onClose,"rewardText":"抢步数兑换现金","mainTitle":"恭喜抢到".concat(n,"步，已兑换为<").concat(r,"元>"),"redpacketMoney":r})}},{"key":"popupQueueStore","get":function get(){return this.props[b.b.POPUP_QUEUE]}},{"key":"guideToPayStore","get":function get(){return this.props[b.b.GUIDE_TO_PAY]}},{"key":"store","get":function get(){return this.props[b.b.STEALING_STEPS]}}]),StealingStepsReward}(c.Component))||o)||o}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-fit/js/FitV2Popups-StealingStepsReward_6fc3cbed092c8e409643.js.map