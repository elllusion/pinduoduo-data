(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{"BHan":function(e,t,n){"use strict";n.r(t);var a,o=n("ODXe"),r=n("p5LO"),c=n("1OyB"),s=n("vuIU"),i=n("JX7q"),l=n("Ji7U"),u=n("LK+K"),f=n("rePB"),d=n("q1tI"),g=n.n(d),m=n("TyAF"),p=n("PS6B"),w=n("BsJF"),O=n("VVQs"),I=n("tSAD"),h=n("FoPm"),b=n("k/Ow"),v=n("SLG6"),C=(n("F5Jp"),Object(m.observer)(a=function(e){Object(l.default)(ProgressIcon,e);var t=Object(u.default)(ProgressIcon);function ProgressIcon(){var e;Object(c.default)(this,ProgressIcon);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=t.call.apply(t,[this].concat(a)),Object(f.default)(Object(i.default)(e),"getNextReward",(function(){var e=w.a.missionInfo,t=w.a.stageTarget,n=w.a.rewardMap,a=(e||{}).finishCount,o=void 0===a?0:a;return o<t.length?[n[o+1]||n[-1]||{},t[o]]:[null,null]})),Object(f.default)(Object(i.default)(e),"renderIcon",(function(e){var t=v.a.rewardsConfig,n=e||{},a=n.rewardAmount,o=n.rewardType,c=(t[o]||{}).progressChallengeFrontIcon||"tomorrow_pop_icon.png.slim.png",s="";return o===b.c.FOOD&&(s="".concat(a,"g")),c?g.a.createElement(r.a,null,g.a.createElement(I.a,{"className":"missionIcon","src":Object(p.d)(c)}),s&&g.a.createElement(r.a,{"className":"rewardAmount ff-m"},s)):g.a.createElement(I.a,{"className":"missionIcon","src":Object(p.g)("tomorrow_pop_icon")})})),e}return Object(s.default)(ProgressIcon,[{"key":"iconClick","value":function iconClick(){w.a.togglePopup()}},{"key":"render","value":function render(){var e=h.a.stageProgress,t=h.a.animalAction,n=h.a.productUnit,a=w.a.iconShow,c=w.a.missionInfo,s=w.a.stageTarget,i=w.a.rewardMap,l=c||{},u=l.finishCount,f=void 0===u?0:u,d=l.drawCount,m=void 0===d?0:d,p=this.getNextReward(),I=Object(o.default)(p,2),b=I[0],v=I[1],C=f>m||e>s[f],k=i[m+1]||i[-1]||{};return a?g.a.createElement(r.a,{"className":"challengeIconWrapper","onClick":this.iconClick},g.a.createElement(r.a,{"className":"iconBox"},!C&&b&&this.renderIcon(b),C&&k&&this.renderIcon(k),v&&!C&&g.a.createElement(O.a,{"fontSize":20,"textColor":"#fff","strokeColor":"#B86200","strokeWidth":4,"content":"".concat(t,"至").concat(s[f]).concat(n,"领")}),C&&g.a.createElement(O.a,{"fontSize":20,"textColor":"#fff","strokeColor":"#B86200","strokeWidth":4,"content":"可领取"}))):null}}]),ProgressIcon}(d.Component))||a);t.default=C},"F5Jp":function(e,t,n){}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-ranch/js/lazy_progressChallenge_bae2b6e916bd350ac404.js.map