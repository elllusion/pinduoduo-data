(window.ReadWeJsonp=window.ReadWeJsonp||[]).push([[29],{"ivNx":function(e,a,t){"use strict";t.r(a);var n,c=t("p5LO"),r=t("1OyB"),o=t("vuIU"),d=t("Ji7U"),l=t("LK+K"),i=t("TyAF"),s=t("q1tI"),u=t.n(s),m=t("deMC"),p="_2djInIg",f=t("TSYQ"),g=t.n(f),_=t("JAw4"),b=t("a+Ds"),O=t("CwhG"),h=t("JX7q"),A=t("rePB"),v=t("vZ4y"),T="_XyreCnj",j="_1m0gHNa",P="_mDPSlt0",w="_2da27BM",E="_RNZzBB9",N="_3Kq3m4s",C="_2v7JOAf",D="_3j3w_kW",y="_y-PrgfW",k="_1zD_JU1",S="_33nEhMU",J="_1qBVqSt",I="_bwwH6X3",B={"white_ad":"_3EKQXQK","adList":"_3O4Q0f2","adContainTitle":"_gTBK6Jh","adTime":"_1EetB2d","green_ad":"_O2oJOwP","yellow_ad":"_7Vj4nh9","blue_ad":"_1jzK7Ff","black_ad":"_83i9SrU","ink_ad":"_2is93eh","mountain_ad":"_3nNTzkq","bamboo_ad":"_1bENbP8","daisy_ad":"_1yrkIsR","flower_ad":"_nlSkcJa","spring_ad":"_1EpsSUJ"},L=t("65Nj"),R=t("rW/q"),K=t("NlLh"),M=t("bmJN"),U=t("bdvc"),q=t("1KX3"),x=t("jY+O"),W=t("wfMH"),H=t("d7Jr"),X=t("FpOS");!function(e){e.AD="ad"}(n||(n={}));var z,F,G=t("cmhe"),Q=t("2vnA"),V=t("Y/FJ"),Y=t("laqm"),Z=t("TRXh"),$=Object(q.a)(B,"#color_ad"),ee=Object(i.observer)(z=function(e){Object(d.default)(AdPageAd,e);var a=Object(l.default)(AdPageAd);function AdPageAd(){var e;Object(r.default)(this,AdPageAd);for(var t=arguments.length,n=new Array(t),c=0;c<t;c++)n[c]=arguments[c];return e=a.call.apply(a,[this].concat(n)),Object(A.default)(Object(h.default)(e),"disposer",void 0),Object(A.default)(Object(h.default)(e),"adTimeIntervalDisposer",void 0),Object(A.default)(Object(h.default)(e),"state",{"stopTurnPageCountDown":0,"actualAdList":[]}),Object(A.default)(Object(h.default)(e),"startAdTimeCountDown",(function(){m.a.lockPage(),e.setState({"stopTurnPageCountDown":m.a.stopPageTurningTime}),e.adTimeIntervalDisposer=Object(Y.a)((function(){Object(Q.runInAction)((function(){e.setState({"stopTurnPageCountDown":e.state.stopTurnPageCountDown-1},(function(){var a;e.state.stopTurnPageCountDown<1&&(m.a.unlockPage(),null===(a=e.adTimeIntervalDisposer)||void 0===a||a.clear())}))}))}),1e3)})),e}return Object(o.default)(AdPageAd,[{"key":"handleClickGotoOrder","value":function handleClickGotoOrder(){Object(H.a)(X.c.ORDER_CHAPTER,{"ad_page_type":n.AD}),x.b.goScanVipCardGoods((function(){x.b.afterVipOrderBack()}))}},{"key":"componentDidMount","value":function componentDidMount(){var e=this,a=Object(R.d)(),t=a.windowWidth,c=a.windowHeight,r=4;c/t<1.5&&(r=2),W.a.getAdListPromise().then((function(){var a=W.a.adList.slice(0).sort((function(){return Math.random()-.5})).slice(0,r);e.setState({"actualAdList":a})})),Object(H.b)(X.c.ORDER_CHAPTER,{"ad_page_type":n.AD}),m.a.showAdInterval&&(this.disposer=Object(Q.reaction)((function(){var e=m.a.currentContentData,a=m.a.currentPageIndex,t=m.a.chapterNum,n=m.a.endAdChapterNum;return(e[a]||{}).pageType===V.X.AD_PAGE&&t===n}),(function(a){if(a){var t=m.a.bidStr,n=m.a.chapterNum,c=m.a.stopPageTurningTime;e.startAdTimeCountDown(),Z.a.showToast("".concat(c,"秒后可继续翻页")),m.a.adPageCountDownCache["".concat(t,"-").concat(n)]=!0,m.a.endAdChapterNum=-1}})))}},{"key":"componentWillUnmount","value":function componentWillUnmount(){var e,a;null===(e=this.adTimeIntervalDisposer)||void 0===e||e.clear(),null===(a=this.disposer)||void 0===a||a.call(this),m.a.unlockPage()}},{"key":"render","value":function render(){var e=m.a.colorMode,a=m.a.stopPageTurningTime,t=(W.a.adList,W.a.adText||{}),n=t.title,r=t.btnText,o={"whiteSpace":"nowrap","fontSize":Object(M.a)(30)},d=this.state,l=d.stopTurnPageCountDown,i=d.actualAdList;return u.a.createElement(u.a.Fragment,null,u.a.createElement(c.a,{"className":g()(T,$[e]),"onClick":this.handleClickGotoOrder},u.a.createElement(c.a,{"className":g()(w,B.adList)},i.map((function(e,a){var t=e.hdThumbUrl,n=e.goodsName,r=e.price,o=e.group,d=e.salesTip,l=Object(U.c)(Number(r||(o||{}).price));return u.a.createElement(c.a,{"className":E,"key":"".concat(n,"+").concat(a)},u.a.createElement(O.a,{"className":N,"src":t}),u.a.createElement(c.a,{"className":C},n),u.a.createElement(c.a,{"className":D},u.a.createElement(c.a,{"className":y},l),u.a.createElement(c.a,{"className":k},d)))}))),u.a.createElement(c.a,{"className":g()(j,B.adContainTitle)},u.a.createElement(L.a,{"text":n,"strongStyle":{"color":"#FE3B3B"}})),u.a.createElement(c.a,{"className":P},"会员可享",u.a.createElement(b.a,{"className":J},"无广告，免费读小说"),"等特权"),u.a.createElement(v.a,{"text":r,"size":K.a.large,"style":o}),!!a&&u.a.createElement(c.a,{"className":I},l>0?"".concat(l,"秒后"):"","继续阅读下一章",u.a.createElement(G.a,{"fontName":"more"}))),u.a.createElement(c.a,{"className":S},"每一次浏览都是对作者的支持"))}}]),AdPageAd}(s.Component))||z,ae=t("SATD"),te=Object(i.observer)(F=function(e){Object(d.default)(AdPage,e);var a=Object(l.default)(AdPage);function AdPage(){return Object(r.default)(this,AdPage),a.apply(this,arguments)}return Object(o.default)(AdPage,[{"key":"render","value":function render(){var e=m.a.colorMode,a=m.a.headerExtraContent,t=ae.b.statusbarHeight,n={"paddingTop":"calc(".concat(Object(M.a)(V.K+(a?V.o:0))," + ").concat(t,"px)")};return u.a.createElement(c.a,{"className":g()(p,_.a[e],_.e[e]),"style":n},u.a.createElement(ee,null))}}]),AdPage}(s.Component))||F;a.default=te}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-fun-read/js/dynamic_read_ad_page~eaeb9ec9_e5c57b54cbc41f7ee25e.js.map