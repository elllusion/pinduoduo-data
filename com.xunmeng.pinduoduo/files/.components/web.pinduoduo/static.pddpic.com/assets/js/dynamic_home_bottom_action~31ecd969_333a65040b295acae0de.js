(window.ReadWeJsonp=window.ReadWeJsonp||[]).push([[14],{"HYPu":function(e,t,a){"use strict";a.r(t);var n,o,c,i,l,r,u,s,m,b,d,f=a("p5LO"),O=a("a3ss"),p=a("1OyB"),T=a("vuIU"),h=a("JX7q"),j=a("Ji7U"),E=a("LK+K"),N=a("rePB"),k=a("Y65e"),y=(a("+JCI"),a("SATD")),_=a("TyAF"),v=a("q1tI"),H=a.n(v),S=a("1Vsq"),A=a("9/K0"),C="_GJpmM86",w="_15qlbZt",I="_2gzhx51",g="_3uTMUdG",M="_2-c_KN3",R="_39ltQVY",B="_NBWm6P8",D="_1mO4ht-",U="_3PTeg2M",x="_1XqZwms",K=a("TSYQ"),P=a.n(K),F=a("Be24"),L=a("YwUQ"),Y=a("Q/z/"),W=a("cmhe"),z=a("jY+O"),q=a("4bvG"),J=a("bdvc"),G=a("TkKq"),Q="_3GxzDIo",X="_1w87YyQ",V="_1Y6xFPA",Z="_2SBT8h9",$="_3U5tWCc",ee="_upo6eSt",te="_3fejvAa",ae=a("d7Jr"),ne=a("FpOS"),oe=(n=Object(q.b)(1e3),Object(_.observer)((c=function(e){Object(j.default)(HomeUpdateReminder,e);var t=Object(E.default)(HomeUpdateReminder);function HomeUpdateReminder(){var e;Object(p.default)(this,HomeUpdateReminder);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return e=t.call.apply(t,[this].concat(n)),Object(O.a)(Object(h.default)(e),"handleClick",i,Object(h.default)(e)),e}return Object(T.default)(HomeUpdateReminder,[{"key":"componentDidMount","value":function componentDidMount(){Object(ae.b)(ne.c.BOTTOM_UPDATE_REMINDER)}},{"key":"render","value":function render(){var e=y.b.isIphoneX,t=G.a.updateNotifyData||{},a=t.coverUrl,n=t.title,o=void 0===n?"":n,c=t.newestTitle,i=void 0===c?"":c,l=Object(J.k)(o,6),r=Object(J.k)(i,8);return H.a.createElement(f.a,{"className":P()(Q,Object(N.default)({},X,e)),"onClick":this.handleClick},!!a&&H.a.createElement(Y.a,{"src":a,"className":V}),H.a.createElement(f.a,{"className":Z},H.a.createElement(f.a,{"className":$},"你阅读过的《",l,"》更新啦"),H.a.createElement(f.a,{"className":ee},"已更新至",r,"，点击立即阅读")),H.a.createElement(W.a,{"fontName":"more","className":te}))}}]),HomeUpdateReminder}(v.Component),i=Object(k.a)(c.prototype,"handleClick",[n],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){return function(){Object(ae.a)(ne.c.BOTTOM_UPDATE_REMINDER);var e=(G.a.updateNotifyData||{}).bidStr;e&&(z.b.gotoReadPage({"bidStr":e}),G.a.updateNotifyData=void 0)}}}),o=c))||o),ce=a("XS0u"),ie=a("F/z+"),le=a("pArG"),re=a("AKEH"),ue=a("vHnQ"),se=a("HIM3"),me=a("k/Ow"),be=a("6PEw"),de=a("2vnA"),fe="_3lmF_6K",Oe=me.i.CASH_READING_GET_CASH,pe=me.i.CASH_COMPETITION,Te=(me.i.CASH_SERIAL_READ,Object(_.observer)((r=function(e){Object(j.default)(HomeMissionTag,e);var t=Object(E.default)(HomeMissionTag);function HomeMissionTag(){return Object(p.default)(this,HomeMissionTag),t.apply(this,arguments)}return Object(T.default)(HomeMissionTag,[{"key":"render","value":function render(){return this.tagText?H.a.createElement(f.a,{"className":fe},this.tagText):null}},{"key":"tagText","get":function get(){if(se.b.getMissionInfo(pe).status===me.g.progressing)return"领现金";var e=se.b.getMissionInfo(Oe),t=e.status,a=e.extMap;return t===me.g.drawable?(a||{}).showWechat?"提现":"领现金":be.a.hasSerialReadCash?"提现":void 0}}]),HomeMissionTag}(v.Component),Object(k.a)(r.prototype,"tagText",[de.computed],Object.getOwnPropertyDescriptor(r.prototype,"tagText"),r.prototype),l=r))||l),he=a("3fu3"),je=a("OC/r"),Ee=a("MKeS"),Ne=a("SHjl"),ke=a("gQ0k"),ye=a("guv2"),_e="_3yq7imM",ve="_2NRjkhJ",He="_2ZunYxx",Se="_3k1gx4t",Ae=a("o0o1"),Ce=a.n(Ae),we=a("HaE+"),Ie=a("Y9WU"),ge=a("ofKo"),Me="_3VhK9Pe",Re="_2EjfqiC",Be="_1YvklSr",De=Object(_.observer)(u=function(e){Object(j.default)(HomeNotifyHeader,e);var t=Object(E.default)(HomeNotifyHeader);function HomeNotifyHeader(){var e;Object(p.default)(this,HomeNotifyHeader);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return e=t.call.apply(t,[this].concat(n)),Object(N.default)(Object(h.default)(e),"handleClickHome",Object(we.default)(Ce.a.mark((function _callee(){var e;return Ce.a.wrap((function _callee$(t){for(;;)switch(t.prev=t.next){case 0:if(y.b.hubInit){t.next=4;break}return z.b.goBack(),t.abrupt("return");case 4:if(e=he.a.cashExitHomePopControlStore||{},!e.canShowPop){t.next=11;break}return t.next=8,he.b;case 8:he.a.cashExitHomePopControlStore.showExitHomePop(),t.next=12;break;case 11:z.b.goBack();case 12:case"end":return t.stop()}}),_callee)})))),e}return Object(T.default)(HomeNotifyHeader,[{"key":"render","value":function render(){return H.a.createElement(ge.a,{"className":Me,"bottomLine":!0},H.a.createElement(f.a,{"className":Re},H.a.createElement(Ie.a,{"onClick":this.handleClickHome}),H.a.createElement(f.a,{"className":Be},"通知公告")))}}]),HomeNotifyHeader}(v.Component))||u,Ue=Object(_.observer)(s=function(e){Object(j.default)(HomeNotify,e);var t=Object(E.default)(HomeNotify);function HomeNotify(){return Object(p.default)(this,HomeNotify),t.apply(this,arguments)}return Object(T.default)(HomeNotify,[{"key":"render","value":function render(){var e=y.b.userInfo||{},t=e.blankEndTime,a=void 0===t?0:t,n=e.blankStartTime,o=void 0===n?Date.now():n,c=Object(re.f)(a),i=c.year,l=c.month,r=c.day,u=c.hour,s=c.minute,m="".concat(i,"年").concat(l,"月").concat(r,"日").concat(u,"时").concat(s,"分"),b=Object(re.f)(o),d=b.year,O=b.month,p=b.day,T=b.hour,h=b.minute,j="".concat(d,"年").concat(O,"月").concat(p,"日").concat(T,"时").concat(h,"分");return H.a.createElement(f.a,null,H.a.createElement(De,null),H.a.createElement(f.a,{"className":_e},H.a.createElement(f.a,{"className":ve},"尊敬的各位小说读者："),H.a.createElement(f.a,{"className":He},"感谢大家一直以来的支持与喜爱，由于活动调整，我们将于",m,"停止小说功能服务。具体安排如下："),H.a.createElement(f.a,{"className":He},"1、",j,"起：停止账号注册、会员充值、书籍购买等服务；"),H.a.createElement(f.a,{"className":He},"2、",m,"前：已购买的权益在仍可正常使用；"),H.a.createElement(f.a,{"className":He},"3、",j,"起：停止阅读得红包、浏览解锁章节等奖励活动；"),H.a.createElement(f.a,{"className":He},"我们将于",m,"停止运营，届时及以后将无法登录。对此给大家带来的不便，我们深表歉意，期待与您的下一次相遇！"),H.a.createElement(f.a,{"className":Se},"看小说赚钱活动")))}}]),HomeNotify}(v.Component))||s,xe=Object(Ee.a)((function(){return Promise.all([a.e(2),a.e(1),a.e(0),a.e(17)]).then(a.bind(null,"gY9t"))}),{"fallback":H.a.createElement(Ne.a,null)}),Ke=Object(Ee.a)((function(){return Promise.all([a.e(2),a.e(1),a.e(0),a.e(16)]).then(a.bind(null,"tAN4"))}),{"fallback":H.a.createElement(Ne.a,null)}),Pe=Object(_.observer)((b=function(e){Object(j.default)(HomeWithBottomAction,e);var t=Object(E.default)(HomeWithBottomAction);function HomeWithBottomAction(){var e;Object(p.default)(this,HomeWithBottomAction);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return e=t.call.apply(t,[this].concat(n)),Object(N.default)(Object(h.default)(e),"sto",void 0),Object(N.default)(Object(h.default)(e),"sto2",void 0),Object(N.default)(Object(h.default)(e),"clickTimeStamp",0),Object(O.a)(Object(h.default)(e),"handleClickRecent",d,Object(h.default)(e)),Object(N.default)(Object(h.default)(e),"handleClickBookList",(function(){A.a.bottomActionType!==S.b.BOOK_LIST?(A.a.bottomActionType=S.b.BOOK_LIST,Object(ae.a)(ne.c.BOTTOM_BOOK_LIST)):(e.clickTimeStamp&&Date.now()-e.clickTimeStamp<500&&(he.a.homeStore.refreshUserLikeList(),je.a.setScrollTop(0)),e.clickTimeStamp=Date.now())})),Object(N.default)(Object(h.default)(e),"handleClickMission",(function(){A.a.bottomActionType!==S.b.MISSION&&(A.a.bottomActionType=S.b.MISSION,Object(ae.a)(ne.c.BOTTOM_MISSION))})),Object(N.default)(Object(h.default)(e),"handleClickMustRead",(function(){A.a.bottomActionType!==S.b.BOOK_MUST_READ&&(A.a.bottomActionType=S.b.BOOK_MUST_READ)})),Object(N.default)(Object(h.default)(e),"handleClickNotify",(function(){A.a.bottomActionType!==S.b.NOTIFY&&(A.a.bottomActionType=S.b.NOTIFY)})),Object(N.default)(Object(h.default)(e),"checkFirstShow",(function(){Object(ce.a)(ie.c)||(Object(ce.c)(ie.c,1),G.a.showFirstTip=!0,e.sto&&clearTimeout(e.sto),e.sto=window.setTimeout((function(){G.a.showFirstTip=!1}),3e3))})),Object(N.default)(Object(h.default)(e),"checkRecentRead",(function(){G.a.getRemindBookConfig().then((function(){var t=G.a.remindBookUpdate,a=Object(ce.a)(ie.b);if(t&&(!a||!Object(re.i)(a,ue.a.serverTime))){var n=L.a.updateBook;n&&(Object(ce.c)(ie.b,ue.a.serverTime),Object(de.runInAction)((function(){G.a.updateNotifyData=n,G.a.showUpdateTag=!0})),e.sto2&&clearTimeout(e.sto2),e.sto2=window.setTimeout((function(){G.a.updateNotifyData=void 0}),5e3))}}))})),Object(N.default)(Object(h.default)(e),"renderTips",(function(){return H.a.createElement(f.a,{"className":x},"已加入书架的书籍搬到这里啦")})),e}return Object(T.default)(HomeWithBottomAction,[{"key":"componentWillUnmount","value":function componentWillUnmount(){this.sto&&clearTimeout(this.sto),this.sto2&&clearTimeout(this.sto2),G.a.updateNotifyData=void 0,G.a.showFirstTip=!1}},{"key":"componentDidMount","value":function componentDidMount(){this.checkFirstShow(),this.checkRecentRead(),Object(ae.b)(ne.c.BOTTOM_BOOK_LIST),Object(ae.b)(ne.c.BOTTOM_MISSION),Object(ae.b)(ne.c.BOTTOM_RECENT_READ)}},{"key":"render","value":function render(){var e=ye.a.showListenBookIcon,t=ye.a.ttsIosBiz,a=A.a.bottomActionType,n=L.a.isEdit,o=y.b.isIphoneX,c=y.b.isBlankUser,i=G.a.showFirstTip,l=G.a.updateNotifyData,r=G.a.showUpdateTag;return H.a.createElement(H.a.Fragment,null,a===S.b.BOOK_LIST?H.a.createElement(F.a,null):a===S.b.RECENT_READ?H.a.createElement(xe,null):a===S.b.MISSION?H.a.createElement(Ke,null):a===S.b.NOTIFY?H.a.createElement(Ue,null):null,n?null:H.a.createElement(f.a,{"className":P()(C,Object(N.default)({},w,o))},H.a.createElement(le.a,{"renderTip":this.renderTips,"placement":"topLeft","arrowCenter":!0,"show":i},H.a.createElement(f.a,{"className":P()(I,g,Object(N.default)({},M,a===S.b.RECENT_READ)),"onClick":this.handleClickRecent},"最近阅读",r?H.a.createElement(f.a,{"className":R}):null)),H.a.createElement(f.a,{"className":P()(I,B,Object(N.default)({},M,a===S.b.BOOK_LIST)),"onClick":this.handleClickBookList},"书城"),c?H.a.createElement(f.a,{"className":P()(I,U,Object(N.default)({},M,a===S.b.NOTIFY)),"onClick":this.handleClickNotify},"通知公告"):H.a.createElement(f.a,{"className":P()(I,D,Object(N.default)({},M,a===S.b.MISSION)),"onClick":this.handleClickMission},"福利",H.a.createElement(Te,null))),l?H.a.createElement(oe,null):null,e&&t?H.a.createElement(ke.default,null):null)}}]),HomeWithBottomAction}(v.Component),d=Object(k.a)(b.prototype,"handleClickRecent",[de.action],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){var e=this;return function(){A.a.bottomActionType!==S.b.RECENT_READ&&(A.a.bottomActionType=S.b.RECENT_READ,G.a.showUpdateTag=!1,e.sto&&clearTimeout(e.sto),G.a.showFirstTip=!1,Object(ae.a)(ne.c.BOTTOM_RECENT_READ))}}}),m=b))||m;t.default=Pe}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-fun-read/js/dynamic_home_bottom_action~31ecd969_333a65040b295acae0de.js.map