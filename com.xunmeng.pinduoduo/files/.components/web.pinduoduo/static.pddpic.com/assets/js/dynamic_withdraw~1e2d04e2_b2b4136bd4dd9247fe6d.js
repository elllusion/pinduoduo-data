(window.ReadWeJsonp=window.ReadWeJsonp||[]).push([[45],{"0Rcp":function(e,a,t){"use strict";t.r(a);var n,r,c,o,l,i,s,u,m,b,d,f,p,h,O,j,y=t("JqEv"),v=t("CwhG"),w=t("a+Ds"),_=t("p5LO"),E=t("a3ss"),g=t("1OyB"),N=t("vuIU"),C=t("JX7q"),T=t("Ji7U"),I=t("LK+K"),x=t("rePB"),S=t("Y65e"),W=(t("+JCI"),t("q1tI")),k=t.n(W),L=t("TyAF"),B="_XHZ-dJL",R="_3GSf3Ki",M="_d4h1Gs_",z="_1yEbaYh",A="_374tJBZ",D="_1ucM0fE",q="_9AqTy2l",H="_2uLjcFx",P="_2ejd7h1",U="_3cVdpr2",V="_2ubMWhg",G="_2KH2eK4",J="_1nO_sJh",K="_3WRYSs0",Y="_ZA7wfOH",X="_2j5Aut8",Q="_2Rpd-qR",F="_1y8i-YU",Z="_3Uiuva2",$="_3SonLH2",ee="_hXTOEGO",ae="_3HRGVJM",te="_3T2CcSW",ne="_1r2jbwi",re="_1W8mW21",ce="_pV4GVyj",oe="_3jLtuLK",le="_2UaDpQm",ie="_13mqU_x",se="_3_zkHNU",ue="_3DEo66_",me="_tCpqAC2",be="_2KdBEnM",de="_3zCww8_",fe="_3FysC_O",pe="_2xt4lln",he="_2gy-6RX",Oe="_2fwCx5m",je="_IuhQ0Nt",ye="_8BFOLzw",ve="_3V-KwVb",we="_3f8s72e",_e="_2SDa_YM",Ee="_1U-i3I6",ge="_OH_z6MD",Ne=t("4bvG"),Ce=t("W1Es"),Te=t("SATD"),Ie=t("KQm4"),xe=t("o0o1"),Se=t.n(xe),We=t("HaE+"),ke=t("2vnA"),Le=t("g4sS"),Be=t("TRXh"),Re=t("Be8r"),Me=t("zXC5"),ze=t("ctgs"),Ae=t("tKRR"),De=t("vHnQ"),qe=new(n=function(e){Object(T.default)(WithdrawStore,e);var a,t,n,m,b=Object(I.default)(WithdrawStore);function WithdrawStore(){var e;Object(g.default)(this,WithdrawStore);for(var a=arguments.length,t=new Array(a),n=0;n<a;n++)t[n]=arguments[n];return e=b.call.apply(b,[this].concat(t)),Object(E.a)(Object(C.default)(e),"coin",r,Object(C.default)(e)),Object(E.a)(Object(C.default)(e),"moneyList",c,Object(C.default)(e)),Object(E.a)(Object(C.default)(e),"cardList",o,Object(C.default)(e)),Object(E.a)(Object(C.default)(e),"barrageList",l,Object(C.default)(e)),Object(E.a)(Object(C.default)(e),"moneyItem",i,Object(C.default)(e)),Object(E.a)(Object(C.default)(e),"showConfirm",s,Object(C.default)(e)),Object(E.a)(Object(C.default)(e),"scrollTop",u,Object(C.default)(e)),e}return Object(N.default)(WithdrawStore,[{"key":"queryPageInfo","value":(m=Object(We.default)(Se.a.mark((function _callee(){var e,a,t,n,r,c,o,l=this;return Se.a.wrap((function _callee$(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,Object(Re.k)();case 3:e=i.sent,a=e.readCoin,t=void 0===a?0:a,n=e.moneyList,r=void 0===n?[]:n,c=e.cardList,o=void 0===c?[]:c,Object(ke.runInAction)((function(){l.coin=t,l.moneyList=r,l.cardList=o,Te.b.setReadCoin(t)})),i.next=16;break;case 13:i.prev=13,i.t0=i.catch(0),Be.a.showToast("请稍后试试");case 16:case"end":return i.stop()}}),_callee,null,[[0,13]])}))),function queryPageInfo(){return m.apply(this,arguments)})},{"key":"exchangeMoney","value":(n=Object(We.default)(Se.a.mark((function _callee2(){var e,a,t,n,r,c,o,l,i,s,u,m,b=this;return Se.a.wrap((function _callee2$(d){for(;;)switch(d.prev=d.next){case 0:return d.prev=0,e=this.moneyItem,a=e.exchangeId,t=void 0===a?-1:a,n=e.money,r=void 0===n?0:n,d.next=4,Object(Re.i)(t);case 4:c=d.sent,o=c.readCoin,l=void 0===o?0:o,i=c.status,s=c.leftReadTime,u=void 0===s?0:s,i===Re.a.SUCCESS?(Me.a.openWithData(r),Object(ke.runInAction)((function(){b.coin=l,Te.b.setReadCoin(l)}))):i===Re.a.NO_PORTION?Be.a.showToast("今日提现已抢光，请明日再来"):i===Re.a.ALREADY_DRAW?Be.a.showToast("每日仅可提现一次，请明日再来"):i===Re.a.READ_TIME_NOT_ENOUGH?(m=Math.ceil(u/3600),Be.a.showToast("还需阅读".concat(m,"小时即可提现"))):Be.a.showToast("请稍后试试"),d.next=16;break;case 13:d.prev=13,d.t0=d.catch(0),Be.a.showToast("请稍后试试");case 16:case"end":return d.stop()}}),_callee2,this,[[0,13]])}))),function exchangeMoney(){return n.apply(this,arguments)})},{"key":"exchangeVipCard","value":(t=Object(We.default)(Se.a.mark((function _callee3(e){var a,t,n,r,c,o,l,i,s,u=this;return Se.a.wrap((function _callee3$(m){for(;;)switch(m.prev=m.next){case 0:if(m.prev=0,a=e.cardTime,t=e.exchangeId,n=void 0===t?-1:t,!((void 0===(r=e.coin)?0:r)>this.coin)){m.next=5;break}return Be.a.showToast("当前书币不足,去阅读赚更多书币吧"),m.abrupt("return");case 5:return m.next=7,Object(Re.l)(n);case 7:c=m.sent,o=c.readCoin,l=void 0===o?0:o,i=c.status,s=c.infiniteCardEndTime,i===Re.c.SUCCESS?Object(ke.runInAction)((function(){u.coin=l,Te.b.setInfiniteCard(s),ze.a.openWithData(a)})):Be.a.showToast("请稍后试试"),m.next=18;break;case 15:m.prev=15,m.t0=m.catch(0),Be.a.showToast("请稍后试试");case 18:case"end":return m.stop()}}),_callee3,this,[[0,15]])}))),function exchangeVipCard(e){return t.apply(this,arguments)})},{"key":"queryBarrageInfo","value":(a=Object(We.default)(Se.a.mark((function _callee4(){var e,a,t=this;return Se.a.wrap((function _callee4$(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(Ae.d)({"eventType":Ae.a.WITHDRAW_BARRAGE,"showScene":Ae.b.NORMAL});case 3:e=n.sent,a=e.result,Object(ke.runInAction)((function(){a.forEach((function(e){var a=Math.floor((De.a.serverTime-e.timestamp)/3600/24/1e3);if(a>0)e.dayBeforeToday="".concat(a,"天");else{var t=Math.floor((De.a.serverTime-e.timestamp)/3600/1e3);t<1&&(t=1),e.dayBeforeToday="".concat(t,"小时")}})),t.barrageList=Object(Ie.default)(a)})),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),Be.a.showToast("请稍后试试");case 11:case"end":return n.stop()}}),_callee4,null,[[0,8]])}))),function queryBarrageInfo(){return a.apply(this,arguments)})},{"key":"bottomLine","get":function get(){return this.scrollTop>1}}]),WithdrawStore}(Le.a),r=Object(S.a)(n.prototype,"coin",[ke.observable],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){return 0}}),c=Object(S.a)(n.prototype,"moneyList",[ke.observable],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){return[]}}),o=Object(S.a)(n.prototype,"cardList",[ke.observable],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){return[]}}),l=Object(S.a)(n.prototype,"barrageList",[ke.observable],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){return[]}}),i=Object(S.a)(n.prototype,"moneyItem",[ke.observable],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){return{}}}),s=Object(S.a)(n.prototype,"showConfirm",[ke.observable],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){return!1}}),u=Object(S.a)(n.prototype,"scrollTop",[ke.observable],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){return 0}}),Object(S.a)(n.prototype,"bottomLine",[ke.computed],Object.getOwnPropertyDescriptor(n.prototype,"bottomLine"),n.prototype),Object(S.a)(n.prototype,"queryPageInfo",[ke.action],Object.getOwnPropertyDescriptor(n.prototype,"queryPageInfo"),n.prototype),Object(S.a)(n.prototype,"exchangeMoney",[ke.action,Ne.a],Object.getOwnPropertyDescriptor(n.prototype,"exchangeMoney"),n.prototype),Object(S.a)(n.prototype,"exchangeVipCard",[ke.action],Object.getOwnPropertyDescriptor(n.prototype,"exchangeVipCard"),n.prototype),Object(S.a)(n.prototype,"queryBarrageInfo",[ke.action],Object.getOwnPropertyDescriptor(n.prototype,"queryBarrageInfo"),n.prototype),n),He=t("bdvc"),Pe=t("ROn2"),Ue="_1GjNZJP",Ve="_3a9U2f-",Ge="_3TQhy8G",Je="_1aaAmDp",Ke=Object(L.observer)(m=function(e){Object(T.default)(CashBarrage,e);var a=Object(I.default)(CashBarrage);function CashBarrage(){var e;Object(g.default)(this,CashBarrage);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e=a.call.apply(a,[this].concat(n)),Object(x.default)(Object(C.default)(e),"state",{"pos":0}),Object(x.default)(Object(C.default)(e),"sti",void 0),Object(x.default)(Object(C.default)(e),"sto",void 0),Object(x.default)(Object(C.default)(e),"startBarrage",(function(){var a=e.state.pos,t=qe.barrageList,n=void 0===t?[]:t;e.setState({"pos":(a+1)%n.length})})),e}return Object(N.default)(CashBarrage,[{"key":"componentDidMount","value":function componentDidMount(){var e=this;qe.queryBarrageInfo().then((function(){e.startBarrage(),e.sto=window.setTimeout((function(){e.startBarrage(),e.sti=window.setInterval((function(){e.startBarrage()}),5e3)}),4e3)}))}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.sti&&clearInterval(this.sti),this.sto&&clearTimeout(this.sto)}},{"key":"render","value":function render(){var e,a=qe.barrageList,t=void 0===a?[]:a;if(0===t.length)return null;var n=t[this.state.pos]||{},r=n.avatar,c=n.nickname,o=n.content,l=void 0===o?[]:o,i=n.dayBeforeToday;return k.a.createElement(_.a,{"className":Ue},k.a.createElement(_.a,{"className":Ve},r&&k.a.createElement(v.a,{"className":Ge,"src":r}),k.a.createElement(w.a,{"className":Je},"".concat(Object(He.k)(c,8)," ").concat(i,"前").concat(null===(e=l[0])||void 0===e?void 0:e.content))))}}]),CashBarrage}(W.PureComponent))||m,Ye=t("vZ4y"),Xe=t("NlLh"),Qe=t("CsJ+"),Fe=t("TSYQ"),Ze=t.n(Fe),$e="_cu2Gd3R",ea="_1xKwUyi",aa="_1uQbWgX",ta=t("ofKo"),na=t("jY+O"),ra=t("Gz0K"),ca=t("Y9WU"),oa=Object(L.observer)(b=function(e){Object(T.default)(ScrollHeader,e);var a=Object(I.default)(ScrollHeader);function ScrollHeader(){var e;Object(g.default)(this,ScrollHeader);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e=a.call.apply(a,[this].concat(n)),Object(x.default)(Object(C.default)(e),"handleBack",(function(){na.b.goBack()})),Object(x.default)(Object(C.default)(e),"handleShowRule",(function(){ra.a.open()})),e}return Object(N.default)(ScrollHeader,[{"key":"render","value":function render(){var e=qe.bottomLine;return k.a.createElement(ta.a,{"bottomLine":e},k.a.createElement(_.a,{"className":$e},k.a.createElement(ca.a,{"onClick":this.handleBack}),k.a.createElement(_.a,{"className":aa},"我的书币"),k.a.createElement(_.a,{"className":ea,"onClick":this.handleShowRule},"规则")))}}]),ScrollHeader}(W.Component))||b,la=t("e5OJ"),ia=t("HIM3"),sa=(d=Object(Ne.b)(1e3),f=Object(Ne.b)(1e3),Object(L.observer)((h=function(e){Object(T.default)(Withdraw,e);var a=Object(I.default)(Withdraw);function Withdraw(){var e;Object(g.default)(this,Withdraw);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e=a.call.apply(a,[this].concat(n)),Object(E.a)(Object(C.default)(e),"exchangeVipCard",O,Object(C.default)(e)),Object(E.a)(Object(C.default)(e),"exchangeMoney",j,Object(C.default)(e)),Object(x.default)(Object(C.default)(e),"onCancelWithdraw",(function(){qe.set({"moneyItem":{},"showConfirm":!1})})),Object(x.default)(Object(C.default)(e),"onConfirmWithdraw",(function(){qe.set({"showConfirm":!1}),qe.exchangeMoney().then((function(){qe.queryPageInfo()}))})),Object(x.default)(Object(C.default)(e),"handleShowRecord",(function(){Pe.b.openRecord()})),Object(x.default)(Object(C.default)(e),"handleScroll",(function(e){var a=e.detail.scrollTop;qe.set({"scrollTop":a})})),e}return Object(N.default)(Withdraw,[{"key":"componentDidMount","value":function componentDidMount(){qe.queryPageInfo()}},{"key":"render","value":function render(){var e=this,a=qe.coin,t=qe.moneyList,n=qe.cardList,r=qe.showConfirm,c=qe.moneyItem,o=Te.b.isIphoneX,l=la.a.vipDay,i=la.a.vipHour;return k.a.createElement(_.a,{"className":B},k.a.createElement(y.a,{"scrollY":!0,"className":R,"onScroll":this.handleScroll},k.a.createElement(oa,null),k.a.createElement(_.a,{"className":M},k.a.createElement(Ke,null),k.a.createElement(_.a,{"className":z},"我的书币"),k.a.createElement(_.a,{"className":A},k.a.createElement(_.a,{"className":D},k.a.createElement(_.a,{"className":Ze()(H,Object(x.default)({},P,a>1e4))},Object(He.w)(a)),k.a.createElement(_.a,{"className":U}),k.a.createElement(_.a,{"className":V},"可兑换",Object(He.x)(a),"元")),k.a.createElement(_.a,{"className":q,"onClick":this.handleShowRecord},k.a.createElement(_.a,{"className":G},"明细"),k.a.createElement(_.a,{"className":J})))),k.a.createElement(_.a,{"className":K}),k.a.createElement(_.a,{"className":Y},k.a.createElement(_.a,{"className":X},k.a.createElement(_.a,{"className":Q},"书币兑换畅读时长"),k.a.createElement(_.a,{"className":F},"畅读卡剩余: ",k.a.createElement(w.a,{"className":Z},l),"天",k.a.createElement(w.a,{"className":Z},i),"时")),k.a.createElement(_.a,{"className":$},k.a.createElement(v.a,{"src":Object(Ce.a)("vip_card_book"),"className":ee}),k.a.createElement(w.a,{"className":te},"小说免费读"),k.a.createElement(_.a,{"className":ae}),k.a.createElement(v.a,{"src":Object(Ce.a)("vip_card_no_ad"),"className":ee}),k.a.createElement(w.a,{"className":te},"看书免广告")),k.a.createElement(_.a,{"className":ne},n.map((function(a){var t=a.coin,n=a.exchangeId,r=a.cardTime,c=Number((void 0===r?0:r)/24/3600).toFixed(0);return k.a.createElement(_.a,{"className":re,"key":n},k.a.createElement(_.a,{"className":ce},k.a.createElement(w.a,{"className":oe},c),k.a.createElement(w.a,{"className":le},"天")),k.a.createElement(_.a,{"className":ie},k.a.createElement(_.a,{"className":ue},t),k.a.createElement(v.a,{"src":Object(Ce.a)("coin"),"className":se})),k.a.createElement(Ye.a,{"customType":me,"type":Xe.b.primary,"onClick":e.exchangeVipCard.bind(e,a)},"兑换"))})))),k.a.createElement(_.a,{"className":K}),k.a.createElement(_.a,{"className":be},k.a.createElement(_.a,{"className":de},k.a.createElement(_.a,{"className":fe},"书币提现"),k.a.createElement(_.a,{"className":ae}),k.a.createElement(v.a,{"src":Object(Ce.a)("withdraw_wechat_icon_v2"),"className":pe})),t.map((function(a){var t=a.exchangeId,n=a.coin,r=a.type,c=a.reachLimit,o=a.money,l=r===Re.d.NEWBIE,i=r===Re.d.NEWBIE_MISSION;return l&&c?null:k.a.createElement(_.a,{"className":he,"key":t},k.a.createElement(_.a,null,k.a.createElement(_.a,{"className":Oe},k.a.createElement(_.a,null,k.a.createElement(w.a,{"className":je},Object(He.y)(o)),k.a.createElement(w.a,{"className":ye},"元")),(l||i)&&k.a.createElement(_.a,{"className":ve},"新人专享")),k.a.createElement(_.a,{"className":we},"需",n,"书币兑换")),k.a.createElement(_.a,null,l&&k.a.createElement(_.a,{"className":_e},"阅读小说秒可提"),k.a.createElement(Ye.a,{"customType":Ee,"type":c?Xe.b.disabled:Xe.b.primary,"onClick":e.exchangeMoney.bind(e,a)},c?l?"已提现":"明日再来":"提现")))})))),r&&k.a.createElement(Qe.a,{"title":"确认提现".concat(Object(He.y)(c.money),"元吗？"),"cancelText":"再想想","confirmText":"确认","onCancel":this.onCancelWithdraw,"onConfirm":this.onConfirmWithdraw}),o&&k.a.createElement(_.a,{"className":ge}))}}]),Withdraw}(W.Component),O=Object(S.a)(h.prototype,"exchangeVipCard",[d],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){return function(e){qe.exchangeVipCard(e).then((function(){qe.queryPageInfo()}))}}}),j=Object(S.a)(h.prototype,"exchangeMoney",[f],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){return function(e){var a=e.coin,t=void 0===a?0:a,n=e.type;if(e.reachLimit)Be.a.showToast("今日提现已抢光\n请明日再来");else{if(n===Re.d.NEWBIE)if(!ia.b.newbieWithdrawMissionCompleted)return;t>qe.coin?Be.a.showToast("当前书币不足\n去阅读赚更多书币吧"):qe.set({"moneyItem":e,"showConfirm":!0})}}}}),p=h))||p);a.default=sa}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-fun-read/js/dynamic_withdraw~1e2d04e2_b2b4136bd4dd9247fe6d.js.map