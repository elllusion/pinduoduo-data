(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"eQYY":function(e,t,a){"use strict";a.r(t);var n,o,c,r,s=a("JqEv"),u=a("kRu4"),i=a.n(u),l=a("RgDV"),m=a("cJQI"),p=a("MQ17"),b=a("p5LO"),h=a("a+Ds"),d=a("wzp5"),w=a("w9YI"),g=a("QjaO"),O=a("ZsPb"),v=a("JsaZ"),E=a("q1tI"),j=a.n(E),G=a("TyAF"),A=a("TSYQ"),C=a.n(A),f=a("W1Es"),N=a("gpDe"),_=a("tpcr"),S=a("rcPX"),k=a("glIo"),L=a("bmJN"),M=a("3uR/"),y=a("2oo6"),D=a("pko3"),P=a.n(D),x=a("ygAv"),F=a("uaJq"),T=a.n(F),I=Object(G.inject)(N.b.ACCUMULATE_GROUP)(n=Object(G.observer)(n=function(e){Object(O.a)(CountDown,e);var t=Object(v.a)(CountDown);function CountDown(){return Object(w.a)(this,CountDown),t.apply(this,arguments)}return Object(g.a)(CountDown,[{"key":"render","value":function render(){var e=this.accumulateGroupStore.accumulateCountdown,t=void 0===e?0:e;return"00:00:00"!==Object(x.g)(t)?j.a.createElement(b.a,{"className":T.a.time},j.a.createElement(h.a,{"className":T.a.countDown},Object(x.h)(t)),"后进度清空"):null}},{"key":"accumulateGroupStore","get":function get(){return this.props[N.b.ACCUMULATE_GROUP]}}]),CountDown}(E.Component))||n)||n;a.d(t,"AccumulateGroupMissionItem",(function(){return U})),a.d(t,"default",(function(){return R}));var U=function(e){Object(O.a)(AccumulateGroupMissionItem,e);var t=Object(v.a)(AccumulateGroupMissionItem);function AccumulateGroupMissionItem(){return Object(w.a)(this,AccumulateGroupMissionItem),t.apply(this,arguments)}return Object(g.a)(AccumulateGroupMissionItem,[{"key":"render","value":function render(){var e=this.props,t=e.isLast,a=void 0!==t&&t,n=e.index,o=void 0===n?0:n,c=e.rewardAmount,r=void 0===c?0:c,s=e.drawCount,u=void 0===s?0:s,i=e.finishCount,l=void 0===i?0:i,m=e.allFinish,p=u>=o+1,w=l>=o+1;return j.a.createElement(b.a,{"className":C()(P.a.missionItem,p&&P.a.drawedItem,a&&P.a.lastItem)},j.a.createElement(d.a,{"enablewebp":0,"src":Object(f.b)("accumulateGroupMissionItem"),"className":P.a.img}),j.a.createElement(b.a,{"className":P.a.money},r/100,j.a.createElement(h.a,{"className":P.a.yuan},"元")),j.a.createElement(b.a,{"className":C()(P.a.text,w&&P.a.drawText,p&&P.a.drawedText)},m||p?"已领":w?"可领取":"待领取"),p&&j.a.createElement(d.a,{"enablewebp":0,"src":Object(f.b)("accumulateGroupMissionDrawedImg"),"className":P.a.drawedImg}))}}]),AccumulateGroupMissionItem}(E.Component),R=(o=Object(G.inject)(N.b.POPUP_QUEUE,N.b.GLOBAL,N.b.ACCUMULATE_GROUP,N.b.ENV),c=Object(_.b)(S.a,"showAccumulateGroupMissionPopup"),o(r=Object(G.observer)(r=c(r=function(e){Object(O.a)(AccumulateGroupMissionPopup,e);var t,a=Object(v.a)(AccumulateGroupMissionPopup);function AccumulateGroupMissionPopup(){var e;Object(w.a)(this,AccumulateGroupMissionPopup);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return e=a.call.apply(a,[this].concat(n)),Object(p.a)(Object(m.a)(e),"state",{"startFadeout":!1,"showMask":!1,"showLight":!1,"showTagShake":!1}),Object(p.a)(Object(m.a)(e),"onClose",(function(){e.setState({"startFadeout":!0})})),Object(p.a)(Object(m.a)(e),"closePopupQueue",(function(){e.accumulateGroupStore.set("isFromGuide",!1),e.popupQueueStore.close("showAccumulateGroupMissionPopup")})),Object(p.a)(Object(m.a)(e),"renderBtnText",(function(){var t=e.accumulateGroupStore,a=t.isDrawable,n=t.canDrawReward,o=void 0===n?0:n,c=t.targetAmount,r=void 0===c?0:c,s=t.currentAmount,u=void 0===s?0:s,i=t.drawCount,l=void 0===i?0:i,m=(r-u)/100;return t.allFinish?"打款已全部领完":a?l<=0?"立即领取打款":"领取".concat(o/100,"元打款"):"再拼".concat(m,"元领打款")})),Object(p.a)(Object(m.a)(e),"onBtn",(function(){e.accumulateGroupStore.isDrawable?e.popupQueueStore.parallelShow("showAccumulateGroupRewardPopup"):(Object(k.h)({"globalStore":e.globalStore,"envStore":e.envStore}),e.closePopupQueue())})),Object(p.a)(Object(m.a)(e),"onRuleClick",(function(){e.popupQueueStore.parallelShow("showAccumulateGroupRule")})),e}return Object(g.a)(AccumulateGroupMissionPopup,[{"key":"componentDidMount","value":(t=Object(l.a)(i.a.mark((function _callee(){var e,t,a,n;return i.a.wrap((function _callee$(o){for(;;)switch(o.prev=o.next){case 0:if(e=this.accumulateGroupStore,t=e.isFromGuide,a=void 0!==t&&t,n=e.expireTime,this.accumulateGroupStore.setCountdown(n),!a){o.next=13;break}return this.setState({"showMask":!0}),o.next=6,Object(M.v)(300);case 6:return this.setState({"showLight":!0}),o.next=9,Object(M.v)(600);case 9:return this.setState({"showMask":!1,"showTagShake":!0}),o.next=12,Object(M.v)(500);case 12:this.setState({"showTagShake":!1,"showLight":!1});case 13:case"end":return o.stop()}}),_callee,this)}))),function componentDidMount(){return t.apply(this,arguments)})},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.accumulateGroupStore.set("isFromGuide",!1)}},{"key":"render","value":function render(){var e,t,a=this.accumulateGroupStore,n=a.isFromGuide,o=void 0!==n&&n,c=a.isDrawable,r=a.currentAmount,u=void 0===r?0:r,i=a.totalReward,l=void 0===i?0:i,m=a.finishCount,p=void 0===m?0:m,h=a.drawCount,w=void 0===h?0:h,g=a.allFinish,O=a.rewardList,v=void 0===O?[]:O,E=a.targetAmountList,G=void 0===E?[]:E,A=this.state,N=A.showMask,_=A.showTagShake,S=A.showLight,k=w<=0,M=k&&c,D=null!==(e=v.length)&&void 0!==e?e:0,x=M?100:100*(.8+u/G[0]*.2),F=G[p]-G[p-1],T=u-G[p-1],R=p<=0?0:110*(p-1)+T/F*110,q=110*(w-1)+33;return j.a.createElement(j.a.Fragment,null,o&&N&&j.a.createElement(b.a,{"className":P.a.exchangeMask}),j.a.createElement(y.a,{"showClose":!0,"onClose":this.onClose,"mainTitle":this.title,"subTitle":M?"":"拼单可得原本奖励，还可额外领打款","fadeOutIcon":"accumulateGroupIcon","targetAimSelector":"#accumulateGroupIcon","startFadeout":this.state.startFadeout,"onFadeoutEnd":this.closePopupQueue,"closeIconStyle":{"top":Object(L.a)(M?-98:-32)}},j.a.createElement(b.a,{"className":P.a.content},M&&j.a.createElement(d.a,{"enablewebp":0,"className":P.a.title,"src":Object(f.b)("accumulateGroupTitle")}),k&&!g?j.a.createElement(b.a,{"className":P.a.mission},M&&j.a.createElement(b.a,{"className":P.a.desc},"已拼满",G[0]/100,"元，快领奖励吧"),j.a.createElement(b.a,{"className":P.a.progress},j.a.createElement(b.a,{"className":P.a.current,"style":{"width":"".concat(Number(x),"%")}},j.a.createElement(d.a,{"enablewebp":0,"className":P.a.whiteLight,"src":Object(f.b)("accumulateProgressBarLight")})),o&&S&&j.a.createElement(d.a,{"enablewebp":0,"className":P.a.light,"src":Object(f.b)("accumulateGroupProgressLight")})),!M&&j.a.createElement(d.a,{"enablewebp":0,"className":C()(P.a.tag,_&&P.a.tagShake),"src":Object(f.b)("speedUpTag80")}),j.a.createElement(b.a,{"className":P.a.wechat},j.a.createElement(d.a,{"className":P.a.bg,"src":Object(f.b)("accumulateGroupWechat")}),j.a.createElement(b.a,{"className":P.a.money},l/100,j.a.createElement(b.a,{"className":P.a.yuan},"元"))),N&&j.a.createElement(d.a,{"enablewebp":0,"className":P.a.wechatAni,"src":Object(f.b)("accumulateGroupGuideWechat")})):j.a.createElement(b.a,{"className":P.a.missionList},j.a.createElement(b.a,{"className":P.a.progressBg}),j.a.createElement(s.a,{"scrollX":!0,"scrollLeft":q,"className":P.a.scrollList},j.a.createElement(b.a,{"className":P.a.list},j.a.createElement(b.a,{"className":P.a.listProgress},j.a.createElement(b.a,{"className":C()(P.a.listCurrent,g&&P.a.maxCurrent),"style":{"width":Object(L.a)(2*R)}},j.a.createElement(d.a,{"enablewebp":0,"className":P.a.whiteLight,"src":Object(f.b)("accumulateProgressBarLongLight")}))),v.slice(0,D-1).map((function(e,t){var a=(e[0]||{}).maxRewardAmount,n=void 0===a?0:a;return j.a.createElement(U,{"rewardAmount":n,"drawCount":w,"finishCount":p,"allFinish":g,"index":t,"key":t})})))),j.a.createElement(b.a,{"className":P.a.lastMission},j.a.createElement(U,{"rewardAmount":null===(t=v[D-1][0])||void 0===t?void 0:t.maxRewardAmount,"drawCount":w,"finishCount":p,"allFinish":g,"index":D-1,"isLast":!0})),j.a.createElement(d.a,{"enablewebp":0,"className":P.a.shadow,"src":Object(f.b)("accumulateMIssionListGray")})),j.a.createElement(I,null),j.a.createElement(b.a,{"onClick":this.onBtn,"className":P.a.btn},this.renderBtnText()),j.a.createElement(b.a,{"className":P.a.rule,"onClick":this.onRuleClick},"活动规则"))))}},{"key":"accumulateGroupStore","get":function get(){return this.props[N.b.ACCUMULATE_GROUP]}},{"key":"popupQueueStore","get":function get(){return this.props[N.b.POPUP_QUEUE]}},{"key":"globalStore","get":function get(){return this.props[N.b.GLOBAL]}},{"key":"envStore","get":function get(){return this.props[N.b.ENV]}},{"key":"title","get":function get(){var e=this.accumulateGroupStore,t=e.targetAmount,a=void 0===t?0:t,n=e.currentAmount,o=void 0===n?0:n,c=e.isDrawable,r=e.allFinish,s=e.currReward,u=void 0===s?0:s,i=e.canDrawReward,l=e.drawCount,m=(a-o)/100,p=(void 0===l?0:l)<=0;return r?"恭喜已领完全部打款":c?p?"现金直接打款到微信{wepay%20%}":"恭喜可领<#F96D43#".concat(i/100,"元>打款"):p?"活动内<#F96D43#再拼".concat(m,"元>，可领打款"):"活动内<#F96D43#再拼".concat(m,"元>，再领<#F96D43#").concat(u/100,"元>打款")}}]),AccumulateGroupMissionPopup}(E.Component))||r)||r)||r)},"pko3":function(e,t,a){e.exports={"title":"_9HTUqiL","content":"_1qDNb9c","mission":"_1wd-EfH","img":"bLuTNtk","desc":"_3AFE56N","money":"_3XOYwgg","progress":"U5bZoXq","current":"_3qkFJ7o","whiteLight":"_2LbaFLB","light":"vCGvAsl","lightAni":"_3fnVOpE","tag":"A4USYwE","tagShake":"_1qZSPGn","wechat":"_9HO0YyT","bg":"_1w2zzMd","yuan":"JhmxlPu","text":"D_VN5jf","wechatAni":"_1LXCoqg","missionList":"_2hW0RAq","scrollList":"_19UD4B-","list":"_3eJSlqg","missionItem":"_3Y3_aj2","drawedItem":"_3VvKak8","drawText":"_3wyaTm4","drawedText":"_258LTxM","drawedImg":"_3eYqlpN","lastMission":"_3FhJanE","shadow":"_3pJNB3Y","lastItem":"_1aDSHTr","progressBg":"_1OGbhAf","listProgress":"_15aWHjx","listCurrent":"_3OwFDvq","maxCurrent":"nhueoKr","time":"_2nd1jUc","countDown":"_2e8CRK6","btn":"YY2KOus","rule":"iqmRFzy","exchangeMask":"_1Tmc4D8","exchangeMaskChangeIn":"_2RF93s4"}},"uaJq":function(e,t,a){e.exports={"time":"_2s3eacD","countDown":"_2FmrVwr"}}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-fit/js/FitV2Popups-AccumulateGroupMissionPopup_5c3d489be9ef4e86d953.js.map