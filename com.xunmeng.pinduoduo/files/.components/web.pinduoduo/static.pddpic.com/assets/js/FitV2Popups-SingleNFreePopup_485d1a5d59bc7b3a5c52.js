(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{"0fkw":function(e,t,n){e.exports={"body":"dX-o-hh","singleNFreePopupWaiOpen":"_2qdoBAK","singleNFreePopupKai":"_3tnJSv_","breatheScale":"_26QHSpT","singleNFreePopupDiOpen":"_2HoIgLH","headTitle":"_2aYkTwt","openBody":"_1qwWqfn","openBodyHeadTitle":"_3FG0hTU","openBodyHeadTitleopacityChange":"_18imqOj","singleNFreePopupOpenBody":"hO0OXJP","singleNFreePopupCon":"_1UsweTN","popupConMove":"_1F-9zFJ","singleNFreePopupConTitle":"_3bIrTrD","conOpacityChange":"_1XinCW8","singleNFreePopupConList":"_37Ib76I","singleNFreePopupConListCon":"_2sjL4ED","singleNFreePopupConListConSix":"_22mdcEE","singleNFreePopupConListConLast":"_27mVoML","singleNFreePopupConListConLastText":"_2l7g-V1","singleNFreePopupConListConMoney":"_2466tH5","singleNFreePopupConListConMoneyN":"KG9L0cS","singleNFreePopupConListConMoneyH":"SsrlLfw","singleNFreePopupDiOpenBottom":"bMkUr4O","singleNFreePopupDiOpenTwo":"BCfvVKf","singleNFreePopupDiOpenBottomTime":"_1QjGEIn","singleNFreePopupDiOpenBottomBtn":"_2J5WEd3","singleNFreePopupLightConImg":"_2mj8TMF","singleNFreelightBg":"_22ZSIoI","singleNFreePopupLightBig":"_2ac0C61","singleNFreePopupLightBigMove":"_2gaQRhY","singleNFreelightHeadTitle":"_2BbhFc-","lightHeadTitleMove":"Dyz34YW","singleNFreelightHeadTitleOne":"_1n9cFgp","lightHeadTitleMoveOne":"mxBiv4T","singleNFreelightHeadTitleGood":"_1YoQyK7","singleNFreelightHeadTitleGoodChange":"_3yDZ-zR","singleNFreePopupLightCon":"_3u3JksM","popupLightConChange":"_2KtNghi","desc":"_3HZF_HO","descOpacityChange":"_1uY7FHH","clickStatus":"_3DILZLP","singleNFreeSubTitleOne":"_3U0tehx"}},"1G4H":function(e,t,n){"use strict";n.d(t,"a",(function(){return formatTimeSpecify})),n.d(t,"b",(function(){return pxTransform}));n("ILmP");var a=n("rW/q");a.c.getEnv();function pxTransform(e){return e?a.c.pxTransform(e,750):""}a.c.config||(a.c.config={"designWidth":750,"deviceRatio":{"640":1.17,"750":1,"828":.905}});function padStart(e,t,n){if(e.length>=t)return e;for(var a="",o=0;o<t-e.length;o++)a+=n;return a+e}function formatTimeSpecify(e){var t=Math.floor(e%60),n=Math.floor(e%3600/60),a=Math.floor(e%86400/3600),o=Math.ceil(e/86400),i="";if(o>1)i="".concat(o,"天");else if(86400===e)i="2天";else{var r=padStart(t.toString(),2,"0"),s=padStart(n.toString(),2,"0"),l=padStart(a.toString(),2,"0");i="".concat(l,":").concat(s,":").concat(r)}return i}},"U7df":function(e,t,n){"use strict";n.r(t);var a,o=n("WvbK"),i=n("wzp5"),r=n("p5LO"),s=n("kRu4"),l=n.n(s),p=n("RgDV"),c=n("w9YI"),u=n("QjaO"),m=n("cJQI"),g=n("ZsPb"),N=n("JsaZ"),h=n("MQ17"),F=n("q1tI"),d=n.n(F),O=n("0fkw"),b=n.n(O),f=n("W1Es"),C=n("TyAF"),P=n("gpDe"),S=n("ndO7"),T=n("klxc"),E=n("2oo6"),w=n("0Xje"),L=n("tpcr"),j=n("Fmrv"),v=n("cl2I"),_=n("glIo"),y=n("M3Mi"),D=n("hn0O"),B=n("bmJN"),k=Object(C.inject)(P.b.POPUP_QUEUE,P.b.SINGLE_N_FREE,P.b.GLOBAL)(a=Object(L.b)(w.a,"showSingleNFreePopup")(a=Object(C.observer)(a=function(e){Object(g.a)(SingleNFreePopup,e);var t=Object(N.a)(SingleNFreePopup);function SingleNFreePopup(){var e;Object(c.a)(this,SingleNFreePopup);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=t.call.apply(t,[this].concat(a)),Object(h.a)(Object(m.a)(e),"state",{"isOpen":!1}),Object(h.a)(Object(m.a)(e),"goBackShow",Object(p.a)(l.a.mark((function _callee(){var t;return l.a.wrap((function _callee$(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(v.a)({"globalStore":e.V2GlobalStore,"popupQueueStore":e.popupQueueStore},D.c.SINGLE_N_FREE);case 2:t=n.sent,e.singleNFreeStore.init(t);case 4:case"end":return n.stop()}}),_callee)})))),Object(h.a)(Object(m.a)(e),"open",(function(){e.setState({"isOpen":!0})})),Object(h.a)(Object(m.a)(e),"onClose",(function(){Object(y.a)(6556963),e.popupQueueStore.close("showSingleNFreePopup")})),Object(h.a)(Object(m.a)(e),"onConfirm",(function(){Object(y.a)(6556838),e.popupQueueStore.close("showSingleNFreePopup"),Object(j.L)(e.goBackShow)})),e}return Object(u.a)(SingleNFreePopup,[{"key":"componentDidMount","value":function componentDidMount(){Object(y.b)(6556838),Object(S.I)(T.a.SINGLE_N_FREE_POPUP)}},{"key":"render","value":function render(){var e=this.singleNFreeStore,t=e.currentOrderCount,n=e.needOrderCount,a=e.orderInfoDolist,s=e.expireTime,l=e.isOne;return d.a.createElement(E.a,{"deepMask":!0,"showClose":!0,"onClose":this.onClose,"closeIconStyle":{"right":Object(B.a)(38),"top":l?Object(B.a)(38):!this.state.isOpen&&Object(B.a)(64)},"disableContentBg":!0},this.state.isOpen?d.a.createElement(d.a.Fragment,null,!l&&d.a.createElement(i.a,{"className":b.a.openBodyHeadTitle,"src":Object(f.a)(3===n?"openBodyHeadTitleTwo":"openBodyHeadTitle")}),d.a.createElement(i.a,{"className":l?b.a.singleNFreelightHeadTitleOne:b.a.singleNFreelightHeadTitle,"src":Object(f.a)(l?"singleNFreelightHeadTitleOne":3===n?"singleNFreelightHeadTitleTwo":"singleNFreelightHeadTitle")}),d.a.createElement(r.a,{"className":b.a.singleNFreePopupLightCon},d.a.createElement(i.a,{"className":b.a.singleNFreelightBg,"src":Object(f.a)("singleNFreelightBg")}),d.a.createElement(i.a,{"className":b.a.singleNFreelightHeadTitleGood,"src":Object(f.a)("singleNFreelightHeadTitleGood")}),d.a.createElement(i.a,{"className":b.a.singleNFreePopupLightBig,"src":Object(f.a)("singleNFreePopupLightBig")}),d.a.createElement(i.a,{"className":b.a.singleNFreePopupLightConImg,"src":Object(f.a)("singleNFreePopupLightCon")})),d.a.createElement(r.a,{"className":b.a.openBody},d.a.createElement(i.a,{"className":b.a.singleNFreePopupOpenBody,"src":Object(f.a)("singleNFreePopupOpenBody")}),d.a.createElement(r.a,{"className":b.a.singleNFreePopupCon},l?d.a.createElement(i.a,{"className":b.a.singleNFreeSubTitleOne,"src":Object(f.a)("singleNFreeSubTitleOne")}):d.a.createElement(r.a,{"className":b.a.singleNFreePopupConTitle},"再拼",n-t,"单，可随机免1单"),d.a.createElement(r.a,{"className":b.a.singleNFreePopupConList},!l&&a.map((function(e,t){return d.a.createElement(r.a,{"key":t,"className":3===n?b.a.singleNFreePopupConListConSix:b.a.singleNFreePopupConListCon},d.a.createElement(i.a,{"className":b.a.singleNFreePopupConListConLast,"src":null==e?void 0:e.thumbUrl}),d.a.createElement(r.a,{"className":b.a.singleNFreePopupConListConMoney},d.a.createElement(r.a,{"className":b.a.singleNFreePopupConListConMoneyH},"￥"),d.a.createElement(r.a,{"className":b.a.singleNFreePopupConListConMoneyN},(null==e?void 0:e.orderAmount)/100)))})),d.a.createElement(r.a,{"className":b.a.singleNFreePopupConListConLast},d.a.createElement(i.a,{"className":b.a.singleNFreePopupConListConLast,"src":Object(f.a)("singleNFreePopupConListConLast")}),d.a.createElement(r.a,{"className":b.a.singleNFreePopupConListConLastText},"待拼",n-t,"单")))),d.a.createElement(r.a,{"className":b.a.singleNFreePopupDiOpenBottom},d.a.createElement(r.a,{"className":b.a.singleNFreePopupDiOpenBottomTime},"仅剩",d.a.createElement(o.a,{"bigHours":!0,"showNumberAmount":3,"finishTimeStamp":1e3*s,"onCountDownFinish":_.e})),d.a.createElement(r.a,{"onClick":this.onConfirm,"className":b.a.singleNFreePopupDiOpenBottomBtn},"去领取免单"),d.a.createElement(i.a,{"className":b.a.singleNFreePopupDiOpenTwo,"src":Object(f.a)("singleNFreePopupDiOpen")}))),d.a.createElement(r.a,{"className":b.a.desc},"* 指定页面单笔实付满15元")):d.a.createElement(r.a,{"className":b.a.body},!l&&d.a.createElement(r.a,{"className":b.a.headTitle},"你在活动内拼过",t,"单，送你"),d.a.createElement(i.a,{"className":b.a.singleNFreePopupWaiOpen,"src":Object(f.a)("singleNFreePopupWaiOpen")}),d.a.createElement(d.a.Fragment,null,d.a.createElement(i.a,{"className":b.a.singleNFreePopupKai,"src":Object(f.a)("singleNFreePopupKai")}),d.a.createElement(r.a,{"onClick":this.open,"className":b.a.clickStatus})),d.a.createElement(i.a,{"className":b.a.singleNFreePopupDiOpen,"src":Object(f.a)("singleNFreePopupDiOpen")})))}},{"key":"popupQueueStore","get":function get(){return this.props[P.b.POPUP_QUEUE]}},{"key":"singleNFreeStore","get":function get(){return this.props[P.b.SINGLE_N_FREE]}},{"key":"V2GlobalStore","get":function get(){return this.props[P.b.GLOBAL]}}]),SingleNFreePopup}(F.Component))||a)||a)||a;t.default=k},"WvbK":function(e,t,n){"use strict";var a=n("a+Ds"),o=n("p5LO"),i=n("w9YI"),r=n("QjaO"),s=n("ZsPb"),l=n("JsaZ"),p=n("q1tI"),c=n.n(p),u=n("1G4H"),m=function(e){Object(s.a)(CountDown,e);var t=Object(l.a)(CountDown);function CountDown(e){var n;return Object(i.a)(this,CountDown),(n=t.call(this,e)).timer=-1,n.state={"nowTimeStamp":0,"dt":n.props.serverTimeStamp?n.props.serverTimeStamp-Date.now():n.props.timeDiff},n}return Object(r.a)(CountDown,[{"key":"componentWillUnmount","value":function componentWillUnmount(){this.timer&&clearInterval(this.timer)}},{"key":"componentDidMount","value":function componentDidMount(){var e=Date.now()+this.state.dt;this.setState({"nowTimeStamp":e}),this.startCountDown()}},{"key":"startCountDown","value":function startCountDown(){var e=this;this.timer=setInterval((function(){var t=Date.now()+e.state.dt;if(t>=e.props.finishTimeStamp)return clearInterval(e.timer),e.setState({"nowTimeStamp":e.props.finishTimeStamp}),void(e.props.onCountDownFinish&&e.props.onCountDownFinish());e.setState({"nowTimeStamp":t},(function(){e.props.onCountDown(e.props.finishTimeStamp-e.state.nowTimeStamp)}))}),this.props.intervalTime)}},{"key":"padZero","value":function padZero(e){return 1===String(e).length?"0"+e:e}},{"key":"getTime","value":function getTime(e){var t=this.padZero(Math.floor(e%6e4/1e3)),n=this.padZero(Math.floor(e%36e5/6e4)),a=this.props.bigHours?this.padZero(Math.floor(e/36e5)):this.padZero(Math.floor(e%864e5/36e5)),o=[this.padZero(Math.floor(e/864e5)),a,n,t],i=[];!this.props.isShowSecond&&e>6e4&&o.pop();for(var r=0;o.length>0&&this.props.showNumberAmount>r++;)i.unshift(o.pop());return i}},{"key":"render","value":function render(){var e=this.props,t=e.finishTimeStamp,n=e.preText,i=e.showNumberAmount,r=e.isShowSecond,s=e.isShowOneThenthSecond,l=e.backText,p=e.useSpecify,m=e.hidePreText,g=e.hideBackText,N=t-this.state.nowTimeStamp,h=Object(u.a)(parseInt("".concat(N/1e3),10))||"",F=h.indexOf(":")>-1,d=this.getTime(N>0?N:0),O=Math.floor(N%1e3/100);return c.a.createElement(o.a,{"className":"expire-time"},p&&m&&F?null:c.a.createElement(a.a,{"className":"normal"},n),p&&h,p?null:d.map((function(e,t){return c.a.createElement(o.a,{"style":{"display":"inline"},"key":t},c.a.createElement(a.a,{"className":"num"},e),d.length-1!==t?c.a.createElement(a.a,{"className":"op"},0===t&&(i>3||i>2&&!r)?"天":":"):null)})),s&&!p?c.a.createElement(o.a,{"style":{"display":"inline"}},c.a.createElement(a.a,{"className":"op"},"."),c.a.createElement(a.a,{"className":"num millsec"},O)):null,p&&g&&F?null:c.a.createElement(a.a,{"className":"normal"},l))}}]),CountDown}(p.PureComponent);m.defaultProps={"showNumberAmount":2,"isShowOneThenthSecond":!1,"isShowSecond":!0,"preText":"","backText":"","finishTimeStamp":0,"timeDiff":0,"isCustomChildren":!1,"intervalTime":100,"onCountDown":function onCountDown(){},"bigHours":!1,"useSpecify":!1,"hidePreText":!1,"hideBackText":!1},t.a=m}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-fit/js/FitV2Popups-SingleNFreePopup_485d1a5d59bc7b3a5c52.js.map