!function(){var e,t,n,r,o,i,a,c={43335:function(e,t,n){"use strict";n(96253),n(40851);var r=n(82811),o=n(67376),i=n(87401),a=n(70798),c=n(45063),s=n(61824),u=n(56406),l=n(25118),p=n(37883),f=n.n(p);n(52171);var d=function(){return i.useContext(a.yX)};var m=function(e,t){var n=(0,i.useRef)(!1);(0,i.useEffect)((function(){if(n.current)return e();n.current=!0}),t)},v=n(40161);var g=n(94184),h=n.n(g),b=n(17591),y=n.n(b),w=(0,a.Pi)((function(){var e=d().store.isShowAnimation;return i.createElement("div",{className:y().cupWrapper},i.createElement(v.Z,{className:y().cupBack,src:"https://funimg.pddpic.com/video-layer/ac562ae0-53e1-4d2c-a1c2-52faaff72a74.png.slim.png",resizeWidth:453}),i.createElement(v.Z,{className:y().cupFront,src:"https://funimg.pddpic.com/video-layer/8709ef85-d386-4218-938a-7742de1869fd.png",resizeWidth:453}),i.createElement("div",{className:h()(y().waterWrapper,e&&y().waterAnimtaionWrapper)}),i.createElement(v.Z,{className:y().shadow,src:"https://funimg.pddpic.com/video-layer/542ece90-abfd-4e4b-a02d-52ee3016730f.png.slim.png",resizeWidth:453}),i.createElement(v.Z,{className:y().highlight,src:"https://funimg.pddpic.com/video-layer/fe46e16d-54e1-479d-bef1-03efa1b0fcad.png.slim.png",resizeWidth:453}))})),k=(n(41784),n(23877)),_=n(18482);n(27476),n(95767),n(98837),n(94882),n(98351);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){(0,_.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=1e3,O=36e5,x=864e5;function C(e){return String(e).padStart(2,"0")}var T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Date.now(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now(),n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i=t-n,a=0;a=r||(o?i-e:e-i);var c=(a=Math.max(0,a))%N,s=Math.floor(a/N)%60,u=Math.floor(a/6e4)%60,l=Math.floor(a/O)%24,p=Math.floor(a/x),f={millisecond:c,second:s,minute:u,hour:l,day:p};return Object.keys(f).forEach((function(e){f[e]=C(f[e])})),Z({leftTs:a},f)};function M(e){var t=e.endTime,n=e.diff,r=e.children,o=e.onEnd,a=e.interval,c=(0,i.useState)((function(){return T(t,Date.now(),n)})),s=(0,k.Z)(c,2),u=s[0],l=s[1];return function(e){var t=e.endTime,n=void 0===t?0:t,r=e.onUpdate,o=e.onEnd,a=e.diff,c=void 0===a?0:a,s=e.interval,u=void 0===s?500:s,l=(0,i.useRef)({onEnd:o,onUpdate:r}).current;l.onEnd=o,l.onUpdate=r,(0,i.useEffect)((function(){var e=setInterval((function(){var t,r,o=T(n,Date.now(),c);null===(t=l.onUpdate)||void 0===t||t.call(l,o),o.leftTs<=0&&(null===(r=l.onEnd)||void 0===r||r.call(l),clearInterval(e))}),u);return function(){clearInterval(e)}}),[n,l,c])}({endTime:t,onUpdate:l,onEnd:o,diff:n,interval:a}),r(u)}var D,S,I=n(57753),A=(location.hostname,{serverTemplateName:"vlive_drink_task",title:"喝水赚钱",fallbackCSR:true,options:{pageProperty:{pageName:"vlive_drink_task",pageSN:104497},shareInfo:{noDefaultShare:!0},noDefaultShare:!0,disablePullReload:!0}}),W="lucky_cat",P="drink_make_money";!function(e){e.NORMAL="NORMAL",e.DONE="DONE",e.COUNTDOWN="COUNTDOWN"}(D||(D={})),function(e){e[e.Coin=7]="Coin",e[e.Cash=5]="Cash"}(S||(S={}));var L={NORMAL:0,DONE:1,COUNTDOWN:2},R={NORMAL:["小财神嘱咐你：去喝一杯水吧!","多喝水保持健康哦~"],DONE:["小财神嘱咐你：明天再来打卡，","领健康补贴！"],COUNTDOWN:["小财神嘱咐你：等会再来喝水打卡,","顺便领取健康补贴哦~"]},j=n(36271),z=n.n(j),B=(0,a.Pi)((function(){var e=d().store,t=e.stage,n=e.status,r=e.countDownMs,o=e.getMissionInfo,a=e.curRewardCount,c=e.getReward;return(0,i.useEffect)((function(){(0,I.AY)({page_el_sn:5538718,stage:t,status:L[n]})}),[t,n]),n===D.NORMAL?i.createElement("div",{className:h()(z().button,z().buttonNormal),onClick:function(){return c(t)}},i.createElement("span",{className:z().tag},"领".concat(a,"金币")),"我喝水了，打个卡"):n===D.COUNTDOWN?i.createElement("div",{className:h()(z().button,z().buttonCountDown),onClick:function(){return c(t)}},i.createElement("span",{className:z().tag},"领".concat(a,"金币")),!!r&&i.createElement(M,{endTime:r,interval:1e3,onEnd:o},(function(e){var t=e.hour,n=e.minute,r=e.second;return i.createElement("div",{className:z().countDown},i.createElement("span",{className:z().em},"".concat(String(t).padStart(2,"0"),":").concat(String(n).padStart(2,"0"),":").concat(String(r).padStart(2,"0"))),i.createElement("span",null,"后可打卡"))}))):i.createElement("div",{className:h()(z().button,z().buttonDone),onClick:function(){return c(t)}},"明天继续喝水打卡")})),F=n(344),U=(n(19371),n(27484)),q=n.n(U),H=function(e){return q()(e).format("HH:mm")},J=n(77241),Y=n.n(J);function K(e){var t,n=e.index,r=e.stage,o=e.achieveTimeMs,a=e.count,c=e.handleTaskClick,s=n<r,u=n===r,l=s?"https://funimg.pddpic.com/video-layer/995c1451-a5de-4940-abc5-cb570c3ddc0f.png.slim.png":"https://funimg.pddpic.com/video-layer/a36424ef-12eb-4115-b790-dfea5d6f75bb.png.slim.png";return i.createElement("div",{className:h()(Y().taskItemWrapper,"flex-box","flex-dir-col","align-center"),id:"vlive_drink_task_item_".concat(n),onClick:function(){c(n)}},i.createElement("span",{className:h()(Y().taskInfo,(t={},(0,_.Z)(t,Y().taskInfoDone,s),(0,_.Z)(t,Y().taskInfoCurrent,u),t))},s?H(o):"第".concat(n+1,"杯")),i.createElement("div",{className:h()(Y().iconWrapper,"flex-box","justify-center","align-center")},i.createElement(v.Z,{className:s?Y().completedIcon:Y().normalIcon,src:l,resizeWidth:3*(s?20:19)})),i.createElement("div",{className:h()(Y().countWrapper,"flex-box","justify-center","align-center",s&&Y().completed,u&&Y().current)},i.createElement("span",{className:Y().count},a),i.createElement(v.Z,{className:Y().icon,src:"https://funimg.pddpic.com/video-layer/b9465686-6160-47bd-a92f-2938521d8d1b.png.slim.png",resizeWidth:36})))}var V,X=n(55359),Q=n.n(X),G=n(20342),$=(0,a.Pi)((function(){var e=d().store,t=e.stage,n=e.totalTaskCount,r=e.isShowAnimation,o=e.drinkMissions,a=e.progressBarLength,c=e.progressDomLength,s=e.handleTaskClick,u=(0,i.useRef)(null),p=(0,i.useRef)(null);return(0,i.useEffect)((function(){var e=function(){var e=(0,l.Z)(f().mark((function e(){var r,o,i,a,c,s,l,d,m;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,o=u.current,i=p.current,a=null==o||null===(r=o.childNodes[1])||void 0===r?void 0:r.childNodes[Math.min(t,n-1)],o&&i&&a&&n){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,(0,G.ZP)(1e3);case 8:c=i.scrollWidth-i.clientWidth,s=a.offsetLeft-i.clientWidth+i.clientWidth/2,l=0,d=!1,m=function e(){l<s&&d||(l<c&&!d?(l+=8,o.scrollLeft=Math.min(c,l)):(d=!0,l-=8,o.scrollLeft=Math.max(l,0)),requestAnimationFrame(e))},requestAnimationFrame(m),e.next=18;break;case 16:e.prev=16,e.t0=e.catch(0);case 18:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),m((function(){var e=function(){var e=(0,l.Z)(f().mark((function e(){var r,o,i,a,c,s,l,d,m;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,G.ZP)(1e3);case 3:if(o=u.current,i=p.current,a=null==o||null===(r=o.childNodes[1])||void 0===r?void 0:r.childNodes[Math.min(t,n-1)],o&&i&&a){e.next=8;break}return e.abrupt("return");case 8:if(c=a.offsetLeft-i.clientWidth+i.clientWidth/2,s=i.scrollWidth/n,!((l=a.offsetLeft+s-o.scrollLeft)>0&&l<i.clientWidth)){e.next=13;break}return e.abrupt("return");case 13:d=o.scrollLeft,m=function e(){Math.abs(d-c)<8||(d>c?d-=8:d+=8,o.scrollLeft=d,requestAnimationFrame(e))},requestAnimationFrame(m),e.next=20;break;case 18:e.prev=18,e.t0=e.catch(0);case 20:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(){return e.apply(this,arguments)}}();r&&e()}),[r,n]),m((function(){try{var e=u.current,t=p.current;if(!t||!e||!n)return;var r=t.scrollWidth/n,o=0;requestAnimationFrame((function t(){o>=r||(o+=8,e.scrollLeft+=8,requestAnimationFrame(t))}))}catch(e){}}),[t,n]),i.createElement("div",{className:Q().taskListWrapper,ref:u},i.createElement("div",{className:Q().progressor,style:{width:c}},i.createElement("div",{className:Q().bar,style:{width:a}})),i.createElement("div",{className:h()(Q().container,"flex-box"),ref:p},o.map((function(e,n){return i.createElement(K,(0,F.Z)({key:n,index:n,stage:t,handleTaskClick:s},e))}))))})),ee=n(35010),te=n(15451),ne=n.n(te),re=(0,a.Pi)((function(){var e=d().store.status,t=(R[e]||[]).join("");return i.createElement(ee.Z,{className:ne().ToastTipsWrapper,bgUrl:"https://funimg.pddpic.com/video-layer/7de84969-03c3-4e2e-8139-4df9a0e845ba.png.slim.png"},i.createElement("div",{className:ne().desc},t))})),oe=n(14709),ie=n.n(oe),ae=n(32485),ce=n.n(ae),se=n(41609),ue=n.n(se),le=n(67793),pe=n.n(le);!function(e){e.CoinHeap="https://promotion.pddpic.com/upload/mobile-live/c02aa011-8930-4d2f-8c3e-4b5c237a0d66.png.slim.c1.png"}(V||(V={}));var fe,de,me={Two:{EmptyBar:"https://promotion.pddpic.com/upload/mobile-live/373d8166-e2d4-4563-881c-796c6dd33073.png.slim.c1.png",FullBar:"https://promotion.pddpic.com/upload/mobile-live/904ea83e-ac18-43b8-864e-d5b5fdadd16e.png.slim.c1.png"},Three:{EmptyBar:"https://promotion.pddpic.com/upload/mobile-live/bcf65264-8628-4dea-8df4-743a99fd21bd.png.slim.c1.png",FullBar:"https://promotion.pddpic.com/upload/mobile-live/85936b29-09d5-4390-a4ae-5b9851eda83b.png.slim.c1.png"}};!function(e){e.Two="Two",e.Three="Three"}(fe||(fe={})),function(e){e.Two="1.02rem",e.Three="1.39rem"}(de||(de={}));var ve={Two:{0:0,1:"0.4rem",2:"1.02rem"},Three:{0:0,1:"0.37rem",2:"0.83rem",3:"1.39rem"}},ge=n(39182),he=n.n(ge);function be(e){var t,n=e.type,r=e.step,o=e.count,a=e.received,c=e.complete,s=e.animation,u=void 0===s||s,l=e.receiveReward,p=de[n],f=(null==me?void 0:me[n])||{},d=f.EmptyBar,m=f.FullBar,g=null==ve||null===(t=ve[n])||void 0===t?void 0:t[r];return p&&d&&m&&void 0!==g?i.createElement("div",null,i.createElement(v.Z,{className:he().barImg,src:d,style:{width:p}}),i.createElement("div",{className:h()(he().barImg,he().full),style:{width:g}},i.createElement(ee.Z,{className:h()(he().barImg,(0,_.Z)({},he().animation,u)),bgUrl:m,style:{backgroundSize:"".concat(p," 100%")}})),!a&&i.createElement(v.Z,{className:he().coinHeap,src:V.CoinHeap}),i.createElement("button",{className:h()(he().button,(0,_.Z)({},he().receive,c)),onClick:l},c?"立即领取":"".concat(o,"金币"))):null}var ye=(0,i.memo)(be);function we(e){var t=e.mission,n=e.title,r=e.tip,o=e.type,a=t||{},c=a.healthAcquire,s=a.healthRewardCount,u=a.doneMissionCount,l=a.missionCount,p={type:2===l?fe.Two:fe.Three,step:u>l?l:u,count:s,received:c,complete:!1},f=!ue()(t);return(0,i.useEffect)((function(){f&&(0,I.AY)({page_el_sn:5601679,show_location:o})}),[f]),f?i.createElement("div",{className:h()(pe().content,"flex-box","space-between")},i.createElement("div",{className:pe().infoWrap},i.createElement("p",{className:pe().title},n),i.createElement("p",{className:pe().info},r)),i.createElement("div",{className:h()(pe().progressWrap,"flex-box","align-center","justify-center")},i.createElement("div",{className:pe().progress},i.createElement(ye,p)))):null}var ke=(0,i.memo)(we),_e=n(70859);function Ee(e){var t=e.mission,n=e.onClose,r=e.title,o=e.tip,a=e.award,c=e.type;return i.createElement(_e.Z,null,i.createElement("div",{className:ce().dialog},i.createElement(v.Z,{className:ce().close,src:"https://funimg.pddpic.com/video-layer/5c829f0c-48a2-45e8-ad17-fd9ab1b3fa33.png.slim.png",resizeWidth:87,onClick:n}),t&&i.createElement(ke,{mission:t,title:r,tip:o,type:c}),i.createElement("div",{className:ce().content},i.createElement("p",{className:ce().title},"小财神送你",a),i.createElement(v.Z,{className:ce().award,src:"https://promotion.pddpic.com/upload/mobile-live/70aab0af-d827-48c4-8080-275f76ce4228.png.slim.c1.png"}),i.createElement("button",{className:ce().button,onClick:n},"收下补贴"))))}var Ze,Ne=(0,i.memo)(Ee);!function(e){e[e.Sleep=1]="Sleep",e[e.MealTime=2]="MealTime",e[e.Drink=3]="Drink"}(Ze||(Ze={}));var Oe=(0,a.Pi)((function(){var e,t=d().store,n=t.stage,r=t.status,o=t.isShowAward,a=t.rewardType,c=t.rewardCount,s=t.toggleAwardStatus,u=t.setNewMission,p=t.toggleIsShowAnimation,g=t.newMission,h=(0,i.useRef)(null),b=(0,i.useRef)(!1),y=a===S.Cash?"".concat(c/100,"元现金"):"".concat(c,"金币"),k=function(){var e=(0,l.Z)(f().mark((function e(){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!1),u(),e.next=4,(0,G.ZP)(2e3);case 4:p(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return m((function(){r===D.COUNTDOWN&&localStorage.setItem("DRINK_NEED_TOAST_KEY","1")}),[r]),i.createElement("div",{className:ie().wrapper},i.createElement("span",{className:ie().taskOrder},n),i.createElement(re,null),i.createElement(w,null),i.createElement(B,null),i.createElement("div",{className:ie().tasksWrapper},i.createElement($,null),i.createElement("p",{className:ie().title},i.createElement("span",{className:ie().tips},"喝水越多，奖励越多"),i.createElement(v.Z,{className:ie().coinIcon,src:"https://funimg.pddpic.com/video-layer/4c2c2ac5-38f5-49d6-afd8-97bd485b2489.png.slim.png",resizeWidth:714}))),o&&i.createElement(Ne,{award:y,onClose:function(){if(!b.current){b.current=!0;var e=document.getElementById("vlive_drink_task_item_".concat(n));e&&h.current?function(e){var t=e.animationEl,n=e.maskEl,r=e.destEL,o=e.onDestroy,i=e.transitionTime,a=void 0===i?500:i;if(null!==r.offsetParent){var c=r.getBoundingClientRect(),s=t.getBoundingClientRect(),u=s.left+s.width/2,l=s.top+s.height/2,p=c.left+c.width/2,f=c.top+c.height/2;if(n){var d="background-color ".concat(a,"ms ease ").concat(a,"ms");n.style.transition=d,n.style.webkitTransition=d}t.style.transition="transform ".concat(a,"ms ease"),t.style.webkitTransition="transform ".concat(a,"ms ease"),t.style.transform="translate3d(0px, 0px, 0px) scale(1)",t.style.webkitTransform="translate3d(0px, 0px, 0px) scale(1)",requestAnimationFrame((function(){var e=p-u,r=f-l;n&&(n.style.backgroundColor="rgba(0, 0, 0, 0)"),t.style.transform="translate3d(".concat(e,"px, ").concat(r,"px, 0px) scale(0)"),t.style.webkitTransform="translate3d(".concat(e,"px, ").concat(r,"px, 0px) scale(0)")})),setTimeout((function(){null==o||o()}),a)}else null==o||o()}({destEL:e,animationEl:h.current,onDestroy:function(){b.current=!1,k()}}):k()}},title:"健康奖励金",tip:"喝水任务已完成",mission:null==g||null===(e=g.missionExt)||void 0===e?void 0:e.healthMissionInfo,type:Ze.Drink}))})),xe=n(36102),Ce=n.n(xe),Te=(n(82139),n(38796)),Me=n(68309),De=n(69348),Se=n(99057),Ie=n(61122),Ae=n(45558),We=n(91074),Pe=n(11269),Le=n(43736),Re=(n(52310),n(22188)),je=n(94537),ze=n(23493),Be=n.n(ze),Fe=n(92263),Ue=Be()((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=document.querySelector(".pin-toast-container");n&&(n.style.top=t?"80%":""),(0,Fe.Z)(e)}),3e3),qe=Ue;function He(e,t){var n=t.missionCode,r=t.activityCode;return(null==e?void 0:e.activityCode)===r&&(null==e?void 0:e.missionCode)===n}var Je=n(49937);function Ye(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,Pe.Z)(e);if(t){var o=(0,Pe.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,We.Z)(this,n)}}var Ke="/api/willy/mission/list_v2",Ve="/api/willy-ms/lucky-cat/operate_v2",Xe=function(e){(0,Ae.Z)(n,e);var t=Ye(n);function n(){return(0,Me.Z)(this,n),t.apply(this,arguments)}return(0,De.Z)(n,[{key:"getMissionInfo",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.post(Ke,e)}},{key:"getReward",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.post(Ve,e,{enableAntiContent:!0})}}]),n}(Je.Z),Qe=(n(49385),n(62850),n(62773),n(86056)),Ge=n(74711),$e=n(42202);var et;(et=window.navigator.userAgent,(0,Ge.Xf)(et)).system,$e.we.IOS,"undefined"!=typeof window&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);var tt,nt,rt,ot,it,at,ct,st,ut,lt,pt,ft,dt,mt,vt,gt,ht,bt;function yt(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,Pe.Z)(e);if(t){var o=(0,Pe.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,We.Z)(this,n)}}var wt=(tt=function(e){(0,Ae.Z)(n,e);var t=yt(n);function n(){var e;(0,Me.Z)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).service=void 0,(0,Te.Z)(e,"initSuccess",nt,(0,Se.Z)(e)),(0,Te.Z)(e,"isShowAward",rt,(0,Se.Z)(e)),(0,Te.Z)(e,"isShowAnimation",ot,(0,Se.Z)(e)),(0,Te.Z)(e,"stage",it,(0,Se.Z)(e)),(0,Te.Z)(e,"status",at,(0,Se.Z)(e)),(0,Te.Z)(e,"countDownMs",ct,(0,Se.Z)(e)),(0,Te.Z)(e,"drinkMissions",st,(0,Se.Z)(e)),(0,Te.Z)(e,"rewardCount",ut,(0,Se.Z)(e)),(0,Te.Z)(e,"rewardType",lt,(0,Se.Z)(e)),(0,Te.Z)(e,"newMission",pt,(0,Se.Z)(e)),(0,Te.Z)(e,"toggleAwardStatus",ft,(0,Se.Z)(e)),(0,Te.Z)(e,"toggleIsShowAnimation",dt,(0,Se.Z)(e)),(0,Te.Z)(e,"updateMission",mt,(0,Se.Z)(e)),(0,Te.Z)(e,"setNewMission",vt,(0,Se.Z)(e)),(0,Te.Z)(e,"handleTaskClick",gt,(0,Se.Z)(e)),(0,Te.Z)(e,"getMissionInfo",ht,(0,Se.Z)(e)),(0,Te.Z)(e,"getReward",bt,(0,Se.Z)(e)),e}return(0,De.Z)(n,[{key:"initServices",value:function(e){(0,Ie.Z)((0,Pe.Z)(n.prototype),"initServices",this).call(this,e),this.service=new Xe(e)}},{key:"totalTaskCount",get:function(){return this.drinkMissions.length||0}},{key:"isFirstTask",get:function(){return 0===this.stage}},{key:"isLastTask",get:function(){return this.stage===Math.max(this.totalTaskCount-1,0)}},{key:"curRewardCount",get:function(){return this.stage>=this.totalTaskCount?0:this.drinkMissions[this.stage].count||0}},{key:"progressDomLength",get:function(){return"".concat(.66*(this.totalTaskCount-1),"rem")}},{key:"progressBarLength",get:function(){return 0===this.stage?0:this.status===D.DONE?this.progressDomLength:"".concat(.66*(this.stage-1),"rem")}},{key:"getDatasource",value:function(){return[this.getMissionInfo]}}]),n}(je.u),nt=(0,Le.Z)(tt.prototype,"initSuccess",[Re.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),rt=(0,Le.Z)(tt.prototype,"isShowAward",[Re.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),ot=(0,Le.Z)(tt.prototype,"isShowAnimation",[Re.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),it=(0,Le.Z)(tt.prototype,"stage",[Re.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),at=(0,Le.Z)(tt.prototype,"status",[Re.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"COUNTDOWN"}}),ct=(0,Le.Z)(tt.prototype,"countDownMs",[Re.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),st=(0,Le.Z)(tt.prototype,"drinkMissions",[Re.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),ut=(0,Le.Z)(tt.prototype,"rewardCount",[Re.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),lt=(0,Le.Z)(tt.prototype,"rewardType",[Re.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return S.Coin}}),pt=(0,Le.Z)(tt.prototype,"newMission",[Re.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),(0,Le.Z)(tt.prototype,"totalTaskCount",[Re.Fl],Object.getOwnPropertyDescriptor(tt.prototype,"totalTaskCount"),tt.prototype),(0,Le.Z)(tt.prototype,"isFirstTask",[Re.Fl],Object.getOwnPropertyDescriptor(tt.prototype,"isFirstTask"),tt.prototype),(0,Le.Z)(tt.prototype,"isLastTask",[Re.Fl],Object.getOwnPropertyDescriptor(tt.prototype,"isLastTask"),tt.prototype),(0,Le.Z)(tt.prototype,"curRewardCount",[Re.Fl],Object.getOwnPropertyDescriptor(tt.prototype,"curRewardCount"),tt.prototype),(0,Le.Z)(tt.prototype,"progressDomLength",[Re.Fl],Object.getOwnPropertyDescriptor(tt.prototype,"progressDomLength"),tt.prototype),(0,Le.Z)(tt.prototype,"progressBarLength",[Re.Fl],Object.getOwnPropertyDescriptor(tt.prototype,"progressBarLength"),tt.prototype),ft=(0,Le.Z)(tt.prototype,"toggleAwardStatus",[Re.aD],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.isShowAward=t}}}),dt=(0,Le.Z)(tt.prototype,"toggleIsShowAnimation",[Re.aD],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.isShowAnimation=t}}}),mt=(0,Le.Z)(tt.prototype,"updateMission",[Re.aD],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){var n=t||{},r=n.stage,o=n.status,i=n.countDownMs,a=n.drinkMissions;null!=a&&a.length&&(0,Re.z)((function(){e.stage=r,e.status=o,e.countDownMs=i,e.drinkMissions=a}))}}}),vt=(0,Le.Z)(tt.prototype,"setNewMission",[Re.aD],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t;e.updateMission(null===(t=e.newMission)||void 0===t?void 0:t.missionExt)}}}),gt=(0,Le.Z)(tt.prototype,"handleTaskClick",[Re.aD],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){var n=e.drinkMissions[t]||{},r=n.achieveTimeMs,o=n.count;t<e.stage?qe("今天".concat(H(r),"喝了第").concat(t+1,"杯水\n按时喝水有助于健康")):qe("今天喝第".concat(t+1,"杯水\n可领").concat(o,"金币"))}}}),ht=(0,Le.Z)(tt.prototype,"getMissionInfo",[Re.aD],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return(0,l.Z)(f().mark((function t(){var n,r,o,i;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.service.getMissionInfo({activity_code:W,mission_code:P});case 3:n=t.sent,r=n.success,o=n.result,r&&o&&(i=((null==o?void 0:o.missions)||[]).find((function(e){return He(e,{activityCode:W,missionCode:P})})),(0,Re.z)((function(){e.initSuccess=!0})),e.updateMission(null==i?void 0:i.missionExt)),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})))}}),bt=(0,Le.Z)(tt.prototype,"getReward",[Re.aD],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=(0,l.Z)(f().mark((function t(n){var r,o,i,a,c,s,u,l,p,d;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((0,I.hJ)({page_el_sn:5538718,stage:n,status:L[status]}),!e.isShowAnimation){t.next=3;break}return t.abrupt("return");case 3:if(e.status!==D.DONE){t.next=5;break}return t.abrupt("return",qe("今日任务已完成\n明日再来吧"));case 5:if(e.status!==D.COUNTDOWN){t.next=9;break}return localStorage.setItem("drink_back_toast_key","1"),Qe.ZP.back(),t.abrupt("return");case 9:return r={activity_code:W,mission_code:P,request_ext:{stage:n}},t.prev=10,t.next=13,e.service.getReward(r);case 13:if(o=t.sent,i=o.success,a=o.result,c=o.errorMsg,!i||!a){t.next=23;break}return u=(s=a||{}).rewardType,l=s.rewardCount,p=s.newMission,(0,Re.z)((function(){e.rewardType=u,e.rewardCount=l,e.isShowAnimation=!0,e.newMission=p})),t.next=20,(0,G.ZP)(1400);case 20:e.toggleAwardStatus(!0),t.next=24;break;case 23:qe(c||"网络异常，请稍后重试");case 24:t.next=31;break;case 26:t.prev=26,t.t0=t.catch(10),d=null===t.t0||void 0===t.t0?void 0:t.t0.errorCode,qe(200000402===d||200000500===d||200000700===d?"已经领取过啦～":"活动太火爆啦，稍后再来吧"),e.getMissionInfo();case 31:case"end":return t.stop()}}),t,null,[[10,26]])})));return function(e){return t.apply(this,arguments)}}()}}),tt),kt=n(77153),_t=n(8224),Et=Ce()((0,kt.k)(),(0,c.Iq)({store:wt},A),(0,a.f3)("store"),a.Pi)((function(e){var t=e.store;return i.createElement(_t.I,{store:t},t.initSuccess?i.createElement(Oe,null):i.createElement(u.Z,{hideBg:!0}),i.createElement(s.eA,null))})),Zt=(0,r.Z)(Et),Nt=(0,o.Z)(Et),Ot=n(19303);Promise.resolve("function"==typeof Nt&&Nt()).then((function(){return(0,Ot.x)(Zt)}))},57753:function(e,t,n){"use strict";n.d(t,{AY:function(){return a},hJ:function(){return i}});var r,o=n(35607);!function(e){e.Impr="impr",e.Click="click"}(r||(r={}));var i=function(e){return(0,o.ax)(e)},a=function(e){return(0,o.wI)(e)}},20342:function(e,t,n){"use strict";n.d(t,{Uk:function(){return c},ZP:function(){return a},at:function(){return i}});var r=n(52171),o=(n(25118),n(37883),n(96253),n(40851),n(22691)),i=(n(81114),n(39757),function(e,t){return new Promise((function(n){setTimeout((function(){t&&t(),n(!0)}),e)}))});function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new Promise((function(t){setTimeout(t,e)}))}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ignoreApi,n=e.simpleRate;(0,o.Nt)({ignoreApi:["JSVideoTab:removeMessageBoxSubTypeRedDot","AMDevice:deviceInfo","AMDevice:getMemoryInfo","AMDevice:getBatteryInfo","WebScene:getPageVisibility","JSNavigation:referPageContext","JSUIControl:setTitle","WebScene:onWebMounted","JSNotification:send","JSUIControl:getNavigationHeight","AMUser:info","WebScene:getUnoContext","WebScene:getTiming"].concat((0,r.Z)(t||[])),simpleRate:n||.1})}},41609:function(e,t,n){var r=n(280),o=n(64160),i=n(35694),a=n(1469),c=n(98612),s=n(44144),u=n(25726),l=n(36719),p=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(c(e)&&(a(e)||"string"==typeof e||"function"==typeof e.splice||s(e)||l(e)||i(e)))return!e.length;var t=o(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(u(e))return!r(e).length;for(var n in e)if(p.call(e,n))return!1;return!0}},36271:function(e){e.exports={"fixed-cover":"_2PKt5bqn",button:"lDhhY73l",buttonDone:"_28p17pWt",buttonNormal:"_13TCiHhq",buttonCountDown:"G6hpHXrY",countDown:"_1qLoq4pd",tag:"_386N6ant",em:"TQ8TKIey",zoomIn:"oqCCEsm_"}},17591:function(e){e.exports={"fixed-cover":"YCFkcyk_",cupWrapper:"_2Ax3_E61",cupBack:"_2I1ZMt-2",cupFront:"_3AXUz5z2",highlight:"_3xbNZkTV",shadow:"_3_pE9WK2",waterWrapper:"_2IFxjTnq",waterAnimtaionWrapper:"_2u1FPJ_I",waterFlow:"_3ktL0e6J",zoomIn:"_27MDdxVu"}},77241:function(e){e.exports={"fixed-cover":"_3yhpwQON",taskItemWrapper:"_3SIukB3s",taskInfo:"_258FN-xw",taskInfoDone:"vQEVvbIR",taskInfoCurrent:"XiuiolZw",iconWrapper:"_22RQDgXs",completedIcon:"_1dJajcHB",normalIcon:"_2Auh5acH",countWrapper:"_3dHVM7Cv",completed:"BvmdU-Kf",current:"_2Gln7184",icon:"_2MS0U8q-",zoomIn:"_2IunpnYe"}},55359:function(e){e.exports={"fixed-cover":"_11-USuow",taskListWrapper:"_2mO_4VBO",progressor:"vlbXLoO_",bar:"_2HT1e2P9",zoomIn:"_2qBx9exQ",move:"_3lFiIxdc"}},15451:function(e){e.exports={"fixed-cover":"_2dB0J7R4",ToastTipsWrapper:"_18OoCBWl",icon:"oumRumwl",desc:"_1Rk3zMpN",zoomIn:"zeHb9Y0w"}},14709:function(e){e.exports={"fixed-cover":"_1ZDeXFfR",wrapper:"_2wEKN5eD",taskOrder:"_2j-dhdk5",tasksWrapper:"_1la-UBf7",title:"_2vLvqDvn",tips:"rGvV-77R",coinIcon:"_25fXz9oF",taskDesc:"_2hWtvIHg",toastWrapper:"_2ghV-gv3",icon:"sE1q5M4a",rewardDesc:"_21V4tGcp",zoomIn:"_1nZg3cg9"}},32485:function(e){e.exports={content:"_3wnFqoY9",close:"LWZFQRtr",title:"_3uOx3Zm_",award:"_3rZRgp1n",button:"_1eCb8Ibz"}},67793:function(e){e.exports={content:"haK0ToAy",infoWrap:"_3fMQ-nc6",title:"_4FMUZ6e-",info:"_2iJs20OT",progressWrap:"_3QB5mJSt",progress:"_2RnKC8cx"}},39182:function(e){e.exports={barImg:"X53wMvpi",full:"QaUZzoE8",animation:"_3NMLSmtm",sliderRight:"IWH7mMzd",coinHeap:"EGGY-YDp",button:"_14pnfsMm",receive:"_3LyUC_9m"}},29807:function(e){"use strict";e.exports=pinbridge}},s={};function u(e){var t=s[e];if(void 0!==t)return t.exports;var n=s[e]={id:e,loaded:!1,exports:{}};return c[e].call(n.exports,n,n.exports,u),n.loaded=!0,n.exports}u.m=c,e=[],u.O=function(t,n,r,o){if(!n){var i=1/0;for(l=0;l<e.length;l++){n=e[l][0],r=e[l][1],o=e[l][2];for(var a=!0,c=0;c<n.length;c++)(!1&o||i>=o)&&Object.keys(u.O).every((function(e){return u.O[e](n[c])}))?n.splice(c--,1):(a=!1,o<i&&(i=o));if(a){e.splice(l--,1);var s=r();void 0!==s&&(t=s)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,r,o]},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},u.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);u.r(o);var i={};t=t||[null,n({}),n([]),n(n)];for(var a=2&r&&e;"object"==typeof a&&!~t.indexOf(a);a=n(a))Object.getOwnPropertyNames(a).forEach((function(t){i[t]=function(){return e[t]}}));return i.default=function(){return e},u.d(o,i),o},u.d=function(e,t){for(var n in t)u.o(t,n)&&!u.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},u.f={},u.e=function(e){return Promise.all(Object.keys(u.f).reduce((function(t,n){return u.f[n](e,t),t}),[]))},u.u=function(e){return"assets/js/"+({699:"ms_web_c",1437:"pdd-mod/qq-service",1795:"react_anti",2840:"ms_wx_c",3400:"ms_wx_app_c",3910:"monitor-dev-panel",5911:"ms_native_c",6795:"ms_qq_c",8920:"pdd-mod/wechat-service"}[e]||e)+"_"+{699:"6732b5028e99ec3711b5",1437:"8c02393760457f458cb0",1795:"441bea40694e5c52acea",2568:"6a9075934c166e207340",2840:"6434b9a1d923ed8182f5",3400:"24b2cb1994a4daafc256",3910:"1463c1311397215db064",4369:"5a4a3b3070791597ae79",5911:"7eb7b058f14ab10fa6ff",5929:"a14da7d1d823f43f659e",6795:"0c9491c4660477c5771a",8920:"02c40a20678ac528640a"}[e]+".js"},u.miniCssF=function(e){return"assets/css/monitor-dev-panel_d314c614b241f08063cc.css"},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},o="mobile-live-video:",u.l=function(e,t,n,i){if(r[e])r[e].push(t);else{var a,c;if(void 0!==n)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var p=s[l];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==o+n){a=p;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,u.nc&&a.setAttribute("nonce",u.nc),a.setAttribute("data-webpack",o+n),a.src=e),r[e]=[t];var f=function(t,n){a.onerror=a.onload=null,clearTimeout(d);var o=r[e];if(delete r[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},d=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),c&&document.head.appendChild(a)}},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},u.j=5029,u.p="https://static.pddpic.com/",u.p=window.__webpack_public_path__||u.p,i=function(e){return new Promise((function(t,n){var r=u.miniCssF(e),o=u.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(a=n[r]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){var a;if((o=(a=i[r]).getAttribute("data-href"))===e||o===t)return a}}(r,o))return t();!function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),c=i&&i.target&&i.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=c,o.parentNode.removeChild(o),r(s)}},o.href=t,document.head.appendChild(o)}(e,o,t,n)}))},a={5029:0},u.f.miniCss=function(e,t){a[e]?t.push(a[e]):0!==a[e]&&{3910:1}[e]&&t.push(a[e]=i(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))},function(){var e={5029:0};u.f.j=function(t,n){var r=u.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var i=u.p+u.u(t),a=new Error;u.l(i,(function(n){if(u.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,r[1](a)}}),"chunk-"+t,t)}},u.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,i=n[0],a=n[1],c=n[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(r in a)u.o(a,r)&&(u.m[r]=a[r]);if(c)var l=c(u)}for(t&&t(n);s<i.length;s++)o=i[s],u.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return u.O(l)},n=self.webpackChunkmobile_live_video=self.webpackChunkmobile_live_video||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var l=u.O(void 0,[1216,6457,5750],(function(){return u(43335)}));l=u.O(l)}();
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/assets/js/vlive_drink_task_ee840c4ae2aff3def431.js.map