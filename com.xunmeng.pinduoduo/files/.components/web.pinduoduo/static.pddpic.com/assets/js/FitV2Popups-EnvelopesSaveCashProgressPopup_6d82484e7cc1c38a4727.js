(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"SoZh":function(e,t,a){e.exports={"content":"_1NAOmpC","mainTitle":"_3zIvbA6","redMainTitle":"_2BqxLGH","circle":"_23vOAzV","timeStr":"_9F5XNhD","time":"_2Oc_NpL","listBody":"_2A9x60z","redList":"_34WEuKR","redListTitle":"o-lBnFg","listBodyBg":"_18C1Req","progress":"_2YA853m","conPackage":"_2gwKQ7p","packageList":"_2kaeuVO","money":"_29705RB","yuan":"_33lRoSQ","targetMoney":"_16kf9K2","targetYuan":"TAvxGL_","targetMoneyBigThree":"_32DeMuA","targetYuanBigThree":"_1WoRSWh","package":"_3Vf9nBm","envelopesPackageOpenIcon":"_3uFsFEg","desc":"_3fiGjEf","opacity":"GFnQZKc","needNum":"Zd2z8Ex","redpacketBody":"_1NfTP__","redpacket":"_1zv0FTa","ingotTosat1":"_1wLHyQy","ingotTosat2":"_3BssQ27","ingotTosat3":"wGXuf-H","breath":"C4veMp1","myBreath":"_3KH0bkc"}},"bJD0":function(e,t,a){e.exports={"circleIn":"_1BgdYUF","circleOut":"Ejv5H6X","svgCircle":"_2wKjyUE"}},"nzBX":function(e,t,a){"use strict";a.r(t);var n,o,s,r,c=a("a+Ds"),i=a("p5LO"),l=a("wzp5"),u=a("kRu4"),p=a.n(u),d=a("RgDV"),m=a("w9YI"),g=a("QjaO"),h=a("cJQI"),v=a("ZsPb"),k=a("JsaZ"),b=a("MQ17"),O=a("q1tI"),f=a.n(O),P=a("SoZh"),E=a.n(P),C=a("W1Es"),S=a("TyAF"),j=a("gpDe"),w=a("2oo6"),y=a("tpcr"),A=a("pnpS"),N=a("ygAv"),_=a("TSYQ"),x=a.n(_),T=a("bJD0"),L=a.n(T),R=a("bmJN"),B=Object(S.observer)(n=function(e){Object(v.a)(EnvelopesSaveCashProgress,e);var t=Object(k.a)(EnvelopesSaveCashProgress);function EnvelopesSaveCashProgress(){var e;Object(m.a)(this,EnvelopesSaveCashProgress);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return e=t.call.apply(t,[this].concat(n)),Object(b.a)(Object(h.a)(e),"state",{"num":314}),Object(b.a)(Object(h.a)(e),"setNum",(function(){setTimeout((function(){e.setState({"num":314*e.props.progressNum})}))})),e}return Object(g.a)(EnvelopesSaveCashProgress,[{"key":"componentDidMount","value":function componentDidMount(){this.setNum()}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.props.progressNum!==e.progressNum&&this.setNum()}},{"key":"render","value":function render(){return f.a.createElement("svg",{"className":L.a.svgCircle,"height":Object(R.a)(220),"width":Object(R.a)(220)},f.a.createElement("circle",{"className":L.a.circleOut,"cx":Object(R.a)(110),"cy":Object(R.a)(110),"r":Object(R.a)(100),"fill":"none","stroke":"#ffb93380","stroke-width":"9","stroke-linecap":"round"}),f.a.createElement("circle",{"style":{"strokeDashoffset":this.state.num},"className":L.a.circleIn,"cx":Object(R.a)(110),"cy":Object(R.a)(110),"r":Object(R.a)(100),"fill":"none","stroke-width":"8","stroke-linecap":"round"}))}}]),EnvelopesSaveCashProgress}(O.Component))||n,I=a("ndO7"),M=a("TRXh"),D=a("ktSw"),Q=a("gT8B"),G=a("Fmrv"),F=a("cl2I"),U=a("hn0O"),H=a("M3Mi");a.d(t,"default",(function(){return V}));var V=(o=Object(S.inject)(j.b.POPUP_QUEUE,j.b.GLOBAL,j.b.ENVELOPES_SAVE_CASH,j.b.GET_MORE_CASH),s=Object(y.b)(A.a,"showEnvelopesSaveCashProgress"),o(r=Object(S.observer)(r=s(r=function(e){Object(v.a)(EnvelopesSaveCashProgressPopup,e);var t=Object(k.a)(EnvelopesSaveCashProgressPopup);function EnvelopesSaveCashProgressPopup(){var e;Object(m.a)(this,EnvelopesSaveCashProgressPopup);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return e=t.call.apply(t,[this].concat(n)),Object(b.a)(Object(h.a)(e),"state",{"popupAniStyle0":{},"popupAniStyle1":{},"popupAniStyle2":{},"popupAniStyle3":{},"progressNum":0,"showGainedCashAmount":0,"showList":!0}),Object(b.a)(Object(h.a)(e),"startAni",function(){var t=Object(d.a)(p.a.mark((function _callee(t){var a,n,o,s;return p.a.wrap((function _callee$(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(N.l)("#nowRedPacket".concat(t),"#allRedPacket");case 2:a=r.sent,o=(n=a||{}).moveX,s=n.moveY,e.setState(Object(b.a)({},"popupAniStyle".concat(t),{"transform":"translate3D(".concat(o-3,"px, ").concat(s+6,"px, 0px) scale(0.3)"),"opacity":0,"zIndex":1})),setTimeout((function(){e.setState({"progressNum":e.isCanLook?0:(e.targetAmount-e.gainedCashAmount)/e.targetAmount,"showGainedCashAmount":e.gainedCashAmount}),e.isCanLook&&setTimeout((function(){e.setState({"showList":!1})}),1e3)}),1500);case 6:case"end":return r.stop()}}),_callee)})));return function(e){return t.apply(this,arguments)}}()),Object(b.a)(Object(h.a)(e),"goBackShow",Object(d.a)(p.a.mark((function _callee2(){var t;return p.a.wrap((function _callee2$(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(F.d)();case 2:t=a.sent,e.featureStore.init(t);case 4:case"end":return a.stop()}}),_callee2)})))),Object(b.a)(Object(h.a)(e),"isRefundDo",(function(){M.a.showToast("因退单导致任务已失效"),Object(I.e)(U.c.ENVELOPES_SAVE_CASH),e.featureStore.set({"iconCanShow":!1}),e.popupQueueStore.close("showEnvelopesSaveCashProgress")})),Object(b.a)(Object(h.a)(e),"homBtn",Object(D.a)(Object(d.a)(p.a.mark((function _callee3(){return p.a.wrap((function _callee3$(t){for(;;)switch(t.prev=t.next){case 0:if(!e.featureStore.isRefund){t.next=3;break}return e.isRefundDo(),t.abrupt("return");case 3:if(!e.isCanLook){t.next=7;break}return Object(H.a)(6383544),e.featureStore.isFinishLook?(e.popupQueueStore.instantShow("showEnvelopesSaveCashGet"),e.popupQueueStore.close("showEnvelopesSaveCashProgress")):Object(G.p)(e.goBackShow),t.abrupt("return");case 7:Object(H.a)(6383290),e.nextCanOpenIndex>-1?e.openRedPacketByindex(e.nextCanOpenIndex):(e.getMoreCashStore.set("showGetMoneyPullUp",!0),e.popupQueueStore.close("showEnvelopesSaveCashProgress"));case 9:case"end":return t.stop()}}),_callee3)}))))),Object(b.a)(Object(h.a)(e),"openRedPacketByindex",Object(D.a)(function(){var t=Object(d.a)(p.a.mark((function _callee4(t){var a,n,o,s,r;return p.a.wrap((function _callee4$(c){for(;;)switch(c.prev=c.next){case 0:if(n=null!==(a=e.redPacketsList[t])&&void 0!==a?a:{},o=t+1,s=t<e.nowRedPacketIndex,!e.featureStore.isRefund){c.next=6;break}return e.isRefundDo(),c.abrupt("return");case 6:if(n.isOpen||!s){c.next=21;break}return c.prev=7,c.next=10,Object(I.s)(o);case 10:if(c.t0=c.sent,c.t0){c.next=13;break}c.t0={};case 13:r=c.t0,e.featureStore.init(r),setTimeout((function(){e.startAni(t)}),200),c.next=21;break;case 18:c.prev=18,c.t1=c.catch(7),M.a.showToast("网络繁忙，请稍后再试");case 21:case"end":return c.stop()}}),_callee4,null,[[7,18]])})));return function(e){return t.apply(this,arguments)}}())),Object(b.a)(Object(h.a)(e),"renderNowRedPacket",(function(){var t=e.globalStore.redPacketProgress,a=void 0===t?{}:t,n=void 0!==(null==a?void 0:a.getCashAccount)?"领".concat(e.needOpenTime,"次可开"):"再领".concat(e.needOpenTime,"元");return f.a.createElement(f.a.Fragment,null,f.a.createElement(i.a,{"className":E.a.package,"onClick":function onClick(){Object(H.a)(6383291,{"redpacket_id":e.nowRedPacketIndex+1}),e.openRedPacketByindex(e.nowRedPacketIndex)}},f.a.createElement(l.a,{"src":Object(C.a)("envelopesPackage"),"className":x()(E.a.conPackage)}),f.a.createElement(i.a,{"className":E.a.desc},n)))})),Object(b.a)(Object(h.a)(e),"renderBtnText",(function(){var t=e.globalStore.redPacketProgress,a=void 0===t?{}:t;return e.isCanLook?e.featureStore.isFinishLook?"立即取出":"浏览领".concat(e.targetAmount/100,"元现金"):e.nextCanOpenIndex>-1?"开启红包":void 0!==(null==a?void 0:a.getCashAccount)?"再领".concat(e.needOpenTime,"次现金"):"再领".concat(e.needOpenTime,"元")})),Object(b.a)(Object(h.a)(e),"renderMainTitle",(function(){return f.a.createElement(i.a,{"className":E.a.mainTitle},"红包",e.isCanLook?"已攒":"攒",f.a.createElement(i.a,{"className":E.a.redMainTitle},"满",e.targetAmount/100,"元"),"，",e.isCanLook?"可立即取出":"即可全部取出")})),Object(b.a)(Object(h.a)(e),"onClose",(function(){e.popupQueueStore.close("showEnvelopesSaveCashProgress")})),Object(b.a)(Object(h.a)(e),"renderMove",(function(t){return f.a.createElement(f.a.Fragment,null,f.a.createElement(i.a,{"className":E.a.ingotTosat1,"style":e.state["popupAniStyle".concat(t)]},f.a.createElement(l.a,{"id":"nowRedPacket".concat(t),"src":Object(C.a)("envelopesPackage"),"className":E.a.conPackage})),f.a.createElement(i.a,{"className":E.a.ingotTosat2,"style":e.state["popupAniStyle".concat(t)]},f.a.createElement(l.a,{"id":"nowRedPacket".concat(t),"src":Object(C.a)("envelopesPackage"),"className":E.a.conPackage})),f.a.createElement(i.a,{"className":E.a.ingotTosat3,"style":e.state["popupAniStyle".concat(t)]},f.a.createElement(l.a,{"id":"nowRedPacket".concat(t),"src":Object(C.a)("envelopesPackage"),"className":E.a.conPackage})))})),Object(b.a)(Object(h.a)(e),"renderPackage",(function(t,a){if(a===e.nowRedPacketIndex)return e.renderNowRedPacket();var n=a<e.nowRedPacketIndex,o=t.isOpen?"已开启":n?"可开启":"待开启";return f.a.createElement(i.a,{"className":x()(E.a.package),"onClick":function onClick(){Object(H.a)(6383291,{"redpacket_id":a+1}),e.openRedPacketByindex(a)}},t.isOpen?f.a.createElement(f.a.Fragment,null,f.a.createElement(i.a,{"className":x()(E.a.money,E.a.opacity)},t.rewardAmount/100,f.a.createElement(c.a,{"className":E.a.yuan},"元")),f.a.createElement(l.a,{"src":Object(C.a)("envelopesPackageOpenIcon"),"className":E.a.envelopesPackageOpenIcon}),f.a.createElement(l.a,{"src":Object(C.a)("envelopesPackageOpen"),"className":E.a.conPackage})):f.a.createElement(l.a,{"src":Object(C.a)(n?"envelopesPackage":"envelopesPackageNo"),"className":x()(E.a.conPackage,!t.isOpen&&n?E.a.breath:"")}),f.a.createElement(i.a,{"className":x()(E.a.desc,(!n||t.isOpen)&&E.a.opacity)},o),e.renderMove(a))})),e}return Object(g.a)(EnvelopesSaveCashProgressPopup,[{"key":"componentDidMount","value":function componentDidMount(){var e=this;this.isCanLook?Object(H.b)(6383544):(Object(H.b)(6383290),this.redPacketsList.forEach((function(e,t){Object(H.b)(6383291,{"redpacket_id":t+1})}))),this.setState({"showList":!this.isCanLook}),setTimeout((function(){e.setState({"showGainedCashAmount":e.gainedCashAmount,"progressNum":e.isCanLook?0:(e.targetAmount-e.gainedCashAmount)/e.targetAmount})}))}},{"key":"render","value":function render(){var e=this,t=this.globalStore.fakeTodayTimeLeft,a=Object(N.g)(t),n=(this.state.showGainedCashAmount/100).toString().length;return f.a.createElement(w.a,{"showClose":!0,"headerTitle":"开红包攒现金","onClose":this.onClose,"btn1Text":this.renderBtnText(),"onBtn1Confirm":this.homBtn},f.a.createElement(i.a,{"className":E.a.content},f.a.createElement(i.a,null,this.renderMainTitle()),f.a.createElement(i.a,{"className":E.a.circle},f.a.createElement(B,{"progressNum":this.state.progressNum}),f.a.createElement(i.a,{"className":E.a.needNum},this.progressText),f.a.createElement(i.a,{"className":E.a.redpacketBody,"id":"allRedPacket"},f.a.createElement(l.a,{"src":Object(C.a)("envelopesSaveCashReward"),"className":E.a.redpacket}),f.a.createElement(i.a,{"className":n>3?E.a.targetMoneyBigThree:E.a.targetMoney},f.a.createElement(Q.a,{"num":this.state.showGainedCashAmount/100,"width":n>3?18:20,"height":30,"duration":1e3}),f.a.createElement(c.a,{"className":n>3?E.a.targetYuanBigThree:E.a.targetYuan},"元")))),this.state.showList?f.a.createElement(i.a,{"className":E.a.listBody},f.a.createElement(i.a,{"className":E.a.redList},f.a.createElement(i.a,{"className":E.a.redListTitle},"完成领现金任务，即可开红包"),f.a.createElement(i.a,{"className":E.a.progress}),f.a.createElement(i.a,{"className":E.a.packageList},this.redPacketsList.map((function(t,a){return e.renderPackage(t,a)})))),f.a.createElement(l.a,{"src":Object(C.a)("listBodyBg"),"className":E.a.listBodyBg})):null,f.a.createElement(i.a,{"className":E.a.timeStr},f.a.createElement(i.a,{"className":E.a.time},a),"后红包清空")))}},{"key":"featureStore","get":function get(){return this.props[j.b.ENVELOPES_SAVE_CASH]}},{"key":"popupQueueStore","get":function get(){return this.props[j.b.POPUP_QUEUE]}},{"key":"globalStore","get":function get(){return this.props[j.b.GLOBAL]}},{"key":"getMoreCashStore","get":function get(){return this.props[j.b.GET_MORE_CASH]}},{"key":"redPacketsList","get":function get(){var e,t;return null!==(e=null===(t=this.featureStore)||void 0===t?void 0:t.redPackets)&&void 0!==e?e:[]}},{"key":"nowRedPacketIndex","get":function get(){var e,t;return(null===(e=this.globalStore)||void 0===e||null===(t=e.redPacketProgress)||void 0===t?void 0:t.redPacketNum)-1}},{"key":"nowRedPacket","get":function get(){var e;return null!==(e=this.redPacketsList[this.nowRedPacketIndex])&&void 0!==e?e:{}}},{"key":"needOpenTime","get":function get(){var e,t,a,n,o=this.globalStore.redPacketProgress,s=void 0===o?{}:o,r=0;void 0!==(null==s?void 0:s.getCashAccount)?r=(null===(e=this.nowRedPacket)||void 0===e?void 0:e.targetCashCount)<=(null==s?void 0:s.getCashAccount)?0:(null===(t=this.nowRedPacket)||void 0===t?void 0:t.targetCashCount)-(null==s?void 0:s.getCashAccount):r=(null===(a=this.nowRedPacket)||void 0===a?void 0:a.targetCashAmount)<=(null==s?void 0:s.getCashAmount)?0:((null===(n=this.nowRedPacket)||void 0===n?void 0:n.targetCashAmount)-(null==s?void 0:s.getCashAmount))/100;return r}},{"key":"gainedCashAmount","get":function get(){var e,t;return null===(e=this.featureStore)||void 0===e||null===(t=e.featureItem)||void 0===t?void 0:t.gainedCashAmount}},{"key":"targetAmount","get":function get(){var e,t;return null===(e=this.featureStore)||void 0===e||null===(t=e.featureItem)||void 0===t?void 0:t.targetAmount}},{"key":"isCanLook","get":function get(){return this.gainedCashAmount>=this.targetAmount}},{"key":"progressText","get":function get(){return this.isCanLook?"已攒".concat(this.targetAmount/100,"元"):"还差".concat((this.targetAmount-this.gainedCashAmount)/100,"元")}},{"key":"nextCanOpenIndex","get":function get(){var e=this;return this.redPacketsList.findIndex((function(t,a){var n=a<e.nowRedPacketIndex;return!t.isOpen&&n}))}}]),EnvelopesSaveCashProgressPopup}(O.Component))||r)||r)||r)}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-fit/js/FitV2Popups-EnvelopesSaveCashProgressPopup_6d82484e7cc1c38a4727.js.map