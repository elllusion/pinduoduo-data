(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"QNOu":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return B}));var r,n=a("p5LO"),o=a("a+Ds"),c=a("wzp5"),s=a("kRu4"),l=a.n(s),u=a("RgDV"),i=a("w9YI"),p=a("QjaO"),d=a("cJQI"),b=a("ZsPb"),w=a("JsaZ"),m=a("MQ17"),h=a("q1tI"),O=a.n(h),f=a("TyAF"),k=a("3uR/"),v=a("gpDe"),g=a("Tvqd"),j=a.n(g),R=a("2oo6"),C=a("7Qib"),_=a("ktSw"),A=a("fsdm"),y=a("hn0O"),E=a("tpcr"),F=a("glIo"),B=Object(f.inject)(v.b.POPUP_QUEUE,v.b.GLOBAL,v.b.HOME_ORDER)(r=Object(E.b)(Object(F.b)(B,(function(e){var t,a,r,n=e.homeOrderStore;return(null==n||null===(t=n.browseMissionInfo)||void 0===t||null===(a=t.rewards)||void 0===a||null===(r=a.find((function(e){return e.rewardType===y.i.CASH})))||void 0===r?void 0:r.rewardAmount)>0})),"showBrowseForCashReward")(r=Object(f.observer)(r=function(e){Object(b.a)(BrowseForCashPopupsReward,e);var t=Object(w.a)(BrowseForCashPopupsReward);function BrowseForCashPopupsReward(e){var a;return Object(i.a)(this,BrowseForCashPopupsReward),a=t.call(this,e),Object(m.a)(Object(d.a)(a),"onClose",(function(){a.popupQueueStore.close("showBrowseForCashReward")})),Object(m.a)(Object(d.a)(a),"handleBtnClick",Object(_.a)(Object(u.a)(l.a.mark((function _callee(){return l.a.wrap((function _callee$(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({"showAccount":!0}),e.next=3,Object(k.v)(20);case 3:return a.globalStore.updateAccountInfo(a.globalStore.healthAccountVoTmp),a.globalStore.playRedpacketFly("#convert-fly-redpacket"),e.next=7,Object(k.v)(1e3);case 7:a.setState({"showAccount":!1}),a.onClose();case 9:case"end":return e.stop()}}),_callee)}))))),a.state={"showAccount":!1},a}return Object(p.a)(BrowseForCashPopupsReward,[{"key":"render","value":function render(){var e=this.state.showAccount;return O.a.createElement(O.a.Fragment,null,e?O.a.createElement(A.a,null):null,O.a.createElement(R.a,{"showClose":!0,"onClose":this.handleBtnClick,"headerTitle":"走路赚现金","btn1Text":"开心收下，继续逛逛","onBtn1Confirm":this.handleBtnClick,"bottomTips1":"若发生退款将会回收奖励","mainTitle":this.mainTitle},O.a.createElement(n.a,{"className":j.a.redpacket},O.a.createElement(c.a,{"className":j.a.img,"src":Object(C.a)("fit_basic_redpacket_bg")}),O.a.createElement(n.a,{"className":j.a.amount},Object(k.o)(this.browseRewardAmount/100,2),O.a.createElement(o.a,{"className":j.a.unit},"元")),O.a.createElement(c.a,{"className":j.a.openFlyRedpacket,"src":Object(C.a)("fly_redpacket_icon"),"id":"convert-fly-redpacket"}))))}},{"key":"popupQueueStore","get":function get(){return this.props[v.b.POPUP_QUEUE]}},{"key":"store","get":function get(){return this.props[v.b.HOME_ORDER]}},{"key":"globalStore","get":function get(){return this.props[v.b.GLOBAL]}},{"key":"mainTitle","get":function get(){return["恭喜完成浏览，奖励现金<#F74814#".concat(Object(k.o)(this.browseRewardAmount/100,2),"元>{redpacket%17%}")]}},{"key":"browseRewardAmount","get":function get(){var e,t,a,r;return(null===(e=this.store.browseMissionInfo)||void 0===e||null===(t=e.rewards)||void 0===t||null===(a=t.find)||void 0===a||null===(r=a.call(t,(function(e){return e.rewardType===y.i.CASH})))||void 0===r?void 0:r.rewardAmount)||0}}]),BrowseForCashPopupsReward}(h.Component))||r)||r)||r},"Tvqd":function(e,t,a){e.exports={"redpacket":"_1kV3LcL","img":"gurOSTp","amount":"_18Cv5iM","unit":"_13kWAUl","multi":"_1kI-UgF","multiText":"vbc-e1o","multiUnit":"_4ApLY16","multiBg":"_2_Fcs6y","openFlyRedpacket":"_2tEm1bD"}}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-fit/js/FitV2Popups-BrowseForCashPopupsReward_3bccd3c0cbc37cfd9195.js.map