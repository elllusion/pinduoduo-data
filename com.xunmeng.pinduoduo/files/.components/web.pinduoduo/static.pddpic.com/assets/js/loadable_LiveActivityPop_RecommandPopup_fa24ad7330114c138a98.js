(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[51],{F5Vh:function(e,t,o){"use strict";o.r(t);var n,i=o("J4zp"),a=o.n(i),r=o("lSNA"),c=o.n(r),l=o("E+oP"),s=o.n(l),u=o("q1tI"),p=o.n(u),m=o("TyAF"),d=o("AZ7A"),f=o("O2NP"),b=o("WlAH"),g=o("lwsE"),h=o.n(g),_=o("W8MJ"),w=o.n(_),v=o("yo/L"),y={},k=function(){function e(t){h()(this,e),this.maxSize=void 0,this.key=void 0;var o=t||{},n=o.maxSize,i=void 0===n?20:n,a=o.localstorageKey;if(y[a])throw new Error("repeat localstorageKey!");y[a]=!0,this.maxSize=i,this.key=a}return w()(e,[{key:"localHas",value:function(e){return!!e&&(Object(v.c)(this.key)||[]).find((function(t){return"".concat(t)==="".concat(e)}))}},{key:"saveToLocal",value:function(e){if(e){var t=Object(v.c)(this.key)||[];if(!this.localHas(e)){for(;t.length>=this.maxSize;)t.shift();t.push(e),Object(v.f)(this.key,t)}}}}]),e}(),O=o("ct/d"),j=o("PlGL"),x=o("SXY3"),S=o("mFSr"),P=o("fkkr"),C=o("N4rI"),E=o("I+d+"),D=o.n(E),I=function(e){var t=e.popupInfo,o=e.onClose,n=t.popupImage,i=t.linkUrl,r=t.popupType,c=t.elsnKey,l=t.showEffect,s=t.showTime,m=Object(u.useState)(!1),d=a()(m,2),b=d[0],g=d[1];Object(f.l)((function(){o()}),1e3*(s||6));return p.a.createElement(x.a,{trackingInfo:{page_el_sn:c||2636555,type:r}},p.a.createElement("div",{className:D.a.root},p.a.createElement("div",{className:D.a.mask,onClick:o}),p.a.createElement("div",{className:D.a.content},b&&p.a.createElement(j.a.CloseButton,{type:"hollow",className:D.a.close,onClick:o}),p.a.createElement(S.a,{className:D.a.img,src:n,onClick:function(){Object(P.a)({page_el_sn:c||2636555,type:r}),o(),1===l?Object(C.a)("live_show_h5_popup",{url:i,data:{}}):O.default.uniformForward(i)},onLoad:function(){g(!0)}}))))},M=o("yXPU"),T=o.n(M),N=o("o0o1"),z=o.n(N),A=o("Wgwc"),F=o.n(A),Y=o("h7Yj"),L=o("4SlK"),H=o("HIPb"),K=o("zRTd"),X=o("kLkQ"),B=o("F7Og"),R=o.n(B);function W(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function q(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?W(Object(o),!0).forEach((function(t){c()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):W(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}!function(e){e[e.MallCoupon=220]="MallCoupon",e[e.GoodsCoupon=349]="GoodsCoupon"}(n||(n={}));var G,U;!function(e){e[e.ImageType=1]="ImageType",e[e.FullScreen=2]="FullScreen",e[e.CouponDialog=6]="CouponDialog"}(U||(U={}));var J=(G={},c()(G,U.FullScreen,I),c()(G,U.CouponDialog,(function(e){var t=e.popupInfo,o=e.showId,i=e.roomId,r=e.onClose;Object(H.a)(R.a);var c=t||{},l=c.startTime,s=c.endTime,m=c.minAmount,d=c.discount,b=c.batchSn,g=c.thresholdDesc,h=c.jumpUrl,_=c.sourceType,w=c.goodsId,v=_===n.MallCoupon?1:2,y=Object(u.useMemo)((function(){return{page_el_sn:6712602,room_id:i,type:v,goods_id:w}}),[v,i,w]),k=Object(u.useState)(!1),x=a()(k,2),S=x[0],C=x[1],E=Object(u.useMemo)((function(){return void 0===m?"":0===m?"无门槛":"满".concat(Object(Y.priceCent)(m),"可用")}),[m]),D=Object(f.e)(Object(u.useCallback)(T()(z.a.mark((function e(){var t;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S){e.next=4;break}return Object(P.a)({page_el_sn:6712605,goods_id:w,type:v}),h&&O.default.uniformForward(h),e.abrupt("return");case 4:return Object(P.a)({page_el_sn:6712604,goods_id:w,type:v}),e.next=7,Object(L.a)("api/eclipse/coupon/receive/receive_coupon",{showId:o,batchSn:b,activityId:2,scene:1018},{addAntiToken:!0,antiTokenStyle:"camelCase"});case 7:null!=(t=e.sent)&&t.success?(Object(X.p)("领券成功~"),C(!0),Object(P.b)(q(q({},y),{},{status:1}))):Object(X.p)((null==t?void 0:t.errorMsg)||"领券失败，请稍后重试～");case 9:case"end":return e.stop()}}),e)}))),[S]));return Object(f.f)((function(){Object(P.b)(q(q({},y),{},{status:0})),Object(K.e)({subType:"RecommandCouponDialog"})})),p.a.createElement(j.a,{BaseDialogProps:{className:R.a.root}},p.a.createElement(j.a.CloseButton,{onClick:function(){Object(P.a)({page_el_sn:6712603}),r()}}),p.a.createElement("div",{className:R.a.wrap},p.a.createElement("h3",null,"恭喜你获得一张优惠券"),p.a.createElement("div",{className:R.a.main},p.a.createElement("div",{className:R.a.content},p.a.createElement("div",{className:R.a.couponPrice},p.a.createElement("div",{className:R.a.couponPriceText},Object(Y.priceCent)(d)),p.a.createElement("div",{className:R.a.threshold},E)),p.a.createElement("div",{className:R.a.couponDesc},p.a.createElement("div",{className:R.a.title},g),p.a.createElement("div",{className:R.a.date},F()(1e3*l).format("YYYY.MM.DD"),"-",F()(1e3*s).format("YYYY.MM.DD"))))),p.a.createElement("button",{className:R.a.btn,onClick:D},S?"去使用":"立即领取")))})),G),Q=new k({maxSize:50,localstorageKey:"recommandPopup"});t.default=Object(m.observer)((function(){var e=Object(f.k)().store,t=e.roomId,o=e.showId,n=e.highLayerData,i=e.liveRoomInitInfo,r=e.popupStore,c=r.checkIsShowPopup,l=r.sendShowPopup,m=r.sendHidePopup,g=Object(u.useState)(null),h=a()(g,2),_=h[0],w=h[1],v=Object(u.useState)(null),y=a()(v,2),k=y[0],O=y[1],j=function(e){var t=e.data,o=(t||{}).popupId;w(l("RecommandPopup")),O(t),Q.saveToLocal(o)},x=J[null==k?void 0:k.popupType],S={popupInfo:k,showId:o,roomId:t,onClose:function(){m(_),O(null)}};return Object(f.n)((function(){var e=Object(d.c)(n),t=(null==e?void 0:e.showId)===o,i=(null==e?void 0:e.activityType)===b.a.RECOMMAND_POPUP;!e||!t||!i||j({data:e})}),[n]),Object(u.useEffect)((function(){var e,t=Object(d.c)(null==i||null===(e=i.liveCouponPopup)||void 0===e?void 0:e.live_pop_up_vo),o=null==t?void 0:t.popupId;Q.localHas(o)||s()(t)||j({data:t})}),[i]),x&&c(_)?p.a.createElement(x,S):null}))},F7Og:function(e,t,o){var n=o("oXmz"),i=o("Q8e5"),a="string"==typeof n?[[e.i,n,""]]:n;(t=e.exports=n.locals||{})._getContent=function(){return a},t._getCss=function(){return""+n},t._insertCss=function(e){return i(a,e)}},"I+d+":function(e,t,o){e.exports={root:"_3KrmobGG",mask:"UFi4DfS9",content:"CZra1BM6",close:"_3XT-8X8e",img:"_1QsRLZBM",zoomIn:"_1PbtxtzP"}},oXmz:function(e,t,o){(t=e.exports=o("I1BE")(!1)).push([e.i,'._1IophLDM{width:3rem!important}._2jeXjyWr{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:3rem;height:2.2rem;background:#fff;border-radius:.08rem;padding-top:.2rem}._2jeXjyWr h3{font-size:.16rem;color:rgba(0,0,0,.8);text-align:center;line-height:.24rem;font-family:PingFangSC-Medium,PingFang SC,PingFangSC-Regular,STHeiti STXihei,Microsoft YaHei,Microsoft JhengHei,miui;font-weight:700;font-weight:500}.a0bzJPMd{width:2.68rem;height:.88rem;margin-top:.16rem;overflow:hidden}._3kYkQ9Dq{width:2.68rem;height:.8rem;background:url(https://funimg.pddpic.com/video-layer/4a4999bd-397e-44c6-a007-f75053f46e37.png.slim.png);background-size:100%}._2oG8yAmA,._3kYkQ9Dq{position:relative;display:-webkit-box;display:-webkit-flex;display:flex}._2oG8yAmA{width:.83rem;height:100%;padding-right:.07rem;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#fff}._20STxqyM{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:baseline;-webkit-align-items:baseline;align-items:baseline;margin-top:.16rem;font-size:.28rem;line-height:1;font-family:PingFangSC-Medium,PingFang SC,PingFangSC-Regular,STHeiti STXihei,Microsoft YaHei,Microsoft JhengHei,miui;font-weight:700;font-weight:500}._20STxqyM:before{margin-right:.01rem;content:"\\A5";font-size:.13rem}._2s1BqF9N{font-size:.12rem;line-height:1;text-align:center;margin-top:.05rem}._1WroiY2k{-webkit-box-flex:1;-webkit-flex:1;flex:1;width:0;overflow:hidden;padding:.16rem;position:relative}._1WroiY2k .VPKnkjLj{color:rgba(0,0,0,.8);font-size:.14rem;line-height:1.1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}._1WroiY2k ._2_mOyf_T{position:absolute;left:.14rem;color:rgba(0,0,0,.6);font-size:.12rem;line-height:.12rem;bottom:.16rem}._3DzsvREK{width:2.68rem;height:.44rem;background:#d43;border-radius:.06rem;font-size:.16rem;color:#fff;margin-top:.12rem}',""]),t.locals={root:"_1IophLDM",wrap:"_2jeXjyWr",main:"a0bzJPMd",content:"_3kYkQ9Dq",couponPrice:"_2oG8yAmA",couponPriceText:"_20STxqyM",threshold:"_2s1BqF9N",couponDesc:"_1WroiY2k",title:"VPKnkjLj",date:"_2_mOyf_T",btn:"_3DzsvREK"}}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-live-layer/js/loadable_LiveActivityPop_RecommandPopup_fa24ad7330114c138a98.js.map