(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{"e2kv":function(e,t,a){"use strict";a.r(t);var n,s=a("brQG"),r=a("p5LO"),o=a("VTBJ"),i=a("1OyB"),l=a("vuIU"),c=a("JX7q"),u=a("Ji7U"),f=a("LK+K"),m=a("rePB"),d=a("q1tI"),h=a.n(d),g=a("TyAF"),p=a("TSYQ"),b=a.n(p),v=a("SLG6"),E=a("8tQc"),w=a("6yFI"),O=a("1oWy"),y=a("UtUr"),G=a("PS6B"),N=a("tSAD"),P=a("3uF5"),S=a("fWkr"),j=a("NNZK"),I=a("wQRL"),M=a("1YS8"),R=a("GkIh"),k=a("9uCs"),C=a("vvbN"),T=a("jVoU"),x=a("bdvc"),_=a("CmQz"),A=(a("p6oa"),Object(g.observer)(n=function(e){Object(u.default)(ProgressGift,e);var t=Object(f.default)(ProgressGift);function ProgressGift(){var e;Object(i.default)(this,ProgressGift);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return e=t.call.apply(t,[this].concat(n)),Object(m.default)(Object(c.default)(e),"onClick",(function(){var t=j.a.selectedMissionType,a=j.a.currentMission;T.b.then((function(){if(a.leftCount<=0){var n=k.a.getUserGray(C.a.PROGRESS_GIFT_BOX_SHOW);T.a.dealMissionStore.rewardGain(t,!1,!n).then((function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=a.rewardResult,r=void 0===s?[]:s,i=a.missionInfo,l=void 0===i?{}:i;if(!(r.length<1)){if(j.a.set("rewardResult",r),t===E.h.missionNewProgressGift)return(!l||Object.keys(l).length<1)&&(v.a.removeMissionInfo(t),e.handleReset()),j.a.drawBox(t),void j.a.updateStatus();n&&r.length&&M.a.setPop(R.a.PROGRESS_MISSION_DRAW_POP);var c=e.missionInfo||{},u=Object(o.default)(Object(o.default)({},c),{},{"unifiedStatus":w.b.REACH_LIMIT});v.a.setAllMissions(new Map([[c.missionType,u]])),e.handleReset()}}))}else{if(t===E.h.missionNewProgressGift)return void j.a.toggleGiftBoxPop.open({"mission_type":E.h.missionNewProgressGift,"source":_.e.CLICK});y.a.showPop(t,{"source":_.e.CLICK})}}))})),Object(m.default)(Object(c.default)(e),"handleReset",(function(){j.a.resetStatus(),O.a.set("showProgressGift",!1)})),e}return Object(l.default)(ProgressGift,[{"key":"render","value":function render(){var e=j.a.selectedMissionType,t=j.a.flipStatus,a=j.a.isLimitTime47090,n=j.a.currentMission,o=j.a.targetPosition;if(!e)return h.a.createElement(r.a,null);var i=n||{},l=i.leftCount,c=i.hasFinished,u=i.remainingTime,f=(S.a[e]||{}).unit||"斤",m=o-9<2?2:o-9>80?80:o-9,d=Object(x.k)(l),g=-1/Math.pow(10,d),p=30-o;return h.a.createElement(r.a,{"className":"giftWrapper absolute flex flex-row","style":{"left":"".concat(o,"%"),"WebkitTransform":"translateX(".concat(p,"%)"),"transform":"translateX(".concat(p,"%)")},"onClick":this.onClick},h.a.createElement(r.a,{"className":"iconBox"},h.a.createElement(N.a,{"className":"iconGift","src":Object(G.f)("icon_gift_v2")})),h.a.createElement(r.a,{"className":"info ff-m fl-y text-center text-22 text-8b5"},c?h.a.createElement(r.a,{"className":"collectText"},"可领取"):h.a.createElement(h.a.Fragment,null,h.a.createElement(r.a,{"className":b()("progress",{"hide":!t})},h.a.createElement(r.a,null,"差",h.a.createElement(I.a,{"next":l,"step":g,"renderNumber":function renderNumber(e){return h.a.createElement(s.a,{"className":"num"},e.toFixed(d))}}),f),!a&&h.a.createElement(r.a,null,"可领奖励"),a&&h.a.createElement(r.a,null,h.a.createElement(s.a,{"className":"num"},h.a.createElement(P.a,{"countDown":u,"hasDay":!1,"onDone":this.handleReset})),"失效")),h.a.createElement(r.a,{"className":b()("progress",{"hide":t})},h.a.createElement(r.a,null,h.a.createElement(s.a,{"className":"num"},h.a.createElement(P.a,{"countDown":u,"hasDay":!1,"onDone":this.handleReset})),"后"),h.a.createElement(r.a,null,"奖励失效")))),h.a.createElement(r.a,{"className":"bottomArrow","style":{"left":"".concat(m,"%")}}))}},{"key":"missionInfo","get":function get(){return v.a.originAllMissionMap.get(j.a.selectedMissionType)}}]),ProgressGift}(d.Component))||n);t.default=A}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-ranch/js/lazy_progressGiftIcon_276470c3e3287394cdfb.js.map