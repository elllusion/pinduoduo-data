(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{"6CIM":function(e,n,o){"use strict";o.r(n);var t,r=o("p5LO"),i=o("1OyB"),a=o("vuIU"),c=o("Ji7U"),s=o("LK+K"),l=o("q1tI"),u=o.n(l),m=o("TyAF"),d=o("PS6B"),w=o("aPpA"),f=o("k/Ow"),p=o("VVQs"),b=o("tSAD"),g=o("SLG6"),I=o("q0O3"),k=o("8tQc"),O=(o("KIWO"),Object(m.observer)(t=function(e){Object(c.default)(MissionIcon,e);var n=Object(s.default)(MissionIcon);function MissionIcon(){return Object(i.default)(this,MissionIcon),n.apply(this,arguments)}return Object(a.default)(MissionIcon,[{"key":"iconClick","value":function iconClick(){w.b.countDownTimeStr===w.a.CANDRAW?I.default.dealMissionStore.missionComplete(k.h.missionTomorrow,{"needToast":!0}):w.b.togglePopup(!0)}},{"key":"getImgUrl","value":function getImgUrl(e){var n=e.reduce((function(e,n){return e+n.rewardType}),"tomorrow");return g.a.rewardsConfig[n]||{}}},{"key":"render","value":function render(){var e=w.b.rewardResult,n=w.b.countDownTimeStr,o=1===e.length?e.find((function(e){return f.e.indexOf(e.rewardType)>-1})):{},t=this.getImgUrl(e),i=(t.name,t.icon),a=void 0===i?"tomorrow_pop_icon.png.slim.png":i;return u.a.createElement(r.a,{"className":"tomorrow-icon-item-v2","onClick":this.iconClick},u.a.createElement(r.a,{"className":"tomorrow-wrapper"},u.a.createElement(b.a,{"className":"mission-icon","src":Object(d.d)(a)}),o&&o.maxRewardAmount&&u.a.createElement(r.a,{"className":"reward"},o.maxRewardAmount,"g"),u.a.createElement(p.a,{"fontSize":24,"textColor":"#fff","strokeColor":"#B86200","strokeWidth":4,"content":n})))}}]),MissionIcon}(l.Component))||t);n.default=O}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-ranch/js/lazy_tomorrowAIcon_a1f7aea622abe24d352e.js.map