(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[79],{"0QqM":function(e,t,n){"use strict";n.d(t,"a",function(){return i});var i=n("FdF9").default.createContext({})},"7Fa9":function(e,t,n){"use strict";n.d(t,"a",function(){return E});var i=n("FdF9"),a=n("g5zU"),r=n.n(a),o=n("fqWr"),l=n("ncRi"),c=n.n(l),s=n("lSNA"),m=n.n(s),d=n("TSYQ"),f=n.n(d),u=n("Wgwc"),b=n.n(u),p=n("biYM"),g=n.n(p),w=n("IW0v"),y=n("Pf7F"),v=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:2)-e.length,n=0;n<t;n++)e="0"+e;return e},h=function(e){e=parseInt(e,10)||0;var t=new Date(1e3*e);return{year:t.getFullYear().toString(),month:(t.getMonth()+1).toString(),date:t.getDate().toString(),hours:t.getHours().toString(),minutes:t.getMinutes().toString(),seconds:t.getSeconds().toString(),day:t.getDay().toString()}};var x=i.default.memo(function(e){var t=e.time;return i.default.createElement("div",{className:g.a.time},function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];e=+e;var i={0:"星期日",1:"星期一",2:"星期二",3:"星期三",4:"星期四",5:"星期五",6:"星期六"},a=Math.floor(Date.now()/1e3),r=h(a),o=~~(+new Date("".concat(r.year,"/").concat(r.month,"/").concat(r.date)).getTime()/1e3),l=h(e),c=l.year,s=l.month,m=l.date,d=l.hours,f=l.minutes,u=l.day;return e>=o?"".concat(v(d),":").concat(v(f)):e>=o-86400?t||n?"昨天":"昨天 ".concat(v(d),":").concat(v(f)):e>=o-518400?t||n?i[u]:"".concat(i[u]," ").concat(v(d),":").concat(v(f)):t?"".concat(c.substr(-2),"/").concat(v(s),"/").concat(v(m)):n?"".concat(v(s),"月").concat(v(m),"日 ").concat(v(d),":").concat(v(f)):"".concat(c,"年").concat(v(s),"月").concat(v(m),"日 ").concat(v(d),":").concat(v(f))}(t))}),k=i.default.memo(function(e){var t=e.data,n=e.payType;r()(g.a);var a=t.mission,o=t.amount,l=t.acquireTime,c=t.statusText,s=t.rewardMode,d=t.subRewardFlows,u=1===s,p=!!c;return i.default.createElement("div",{className:g.a.container},i.default.createElement(x,{time:Math.floor(l/1e3)}),i.default.createElement("div",{className:f()(g.a.card,m()({},g.a.long,p))},i.default.createElement("div",{className:f()(g.a.header,"flex-box","align-center")},i.default.createElement("div",{className:g.a.headerTitle},a||"小财神")),i.default.createElement("div",{className:g.a.body},i.default.createElement("div",{className:g.a.amountTitle},"收款金额"),i.default.createElement("div",{className:g.a.amountRow},i.default.createElement("div",{className:g.a.amountSymbol},"￥"),(o/100).toFixed(2)),i.default.createElement("div",{className:f()(g.a.footer,"flex-box","flex-dir-col")},i.default.createElement("p",{className:f()("flex-box")},i.default.createElement("div",{className:g.a.accountLabel},"收款账户"),i.default.createElement("div",{className:g.a.accountValue},i.default.createElement("div",{className:g.a.accountIcon},n===y.y.WeChat?i.default.createElement(w.a,{src:u?"https://promotion.pddpic.com/upload/cart/57feec1e-d53e-465d-b513-955b091efef3.png.slim.png":"https://funimg.pddpic.com/pdd_live_lego/67169cad-2854-4610-96c0-b4fb21040e47.png.slim.png",style:{width:".18rem",height:".16rem"}}):i.default.createElement(w.a,{src:"https://funimg.pddpic.com/pdd_live_lego/a1502691-7e13-448c-af4c-dbe75dc06284.png.slim.png",style:{width:".18rem",height:".18rem"}})),i.default.createElement("div",{className:g.a.accountName},n===y.y.Balance?"我的零钱":u?"多多钱包":"微信零钱"))),p&&i.default.createElement("p",{className:f()("flex-box"),style:{marginTop:".08rem"}},i.default.createElement("div",{className:g.a.accountLabel},"打款状态"),i.default.createElement("div",{className:g.a.accountValue},i.default.createElement("div",{className:g.a.accountName},c)))),!!(null===d||void 0===d?void 0:d.length)&&i.default.createElement("div",{className:g.a.mergeInfo},i.default.createElement("div",{className:g.a.mergeLabel},"合并打款"),i.default.createElement("ul",{className:g.a.mergeDetail},d.map(function(e){var t=e.mission,n=e.amount,a=e.acquireTime;return i.default.createElement("li",{className:g.a.mergeItem},i.default.createElement("p",{className:g.a.mergeAmount},"￥",(n/100).toFixed(2),i.default.createElement("b",{className:g.a.mergeSource},t)),i.default.createElement("p",{className:g.a.mergeTime},b()(a).format("HH:mm:ss").split("").map(function(e){return i.default.createElement("b",{style:{width:":"===e?"auto":"0.09rem"}},e)})))}))))))}),_=i.default.memo(function(e){var t=e.list,n=e.payType,a=e.actionText,r=e.actionTip,o=e.renderBottom,l=e.onActionClick,s=Object(i.useRef)();return Object(i.useEffect)(function(){if(s.current){var e=s.current.parentNode;e.scrollTop=e.scrollHeight}},[]),i.default.createElement("div",{className:c.a.root,ref:s},t.map(function(e){return i.default.createElement(k,{key:e.key,data:e,payType:n})}),o?o():i.default.createElement("div",{className:c.a.bottom},!!a&&i.default.createElement("div",{className:c.a.actionBtn,onClick:l},a),!!r&&i.default.createElement("div",{className:c.a.actionTip},r)))}),E=i.default.memo(function(e){r()(c.a);var t="打款记录";return e.payType===y.y.Balance&&(t="零钱明细"),e.payType===y.y.WeChat&&(t="微信打款"),i.default.createPortal(i.default.createElement(o.b,{name:"PaymentRecords",renderBody:function(){return i.default.createElement(_,e)},renderHeader:function(){return i.default.createElement("div",{className:c.a.header},t)},headerStyle:{background:"#EDEDED"},bodyStyle:{background:"#EDEDED"},onClose:e.onClose}),document.body)})},"7z+L":function(e,t,n){(t=e.exports=n("I1BE")(!1)).push([e.i,'._2-Fv7cdB{height:100%;text-align:center;box-shadow:inset 0 0 0 0 #d2d2d2;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:17px;color:#151516;font-weight:700}._2-Fv7cdB:after{position:absolute;left:0;bottom:0;width:100%;height:1px;content:"";background:#d2d2d2;-webkit-transform-origin:left bottom;transform-origin:left bottom}@media only screen and (-webkit-min-device-pixel-ratio:1.5),only screen and (min--moz-device-pixel-ratio:1.5),only screen and (min-resolution:1.5dppx),only screen and (min-resolution:144dpi){._2-Fv7cdB:after{-webkit-transform:scaleY(.66667);transform:scaleY(.66667)}}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min--moz-device-pixel-ratio:2),only screen and (min-resolution:2dppx),only screen and (min-resolution:192dpi){._2-Fv7cdB:after{-webkit-transform:scaleY(.5);transform:scaleY(.5)}}@media only screen and (-webkit-min-device-pixel-ratio:2.75),only screen and (min--moz-device-pixel-ratio:2.75),only screen and (min-resolution:2.75dppx),only screen and (min-resolution:264dpi){._2-Fv7cdB:after{-webkit-transform:scaleY(.36364);transform:scaleY(.36364)}}@media only screen and (-webkit-min-device-pixel-ratio:3),only screen and (min--moz-device-pixel-ratio:3),only screen and (min-resolution:3dppx),only screen and (min-resolution:288dpi){._2-Fv7cdB:after{-webkit-transform:scaleY(.33333);transform:scaleY(.33333)}}._2xdrv1fl{width:1.84rem;line-height:.41rem;background:#3ac05f;border-radius:.04rem;font-size:.17rem;color:#fff;font-weight:700;text-align:center;white-space:nowrap;margin:.24rem auto}._2xdrv1fl:active{background:rgba(58,192,95,.5)}._3cWKIRur{line-height:1;font-size:.15rem;color:#7f7f7f;text-align:center;margin:.24rem auto .8rem}._2zgMygQg{min-height:180px}',""]),t.locals={header:"_2-Fv7cdB",actionBtn:"_2xdrv1fl",actionTip:"_3cWKIRur",bottom:"_2zgMygQg"}},Kdcw:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var i=n("FdF9"),a=n("g5zU"),r=n.n(a),o=n("CMua"),l=n("xNPO"),c=n("sWk4"),s=n.n(c),m=n("IW0v"),d=n("Pf7F"),f=i.default.memo(function(e){var t;r()(s.a);var n=e.data.payType===d.y.WeChat||e.data.payType===d.y.Multi;return Object(l.a)(function(){var t;null===(t=e.onImpr)||void 0===t||t.call(e)}),i.default.createElement(o.a,{duration:e.duration,onClose:e.onClose},i.default.createElement("div",{className:s.a.container,onClick:e.onClick},i.default.createElement("div",{className:s.a.info},i.default.createElement("div",{className:s.a.title},n?"微信支付":"余额支付"),i.default.createElement("div",{className:s.a.subTitle},(null===(t=e.data)||void 0===t?void 0:t.subTitle)||(n?"收款通知-来自商家转账":"收款通知-来自多多视频转账"))),i.default.createElement(m.a,{src:n?"https://funimg.pddpic.com/pdd_live_lego/e4e10d5f-d843-47d4-8359-fb669ac88eb5.png.slim.c1.png":"https://funimg.pddpic.com/pdd_live_lego/34901de0-d60a-440b-bf34-7b4801a4fff6.png.slim.png",className:s.a.icon})))})},"O1/T":function(e,t,n){(t=e.exports=n("I1BE")(!1)).push([e.i,"._3RceSQeI{position:fixed;width:100vw;height:100vh;top:0;left:0;z-index:1003;background:#fff;-webkit-transform:translate(100%);transform:translate(100%);-webkit-transition:-webkit-transform .5s;transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:stretch;-webkit-align-items:stretch;align-items:stretch}._3RceSQeI[data-visible=true]{-webkit-transform:translate(0);transform:translate(0)}._3EgLbmhl{-webkit-box-flex:0;-webkit-flex:none;flex:none}._1hwq_hpZ,._3DTzHijX{-webkit-box-flex:1;-webkit-flex:auto;flex:auto;overflow:auto;position:relative}._2XZVIabK{position:relative;height:44px}._8duWmt3m{position:absolute;left:0;top:0;width:44px;height:44px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}._185iqGwN{fill:#58595b;width:20px;height:20px}._185iqGwN:active{opacity:.5}",""]),t.locals={page:"_3RceSQeI",pageHeader:"_3EgLbmhl",pageBody:"_3DTzHijX",pageFooter:"_1hwq_hpZ",navBar:"_2XZVIabK",backIconContainer:"_8duWmt3m",backIcon:"_185iqGwN"}},Oa86:function(e,t,n){(t=e.exports=n("I1BE")(!1)).push([e.i,"._21jtfg5H{background:#fff;box-shadow:0 .02rem .08rem 0 rgba(0,0,0,.1);border-radius:.04rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 .16rem}._3bG-o6Xl,._21jtfg5H{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:100%}._3GfE-4xi{-webkit-box-flex:0;-webkit-flex:none;flex:none;width:.43rem;height:.43rem;margin-left:.16rem}._2vVNNkVR{line-height:.2rem;font-size:.14rem;color:#9c9c9c;margin-top:.16rem}.TNu79HCb{line-height:.22rem;font-size:.16rem;color:#151516;font-weight:700;margin-top:.03rem}",""]),t.locals={container:"_21jtfg5H",info:"_3bG-o6Xl",icon:"_3GfE-4xi",title:"_2vVNNkVR",subTitle:"TNu79HCb"}},Sp2h:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return a});var i="inlineLoggerTrackingItems",a="inlineLoggerCommonParams"},VPBP:function(e,t,n){(t=e.exports=n("I1BE")(!1)).push([e.i,'._1MiJ4J7W{margin-bottom:.16rem}._1MiJ4J7W:last-of-type{margin-bottom:.12rem}._30Q6pkzl{color:#888;text-align:center;font-size:.13rem;line-height:.18rem;margin:.12rem 0}._2fCYJeL-{width:3.51rem;background:#fff;border-radius:.06rem;margin:0 auto}._1g7fYkpw{position:relative;height:.53rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}._1g7fYkpw:after{position:absolute;left:0;bottom:0;width:100%;height:1px;content:"";background:#ededed;-webkit-transform-origin:left bottom;transform-origin:left bottom}@media only screen and (-webkit-min-device-pixel-ratio:1.5),only screen and (min--moz-device-pixel-ratio:1.5),only screen and (min-resolution:1.5dppx),only screen and (min-resolution:144dpi){._1g7fYkpw:after{-webkit-transform:scaleY(.66667);transform:scaleY(.66667)}}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min--moz-device-pixel-ratio:2),only screen and (min-resolution:2dppx),only screen and (min-resolution:192dpi){._1g7fYkpw:after{-webkit-transform:scaleY(.5);transform:scaleY(.5)}}@media only screen and (-webkit-min-device-pixel-ratio:2.75),only screen and (min--moz-device-pixel-ratio:2.75),only screen and (min-resolution:2.75dppx),only screen and (min-resolution:264dpi){._1g7fYkpw:after{-webkit-transform:scaleY(.36364);transform:scaleY(.36364)}}@media only screen and (-webkit-min-device-pixel-ratio:3),only screen and (min--moz-device-pixel-ratio:3),only screen and (min-resolution:3dppx),only screen and (min-resolution:288dpi){._1g7fYkpw:after{-webkit-transform:scaleY(.33333);transform:scaleY(.33333)}}._3w2MVhdO{width:.26rem;height:.26rem;background:#d8d8d8;border-radius:50%;margin-left:.18rem}._2E0vWS4R{color:#151516;font-size:.15rem;margin-left:.19rem}.XKinmk2O{contain:content;padding-bottom:.23rem}._1M9WhiaZ{line-height:.21rem;font-size:.15rem;color:#888;text-align:center;margin-top:.39rem}._1LOJS2Bz{height:.53rem;margin-top:.06rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-family:wallet-font;font-size:.38rem;font-weight:700;color:#151516}._1xS1wV46{font-size:.28rem}._3t9fdu-Y{margin-top:.25rem}._2rxPJc3g{font-size:15px;color:#888;margin-left:.19rem}._2Jf5QhUA{margin-left:.23rem}._1uz3OBk3,._2Jf5QhUA{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}._1uz3OBk3{width:.18rem;height:.18rem;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-right:.04rem}._27dSt9K2{color:#000;font-size:.15rem}._4tNJHYXw{display:-webkit-box;display:-webkit-flex;display:flex;margin-top:.19rem;padding:.19rem .19rem 0;border-top:.01rem solid #ededed;overflow:hidden}._3AuglepW{-webkit-flex-shrink:0;flex-shrink:0;margin-right:.23rem;font-size:.15rem;color:#888}._3oycOWac{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:100%;max-height:1rem;overflow:auto;-webkit-overflow-scrolling:touch}._3oycOWac::-webkit-scrollbar{width:0;height:0;display:none}._26yNcO0o{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-shrink:0;flex-shrink:0;margin-top:.08rem;height:.22rem;line-height:.22rem;font-size:.15rem;color:#000}._26yNcO0o:first-child{margin-top:0}._3mhaRLKx{max-width:1.6rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}._3Qe-TIpy{margin-left:.12rem;font-weight:400;color:#888}._30n_tt62{color:#888}._30n_tt62,._30n_tt62 b{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}._30n_tt62 b{font-weight:400}',""]),t.locals={container:"_1MiJ4J7W",time:"_30Q6pkzl",card:"_2fCYJeL-",header:"_1g7fYkpw",headerIcon:"_3w2MVhdO",headerTitle:"_2E0vWS4R",body:"XKinmk2O",amountTitle:"_1M9WhiaZ",amountRow:"_1LOJS2Bz",amountSymbol:"_1xS1wV46",footer:"_3t9fdu-Y",accountLabel:"_2rxPJc3g",accountValue:"_2Jf5QhUA",accountIcon:"_1uz3OBk3",accountName:"_27dSt9K2",mergeInfo:"_4tNJHYXw",mergeLabel:"_3AuglepW",mergeDetail:"_3oycOWac",mergeItem:"_26yNcO0o",mergeAmount:"_3mhaRLKx",mergeSource:"_3Qe-TIpy",mergeTime:"_30n_tt62"}},VfA9:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return g});var i,a=n("lSNA"),r=n.n(a),o=n("J4zp"),l=n.n(o),c=n("7PnH"),s=n("Pf7F"),m=n("FdF9"),d=n("P9so"),f=n("F7s/"),u=n("xNPO");function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach(function(t){r()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}!function(e){e[e.Week=0]="Week",e[e.OneDay=1]="OneDay"}(i||(i={}));var g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){return null},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=Object(m.useState)(null),a=l()(n,2),r=a[0],o=a[1],b=Object(c.d)(f.a),g=Object(c.d)(d.c);return Object(u.a)(function(){var n=!1;function a(){null===e||void 0===e||e(),n||o({rewardFlowList:[],nextRewardButtonText:""})}return b.getUnActiveRewardFlowList({pet_id:g,pay_type:s.y.WeChat,scene_type:t}).then(function(e){return function(e){if(!n)if(e&&!0===e.success&&e.result&&Array.isArray(e.result.rewardFlowList)){var r=e.result.rewardFlowList.map(function(e){return p(p({},e),{},{key:e.acquireTime})}),l=t===i.OneDay?new Date((new Date).setHours(0,0,0,0)).valueOf():-1,c=r.filter(function(e){return e.acquireTime>=l}).sort(function(e,t){return e.acquireTime-t.acquireTime});o({nextRewardButtonText:e.result.nextRewardButtonText||"",rewardFlowList:c})}else a()}(e)}).catch(function(){return a()}),function(){n=!0}}),r}},Ycdt:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var i=function(){window.dispatchEvent(new CustomEvent("closePageLayer",{detail:"all"}))}},Z3zT:function(e,t,n){"use strict";n.d(t,"a",function(){return m}),n.d(t,"b",function(){return d});var i=n("Pf7F"),a=n("Kdcw"),r=n("FdF9"),o=n("O+S/"),l=n("xNPO"),c=n("6E9I"),s=n("cpZb"),m=r.default.memo(function(e){var t=e.onClick,n=e.onClose,c=e.data,m=o.q.useActions().getCombineBalanceAndRemitGray,d=Object(r.useCallback)(function(){var e;n(),null===(e=c.onFinish)||void 0===e||e.call(c)},[c,n]),f=Object(r.useCallback)(function(){var e;null===(e=c.onImpr)||void 0===e||e.call(c)},[c]);return Object(l.a)(function(){c.payType!==i.y.Multi&&c.payType!==i.y.WeChat||2===c.vibrate&&Object(s.d)(),(c.payType===i.y.Balance&&!m()||c.payType===i.y.Coin)&&d()}),c.payType!==i.y.Balance||m()?c.payType===i.y.Coin?null:r.default.createElement(a.a,{duration:3e3,onClose:d,onImpr:f,onClick:t,data:c}):null}),d=r.default.memo(function(e){var t=c.d.useActions().setValue;return Object(l.a)(function(){t({payArriveBannerVisible:!0,payArriveBannerDataProps:e.data})}),null})},ZBG5:function(e,t,n){(t=e.exports=n("I1BE")(!1)).push([e.i,'.LhVxlvye{position:absolute;top:0;left:0;right:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:stretch;-webkit-align-items:stretch;align-items:stretch}._3lyc2NvM{-webkit-box-flex:0;-webkit-flex:none;flex:none}._3mdqmWhm{height:100%;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;font-size:17px;color:#151516;padding-right:18px}._3lyc2NvM,._3mdqmWhm{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}._3lyc2NvM{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}._2yqBXvzA{width:.75rem;height:.75rem;margin-top:.52rem}._2oavWli3{margin-top:.12rem;font-size:.17rem;color:#151516;line-height:.24rem}._2dZR-_2m{height:.65rem;font-size:.46rem;color:#151516;font-weight:700;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-family:wallet-font}._38erzXFC{position:relative;width:3.12rem;margin-top:.32rem;margin-bottom:.04rem}._38erzXFC:after{position:absolute;left:0;bottom:0;width:100%;height:1px;content:"";background:#d8d8d8;-webkit-transform-origin:left bottom;transform-origin:left bottom}@media only screen and (-webkit-min-device-pixel-ratio:1.5),only screen and (min--moz-device-pixel-ratio:1.5),only screen and (min-resolution:1.5dppx),only screen and (min-resolution:144dpi){._38erzXFC:after{-webkit-transform:scaleY(.66667);transform:scaleY(.66667)}}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min--moz-device-pixel-ratio:2),only screen and (min-resolution:2dppx),only screen and (min-resolution:192dpi){._38erzXFC:after{-webkit-transform:scaleY(.5);transform:scaleY(.5)}}@media only screen and (-webkit-min-device-pixel-ratio:2.75),only screen and (min--moz-device-pixel-ratio:2.75),only screen and (min-resolution:2.75dppx),only screen and (min-resolution:264dpi){._38erzXFC:after{-webkit-transform:scaleY(.36364);transform:scaleY(.36364)}}@media only screen and (-webkit-min-device-pixel-ratio:3),only screen and (min--moz-device-pixel-ratio:3),only screen and (min-resolution:3dppx),only screen and (min-resolution:288dpi){._38erzXFC:after{-webkit-transform:scaleY(.33333);transform:scaleY(.33333)}}._3kaKvEQT{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-bottom:-.16rem;width:3.12rem}._1_JoUysu{margin:.12rem 0 .1rem;font-size:.15rem;color:#888}._1yVhzSsG{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:100%;max-height:1.29rem;overflow:auto}._1yVhzSsG::-webkit-scrollbar{width:0;height:0;display:none}._3hvzrsHZ{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-top:.08rem;line-height:.21rem;font-size:.15rem;color:#000}._3hvzrsHZ:first-child{margin-top:0}._3mYTpE3l{max-width:2rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}._2sNZoZh0{margin-left:.3rem;font-weight:400;color:#888}.KUheZG9T{color:#888}.KUheZG9T,.KUheZG9T b{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.KUheZG9T b{font-weight:400}._1PC9ufvQ{width:3.12rem;height:.27rem;font-size:.15rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}._36RGazRO{color:#7f7f7f}._2xPvzebl{color:#151516}._3VS8svW3{-webkit-box-flex:1;-webkit-flex:auto;flex:auto;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}._1WbiCKjp{width:1.84rem;line-height:.41rem;background:#3ac05f;border-radius:.04rem;font-size:.17rem;color:#fff;font-weight:700;text-align:center}._1WbiCKjp:active{background:rgba(58,192,95,.5)}',""]),t.locals={root:"LhVxlvye",content:"_3lyc2NvM",header:"_3mdqmWhm",bigIcon:"_2yqBXvzA",infoTitle:"_2oavWli3",balanceValue:"_2dZR-_2m",splitLine:"_38erzXFC",mergeInfo:"_3kaKvEQT",mergeLabel:"_1_JoUysu",mergeDetail:"_1yVhzSsG",mergeItem:"_3hvzrsHZ",mergeAmount:"_3mYTpE3l",mergeSource:"_2sNZoZh0",mergeTime:"KUheZG9T",infoLine:"_1PC9ufvQ",infoLabel:"_36RGazRO",infoValue:"_2xPvzebl",btnArea:"_3VS8svW3",mainBtn:"_1WbiCKjp"}},ZTWi:function(e,t,n){var i=n("O1/T"),a=n("Q8e5"),r="string"==typeof i?[[e.i,i,""]]:i;(t=e.exports=i.locals||{})._getContent=function(){return r},t._getCss=function(){return""+i},t._insertCss=function(e){return a(r,e)}},biYM:function(e,t,n){var i=n("VPBP"),a=n("Q8e5"),r="string"==typeof i?[[e.i,i,""]]:i;(t=e.exports=i.locals||{})._getContent=function(){return r},t._getCss=function(){return""+i},t._insertCss=function(e){return a(r,e)}},bs2f:function(e,t,n){"use strict";var i=n("FdF9"),a=n("Pf7F"),r=n("g5zU"),o=n.n(r),l=n("O+S/"),c=n("Ycdt"),s=n("TSYQ"),m=n.n(s),d=n("+iA3"),f=n("csMB"),u=n.n(f),b=n("7Fa9"),p=n("VfA9"),g=n("xNPO"),w=n("y4Rd"),y=n("V2iB"),v=function(){o()(u.a);var e=d.i.useValue(),t=e.process,n=e.taskInfo,a=e.nextTaskInfo,r=e.taskConfig,l=d.i.useActions().switchToUnActive,s=a||n,f=s.curStep,b=s.totalStep,p=t!==d.d.Execing,g=p?"明日看视频可获得":2===r.type?"继续看视频领现金":"再看 ".concat(Math.max((null!==b&&void 0!==b?b:1)-(null!==f&&void 0!==f?f:0),1)," 个视频可获得"),w=p?10:3,y=p?"明日再来":"去看视频";return i.default.createElement("div",{className:u.a.card},i.default.createElement("div",{className:u.a.header},g),i.default.createElement("div",{className:u.a.body},i.default.createElement("div",{className:u.a.amountWrap},i.default.createElement("span",{className:u.a.symbol},"¥"),i.default.createElement("span",{className:u.a.amount},w),i.default.createElement("span",{className:u.a.tip},"最高")),i.default.createElement("div",{className:m()(u.a.btn,"flex-box","align-center","justify-center"),onClick:function(){Object(c.a)(),l()}},y)))},h=Object(i.memo)(function(e){var t,n=e.onClose,r=d.i.useActions(),o=r.switchToUnActive,s=r.getBubbleAndShow,m=Object(l.u)("unActiveWatchVideoNewUi"),f=Object(w.a)(),u=Object(p.b)(n,p.a.Week);return Object(g.b)(function(){u&&s()}),u?i.default.createElement(b.a,{list:u.rewardFlowList,onClose:n,payType:a.y.WeChat,actionText:u.nextRewardButtonText,renderBottom:!0!==m&&(null===(t=u.rewardFlowList)||void 0===t?void 0:t.length)?null:v,onActionClick:function(){o(),Object(c.a)(),f(y.a).toWatchVideo()}}):null});t.a=h},csMB:function(e,t,n){var i=n("jmaA"),a=n("Q8e5"),r="string"==typeof i?[[e.i,i,""]]:i;(t=e.exports=i.locals||{})._getContent=function(){return r},t._getCss=function(){return""+i},t._insertCss=function(e){return a(r,e)}},fqWr:function(e,t,n){"use strict";n.d(t,"a",function(){return E}),n.d(t,"c",function(){return O}),n.d(t,"b",function(){return N});var i,a=n("o0o1"),r=n.n(a),o=n("yXPU"),l=n.n(o),c=n("lSNA"),s=n.n(c),m=n("J4zp"),d=n.n(m),f=n("FdF9"),u=n("g5zU"),b=n.n(u),p=n("MpJ2"),g=n("ZTWi"),w=n.n(g),y=n("FG61"),v=n("/N8V"),h=n("u4cM");function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach(function(t){s()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var _={navigation_height:88,statusbar_height:44};function E(e){var t=e.className,n=e.style;return f.default.createElement("svg",{className:t,style:n,viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200"},f.default.createElement("path",{d:"M763.040807 1023.998827a24.72882 24.72882 0 0 1-17.277569-7.003215l-502.082786-487.180282c-4.821674-4.677411-7.535699-11.097709-7.535699-17.810052s2.714024-13.133814 7.535699-17.810052l502.082786-487.180282c9.838045-9.547173 25.540447-9.329019 35.087621 0.533656 9.547173 9.838045 9.304389 25.540447-0.533657 35.087621l-483.739077 469.369057 483.74025 469.37023c9.838045 9.547173 10.08083 25.249575 0.533657 35.08762a24.758142 24.758142 0 0 1-17.811225 7.535699z"}))}function O(){var e=Object(f.useState)(i),t=d()(e,2),n=t[0],a=t[1];return Object(f.useEffect)(function(){n||Object(p.f)("JSUIControl","getNavigationHeight").then(function(e){i=k(k({},_),e)}).catch(function(){i=_}).finally(function(){a(i)})},[n]),n}var N=f.default.memo(function(e){var t=e.name,n=e.zIndex,i=(e.renderFooter,e.renderBody),a=e.renderHeader,o=e.CustomPage,c=e.headerStyle,s=e.bodyStyle,m=e.onClose,u=e.handleClose;b()(w.a);var p=Object(f.useState)(!1),g=d()(p,2),x=g[0],k=g[1],_=O();Object(f.useEffect)(function(){_&&k(!0)},[_]);var N=function(){if(u)return u(l()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return k(!1),e.next=3,Object(h.a)(500);case 3:case"end":return e.stop()}},e)})));k(!1),setTimeout(m,500)},j=Object(f.useRef)(N);return j.current=N,Object(f.useEffect)(function(){var e=function(e){"all"!==e.detail&&e.detail!==t||j.current()};return window.addEventListener("closePageLayer",e),function(){window.removeEventListener("closePageLayer",e)}},[t]),_?f.default.createElement("div",{className:w.a.page,"data-visible":x,style:{zIndex:n}},o?f.default.createElement(o,{onClose:N}):f.default.createElement(f.default.Fragment,null,f.default.createElement("div",{className:w.a.pageHeader,style:c},f.default.createElement("div",{style:{height:_.statusbar_height}}),f.default.createElement("div",{className:w.a.navBar},f.default.createElement("div",{className:w.a.backIconContainer,onClick:N},f.default.createElement(E,{className:w.a.backIcon})),null===a||void 0===a?void 0:a()),f.default.createElement("div",null)),f.default.createElement("div",{className:w.a.pageBody,style:s},null===i||void 0===i?void 0:i())),f.default.createElement(v.a,{onBack:N}),x&&f.default.createElement(y.c,{name:y.e.Dialog})):null})},gSR3:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var i=n("RIqP"),a=n.n(i),r=n("Sp2h");function o(e){var t=e.res,n=e.item;t.locals[r.b]||(t.locals[r.b]=[]),t.locals[r.b]=[].concat(a()(t.locals[r.b]),[n])}},hLDm:function(e,t,n){"use strict";n.d(t,"a",function(){return y});var i=n("pVnL"),a=n.n(i),r=n("lSNA"),o=n.n(r),l=n("J4zp"),c=n.n(l),s=n("QILm"),m=n.n(s),d=n("FdF9"),f=n("SXY3"),u=n("9lNb"),b=n.n(u),p=n("0QqM");n("gSR3");function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach(function(t){o()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function y(e){var t=e.inlineLogger,n=e.trackingInfo,i=e.doImpr,r=void 0===i||i,o=m()(e,["inlineLogger","trackingInfo","doImpr"]);Object(d.useContext)(p.a).res;var l=Object(d.useState)(function(){if(t&&n){var e=w(w({},n),{},{op:"impr"}),i=e;try{i=JSON.parse(b()(e,{isJSON:!0}))}catch(e){}var a=window.inlineLoggerTrackingItems||[],r=Object.keys(i);return a.some(function(e){var t=Object.keys(e);return t.length===r.length&&t.every(function(t){return i[t]===e[t]})})}return!1}),s=c()(l,1)[0];return d.default.createElement(f.a,a()({trackingInfo:n,doImpr:r&&!s},o))}},jMsI:function(e,t,n){var i=n("ZBG5"),a=n("Q8e5"),r="string"==typeof i?[[e.i,i,""]]:i;(t=e.exports=i.locals||{})._getContent=function(){return r},t._getCss=function(){return""+i},t._insertCss=function(e){return a(r,e)}},jmaA:function(e,t,n){(t=e.exports=n("I1BE")(!1)).push([e.i,'._3aChbTgR{width:3.51rem;height:2rem;background:#2aae67;border-radius:.06rem;margin:.5rem auto .16rem}._3aChbTgR:last-of-type{margin-bottom:.12rem}._3aChbTgR:after{margin-top:.22rem;display:block;content:" ";height:65px}._3A2kb_R6{position:relative;height:.57rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-left:.19rem;font-family:PingFangSC-Semibold;font-size:.17rem;color:#fff;line-height:.17rem;font-weight:600}._3A2kb_R6:after{position:absolute;left:0;bottom:0;width:100%;height:1px;content:"";background:#ededed;-webkit-transform-origin:left bottom;transform-origin:left bottom}@media only screen and (-webkit-min-device-pixel-ratio:1.5),only screen and (min--moz-device-pixel-ratio:1.5),only screen and (min-resolution:1.5dppx),only screen and (min-resolution:144dpi){._3A2kb_R6:after{-webkit-transform:scaleY(.66667);transform:scaleY(.66667)}}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min--moz-device-pixel-ratio:2),only screen and (min-resolution:2dppx),only screen and (min-resolution:192dpi){._3A2kb_R6:after{-webkit-transform:scaleY(.5);transform:scaleY(.5)}}@media only screen and (-webkit-min-device-pixel-ratio:2.75),only screen and (min--moz-device-pixel-ratio:2.75),only screen and (min-resolution:2.75dppx),only screen and (min-resolution:264dpi){._3A2kb_R6:after{-webkit-transform:scaleY(.36364);transform:scaleY(.36364)}}@media only screen and (-webkit-min-device-pixel-ratio:3),only screen and (min--moz-device-pixel-ratio:3),only screen and (min-resolution:3dppx),only screen and (min-resolution:288dpi){._3A2kb_R6:after{-webkit-transform:scaleY(.33333);transform:scaleY(.33333)}}.ommVxZee{contain:content}._2b7fPT34{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-family:wallet-font;color:#fff;margin-top:.165rem}._2b7fPT34 ._1ttn0-6b{font-size:.28rem;line-height:.28rem}._2b7fPT34 ._5pXMOPQ5{margin-left:.04rem;font-size:.38rem;line-height:.38rem;position:relative}._2b7fPT34 ._3HfdBIPo{position:absolute;right:1.12rem;opacity:.4;font-size:.15rem;line-height:.15rem}._134aK1uK{margin:.25rem auto 0;width:1.84rem;height:.41rem;background:#fff;border-radius:.04rem;font-family:PingFangSC-Semibold;font-size:.17rem;color:#2aae67;text-align:center;line-height:1;font-weight:600}',""]),t.locals={card:"_3aChbTgR",header:"_3A2kb_R6",body:"ommVxZee",amountWrap:"_2b7fPT34",symbol:"_1ttn0-6b",amount:"_5pXMOPQ5",tip:"_3HfdBIPo",btn:"_134aK1uK"}},ncRi:function(e,t,n){var i=n("7z+L"),a=n("Q8e5"),r="string"==typeof i?[[e.i,i,""]]:i;(t=e.exports=i.locals||{})._getContent=function(){return r},t._getCss=function(){return""+i},t._insertCss=function(e){return a(r,e)}},oTgH:function(e,t,n){"use strict";n.d(t,"a",function(){return y});var i=n("QILm"),a=n.n(i),r=n("FdF9"),o=n("Wgwc"),l=n.n(o),c=n("g5zU"),s=n.n(c),m=n("fqWr"),d=n("jMsI"),f=n.n(d),u=n("IW0v"),b=n("Ta02"),p=n("sCIj"),g=n("O+S/"),w=r.default.memo(function(e){var t=e.amount,n=e.subRewardFlows,i=e.onMainBtnClick,a=e.mainBtnText,o=e.receiveAccount,c=e.mainIcon,s=e.payFrom,m=(0,p.b.useActions().readLeo)("topbanner_time_config"),d=Object(g.t)("showMoneyFlowStatus");return r.default.createElement("div",{className:f.a.root},r.default.createElement("div",{className:f.a.content},r.default.createElement(u.a,{src:c,className:f.a.bigIcon}),r.default.createElement("div",{className:f.a.infoTitle},1===d?"打款中（预计".concat(m||24,"小时内到账）"):"你已收款"),r.default.createElement("div",{className:f.a.balanceValue},r.default.createElement("span",{style:{fontSize:"0.34rem"}},"￥"),"string"==typeof t?t:(t/100).toFixed(2)),!!(null===n||void 0===n?void 0:n.length)&&r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{className:f.a.splitLine}),r.default.createElement("div",{className:f.a.mergeInfo},r.default.createElement("div",{className:f.a.mergeLabel},"该打款合并了",n.length,"项微信打款"),r.default.createElement("ul",{className:f.a.mergeDetail},n.map(function(e){var t=e.mission,n=e.amount,i=e.acquireTime;return r.default.createElement("li",{className:f.a.mergeItem},r.default.createElement("p",{className:f.a.mergeAmount},"￥",(n/100).toFixed(2),r.default.createElement("b",{className:f.a.mergeSource},t)),r.default.createElement("p",{className:f.a.mergeTime},l()(i).format("HH:mm:ss").split("").map(function(e){return r.default.createElement("b",{style:{width:":"===e?"auto":"0.09rem"}},e)})))})))),r.default.createElement("div",{className:f.a.splitLine}),r.default.createElement("div",{className:f.a.infoLine},r.default.createElement("div",{className:f.a.infoLabel},"转账来自"),r.default.createElement("div",{className:f.a.infoValue},s||"多多视频")),r.default.createElement("div",{className:f.a.infoLine},r.default.createElement("div",{className:f.a.infoLabel},"收款账户"),r.default.createElement("div",{className:f.a.infoValue},o))),r.default.createElement("div",{className:f.a.btnArea},a&&r.default.createElement("div",{className:f.a.mainBtn,onClick:i},a)))}),y=r.default.memo(function(e){s()(f.a);var t=e.onClose,n=e.rightTopText,i=e.onRightTopClick,o=a()(e,["onClose","rightTopText","onRightTopClick"]),l=b.c.useActions().showWithdrawRecord,c=Object(g.t)("showMoneyFlowStatus"),d=function(){1===c?l():null===i||void 0===i||i()};return r.default.createPortal(r.default.createElement(m.b,{name:"MyReceivePayment",renderBody:function(){return r.default.createElement(w,o)},renderHeader:function(){return!!n&&r.default.createElement("div",{className:f.a.header,onClick:d},n)},onClose:t}),document.body)})},q1xR:function(e,t,n){"use strict";n.r(t);var i=n("ZDp4"),a=n.n(i),r=n("J4zp"),o=n.n(r),l=n("FdF9"),c=n("Z3zT"),s=n("+iA3"),m=n("oTgH"),d=n("Ycdt"),f=n("bs2f"),u=n("vkis"),b=n("v2IZ"),p=function(e){var t=s.i.useAtom(),n=o()(t,2),i=n[0].payArriveBannerDataProps;a()(n[1]);var r=Object(l.useState)(!1),c=o()(r,2),u=c[0],b=c[1];return l.default.createElement(l.default.Fragment,null,l.default.createElement(m.a,{amount:null===i||void 0===i?void 0:i.amount,subRewardFlows:null===i||void 0===i?void 0:i.subRewardFlows,onMainBtnClick:d.a,onClose:e.onClose,mainBtnText:"继续看视频",receiveAccount:"微信零钱",rightTopText:"打款记录",mainIcon:"https://funimg.pddpic.com/pdd_live_lego/5c854d85-0029-4830-b02f-c019f05a38ba.png.slim.png",onRightTopClick:function(){return b(!0)}}),u&&l.default.createElement(f.a,{onClose:function(){return b(!1)}}))};t.default=Object(l.memo)(function(){var e=Object(l.useState)(!0),t=o()(e,2),n=t[0],i=t[1],a=Object(l.useState)(!1),r=o()(a,2),m=r[0],d=r[1],f=s.i.useAtom(),g=o()(f,2),w=g[0].payArriveBannerDataProps,y=g[1].setValue;return l.default.createElement(l.default.Fragment,null,n&&l.default.createElement(u.a,{trackingInfo:{page_el_sn:6842728}},l.default.createElement(c.a,{data:w,onClose:function(){m?i(!1):y({payArriveBannerVisible:!1,payArriveBannerDataProps:null})},onClick:function(){Object(b.c)({page_el_sn:6842728}),i(!1),d(!0)}})),m&&l.default.createElement(p,{onClose:function(){d(!1),y({payArriveBannerVisible:!1,payArriveBannerDataProps:null})}}))})},sWk4:function(e,t,n){var i=n("Oa86"),a=n("Q8e5"),r="string"==typeof i?[[e.i,i,""]]:i;(t=e.exports=i.locals||{})._getContent=function(){return r},t._getCss=function(){return""+i},t._insertCss=function(e){return a(r,e)}},vkis:function(e,t,n){"use strict";n.d(t,"a",function(){return i.a}),n.d(t,"b",function(){return a});var i=n("hLDm");function a(e){var t=e.appConfig;if(!t)throw new Error("找不到appConfig, 请把修饰器放在appProviders上面");if(window.inlineLoggerTrackingItems&&window.inlineLoggerTrackingItems.some(function(e){return"pv"===e.op})){var n=t.options;n.pageProperty=n.pageProperty||{pv:{}},n.pageProperty.pv=n.pageProperty.pv||{},n.pageProperty.pv.indiv=!0}return e}}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-video-layer/js/loadable_UnActiveWatchVideoTask_TopBanner_c5206780457a60c77a1f.js.map