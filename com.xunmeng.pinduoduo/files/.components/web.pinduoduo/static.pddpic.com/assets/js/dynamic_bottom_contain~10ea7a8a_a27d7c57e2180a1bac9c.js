(window.ReadWeJsonp=window.ReadWeJsonp||[]).push([[8],{"g0f3":function(e,t,a){"use strict";a.r(t);var o,n,r,c,i,l,s,u,m,b,p,d,f,_,O,g,h,j,w,y,E,B,C,v,k,M=a("1OyB"),N=a("vuIU"),T=a("Ji7U"),S=a("LK+K"),W=a("Y65e"),D=a("92zR"),A=a("guv2"),R=a("HIM3"),I=a("k/Ow"),P=a("SATD"),L=a("9uCs"),U=a("2vnA"),x=a("TyAF"),K=a("q1tI"),z=a.n(K),G=a("a+Ds"),H=a("p5LO"),F=a("a3ss"),X=a("JX7q"),Z=a("rePB"),q=(a("+JCI"),a("deMC")),J=a("4bvG"),Y="_1LGXZDn",Q="_1ANl9Po",V="_1KETprp",$="_1a8YXIg",ee="_2NNdBNc",te="_15RIge7",ae="_3NDh52F",oe="_1wHaZdg",ne="_2ZWo29D",re="_3iet_WA",ce="_2E5SHMr",ie="_1OH59dw",le="_1lURwu5",se="_QAOUSSS",ue="_UFRGHPW",me={"white_bg":"_35eUGxr","green_bg":"_rYzvo7z","yellow_bg":"_1xfLTkx","blue_bg":"_UJKy1zF","black_bg":"_1zZewpD","ink_bg":"_2raBAEZ","mountain_bg":"_kCRvn4J","bamboo_bg":"_HYcQbsB","daisy_bg":"_37w0h1E","flower_bg":"_2PCDesO","spring_bg":"_2KddDcc","white":"_2C_OLei","title":"_3BIYkKZ","subTitle":"_yl9244y","green":"_2F7ULzD","yellow":"_tumQXNC","blue":"_3TLqlY8","black":"_yunbwtl","ink":"_2eGcwfA","mountain":"_R25QzWJ","bamboo":"_3e86SSa","daisy":"_2UTbMWQ","flower":"_2sVeuF5","spring":"_1wX8nt8"},be=a("TSYQ"),pe=a.n(be),de=a("NlLh"),fe=a("vZ4y"),_e=a("cmhe"),Oe=a("nahQ"),ge=a("d7Jr"),he=a("FpOS"),je=a("ajf3"),we=a("jY+O"),ye=a("9ap9"),Ee=a("JAw4"),Be=a("Y/FJ"),Ce=a("1KX3"),ve=Object(Ce.a)(me,"#color_bg"),ke=Object(Ce.a)(me,"#color"),Me=1,Ne=2,Te=(o=Object(J.b)(1e3),Object(x.observer)((r=function(e){Object(T.default)(BottomInkScreen,e);var t=Object(S.default)(BottomInkScreen);function BottomInkScreen(){var e;Object(M.default)(this,BottomInkScreen);for(var a=arguments.length,o=new Array(a),n=0;n<a;n++)o[n]=arguments[n];return e=t.call.apply(t,[this].concat(o)),Object(Z.default)(Object(X.default)(e),"disposer",void 0),Object(F.a)(Object(X.default)(e),"handleClick",c,Object(X.default)(e)),Object(Z.default)(Object(X.default)(e),"handleSetting",(function(){q.a.toggleSettingControl()})),Object(Z.default)(Object(X.default)(e),"continueRead",(function(e){je.a.close(),Object(ge.a)(he.c.BOTTOM_INK_SCREEN,{"button_type":Ne}),null==e||e.stopPropagation()})),e}return Object(N.default)(BottomInkScreen,[{"key":"componentDidMount","value":function componentDidMount(){this.disposer=Object(U.reaction)((function(){return je.a.showBottomInkScreen}),(function(e){e?(q.a.lockPage(),Object(ge.b)(he.c.BOTTOM_INK_SCREEN)):je.a.close()}))}},{"key":"componentWillUnmount","value":function componentWillUnmount(){je.a.close(),this.disposer&&this.disposer()}},{"key":"render","value":function render(){var e=q.a.colorMode,t=je.a.expired,a=je.a.showBottomInkScreen,o=P.b.isIphoneX;return z.a.createElement(H.a,null,a&&z.a.createElement(H.a,{"className":pe()(Y,Object(Z.default)({},Q,o)),"onClick":this.handleSetting},z.a.createElement(H.a,{"className":pe()(V,ve[e])}),z.a.createElement(H.a,{"className":pe()($,Ee.a[e],ke[e],Object(Z.default)({},Q,o))},z.a.createElement(H.a,{"className":ee},t?z.a.createElement(z.a.Fragment,null,z.a.createElement(H.a,{"className":pe()(oe,me.subTitle)},"墨水屏已到期"),z.a.createElement(H.a,{"className":pe()(te,me.title)},"使用期间已为你有效降低",z.a.createElement(G.a,{"className":ae},"86%"),"蓝光伤害")):z.a.createElement(z.a.Fragment,null,z.a.createElement(H.a,{"className":pe()(oe,me.subTitle)},"长时间看手机，会伤害眼睛哦"),z.a.createElement(H.a,{"className":pe()(te,me.title)},"墨水屏可有效降低",z.a.createElement(G.a,{"className":ae},"86%"),"蓝光伤害"))),z.a.createElement(H.a,{"className":ne},z.a.createElement(H.a,{"className":re},z.a.createElement(H.a,{"className":ce},"墨水屏"),z.a.createElement(H.a,{"className":ie},z.a.createElement(H.a,{"className":le}),z.a.createElement(H.a,null,"保护眼睛"))),z.a.createElement(H.a,{"className":se},"仿纸张设计，保护你的灵动双眼")),z.a.createElement(fe.a,{"size":de.a.large,"onClick":this.handleClick,"text":t?"继续使用墨水屏":"浏览商品，得墨水屏"}),z.a.createElement(H.a,{"className":ue,"onClick":this.continueRead},z.a.createElement(G.a,null,"暂不需要",z.a.createElement(_e.a,{"fontName":"more"}))))))}}]),BottomInkScreen}(K.Component),c=Object(W.a)(r.prototype,"handleClick",[o],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){return function(e){Object(Oe.q)((function(){we.b.afterBackWork().then((function(){ye.a.inkScreenCountDown>0&&(je.a.close(),q.a.setColorMode(Be.U.INK))}))})),Object(ge.a)(he.c.BOTTOM_INK_SCREEN,{"button_type":Me}),null==e||e.stopPropagation()}}}),n=r))||n),Se=a("bmJN"),We=a("Mt83"),De={"container":"_1jI3VCc","slide":"_2PtynjT","missionWrapper":"_hDObKGd","competitionWrapper":"_24jHvnM","black":"_2eKlyX8","missionBtnWrapper":"_PStwtO6","leftMissionBtn":"_1knWaBB","btnTextWrapper":"_2XRwIj7","btnIcon":"_uUyDg-R","btnText":"_3-2SYmT","tag":"_3C6tehu","rightWrapper":"_3lJUbZl","itemWrapper":"_1R6l3xB"},Ae=a("pArG"),Re=a("65Nj"),Ie=a("g4sS"),Pe=a("PK2z"),Le=a("ygK2"),Ue=a("6OU5"),xe=new(i=function(e){Object(T.default)(BottomMissionStore,e);var t=Object(S.default)(BottomMissionStore);function BottomMissionStore(){var e;Object(M.default)(this,BottomMissionStore);for(var a=arguments.length,o=new Array(a),n=0;n<a;n++)o[n]=arguments[n];return e=t.call.apply(t,[this].concat(o)),Object(F.a)(Object(X.default)(e),"showTip",l,Object(X.default)(e)),e}return Object(N.default)(BottomMissionStore,[{"key":"openTip","value":function openTip(){var e=this;this.showTip=!0,Object(Ue.q)(Pe.c).then((function(){e.showTip=!1}))}},{"key":"show","get":function get(){var e=P.b.registerGroupInit,t=L.a.bottomMissionStyleGray;return e&&t}},{"key":"bottomMissionList","get":function get(){var e=P.b.bottomIconOrder,t=void 0===e?[]:e;if(this.show){var a=Le.a.getData().filter((function(e){return null==e?void 0:e.ifShow()}));return(null==t?void 0:t.length)>0?t.map((function(e){return a.find((function(t){return t.getMissionType()===e}))})).filter((function(e){return Boolean(e)})).slice(0,Pe.f):Pe.e.map((function(e){return a.find((function(t){return t.getMissionType()===e}))})).filter((function(e){return Boolean(e)}))}return[]}}]),BottomMissionStore}(Ie.a),l=Object(W.a)(i.prototype,"showTip",[U.observable],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){return!1}}),Object(W.a)(i.prototype,"show",[U.computed],Object.getOwnPropertyDescriptor(i.prototype,"show"),i.prototype),Object(W.a)(i.prototype,"bottomMissionList",[U.computed],Object.getOwnPropertyDescriptor(i.prototype,"bottomMissionList"),i.prototype),Object(W.a)(i.prototype,"openTip",[U.action],Object.getOwnPropertyDescriptor(i.prototype,"openTip"),i.prototype),i),Ke=a("3fu3"),ze=a("6PEw"),Ge=a("vHnQ"),He=a("AKEH"),Fe=a("XS0u"),Xe=I.g.drawable,Ze=I.i.CASH_WELFARE_WECHAT,qe=I.i.CASH_READING_GET_CASH,Je=Object(x.observer)((u=function(e){Object(T.default)(BottomMissionBtn,e);var t=Object(S.default)(BottomMissionBtn);function BottomMissionBtn(){var e;Object(M.default)(this,BottomMissionBtn);for(var a=arguments.length,o=new Array(a),n=0;n<a;n++)o[n]=arguments[n];return e=t.call.apply(t,[this].concat(o)),Object(Z.default)(Object(X.default)(e),"renderTips",(function(){return z.a.createElement(Re.a,{"text":"无需拼单，免费领现金{weCash}"})})),Object(Z.default)(Object(X.default)(e),"handleClick",(function(){Ke.a.getMoreCashPopupStore.openFromBottom()})),e}return Object(N.default)(BottomMissionBtn,[{"key":"componentDidMount","value":function componentDidMount(){Object(He.j)(Pe.b)&&(Object(Ue.q)(Pe.d).then((function(){xe.openTip()})),Object(Fe.c)(Pe.b,Ge.a.serverTime))}},{"key":"render","value":function render(){var e=L.a.bottomMissionBtnMiddleGray,t=xe.showTip;return z.a.createElement(Ae.a,{"renderTip":this.renderTips,"placement":"top","show":t,"arrowCenter":!0,"zIndex":500,"tipClass":De.tipContainer},z.a.createElement(H.a,{"className":pe()(De.missionBtnWrapper,Object(Z.default)({},De.leftMissionBtn,!e)),"onClick":this.handleClick,"id":"bottomMissionBtn"},z.a.createElement(H.a,{"className":De.btnTextWrapper},z.a.createElement(H.a,{"className":De.btnIcon}),z.a.createElement(H.a,{"className":De.btnText},"免费领现金")),!!this.tag&&z.a.createElement(H.a,{"className":De.tag},this.tag)))}},{"key":"tag","get":function get(){var e=Ke.a.bottomTigerSignMissionStore,t=Ke.a.cashLowActiveOrderSerialReadStore,a=Ke.a.bottomSerialReadMissionStore,o=Ke.a.cashBigThreeMealPopupStore,n=e.tigerSignStatus,r=(t||{}).status,c=R.b.getMissionInfo(Ze).status,i=ze.a.hasSerialReadCash,l=R.b.getMissionInfo(qe).status,s=(o||{}).canDrawReward;return[n,r,c,l,a.serialDrawStatus].includes(Xe)||i||s?"可领取":""}}]),BottomMissionBtn}(K.Component),Object(W.a)(u.prototype,"tag",[U.computed],Object.getOwnPropertyDescriptor(u.prototype,"tag"),u.prototype),s=u))||s,Ye=Object(x.observer)((b=function(e){Object(T.default)(BottomMission,e);var t=Object(S.default)(BottomMission);function BottomMission(){return Object(M.default)(this,BottomMission),t.apply(this,arguments)}return Object(N.default)(BottomMission,[{"key":"render","value":function render(){var e,t=xe.show,a=xe.bottomMissionList;if(!t)return null;var o=q.a.colorMode,n=q.a.currentShowUnlock,r=P.b.isIphoneX,c=L.a.bottomMissionBtnMiddleGray,i={"paddingBottom":r?Object(Se.a)(12):0,"height":r?Object(Se.a)(Be.f):Object(Se.a)(Be.e)},l=c?a.slice(0,Pe.f/2):[],s=c?a.slice(Pe.f/2,Pe.f):a;return z.a.createElement(H.a,{"className":pe()(De.container,(e={},Object(Z.default)(e,We.a.filter,o===Be.U.INK),Object(Z.default)(e,De.black,o===Be.U.BLACK),Object(Z.default)(e,De.slide,n||this.hidePage),e)),"style":i},z.a.createElement(H.a,{"className":pe()(De.missionWrapper)},l.map((function(e,t){var a=e.sort,o=e.component;return z.a.createElement(o,{"key":"".concat(a(),"-").concat(t),"index":t})})),this.showBottomBtn&&z.a.createElement(Je,null),s.length?z.a.createElement(H.a,{"className":De.rightWrapper},s.map((function(e,t){var a=e.sort,o=e.component,n=c?t+l.length:t;return z.a.createElement(H.a,{"className":De.itemWrapper,"key":"".concat(a(),"-").concat(t)},z.a.createElement(o,{"index":n}))}))):null))}},{"key":"hidePage","get":function get(){return!!((q.a.currentContentData[q.a.currentPageIndex]||{}).pageType&Be.X.END_PAGE)}},{"key":"showBottomBtn","get":function get(){return Pe.a.some((function(e){return R.b.getMissionInfo(e).maxCount>0}))}}]),BottomMission}(K.Component),Object(W.a)(b.prototype,"hidePage",[U.computed],Object.getOwnPropertyDescriptor(b.prototype,"hidePage"),b.prototype),Object(W.a)(b.prototype,"showBottomBtn",[U.computed],Object.getOwnPropertyDescriptor(b.prototype,"showBottomBtn"),b.prototype),m=b))||m,Qe="_1SHftiZ",Ve="_3l5FxDg",$e="_1KBysaS",et="_3-EZa_q",tt="_3d8li3i",at="_3aAbygW",ot="_2eTseRa",nt="_3U2ziaX",rt="_cw8L8EU",ct="_35_zMAt",it="_WhNe6mC",lt="_2uGGneh",st="_1UFPxi0",ut="_1gNujav",mt="_xBhzc3w",bt={"white_bg":"_19CdbzN","green_bg":"_3CwJ4Hu","yellow_bg":"_2ALGwW4","blue_bg":"_2GFggjO","black_bg":"_3x7T75u","ink_bg":"_2XOgexM","mountain_bg":"_3ceOw93","bamboo_bg":"_10HPlP2","daisy_bg":"_1teEpqR","flower_bg":"_13iyC1_","spring_bg":"_cxE-K18","white":"_aZwh4RP","text":"_TsXQi8k","progressContainer":"_3zbNylt","progressTime":"_1SeH_rx","progressText":"_RugNP5l","green":"_kyOquIs","yellow":"_LZEVTj_","blue":"_1v-Wz4r","black":"_11sRxKu","ink":"_2Fi--4s","mountain":"_3feLcpp","bamboo":"_3xKvV_K","daisy":"_kRm050A","flower":"_2zb4C34","spring":"_3s-NrIv","readBtnColor":"_OC2cojV"},pt=a("TRXh"),dt=a("uJeg"),ft=a("X4lv"),_t=Object(Ce.a)(bt,"#color_bg"),Ot=Object(Ce.a)(bt,"#color"),gt=I.i.SCAN_UNLOCK_COOL_DOWN,ht=Object(x.observer)((d=function(e){Object(T.default)(BottomUnlockCoolDown,e);var t=Object(S.default)(BottomUnlockCoolDown);function BottomUnlockCoolDown(){var e;Object(M.default)(this,BottomUnlockCoolDown);for(var a=arguments.length,o=new Array(a),n=0;n<a;n++)o[n]=arguments[n];return e=t.call.apply(t,[this].concat(o)),Object(Z.default)(Object(X.default)(e),"disposer",void 0),Object(F.a)(Object(X.default)(e),"handleClickUnlockCoolDown",f,Object(X.default)(e)),Object(Z.default)(Object(X.default)(e),"gotoUnlockCoolDownGoods",(function(){var e=R.b.getMissionInfo(gt).finishCount,t=void 0===e?0:e;Object(Oe.u)((function(){we.b.afterBackWork().then((function(){var e=R.b.getMissionInfo(gt).finishCount;(void 0===e?0:e)>t&&(dt.a.startCoolDown(),dt.a.close(),pt.a.showToast("已去除等待时长\n继续阅读精彩内容"))}))}))})),Object(Z.default)(Object(X.default)(e),"clickCenter",(function(){q.a.toggleSettingControl()})),Object(Z.default)(Object(X.default)(e),"renderCountDown",(function(e){var t=e.min,a=e.sec;return z.a.createElement(H.a,null,z.a.createElement(G.a,{"className":pe()(ut,bt.progressTime)},60*t+a),"秒后可继续阅读")})),e}return Object(N.default)(BottomUnlockCoolDown,[{"key":"componentDidMount","value":function componentDidMount(){this.disposer=Object(U.reaction)((function(){return dt.a.showBottomCoolDown}),(function(e){e?(q.a.lockPage(),Object(ge.b)(he.c.BOTTOM_COOL_DOWN)):dt.a.close()})),dt.a.startCoolDown()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.disposer&&this.disposer()}},{"key":"render","value":function render(){var e,t=q.a.colorMode,a=(R.b.getMissionInfo(gt).extMap||{}).browseTime,o=void 0===a?30:a,n=P.b.isIphoneX,r=dt.a.unlockCoolDown,c=dt.a.coolDownInterval,i=dt.a.showBottomCoolDown,l=dt.a.animationStyle,s=L.a.eyeCoolDownOptimizeGray;return z.a.createElement("div",null,i&&z.a.createElement("div",{"className":Qe,"onClick":this.clickCenter},z.a.createElement("div",{"className":pe()(Ve,_t[t])}),z.a.createElement("div",{"className":pe()($e,Ee.a[t],Ot[t],(e={},Object(Z.default)(e,et,n),Object(Z.default)(e,We.a.filter,t===Be.U.INK),e))},z.a.createElement("div",{"className":pe()(tt,bt.text)},r?z.a.createElement(z.a.Fragment,null,z.a.createElement("div",{"className":ot},"休息好啦"),z.a.createElement("div",{"className":at},"继续阅读精彩内容吧")):z.a.createElement(z.a.Fragment,null,z.a.createElement("div",{"className":ot},"阅读已满",Object(He.a)(c),"分钟"),z.a.createElement("div",{"className":at},"做个眼保健操休息会吧"))),z.a.createElement("div",{"className":pe()(rt)},z.a.createElement("div",{"className":pe()(ct,Object(Z.default)({},it,r))}),z.a.createElement("div",{"className":pe()(lt,bt.progressContainer)},z.a.createElement("div",{"className":pe()(st),"style":l})),z.a.createElement("div",{"className":pe()(mt,bt.progressText)},r?"等待时间已满":z.a.createElement(ft.a,{"counterKey":"unlockCoolDownCountDown","renderChildren":this.renderCountDown}))),z.a.createElement(fe.a,{"size":de.a.large,"type":de.b.primary,"customType":nt,"onClick":this.handleClickUnlockCoolDown,"text":r?"继续阅读":s?"开通会员，不再提示":"浏览商品".concat(o,"秒，跳过等待时间")}))))}}]),BottomUnlockCoolDown}(K.Component),f=Object(W.a)(d.prototype,"handleClickUnlockCoolDown",[J.a],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){var e=this;return function(t){if(null==t||t.stopPropagation(),dt.a.unlockCoolDown)dt.a.close();else{if(Object(ge.a)(he.c.BOTTOM_COOL_DOWN),L.a.eyeCoolDownOptimizeGray)return void we.b.goFixedVipGoods(we.b.afterVipOrderBack);e.gotoUnlockCoolDownGoods()}}}}),p=d))||p,jt={"body":"_ZZGKGqR","wechatWrapper":"_2KWTttK","mask":"_24wW8Qx","textWrapper":"_14Yrweu","progressWrapper":"_3v5Cb58","progressBar":"_kezLXaV","progressText":"_3h4gEj4","color":"_2qZ4eIR","darkColor":"_3Qce9Dc","fontMedium":"_35veiLZ"},wt={"common_white":"_2XnWIFy","container":"_3zU1qqI","title":"_1IODXSD","btn":"_17QAsjK","common_green":"_2kF8pB2","common_yellow":"_20lKdnD","common_blue":"_3bBcoqq","common_black":"_14ZNvyC","common_ink":"_atyS2Dz","common_mountain":"_1xan8eD","common_bamboo":"_1P3Psdi","common_daisy":"_25Emr72","common_flower":"_2ZZFrAG","common_spring":"_1b6EtdU","drawBtn":"_s2IDc19","darkBtn":"_3ZDs31e"},yt=a("SWai"),Et=I.i.CASH_WELFARE_WECHAT,Bt=new(_=function(e){Object(T.default)(BottomWelfareWechatWrapperStore,e);var t=Object(S.default)(BottomWelfareWechatWrapperStore);function BottomWelfareWechatWrapperStore(){return Object(M.default)(this,BottomWelfareWechatWrapperStore),t.apply(this,arguments)}return Object(N.default)(BottomWelfareWechatWrapperStore,[{"key":"progressPercent","get":function get(){var e=yt.a.showReadCount,t=R.b.getMissionInfo(Et),a=t.targetAmount,o=void 0===a?0:a,n=t.status,r=t.currentAmount,c=void 0===r?0:r;if(n===I.g.progressing){var i=100-Math.min((Math.min(e,Be.a)/1e3+c)/o*100,100);return Number(i.toFixed(0))}return 0}}]),BottomWelfareWechatWrapperStore}(Ie.a),Object(W.a)(_.prototype,"progressPercent",[U.computed],Object.getOwnPropertyDescriptor(_.prototype,"progressPercent"),_.prototype),_),Ct=a("PC0S"),vt=a("nigR"),kt=a("gzTa"),Mt=a("oMnU"),Nt=I.i.CASH_WELFARE_WECHAT,Tt=Object(Ce.a)(wt,"common_#color"),St=Object(x.observer)((g=function(e){Object(T.default)(BottomWelfareWechatWrapper,e);var t=Object(S.default)(BottomWelfareWechatWrapper);function BottomWelfareWechatWrapper(){var e;Object(M.default)(this,BottomWelfareWechatWrapper);for(var a=arguments.length,o=new Array(a),n=0;n<a;n++)o[n]=arguments[n];return e=t.call.apply(t,[this].concat(o)),Object(F.a)(Object(X.default)(e),"handleDrawReward",h,Object(X.default)(e)),Object(Z.default)(Object(X.default)(e),"gotoSelectBook",(function(){Ke.a.cashWelfareSelectBookStore.open()})),e}return Object(N.default)(BottomWelfareWechatWrapper,[{"key":"render","value":function render(){var e=q.a.colorMode,t=P.b.isIphoneX,a={"paddingBottom":t?Object(Se.a)(32):0,"height":t?Object(Se.a)(Be.f):Object(Se.a)(Be.e)},o=Bt.progressPercent,n=R.b.getMissionInfo(Nt),r=n.targetAmount,c=void 0===r?0:r,i=n.status,l={"transform":"translateX(-".concat(o,"%)")},s=e===Be.U.BLACK;return z.a.createElement(H.a,{"className":Tt[e]},z.a.createElement(H.a,{"className":pe()(wt.container),"style":a},z.a.createElement(H.a,{"className":jt.body},z.a.createElement(H.a,{"className":jt.wechatWrapper},z.a.createElement(Ct.a,{"bigSize":!1}),s&&z.a.createElement(H.a,{"className":jt.mask})),z.a.createElement(H.a,{"className":jt.textWrapper},z.a.createElement(H.a,{"className":pe()(jt.title)},"阅读福利好书得最高",z.a.createElement(G.a,{"className":pe()(s?jt.darkColor:jt.color)},"5元"),"微信提现"),z.a.createElement(H.a,{"className":jt.progressWrapper},z.a.createElement(H.a,{"className":jt.progressBar,"style":l}),z.a.createElement(H.a,{"className":jt.progressText},i===I.g.drawable?"阅读已满".concat(Object(He.a)(c),"分钟，可提现"):"累积阅读".concat(Object(He.a)(c),"分钟，即可提现")))),i===I.g.drawable?z.a.createElement(H.a,{"className":pe()(wt.btn,wt.drawBtn,Object(Z.default)({},wt.darkBtn,s)),"onClick":this.handleDrawReward},"立即领取"):z.a.createElement(H.a,{"className":pe()(wt.btn),"onClick":this.gotoSelectBook},z.a.createElement(H.a,{"className":jt.fontMedium},"去选书"),z.a.createElement(_e.a,{"fontName":"more"})))))}}]),BottomWelfareWechatWrapper}(K.Component),h=Object(W.a)(g.prototype,"handleDrawReward",[J.a],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){return function(){return Object(vt.P)({"missionType":Nt}).then((function(e){var t=e.drawSuccess,a=e.rewards,o=e.mission,n=Object(kt.g)(vt.A.BIG_CASH_WELFARE,a);t&&n?ze.a.cashQueryCashInfo().then((function(){var e=(ze.a.cashList.find((function(e){return e.exchangeId===vt.A.BIG_CASH_WELFARE}))||{}).money,t=void 0===e?0:e;return ze.a.cashExchangeMoney(vt.A.BIG_CASH_WELFARE,!0).then((function(){Mt.a.playWeCashAudio(),Ke.a.cashWelfareWechatRewardPopupStore.openReward(t),R.b.updateMissionData(o)}))})).catch((function(){pt.a.showToast("领取失败，请稍后重试")})):pt.a.showToast("请稍后重试")})).catch((function(){pt.a.showToast("请稍后重试")}))}}}),O=g))||O,Wt="_2PE2wId",Dt="_-DTRivf",At="_1oEJ2FB",Rt="_1jKK8_P",It="_1pfGiaf",Pt="_12Wu_3r",Lt="_2XjrMXp",Ut="_iTDMIVb",xt="_2D0HgmA",Kt=Object(x.observer)((w=function(e){Object(T.default)(BottomMissionTag,e);var t=Object(S.default)(BottomMissionTag);function BottomMissionTag(){return Object(M.default)(this,BottomMissionTag),t.apply(this,arguments)}return Object(N.default)(BottomMissionTag,[{"key":"render","value":function render(){var e,t,a=this,o=q.a.colorMode,n=q.a.currentShowUnlock,r=q.a.showBottomMissionTag,c=P.b.isIphoneX,i=P.b.registerGroupInit;if(!r||!i)return null;var l={"paddingBottom":c?Object(Se.a)(12):0,"height":c?Object(Se.a)(Be.f):Object(Se.a)(Be.e)};return z.a.createElement(H.a,{"className":pe()(Wt,(e={},Object(Z.default)(e,We.a.filter,o===Be.U.INK),Object(Z.default)(e,Dt,n||this.hidePage),Object(Z.default)(e,At,o===Be.U.BLACK),e)),"style":l},z.a.createElement(H.a,{"className":pe()(Rt,Object(Z.default)({},It,!this.showTip))},z.a.createElement(H.a,{"className":pe()(Pt,(t={},Object(Z.default)(t,Lt,this.scrollMission),Object(Z.default)(t,Ut,!this.showTip),t))},this.bottomMissionOrder.map((function(e,t){var o=e.sort,n=e.component;return z.a.createElement(H.a,{"className":pe()(Object(Z.default)({},xt,a.scrollMission)),"key":"".concat(o(),"-").concat(t)},z.a.createElement(n,{"index":t}))})))))}},{"key":"hidePage","get":function get(){return!!((q.a.currentContentData[q.a.currentPageIndex]||{}).pageType&Be.X.END_PAGE)}},{"key":"scrollMission","get":function get(){return Le.a.getData().filter((function(e){return e.ifShow()})).length>=5}},{"key":"showTip","get":function get(){var e=Ke.a.bottomSerialReadMissionStore,t=Ke.a.bottomCompetitionMissionStore,a=Ke.a.bottomDeductionMissionStore;return e.show||t.showTip||a.show}},{"key":"bottomMissionOrder","get":function get(){var e=Le.a.getData().filter((function(e){return null==e?void 0:e.ifShow()})),t=P.b.bottomIconOrder,a=void 0===t?[]:t;return(null==a?void 0:a.length)>0?a.map((function(t){return e.find((function(e){return e.getMissionType()===t}))})).filter((function(e){return Boolean(e)})):e.sort((function(e,t){return e.sort()-t.sort()}))}}]),BottomMissionTag}(K.Component),Object(W.a)(w.prototype,"hidePage",[U.computed],Object.getOwnPropertyDescriptor(w.prototype,"hidePage"),w.prototype),Object(W.a)(w.prototype,"scrollMission",[U.computed],Object.getOwnPropertyDescriptor(w.prototype,"scrollMission"),w.prototype),Object(W.a)(w.prototype,"showTip",[U.computed],Object.getOwnPropertyDescriptor(w.prototype,"showTip"),w.prototype),Object(W.a)(w.prototype,"bottomMissionOrder",[U.computed],Object.getOwnPropertyDescriptor(w.prototype,"bottomMissionOrder"),w.prototype),j=w))||j,zt="_246A3k5",Gt="_31m3c0P",Ht="_27RUeqb",Ft="_3hDy72C",Xt="_30cdSAy",Zt="_30M7KtP",qt="_lkewVPA",Jt="_19PY8R2",Yt="_3ImliTD",Qt="_hXvpgKO",Vt="_3vwJny7",$t=a("DhIl"),ea=Object(x.observer)(y=function(e){Object(T.default)(BottomOrderReturn,e);var t=Object(S.default)(BottomOrderReturn);function BottomOrderReturn(){var e;Object(M.default)(this,BottomOrderReturn);for(var a=arguments.length,o=new Array(a),n=0;n<a;n++)o[n]=arguments[n];return e=t.call.apply(t,[this].concat(o)),Object(Z.default)(Object(X.default)(e),"openTip",(function(){$t.a.openTip()})),Object(Z.default)(Object(X.default)(e),"closeTip",(function(){$t.a.closeTip()})),e}return Object(N.default)(BottomOrderReturn,[{"key":"render","value":function render(){var e,t=$t.a.showTip,a=$t.a.open,o=q.a.colorMode,n=R.b.isCashAccountUserGray;return t&&n?z.a.createElement(H.a,{"className":pe()(zt,(e={},Object(Z.default)(e,Gt,o===Be.U.BLACK),Object(Z.default)(e,We.a.filter,o===Be.U.INK),e))},z.a.createElement(H.a,{"className":pe()(Ht,Object(Z.default)({},Xt,a))},z.a.createElement(H.a,{"className":Jt},z.a.createElement(H.a,{"className":Yt}),z.a.createElement(H.a,null,z.a.createElement(H.a,{"className":pe()(Qt,Vt)},"明日回来"),z.a.createElement(H.a,{"className":Qt},"领取最高全额返"))),z.a.createElement(H.a,{"className":Zt,"onClick":this.closeTip},z.a.createElement(H.a,{"className":qt}))),z.a.createElement(H.a,{"className":pe()(Ft,Object(Z.default)({},Xt,a)),"onClick":this.openTip},z.a.createElement(H.a,null,"明"),z.a.createElement(H.a,null,"日"),z.a.createElement(H.a,null,"领"),z.a.createElement(H.a,null,z.a.createElement(_e.a,{"fontName":"more"})))):null}}]),BottomOrderReturn}(K.Component))||y,ta="_T4tKlkU",aa="_3IHw_L5",oa="_1xsYaux",na="_s1b9Y4a",ra="_lTwWpgV",ca="_EsOHgUF",ia="_2pbo4h6",la="_3k7yEvP",sa="_cJbVtaK",ua="_sc0FIGW",ma="_3DP1TzW",ba="_37bhVhL",pa="_1bTxOcJ",da="_q4O5AbT",fa={"white_bg":"_30DnNC4","green_bg":"_1a5aRp-","yellow_bg":"_EvWoPL6","blue_bg":"_3bi4M8P","black_bg":"_3Wti7T-","ink_bg":"_1McD1Gq","mountain_bg":"_1_T2jWV","bamboo_bg":"_3DWH0FT","daisy_bg":"_23vyD9p","flower_bg":"_3Cpb8O4","spring_bg":"_S-dbXcL","white":"_26jjoXP","title":"_2PwLZp0","listenBookText":"_3ffHyx-","listenBookDesc":"_21ARwus","listenBook":"_LzOLgsG","bottomClose":"_22P31qP","green":"_zwZKEA4","yellow":"_2q_Q6i2","blue":"_2zBdWzZ","black":"_of2e5Zb","ink":"_OdhCA1F","mountain":"_38c0tlh","bamboo":"_zZsTWvo","daisy":"_1Mqyb-C","flower":"_6AFWJYn","spring":"_8NeqpSI"},_a=a("/vhm"),Oa=a("/98v"),ga=a("c7uK"),ha=a("opb1"),ja=Object(Ce.a)(fa,"#color_bg"),wa=Object(Ce.a)(fa,"#color"),ya=(E=Object(J.b)(1e3),Object(x.observer)((C=function(e){Object(T.default)(BottomListenBook,e);var t=Object(S.default)(BottomListenBook);function BottomListenBook(){var e;Object(M.default)(this,BottomListenBook);for(var a=arguments.length,o=new Array(a),n=0;n<a;n++)o[n]=arguments[n];return e=t.call.apply(t,[this].concat(o)),Object(Z.default)(Object(X.default)(e),"disposer",void 0),Object(F.a)(Object(X.default)(e),"handleClick",v,Object(X.default)(e)),Object(Z.default)(Object(X.default)(e),"handleSetting",(function(){q.a.toggleSettingControl()})),Object(Z.default)(Object(X.default)(e),"continueRead",(function(e){pt.a.showToast("在书籍详情、阅读设置处\n均可开启听书模式"),_a.a.close(),null==e||e.stopPropagation()})),e}return Object(N.default)(BottomListenBook,[{"key":"componentDidMount","value":function componentDidMount(){var e=this;this.disposer=Object(U.reaction)((function(){return e.showBottomListenBook}),(function(e){e?q.a.lockPage():_a.a.close()}))}},{"key":"componentWillUnmount","value":function componentWillUnmount(){_a.a.close(),this.disposer&&this.disposer()}},{"key":"render","value":function render(){var e=q.a.colorMode,t=P.b.isIphoneX,a=R.b.getMissionInfo(I.i.CASH_LISTEN_GET_CASH).maxCount,o=void 0===a?0:a;return z.a.createElement(H.a,null,this.showBottomListenBook&&z.a.createElement(H.a,{"className":pe()(ta,Object(Z.default)({},aa,t)),"onClick":this.handleSetting},z.a.createElement(H.a,{"className":pe()(oa,ja[e])}),z.a.createElement(H.a,{"className":pe()(na,Ee.a[e],wa[e],Object(Z.default)({},aa,t))},z.a.createElement(H.a,{"className":ra},z.a.createElement(H.a,{"className":pe()(ca,fa.title)},"试试",z.a.createElement(G.a,{"className":ia},"听书"),"吧，随时随地轻松听")),z.a.createElement(H.a,{"className":pe()(la,fa.listenBook)},z.a.createElement(H.a,{"className":pe()(sa,fa.listenBookText)},z.a.createElement(H.a,null,o?"听书模式加速提现":"听书模式"),o?null:z.a.createElement(H.a,{"className":ua})),z.a.createElement(H.a,{"className":pe()(ma,fa.listenBookDesc)},"在书籍详情、阅读设置处都可开启听书模式")),z.a.createElement(fe.a,{"size":de.a.large,"onClick":this.handleClick,"text":"立即听书","className":ba},o?z.a.createElement(Re.a,{"className":pa,"text":"{weCashWhite}加速提现"}):null),z.a.createElement(H.a,{"className":pe()(da,fa.bottomClose),"onClick":this.continueRead},"暂不需要听书",z.a.createElement(_e.a,{"fontName":"more"})))))}},{"key":"showBottomListenBook","get":function get(){var e=q.a.currentShowUnlock,t=(Ke.a.bottomUnlockCoolDownStore||{}).showBottomCoolDown,a=q.a.canShowBottomInfo;return!e&&!t&&_a.a.show&&a}}]),BottomListenBook}(K.Component),v=Object(W.a)(C.prototype,"handleClick",[E],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){return function(e){_a.a.close(),null==e||e.stopPropagation(),A.a.showListenBookIcon||Oa.a.initListenStoreFromRead();var t=q.a.bidStr;Object(ga.a)(ha.a.LISTEN_BOOK_BOTTOM_ENTRY_CLICK,t),A.a.showListenBookMask=!0,q.a.showSettingControl=!1}}}),Object(W.a)(C.prototype,"showBottomListenBook",[U.computed],Object.getOwnPropertyDescriptor(C.prototype,"showBottomListenBook"),C.prototype),B=C))||B),Ea=a("wx14"),Ba="_q2OQzKb",Ca="_3Q_ZldB",va="_2ofxfzI",ka="_3fsgSMJ",Ma="_1sWSOBU",Na="_3B_Wi0i",Ta="_2Ll4qMr",Sa="_2fjS7NI",Wa="_2Y9iWt3";!function(e){e[e.progressing=1]="progressing",e[e.drawable=2]="drawable",e[e.complete=3]="complete"}(k||(k={}));var Da,Aa,Ra,Ia,Pa,La,Ua,xa="_1RMSBCe",Ka="_X--fLfp",za="_233PeTk",Ga="_ocv6mW1",Ha="_1pcAEoa",Fa="_XzxsYb9",Xa="_1yF5BGn",Za="_3bfEI-N",qa="_2tMESSQ",Ja=(Da={},Object(Z.default)(Da,k.drawable,za),Object(Z.default)(Da,k.complete,Ga),Da),Ya=(Aa={},Object(Z.default)(Aa,vt.A.CARD,Ha),Object(Z.default)(Aa,vt.A.CASH,Fa),Object(Z.default)(Aa,vt.A.CASH_ACCOUNT_AMOUNT,Xa),Aa),Qa=function(e){Object(T.default)(BottomReturnReadMissionItem,e);var t=Object(S.default)(BottomReturnReadMissionItem);function BottomReturnReadMissionItem(){return Object(M.default)(this,BottomReturnReadMissionItem),t.apply(this,arguments)}return Object(N.default)(BottomReturnReadMissionItem,[{"key":"render","value":function render(){var e=this.props,t=e.rewardType,a=e.targetAmount,o=void 0===a?0:a,n=e.status,r=Object(He.e)(o);return z.a.createElement(H.a,{"className":xa},z.a.createElement(H.a,{"className":pe()(Ka,Ja[n],Ya[t])},t===vt.A.CASH?z.a.createElement(H.a,{"className":Za}):null),z.a.createElement(H.a,{"className":qa},n===k.complete?"已领取":r))}}]),BottomReturnReadMissionItem}(K.Component),Va=I.i.RETURN_READ_MISSION,$a=I.g.drawable,eo=[38,106,176,176],to=Object(x.observer)((Ia=function(e){Object(T.default)(BottomReturnReadMission,e);var t=Object(S.default)(BottomReturnReadMission);function BottomReturnReadMission(){var e;Object(M.default)(this,BottomReturnReadMission);for(var a=arguments.length,o=new Array(a),n=0;n<a;n++)o[n]=arguments[n];return e=t.call.apply(t,[this].concat(o)),Object(F.a)(Object(X.default)(e),"handleDrawReward",Pa,Object(X.default)(e)),e}return Object(N.default)(BottomReturnReadMission,[{"key":"render","value":function render(){var e=q.a.colorMode,t=P.b.isIphoneX,a={"paddingBottom":t?Object(Se.a)(32):0,"height":t?Object(Se.a)(Be.f):Object(Se.a)(Be.e)},o=R.b.getMissionInfo(Va),n=o.finishCount,r=o.rewardConfigMap,c=o.drawCount,i=o.maxCount,l=o.stageTargetAmount,s=void 0===l?[]:l,u=Object(kt.f)(r,i).map((function(e,t){return{"rewardType":(e||{}).rewardType,"targetAmount":s[t],"status":t>=n?k.progressing:t>=c?k.drawable:k.complete}})),m={"transform":"translate(-".concat(Object(Se.a)(this.translate),",0)")};return z.a.createElement(H.a,{"className":pe()(Ba,Object(Z.default)({},Ca,e===Be.U.BLACK)),"style":a},z.a.createElement(H.a,{"className":va},z.a.createElement(ft.a,{"counterKey":"returnReadMissionCountDown","formatString":"hh:mm:ss后礼包失效"})),z.a.createElement(H.a,{"className":ka},z.a.createElement(H.a,{"className":Ma}),z.a.createElement(H.a,{"className":Na,"onClick":this.handleDrawReward},z.a.createElement(H.a,{"className":Ta},z.a.createElement(H.a,{"className":Sa,"style":m})),z.a.createElement(H.a,{"className":Wa},u.map((function(e){var t=e.rewardType,a=e.targetAmount;return z.a.createElement(Qa,Object(Ea.a)({"key":"".concat(a,"-").concat(t)},e))}))))))}},{"key":"translate","get":function get(){for(var e=R.b.getMissionInfo(Va),t=e.currentAmount,a=e.stageTargetAmount,o=void 0===a?[]:a,n=yt.a.showReadCount,r=Math.min(n,Be.a)/1e3+t,c=eo[0],i=0;i<o.length;i++){var l=o[i],s=i>0?o[i-1]:0;if(!(r>=l)){c+=eo[i+1]*(r-s)/(l-s);break}c+=eo[i+1]}return 496-c}}]),BottomReturnReadMission}(K.Component),Pa=Object(W.a)(Ia.prototype,"handleDrawReward",[J.a],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){return function(){if(R.b.getMissionInfo(Va).status===$a)return Object(vt.P)({"missionType":Va}).then((function(e){var t=e||{},a=t.drawSuccess,o=t.rewards,n=void 0===o?[]:o,r=t.mission,c=t.cashAccount,i=n[0]||{},l=i.rewardAmount,s=void 0===l?0:l,u=i.rewardType,m=void 0===u?vt.A.CARD:u;a&&s?(Ke.a.returnReadMissionRewardPopupStore.openWithReward({"rewardAmount":s,"rewardType":m}),R.b.updateMissionData(r),m===vt.A.CARD?P.b.addInfiniteCard(s):[vt.A.CASH_ACCOUNT_AMOUNT,vt.A.CASH].includes(m)&&P.b.setCashAccount(c)):pt.a.showToast("请稍后重试")})).catch((function(){pt.a.showToast("请稍后重试")}))}}}),Object(W.a)(Ia.prototype,"translate",[U.computed],Object.getOwnPropertyDescriptor(Ia.prototype,"translate"),Ia.prototype),Ra=Ia))||Ra,ao=Object(x.observer)((Ua=function(e){Object(T.default)(BottomContain,e);var t=Object(S.default)(BottomContain);function BottomContain(){return Object(M.default)(this,BottomContain),t.apply(this,arguments)}return Object(N.default)(BottomContain,[{"key":"render","value":function render(){var e=L.a.bottomMissionStyleGray,t=L.a.newHomeGray,a=A.a.isListenAndShowBiz,o=P.b.isBlankUser,n=R.b.blankBottomMission;return z.a.createElement(z.a.Fragment,null,z.a.createElement(ht,null),z.a.createElement(ea,null),z.a.createElement(Te,null),z.a.createElement(ya,null),a?z.a.createElement(D.a,null):this.showWelfareMission?z.a.createElement(St,null):this.showReturnMission?z.a.createElement(to,null):t||o&&!n?null:e?z.a.createElement(Ye,null):z.a.createElement(Kt,null))}},{"key":"showWelfareMission","get":function get(){var e=R.b.getMissionInfo(I.i.CASH_WELFARE_WECHAT).status;return[I.g.drawable,I.g.progressing].includes(e)&&!L.a.bottomMissionStyleGray}},{"key":"showReturnMission","get":function get(){var e=R.b.getMissionInfo(I.i.RETURN_READ_MISSION).status;return[I.g.drawable,I.g.progressing].includes(e)}}]),BottomContain}(K.Component),Object(W.a)(Ua.prototype,"showWelfareMission",[U.computed],Object.getOwnPropertyDescriptor(Ua.prototype,"showWelfareMission"),Ua.prototype),Object(W.a)(Ua.prototype,"showReturnMission",[U.computed],Object.getOwnPropertyDescriptor(Ua.prototype,"showReturnMission"),Ua.prototype),La=Ua))||La;t.default=ao}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-fun-read/js/dynamic_bottom_contain~10ea7a8a_a27d7c57e2180a1bac9c.js.map