(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[25],{Hpn9:function(e,t,n){(t=e.exports=n("I1BE")(!1)).push([e.i,"._1vW9AkJI{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;position:relative}._1vW9AkJI img{width:.695rem;height:.6rem}._2QDoeYB5,.eSwtLKDk{position:absolute;color:#fff;font-family:PingFangSC-Medium,PingFang SC,PingFangSC-Regular,STHeiti STXihei,Microsoft YaHei,Microsoft JhengHei,miui;font-weight:700;font-weight:500;text-align:center}.eSwtLKDk{bottom:.095rem;font-size:.1rem}.eSwtLKDk i{color:#ffec84;font-size:.12rem;font-family:PingFangSC-Semibold,PingFang SC,PingFangSC-Regular,STHeiti STXihei,Microsoft YaHei,Microsoft JhengHei,miui;font-weight:700;font-weight:600}._2QDoeYB5{bottom:.085rem;font-size:.12rem}",""]),t.locals={entrance:"_1vW9AkJI",countDownText:"eSwtLKDk",buyText:"_2QDoeYB5"}},eQJp:function(e,t,n){"use strict";var o=n("yXPU"),i=n.n(o),r=n("J4zp"),c=n.n(r),a=n("o0o1"),s=n.n(a),u=n("q1tI"),l=n("TyAF"),p=n("Vpw8"),d=n("O2NP"),f=n("yo/L"),b=n("hA9s"),m=function(e){var t=e.bizKey,n=e.completeSeconds,o=e.onComplete,r=e.onUpdateSeconds,a="LiveOuterTaskWatchedSeconds_"+t,l=(Object(d.k)().store.query||{}).list_id,p=void 0===l?"":l,m=Object(u.useState)(0),g=c()(m,2),S=g[0],_=g[1],v=Object(u.useState)(null),w=c()(v,2),O=w[0],y=w[1],h=function(e){_(e||0),r(e||0)};return Object(u.useEffect)((function(){if(t)(function(){var e=i()(s.a.mark((function e(){var t,n,o,i,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=(Object(f.c)(a)||"").split("$__split__$"),n=c()(t,2),o=n[0],i=n[1],r=void 0===i?0:i,o&&p===o&&h(parseInt(r)||0),y(1e3);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()();else if(b.b)throw new Error("BrowseCountdown的bizKey不能为空！")}),[]),Object(d.d)((function(){var e=S+1;Object(f.f)(a,"".concat(p).concat("$__split__$").concat(e)),h(e),e>=n&&(y(null),o(),Object(f.a)(a))}),O),null};m.defaultProps={completeSeconds:31536e3,onComplete:function(){},onUpdateSeconds:function(){}},t.a=Object(p.a)(l.observer)(m)},ghDb:function(e,t,n){var o=n("Hpn9"),i=n("Q8e5"),r="string"==typeof o?[[e.i,o,""]]:o;(t=e.exports=o.locals||{})._getContent=function(){return r},t._getCss=function(){return""+o},t._insertCss=function(e){return i(r,e)}},"vh+9":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var o={BrowseGuide:1,BuyGuide:2},i="LiveOuterTask_SpiritEnergyBrowserCompleteKey"},zojI:function(e,t,n){"use strict";n.r(t);var o=n("lSNA"),i=n.n(o),r=n("J4zp"),c=n.n(r),a=n("q1tI"),s=n.n(a),u=n("TyAF"),l=n("TSYQ"),p=n.n(l),d=n("mFSr"),f=n("N4rI"),b=n("HIPb"),m=n("DCTZ"),g=n("kLkQ"),S=n("zRTd"),_=n("/WLQ"),v=n("FoiV"),w=n("vh+9"),O=n("yXPU"),y=n.n(O),h=n("o0o1"),k=n.n(h),j=n("Vpw8"),D=n("O2NP"),E=n("eQJp"),T=Object(j.a)(u.observer)((function(e){var t=Object(D.k)().store,n=t.activityTaskStore,o=t.query,i=n.missionTypeMap,r=n.requestCompleteGenieMission,c=n.refreshPendantInfo,u=n.showSpiritEnergyDialog,l=i[v.d.BROWSE]||{},p=l.completeSeconds,d=l.missionId,f=l.finishCount,b=Object(D.e)(Object(a.useCallback)(y()(k.a.mark((function e(){var t,i,a,s;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(d);case 2:return i=e.sent,a=n.missionTypeMap[v.d.BUY]||{},s=a.status,null!=i&&null!==(t=i.result)&&void 0!==t&&t.finish&&(Object(g.n)(null==o?void 0:o.list_id,w.b),s===v.c.UNDONE&&u(w.a.BuyGuide)),e.next=7,Object(g.o)(1e3);case 7:c();case 8:case"end":return e.stop()}}),e)}))),[])),m={bizKey:"spiritBrowse-".concat(f),completeSeconds:p,onComplete:b,onUpdateSeconds:e.onUpdateSeconds};return s.a.createElement(E.a,m)})),C=n("ghDb"),N=n.n(C);t.default=Object(u.observer)((function(){var e;Object(b.a)(N.a);var t=Object(a.useState)(0),n=c()(t,2),o=n[0],r=n[1],u=Object(D.k)().store,l=u.activityTaskStore,O=u.roomId,y=u.query,h=l.missionTypeMap,k=h[v.d.BROWSE]||{},j=k.status,E=(k.priceNum,k.completeSeconds),C=void 0===E?60:E,L=h[v.d.BUY]||{},x=L.status,B=(L.priceNum,x===v.c.UNDONE),U=j===v.c.UNDONE&&!Object(g.k)(null==y?void 0:y.list_id,w.b);return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:N.a.entrance,onClick:function(){Object(S.f)({subType:_.e.DuoDuoSpiritNew}),U?Object(g.p)("浏览".concat(C,"秒即可获得营养餐")):B?Object(f.a)("live_shop_coupon_dialog",{openLiveGoods:!0,room_id:O,lego_data:{goodsListTopHint:"直播间下单可得营养餐"}}):Object(m.a)()}},s.a.createElement(S.b,{subType:_.e.DuoDuoSpiritNew}),s.a.createElement(d.a,{className:N.a.bg,src:"https://promotion.pddpic.com/ignore_query/live/d8bca5f6-15cd-476d-84b5-5d53bd33af3e.png.slim.png"}),s.a.createElement("div",{className:p()((e={},i()(e,N.a.countDownText,U),i()(e,N.a.buyText,!U),e))},U?s.a.createElement(s.a.Fragment,null,"浏览",s.a.createElement("i",null,C-o),"s可领"):B?"下单可领取":"领取奖励")),U&&s.a.createElement(T,{onUpdateSeconds:r}))}))}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-live-layer/js/loadable_ActivityTasks_SpiritEnergyEntrance_bdbc31d125c2bcafa573.js.map