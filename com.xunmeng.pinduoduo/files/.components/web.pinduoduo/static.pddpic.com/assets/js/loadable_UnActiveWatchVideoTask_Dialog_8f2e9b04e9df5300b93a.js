(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[72],{"32D7":function(e,t,n){"use strict";n.r(t);var a=n("ZDp4"),i=n.n(a),r=n("J4zp"),o=n.n(r),c=n("FdF9"),l=n("+iA3"),s=n("bs2f"),d=Object(c.memo)(function(){var e=l.i.useAtom(),t=o()(e,2);i()(t[0]);var n=t[1].setValue;return c.default.createElement(s.a,{onClose:function(){n({dialogVisible:!1})}})});t.default=d},"7Fa9":function(e,t,n){"use strict";n.d(t,"a",function(){return E});var a=n("FdF9"),i=n("g5zU"),r=n.n(i),o=n("fqWr"),c=n("ncRi"),l=n.n(c),s=n("lSNA"),d=n.n(s),m=n("TSYQ"),f=n.n(m),u=n("Wgwc"),b=n.n(u),p=n("biYM"),g=n.n(p),w=n("IW0v"),y=n("Pf7F"),h=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:2)-e.length,n=0;n<t;n++)e="0"+e;return e},x=function(e){e=parseInt(e,10)||0;var t=new Date(1e3*e);return{year:t.getFullYear().toString(),month:(t.getMonth()+1).toString(),date:t.getDate().toString(),hours:t.getHours().toString(),minutes:t.getMinutes().toString(),seconds:t.getSeconds().toString(),day:t.getDay().toString()}};var v=a.default.memo(function(e){var t=e.time;return a.default.createElement("div",{className:g.a.time},function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];e=+e;var a={0:"星期日",1:"星期一",2:"星期二",3:"星期三",4:"星期四",5:"星期五",6:"星期六"},i=Math.floor(Date.now()/1e3),r=x(i),o=~~(+new Date("".concat(r.year,"/").concat(r.month,"/").concat(r.date)).getTime()/1e3),c=x(e),l=c.year,s=c.month,d=c.date,m=c.hours,f=c.minutes,u=c.day;return e>=o?"".concat(h(m),":").concat(h(f)):e>=o-86400?t||n?"昨天":"昨天 ".concat(h(m),":").concat(h(f)):e>=o-518400?t||n?a[u]:"".concat(a[u]," ").concat(h(m),":").concat(h(f)):t?"".concat(l.substr(-2),"/").concat(h(s),"/").concat(h(d)):n?"".concat(h(s),"月").concat(h(d),"日 ").concat(h(m),":").concat(h(f)):"".concat(l,"年").concat(h(s),"月").concat(h(d),"日 ").concat(h(m),":").concat(h(f))}(t))}),k=a.default.memo(function(e){var t=e.data,n=e.payType;r()(g.a);var i=t.mission,o=t.amount,c=t.acquireTime,l=t.statusText,s=t.rewardMode,m=t.subRewardFlows,u=1===s,p=!!l;return a.default.createElement("div",{className:g.a.container},a.default.createElement(v,{time:Math.floor(c/1e3)}),a.default.createElement("div",{className:f()(g.a.card,d()({},g.a.long,p))},a.default.createElement("div",{className:f()(g.a.header,"flex-box","align-center")},a.default.createElement("div",{className:g.a.headerTitle},i||"小财神")),a.default.createElement("div",{className:g.a.body},a.default.createElement("div",{className:g.a.amountTitle},"收款金额"),a.default.createElement("div",{className:g.a.amountRow},a.default.createElement("div",{className:g.a.amountSymbol},"￥"),(o/100).toFixed(2)),a.default.createElement("div",{className:f()(g.a.footer,"flex-box","flex-dir-col")},a.default.createElement("p",{className:f()("flex-box")},a.default.createElement("div",{className:g.a.accountLabel},"收款账户"),a.default.createElement("div",{className:g.a.accountValue},a.default.createElement("div",{className:g.a.accountIcon},n===y.y.WeChat?a.default.createElement(w.a,{src:u?"https://promotion.pddpic.com/upload/cart/57feec1e-d53e-465d-b513-955b091efef3.png.slim.png":"https://funimg.pddpic.com/pdd_live_lego/67169cad-2854-4610-96c0-b4fb21040e47.png.slim.png",style:{width:".18rem",height:".16rem"}}):a.default.createElement(w.a,{src:"https://funimg.pddpic.com/pdd_live_lego/a1502691-7e13-448c-af4c-dbe75dc06284.png.slim.png",style:{width:".18rem",height:".18rem"}})),a.default.createElement("div",{className:g.a.accountName},n===y.y.Balance?"我的零钱":u?"多多钱包":"微信零钱"))),p&&a.default.createElement("p",{className:f()("flex-box"),style:{marginTop:".08rem"}},a.default.createElement("div",{className:g.a.accountLabel},"打款状态"),a.default.createElement("div",{className:g.a.accountValue},a.default.createElement("div",{className:g.a.accountName},l)))),!!(null===m||void 0===m?void 0:m.length)&&a.default.createElement("div",{className:g.a.mergeInfo},a.default.createElement("div",{className:g.a.mergeLabel},"合并打款"),a.default.createElement("ul",{className:g.a.mergeDetail},m.map(function(e){var t=e.mission,n=e.amount,i=e.acquireTime;return a.default.createElement("li",{className:g.a.mergeItem},a.default.createElement("p",{className:g.a.mergeAmount},"￥",(n/100).toFixed(2),a.default.createElement("b",{className:g.a.mergeSource},t)),a.default.createElement("p",{className:g.a.mergeTime},b()(i).format("HH:mm:ss").split("").map(function(e){return a.default.createElement("b",{style:{width:":"===e?"auto":"0.09rem"}},e)})))}))))))}),_=a.default.memo(function(e){var t=e.list,n=e.payType,i=e.actionText,r=e.actionTip,o=e.renderBottom,c=e.onActionClick,s=Object(a.useRef)();return Object(a.useEffect)(function(){if(s.current){var e=s.current.parentNode;e.scrollTop=e.scrollHeight}},[]),a.default.createElement("div",{className:l.a.root,ref:s},t.map(function(e){return a.default.createElement(k,{key:e.key,data:e,payType:n})}),o?o():a.default.createElement("div",{className:l.a.bottom},!!i&&a.default.createElement("div",{className:l.a.actionBtn,onClick:c},i),!!r&&a.default.createElement("div",{className:l.a.actionTip},r)))}),E=a.default.memo(function(e){r()(l.a);var t="打款记录";return e.payType===y.y.Balance&&(t="零钱明细"),e.payType===y.y.WeChat&&(t="微信打款"),a.default.createPortal(a.default.createElement(o.b,{name:"PaymentRecords",renderBody:function(){return a.default.createElement(_,e)},renderHeader:function(){return a.default.createElement("div",{className:l.a.header},t)},headerStyle:{background:"#EDEDED"},bodyStyle:{background:"#EDEDED"},onClose:e.onClose}),document.body)})},"7z+L":function(e,t,n){(t=e.exports=n("I1BE")(!1)).push([e.i,'._2-Fv7cdB{height:100%;text-align:center;box-shadow:inset 0 0 0 0 #d2d2d2;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:17px;color:#151516;font-weight:700}._2-Fv7cdB:after{position:absolute;left:0;bottom:0;width:100%;height:1px;content:"";background:#d2d2d2;-webkit-transform-origin:left bottom;transform-origin:left bottom}@media only screen and (-webkit-min-device-pixel-ratio:1.5),only screen and (min--moz-device-pixel-ratio:1.5),only screen and (min-resolution:1.5dppx),only screen and (min-resolution:144dpi){._2-Fv7cdB:after{-webkit-transform:scaleY(.66667);transform:scaleY(.66667)}}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min--moz-device-pixel-ratio:2),only screen and (min-resolution:2dppx),only screen and (min-resolution:192dpi){._2-Fv7cdB:after{-webkit-transform:scaleY(.5);transform:scaleY(.5)}}@media only screen and (-webkit-min-device-pixel-ratio:2.75),only screen and (min--moz-device-pixel-ratio:2.75),only screen and (min-resolution:2.75dppx),only screen and (min-resolution:264dpi){._2-Fv7cdB:after{-webkit-transform:scaleY(.36364);transform:scaleY(.36364)}}@media only screen and (-webkit-min-device-pixel-ratio:3),only screen and (min--moz-device-pixel-ratio:3),only screen and (min-resolution:3dppx),only screen and (min-resolution:288dpi){._2-Fv7cdB:after{-webkit-transform:scaleY(.33333);transform:scaleY(.33333)}}._2xdrv1fl{width:1.84rem;line-height:.41rem;background:#3ac05f;border-radius:.04rem;font-size:.17rem;color:#fff;font-weight:700;text-align:center;white-space:nowrap;margin:.24rem auto}._2xdrv1fl:active{background:rgba(58,192,95,.5)}._3cWKIRur{line-height:1;font-size:.15rem;color:#7f7f7f;text-align:center;margin:.24rem auto .8rem}._2zgMygQg{min-height:180px}',""]),t.locals={header:"_2-Fv7cdB",actionBtn:"_2xdrv1fl",actionTip:"_3cWKIRur",bottom:"_2zgMygQg"}},"O1/T":function(e,t,n){(t=e.exports=n("I1BE")(!1)).push([e.i,"._3RceSQeI{position:fixed;width:100vw;height:100vh;top:0;left:0;z-index:1003;background:#fff;-webkit-transform:translate(100%);transform:translate(100%);-webkit-transition:-webkit-transform .5s;transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:stretch;-webkit-align-items:stretch;align-items:stretch}._3RceSQeI[data-visible=true]{-webkit-transform:translate(0);transform:translate(0)}._3EgLbmhl{-webkit-box-flex:0;-webkit-flex:none;flex:none}._1hwq_hpZ,._3DTzHijX{-webkit-box-flex:1;-webkit-flex:auto;flex:auto;overflow:auto;position:relative}._2XZVIabK{position:relative;height:44px}._8duWmt3m{position:absolute;left:0;top:0;width:44px;height:44px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}._185iqGwN{fill:#58595b;width:20px;height:20px}._185iqGwN:active{opacity:.5}",""]),t.locals={page:"_3RceSQeI",pageHeader:"_3EgLbmhl",pageBody:"_3DTzHijX",pageFooter:"_1hwq_hpZ",navBar:"_2XZVIabK",backIconContainer:"_8duWmt3m",backIcon:"_185iqGwN"}},VPBP:function(e,t,n){(t=e.exports=n("I1BE")(!1)).push([e.i,'._1MiJ4J7W{margin-bottom:.16rem}._1MiJ4J7W:last-of-type{margin-bottom:.12rem}._30Q6pkzl{color:#888;text-align:center;font-size:.13rem;line-height:.18rem;margin:.12rem 0}._2fCYJeL-{width:3.51rem;background:#fff;border-radius:.06rem;margin:0 auto}._1g7fYkpw{position:relative;height:.53rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}._1g7fYkpw:after{position:absolute;left:0;bottom:0;width:100%;height:1px;content:"";background:#ededed;-webkit-transform-origin:left bottom;transform-origin:left bottom}@media only screen and (-webkit-min-device-pixel-ratio:1.5),only screen and (min--moz-device-pixel-ratio:1.5),only screen and (min-resolution:1.5dppx),only screen and (min-resolution:144dpi){._1g7fYkpw:after{-webkit-transform:scaleY(.66667);transform:scaleY(.66667)}}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min--moz-device-pixel-ratio:2),only screen and (min-resolution:2dppx),only screen and (min-resolution:192dpi){._1g7fYkpw:after{-webkit-transform:scaleY(.5);transform:scaleY(.5)}}@media only screen and (-webkit-min-device-pixel-ratio:2.75),only screen and (min--moz-device-pixel-ratio:2.75),only screen and (min-resolution:2.75dppx),only screen and (min-resolution:264dpi){._1g7fYkpw:after{-webkit-transform:scaleY(.36364);transform:scaleY(.36364)}}@media only screen and (-webkit-min-device-pixel-ratio:3),only screen and (min--moz-device-pixel-ratio:3),only screen and (min-resolution:3dppx),only screen and (min-resolution:288dpi){._1g7fYkpw:after{-webkit-transform:scaleY(.33333);transform:scaleY(.33333)}}._3w2MVhdO{width:.26rem;height:.26rem;background:#d8d8d8;border-radius:50%;margin-left:.18rem}._2E0vWS4R{color:#151516;font-size:.15rem;margin-left:.19rem}.XKinmk2O{contain:content;padding-bottom:.23rem}._1M9WhiaZ{line-height:.21rem;font-size:.15rem;color:#888;text-align:center;margin-top:.39rem}._1LOJS2Bz{height:.53rem;margin-top:.06rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-family:wallet-font;font-size:.38rem;font-weight:700;color:#151516}._1xS1wV46{font-size:.28rem}._3t9fdu-Y{margin-top:.25rem}._2rxPJc3g{font-size:15px;color:#888;margin-left:.19rem}._2Jf5QhUA{margin-left:.23rem}._1uz3OBk3,._2Jf5QhUA{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}._1uz3OBk3{width:.18rem;height:.18rem;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-right:.04rem}._27dSt9K2{color:#000;font-size:.15rem}._4tNJHYXw{display:-webkit-box;display:-webkit-flex;display:flex;margin-top:.19rem;padding:.19rem .19rem 0;border-top:.01rem solid #ededed;overflow:hidden}._3AuglepW{-webkit-flex-shrink:0;flex-shrink:0;margin-right:.23rem;font-size:.15rem;color:#888}._3oycOWac{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:100%;max-height:1rem;overflow:auto;-webkit-overflow-scrolling:touch}._3oycOWac::-webkit-scrollbar{width:0;height:0;display:none}._26yNcO0o{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-shrink:0;flex-shrink:0;margin-top:.08rem;height:.22rem;line-height:.22rem;font-size:.15rem;color:#000}._26yNcO0o:first-child{margin-top:0}._3mhaRLKx{max-width:1.6rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}._3Qe-TIpy{margin-left:.12rem;font-weight:400;color:#888}._30n_tt62{color:#888}._30n_tt62,._30n_tt62 b{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}._30n_tt62 b{font-weight:400}',""]),t.locals={container:"_1MiJ4J7W",time:"_30Q6pkzl",card:"_2fCYJeL-",header:"_1g7fYkpw",headerIcon:"_3w2MVhdO",headerTitle:"_2E0vWS4R",body:"XKinmk2O",amountTitle:"_1M9WhiaZ",amountRow:"_1LOJS2Bz",amountSymbol:"_1xS1wV46",footer:"_3t9fdu-Y",accountLabel:"_2rxPJc3g",accountValue:"_2Jf5QhUA",accountIcon:"_1uz3OBk3",accountName:"_27dSt9K2",mergeInfo:"_4tNJHYXw",mergeLabel:"_3AuglepW",mergeDetail:"_3oycOWac",mergeItem:"_26yNcO0o",mergeAmount:"_3mhaRLKx",mergeSource:"_3Qe-TIpy",mergeTime:"_30n_tt62"}},VfA9:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return g});var a,i=n("lSNA"),r=n.n(i),o=n("J4zp"),c=n.n(o),l=n("7PnH"),s=n("Pf7F"),d=n("FdF9"),m=n("P9so"),f=n("F7s/"),u=n("xNPO");function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach(function(t){r()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}!function(e){e[e.Week=0]="Week",e[e.OneDay=1]="OneDay"}(a||(a={}));var g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){return null},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=Object(d.useState)(null),i=c()(n,2),r=i[0],o=i[1],b=Object(l.d)(f.a),g=Object(l.d)(m.c);return Object(u.a)(function(){var n=!1;function i(){null===e||void 0===e||e(),n||o({rewardFlowList:[],nextRewardButtonText:""})}return b.getUnActiveRewardFlowList({pet_id:g,pay_type:s.y.WeChat,scene_type:t}).then(function(e){return function(e){if(!n)if(e&&!0===e.success&&e.result&&Array.isArray(e.result.rewardFlowList)){var r=e.result.rewardFlowList.map(function(e){return p(p({},e),{},{key:e.acquireTime})}),c=t===a.OneDay?new Date((new Date).setHours(0,0,0,0)).valueOf():-1,l=r.filter(function(e){return e.acquireTime>=c}).sort(function(e,t){return e.acquireTime-t.acquireTime});o({nextRewardButtonText:e.result.nextRewardButtonText||"",rewardFlowList:l})}else i()}(e)}).catch(function(){return i()}),function(){n=!0}}),r}},Ycdt:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a=function(){window.dispatchEvent(new CustomEvent("closePageLayer",{detail:"all"}))}},ZTWi:function(e,t,n){var a=n("O1/T"),i=n("Q8e5"),r="string"==typeof a?[[e.i,a,""]]:a;(t=e.exports=a.locals||{})._getContent=function(){return r},t._getCss=function(){return""+a},t._insertCss=function(e){return i(r,e)}},biYM:function(e,t,n){var a=n("VPBP"),i=n("Q8e5"),r="string"==typeof a?[[e.i,a,""]]:a;(t=e.exports=a.locals||{})._getContent=function(){return r},t._getCss=function(){return""+a},t._insertCss=function(e){return i(r,e)}},bs2f:function(e,t,n){"use strict";var a=n("FdF9"),i=n("Pf7F"),r=n("g5zU"),o=n.n(r),c=n("O+S/"),l=n("Ycdt"),s=n("TSYQ"),d=n.n(s),m=n("+iA3"),f=n("csMB"),u=n.n(f),b=n("7Fa9"),p=n("VfA9"),g=n("xNPO"),w=n("y4Rd"),y=n("V2iB"),h=function(){o()(u.a);var e=m.i.useValue(),t=e.process,n=e.taskInfo,i=e.nextTaskInfo,r=e.taskConfig,c=m.i.useActions().switchToUnActive,s=i||n,f=s.curStep,b=s.totalStep,p=t!==m.d.Execing,g=p?"明日看视频可获得":2===r.type?"继续看视频领现金":"再看 ".concat(Math.max((null!==b&&void 0!==b?b:1)-(null!==f&&void 0!==f?f:0),1)," 个视频可获得"),w=p?10:3,y=p?"明日再来":"去看视频";return a.default.createElement("div",{className:u.a.card},a.default.createElement("div",{className:u.a.header},g),a.default.createElement("div",{className:u.a.body},a.default.createElement("div",{className:u.a.amountWrap},a.default.createElement("span",{className:u.a.symbol},"¥"),a.default.createElement("span",{className:u.a.amount},w),a.default.createElement("span",{className:u.a.tip},"最高")),a.default.createElement("div",{className:d()(u.a.btn,"flex-box","align-center","justify-center"),onClick:function(){Object(l.a)(),c()}},y)))},x=Object(a.memo)(function(e){var t,n=e.onClose,r=m.i.useActions(),o=r.switchToUnActive,s=r.getBubbleAndShow,d=Object(c.u)("unActiveWatchVideoNewUi"),f=Object(w.a)(),u=Object(p.b)(n,p.a.Week);return Object(g.b)(function(){u&&s()}),u?a.default.createElement(b.a,{list:u.rewardFlowList,onClose:n,payType:i.y.WeChat,actionText:u.nextRewardButtonText,renderBottom:!0!==d&&(null===(t=u.rewardFlowList)||void 0===t?void 0:t.length)?null:h,onActionClick:function(){o(),Object(l.a)(),f(y.a).toWatchVideo()}}):null});t.a=x},csMB:function(e,t,n){var a=n("jmaA"),i=n("Q8e5"),r="string"==typeof a?[[e.i,a,""]]:a;(t=e.exports=a.locals||{})._getContent=function(){return r},t._getCss=function(){return""+a},t._insertCss=function(e){return i(r,e)}},fqWr:function(e,t,n){"use strict";n.d(t,"a",function(){return E}),n.d(t,"c",function(){return O}),n.d(t,"b",function(){return N});var a,i=n("o0o1"),r=n.n(i),o=n("yXPU"),c=n.n(o),l=n("lSNA"),s=n.n(l),d=n("J4zp"),m=n.n(d),f=n("FdF9"),u=n("g5zU"),b=n.n(u),p=n("MpJ2"),g=n("ZTWi"),w=n.n(g),y=n("FG61"),h=n("/N8V"),x=n("u4cM");function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach(function(t){s()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var _={navigation_height:88,statusbar_height:44};function E(e){var t=e.className,n=e.style;return f.default.createElement("svg",{className:t,style:n,viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200"},f.default.createElement("path",{d:"M763.040807 1023.998827a24.72882 24.72882 0 0 1-17.277569-7.003215l-502.082786-487.180282c-4.821674-4.677411-7.535699-11.097709-7.535699-17.810052s2.714024-13.133814 7.535699-17.810052l502.082786-487.180282c9.838045-9.547173 25.540447-9.329019 35.087621 0.533656 9.547173 9.838045 9.304389 25.540447-0.533657 35.087621l-483.739077 469.369057 483.74025 469.37023c9.838045 9.547173 10.08083 25.249575 0.533657 35.08762a24.758142 24.758142 0 0 1-17.811225 7.535699z"}))}function O(){var e=Object(f.useState)(a),t=m()(e,2),n=t[0],i=t[1];return Object(f.useEffect)(function(){n||Object(p.f)("JSUIControl","getNavigationHeight").then(function(e){a=k(k({},_),e)}).catch(function(){a=_}).finally(function(){i(a)})},[n]),n}var N=f.default.memo(function(e){var t=e.name,n=e.zIndex,a=(e.renderFooter,e.renderBody),i=e.renderHeader,o=e.CustomPage,l=e.headerStyle,s=e.bodyStyle,d=e.onClose,u=e.handleClose;b()(w.a);var p=Object(f.useState)(!1),g=m()(p,2),v=g[0],k=g[1],_=O();Object(f.useEffect)(function(){_&&k(!0)},[_]);var N=function(){if(u)return u(c()(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return k(!1),e.next=3,Object(x.a)(500);case 3:case"end":return e.stop()}},e)})));k(!1),setTimeout(d,500)},j=Object(f.useRef)(N);return j.current=N,Object(f.useEffect)(function(){var e=function(e){"all"!==e.detail&&e.detail!==t||j.current()};return window.addEventListener("closePageLayer",e),function(){window.removeEventListener("closePageLayer",e)}},[t]),_?f.default.createElement("div",{className:w.a.page,"data-visible":v,style:{zIndex:n}},o?f.default.createElement(o,{onClose:N}):f.default.createElement(f.default.Fragment,null,f.default.createElement("div",{className:w.a.pageHeader,style:l},f.default.createElement("div",{style:{height:_.statusbar_height}}),f.default.createElement("div",{className:w.a.navBar},f.default.createElement("div",{className:w.a.backIconContainer,onClick:N},f.default.createElement(E,{className:w.a.backIcon})),null===i||void 0===i?void 0:i()),f.default.createElement("div",null)),f.default.createElement("div",{className:w.a.pageBody,style:s},null===a||void 0===a?void 0:a())),f.default.createElement(h.a,{onBack:N}),v&&f.default.createElement(y.c,{name:y.e.Dialog})):null})},jmaA:function(e,t,n){(t=e.exports=n("I1BE")(!1)).push([e.i,'._3aChbTgR{width:3.51rem;height:2rem;background:#2aae67;border-radius:.06rem;margin:.5rem auto .16rem}._3aChbTgR:last-of-type{margin-bottom:.12rem}._3aChbTgR:after{margin-top:.22rem;display:block;content:" ";height:65px}._3A2kb_R6{position:relative;height:.57rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-left:.19rem;font-family:PingFangSC-Semibold;font-size:.17rem;color:#fff;line-height:.17rem;font-weight:600}._3A2kb_R6:after{position:absolute;left:0;bottom:0;width:100%;height:1px;content:"";background:#ededed;-webkit-transform-origin:left bottom;transform-origin:left bottom}@media only screen and (-webkit-min-device-pixel-ratio:1.5),only screen and (min--moz-device-pixel-ratio:1.5),only screen and (min-resolution:1.5dppx),only screen and (min-resolution:144dpi){._3A2kb_R6:after{-webkit-transform:scaleY(.66667);transform:scaleY(.66667)}}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min--moz-device-pixel-ratio:2),only screen and (min-resolution:2dppx),only screen and (min-resolution:192dpi){._3A2kb_R6:after{-webkit-transform:scaleY(.5);transform:scaleY(.5)}}@media only screen and (-webkit-min-device-pixel-ratio:2.75),only screen and (min--moz-device-pixel-ratio:2.75),only screen and (min-resolution:2.75dppx),only screen and (min-resolution:264dpi){._3A2kb_R6:after{-webkit-transform:scaleY(.36364);transform:scaleY(.36364)}}@media only screen and (-webkit-min-device-pixel-ratio:3),only screen and (min--moz-device-pixel-ratio:3),only screen and (min-resolution:3dppx),only screen and (min-resolution:288dpi){._3A2kb_R6:after{-webkit-transform:scaleY(.33333);transform:scaleY(.33333)}}.ommVxZee{contain:content}._2b7fPT34{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-family:wallet-font;color:#fff;margin-top:.165rem}._2b7fPT34 ._1ttn0-6b{font-size:.28rem;line-height:.28rem}._2b7fPT34 ._5pXMOPQ5{margin-left:.04rem;font-size:.38rem;line-height:.38rem;position:relative}._2b7fPT34 ._3HfdBIPo{position:absolute;right:1.12rem;opacity:.4;font-size:.15rem;line-height:.15rem}._134aK1uK{margin:.25rem auto 0;width:1.84rem;height:.41rem;background:#fff;border-radius:.04rem;font-family:PingFangSC-Semibold;font-size:.17rem;color:#2aae67;text-align:center;line-height:1;font-weight:600}',""]),t.locals={card:"_3aChbTgR",header:"_3A2kb_R6",body:"ommVxZee",amountWrap:"_2b7fPT34",symbol:"_1ttn0-6b",amount:"_5pXMOPQ5",tip:"_3HfdBIPo",btn:"_134aK1uK"}},ncRi:function(e,t,n){var a=n("7z+L"),i=n("Q8e5"),r="string"==typeof a?[[e.i,a,""]]:a;(t=e.exports=a.locals||{})._getContent=function(){return r},t._getCss=function(){return""+a},t._insertCss=function(e){return i(r,e)}}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-video-layer/js/loadable_UnActiveWatchVideoTask_Dialog_8f2e9b04e9df5300b93a.js.map