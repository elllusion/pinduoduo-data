(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[60],{"9XCP":function(e,t,n){"use strict";n.r(t);var r=n("yXPU"),o=n.n(r),s=n("o0o1"),c=n.n(s),i=n("q1tI"),a=n.n(i),u=n("TyAF"),l=n("Vpw8"),_=n("O2NP"),p=n("lSNA"),f=n.n(p),b=n("J4zp"),O=n.n(b),w=n("f8q9"),v=n("yo/L"),d="wealth_god_one_buy_has_watch_seconds";function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){f()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=Object(l.a)(u.observer)((function(){var e=Object(_.k)().store,t=e.wealthGodOneBuyData,n=e.setValue,r=e.activityPopStore.$service,s=(t||{}).browseMission,a=(null==s?void 0:s.browse_time)||6e4,u=Object(i.useState)(0),l=O()(u,2),p=l[0],f=l[1],b=Object(i.useState)(null),y=O()(b,2),h=y[0],m=y[1],g=Object(w.c)(),B=g.y,D=g.m,k=g.d,P="".concat(B).concat(D).concat(k),S=function(){var e=o()(c.a.mark((function e(){var t,n,o,i,a,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=(Object(v.c)(d)||"").split("$__split__$"),n=O()(t,2),o=n[0],i=n[1],a=!0,console.log("localHasWatchedSeconds:",i),!o||P!==o){e.next=7;break}f(parseInt(i)||0),e.next=12;break;case 7:return e.next=9,r.startWealthGodBrowseMission({mission_unique_key:null==s?void 0:s.mission_unique_key,scene:"op_view"});case 9:u=e.sent,(a=null==u?void 0:u.success)&&Object(v.f)(d,"".concat(P).concat("$__split__$").concat(p));case 12:a&&m(1e3);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=o()(c.a.mark((function e(){var o,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.completeWealthGodBrowseMission({mission_unique_key:null==s?void 0:s.mission_unique_key,scene:"op_view"});case 2:o=e.sent,i=j(j({},s),{},{enableBrowseMission:!1}),null!=o&&o.success&&n({wealthGodOneBuyData:j(j({},t),{},{browseMission:i})}),Object(v.f)(d,null);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){S()}),[]),Object(_.d)((function(){var e=p+1;Object(v.f)(d,"".concat(P).concat("$__split__$").concat(e)),f(e),e>=a&&(m(null),M())}),h),null}));t.default=Object(l.a)(u.observer)((function(){var e=Object(_.k)().store,t=e.pageFrom,n=e.wealthGodOneBuyData,r=e.setValue,s=e.activityPopStore.$service,u=String(t)===String(60181),l=function(){var e=o()(c.a.mark((function e(){var t,n,o,i,a,l,_;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("isWealthGodOneBuyBrowseRoom:",u),u){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,s.getWealthGodBrowseMission({scene:"op_view"});case 5:null!=(t=e.sent)&&t.success&&null!=t&&t.result&&(n=t.result||{},o=(null==n?void 0:n.mission_info)||{},i=o.current_achieve_times,a=void 0===i?0:i,l=o.upper_limit_daily,_=void 0===l?0:l,o.reward_info=(null==n?void 0:n.reward_info)||{},o.enableBrowseMission=a<_,r({wealthGodOneBuyData:{browseMission:o}}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){l()}),[]),((null==n?void 0:n.browseMission)||{}).enableBrowseMission&&a.a.createElement(h,null)}))}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-live-layer/js/loadable_LiveActivityPop_WealthGodOneBuy_f41f162b7fb308552a53.js.map