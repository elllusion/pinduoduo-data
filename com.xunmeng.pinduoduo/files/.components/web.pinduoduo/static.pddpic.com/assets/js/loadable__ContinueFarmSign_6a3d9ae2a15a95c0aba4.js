(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[103],{"+hnV":function(e,a,t){e.exports={seed_7days:"_2-MHCmvW",card:"_2XbRxooe",last:"_3oKc-OB-",seed_3days:"_15zBoOWF",cardBg:"_2YFO1Q2E",isHighlight:"_3QIXdJ2R",canNotAcquire:"_2GHFZ_wJ",cardContent:"_2HtyltiK",subTitle:"_3akp2XMP",seed:"_3L0iDjaN",light:"_2PTORfQL",rotateAnimation:"_2JY-PKNf",spark:"_16fd_uZP",sparkImg:"_17Gyn3YB",SeqX:"_2H9LevNZ",seedImage:"_1FxQn6LI",seedReward:"_2QffTUkA",seedRewardCount:"_2nbsvX1k",coinImage:"_9Xs2yUIc",acquired:"_2wUI7w_J",isCash:"Hnjco1kp",maxTag:"_1GGEe4L_",amount:"k7kdnoQj",unit:"jf3ccX6m",wechat:"_2COOrrVR",wechatImg:"_16FHuaKN",wechatText:"_1rqhoaHO",typeMoney:"_15F2Iich",count:"_17wCt030"}},Cq9H:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return C});var c=t("FdF9"),l=t("VrAA"),s=t("N23e"),n=t("7PnH"),d=t("/qT4"),i=t("czvi"),m=Object(n.c)({key:"ContinueSignSelector",get:function(e){var a,t,c=e.get;return(null===(a=c(d.a))||void 0===a?void 0:null===(t=a.missionExt)||void 0===t?void 0:t.signPanel)||{}}}),u=(Object(n.c)({key:"TodayAcquiredSignSeed",get:function(e){var a,t=e.get,c=t(m);return null===(a=c.signDayList)||void 0===a?void 0:a[c.signDay-1]}}),Object(n.c)({key:"CanAcquireSelector",get:function(e){var a=e.get,t=a(m);return(null===t||void 0===t?void 0:t.status)===i.c.CAN_ACQUIRE}}),t("lSNA")),r=t.n(u),o=t("TSYQ"),p=t.n(o),f=t("+hnV"),g=t.n(f),v=t("ckxo"),E=t("IW0v");function N(e){var a,t=e.item,l=e.index,s=d.a.useValue().missionCode,u=Object(n.d)(m),o=u.signDay===l+1,f=u.signDay===l||0===l&&u.signDay===u.signDayList.length,N=6===l,_=i.c.CAN_ACQUIRE===t.status,y=i.c.CAN_NOT_ACQUIRE===u.status,h=(null===u||void 0===u?void 0:u.uiType)===i.d.TypeMoney;return c.default.createElement("div",{className:p()(g.a[s],(a={},r()(a,g.a.last,N),r()(a,g.a.isCurrent,o),r()(a,g.a.isNext,f&&y),r()(a,g.a.canNotAcquire,!_),r()(a,g.a.isHighlight,o&&!y||f&&y),r()(a,g.a.typeMoney,h),a))},t.rewardType===v.c.SEED&&c.default.createElement("div",{className:g.a.card},c.default.createElement("div",{className:g.a.cardBg}),c.default.createElement("div",{className:g.a.cardContent},c.default.createElement("div",{className:g.a.subTitle},f&&y?"明日可领":o&&_&&!y?"可领取":"第".concat(l+1,"天")),c.default.createElement("div",{className:g.a.seed},c.default.createElement(E.a,{className:g.a.light,src:"https://commimg.pddpic.com/upload/mobile-live/e83d048d-5e81-488d-8159-91db48cb3750.png.slim.png"}),c.default.createElement("div",{className:g.a.spark},c.default.createElement(E.a,{className:g.a.sparkImg,src:"https://promotion.pddpic.com/upload/mobile_live/a684a7e1-4b1c-4fe9-8e4f-c6e68a069989.png.slim.png"})),c.default.createElement(E.a,{className:g.a.seedImage,src:t.popupImage})),c.default.createElement("div",{className:g.a.seedReward},"收益",c.default.createElement("div",{className:g.a.seedRewardCount},c.default.createElement(E.a,{className:g.a.coinImage,src:v.b.CoinImage}),t.coinCount))),c.default.createElement(E.a,{className:g.a.acquired,src:v.b.Acquired}),t.count>1&&c.default.createElement("div",{className:g.a.count},"x",t.count)),t.rewardType===v.c.CASH&&c.default.createElement("div",{className:p()(g.a.card,g.a.isCash)},c.default.createElement("div",{className:g.a.cardBg}),c.default.createElement("div",{className:g.a.cardContent},c.default.createElement("div",{className:g.a.subTitle},f&&y?"明日可领":o&&_&&!y?"可领取":"第".concat(l+1,"天")),c.default.createElement("div",{className:g.a.maxTag},"最高"),c.default.createElement("div",{className:g.a.amount},t.displayAmount/100,c.default.createElement("span",{className:g.a.unit},"元")),c.default.createElement("div",{className:g.a.wechat},c.default.createElement(E.a,{className:g.a.wechatImg,src:"https://funimg.pddpic.com/subjects/short_video/newWeChatPay2x.png.slim.png"}),c.default.createElement("span",{className:g.a.wechatText},"微信打款"))),c.default.createElement(E.a,{className:g.a.acquired,src:v.b.Acquired})),t.rewardType===v.c.MONEY&&c.default.createElement("div",{className:p()(g.a.card,g.a.typeMoney)},c.default.createElement("div",{className:g.a.cardBg}),c.default.createElement("div",{className:g.a.cardContent},c.default.createElement("div",{className:g.a.subTitle},f&&y?"明日可领":o&&_&&!y?"可领取":"第".concat(l+1,"天")),c.default.createElement(E.a,{className:g.a.light,src:"https://commimg.pddpic.com/upload/mobile-live/38177749-22a2-4d2e-ac82-1d0fc6433525.png.slim.png"}),c.default.createElement("div",{className:g.a.amount},t.displayAmount/100,c.default.createElement("span",{className:g.a.unit},"元")),c.default.createElement("div",{className:g.a.wechat},c.default.createElement(E.a,{className:g.a.wechatImg,src:"https://funimg.pddpic.com/subjects/short_video/newWeChatPay2x.png.slim.png"}),"可提现")),c.default.createElement(E.a,{className:g.a.acquired,src:"https://commimg.pddpic.com/upload/mobile-live/f05e02f0-8103-45f3-812d-c16eec35a01c.png.slim.png"})))}function _(){var e,a=Object(n.d)(m);return c.default.createElement(c.default.Fragment,null,null===a||void 0===a?void 0:null===(e=a.signDayList)||void 0===e?void 0:e.map(function(e,a){return c.default.createElement(N,{key:a,item:e,index:a})}))}var y=t("FuwW"),h=t.n(y),b=t("33M6");function C(){var e=d.a.useActions(),a=e.sign,t=e.closeDialog,u=d.a.useValue().missionCode,r=Object(n.d)(m),o=r.status===i.c.CAN_ACQUIRE,f=(null===r||void 0===r?void 0:r.uiType)===i.d.TypeMoney;return c.default.createElement(l.a,null,c.default.createElement("div",{className:p()(h.a.root,h.a[u],f&&h.a.typeMoney)},c.default.createElement(s.a,{className:h.a.close,onClose:t}),c.default.createElement("div",{className:h.a.signRoot},c.default.createElement("div",{className:h.a.seedPanel},c.default.createElement(_,null)),c.default.createElement(b.a,{className:h.a.button,src:f?"https://commimg.pddpic.com/upload/mobile-live/7c24c678-f312-44b1-b262-e444b8d23b87.png.slim.png":"https://commimg.pddpic.com/upload/mobile-live/a7ce4410-340e-43f1-ba92-c9ba2317f98a.png.slim.png",onClick:o?a:t},o?"领取今日签到奖励":"明日来领"),c.default.createElement("div",{className:h.a.desc},"中断签到后进度重置"))))}},FuwW:function(e,a,t){e.exports={root:"_3fhHhj2h",seed_3days:"p3zzJmnS",typeMoney:"_3WJtcvkT",signRoot:"_3hddNjgW",seedPanel:"_2NESe9Xs",seed_7days:"_3HX-3XOv",button:"gyZQTvGO",desc:"_2tF5vPuh",close:"_2WwePKUS"}}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-video-layer/js/loadable__ContinueFarmSign_6a3d9ae2a15a95c0aba4.js.map