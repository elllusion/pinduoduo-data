(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"kOnB":function(e,t,a){"use strict";a.r(t);var n=a("99ak"),o=a("p5LO"),c=a("aDV6"),l=a("1OyB"),i=a("vuIU"),s=a("JX7q"),r=a("Ji7U"),u=a("LK+K"),d=a("rePB"),m=a("q1tI"),f=a.n(m),p=a("TyAF"),b=a("EFCC"),E=a("gDy5"),g=a("fCYF"),h=a("PS6B"),v=a("VTBJ"),y=a("bmJN"),O=(a("rPDq"),[0,0,0,0,0,0,0,0,0,0]);function NumScroll(e){var t=e.showNum,a=e.duration,n=void 0===a?3:a,c=e.times,l=void 0===c?0:c,i=e.style,s=void 0===i?{}:i,r=e.size,u=void 0===r?80:r,d=e.text,m=void 0===d?"":d,p={"transform":"rotateX(".concat(360*l-36*t,"deg)"),"transition":"transform ".concat(n,"s ease")};return f.a.createElement(o.a,{"className":"slot-machine"},f.a.createElement(o.a,{"className":"scroll-wrap","style":p,"onTransitionEnd":function onEnd(){e.onEnd&&e.onEnd()}},O.map((function(e,t){var a=36*t,n=Object(v.default)(Object(v.default)({},s),{},{"transform":"rotateX(".concat(a,"deg) translateZ(").concat(Object(y.a)(u),")")});return f.a.createElement(o.a,{"key":t,"style":n,"className":"item"},m||t)}))))}var j,D=a("vbVB"),N=a("3uF5"),w=a("vHnQ"),x=a("0wR8"),C=a("w9uL"),T=a("h5Qt"),k=a("8tQc"),P=a("q0O3"),F=a("Y0Ga"),S=(a("rdEH"),Object(F.a)({"iconImg":"da_card","iconName":"daily-discount-card"})(j=Object(p.observer)(j=function(e){Object(r.default)(DiscountPop,e);var t=Object(u.default)(DiscountPop);function DiscountPop(){var e;Object(l.default)(this,DiscountPop);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return e=t.call.apply(t,[this].concat(n)),Object(d.default)(Object(s.default)(e),"state",{"rolling":!1}),Object(d.default)(Object(s.default)(e),"onClose",(function(){e.state.rolling&&e.onEnd(),e.props.onClose((function(){x.a.togglePop.iconClose()}))})),Object(d.default)(Object(s.default)(e),"onChange",(function(){x.a.getDiscount().then((function(t){t&&e.setState({"rolling":!0})}))})),Object(d.default)(Object(s.default)(e),"onClick",(function(){var t=x.a.discountType,a=e.state.rolling;t===C.a.siphon?!a&&e.onChange():(x.a.togglePop.close(),Object(T.a)(k.h.missionDailyDiscount,(function(){P.default.refreshData(),x.a.set("currentType",0)})))})),Object(d.default)(Object(s.default)(e),"onEnd",(function(){x.a.set("currentType",C.a.use),e.setState({"rolling":!1})})),e}return Object(i.default)(DiscountPop,[{"key":"render","value":function render(){var e=this,t=this.state.rolling,a=x.a.discountType,l=x.a.num,i=x.a.discountData,s=x.a.missionInfo,r=(i||{}).couponDiscount,u=((void 0===r?94:r)/10).toFixed(1),d=(u+"").split(""),m=(C.b[a]||{}).btnText,p=void 0===m?"":m;t&&(p="幸运折扣抽取中…");var v=a===C.a.siphon&&!t,y=(s||{}).expireTime,O=void 0===y?0:y;return f.a.createElement(n.a,{"isShow":!0},f.a.createElement(c.a,null),f.a.createElement(o.a,{"className":"daily-discount-pop ab-xy","style":this.props.closeStyle},f.a.createElement(E.a,{"text":a===C.a.use?"恭喜抽中".concat(u,"折扣"):"恭喜获得天天享折扣福利"}),f.a.createElement(b.a,{"onClose":this.onClose,"type":"inTopRightOutHigher"}),f.a.createElement(g.a,{"className":"bg relative mb-10","bg":Object(h.g)("daii_bg")},f.a.createElement(o.a,{"className":"title text-40 ff-s pt-70"},"专属折扣"),f.a.createElement(o.a,{"className":"discount ff-s flex ab-xy overflow-hidden"},f.a.createElement(o.a,{"className":"price-box flex overflow-hidden"},d.map((function(n,c){return"."===n?v?"":".":f.a.createElement(o.a,{"className":"price-item overflow-hidden","key":c},f.a.createElement(NumScroll,{"showNum":Number(n),"duration":4-c,"times":(a===C.a.use||t?3:0)*(6-c),"style":{"background":"#fffcf7"},"size":170,"text":v?"?":"","onEnd":0===c?e.onEnd:void 0}))}))),f.a.createElement(o.a,{"className":"text-46 leading-58"},"折"))),f.a.createElement(o.a,{"className":"btn-normal-v2 btn","onClick":this.onClick},t&&f.a.createElement(o.a,{"className":"btn-normal-v2 btn-mask ab-xy"}),f.a.createElement(o.a,null,p,v&&f.a.createElement(f.a.Fragment,null,"(",f.a.createElement(N.a,{"countDown":3,"outputType":"timeWithUnit","countDownText":"0秒","onDone":this.onChange}),")")),f.a.createElement(D.a,{"className":"badge h-44","defaultCss":"text-28 ff-m rounded-22 leading-40 px-16 -top-24 -right-16"},a===C.a.use?f.a.createElement(N.a,{"countDown":w.a.getLeftTime(O,!0),"countText":"后过期"}):f.a.createElement(f.a.Fragment,null,"仅剩",l,"个名额")))))}}]),DiscountPop}(m.Component))||j)||j);t.default=S},"rPDq":function(e,t,a){},"rdEH":function(e,t,a){}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-ranch/js/lazy_daily_discount_5e583887130e94d87edd.js.map