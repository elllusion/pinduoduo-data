(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[59],{"+cKh":function(e,t,n){"use strict";n.r(t);var i=n("lSNA"),a=n.n(i),o=n("yXPU"),r=n.n(o),l=n("J4zp"),s=n.n(l),c=n("o0o1"),u=n.n(c),m=n("q1tI"),f=n.n(m),d=n("TyAF"),g=n("HIPb"),b=n("yo/L"),h=n("Vpw8"),p=n("O2NP"),w=n("mFSr"),v=n("AZ7A"),_=n("KRET"),k=n("Ri/L"),O=n("XYNX"),S=n("XUb9"),C=n.n(S);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=Object(h.a)(d.observer)((function(e){var t,n,i,a,o,l,c,d;Object(g.a)(C.a);var h=Object(m.useState)(!1),S=s()(h,2),N=S[0],E=S[1],y=Object(p.k)().store,x=y.query,H=y.activityPopStore,T=H.$service,X=H.setValue,D=H.vbMissionUniqueKey,P=H.vbViewMissionInfo,M=H.vbCurrentViewMission,L=H.vbCountDownTime,V=(null==P||null===(t=P.missionInfo)||void 0===t?void 0:t.currentAchieveTimes)===(null==P||null===(n=P.missionInfo)||void 0===n?void 0:n.upperLimitDaily),F=Object(m.useRef)(null);Object(m.useEffect)((function(){return function(){F.current&&clearTimeout(F.current)}}),[]);var B=function(){Object(b.f)(O.b,null),X({isVBViewDialogShow:!1,vbHasWatchedSeconds:0}),null==e||e.init()},R=function(){var e=r()(u.a.mark((function e(){var t,n,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==M||!M.canDrawCoin){e.next=15;break}return t=O.c[null==x?void 0:x._oc_mkt_tr_sc],e.prev=2,e.next=5,T.completeViewMissionOfVB({scene:t,mission_unique_key:D,browse_step:null==M?void 0:M.step});case 5:n=e.sent,null!=(i=Object(v.c)(n)||{})&&i.success?(Object(b.f)(O.b,null),X({vbViewMissionInfo:i.result,vbHasWatchedSeconds:0}),1===(null==M?void 0:M.step)?(E(!0),F.current=setTimeout((function(){z()}),1e3)):(Object(_.a)({duration:5,icon:O.a,text:"获得 ".concat(null==M?void 0:M.amount,"金币\n已存入小财神账户")}),X({vbCurrentViewMission:j(j({},M),{},{canDrawCoin:!1})}))):B(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),B();case 13:e.next=16;break;case 15:X({isVBViewDialogShow:!1});case 16:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}(),z=function(){var e;X({vbCurrentViewMission:j(j({},null===(e=P.ext)||void 0===e?void 0:e.step2),{},{step:2,canDrawCoin:!1})}),E(!1)};return f.a.createElement(f.a.Fragment,null,f.a.createElement(k.a,{onClose:function(){X({isVBViewDialogShow:!1})},title:"看直播领金币",renderSubTitle:function(){return V?"每天看直播 都能领金币":f.a.createElement(f.a.Fragment,null,"看直播 ",f.a.createElement("span",null,(null==M?void 0:M.browseTime)/60,"分钟"),"，领 ",f.a.createElement("span",null,null==M?void 0:M.amount,"金币"))}},f.a.createElement("div",{className:C.a.middle},f.a.createElement(w.a,{src:O.a,className:C.a.coin}),f.a.createElement("div",{className:C.a.amount},V?(null==P||null===(i=P.ext)||void 0===i||null===(a=i.step1)||void 0===a?void 0:a.amount)+(null==P||null===(o=P.ext)||void 0===o||null===(l=o.step2)||void 0===l?void 0:l.amount):null==M?void 0:M.amount),f.a.createElement("div",{className:C.a.text},"金币",!V&&(null==M?void 0:M.canDrawCoin)&&f.a.createElement("div",{className:C.a.hint},"可领取"),V&&f.a.createElement("div",{className:C.a.hint},"已领取"))),f.a.createElement("button",{className:C.a.button,onClick:R},V?"去看直播":null!=M&&M.canDrawCoin?"领".concat(null==M?void 0:M.amount,"金币"):"再看".concat(L[0],":").concat(L[1],"，领金币"))),N&&f.a.createElement("div",{className:C.a.winHintRoot,onClick:z},f.a.createElement("div",{className:C.a.mask}),f.a.createElement("div",{className:C.a.winHintContent},f.a.createElement("div",{className:C.a.winHintTitle},"获得",null==M?void 0:M.amount,"金币!"),f.a.createElement("div",{className:C.a.winHintSubTitle},"奖励升级，看直播可得",null==P||null===(c=P.ext)||void 0===c||null===(d=c.step2)||void 0===d?void 0:d.amount,"金币"))))}))},ESgc:function(e,t,n){var i=n("pk5h"),a=n("Q8e5"),o="string"==typeof i?[[e.i,i,""]]:i;(t=e.exports=i.locals||{})._getContent=function(){return o},t._getCss=function(){return""+i},t._insertCss=function(e){return a(o,e)}},"Ri/L":function(e,t,n){"use strict";var i=n("lSNA"),a=n.n(i),o=n("J4zp"),r=n.n(o),l=n("q1tI"),s=n.n(l),c=n("TSYQ"),u=n.n(c),m=n("91HH"),f=n("O2NP"),d=n("alVk"),g=n("YkDL"),b=n("HIPb"),h=n("mFSr"),p=n("ESgc"),w=n.n(p),v=function(e){Object(b.a)(w.a);var t=Object(f.k)().store,n=e.isBuyDialog?"VBBuyMissionDialog":"VBViewMissionDialog",i=Object(l.useState)(!1),o=r()(i,2),c=o[0],p=o[1];return Object(l.useEffect)((function(){p(!0)}),[]),Object(l.useEffect)((function(){return Object(g.a)({source:n}),Object(d.b)(),t.disableLiveRoomSlide(!0,n),function(){Object(g.b)({source:n}),Object(d.a)(),t.disableLiveRoomSlide(!1,n)}}),[]),s.a.createElement(m.Portal,null,s.a.createElement("div",{className:w.a.dialogRoot},s.a.createElement("div",{className:w.a.mask,onClick:e.onClose}),s.a.createElement("div",{className:u()(w.a.dialogContent,a()({},w.a.show,c))},s.a.createElement("div",{className:w.a.container},s.a.createElement("div",{className:w.a.content},s.a.createElement(h.a,{src:"https://funimg.pddpic.com/video-layer/997aaf15-3d9b-4c7c-a8d0-0bfa23b5b893.png.slim.png",className:w.a.close,onClick:e.onClose}),s.a.createElement("div",{className:w.a.head},e.title),s.a.createElement("div",{className:w.a.subTitle},e.renderSubTitle()),e.children)))))};t.a=Object(l.memo)(v)},XUb9:function(e,t,n){var i=n("bI13"),a=n("Q8e5"),o="string"==typeof i?[[e.i,i,""]]:i;(t=e.exports=i.locals||{})._getContent=function(){return o},t._getCss=function(){return""+i},t._insertCss=function(e){return a(o,e)}},bI13:function(e,t,n){(t=e.exports=n("I1BE")(!1)).push([e.i,'._1M-bxXkH{display:-webkit-box;display:-webkit-flex;display:flex;width:2.63rem;height:.8rem;background-color:#fff;border-radius:.04rem;padding:0 .19rem;margin:.12rem auto 0;color:#e02e24}._3ilTL3Gb{width:.56rem;height:.56rem;margin-top:.12rem}._3jmH3hf1{font-size:.52rem;line-height:.8rem;font-weight:700;margin-left:.08rem}._2RmrCFRF{position:relative;font-size:.18rem;line-height:.18rem;margin-top:.41rem;white-space:nowrap}._1aeWxed_{position:absolute;top:-.18rem;right:0;height:.14rem;font-size:.1rem;line-height:.14rem;padding:0 .03rem;color:#fff;background:#e02e24;border-radius:.6rem 1rem 1rem 0;white-space:nowrap}@supports not (-webkit-overflow-scrolling:touch){._1aeWxed_{line-height:.16rem}}._14mWekgo{margin:.2rem auto .24rem;width:2.71rem;height:.48rem;background-image:-webkit-linear-gradient(top,#ff6b54,#ff4122 49%,#ff0f26);background-image:linear-gradient(180deg,#ff6b54,#ff4122 49%,#ff0f26);border-radius:.62rem;font-size:.2rem;font-family:PingFangSC-Medium,PingFang SC,PingFangSC-Regular,STHeiti STXihei,Microsoft YaHei,Microsoft JhengHei,miui;font-weight:700;font-weight:500;color:#fff;text-align:center}._1XbC6WkM{position:fixed;top:0;left:0;overflow:hidden;z-index:10000;-webkit-user-select:none;user-select:none}._1XbC6WkM,.XXXNk1Kj{width:100%;height:100%}.XXXNk1Kj{background:rgba(0,0,0,.8)}._2CwO2_gS{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:3.75rem;height:auto;color:#fffbd1;font-weight:700;text-align:center}._2wHPSiBw{font-size:.24rem;line-height:.24rem;margin-bottom:.24rem}._3tkgmesN{font-size:.2rem;line-height:.44rem;width:3.75rem;height:.44rem;background-size:100% 100%;background-image:url("https://funimg.pddpic.com/mobile-subjects/background.png.slim.c1.png")}',""]),t.locals={middle:"_1M-bxXkH",coin:"_3ilTL3Gb",amount:"_3jmH3hf1",text:"_2RmrCFRF",hint:"_1aeWxed_",button:"_14mWekgo",winHintRoot:"_1XbC6WkM",mask:"XXXNk1Kj",winHintContent:"_2CwO2_gS",winHintTitle:"_2wHPSiBw",winHintSubTitle:"_3tkgmesN"}},pk5h:function(e,t,n){(t=e.exports=n("I1BE")(!1)).push([e.i,'._1jeXy4il{position:fixed;top:0;left:0;overflow:hidden;z-index:9999;-webkit-user-select:none;user-select:none}._1jeXy4il,._3oaaMu9T{width:100%;height:100%}._3oaaMu9T{background:rgba(0,0,0,.8)}._3ggtZUDw{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:3.03rem;height:auto}.HLLq5Bwl{opacity:0;-webkit-transform:scale(.3);transform:scale(.3);-webkit-transition:all .5s ease;transition:all .5s ease}._3kxABZie .HLLq5Bwl{opacity:1;-webkit-transform:scale(1);transform:scale(1)}._33XpO-JK{width:3.03rem;background-image:-webkit-linear-gradient(top,#ffe9d3,#fff);background-image:linear-gradient(180deg,#ffe9d3,#fff);border-radius:.12rem;text-align:center;font-size:0}._3NVsN_UF{position:absolute;top:-.47rem;right:.11rem;width:.29rem;height:.29rem}._33tKNN5d{position:relative;top:-.04rem;margin:0 auto;width:1.93rem;height:.45rem;font-size:.21rem;line-height:.35rem;font-family:PingFangSC-Semibold,PingFang SC,PingFangSC-Regular,STHeiti STXihei,Microsoft YaHei,Microsoft JhengHei,miui;font-weight:700;font-weight:600;background-size:100% 100%;background-image:url("https://funimg.pddpic.com/video-layer/6eb2866b-a452-46e4-b4f0-b14c415838be.png.slim.png")}._5Sf7JO0f,._33tKNN5d{color:#b1443e;text-align:center}._5Sf7JO0f{font-size:.2rem;font-family:PingFangSC-Medium,PingFang SC,PingFangSC-Regular,STHeiti STXihei,Microsoft YaHei,Microsoft JhengHei,miui;font-weight:700;font-weight:500;line-height:.28rem;margin:.13rem auto 0}._5Sf7JO0f span{color:#e02e24}',""]),t.locals={dialogRoot:"_1jeXy4il",mask:"_3oaaMu9T",dialogContent:"_3ggtZUDw",container:"HLLq5Bwl",show:"_3kxABZie",content:"_33XpO-JK",close:"_3NVsN_UF",head:"_33tKNN5d",subTitle:"_5Sf7JO0f"}}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-live-layer/js/loadable_LiveActivityPop_ViewToGetCoinsDialog_a0a86da230b6b366fe0f.js.map