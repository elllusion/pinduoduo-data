(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"2Zdk":function(e,t,a){"use strict";a.r(t);var n,o=a("p5LO"),r=a("1OyB"),c=a("vuIU"),l=a("JX7q"),d=a("Ji7U"),u=a("LK+K"),i=a("rePB"),s=a("q1tI"),f=a.n(s),b=a("TyAF"),m=a("N6C/"),v=a("VVQs"),O=a("Y66G"),j=a.n(O),F=a("bmJN"),g=a("PS6B"),W=a("vP6u"),h=a("vHnQ"),C=a("3uF5"),p=a("q0O3"),w=a("nahQ"),I=a("TSYQ"),y=a.n(I),E=Object(b.observer)(n=function(e){Object(d.default)(FeedWaterPop,e);var t=Object(u.default)(FeedWaterPop);function FeedWaterPop(e){var a;return Object(r.default)(this,FeedWaterPop),a=t.call(this,e),Object(i.default)(Object(l.default)(a),"store",void 0),Object(i.default)(Object(l.default)(a),"onClose",(function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];a.store.toggleFeedWaterPop.close(e),a.store.needShowIconFly&&a.store.toggleFlyIcon()})),Object(i.default)(Object(l.default)(a),"onMainClick",(function(){a.onClose(!1);var e=(a.store||{}).feedWaterInfo||{},t=e.currentWater,n=void 0===t?0:t,o=e.nextTargetWater,r=void 0===o?0:o,c=e.leftFeedCount,l=void 0===c?0:c,d=e.newBottle,u=void 0!==d&&d,i=e.reachMax;!u||void 0!==i&&i?l>0&&r>0?p.default.feedStore.feed():n>0?a.drawDirect().then((function(){Object(w.a)()})):Object(w.a)():p.default.feedStore.feed()})),Object(i.default)(Object(l.default)(a),"drawDirect",(function(){return a.onClose(!1),a.store.gainReward()})),a.store=Object(W.a)(),a}return Object(c.default)(FeedWaterPop,[{"key":"render","value":function render(){var e=(this.store||{}).feedWaterInfo||{},t=e.currentWater,a=void 0===t?0:t,n=e.nextTargetWater,r=void 0===n?0:n,c=e.maxWater,l=void 0===c?10:c,d=e.leftFeedCount,u=void 0===d?0:d,i=e.expireTime,s=void 0===i?h.a.dateNow/1e3:i,b=e.reachMax,O=void 0!==b&&b,W=e.newBottle,p=void 0!==W&&W,w=s-h.a.dateNow/1e3,I=O?"领取并去果园浇水":"每次喂食，必得水滴";return f.a.createElement(m.a,{"customImg":{"randomImg":Object(g.f)("water_bottle"),"imgStyle":{"width":Object(F.a)(236),"height":Object(F.a)(272)}},"bgStyle":{"top":"46%"},"onClose":this.onClose,"btnList":[{"content":p?I:u>0&&r>0?"再喂".concat(u,"次，继续领").concat(r,"g"):a>0?"领取并去果园浇水":"去果园浇水","onClick":this.onMainClick},{"type":"Text","content":a>0&&!O?"直接领取".concat(a,"g"):"","onClick":this.drawDirect}],"sloganList":[{"content":f.a.createElement(f.a.Fragment,null,"已累计",a,"g，",f.a.createElement(C.a,{"countDown":w>0?w:0,"countText":"后过期","countDownText":"已过期"})),"style":{"opacity":.9}}],"titleObj":{"title":f.a.createElement(o.a,{"className":y()(j.a.title,"bg-init")})}},f.a.createElement(o.a,{"className":y()(j.a.tag,"bg-init")},f.a.createElement(o.a,{"className":y()(j.a.maxAmount,"ff-m")},"今日最高",l,"g")),f.a.createElement(o.a,{"className":j.a.cAmount},f.a.createElement(v.a,{"fontSize":48,"textColor":"#fff","strokeColor":"#3051AE","strokeWidth":10,"content":"".concat(a,"g")})))}}]),FeedWaterPop}(s.Component))||n;t.default=E},"A5w7":function(e,t,a){},"L1xJ":function(e,t,a){"use strict";a.r(t);var n,o,r=a("p5LO"),c=a("1OyB"),l=a("vuIU"),d=a("JX7q"),u=a("Ji7U"),i=a("LK+K"),s=a("rePB"),f=a("q1tI"),b=a.n(f),m=a("TyAF"),v=a("VVQs"),O=a("wQRL"),j=a("vP6u"),F=(a("A5w7"),a("fCYF")),g=a("PS6B"),W=Object(m.observer)(n=function(e){Object(u.default)(FeedWaterFlyIcon,e);var t=Object(i.default)(FeedWaterFlyIcon);function FeedWaterFlyIcon(e){var a;return Object(c.default)(this,FeedWaterFlyIcon),a=t.call(this,e),Object(s.default)(Object(d.default)(a),"store",void 0),a.store=Object(j.a)(),a}return Object(l.default)(FeedWaterFlyIcon,[{"key":"render","value":function render(){var e=this.store||{},t=e.currentAmount,a=void 0===t?0:t,n=e.showFlyIcon;return void 0!==n&&n?b.a.createElement(F.a,{"className":"waterFlyBottle absolute","bg":Object(g.g)("water_bottle")},b.a.createElement(r.a,{"className":"amount"},b.a.createElement(v.a,{"fontSize":48,"textColor":"#fff","strokeColor":"#3051AE","strokeWidth":10,"content":"".concat(a,"g")}))):null}}]),FeedWaterFlyIcon}(f.Component))||n,h=a("CmQz"),C=Object(m.observer)(o=function(e){Object(u.default)(FeedWaterIcon,e);var t=Object(i.default)(FeedWaterIcon);function FeedWaterIcon(e){var a;return Object(c.default)(this,FeedWaterIcon),a=t.call(this,e),Object(s.default)(Object(d.default)(a),"store",void 0),Object(s.default)(Object(d.default)(a),"onClick",(function(){a.store.toggleFeedWaterPop.open({"source":h.e.CLICK})})),a.store=Object(j.a)(),a}return Object(l.default)(FeedWaterIcon,[{"key":"render","value":function render(){var e=(this.store||{}).currentAmount,t=void 0===e?0:e;return b.a.createElement(b.a.Fragment,null,b.a.createElement(W,null),b.a.createElement(r.a,{"className":"feedWaterIcon bg-init","onClick":this.onClick},b.a.createElement(r.a,{"className":"amount"},b.a.createElement(O.a,{"next":t,"step":1,"renderNumber":function renderNumber(e){return b.a.createElement(v.a,{"fontSize":32,"textColor":"#fff","strokeColor":"#3051AE","strokeWidth":8,"content":"".concat(e,"g")})}}))))}}]),FeedWaterIcon}(f.Component))||o;t.default=C},"Y66G":function(e,t,a){e.exports={"title":"_2Pw3TsV","subBtn":"_cKy3qP9","cAmount":"_3Fv8pdP","tag":"_3WGh38M","maxAmount":"_1zoaATh"}}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-ranch/js/lazy_feedWaterPop_1adbd4492e384ec02b49.js.map