(window.ReadWeJsonp=window.ReadWeJsonp||[]).push([[5],{"XwWF":function(e,t,a){"use strict";a.r(t);var n,o,l,c,r,i,s,u,d,f=a("JqEv"),m=a("CwhG"),b=a("p5LO"),p=a("a+Ds"),h=a("ODXe"),y=a("a3ss"),O=a("1OyB"),g=a("vuIU"),j=a("JX7q"),E=a("Ji7U"),k=a("LK+K"),T=a("rePB"),v=a("Y65e"),C=(a("+JCI"),a("q1tI")),S=a.n(C),N=a("TyAF"),_="_3xGwJyX",w="_30CRPJG",L="_1vFW8R8",F="_2mSN8Y-",B="_1C5stDd",G="_2m93zy0",I="_2OUCPgb",R="_1hepAP7",W="_2rxW0mo",x="_3KXopUa",z="_3-lp_Nw",M="_2tyDJmf",A="_3Cu31aE",P="_2rYwYxN",J="_2U-KKfz",U="_2Ka8m6w",Y="_yUauWgc",D="_1zGw4iY",K="_3YeCHbI",H="_2unGDOn",q="_3z-ScC7",X="_2fGrMqy",Q="_SiB06_B",V="_3Tsh-l8",Z="_31zuGyg",$=a("SATD"),ee=a("jY+O"),te=a("TSYQ"),ae=a.n(te),ne=a("ofKo"),oe=a("Y9WU"),le=a("x1gn"),ce=a("nigR"),re=a("2vnA"),ie=a("AFLg"),se=a("W1Es"),ue=a("bmJN"),de=a("9HfE"),fe=function(e){Object(E.default)(FakeBookItem,e);var t=Object(k.default)(FakeBookItem);function FakeBookItem(){return Object(O.default)(this,FakeBookItem),t.apply(this,arguments)}return Object(g.default)(FakeBookItem,[{"key":"render","value":function render(){var e=this.props.bottomLine,t=void 0!==e&&e;return S.a.createElement(b.a,{"className":ae()(de.a.mainRecommend,de.a.placeholder)},S.a.createElement(b.a,{"className":de.a.bookCover}),S.a.createElement(b.a,{"className":de.a.bookInfo},S.a.createElement(b.a,{"className":de.a.nameScore},S.a.createElement(b.a,{"className":de.a.bookName})),S.a.createElement(b.a,{"className":de.a.bookIntro}),S.a.createElement(b.a,{"className":de.a.bookTag})),t&&S.a.createElement(b.a,{"className":de.a.splitLine}))}}]),FakeBookItem}(C.Component),me=a("1Vsq"),be=a("4bvG"),pe="_MysQBXE",he="_20Y6e3W",ye="_2z7CdOU",Oe=function(e){Object(E.default)(GotoTop,e);var t=Object(k.default)(GotoTop);function GotoTop(){return Object(O.default)(this,GotoTop),t.apply(this,arguments)}return Object(g.default)(GotoTop,[{"key":"render","value":function render(){var e=this.props,t=e.onGotoTop,a=e.show;return S.a.createElement(b.a,{"className":ae()(pe,Object(T.default)({},he,a)),"onClick":t},S.a.createElement(p.a,{"className":ye},"顶部"))}}]),GotoTop}(C.Component),ge=a("zVdJ"),je=a("6OU5"),Ee=a("c+b6"),ke=a("fb3C"),Te=a("N17M"),ve=a("rgpQ"),Ce=(n=Object(Te.a)({"errorType":ve.a.WHITE_SCREEN_ERROR,"componentName":"BookCategory"}),o=Object(be.b)(500),n(l=Object(N.observer)((c=function(e){Object(E.default)(BookCategory,e);var t=Object(k.default)(BookCategory);function BookCategory(){var e;Object(O.default)(this,BookCategory);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return e=t.call.apply(t,[this].concat(n)),Object(T.default)(Object(j.default)(e),"state",{"bottomLine":!1,"titleHeight":0,"filterHeight":0,"showSubTitle":!1,"filterFixed":!1,"showGotoTop":!1}),Object(T.default)(Object(j.default)(e),"scrollContainRef",void 0),Object(T.default)(Object(j.default)(e),"scrollItemRef",void 0),Object(T.default)(Object(j.default)(e),"disposer",[]),Object(T.default)(Object(j.default)(e),"handleBack",(function(){ee.b.goBack()})),Object(T.default)(Object(j.default)(e),"handleScroll",(function(t){var a=t.detail.scrollTop,n=e.state,o=n.filterHeight,l=n.bottomLine,c=n.filterFixed,r=n.showSubTitle,i=n.showGotoTop,s=a>5&&a<=o,u=a>o,d=a>ge.a;l===s&&!1===c&&r===u&&i===d||e.setState({"bottomLine":s,"filterFixed":!1,"showSubTitle":u,"showGotoTop":d})})),Object(y.a)(Object(j.default)(e),"handleSelectMale",r,Object(j.default)(e)),Object(y.a)(Object(j.default)(e),"handleSelectFemale",i,Object(j.default)(e)),Object(T.default)(Object(j.default)(e),"handleSelectWordType",(function(e){le.a.currentWordType=e.wordsType||me.f})),Object(y.a)(Object(j.default)(e),"handleSelectCategory",s,Object(j.default)(e)),Object(T.default)(Object(j.default)(e),"changeCategoryPos",(function(){Object(je.q)(0).then((function(){var t,a,n,o,l=null===(t=e.scrollContainRef)||void 0===t||null===(a=t.vnode)||void 0===a?void 0:a.dom,c=null===(n=e.scrollItemRef)||void 0===n||null===(o=n.vnode)||void 0===o?void 0:o.dom;if(l&&c){var r=c.offsetLeft-(l.clientWidth-c.clientWidth)/2;l.scrollLeft=r}}))})),Object(T.default)(Object(j.default)(e),"handleSelectRankType",(function(e){le.a.currentRankType=e})),Object(y.a)(Object(j.default)(e),"resetFilter",u,Object(j.default)(e)),Object(y.a)(Object(j.default)(e),"handleScrollToLower",d,Object(j.default)(e)),Object(T.default)(Object(j.default)(e),"setFilterFixed",(function(){e.setState({"showSubTitle":!1,"filterFixed":!0})})),Object(T.default)(Object(j.default)(e),"genSubTitle",(function(){var e=le.a.currentCategoryType,t=le.a.currentRankType,a=le.a.actualCategoryTypeList,n=le.a.rankTypeList,o=a.find((function(t){return t.categoryId===e})),l=n.find((function(e){return e.id===t}));return"".concat(null==o?void 0:o.categoryName," · ").concat(null==l?void 0:l.text)})),Object(T.default)(Object(j.default)(e),"calcScrollPosition",(function(){var t=ue.b.call(Object(j.default)(e),".".concat(L)),a=ue.b.call(Object(j.default)(e),".".concat(W));Promise.all([t,a]).then((function(t){var a=Object(h.default)(t,2),n=a[0],o=a[1];e.setState({"titleHeight":n.height,"filterHeight":o.height})})).catch(ke.b)})),Object(T.default)(Object(j.default)(e),"handleGotoTop",(function(){le.a.setScrollTop(Math.random())})),e}return Object(g.default)(BookCategory,[{"key":"componentDidMount","value":function componentDidMount(){var e=this;le.a.queryCategoryFilterList().then((function(){e.calcScrollPosition(),e.changeCategoryPos()})),this.disposer.push(Object(re.reaction)((function(){return le.a.currentKey}),(function(){Object(re.runInAction)((function(){var e;null!==(e=le.a.categoryBookList)&&void 0!==e&&e.length||le.a.getCategoryBook(),le.a.setScrollTop(0)}))}))),this.disposer.push(Object(re.reaction)((function(){return le.a.currentCategoryType}),(function(){e.changeCategoryPos()}))),a("Wr5T");var t=new IntersectionObserver((function(t){t[0].intersectionRatio<=0||e.handleScrollToLower()}),{"threshold":[.9]}),n=document.querySelector("#read_category_page_observer");n&&t.observe(n)}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.disposer.forEach((function(e){return null==e?void 0:e()}))}},{"key":"render","value":function render(){var e=this,t=this.state,a=t.bottomLine,n=t.showSubTitle,o=t.filterFixed,l=t.showGotoTop,c=$.b.isIphoneX,r=$.b.navBarHeight,i=le.a.actualCategoryTypeList,s=le.a.currentCategoryType,u=le.a.currentRankType,d=le.a.currentGender,h=le.a.wordsTypeList,y=le.a.categoryBookList,O=le.a.currentWordType,g=le.a.currentKeyFinishLoading,j=le.a.actualScrollTop,E=le.a.recommendPageElSn,k=le.a.rankTypeList,v=this.genSubTitle(),C={"top":"".concat(r,"px")},N={"position":o?"fixed":"relative"};return S.a.createElement(b.a,{"className":_},S.a.createElement(f.a,{"scrollY":!0,"className":w,"onScroll":this.handleScroll,"scrollTop":j,"lowerThreshold":me.d,"onScrollToLower":this.handleScrollToLower},S.a.createElement(ne.a,{"bottomLine":a,"className":L},S.a.createElement(b.a,{"className":F},S.a.createElement(oe.a,{"onClick":this.handleBack}),S.a.createElement(b.a,{"className":B},S.a.createElement(b.a,{"className":ae()(G,Object(T.default)({},I,d===ce.p.MALE)),"onClick":this.handleSelectMale},S.a.createElement(p.a,null,"男生"),d===ce.p.MALE&&S.a.createElement(b.a,{"className":R})),S.a.createElement(b.a,{"className":ae()(G,Object(T.default)({},I,d===ce.p.FEMALE)),"onClick":this.handleSelectFemale},S.a.createElement(p.a,null,"女生"),d===ce.p.FEMALE&&S.a.createElement(b.a,{"className":R}))))),n&&S.a.createElement(b.a,{"className":Q,"style":C,"onClick":this.setFilterFixed},S.a.createElement(b.a,null,v),S.a.createElement(b.a,{"className":V})),S.a.createElement(b.a,{"className":W,"style":N},S.a.createElement(b.a,{"className":x},S.a.createElement(b.a,{"className":z,"ref":function ref(t){e.scrollContainRef=t}},i.map((function(t,a){return S.a.createElement(b.a,{"key":"".concat(t.categoryId,"_").concat(a,"_").concat(s===t.categoryId?s:""),"className":ae()(M,Object(T.default)({},I,s===t.categoryId)),"onClick":e.handleSelectCategory.bind(e,t.categoryId),"ref":function ref(a){s===t.categoryId&&(e.scrollItemRef=a)}},t.categoryName)}))),S.a.createElement(b.a,{"className":A}),S.a.createElement(b.a,{"className":P})),S.a.createElement(b.a,{"className":J},h.map((function(t){return S.a.createElement(b.a,{"className":ae()(U,Object(T.default)({},I,O===t.wordsType)),"key":t.wordsType,"onClick":e.handleSelectWordType.bind(e,t)},t.desc)}))),S.a.createElement(b.a,{"className":J},k.map((function(t){return S.a.createElement(b.a,{"className":ae()(U,Object(T.default)({},I,u===t.id)),"key":t.id,"onClick":e.handleSelectRankType.bind(e,t.id)},t.text)})))),o&&S.a.createElement(b.a,{"className":Z}),S.a.createElement(b.a,{"className":Y},S.a.createElement(b.a,null,y.map((function(e,t){var a=e.bidStr,n={"idx":t};return S.a.createElement(ie.a,{"key":a+t,"data":e,"score":!0,"trackingElsn":E,"extraTrackingData":n,"bottomLine":t!==y.length-1,"trackPrec":!0})}))),S.a.createElement(b.a,null,0===y.length&&!g&&S.a.createElement(S.a.Fragment,null,S.a.createElement(fe,{"key":1}),S.a.createElement(fe,{"key":2}))),0===y.length&&g&&S.a.createElement(b.a,{"className":D},S.a.createElement(m.a,{"src":Object(se.a)("no_recent_book"),"className":K}),S.a.createElement(b.a,{"className":H},"暂无书籍，试试别的组合吧"),S.a.createElement(b.a,{"className":q,"onClick":this.resetFilter},"重置筛选"))),y.length>1&&g&&S.a.createElement(Ee.a,{"title":"书库扩充中，敬请期待"}),c&&S.a.createElement(b.a,{"className":X}),S.a.createElement(Oe,{"onGotoTop":this.handleGotoTop,"show":l}),S.a.createElement(b.a,{"id":"read_category_page_observer","key":"read_category_page_observer"})))}}]),BookCategory}(C.Component),r=Object(v.a)(c.prototype,"handleSelectMale",[re.action],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){var e=this;return function(){le.a.currentGender=ce.p.MALE,e.handleSelectCategory(me.a)}}}),i=Object(v.a)(c.prototype,"handleSelectFemale",[re.action],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){var e=this;return function(){le.a.currentGender=ce.p.FEMALE,e.handleSelectCategory(me.a)}}}),s=Object(v.a)(c.prototype,"handleSelectCategory",[re.action],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){var e=this;return function(t){le.a.currentCategoryType=t,t===me.a&&e.handleSelectRankType(le.a.recRankTypeAfterGray)}}}),u=Object(v.a)(c.prototype,"resetFilter",[re.action],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){return function(){le.a.resetFilter()}}}),d=Object(v.a)(c.prototype,"handleScrollToLower",[o],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){return function(){var e=le.a.currentKeyFinishLoading,t=le.a.categoryBookData.page;e||0===(void 0===t?0:t)||le.a.getCategoryBook()}}}),l=c))||l)||l);t.default=Ce}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-fun-read/js/dynamic_book_category~31ecd969_841c7efc1b57ed9ef72d.js.map