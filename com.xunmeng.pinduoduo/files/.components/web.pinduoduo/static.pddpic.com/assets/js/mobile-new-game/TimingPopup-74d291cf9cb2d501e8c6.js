(window["webpackJsonPmobile-new-game"]=window["webpackJsonPmobile-new-game"]||[]).push([["ebc5"],{MWEB:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return B}));var a=n("lSNA"),r=n.n(a),i=n("o0o1"),c=n.n(i),o=n("yXPU"),l=n.n(o),s=n("J4zp"),u=n.n(s),p=n("DzJC"),b=n.n(p),m=n("6MOg"),f=n.n(m),d=n("i738"),g=n("Ea3b"),v=n("Zv3a"),O=n.n(v),j=n("g5zU"),w=n.n(j),y=n("oAI1"),k=n("PwBQ"),E=n("wgpz"),C=n("MyPv"),T=n("44re"),z=n("abAY"),P=n("Xgcq"),_=n("m7EM"),h=n("hXAY"),A=n("O1B7"),N=n("ul7F"),S=n("1VUQ"),x=n("+7KU"),R=n("N5SW"),D=n("lCwN"),V=n("nsKV");function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var q=f.a.createElement(z.a,{name:"TimingPopup"});function B(e){var t=e.onClose,n=e.destRec,a=e.onLeave;w()(O.a);var r=f.a.createRef(),i=f.a.createRef(),o=Object(m.useRef)({}).current,s=Object(y.g)().actions,p=Object(m.useState)(null),v=u()(p,2),j=v[0],z=v[1],M=Object(m.useState)(!1),B=u()(M,2),K=B[0],X=B[1],I=Object(y.e)("navState").navState,L=(j||{}).prizeType;return o.queryAward=Object(m.useCallback)(b()(l()(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.getService().postTimingResult();case 3:return n=e.sent,z(n),e.abrupt("return",!0);case 8:return e.prev=8,e.t0=e.catch(0),Object(E.d)(e.t0),Object(C.info)("服务器正忙，请".concat(909220005===Object(h.a)(e.t0)?"刷新":"稍后","重试")),t(),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[0,8]])}))),3e3,{trailing:!1}),[t]),o.noAwards=Object(_.o)(L)||!(null==j?void 0:j.amount)&&K,Object(P.d)({trigerDing:!1,trigerSuccess:K,prizeType:L}),o.onConfirm=Object(m.useCallback)((function(){Object(T.b)({navState:I,destType:Object(_.i)(null==j?void 0:j.prizeType)?"coin":"cash",animationElRef:r,maskElRef:i,disableAni:!Object(_.g)(null==j?void 0:j.prizeType),destRec:n,destroyFunc:t,resultKey:""}),s.updateChallenge()}),[j,n,i,r]),o.MaskContent=f.a.createElement("div",{className:O.a.mask},f.a.createElement("div",{className:O.a.avatars},f.a.createElement(x.a,{className:O.a.avatar,src:s.getStore().selfAvatar}),f.a.createElement(x.a,{className:O.a.avatar,src:R.a})),f.a.createElement("div",{className:O.a.maskTitle},"定时送你大额红包"),f.a.createElement("div",{className:O.a.subTitle},"- 大额红包，每日可领多次 -")),o.getContent=function(){var e=Object(k.b)(L,{isNew:!0}),t={result:{uidList:[{self:!0,amount:null==j?void 0:j.amount,prizeType:null==j?void 0:j.prizeType}]}},n=null==e?void 0:e.Title;return{Title:n?f.a.createElement(n,{result:t}):null,Content:f.a.createElement(D.a,null,f.a.createElement(e,{prizeType:null==j?void 0:j.prizeType,result:t}))}},f.a.createElement(d.a,{ref:i},f.a.createElement(g.a,null,q,f.a.createElement("div",{ref:r},a?f.a.createElement(V.a,{onClick:t}):null,f.a.createElement(N.b,{type:N.a.NORMAL,maskConfig:{btnImage:S.c.PIN_BTN,Content:o.MaskContent,onOpen:o.queryAward},contentConfig:J({onAnimationEnd:X.bind(null,!0),btnText:"继续拼红包",btnClick:o.onConfirm},o.getContent())})),a&&!K?f.a.createElement(A.a,{onLeave:a}):null))}},Zv3a:function(e,t,n){var a=n("k44r"),r=n("Q8e5"),i="string"==typeof a?[[e.i,a,""]]:a;(t=e.exports=a.locals||{})._getContent=function(){return i},t._getCss=function(){return""+a},t._insertCss=function(e){return r(i,e)}},k44r:function(e,t,n){(t=e.exports=n("I1BE")(!1)).push([e.i,"._6jtqcZVP{padding-top:.61rem;text-align:center}._1C0i021e{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}._1C0i021e .ltDwp9zt{width:.6rem;height:.6rem;border-radius:50%;border:.015rem solid #ffeee2;margin:0 .19rem}._2z5kAV54{font-size:.2rem;color:#ffe2c0;margin-top:.25rem}._3lJ2KbV1{font-size:.14rem;color:#e9a191;margin-top:.12rem}._2Y3XjO0p{padding-top:0!important}",""]),t.locals={mask:"_6jtqcZVP",avatars:"_1C0i021e",avatar:"ltDwp9zt",maskTitle:"_2z5kAV54",subTitle:"_3lJ2KbV1",noAward:"_2Y3XjO0p"}}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/assets/js/mobile-new-game/TimingPopup-74d291cf9cb2d501e8c6.js.map