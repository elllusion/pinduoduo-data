(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"JP6V":function(e,a,t){},"fdwK":function(e,a,t){},"gWfS":function(e,a,t){"use strict";t.d(a,"a",(function(){return w}));var r,n=t("a+Ds"),o=t("p5LO"),c=t("wzp5"),m=t("w9YI"),l=t("QjaO"),s=t("ZsPb"),i=t("JsaZ"),u=t("q1tI"),d=t.n(u),p=t("TyAF"),b=(t("JP6V"),t("7Qib")),h=t("TSYQ"),g=t.n(h),f=t("ygAv"),E=t("lC+4"),y=t("qEnn"),v={"1":"bounty_game1","2":"bounty_game2","3":"bounty_game3"},w=Object(p.observer)(r=function(e){Object(s.a)(CashGameRecordItem,e);var a=Object(i.a)(CashGameRecordItem);function CashGameRecordItem(){return Object(m.a)(this,CashGameRecordItem),a.apply(this,arguments)}return Object(l.a)(CashGameRecordItem,[{"key":"render","value":function render(){var e=this.props,a=e.avatar,t=e.nickname,r=e.cashAmount,m=e.showBorder,l=e.rank,s=e.isSelf,i=void 0!==s&&s,u=e.highlight,p=void 0!==u&&u,h=e.defaultIndex,w=void 0!==h&&h,C=e.isLast,A=void 0!==C&&C,O=e.rewardCash,j=void 0===O?0:O,k=e.withdrawAmount,R=void 0===k?0:k,N=v[l];return d.a.createElement(o.a,null,d.a.createElement(o.a,{"className":g()("bounty-game-record-item",{"highlight":p,"showBorder":m})},d.a.createElement(o.a,{"className":"bounty-game-record-item-left"},d.a.createElement(o.a,{"className":"bounty-game-record-item-left-index"},N&&!w?d.a.createElement(c.a,{"src":Object(b.a)(N),"className":"bounty-game-record-item-left-index-img"}):l),d.a.createElement(o.a,{"className":"bounty-game-record-item-left-avatar","style":i?{"background":"#FF740D"}:{}},d.a.createElement(c.a,{"className":"bounty-game-record-item-left-avatar-img","src":a})),d.a.createElement(o.a,{"className":"bounty-game-record-item-left-info"},d.a.createElement(o.a,{"className":"bounty-game-record-item-left-info-name"},Object(f.q)(t,10)),d.a.createElement(o.a,{"className":"bounty-game-record-item-left-info-reward"},d.a.createElement(n.a,{"className":"bounty-game-record-item-left-info-reward-text"},j>0?d.a.createElement(E.a,{"text":"奖励<#F74814#".concat(Object(f.A)(j/100),"元>{redpacket%13%}")}):null,R>0&&j>0?d.a.createElement(E.a,{"text":"+"}):null,R>0?d.a.createElement(d.a.Fragment,null,d.a.createElement(E.a,{"text":"".concat(j<=0?"奖励":"","<#34CC5A#微信打款>")}),d.a.createElement(n.a,{"className":"bounty-game-record-item-left-info-withdraw"},d.a.createElement(y.a,{"type":"wechatCash2","size":13}))):null)))),d.a.createElement(o.a,{"className":"bounty-game-record-item-right"},d.a.createElement(n.a,{"className":"bounty-game-record-item-right-text"},"已领"),d.a.createElement(o.a,{"className":"bounty-game-record-item-right-num"},Object(f.A)(r/100),"元"))),A?d.a.createElement(o.a,{"className":"bounty-game-record-item-take-place"}):null)}}]),CashGameRecordItem}(u.Component))||r},"lsUK":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return N}));var r,n=t("wzp5"),o=t("JqEv"),c=t("a+Ds"),m=t("p5LO"),l=t("w9YI"),s=t("QjaO"),i=t("cJQI"),u=t("ZsPb"),d=t("JsaZ"),p=t("MQ17"),b=t("q1tI"),h=t.n(b),g=t("TyAF"),f=(t("fdwK"),t("7Qib")),E=t("gWfS"),y=t("ygAv"),v=t("M3Mi"),w=t("gpDe"),C=t("2oo6"),A=t("ABVw"),O=t("3uR/"),j=t("hn0O"),k=t("klxc"),R=t("ndO7"),N=Object(g.inject)(w.b.CASH_GAME,w.b.POPUP_QUEUE,w.b.GET_MORE_CASH)(r=Object(g.observer)(r=function(e){Object(u.a)(CashGameRecordPopup,e);var a=Object(d.a)(CashGameRecordPopup);function CashGameRecordPopup(){var e;Object(l.a)(this,CashGameRecordPopup);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return e=a.call.apply(a,[this].concat(r)),Object(p.a)(Object(i.a)(e),"onClose",(function(){e.popupQueueStore.close("showCashGameRecordPopup")})),Object(p.a)(Object(i.a)(e),"openRuleAndRecordPopup",(function(a){e.store.tabCurrent=a,e.popupQueueStore.priorityShow("showCashGameRulePopup"),e.popupQueueStore.close("showCashGameRecordPopup")})),Object(p.a)(Object(i.a)(e),"handleBtnclick",(function(){Object(v.a)(6225906),e.getMoreCashStore.showGetMoneyPullUp=!0,e.onClose()})),e}return Object(s.a)(CashGameRecordPopup,[{"key":"componentDidMount","value":function componentDidMount(){var e;Object(v.b)(6225906),null!==(e=this.store.popupVos)&&void 0!==e&&e.find((function(e){return e.popupType===k.a.CASH_GAME}))&&Object(R.I)(k.a.CASH_GAME)}},{"key":"render","value":function render(){var e,a,t=this.store||{},r=t.endTime,l=t.selfInfo,s=t.cashGap,i=t.showTimeVersion2,u=t.playerList,d=l.avatar,p=void 0===d?"":d,b=l.nickName,g=void 0===b?"":b,v=l.cashRaceRewardVo,w=l.rank,k=void 0===w?0:w,R=l.uid,N=void 0===R?"":R,G=l.cashAmount,P=(v||{}).rewardVolist,S=(null==P||null===(e=P.find((function(e){return e.rewardType===j.i.CASH})))||void 0===e?void 0:e.rewardAmount)||0,_=(null==P||null===(a=P.find((function(e){return e.rewardType===j.i.CASH_GAME_WECHAT_WITHDRAW})))||void 0===a?void 0:a.rewardAmount)||0,T=u.length-1,I=Object(y.h)(this.store.remainTime);return h.a.createElement(C.a,{"headerTitle":"领现金竞赛","bannerStyle":{"zIndex":1},"showClose":!0,"onMaskClick":this.onClose,"onClose":this.onClose,"disableContentBg":!0},h.a.createElement(m.a,{"className":"bounty-game-record-rule"},h.a.createElement(m.a,{"onClick":this.openRuleAndRecordPopup.bind(this,0)},"规则"),h.a.createElement(m.a,null,"|"),h.a.createElement(m.a,{"onClick":this.openRuleAndRecordPopup.bind(this,1)},"记录")),h.a.createElement(m.a,{"className":"bounty-game-record"},h.a.createElement(o.a,{"scrollY":!0,"className":"bounty-game-record-center"},h.a.createElement(c.a,{"className":"bounty-game-record-center-title"},"领现金越多，排名越高，奖励越多"),h.a.createElement(m.a,{"className":"bounty-game-record-center-time"},h.a.createElement(c.a,{"className":"bounty-game-record-center-time-desc"},i?"剩余时间：":"竞赛".concat(r,"点截止，仅剩"),h.a.createElement(c.a,{"className":"bounty-game-record-center-time-desc-strong"},I))),u.map((function(e,a){var t,r,n,o=e.avatar,c=void 0===o?"":o,m=e.nickName,l=void 0===m?"":m,s=e.cashRaceRewardVo,i=e.cashAmount,u=void 0===i?0:i,d=e.rank,p=void 0===d?0:d,b=e.uid,g=void 0===b?0:b,f=(s||{}).rewardVolist,y=null==f||null===(t=f.find)||void 0===t||null===(r=t.call(f,(function(e){return e.rewardType===j.i.CASH})))||void 0===r?void 0:r.rewardAmount,v=(null==f||null===(n=f.find((function(e){return e.rewardType===j.i.CASH_GAME_WECHAT_WITHDRAW})))||void 0===n?void 0:n.rewardAmount)||0,w=a===T;return h.a.createElement(E.a,{"key":a,"avatar":c,"nickname":l,"cashAmount":u,"rank":p,"withdrawAmount":v,"rewardCash":y,"showBorder":!w,"isSelf":g===N,"highlight":g===N,"isLast":w})}))),h.a.createElement(m.a,{"className":"bounty-game-record-bottom"},h.a.createElement(E.a,{"avatar":p,"nickname":g,"cashAmount":G,"withdrawAmount":_,"rewardCash":S,"rank":k,"isFixed":!0,"isSelf":!0}),h.a.createElement(n.a,{"src":Object(f.a)("cash_game_record_bottom_line"),"className":"bounty-game-record-bottom-line"}),1!==k?h.a.createElement(c.a,{"className":"bounty-game-record-bottom-text"},"再领",Object(O.o)(s/100),"元排名上升"):h.a.createElement(c.a,{"className":"bounty-game-record-bottom-text"},"继续领现金，保持第一"),h.a.createElement(A.b,{"type":A.a.PopupPrize,"text":"继续领现金","onClick":this.handleBtnclick}))))}},{"key":"getMoreCashStore","get":function get(){return this.props[w.b.GET_MORE_CASH]}},{"key":"store","get":function get(){return this.props[w.b.CASH_GAME]}},{"key":"popupQueueStore","get":function get(){return this.props[w.b.POPUP_QUEUE]}}]),CashGameRecordPopup}(b.Component))||r)||r}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-fit/js/FitV2Popups-CashGameRecordPopup_ad1c9e002f68d98fbfa0.js.map