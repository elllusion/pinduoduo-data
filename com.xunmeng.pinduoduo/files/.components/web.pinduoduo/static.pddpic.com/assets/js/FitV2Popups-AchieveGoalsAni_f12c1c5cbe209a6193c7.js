(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"N5Iu":function(e,a,t){e.exports={"header":"_2P0ccZe","headerLeft":"VMDDbCP","headerMid":"_2F10AJh","headerRight":"_2w9s9Ne","mainBox":"_1P8sq6d","mainBoxDuration":"Aqcblme","mainRing":"_2tptoKm","mainRingScale":"_1Qa3CjE","mainStars":"_3qc80-v","mainStarsAni":"_3u9oRg0","mainBg":"u9YIcdw","mainContent":"_17G6NmD","mainScale":"_2g6Mpjj","spinLightBox":"nNv_EiB","spinLight":"_2-Akfck","mainLightBg":"_2MmdpTO","mainLightBgFadeOut":"_18N_jRG","mainLight":"_1AJjMH4","mainAmount":"Thj-p9G","mainUnit":"_1MCinvI","staticFadeIn":"_1IoMRmV","wrapper":"_7MLKGy7","title":"_2I3Nwuj","loading":"_1UKTDWp","loadingText":"_1h2JF1c","loadingMove":"FFkZdy8","money":"T6cnJ2B","shake":"_1drn2Qz","wechatTurnAni":"_3ZxBGRP","moneyBk":"_1kdoU9L","ten":"_21Y8wo2","red":"_1pt5PeZ","yuan":"_3Qb2UHP","light":"cdGzd0v","achieveGoalsAccount":"_31C-f1e","mainMove":"_2RNZeji"}},"WKZG":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return x}));var n,i=t("a+Ds"),c=t("wzp5"),o=t("p5LO"),r=t("kRu4"),s=t.n(r),l=t("RgDV"),m=t("w9YI"),h=t("QjaO"),d=t("cJQI"),_=t("ZsPb"),g=t("JsaZ"),u=t("MQ17"),v=t("q1tI"),p=t.n(v),b=t("2oo6"),E=t("TyAF"),f=t("gpDe"),j=t("N5Iu"),N=t.n(j),O=t("7Qib"),A=t("3uR/"),k=t("TSYQ"),S=t.n(k),y=t("Fmrv"),G=t("cl2I"),B=t("fsdm"),I=t("bmJN"),M=t("ndO7"),w=t("klxc"),C={"10":"achieve_goal_header_mid_10","20":"achieve_goal_header_mid_20","30":"achieve_goal_header_mid_30","40":"achieve_goal_header_mid_40","50":"achieve_goal_header_mid_50","60":"achieve_goal_header_mid_60","70":"achieve_goal_header_mid_70","80":"achieve_goal_header_mid_80","90":"achieve_goal_header_mid_90","100":"achieve_goal_header_mid_100"},x=Object(E.inject)(f.b.POPUP_QUEUE,f.b.EXCHANGE_MASK,f.b.GLOBAL,f.b.NEW_USER_GUIDE,f.b.ENV)(n=Object(E.observer)(n=function(e){Object(_.a)(AchieveGoalsAni,e);var a=Object(g.a)(AchieveGoalsAni);function AchieveGoalsAni(e){var t;return Object(m.a)(this,AchieveGoalsAni),t=a.call(this,e),Object(u.a)(Object(d.a)(t),"computeProcessMove",Object(l.a)(s.a.mark((function _callee(){var e;return s.a.wrap((function _callee$(a){for(;;)switch(a.prev=a.next){case 0:return e=Math.min(100*t.target/t.target,100),a.next=3,Object(A.v)(50);case 3:t.setState({"loadingStyle":{"transform":"translateX(".concat(e-100,"%)"),"WebkitTransform":"translateX(".concat(e-100,"%)")}});case 4:case"end":return a.stop()}}),_callee)})))),Object(u.a)(Object(d.a)(t),"getMainInitPosition",(function(){t.envStore.navBarHeight;var e,a,n=(null===(e=document.querySelector("#achieveGoalsAniMain"))||void 0===e?void 0:e.getBoundingClientRect())||{},i=n.width,c=void 0===i?0:i,o=n.left,r=void 0===o?0:o,s=n.top,l=void 0===s?0:s,m=n.height,h=void 0===m?0:m,d=(null===(a=document.querySelector("#processWechatIcon"))||void 0===a?void 0:a.getBoundingClientRect())||{},_=d.width,g=void 0===_?0:_,u=d.height,v=void 0===u?0:u,p=d.left,b=void 0===p?273:p,E=d.top;return{"translateX":b-r-c/2+g/2,"translateY":l-((void 0===E?100:E)+v/2)+h/2}})),Object(u.a)(Object(d.a)(t),"onClose",(function(){t.popupQueueStore.close("showAchieveGoalsAni")})),Object(u.a)(Object(d.a)(t),"handleBtnClick",(function(){t.onClose(),Object(y.C)({},G.d)})),t.state={"translateX":0,"translateY":0,"duration":!1,"loadingStyle":{"transform":"translateX(-100%)","WebkitTransform":"translateX(-100%)"}},t}return Object(h.a)(AchieveGoalsAni,[{"key":"componentDidMount","value":function componentDidMount(){var e,a=this;Object(M.I)(w.a.ACHIEVE_GOAL_ANI),null!==(e=this.globalStore.achieveGoalInfo)&&void 0!==e&&e.popupVos&&(this.globalStore.achieveGoalInfo.popupVos=[]),this.computeProcessMove(),this.setState(this.getMainInitPosition(),(function(){setTimeout((function(){a.setState({"translateX":0,"translateY":0,"duration":!0})}),1300)}))}},{"key":"renderProcess","value":function renderProcess(){var e,a=null===(e=this.globalStore.standardWithdrawProgressVo)||void 0===e?void 0:e.hideWx;return p.a.createElement(o.a,{"className":N.a.wrapper,"style":{"top":Object(I.a)(2*this.topDistance)}},p.a.createElement(o.a,{"className":N.a.title},"恭喜赚满".concat(Object(A.o)(this.target),"元")),p.a.createElement(o.a,{"className":N.a.loading},p.a.createElement(o.a,{"className":N.a.loadingText},"".concat(Math.min(100*this.target/this.target,100).toFixed(2),"%")),p.a.createElement(o.a,{"className":N.a.loadingMove,"style":this.state.loadingStyle},p.a.createElement(c.a,{"className":N.a.light,"src":Object(O.a)("back_user_loading_light2")}))),p.a.createElement(o.a,{"className":S()(N.a.money),"id":"processWechatIcon"},p.a.createElement(c.a,{"className":N.a.moneyBk,"src":Object(O.a)(a?"hide_wx_bk":"back_user_loading_wepay")}),p.a.createElement(o.a,{"className":S()(N.a.ten,Object(u.a)({},N.a.red,a))},this.target,p.a.createElement(i.a,{"className":N.a.yuan},"元"))))}},{"key":"render","value":function render(){var e=this.state,a=e.translateX,t=void 0===a?0:a,n=e.translateY,i=void 0===n?0:n,r=e.duration;return p.a.createElement(p.a.Fragment,null,p.a.createElement(B.a,{"wrapperCls":N.a.achieveGoalsAccount}),this.renderProcess(),p.a.createElement(b.a,{"disableContentBg":!0,"deepMask":!0,"onClose":this.onClose,"customBtn1Style":{"color":"#AA2F00","backgroundImage":"linear-gradient(180deg, #FFF2D7 0%, #FFB118 100%)"},"btn1Text":"立即提现","showClose":!0,"closeCls":N.a.staticFadeIn,"onBtn1Confirm":this.handleBtnClick,"btn1CustomCls":N.a.staticFadeIn},p.a.createElement(o.a,{"className":N.a.content},p.a.createElement(o.a,{"className":S()(N.a.header,N.a.staticFadeIn)},p.a.createElement(c.a,{"className":N.a.headerLeft,"src":Object(O.a)("achieve_goal_header_left")}),p.a.createElement(c.a,{"className":N.a.headerMid,"src":Object(O.a)(C[this.target])}),p.a.createElement(c.a,{"className":N.a.headerRight,"src":"https://funimg.pddpic.com/fit/achieve_goal_header_left/achieve_goal_header_right.png"})),p.a.createElement(o.a,{"className":S()(N.a.mainBox,Object(u.a)({},N.a.mainBoxDuration,r)),"id":"achieveGoalsAniMain","style":{"transform":"translate(".concat(t,"px,").concat(-i,"px)"),"WebkitTransform":"translate(".concat(t,"px,").concat(-i,"px)")}},p.a.createElement(o.a,{"className":N.a.mainContent,"style":{"transform":"scale(0.01,0.2)"}},p.a.createElement(o.a,{"className":N.a.spinLightBox},p.a.createElement(c.a,{"src":Object(O.a)("achieve_goal_main_spin_light2"),"className":N.a.spinLight})),p.a.createElement(c.a,{"src":Object(O.a)("achieve_goal_header_main_ring2"),"className":N.a.mainRing}),p.a.createElement(c.a,{"src":Object(O.a)("achieve_goal_header_main_light2"),"className":N.a.mainLight}),p.a.createElement(c.a,{"src":Object(O.a)("achieve_goal_header_main"),"className":N.a.mainBg}),p.a.createElement(c.a,{"src":Object(O.a)("achieve_goal_header_main_stars"),"className":S()(N.a.mainStars,N.a.mainStarsScale)}),p.a.createElement(o.a,{"className":N.a.mainAmount},this.target,p.a.createElement(o.a,{"className":N.a.mainUnit},"元")),p.a.createElement(c.a,{"src":Object(O.a)("achieve_goal_main_bg_light2"),"className":N.a.mainLightBg}))))))}},{"key":"target","get":function get(){var e;return(null===(e=this.globalStore.achieveGoalInfo)||void 0===e?void 0:e.skuAmount)/100}},{"key":"popupQueueStore","get":function get(){return this.props[f.b.POPUP_QUEUE]}},{"key":"newUserGuideStore","get":function get(){return this.props[f.b.NEW_USER_GUIDE]}},{"key":"envStore","get":function get(){return this.props[f.b.ENV]}},{"key":"globalStore","get":function get(){return this.props[f.b.GLOBAL]}},{"key":"exchangeMaskStore","get":function get(){return this.props[f.b.EXCHANGE_MASK]}},{"key":"topDistance","get":function get(){return 15}}]),AchieveGoalsAni}(v.Component))||n)||n}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-fit/js/FitV2Popups-AchieveGoalsAni_f12c1c5cbe209a6193c7.js.map