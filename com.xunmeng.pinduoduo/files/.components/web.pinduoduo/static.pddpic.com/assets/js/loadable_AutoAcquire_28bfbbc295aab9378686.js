(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[6],{RFO3:function(e,t,n){"use strict";n.r(t);var r=n("lSNA"),o=n.n(r),c=n("J4zp"),i=n.n(c),a=n("FdF9"),u=n("1j0d"),s=n("2Tgj"),l=n("F72f"),b=n("xNPO"),d=n("zjbs"),f=n("Kdcw"),p=n("Pf7F"),O=n("oTgH"),w=n("Ycdt");function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach(function(t){o()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var m="https://funimg.pddpic.com/pdd_live_lego/5c854d85-0029-4830-b02f-c019f05a38ba.png.slim.png";t.default=function(){var e=s.c.useAtom(),t=i()(e,2),n=t[0],r=n.rewardCount,o=n.rewardType,c=n.needMs,h=n.watchedMs,y=n.remindWxPay,T=n.noBubbleTimeLimit,_=n.showType,g=t[1],v=g.setValue,A=g.showCountDownBubble,D=g.toWachVideo,C=d.c.useActions().setBubble,P=Object(a.useState)(!1),E=i()(P,2),L=E[0],S=E[1],B=o===l.h.WECHAT,x=o===l.h.COIN;return Object(b.a)(function(){var e=Math.max(0,Math.ceil((c-h)/1e3));if(!B){var t=x?"恭喜获得".concat(r,"金币"):"现金已到账余额",n=j(j({},l.d),{},{bubbleText:t,pendantType:u.i.LowTimeUser,noHasIsolateTypeLimit:T,onFinish:function(){v({isShowReward:!1})}});return e>0&&_===l.j.TODAY&&(n.bubbleText="".concat(t,"\n再看").concat(e,"秒继续领红包")),void C(n)}return function(){_===l.j.TODAY&&A(!0)}}),B&&y?a.default.createElement("div",null,a.default.createElement(f.a,{duration:3e3,onClose:function(){return v({isShowReward:!1})},onClick:function(){S(!0),v({isShowReward:!1})},data:{payType:p.y.WeChat}}),L&&a.default.createElement(O.a,{amount:r/100,onMainBtnClick:function(){Object(w.a)(),D()},onClose:function(){return S(!1)},mainBtnText:"继续看视频",receiveAccount:"微信零钱",mainIcon:m})):null}}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-video-layer/js/loadable_AutoAcquire_28bfbbc295aab9378686.js.map