(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{"ca+k":function(e,a,t){},"tXPW":function(e,a,t){"use strict";t.r(a);var n,r=t("brQG"),o=t("p5LO"),l=t("1OyB"),c=t("vuIU"),d=t("JX7q"),i=t("Ji7U"),s=t("LK+K"),f=t("rePB"),m=t("q1tI"),u=t.n(m),p=t("TyAF"),b=t("TSYQ"),g=t.n(b),h=t("/7YU"),v=t("0AfJ"),k=t("hUSN"),w=t("q0O3"),E=t("PS6B"),N=t("gDy5"),O=(t("ca+k"),t("FoPm")),R=Object(p.observer)(n=function(e){Object(i.default)(RanchGradeInfoPop,e);var a=Object(s.default)(RanchGradeInfoPop);function RanchGradeInfoPop(){var e;Object(l.default)(this,RanchGradeInfoPop);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e=a.call.apply(a,[this].concat(n)),Object(f.default)(Object(d.default)(e),"closePop",(function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];k.b.toggleGradeInfoPop.close(e)})),Object(f.default)(Object(d.default)(e),"mainBtnClick",(function(){w.default.feedStore.feed(),e.closePop(!1)})),Object(f.default)(Object(d.default)(e),"handleGiftBoxOpen",(function(){var a=k.b.giftBoxCount,t=void 0===a?0:a,n=k.b.gradeData;if(!(t<=0)){var r=(n||{}).rewardMultiple,o=void 0!==r&&r;e.closePop(!1),k.b.toggleGiftBoxPop(),o?k.b.queryDoubleReward():k.b.gainGiftReward().then((function(e){e&&w.default.updateFoodAndAnimal(e)}))}})),Object(f.default)(Object(d.default)(e),"handleUpgradeDraw",(function(){k.b.gainRanchGradeUpgradeReward().then((function(e){e&&(w.default.updateFoodAndAnimal(e),w.default.dealMissionStore.showRewardResult(0,e))}))})),Object(f.default)(Object(d.default)(e),"handleRankListNavi",(function(){e.closePop(!1),k.b.toggleRankListPop()})),Object(f.default)(Object(d.default)(e),"getHeadFrame",(function(e){var a=k.b.ranchGradeConfig,t=a.gap,n=void 0===t?10:t,r=a.popHeadFrame,o=void 0===r?{}:r;return o[Math.ceil(e/n)]||o.default||"ranch_level_pop"})),e}return Object(c.default)(RanchGradeInfoPop,[{"key":"componentDidMount","value":function componentDidMount(){k.b.haveRank&&k.b.getLeaderBoardList()}},{"key":"render","value":function render(){var e=k.b.isShow,a=void 0!==e&&e,t=k.b.currGrade,n=void 0===t?0:t,l=k.b.currExp,c=void 0===l?0:l,d=k.b.giftBoxCount,i=void 0===d?0:d,s=k.b.isAutoPop,f=void 0!==s&&s,m=k.b.worldRankList,p=void 0===m?[]:m,b=k.b.upgradeRankList,w=void 0===b?[]:b,R=k.b.upgradeRankSelf,P=k.b.upgradeRankHasUpdate,j=k.b.todayUpgradeHasDraw,x=k.b.ranchGradeConfig,G=k.b.showUpgradeRank,B=n>999,I=n>99&&n<1e3,L=this.getHeadFrame(n),y=(100-c).toFixed(2),U=G&&P?w.slice(0,3):p.slice(0,3),C=G&&P?R:{},D=G&&P&&!j&&R.onLeaderBoard&&R.rank>3,A=O.a.mainAnimalName;return a?u.a.createElement(h.a,{"isShow":!0,"bgImg":"grade_pop_board","close":this.closePop,"cls":g()("gradePopWrapper",{"top-mo":!!U.length})},u.a.createElement(o.a,null,f&&u.a.createElement(N.a,{"text":"喂食成功，仅差".concat(y,"%可升级")}),u.a.createElement(o.a,{"className":"gradeIcon","style":{"backgroundImage":"url(".concat(Object(E.f)(L),")")}},u.a.createElement(o.a,{"className":g()("grade ff-s",{"small":B},{"medium":I})},n)),u.a.createElement(o.a,{"className":g()("contentBody")},u.a.createElement(o.a,{"className":"mb-4 text-36 ff-m"},"喂食或用高产",A,"可涨升级进度"),u.a.createElement(o.a,{"className":"mb-56 text-28"},"宝箱可开出饲料、高产",A,"和现金"),u.a.createElement(o.a,{"className":"progressInfo"},"还差",u.a.createElement(r.a,{"className":"text-fb7"},y,"%"),"升级开宝箱"),u.a.createElement(o.a,{"className":"relative mb-56 px-22"},u.a.createElement(o.a,{"className":"progressBar"},u.a.createElement(o.a,{"className":"progressInner","style":{"width":"".concat(c,"%")}},u.a.createElement(o.a,{"className":"head bg-init"}))),u.a.createElement(o.a,{"className":g()("giftbox bg-init",{"canDraw":i>0}),"onClick":this.handleGiftBoxOpen}),i>0&&u.a.createElement(o.a,{"className":"topTip ff-m"},"可开x",i)),u.a.createElement(o.a,{"className":"btn-normal-v2","onClick":this.mainBtnClick},"去喂食")),!!U.length&&u.a.createElement(o.a,{"className":"giftBoxWrapper absolute bg-init fl-y flex-col"},u.a.createElement(o.a,{"className":"rankTitle ff-m"},P?"昨日升级":"世界","前三名"),u.a.createElement(o.a,{"className":"rankList"},u.a.createElement(v.a,{"rankListData":U,"selfRank":C,"ranchGradeConfig":x,"seperateLine":!1,"isUpgrade":P,"showExtraSelf":!1,"onUpgradeDraw":this.handleUpgradeDraw})),u.a.createElement(o.a,{"className":"naviRankList","onClick":this.handleRankListNavi},w.length>0&&"每天升级数前".concat(w.length,"名可领奖，"),"查看完整排行",D&&u.a.createElement(o.a,{"className":"drawBadge"},"可领奖"))))):null}}]),RanchGradeInfoPop}(m.Component))||n;a.default=R}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-ranch/js/lazy_ranchGradeInfoPop_a89cefcc20153d60a0bc.js.map