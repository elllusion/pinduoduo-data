(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[23],{"7Jpw":function(e,t,i){(t=e.exports=i("I1BE")(!1)).push([e.i,"._3Olgn4Kp{background-color:transparent!important}._2TZCprDp{position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:100%;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.iud4N5y4{color:#fff;font-family:PingFangSC-Semibold,PingFang SC,PingFangSC-Regular,STHeiti STXihei,Microsoft YaHei,Microsoft JhengHei,miui;font-weight:700;font-weight:600;text-align:center}.iud4N5y4 i{color:#fff370}._2DrPKz-J{font-size:.22rem}._1aBlNBdS{font-size:.2rem;margin-top:.05rem}._335Eeca1{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;white-space:nowrap}.gzzdhclu{width:2.6rem;max-width:inherit;margin-top:.4rem}._3toNkCrt{width:.243rem;height:.233rem;margin:0 .03rem}.MZJHrbPn{width:2.32rem;height:.577rem;background:url(https://promotion.pddpic.com/mobile_live/82d45f23-fb11-4bec-a3a7-6cc0efe9ee97.png.slim.png);background-size:100%;background-repeat:no-repeat;margin-top:.23rem;font-family:PingFangSC-Medium,PingFang SC,PingFangSC-Regular,STHeiti STXihei,Microsoft YaHei,Microsoft JhengHei,miui;font-weight:700;font-weight:500;font-size:.23rem;color:#fff;text-shadow:0 .02rem 0 #cf3d1d}._1jVTAKtJ{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:.08rem}._2Cw_oF2Z{width:.23rem;height:.23rem}._39UmGqc8{width:.237rem;height:.227rem;margin-left:.05rem}",""]),t.locals={dialog:"_3Olgn4Kp",content:"_2TZCprDp",text:"iud4N5y4",line1:"_2DrPKz-J",line2:"_1aBlNBdS",lineFlex:"_335Eeca1",gold:"gzzdhclu",goldImg1:"_3toNkCrt",btn:"MZJHrbPn",btnContent:"_1jVTAKtJ",smallGold:"_2Cw_oF2Z",btnSmallGold:"_39UmGqc8"}},Cyn0:function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return a}));var n={BrowseGuide:1,BuyGuide:2},a="LiveOuterTask_SpiritBrowserCompleteKey"},SRzI:function(e,t,i){var n=i("7Jpw"),a=i("Q8e5"),r="string"==typeof n?[[e.i,n,""]]:n;(t=e.exports=n.locals||{})._getContent=function(){return r},t._getCss=function(){return""+n},t._insertCss=function(e){return a(r,e)}},gWvw:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,i=["个","万","亿","兆","垓"];if(!/^(([1-9][0-9]*)|0)$/.test(e))return console.warn("字符串传参不标准，返回为空字符串"),{value:"",unit:"",valueStr:"",takeUnitStr:""};var n=""+e,a=Math.floor((n.length-1)/4),r=a<i.length?a:i.length-1,o=n.length-4*r,l=n.slice(0,o),c=n.slice(o,o+t),s=i[r]||i[i.length-1],m=0===r?l:l+"."+c;return m+(0===r?"":s)}},npVO:function(e,t,i){"use strict";i.r(t);var n=i("q1tI"),a=i.n(n),r=i("TyAF"),o=i("Vpw8"),l=i("O2NP"),c=i("alVk"),s=i("YkDL"),m=i("FoiV"),d=i("Cyn0"),u=i("kLkQ"),g=i("TSYQ"),f=i.n(g),p=i("PlGL"),b=i("HIPb"),w=i("mFSr"),_=i("gWvw"),v=i("N4rI"),k=i("SRzI"),h=i.n(k),S=function(e){var t=e.className;return a.a.createElement(w.a,{className:t,src:"https://promotion.pddpic.com/mobile_live/36f5fe17-2ff0-46c3-8b7c-89267241cf2a.png.slim.png"})},y=Object(o.a)(r.observer)((function(){Object(b.a)(h.a);var e=Object(l.k)().store,t=e.activityTaskStore,i=e.roomId,n=t.missionTypeMap,r=t.hideSpiritDialog,o=t.spiritDialogType,c=n[m.d.BROWSE]||{},s=(c.status,c.priceNum),u=c.completeSeconds,g=void 0===u?60:u,k=n[m.d.BUY]||{},y=(k.status,k.priceNum),O=Object(_.a)(s||0),N=Object(_.a)(y||0);Object(l.f)((function(){var e=setTimeout((function(){r()}),7e3);return function(){clearTimeout(e)}}));var x=o===d.a.BrowseGuide?"去浏览":"去拼单",E=o===d.a.BrowseGuide?O:N;return a.a.createElement(p.a,{className:h.a.dialog,BackdropProps:{onClick:function(){r()}}},a.a.createElement("div",{className:h.a.content},o===d.a.BrowseGuide?a.a.createElement("div",{className:h.a.text},a.a.createElement("div",{className:h.a.line1},"浏览直播间",g,"秒"),a.a.createElement("div",{className:f()(h.a.line2,h.a.lineFlex)},"可获得",a.a.createElement("i",null,O),a.a.createElement(S,{className:h.a.goldImg1}),"奖励")):o===d.a.BuyGuide?a.a.createElement("div",{className:h.a.text},a.a.createElement("div",{className:f()(h.a.line1,h.a.lineFlex)},"浏览完成获得",O,a.a.createElement(S,{className:h.a.goldImg1}),"奖励"),a.a.createElement("div",{className:h.a.line2},a.a.createElement("i",null,"直播间下单可再得",N,"金币"))):null,a.a.createElement(w.a,{className:h.a.gold,src:"https://promotion.pddpic.com/mobile_live/7cddf8f8-b6a8-4071-be61-5c9affb1cc27.png.slim.png"}),a.a.createElement("div",{className:h.a.btn,onClick:function(){r(),o===d.a.BuyGuide&&Object(v.a)("live_shop_coupon_dialog",{openLiveGoods:!0,room_id:i})}},a.a.createElement("div",{className:h.a.btnContent},x,"+",E,a.a.createElement(S,{className:h.a.btnSmallGold})))))}));t.default=Object(o.a)(r.observer)((function(){var e=Object(l.k)().store,t=e.activityTaskStore,i=e.query,r=t.spiritDialogType,o=t.missionTypeMap,g=t.showSpiritDialog,f=Object.values(d.a).includes(r);return Object(l.f)((function(){var e;(null===(e=o[m.d.BROWSE])||void 0===e?void 0:e.status)!==m.c.UNDONE||Object(u.k)(null==i?void 0:i.list_id,"LiveOuterTask_SpiritBrowserKey")||(g(d.a.BrowseGuide),Object(u.n)(null==i?void 0:i.list_id,"LiveOuterTask_SpiritBrowserKey"))})),Object(n.useEffect)((function(){f?(Object(s.a)({source:"SpiritTaskDialog"}),Object(c.b)()):(Object(s.b)({source:"SpiritTaskDialog"}),Object(c.a)()),e.disableLiveRoomSlide(f,"SpiritTaskDialog")}),[f]),f?a.a.createElement(y,null):null}))}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-live-layer/js/loadable_ActivityTasks_SpiritDialogs_eab7ef04e7d2f40a4f69.js.map