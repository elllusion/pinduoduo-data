(window.ReadWeJsonp=window.ReadWeJsonp||[]).push([[21],{"7OIZ":function(e,t,a){"use strict";a.r(t);var n,r,o,i,l,c,s,u,d,p,f,m,A,b,h,v,O=a("JqEv"),g=a("CwhG"),C=a("p5LO"),j=a("a3ss"),y=a("1OyB"),w=a("vuIU"),E=a("JX7q"),_=a("Ji7U"),B=a("LK+K"),M=a("rePB"),x=a("Y65e"),S=(a("+JCI"),a("q1tI")),k=a.n(S),N=a("TyAF"),I="_1U46pFC",D="_YVbbP0o",W="_2_LUHnJ",T="_1MBsSXI",L="_naAf4bu",P="_1Ak0BKa",Y="_2n7_80-",U="_11mFBKt",q="_2wfxoyX",R="_bS-qFZ1",K="_3KRn_hX",H="_o-OIKts",z=a("cmhe"),F=a("SATD"),J=a("jY+O"),X=a("4bvG"),G="_1nCsxDc",Q="_3HLBxvh",V="_NiRusri",Z="_2SgaZ6b",$="_2Jj3ynq",ee="_2hO8G4F",te="_1x_1iBq",ae="_1Y6CG8l",ne="_1vucxFT",re="_-e7iOmr",oe="_1c8pYQF",ie="_2AUhPwO",le="_2WqBK1N",ce="_3fvQGTp",se=a("k/Ow"),ue=a("HIM3"),de=a("X8mR"),pe=a("9/K0"),fe=a("1Vsq"),me=a("nigR"),Ae=a("chWU"),be=a("3fu3"),he=se.i.CASH_MEDAL_READ_BOOK,ve=se.i.CASH_MEDAL_READ_DAY,Oe=se.i.CASH_MEDAL_READ_TIME,ge=(n={},Object(M.default)(n,ve,"累计阅读#targetAmount#天"),Object(M.default)(n,Oe,"累计阅读#targetAmount#个小时"),Object(M.default)(n,he,"读完#targetAmount#本小说"),n),Ce=(r={},Object(M.default)(r,ve,me.u.READ_DAY),Object(M.default)(r,Oe,me.u.READ_TIME),Object(M.default)(r,he,me.u.READ_BOOK),r),je=(o={},Object(M.default)(o,ve,"阅读#currentAmount#/#targetAmount#天"),Object(M.default)(o,Oe,"阅读#currentAmount#/#targetAmount#小时"),Object(M.default)(o,he,"读完#currentAmount#本书"),o),ye=(i=Object(X.b)(1e3),Object(N.observer)((c=function(e){Object(_.default)(MedalMissionItem,e);var t=Object(B.default)(MedalMissionItem);function MedalMissionItem(){var e;Object(y.default)(this,MedalMissionItem);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return e=t.call.apply(t,[this].concat(n)),Object(M.default)(Object(E.default)(e),"handleClickBtn",(function(){var t=e.props.data||{},a=t.missionType,n=t.status,r=t.stageTargetAmount,o=void 0===r?[]:r,i=t.drawCount,l=void 0===i?0:i;if(n===se.g.drawable){var c;be.a.cashMedalPocketPopupStore.openRedPocket({"type":Ce[a],"amount":null!==(c=null==o?void 0:o[l])&&void 0!==c?c:0,"missionType":a})}else{var s=(F.b.mixedMissionBook||{}).bidStr;s?J.b.gotoReadPage({"bidStr":s}):pe.a.bottomActionType=fe.b.BOOK_LIST}})),Object(j.a)(Object(E.default)(e),"handleBack",s,Object(E.default)(e)),e}return Object(w.default)(MedalMissionItem,[{"key":"render","value":function render(){var e,t,a,n,r=this.props.data||{},o=r.missionType,i=r.currentAmount,l=void 0===i?0:i,c=r.drawCount,s=void 0===c?0:c,u=r.stageTargetAmount,d=void 0===u?[]:u,p=r.maxCount,f=void 0===p?0:p,m=null!==(e=null==d?void 0:d[s])&&void 0!==e?e:0,A=null===(t=ge[o])||void 0===t?void 0:t.replace(/#targetAmount#/gi,m.toString()),b=f>s&&l>=m,h=l>=m?m:l,v=null===(a=je[o])||void 0===a||null===(n=a.replace(/#currentAmount#/gi,h.toString()))||void 0===n?void 0:n.replace(/#targetAmount#/gi,m.toString());return k.a.createElement(C.a,{"className":te},k.a.createElement(Ae.a,{"type":Ce[o],"amount":m,"bright":!0}),k.a.createElement(C.a,{"className":ae},k.a.createElement(C.a,{"className":ne},A),k.a.createElement(C.a,{"className":re},k.a.createElement(de.a,{"className":oe,"progressText":v,"progressOuterColor":"#febcbb","percent":Math.floor(h/m*100)}),k.a.createElement(C.a,{"className":ie}))),k.a.createElement(C.a,{"className":le,"onClick":this.handleClickBtn},b&&k.a.createElement(C.a,{"className":ce}),b?"开红包":"去阅读"))}}]),MedalMissionItem}(S.Component),s=Object(x.a)(c.prototype,"handleBack",[i],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){return function(){J.b.goBack()}}}),l=c))||l),we=a("c+b6"),Ee=se.i.CASH_MEDAL_READ_BOOK,_e=se.i.CASH_MEDAL_READ_DAY,Be=se.i.CASH_MEDAL_READ_TIME,Me=Object(N.observer)(u=function(e){Object(_.default)(MedalMission,e);var t=Object(B.default)(MedalMission);function MedalMission(){return Object(y.default)(this,MedalMission),t.apply(this,arguments)}return Object(w.default)(MedalMission,[{"key":"render","value":function render(){return k.a.createElement(C.a,{"className":G},k.a.createElement(C.a,{"className":Q},k.a.createElement(C.a,{"className":V},"我的奖励"),k.a.createElement(C.a,{"className":Z}),k.a.createElement(C.a,{"className":$}),k.a.createElement(C.a,{"className":ee},"每获得1枚勋章可开启现金红包")),[_e,Be,Ee].filter((function(e){var t=ue.b.getMissionInfo(e);return t.maxCount>t.drawCount})).map((function(e){var t=ue.b.getMissionInfo(e);return k.a.createElement(ye,{"data":t,"key":e})})),k.a.createElement(we.a,{"title":"没有更多了"}))}}]),MedalMission}(S.Component))||u,xe=a("xAig"),Se=a("evcP"),ke="_1WoTRCZ",Ne="_2HaY0Tv",Ie="_auVb2L0",De="_nGXhD9V",We="_1ev_uP3",Te=a("2vnA"),Le=a("bdvc"),Pe=(d=Object(X.b)(1e3),Object(N.observer)((f=function(e){Object(_.default)(MedalWall,e);var t=Object(B.default)(MedalWall);function MedalWall(){var e;Object(y.default)(this,MedalWall);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return e=t.call.apply(t,[this].concat(n)),Object(j.a)(Object(E.default)(e),"handleBack",m,Object(E.default)(e)),Object(M.default)(Object(E.default)(e),"handleClickMedal",(function(e){var t=e.type,a=e.amount;e.bright&&be.a.cashMedalInfoPopupStore.openWithData({"type":t,"amount":a})})),e}return Object(w.default)(MedalWall,[{"key":"render","value":function render(){var e=this;return k.a.createElement(C.a,{"className":ke},k.a.createElement(xe.a,{"showDot":!0},this.medalWallList.map((function(t,a){return k.a.createElement(Se.a,{"key":"".concat(a,"-").concat(t.length)},k.a.createElement(C.a,{"className":Ne},t.map((function(t){var a=t.type,n=t.amount,r=t.bright;return k.a.createElement(C.a,{"className":Ie},k.a.createElement(C.a,{"className":De},k.a.createElement(Ae.a,{"type":a,"amount":n,"bright":r,"onClick":e.handleClickMedal}),k.a.createElement(C.a,{"className":We},r?"获得1枚":"暂未获得")))}))))}))))}},{"key":"medalWallList","get":function get(){var e=((null===F.b||void 0===F.b?void 0:F.b.userInfo)||{}).medalWall,t=void 0===e?[]:e;return Object(Le.e)(t,6)}}]),MedalWall}(S.Component),m=Object(x.a)(f.prototype,"handleBack",[d],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){return function(){J.b.goBack()}}}),Object(x.a)(f.prototype,"medalWallList",[Te.computed],Object.getOwnPropertyDescriptor(f.prototype,"medalWallList"),f.prototype),p=f))||p),Ye=(A=Object(X.b)(1e3),Object(N.observer)((h=function(e){Object(_.default)(MedalPage,e);var t=Object(B.default)(MedalPage);function MedalPage(){var e;Object(y.default)(this,MedalPage);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return e=t.call.apply(t,[this].concat(n)),Object(j.a)(Object(E.default)(e),"handleBack",v,Object(E.default)(e)),e}return Object(w.default)(MedalPage,[{"key":"render","value":function render(){var e,t=F.b.statusbarHeight,a=F.b.navBarHeight,n=F.b.userInfo,r={"height":"".concat(a,"px"),"paddingTop":"".concat(t,"px")},o=(n||{}).medalWall,i={"height":"".concat(56+a,"px")};return k.a.createElement(C.a,{"className":I},k.a.createElement(O.a,{"scrollY":!0},k.a.createElement(C.a,{"className":D}),k.a.createElement(C.a,{"className":W,"style":r},k.a.createElement(C.a,{"className":T},k.a.createElement(z.a,{"fontName":"back","className":H,"onClick":this.handleBack}),k.a.createElement(C.a,{"className":L},k.a.createElement(g.a,{"src":null==n?void 0:n.avatar,"className":P}),k.a.createElement(C.a,null,"我的小说勋章")))),k.a.createElement(C.a,{"className":R,"style":i},k.a.createElement(C.a,{"className":Y},k.a.createElement(C.a,{"className":q}),k.a.createElement(C.a,{"className":U},"累计获得",(null==o||null===(e=o.filter((function(e){return e.bright})))||void 0===e?void 0:e.length)||0,"枚勋章"))),k.a.createElement(C.a,{"className":K,"style":i}),k.a.createElement(Pe,null),k.a.createElement(Me,null)))}}]),MedalPage}(S.Component),v=Object(x.a)(h.prototype,"handleBack",[A],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){return function(){J.b.goBack()}}}),b=h))||b);t.default=Ye},"91dh":function(e,t,a){(t=a("jczW")(!0)).push([e.i,".cartoon-taro-swiper-item{height:100%;display:inline-block}\n","",{"version":3,"sources":["item.scss"],"names":[],"mappings":"AAAA,0BAA0B,WAAW,CAAC,oBAAoB","file":"item.scss","sourcesContent":[".cartoon-taro-swiper-item{height:100%;display:inline-block}\n"]}]),e.exports=t},"UBxp":function(e,t,a){(t=a("jczW")(!0)).push([e.i,".cartoon-taro-swiper{width:100%;height:100%;position:relative;display:flex;overflow:hidden;box-sizing:border-box}.cartoon-taro-swiper .content_h{height:100%;position:relative;flex-shrink:0}.cartoon-taro-swiper .content_v{position:absolute;top:0;left:0;width:100%}.cartoon-taro-swiper .swiper-dot-wrap{position:absolute;bottom:-20px;height:10px;margin:100px auto;display:flex;justify-content:center}.cartoon-taro-swiper .swiper-dot-wrap .swiper-dot{width:20px;height:20px;border-radius:999px;background:#fc9c4a;transform:scale(0.5);opacity:0.3}.cartoon-taro-swiper .swiper-dot-wrap .swiper-dot.active{background:#ff9740;opacity:1}\n","",{"version":3,"sources":["swiper.scss"],"names":[],"mappings":"AAAA,qBAAqB,UAAU,CAAC,WAAW,CAAC,iBAAiB,CAAC,YAAY,CAAC,eAAe,CAAC,qBAAqB,CAAC,gCAAgC,WAAW,CAAC,iBAAiB,CAAC,aAAa,CAAC,gCAAgC,iBAAiB,CAAC,KAAK,CAAC,MAAM,CAAC,UAAU,CAAC,sCAAsC,iBAAiB,CAAC,YAAY,CAAC,WAAW,CAAC,iBAAiB,CAAC,YAAY,CAAC,sBAAsB,CAAC,kDAAkD,UAAU,CAAC,WAAW,CAAC,mBAAmB,CAAC,kBAAkB,CAAC,oBAAoB,CAAC,WAAW,CAAC,yDAAyD,kBAAkB,CAAC,SAAS","file":"swiper.scss","sourcesContent":[".cartoon-taro-swiper{width:100%;height:100%;position:relative;display:flex;overflow:hidden;box-sizing:border-box}.cartoon-taro-swiper .content_h{height:100%;position:relative;flex-shrink:0}.cartoon-taro-swiper .content_v{position:absolute;top:0;left:0;width:100%}.cartoon-taro-swiper .swiper-dot-wrap{position:absolute;bottom:-20px;height:10px;margin:100px auto;display:flex;justify-content:center}.cartoon-taro-swiper .swiper-dot-wrap .swiper-dot{width:20px;height:20px;border-radius:999px;background:#fc9c4a;transform:scale(0.5);opacity:0.3}.cartoon-taro-swiper .swiper-dot-wrap .swiper-dot.active{background:#ff9740;opacity:1}\n"]}]),e.exports=t},"evcP":function(e,t,a){"use strict";a.d(t,"a",(function(){return A}));var n=a("1OyB"),r=a("vuIU"),o=a("Ji7U"),i=a("LK+K"),l=a("rePB"),c=a("q1tI"),s=a.n(c),u=a("TSYQ"),d=a.n(u),p=a("p5LO"),f=a("17x9"),m=a.n(f),A=(a("uofL"),function(e){Object(o.default)(SwiperItem,e);var t=Object(i.default)(SwiperItem);function SwiperItem(){return Object(n.default)(this,SwiperItem),t.apply(this,arguments)}return Object(r.default)(SwiperItem,[{"key":"render","value":function render(){var e=this.props,t=e.className,a=void 0===t?"":t,n=e.children;return s.a.createElement(p.a,{"className":d()("cartoon-taro-swiper-item",a)},n)}}]),SwiperItem}(c.Component));Object(l.default)(A,"propTypes",{"className":m.a.string,"children":m.a.any})},"pDIn":function(e,t,a){var n=a("LboF"),r=a("UBxp");"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={"insert":function insertAtTop(e){const t=document.querySelector("head");if(t){const a=window._lastElementInsertedByStyleLoader;a?a.nextSibling?t.insertBefore(e,a.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),window._lastElementInsertedByStyleLoader=e}},"singleton":!1},i=(n(r,o),r.locals?r.locals:{});e.exports=i},"uofL":function(e,t,a){var n=a("LboF"),r=a("91dh");"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={"insert":function insertAtTop(e){const t=document.querySelector("head");if(t){const a=window._lastElementInsertedByStyleLoader;a?a.nextSibling?t.insertBefore(e,a.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),window._lastElementInsertedByStyleLoader=e}},"singleton":!1},i=(n(r,o),r.locals?r.locals:{});e.exports=i},"xAig":function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a("1OyB"),r=a("vuIU"),o=a("JX7q"),i=a("Ji7U"),l=a("LK+K"),c=a("rePB"),s=a("q1tI"),u=a.n(s),d=a("p5LO"),p=a("TSYQ"),f=a.n(p),m=a("17x9"),A=a.n(m),b=a("HG2E"),h=(a("pDIn"),function(e){Object(i.default)(Swiper,e);var t=Object(l.default)(Swiper);function Swiper(e){var a;Object(n.default)(this,Swiper),a=t.call(this,e),Object(c.default)(Object(o.default)(a),"interval",null),Object(c.default)(Object(o.default)(a),"touching",!1),Object(c.default)(Object(o.default)(a),"start",{"x":1,"y":1}),Object(c.default)(Object(o.default)(a),"diff",{"x":1,"y":1}),Object(c.default)(Object(o.default)(a),"containerSize",{"left":0,"right":0,"top":0,"bottom":0,"width":1,"height":1}),Object(c.default)(Object(o.default)(a),"lock",!0),Object(c.default)(Object(o.default)(a),"autoPlay",(function(){var e=a.props,t=e.autoplay,n=e.interval,r=void 0===n?5e3:n;t&&(a.interval=Object(b.a)(a.slideFn,r))})),Object(c.default)(Object(o.default)(a),"clear",(function(){a.interval&&a.interval.clear&&a.interval.clear()})),Object(c.default)(Object(o.default)(a),"slideFn",(function(){if(a.touching)a.clear();else{var e=a.state,t=e.index;t<e.len-1?t++:a.clear(),a.setState({"index":t,"reset":!1})}})),Object(c.default)(Object(o.default)(a),"touchStart",(function(e){a.clear();var t=e.changedTouches[0];a.start={"x":t.clientX,"y":t.clientY},a.touching=!0,a.lock=!1})),Object(c.default)(Object(o.default)(a),"touchMove",(function(e){e.stopPropagation(),e.preventDefault();var t=e.changedTouches[0];a.diff={"x":t.clientX-a.start.x,"y":t.clientY-a.start.y};var n=a.props.vertical?a.diff.y:a.diff.x;a.handelSlide(n)})),Object(c.default)(Object(o.default)(a),"handelSlide",(function(e){if(!a.lock){var t=a.state,n=t.index,r=t.len,o=t.isCircular;e<-30?(a.lock=!0,n++):e>30&&(a.lock=!0,n--),(o||-1!==n&&n!==r)&&a.setState({"index":n,"reset":!1})}})),Object(c.default)(Object(o.default)(a),"touchEnd",(function(e){a.touching=!1,a.autoPlay()})),Object(c.default)(Object(o.default)(a),"transitionEnd",(function(e){if(e.stopPropagation(),e.preventDefault(),a.state.isCircular){var t=a.state,n=t.index,r=t.len;if(n===r-1)a.setState({"index":1,"reset":!0});else if(0===n){var o=r-2;a.setState({"index":o,"reset":!0})}}}));var r=e.children.length,i=e.circular&&r>1;return a.state={"isCircular":i,"index":i?1:0,"reset":!1,"len":i?r+2:r},a}return Object(r.default)(Swiper,[{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.className;e||console.error("className is unset"),this.autoPlay(),document&&document.querySelector(".".concat(e))&&(this.containerSize=document.querySelector(".".concat(e)).getBoundingClientRect())}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clear()}},{"key":"render","value":function render(){var e=this.props,t=e.className,a=void 0===t?"":t,n=e.autoplay,r=e.vertical,o=void 0!==r&&r,i=e.dotClass,l=void 0===i?"":i,c=e.showDot,s=this.state,p=s.reset,m=s.index,A=s.len,b=s.isCircular;if(!A)return u.a.createElement(d.a,null);var h=100/A*-m,v={"transition":p?"none":"all .3s","WebkitTransform":o?"translateY(".concat(h,"%)"):"translateX(".concat(h,"%)"),"transform":o?"translateY(".concat(h,"%)"):"translateX(".concat(h,"%)")};return u.a.createElement(d.a,{"className":f()("cartoon-taro-swiper",a)},u.a.createElement(d.a,{"className":f()({"content_h":!o,"content_v":o,"slide":n}),"style":v,"onTouchStart":this.touchStart,"onTouchMove":this.touchMove,"onTouchEnd":this.touchEnd,"onTouchCancel":this.touchEnd,"onTransitionEnd":this.transitionEnd},b&&this.props.children[A-3],this.props.children,b&&this.props.children[0]),c&&u.a.createElement(d.a,{"className":f()("swiper-dot-wrap",l)},this.props.children.map((function(e,t){var a=b?m===t+1:m===t;return u.a.createElement(d.a,{"className":f()("swiper-dot",{"active":a}),"key":t})}))))}}]),Swiper}(s.Component));Object(c.default)(h,"propTypes",{"circular":A.a.bool,"children":A.a.any,"className":A.a.string,"autoplay":A.a.bool,"vertical":A.a.bool,"interval":A.a.number,"dotClass":A.a.string,"showDot":A.a.bool})}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-fun-read/js/dynamic_medal~31ecd969_656f29cabbdb957c05c7.js.map