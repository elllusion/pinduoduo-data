(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{"25bt":function(e,t,a){"use strict";a.r(t);var o,n=a("p5LO"),c=a("brQG"),l=a("1OyB"),r=a("vuIU"),i=a("JX7q"),s=a("Ji7U"),u=a("LK+K"),f=a("rePB"),d=a("q1tI"),m=a.n(d),p=a("TyAF"),C=a("PS6B"),g=a("Jyuy"),b=a("tbnE"),w=a("k/Ow"),O=a("h5Qt"),P=a("fCYF"),h=a("1oWy"),k=a("JVvb"),E=a("CZgy"),v=a("/1Zt"),j=a("8tQc"),y=a("q0O3"),x=a("BdaA"),F=a("CmQz"),T=a("TRXh"),G=a("SLG6"),N=Object(p.observer)(o=function(e){Object(s.default)(GetPkCowPop,e);var t=Object(u.default)(GetPkCowPop);function GetPkCowPop(){var e;Object(l.default)(this,GetPkCowPop);for(var a=arguments.length,o=new Array(a),n=0;n<a;n++)o[n]=arguments[n];return e=t.call.apply(t,[this].concat(o)),Object(f.default)(Object(i.default)(e),"onIconClose",(function(){E.a.togglePKCowGetPop.iconClose()})),Object(f.default)(Object(i.default)(e),"onClick",(function(){E.a.togglePKCowGetPop.close(),y.default.feedStore.feed()})),Object(f.default)(Object(i.default)(e),"goOrder",(function(){E.a.togglePKCowGetPop.close(),Object(O.a)(j.h.missionPkCowBuy,(function(){y.default.refreshData()}))})),Object(f.default)(Object(i.default)(e),"goExchange",(function(){E.a.togglePKCowGetPop.close();var e=(E.a.pkCowInfo||{}).costExchangeFoodAmount,t=void 0===e?0:e;x.a.foodAmount<t?T.a.showToast("当前饲料数量不足！"):E.a.exchangePkCow().then((function(e){e&&(x.a.setFood(e),E.a.togglePKCowRewardPop.open({"source":F.e.CLICK,"action_name":F.a.FOOD_EXCHANGE_PK_COW}))}))})),e}return Object(r.default)(GetPkCowPop,[{"key":"render","value":function render(){var e=E.a.pkCowInfo||{},t=e.multipleDesc,a=void 0===t?"":t,o=e.eachFeedMultipleTimes,l=void 0===o?2:o,r=e.validTimes,i=void 0===r?0:r,s=e.unlockType,u=void 0===s?0:s,f=e.costExchangeFoodAmount,d=void 0===f?0:f,p=(a.split(",")||[])[1]||"",O=[{"content":m.a.createElement(m.a.Fragment,null,m.a.createElement(c.a,{"className":"text-ff6"},"喂食1次"),"，争霸赛中",m.a.createElement(c.a,{"className":"text-ff6"},"抵",l,"次"))}],y=[{"content":"去喂食","onClick":this.onClick,"btnTip":p}];if(u===v.j.BUY){var x=G.a.getMission(j.h.missionPkCowBuy);O=[{"content":"拼1单即可升级"},{"type":"Sub","content":m.a.createElement(m.a.Fragment,null,"升级后",m.a.createElement(c.a,{"className":"text-ff6"},"喂食1次"),"，争霸赛中",m.a.createElement(c.a,{"className":"text-ff6"},"抵",l,"次"))}],y=x?[{"content":"去拼单升级奶牛","onClick":this.goOrder,"btnTip":p},{"content":"暂不升级","type":"Text","onClick":this.onClick}]:y}return u===v.j.FOOD_EXCHANGE&&(O=[{"content":m.a.createElement(m.a.Fragment,null,"使用",d,"g",m.a.createElement(b.a,{"size":46,"rewardType":w.c.FOOD}),"即可升级")},{"type":"Sub","content":m.a.createElement(m.a.Fragment,null,"升级后",m.a.createElement(c.a,{"className":"text-ff6"},"喂食1次"),"，争霸赛中",m.a.createElement(c.a,{"className":"text-ff6"},"抵",l,"次"))}],y=[{"content":m.a.createElement(m.a.Fragment,null,"使用",d,"g",m.a.createElement(b.a,{"size":46,"rewardType":w.c.FOOD}),"升级奶牛"),"onClick":this.goExchange,"btnTip":p},{"content":"暂不升级","type":"Text","onClick":this.onClick}]),m.a.createElement(g.a,{"onClose":this.onIconClose,"feedTitle":k.b[h.a.currentFeedPopupId],"sloganList":O,"btnList":y,"showBottomTip":u===v.j.BUY},m.a.createElement(P.a,{"bg":Object(C.g)("upgrade_pk_cow"),"className":"w-484 h-192 mx-auto mb-56 relative"},m.a.createElement(n.a,{"className":"absolute -bottom-4 right-28 w-134 h-40 leading-40 rounded-24 text-white text-28 text-center bg-ff6 ff-m"},"可用",i,"次")))}}]),GetPkCowPop}(d.Component))||o;t.default=N}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-ranch/js/lazy_pkCowGetPop_f0318f47f6b90a0d53d5.js.map