(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"7WJC":function(e,t,a){e.exports={"content":"_3K1Nj5N","diamondBackground":"_25wbIeM","diamondImg":"_2UBKIYS","diamondPhoneImg":"CQYlTRa","text":"_1PA3Xpi"}},"N0g6":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return E}));var n,o=a("p5LO"),r=a("wzp5"),i=a("w9YI"),l=a("QjaO"),c=a("cJQI"),u=a("ZsPb"),s=a("JsaZ"),d=a("MQ17"),b=a("q1tI"),g=a.n(b),p=a("TyAF"),v=a("7WJC"),m=a.n(v),f=a("W1Es"),h=a("gpDe"),O=a("2oo6"),C=a("ndO7"),j=a("klxc"),S=a("hn0O"),E=Object(p.inject)(h.b.DIAMOND_CONVERT,h.b.POPUP_QUEUE,h.b.GET_MORE_CASH)(n=Object(p.observer)(n=function(e){Object(u.a)(Guide,e);var t=Object(s.a)(Guide);function Guide(){var e;Object(i.a)(this,Guide);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return e=t.call.apply(t,[this].concat(n)),Object(d.a)(Object(c.a)(e),"onClick",(function(){e.getMoreCashStore.set("showGetMoneyPullUp",!0),e.popupQueueStore.close("showDiamondConvertGuide"),e.scrollToAnchor("base-item-id-".concat(S.c.DiamondConvert))})),Object(d.a)(Object(c.a)(e),"scrollToAnchor",(function(e){if(e){var t=document.getElementById(e);t&&t.scrollIntoView({"block":"start","behavior":"smooth"})}})),e}return Object(l.a)(Guide,[{"key":"componentDidMount","value":function componentDidMount(){Object(C.I)(j.a.DIAMOND_CONVERT_GUIDE),this.featureStore.set({"iconCanShow":!1,"popupVos":[],"handCanGuide":!0})}},{"key":"render","value":function render(){return g.a.createElement(O.a,{"showClose":!0,"onClose":this.onClick,"deepMask":!0,"disableContentBg":!0,"btn1Text":"我知道了，去领取","onBtn1Confirm":this.onClick},g.a.createElement(o.a,{"className":m.a.content},g.a.createElement(r.a,{"className":m.a.diamondBackground,"src":Object(f.a)("diamond_convert_background")}),g.a.createElement(r.a,{"className":m.a.diamondImg,"src":Object(f.a)("4b5f5c68-fac0-488d-9a4e-ed537c3d55b9")}),g.a.createElement(o.a,{"className":m.a.text},"“钻石折算现金”入口更换至“领现金”列表内"),g.a.createElement(r.a,{"className":m.a.diamondPhoneImg,"src":Object(f.a)("diamond_convert_phone")})))}},{"key":"popupQueueStore","get":function get(){return this.props[h.b.POPUP_QUEUE]}},{"key":"featureStore","get":function get(){return this.props[h.b.DIAMOND_CONVERT]}},{"key":"getMoreCashStore","get":function get(){return this.props[h.b.GET_MORE_CASH]}}]),Guide}(b.Component))||n)||n},"nhNo":function(e,t,a){"use strict";a.r(t);var n,o,r,i,l=a("SlMV"),c=a("p5LO"),u=a("kRu4"),s=a.n(u),d=a("wHJ5"),b=a("RgDV"),g=a("w9YI"),p=a("QjaO"),v=a("cJQI"),m=a("ZsPb"),f=a("JsaZ"),h=a("MQ17"),O=a("q1tI"),C=a.n(O),j=a("zIc+"),S=a.n(j),E=a("TyAF"),T=a("gpDe"),y=a("2oo6"),_=a("wzp5"),N=a("p2lq"),k=a.n(N),D=a("W1Es"),P=a("TSYQ"),w=a.n(P),I=a("vhEY"),x=I.a.CAN_CONVERT,A=I.a.CONVERTED,M=I.a.INTERRUPT,R=I.a.NOT_OPEN,Q=Object(E.observer)(n=function(e){Object(m.a)(Stage,e);var t=Object(f.a)(Stage);function Stage(){return Object(g.a)(this,Stage),t.apply(this,arguments)}return Object(p.a)(Stage,[{"key":"render","value":function render(){var e=this.props,t=e.status,a=e.isLast,n=e.cashAmount,o=t===A,r=Object(d.a)(this.highlightStyle,2),i=r[0],l=r[1];return C.a.createElement(c.a,{"className":w()(k.a.stage,Object(h.a)({},k.a.lastStage,a))},C.a.createElement(c.a,{"style":{"opacity":o?.3:1}},C.a.createElement(c.a,{"style":{"borderColor":i},"className":k.a.content},C.a.createElement(_.a,{"className":k.a.light,"src":Object(D.a)("light__1")}),C.a.createElement(_.a,{"className":k.a.redpack,"src":Object(D.a)("diamondRedpack")})),C.a.createElement(c.a,{"style":{"background":l,"color":t===M?"#fff":"#873301"},"className":k.a.label},this.label)),a?C.a.createElement(c.a,{"style":{"opacity":o?.3:1},"className":k.a.tips},"必领",n/100,"元"):null,o&&C.a.createElement(c.a,{"className":k.a.tag},"\b已领取"))}},{"key":"label","get":function get(){var e,t=this.props,a=t.status,n=t.currentStage,o=t.index,r=(e={},Object(h.a)(e,x,"可领取"),Object(h.a)(e,A,"第".concat(o,"天")),Object(h.a)(e,M,"中断"),Object(h.a)(e,R,"第".concat(o,"天")),e)[a];return o===n+1&&(r="明天"),a===A&&o===n&&(r="今天"),r}},{"key":"highlightStyle","get":function get(){var e=this.props.status;return e===x?["rgba(255,216,86,1)","linear-gradient(rgba(255,216,86,1),rgba(255,180,28,1))"]:e===M?["rgba(255,128,77,1)","linear-gradient(rgba(255,128,77,1),rgba(255,97,29,1))"]:["#ffdaaf","#ffdaaf"]}}]),Stage}(O.PureComponent))||n,V=a("ktSw"),U=a("ndO7"),G=a("Fmrv"),F=a("ygAv"),B=a("tpcr"),J=a("Rj+r"),L=a("lC+4"),Y=a("bmJN"),q=a("hn0O"),z=a("cl2I"),W=a("x0oO");a.d(t,"default",(function(){return K}));var H=I.a.CAN_CONVERT,Z=(I.a.INTERRUPT,I.a.CONVERTED),K=(I.a.NOT_OPEN,o=Object(E.inject)(T.b.POPUP_QUEUE,T.b.GLOBAL,T.b.DIAMOND_CONVERT),r=Object(B.b)(W.a,"showDiamondConvertProgress"),o(i=Object(E.observer)(i=r(i=function(e){Object(m.a)(Progress,e);var t=Object(f.a)(Progress);function Progress(){var e;Object(g.a)(this,Progress);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return e=t.call.apply(t,[this].concat(n)),Object(h.a)(Object(v.a)(e),"onClose",(function(){return e.popupQueueStore.close("showDiamondConvertProgress")})),Object(h.a)(Object(v.a)(e),"onConfirm",Object(V.a)(Object(b.a)(s.a.mark((function _callee(){var t,a,n,o,r,i,l,c,u;return s.a.wrap((function _callee$(s){for(;;)switch(s.prev=s.next){case 0:if(i=(null===(t=e.featureStore)||void 0===t||null===(a=t.getInterrupt)||void 0===a?void 0:a.call(t))||[],l=Object(d.a)(i,1),c=l[0],u=null!==(n=null===(o=e.featureStore)||void 0===o||null===(r=o.getTodayStage)||void 0===r?void 0:r.call(o))&&void 0!==n?n:{},u.status!==H){s.next=4;break}return s.abrupt("return",Object(U.c)().then((function(t){var a,n,o,r=t||{},i=r.healthAccountVo,l=void 0===i?{}:i,c=r.addCashAmount;e.globalStore.set("healthAccountVoTmp",l),e.featureStore.init(t),e.featureStore.set({"addCashAmount":c}),e.popupQueueStore.parallelShow("showDiamondConvertConvert"),Object(J.b)(null!==(a=null==t||null===(n=t.featureMap)||void 0===n||null===(o=n[q.c.DiamondConvert])||void 0===o?void 0:o.featureDataVo)&&void 0!==a?a:{})&&e.onClose()})).catch((function(){e.onClose()})));case 4:return c&&Object(G.l)((function(){var t,a,n;return Object(z.c)({"globalStore":e.globalStore,"popupQueueStore":e.popupQueueStore},q.c.DiamondConvert,null===(t=e.featureStore)||void 0===t||null===(a=t.featureData)||void 0===a||null===(n=a.orderFillInterruptMission)||void 0===n?void 0:n.finishcount,"orderFillInterruptMission").then((function(t){return e.featureStore.init(t)}))})),s.abrupt("return",e.onClose());case 6:case"end":return s.stop()}}),_callee)}))))),e}return Object(p.a)(Progress,[{"key":"render","value":function render(){var e,t,a,n,o=this.globalStore.fakeTodayTimeLeft,r=null!==(e=null===(t=this.featureStore)||void 0===t?void 0:t.featureData)&&void 0!==e?e:{},i=r.stages,u=void 0===i?[]:i,s=r.currentStage,b=r.remainingDiamond,g=(null===(a=(n=this.featureStore).getInterrupt)||void 0===a?void 0:a.call(n))||[],p=Object(d.a)(g,1)[0];return C.a.createElement(y.a,{"showClose":!0,"onClose":this.onClose,"btn1Text":this.btnText,"bottomTips1":p?"若未继续领取，<#F7990F#".concat(Object(F.g)(o),">后现金清空"):"","onBtn1Confirm":this.onConfirm},b?C.a.createElement(L.a,{"text":"剩余<#F79E1B#".concat(b,">{%19%diamond}"),"wrapperClass":[S.a.head]}):null,C.a.createElement(c.a,{"className":S.a.mainTitle,"style":{"paddingTop":Object(Y.a)(b?32:40)}},Array.isArray(this.mainTitle)?this.mainTitle.map((function(e){return C.a.createElement(L.a,{"text":e,"wrapperClass":[S.a.mainText]})})):C.a.createElement(L.a,{"text":this.mainTitle,"wrapperClass":[S.a.mainText]})),this.subTitle?C.a.createElement(L.a,{"wrapperClass":[S.a.subTitle],"text":this.subTitle}):null,C.a.createElement(c.a,{"className":w()(S.a.content,Object(h.a)({},S.a.multiContent,(null==u?void 0:u.length)>3))},u.map((function(e,t){var a=(e||{}).index,n=t+1===(null==u?void 0:u.length);return C.a.createElement(Q,Object(l.a)({"key":a},e||{},{"index":a+1,"isLast":n,"currentStage":s+1}))}))),C.a.createElement(c.a,{"className":S.a.hint},"若领取中断，则本期现金清空"))}},{"key":"featureStore","get":function get(){return this.props[T.b.DIAMOND_CONVERT]}},{"key":"popupQueueStore","get":function get(){return this.props[T.b.POPUP_QUEUE]}},{"key":"globalStore","get":function get(){return this.props[T.b.GLOBAL]}},{"key":"btnText","get":function get(){var e,t,a,n,o,r,i,l=(null!==(e=null===(t=this.featureStore)||void 0===t?void 0:t.featureData)&&void 0!==e?e:{}).stages,c=void 0===l?[]:l,u=(null===(a=this.featureStore)||void 0===a||null===(n=a.getInterrupt)||void 0===n?void 0:n.call(a))||[],s=Object(d.a)(u,2),b=s[0],g=s[1],p=(null!==(o=null===(r=this.featureStore)||void 0===r||null===(i=r.getTodayStage)||void 0===i?void 0:i.call(r))&&void 0!==o?o:{}).status;return c.every((function(e){return(null==e?void 0:e.status)===Z}))?"明日继续折算":b?"browse"===g?"浏览可继续领现金":"order"===g?"拼单可继续领现金":"明日继续领现金":p===H?"立即领取":"明日继续领现金"}},{"key":"mainTitle","get":function get(){var e,t,a,n,o,r,i=null!==(e=null===(t=this.featureStore)||void 0===t?void 0:t.featureData)&&void 0!==e?e:{},l=i.stages,c=void 0===l?[]:l,u=i.remainingDiamond,s=i.remainingCashPeriod,b=i.diamondAmountPeriod,g=i.cashAmountPeriod,p=((null===(a=(n=this.featureStore).getTodayStage)||void 0===a?void 0:a.call(n))||{}).index,v=(null===(o=(r=this.featureStore).getInterrupt)||void 0===o?void 0:o.call(r))||[],m=Object(d.a)(v,1)[0],f=u>0,h=0===p,O=p>0&&p===c.length;return c.every((function(e){return(null==e?void 0:e.status)===Z}))?["本期折算的<#F74814#".concat(g/100,"元现金>已领完，明日"),"来继续折算钻石"]:m?["领取中断，还剩<#F74814#".concat(s/100,"元现金>{%19%redpacket}"),"未领取"]:O&&u?["本期折算的<#F74814#".concat(g/100,"元现金>已领完，明日"),"来继续折算钻石"]:(h&&f?"本期":"")+"<#F79E1B#".concat(b,">{%19%diamond}已折算为<#F74814#").concat(g/100,"元现金>{%19%redpacket}")}},{"key":"subTitle","get":function get(){var e,t,a,n,o,r,i=null!==(e=null===(t=this.featureStore)||void 0===t?void 0:t.featureData)&&void 0!==e?e:{},l=i.stages,c=void 0===l?[]:l,u=i.remainingCashPeriod,s=(null===(a=(n=this.featureStore).getTodayStage)||void 0===a?void 0:a.call(n))||{},b=s.index,g=s.status,p=0===b,v=b>0&&b===c.length,m=(null===(o=(r=this.featureStore).getInterrupt)||void 0===o?void 0:o.call(r))||[],f=Object(d.a)(m,1)[0],h=c.every((function(e){return(null==e?void 0:e.status)===Z}));return v||f||h?"":p?"连续".concat((null==c?void 0:c.length)-(g===Z?1:0),"天全部领完"):"还剩<#F74814#".concat(u/100,"元>待领取")}}]),Progress}(O.Component))||i)||i)||i)},"p2lq":function(e,t,a){e.exports={"stage":"_2n3QMMG","lastStage":"_3jqRxGP","content":"_19dNIKw","light":"_2198iMg","redpack":"_2_DRAYY","label":"_3ngpzrb","tag":"_24Wn-EC","tips":"Vb4cse_"}},"x0oO":function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("glIo"),o=Object(n.b)("checkDiamondConvert",(function(e){var t,a,n=e.diamondConvertStore;return(null==n||null===(t=n.featureData)||void 0===t||null===(a=t.stages)||void 0===a?void 0:a.length)>0}))},"zIc+":function(e,t,a){e.exports={"content":"ww8ftfN","multiContent":"_2xlOwRD","head":"_1MEDg9S","mainTitle":"_3d-YFBH","subTitle":"_1RPy7C_","mainText":"_3yoxEPa","hint":"_9V2fQX8"}}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-fit/js/FitV2Popups-DiamondConvertProgressPopup_e840d3ac8d69e4dadab5.js.map