(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[60],{KnaI:function(e,t,n){var a=n("gZ2D"),o=n("Q8e5"),r="string"==typeof a?[[e.i,a,""]]:a;(t=e.exports=a.locals||{})._getContent=function(){return r},t._getCss=function(){return""+a},t._insertCss=function(e){return o(r,e)}},MAmw:function(e,t,n){var a=n("phGF"),o=n("Q8e5"),r="string"==typeof a?[[e.i,a,""]]:a;(t=e.exports=a.locals||{})._getContent=function(){return r},t._getCss=function(){return""+a},t._insertCss=function(e){return o(r,e)}},OB5k:function(e,t,n){(t=e.exports=n("I1BE")(!1)).push([e.i,"._3mUDpP7c{position:absolute;right:.05rem;top:-.43rem}",""]),t.locals={close:"_3mUDpP7c"}},fNjL:function(e,t,n){var a=n("OB5k"),o=n("Q8e5"),r="string"==typeof a?[[e.i,a,""]]:a;(t=e.exports=a.locals||{})._getContent=function(){return r},t._getCss=function(){return""+a},t._insertCss=function(e){return o(r,e)}},gZ2D:function(e,t,n){(t=e.exports=n("I1BE")(!1)).push([e.i,"._3z0_ZZwE{width:2.91rem;height:4.28rem;background:#ee4b37;border-radius:.08rem;text-align:center;overflow:hidden}._1yVMS6Dp{margin:.12rem;width:2.67rem;height:3.76rem;background:#fff;border-radius:.08rem}._19GlW3CG{padding:.3rem 0 .12rem;font-size:.16rem;color:hsla(36,25%,53%,.8);text-align:center;line-height:.18rem}._1eTGUY_E{width:1.46rem;height:.1rem}._3dAXlglP{margin:.4rem auto .28rem}.ogAWVVm0{margin-right:.08rem;width:.52rem;height:.52rem}.wz4WcwGH{font-size:.44rem;color:#f45331;line-height:.52rem;font-weight:700;font-weight:600}._1guNy294{font-size:.16rem;line-height:.18rem}._3UHoleEy{font-size:.14rem;color:hsla(36,25%,53%,.5);line-height:.14rem}._31GuJJTG{position:absolute;bottom:0;left:0;width:2.91rem;height:1.54rem}._2cf3bO6P{margin-top:.74rem;width:2.51rem;height:.48rem;box-shadow:inset 0 .01rem .01rem 0 #fff;background-image:-webkit-linear-gradient(bottom,#e5c484,#fffadd);background-image:linear-gradient(0deg,#e5c484,#fffadd);border-radius:.25rem;font-size:.18rem;color:#d74222;line-height:.18rem;font-weight:700;font-weight:500}",""]),t.locals={dialog:"_3z0_ZZwE",content:"_1yVMS6Dp",title:"_19GlW3CG",line:"_1eTGUY_E",countWrap:"_3dAXlglP",icon:"ogAWVVm0",count:"wz4WcwGH",unit:"_1guNy294",info:"_3UHoleEy",buttonWrap:"_31GuJJTG",button:"_2cf3bO6P"}},n8O5:function(e,t,n){"use strict";n.r(t);var a=n("o0o1"),o=n.n(a),r=n("yXPU"),i=n.n(r),c=n("J4zp"),l=n.n(c),s=n("FdF9"),u=n("MAVO"),m=n("33M6"),d=n("IW0v"),f=n("MAmw"),p=n.n(f),g=n("g5zU"),h=n.n(g),b=n("ypEm");var v=Object(s.memo)(function(){return h()(p.a),s.default.createElement(m.a,{className:p.a.content,src:"https://promotion.pddpic.com/upload/mobile-live/5e1cc804-4080-450b-b0c9-d89f8f12d8dc.png.slim.c1.png"},s.default.createElement("p",{className:p.a.title},"看视频 领现金"),s.default.createElement(d.a,{className:p.a.open,src:"https://promotion.pddpic.com/upload/mobile-live/a4fe9ee4-24a2-4f11-a3ec-bc873ebf7199.png.slim.c1.png"}),s.default.createElement(b.a,{className:p.a.info,textList:["wx","现金可提现到微信"],iconWidth:16,iconMargin:"0 .05rem 0 0"}))}),_=n("TSYQ"),w=n.n(_),E=n("KnaI"),k=n.n(E),N=n("7PnH"),D=n("qg0D"),S=n("V2iB"),x=Object(N.b)({key:"SignCashPacketAtom",defaultValue:{packetDialogStatus:!0,packetSuccessDialogStatus:!1,step:0,rewardCount:0},createActions:function(e){var t=e.getValue,n=e.setValue,a=e.getActions,r=e.getAtomValue;return{onClose:function(){r(D.c).onFinish()},onAcquire:function(){return i()(o.a.mark(function e(){var i,c,l,s,u,m,d,f,p;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,i=r(D.c),c=i.missionCode,l=i.activityCode,s=i.envelopeIds,u=t(),m=u.step,d=null===s||void 0===s?void 0:s[m],0!==m||!d){e.next=10;break}return e.next=7,a(D.c).operateMission();case 7:f=e.sent,e.next=14;break;case 10:return e.next=12,a(S.a).getService().acquireSignPacket({mission_code:c,activity_code:l,envelope_id:d});case 12:p=e.sent,f=p.result;case 14:f&&n({rewardCount:f.rewardCount,packetDialogStatus:!1,packetSuccessDialogStatus:!0}),e.next=19;break;case 17:e.prev=17,e.t0=e.catch(0);case 19:case"end":return e.stop()}},e,null,[[0,17]])}))()},showNextPacket:function(){var e=r(D.c).envelopeIds,o=t().step;o<(null===e||void 0===e?void 0:e.length)-1?n({step:o+1,packetDialogStatus:!0,packetSuccessDialogStatus:!1}):(n({packetSuccessDialogStatus:!1}),a(D.c).show({scene:D.d.Auto}))}}}});var A=Object(s.memo)(function(){h()(k.a);var e=x.useAtom(),t=l()(e,1)[0].rewardCount;return s.default.createElement("div",{className:k.a.dialog},s.default.createElement("div",{className:k.a.content},s.default.createElement("p",{className:k.a.title},"恭喜获得"),s.default.createElement(d.a,{className:k.a.line,src:"https://promotion.pddpic.com/upload/mobile-live/be98cd9c-3970-48f8-a1e6-fc3a667afe46.png.slim.png"}),s.default.createElement("div",{className:w()(k.a.countWrap,"flex-box","align-center","justify-center")},s.default.createElement(d.a,{className:k.a.icon,src:"https://promotion.pddpic.com/upload/mobile-live/bfa9e458-ebc5-4dcc-a8d7-ab0a0bfb4efd.png.slim.c1.png"}),s.default.createElement("span",{className:k.a.count},t/100,s.default.createElement("i",{className:k.a.unit},"元"))),s.default.createElement("p",{className:k.a.info},"稍后到账微信零钱")),s.default.createElement(m.a,{className:k.a.buttonWrap,src:"https://promotion.pddpic.com/upload/mobile-live/56ab6b33-6526-428f-93a1-9ea9d9c887d5.png.slim.c1.png"},s.default.createElement("button",{className:k.a.button},"继续看视频领现金")))}),C=n("N23e"),y=n("tgTt"),O=n("fNjL"),V=n.n(O);t.default=Object(s.memo)(function(){h()(V.a);var e=x.useAtom(),t=l()(e,2),n=t[0],a=n.packetDialogStatus,r=n.packetSuccessDialogStatus,c=n.step,m=t[1],d=m.onAcquire,f=m.showNextPacket,p=D.c.useAtom(),g=l()(p,1)[0].envelopeIds,b=Object(u.a)(i()(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=5;break}return e.next=3,d();case 3:e.next=6;break;case 5:f();case 6:case"end":return e.stop()}},e)})));return(null===g||void 0===g?void 0:g[c])?s.default.createElement(y.b,{onClick:b},s.default.createElement(C.a,{className:V.a.close}),a&&s.default.createElement(v,null),r&&s.default.createElement(A,null)):null})},phGF:function(e,t,n){(t=e.exports=n("I1BE")(!1)).push([e.i,".GqEeaoRE{width:2.91rem;height:4.36rem;text-align:center}._17hWvZ10{padding:1.22rem 0 1.11rem;font-size:.28rem;line-height:.4rem;color:#fffbd1;font-weight:700;font-weight:600}._2bHfubta{width:.97rem;height:.97rem}.WOpusLyS{padding-top:.36rem;font-size:.14rem;color:hsla(0,0%,100%,.7);line-height:.14rem}",""]),t.locals={content:"GqEeaoRE",title:"_17hWvZ10",open:"_2bHfubta",info:"WOpusLyS"}},tgTt:function(e,t,n){"use strict";n.d(t,"b",function(){return m}),n.d(t,"a",function(){return d});var a=n("pVnL"),o=n.n(a),r=n("FdF9"),i=n("7PnH"),c=n("VrAA"),l=n("FPaQ"),s=n("wnhv");function u(e){return function(t){var n=Object(i.d)(s.a);return r.default.createElement(e,o()({renderName:n},t))}}var m=u(c.a),d=u(l.a)},wnhv:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n("7PnH"),o=n("FG61"),r=n("YBXV"),i=Object(a.c)({key:"DialogRenderNameSelector",get:function(e){var t,n,a=e.get,i=a(r.a);return!1===(null===i||void 0===i?void 0:null===(t=i.ab)||void 0===t?void 0:null===(n=t.popupNoStopVideo)||void 0===n?void 0:n.stopVideo)&&0===(null===i||void 0===i?void 0:i.autoSlide)?o.e.DialogNotPuaseVideo:o.e.Dialog}}),c=n("qg0D"),l=Object(a.c)({key:"CashPaymentDialogRenderNameSelector",get:function(e){var t=e.get,n=t(c.c).scene===c.d.Auto,a=t(i);return n?a:o.e.Dialog}})}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-video-layer/js/loadable_SignCashPacketDialogModule_d56f959da5d207c41fba.js.map