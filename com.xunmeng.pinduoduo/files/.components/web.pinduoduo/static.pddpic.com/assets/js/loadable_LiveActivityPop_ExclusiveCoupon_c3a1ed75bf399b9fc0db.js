(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[32],{"1ZZI":function(e,t,n){var r=n("k/PS"),o=n("Q8e5"),i="string"==typeof r?[[e.i,r,""]]:r;(t=e.exports=r.locals||{})._getContent=function(){return i},t._getCss=function(){return""+r},t._insertCss=function(e){return o(i,e)}},TAxp:function(e,t,n){"use strict";n.r(t);var r=n("lSNA"),o=n.n(r),i=n("yXPU"),a=n.n(i),c=n("J4zp"),s=n.n(c),u=n("o0o1"),l=n.n(u),p=n("q1tI"),m=n.n(p),d=n("TyAF"),g=n("Vpw8"),f=n("O2NP"),h=n("kLkQ"),b=n("WlAH"),v=n("lwsE"),O=n.n(v),_=n("W8MJ"),w=n.n(_),y=n("7W2i"),P=n.n(y),j=n("a1gu"),k=n.n(j),S=n("Nsbk"),C=n.n(S),E=n("DzJC"),N=n.n(E),x=n("h7Yj"),D=n("kFzF"),I=n("fkkr"),z=n("PlGL"),B=n("mFSr"),U=n("HIPb"),W=n("1ZZI"),A=n.n(W),L=function(e){Object(U.a)(A.a),Object(f.b)({key:"ExclusiveCoupon"});var t=e.countNum,n=e.couponData,r=e.discountStyle,o=e.setClose,i=e.clickCouponButton,a=n.priceUsingCoupon,c=n.discount,s=n.goodsOriginalPrice,u=n.pic,l=n.goodsName,p=n.consumedPer;return m.a.createElement(z.a,{className:A.a.dialog,BackdropProps:{className:A.a.backdrop}},m.a.createElement(z.a.CloseButton,{onClick:o,type:"hollow"}),m.a.createElement(B.a,{className:A.a.title,src:"https://promotion.pddpic.com/upload/mobile-live/2020-10-19/43e4c5d4-a491-4933-b0eb-ab6087a7f90a.png.slim.png",cdnOptimize:{width:257}}),m.a.createElement("div",{className:A.a.dialogContent},m.a.createElement(B.a,{className:A.a.couponBg,src:"https://promotion.pddpic.com/upload/mobile-live/2020-10-19/e1d9a037-9ccd-408b-b7fd-b7016414cdf3.png.slim.png",cdnOptimize:{width:314}}),m.a.createElement("div",{className:A.a.coupon},m.a.createElement("div",{className:A.a.goodImgWrap},m.a.createElement(B.a,{className:A.a.goodImg,src:u,cdnOptimize:{width:92}})),m.a.createElement("div",{className:A.a.content},m.a.createElement("p",{className:A.a.goodsName},l),m.a.createElement("p",{className:A.a.price},"拼团价 ¥",s),!!a&&m.a.createElement("div",{className:A.a.discountPrice},"券后 ¥",m.a.createElement("span",{className:A.a.discountPriceNum},a))),m.a.createElement("div",{className:A.a.couponPrice},m.a.createElement("div",null,m.a.createElement("span",{className:A.a.couponPriceNum,style:r},c),m.a.createElement("span",{className:A.a.couponPriceUnit},"元")),m.a.createElement("p",{className:A.a.progressBar},m.a.createElement("i",{className:A.a.progressBarContent,style:{width:"".concat(100-p,"%")}})),m.a.createElement("p",{className:A.a.consumedPer},"已抢",100-p,"%"))),m.a.createElement("div",{className:A.a.receiveBtn,onClick:i},"一键抢券(",t,"s后关闭)")))},F=Object(p.memo)(L);function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function H(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=C()(e);if(t){var o=C()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return k()(this,n)}}var J=function(e){P()(n,e);var t=H(n);function n(){var e;O()(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={countNum:0,couponData:null,discountStyle:{}},e.getCoupon=a()(l.a.mark((function t(){var n,r,o,i,a,c,s,u,p,m;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props,r=n.showId,o=n.data,a=(i=o||{}).batchSn,c=i.goodsId,s=i.goodsLink,i.ddjbParam,u=i.scene,p=i.removeBatchSn,Object(I.a)({page_el_sn:1991201,batch_sn:a,goods_id:c}),t.next=5,Object(h.o)(2e3);case 5:return t.next=7,e.httpClient.post("api/eclipse/coupon/receive/receive_coupon",{showId:r,batchSn:a,activityId:2,scene:u},{addAntiToken:!0,antiTokenStyle:"camelCase"});case 7:t.sent.success?(Object(h.p)("领券成功, 正在跳转中"),m=s||"goods.html?_oak_merchant_tag=20&goods_id="+c,p&&(m=Object(x.appendQuery)({_oak_live_batch_sn:null},m)),setTimeout((function(){return Object(h.s)(m)}),1e3),e.setClose()):(Object(h.p)("很遗憾，未领到"),e.setClose());case 9:case"end":return t.stop()}}),t)}))),e.setClose=function(){clearTimeout(e.timeId),e.setState({couponData:null})},e}return w()(n,[{key:"componentDidMount",value:function(){this.httpClient=new D.a,this.clickCouponButton=N()(this.getCoupon,2e3,{trailing:!1})}},{key:"componentDidUpdate",value:function(e){this.props.data&&this.props.data!==e.data&&(clearTimeout(this.timeId),this.showCoupon(this.props.data))}},{key:"componentWillUnmount",value:function(){this.timeId&&clearTimeout(this.timeId)}},{key:"computeFontSize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.length;switch(t){case 1:return".4rem";case 2:return".32rem";case 3:return".24rem";default:return".21rem"}}},{key:"showCoupon",value:function(e){var t=e.batchSn,n=e.goodsId,r=e.discount,o=e.goodsOriginalPrice,i=e.priceUsingCoupon,a=Object(x.priceCent)(r);Object(I.b)({page_el_sn:1991197,batch_sn:t,goods_id:n}),this.setState({couponData:T(T({},e),{},{goodsOriginalPrice:Object(x.priceCent)(o),priceUsingCoupon:i&&Object(x.priceCent)(i),discount:a}),countNum:5,discountStyle:{fontSize:this.computeFontSize(a)}},this.countDown)}},{key:"countDown",value:function(){var e=this;this.timeId=setTimeout((function(){var t=e.state.countNum-1;t>0?(e.setState({countNum:t}),e.countDown()):e.setState({couponData:!1})}),1e3)}},{key:"render",value:function(){if(!this.state.couponData)return null;var e=T(T({},this.state),{},{setClose:this.setClose,clickCouponButton:this.clickCouponButton});return m.a.createElement(F,e)}}]),n}(p.Component),M={bigPromotion:1005,firstPageGoodsList:1006,anchorPop:1003,homepageOpt:1003,liveStory:1010},Q=[M.bigPromotion,M.firstPageGoodsList,M.liveStory];function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Y=null,G=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"post";return Y||(Y=new D.a),Y[r](e,t,X(X({},n),{},{defaultErrorHandler:function(){}}))||{}},R=function(){var e=a()(l.a.mark((function e(){var t,n,r=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},n="api/eclipse/special/coupon/query_special_goods_coupon",e.next=4,G(n,t,{},"post");case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=Object(g.a)(d.observer)((function(){var e=Object(f.k)().store,t=e.showId,n=e.roomId,r=e.query,o=e.highLayerData,i=Object(p.useState)(null),c=s()(i,2),u=c[0],d=c[1],g=Object(f.e)(function(){var e=a()(l.a.mark((function e(n){var r,o,i,a,c,s,u,p;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.o)(2e3);case 2:return o=(r=n||{}).batch_sn,i=r.goods_id,a=r.min_onsale_group_price,c=r.pageSource,s={showId:t,batchSn:o,goodsId:i,pageSource:c||"anchorPop",minOnsaleGroupPrice:a},e.next=6,R(s);case 6:null!=(u=e.sent)&&u.result&&(p=K(K({},u.result),{},{goodsId:i,scene:c?M[c]:M.anchorPop,removeBatchSn:Q.includes(M[c])}),d(p));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());Object(p.useEffect)((function(){var e,t,n,o;t=(e=r||{})._live_pop_exclusive_coupon,n=e._live_goods_id,o=e._live_batch_sn,t&&"detailPromotionList"!==t&&n&&g({pageSource:t,goods_id:n,batch_sn:o})}),[]),Object(p.useEffect)((function(){var e=(o||{}).activity_type,t=null;if(e===b.a.EXCLUSIVE_COUPON){var n=o.split_time,r=void 0===n?0:n,i=o.goods_coupon_vo,a=void 0===i?{}:i,c=1e3*parseInt(r)||3e3;t=setTimeout((function(){g(a)}),c)}return function(){t&&clearTimeout(t)}}),[o]);var v={roomId:n,showId:t,data:u};return m.a.createElement(J,v)}))},"k/PS":function(e,t,n){(t=e.exports=n("I1BE")(!1)).push([e.i,".w60XWAJV.w60XWAJV{position:relative;background-color:transparent;margin-top:-.03rem;width:3rem}._1v2UqMdq._1v2UqMdq{background-color:rgba(0,0,0,.4)}._1rlPzPjm{position:absolute;bottom:-1.1rem;left:0;right:0;margin:auto;text-align:center;width:.32rem;height:.32rem}._1Qza8-vh{margin:0 .21rem .05rem;width:2.57rem;height:.55rem}._8OwCeBso{position:relative;width:3rem;height:2.01rem;background:-webkit-linear-gradient(315deg,#ff496c,#ff254b 50%,#fc661a);background:linear-gradient(135deg,#ff496c,#ff254b 50%,#fc661a);border-radius:.1rem}._1uG9ys_j{margin:.16rem 0 0 .1rem;width:2.8rem;height:1rem}._3W7N1q0B{position:absolute;top:.16rem;left:.1rem;right:.1rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.U1gF-7wL{margin:.04rem 0 .04rem .04rem;border-radius:.02rem;overflow:hidden}._2gby-2Qc,.U1gF-7wL{width:.92rem;height:.92rem}._2GWWpUJO{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:.12rem .08rem;width:1.1rem;height:1rem}._2GWWpUJO,._39Zi4LIA{-webkit-box-orient:vertical}._39Zi4LIA{margin:-.03rem 0 auto;padding-right:.06rem;width:1rem;font-size:.13rem;color:#151516;line-height:.2rem;display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2}._2YjOzQql{font-size:.12rem;color:#9c9c9c;line-height:1}.YVmoOLWJ{padding-top:.04rem;font-size:.12rem;font-family:PingFangSC-Medium,PingFang SC,PingFangSC-Regular,STHeiti STXihei,Microsoft YaHei,Microsoft JhengHei,miui;font-weight:700;font-weight:500;color:#e02e24;line-height:.18rem}._2g7q0SDY{font-size:.18rem}._2mv9mqAn{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#e02e24;text-align:center}._32Q760pb{font-family:PingFangSC-Medium,PingFang SC,PingFangSC-Regular,STHeiti STXihei,Microsoft YaHei,Microsoft JhengHei,miui;font-weight:700;font-weight:500;font-size:.4rem;line-height:.4rem}._3x5vXxWQ{position:relative;bottom:.02rem;font-size:.15rem;line-height:1}._1u-7tAU7{position:relative;margin:.06rem auto .08rem;width:.5rem;height:.06rem;background:#ededed;border-radius:.03rem}.u-bzDz62{position:absolute;left:0;height:inherit;background:#e02e24;border-radius:inherit}._2Fyr2rWj{font-size:.11rem;line-height:1}._2fjOfV55{margin:.2rem auto;width:2.8rem;height:.45rem;background:-webkit-linear-gradient(top,#fee6c1,#fec97e);background:linear-gradient(180deg,#fee6c1,#fec97e);box-shadow:0 .03rem .08rem 0 rgba(226,7,0,.5);border-radius:.23rem;font-size:.17rem;font-family:PingFangSC-Semibold,PingFang SC,PingFangSC-Regular,STHeiti STXihei,Microsoft YaHei,Microsoft JhengHei,miui;font-weight:700;font-weight:600;color:#de0312;line-height:.45rem;text-align:center}._2fjOfV55:active{background:-webkit-linear-gradient(top,hsla(36,97%,88%,.8),hsla(35,98%,75%,.8));background:linear-gradient(180deg,hsla(36,97%,88%,.8),hsla(35,98%,75%,.8))}",""]),t.locals={dialog:"w60XWAJV",backdrop:"_1v2UqMdq",close:"_1rlPzPjm",title:"_1Qza8-vh",dialogContent:"_8OwCeBso",couponBg:"_1uG9ys_j",coupon:"_3W7N1q0B",goodImgWrap:"U1gF-7wL",goodImg:"_2gby-2Qc",content:"_2GWWpUJO",goodsName:"_39Zi4LIA",price:"_2YjOzQql",discountPrice:"YVmoOLWJ",discountPriceNum:"_2g7q0SDY",couponPrice:"_2mv9mqAn",couponPriceNum:"_32Q760pb",couponPriceUnit:"_3x5vXxWQ",progressBar:"_1u-7tAU7",progressBarContent:"u-bzDz62",consumedPer:"_2Fyr2rWj",receiveBtn:"_2fjOfV55"}}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-live-layer/js/loadable_LiveActivityPop_ExclusiveCoupon_c3a1ed75bf399b9fc0db.js.map