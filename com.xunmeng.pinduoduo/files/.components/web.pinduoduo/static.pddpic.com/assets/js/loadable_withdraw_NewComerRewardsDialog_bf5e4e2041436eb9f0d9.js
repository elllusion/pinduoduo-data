(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[143],{"9rP9":function(e,t,n){"use strict";n.r(t);var a=n("lSNA"),r=n.n(a),i=n("o0o1"),o=n.n(i),s=n("yXPU"),c=n.n(s),l=n("J4zp"),m=n.n(l),d=n("FdF9"),f=n("g5zU"),u=n.n(f),p=n("VrAA"),g=n("N23e"),h=n("KJ00"),_=n("IW0v"),b=n("TSYQ"),w=n.n(b),E=n("ULkR"),T=n.n(E),v=n("Fra6"),N=n("V2iB"),y=n("xNPO"),O=n("UMxp"),A=n("Ta02"),L=n("e09e"),R=n("vkis"),j=n("v2IZ"),k=n("7aoF"),x=d.default.memo(function(){u()(T.a);var e=v.f.useActions(),t=e.hideWithDrawRedpack,n=e.getValue,a=N.a.useActions().getService,i=A.c.useActions().updateWithdrawData,s=Object(d.useState)(null),l=m()(s,2),f=l[0],b=l[1],E=Object(d.useRef)(),x=Object(d.useRef)(),B=Object(d.useRef)(),z=!!f,S=Object(k.a)(c()(o.a.mark(function e(){var t,n,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return clearTimeout(B.current),e.prev=1,e.next=4,a().getQuickMoneyReward({type:"first_enter_withdraw"});case 4:t=e.sent,n=t.result,r=n.rewardToast,b({rewardAmount:r.amount,payType:r.payType}),e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(1),Object(O.a)("活动太火爆了，请稍后再来"),e.abrupt("return");case 14:case"end":return e.stop()}},e,null,[[1,10]])})));Object(y.a)(function(){return B.current=setTimeout(function(){S()},1e3),function(){console.log("reward umount update",z),clearTimeout(B.current),i(n().fromBalance)}});var V=Object(d.useState)(!1),I=m()(V,2),C=I[0],D=I[1];Object(d.useEffect)(function(){if(z){var e=setTimeout(function(){!C&&D(!0)},250);return function(){return clearTimeout(e)}}},[z,C]);var Y=function(){var e=document.getElementById("".concat(n().fromBalance?"balance":"withdraw","_money_id"));e?Object(L.a)({animationEl:x.current,maskEl:E.current,destEL:e,onDestroy:t}):t()};return d.default.createElement(p.a,{name:"NewComerRedPacket",onBackClose:Y,maskRef:E},d.default.createElement("div",{className:w()(T.a.container),ref:x},d.default.createElement(g.a,{className:T.a.close,onClose:function(){Y()}}),d.default.createElement(_.a,{className:T.a.full,src:h.c.BG_SRC}),d.default.createElement("div",{className:w()(T.a.full,"flex-box","flex-dir-col","align-center",r()({},T.a.fadeOut,z))},d.default.createElement("div",{className:w()(T.a.subText,"flex-box","align-center")},d.default.createElement("span",null,"送你多多视频")),d.default.createElement("div",{className:T.a.mainText},"新人提现红包"),d.default.createElement(R.a,{trackingInfo:{page_el_sn:7353209}},d.default.createElement(_.a,{className:T.a.openBtn,src:h.c.OPEN_BTN,onClick:function(){Object(j.c)({page_el_sn:7353209}),S()}})),d.default.createElement("div",{className:w()(T.a.bottomText,"flex-box","align-center","justify-center")},d.default.createElement(_.a,{src:h.c.WECHAT_ICON,className:T.a.wechatIcon}),"现金可提现到微信")),d.default.createElement("div",{className:w()(T.a.content,r()({},T.a.fadeIn,z))},d.default.createElement("div",{className:w()(T.a.contentBody,"flex-box","align-center","flex-dir-col",r()({},T.a.slideIn,C))},d.default.createElement("div",{style:{height:"0.29rem"}}),d.default.createElement("div",{className:T.a.title},"恭喜获得"),d.default.createElement("div",{style:{height:"0.12rem"}}),d.default.createElement(_.a,{src:h.c.LINE,style:{height:"0.1rem"}}),d.default.createElement("div",{style:{height:"0.28rem"}}),d.default.createElement("div",{className:w()(T.a.moneyBox,"flex-box","align-center","justify-center")},d.default.createElement("div",{className:T.a.money},(null===f||void 0===f?void 0:f.rewardAmount)/100)),d.default.createElement("div",{style:{height:"0.16rem"}}),d.default.createElement("div",{className:T.a.cashTip},"可提现到微信")),d.default.createElement(_.a,{src:h.c.STAR_BOTTOM_BG,className:T.a.bottomBG}),d.default.createElement(R.a,{trackingInfo:{page_el_sn:7353210}},d.default.createElement("div",{className:w()(T.a.button,"flex-box","align-center","justify-center"),onClick:function(){Object(j.c)({page_el_sn:7353210}),Y()}},"开心收下")))))});t.default=x},KJ00:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r}),n.d(t,"d",function(){return i}),n.d(t,"e",function(){return o}),n.d(t,"c",function(){return s});var a={page_el_sn:6065756},r={page_el_sn:6065787},i={OPEN:0,CLOSE:1},o={CLICK:0,AUTO:1},s={GOLD_DIALOG_DECORATE:"https://funimg.pddpic.com/subjects/b0d96b32-340f-483d-9b62-d051dd1b708a.png.slim.png",GOLD_AVATAR:"https://funimg.pddpic.com/subjects/e29826f8-f83d-4105-b7aa-2d05b9509278.png.slim.png",GOLD_OPEN:"https://funimg.pddpic.com/subjects/18b2f960-79e2-4e90-a55e-f0cb93e396cf.png.slim.png",OPENING:"https://funimg.pddpic.com/subjects/22d9bf68-f577-4409-ad1d-04d9ac73ecfa.png.slim.png",WECHAT_ICON:"https://funimg.pddpic.com/subjects/3f13490a-a8d3-454e-96fa-ed046374f21d.png.slim.png",LINE:"https://funimg.pddpic.com/subjects/2ce3df47-2403-4689-8042-1d1975904525.png.slim.png",GOLD_BOTTOM_BG:"https://funimg.pddpic.com/subjects/e5c2fdef-30eb-44e4-a59e-b37e1274fa6e.png.slim.png",STAR_AVATAR:"https://commimg.pddpic.com/upload/video-layer/43109a3e-97d7-432a-a7c4-217a12f3b32f.png.slim.c1.png",STAR_OPEN:"https://commimg.pddpic.com/upload/video-layer/5d0b5a51-74d5-4ed9-a4a9-bebee3257b17.png.slim.c1.png",STAR_BOTTOM_BG:"https://commimg.pddpic.com/upload/video-layer/e69f2b24-1844-48ec-b877-5cf68b81df8f.png.slim.c1.png",BG_SRC:"https://funimg.pddpic.com/pdd_live_lego/da796e4d-7d25-45d5-bde3-f5906482ea9b.png.slim.png",OPEN_BTN:"https://funimg.pddpic.com/pdd_live_lego/f24111bc-e156-469e-9bf7-cfdb20d88643.png.slim.png"}},ULkR:function(e,t,n){var a=n("t6Gn"),r=n("Q8e5"),i="string"==typeof a?[[e.i,a,""]]:a;(t=e.exports=a.locals||{})._getContent=function(){return i},t._getCss=function(){return""+a},t._insertCss=function(e){return r(i,e)}},t6Gn:function(e,t,n){(t=e.exports=n("I1BE")(!1)).push([e.i,'.T7o7FRAj{position:relative;width:2.92rem;height:4.36rem;border-radius:8px}.T7o7FRAj._2wwM5r2i{opacity:0;-webkit-transition:opacity .3s linear;transition:opacity .3s linear;pointer-events:none}._3uwJi3cx{position:absolute;width:100%;height:100%;left:0;top:0}._3Ku5o8yO{top:-.43rem}._1H3wJbAj,._3Ku5o8yO{position:absolute;right:.05rem}._1H3wJbAj{width:.29rem;height:.29rem;top:-.53rem}._1l17MjH2{height:.44rem;margin-top:.92rem;margin-bottom:.11rem}._1l17MjH2>span{font-size:.18rem;color:#fffbd1;opacity:.8;font-weight:700}._1SytyjaJ{width:.24rem;height:.24rem;margin-right:.04rem;border-radius:.02rem}._2gwKbLzB{font-size:.24rem;line-height:.32rem;margin-top:.11rem;color:#fffbd1}._3h4sRQ7s{position:absolute;top:2.73rem;left:.97rem;width:.97rem;height:.97rem;-webkit-animation:btnBreath .8s infinite;animation:btnBreath .8s infinite}.kfqphXpQ{position:absolute;width:100%;left:0;bottom:.12rem;white-space:nowrap;font-size:.14rem;color:hsla(0,0%,100%,.7);letter-spacing:0;line-height:.14rem}.kfqphXpQ ._2Qe2hgtL{height:.14rem;width:.1556rem;margin-right:.05rem}.ghU0wVfc{height:.78rem;padding:0 .18rem;color:#151516;font-size:.17rem;white-space:nowrap}._2NRV0TmZ{position:absolute;left:0;top:0;height:100%;width:100%;border-radius:.08rem;overflow:hidden;background:#ee4b37;opacity:0;pointer-events:none}._2NRV0TmZ._2qVYQKS0{opacity:1;pointer-events:auto;-webkit-transition:opacity .3s linear;transition:opacity .3s linear}._2NRV0TmZ ._2rYzwL3s{position:absolute;top:.12rem;left:.12rem;width:2.67rem;height:3.76rem;background:#fff;border-radius:.08rem;-webkit-transform:translateY(100%);transform:translateY(100%)}._2NRV0TmZ ._2rYzwL3s._1zt_X1aQ{-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition:-webkit-transform .3s linear;transition:-webkit-transform .3s linear;transition:transform .3s linear;transition:transform .3s linear,-webkit-transform .3s linear}._2NRV0TmZ ._2rYzwL3s .y8wotYLj{font-size:.16rem;color:hsla(36,25%,53%,.8);line-height:.18rem}._2NRV0TmZ ._2rYzwL3s ._3sLvFlSs{width:1.42rem;height:.76rem;border-radius:.08rem}._2NRV0TmZ ._2rYzwL3s ._3sLvFlSs .nzEZAiqE{height:.52rem;font-size:.44rem;color:#f45331;line-height:.52rem;font-weight:700}._2NRV0TmZ ._2rYzwL3s ._3sLvFlSs .nzEZAiqE:after{position:relative;content:"\\5143";width:.16rem;font-size:.16rem;line-height:.18rem;font-weight:400;top:-.01rem;margin-left:.02rem}._2NRV0TmZ ._2rYzwL3s ._112QoPuu{font-size:.14rem;color:hsla(36,25%,53%,.5);line-height:.14rem}._2NRV0TmZ ._1qTDctLk{position:absolute;bottom:0;left:0;width:100%}._2NRV0TmZ .fPEvg40h{position:absolute;left:.2rem;bottom:.23rem;width:2.51rem;height:.48rem;box-shadow:inset 0 .01rem .01rem 0 #fff;background-image:-webkit-linear-gradient(bottom,#e5c484,#fffadd);background-image:linear-gradient(0deg,#e5c484,#fffadd);border-radius:.25rem;font-size:.18rem;line-height:normal;color:#d74222;font-weight:700}._2NRV0TmZ .fPEvg40h:active{opacity:.8}',""]),t.locals={container:"T7o7FRAj",fadeOut:"_2wwM5r2i",full:"_3uwJi3cx",close:"_3Ku5o8yO",closeIcon:"_1H3wJbAj",subText:"_1l17MjH2",avatarIcon:"_1SytyjaJ",mainText:"_2gwKbLzB",openBtn:"_3h4sRQ7s",bottomText:"kfqphXpQ",wechatIcon:"_2Qe2hgtL",alertText:"ghU0wVfc",content:"_2NRV0TmZ",fadeIn:"_2qVYQKS0",contentBody:"_2rYzwL3s",slideIn:"_1zt_X1aQ",title:"y8wotYLj",moneyBox:"_3sLvFlSs",money:"nzEZAiqE",cashTip:"_112QoPuu",bottomBG:"_1qTDctLk",button:"fPEvg40h"}}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-video-layer/js/loadable_withdraw_NewComerRewardsDialog_bf5e4e2041436eb9f0d9.js.map