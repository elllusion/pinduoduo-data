(self.webpackChunk_name_mobile_dc=self.webpackChunk_name_mobile_dc||[]).push([["1f3e"],{"9oNc":function(e,t,r){"use strict";r.d(t,{SG:function(){return f},Qq:function(){return p},bj:function(){return m}});var n=r("/4JS"),o=r.n(n),i=r("xeO4"),a=r.n(i),u=r("T6n4"),s=r.n(u);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=function(){var e=a()(s().mark((function e(t,r){var n,o,i=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>2&&void 0!==i[2]?i[2]:{},e.next=3,r.axios.get("api/wizard/month/broker/promotion/entry",l({params:t,defaultErrorHandler:function(){}},n));case 3:if(o=e.sent){e.next=6;break}throw new Error("月卡底部信息条返回错误");case 6:return e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),p=function(){var e=a()(s().mark((function e(t,r){var n,o,i=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>2&&void 0!==i[2]?i[2]:{},e.next=3,r.axios.get("api/wizard/month/broker/promotion/dec",l({params:t,defaultErrorHandler:function(){}},n));case 3:if(o=e.sent){e.next=6;break}throw new Error("月卡免单进度条返回错误");case 6:return e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),m=function(){var e=a()(s().mark((function e(t,r){var n,o,i=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>2&&void 0!==i[2]?i[2]:{},e.next=3,r.axios.get("api/wizard/jaina/promotion/coupon",l({params:t,useNativeAntiToken:!0,defaultErrorHandler:function(){}},n));case 3:if((o=e.sent)&&null!=o&&o.coupon_id){e.next=6;break}throw new Error("月卡底部信息条领取大额券失败");case 6:return e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},"3hKG":function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Oe}});var n,o,i,a,u,s,c,l,f,p,m,b,d=r("xeO4"),g=r.n(d),h=r("/4JS"),y=r.n(h),w=r("0Qln"),v=r.n(w),k=r("U5BY"),_=r.n(k),E=r("hwDT"),O=r.n(E),C=r("i/Q6"),x=r.n(C),T=r("f6/u"),N=r.n(T),R=r("f17R"),S=r.n(R),z=r("Vl5s"),D=r.n(z),I=r("jXLS"),P=r.n(I),A=(r("XC3m"),r("T6n4")),B=r.n(A),$=r("9bdW"),U=r.n($),W=r("UK90"),j=r("KdYu"),G=r("iuwq"),J=r("wfOt"),M=new(r("K63m").Z)({alias:"URL",text:"链接跳转",value:1},{alias:"POSITION",text:"页面定位",value:2}),Z={NEED_OPEN:0,NOT_MEET:1,CAN_TAKE:2,GOT_AWARD:3,NOT_LOGIN:4,RISK_USER:5,ERROR:6},K=r("9oNc"),L=r("Wq4O");function q(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var Y,F,V,Q,H,X,ee,te,re,ne,oe,ie,ae,ue,se,ce,le,fe=(n=function(e){N()(d,e);var t,r,n=(t=d,function(){var e,r=D()(t);if(q()){var n=D()(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return S()(this,e)});function d(){var e;_()(this,d);for(var t=arguments.length,r=new Array(t),g=0;g<t;g++)r[g]=arguments[g];return e=n.call.apply(n,[this].concat(r)),v()(e,"beforeBtnTxt",o,x()(e)),v()(e,"beforeJumpUrl",i,x()(e)),v()(e,"rulesDialogId",a,x()(e)),v()(e,"buyJumpType",u,x()(e)),v()(e,"buyJumpPoint",s,x()(e)),v()(e,"buyJumpUrl",c,x()(e)),v()(e,"afterJumpUrl",l,x()(e)),v()(e,"$curOrderCnt",f,x()(e)),v()(e,"$needOrderCnt",p,x()(e)),v()(e,"$userStatus",m,x()(e)),v()(e,"$isDidMount",b,x()(e)),e.getRemark=function(){return[e.nickName,"未开通","已开通未满足单数","已开通已满足单数未领奖","已开通已领奖"]},e}return O()(d,[{key:"showProgress",get:function(){return this.rootStore.isEditor||[Z.NEED_OPEN,Z.NOT_MEET,Z.CAN_TAKE,Z.GOT_AWARD].includes(this.$userStatus)}},{key:"userhasOpen",get:function(){return[Z.NOT_MEET,Z.CAN_TAKE,Z.GOT_AWARD].includes(this.$userStatus)}},{key:"request",value:(r=g()(B().mark((function e(t){var r,n=this;return B().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.rootStore.userHasLogin()){e.next=3;break}return this.$userStatus=Z.NOT_LOGIN,e.abrupt("return");case 3:return e.prev=3,e.next=6,(0,K.Qq)({},t);case 6:r=e.sent,(0,W.runInAction)((function(){var e=r.current_order_count,t=r.need_display,o=r.need_order_count,i=r.gift_status;if(t){if(n.$userStatus=i,n.userhasOpen&&(!(0,L.Z)(e)||!(0,L.Z)(o)||!(0,L.Z)(o-e)))throw n.$userStatus=Z.ERROR,new Error("月卡进度条数字返回错误");n.$curOrderCnt=e,n.$needOrderCnt=o}else n.$userStatus=Z.RISK_USER})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),this.logError(e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])}))),function(e){return r.apply(this,arguments)})}]),d}(J.Z),o=P()(n.prototype,"beforeBtnTxt",[W.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"1元尝鲜"}}),i=P()(n.prototype,"beforeJumpUrl",[W.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),a=P()(n.prototype,"rulesDialogId",[W.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),u=P()(n.prototype,"buyJumpType",[W.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return M.URL}}),s=P()(n.prototype,"buyJumpPoint",[W.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),c=P()(n.prototype,"buyJumpUrl",[W.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),l=P()(n.prototype,"afterJumpUrl",[W.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),f=P()(n.prototype,"$curOrderCnt",[W.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),p=P()(n.prototype,"$needOrderCnt",[W.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),m=P()(n.prototype,"$userStatus",[W.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),b=P()(n.prototype,"$isDidMount",[W.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),P()(n.prototype,"showProgress",[W.computed],Object.getOwnPropertyDescriptor(n.prototype,"showProgress"),n.prototype),P()(n.prototype,"userhasOpen",[W.computed],Object.getOwnPropertyDescriptor(n.prototype,"userhasOpen"),n.prototype),P()(n.prototype,"request",[W.action],Object.getOwnPropertyDescriptor(n.prototype,"request"),n.prototype),n),pe=r("ukrc"),me=r.n(pe),be=r("MV8a"),de=r("pslD"),ge=r.n(de),he=r("u2c9"),ye=r.n(he),we=r("TO2N"),ve=r("V56i"),ke=r("pfaS"),_e=r("zWf8");function Ee(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var Oe=(Y=me()(ge()),F=(0,j.inject)("store"),V=(0,ke.Z)(1e3),Y(Q=F(Q=(0,j.observer)((re=te=function(e){N()(n,e);var t,r=(t=n,function(){var e,r=D()(t);if(Ee()){var n=D()(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return S()(this,e)});function n(){var e;_()(this,n);for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return(e=r.call.apply(r,[this].concat(o))).docVisibilityChange=function(){"visible"===document.visibilityState&&e.store.request(e.store.requestParams)},v()(e,"onBtnClick",X,x()(e)),v()(e,"onRulesClick",ee,x()(e)),e}return O()(n,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener(we.Tm,this.docVisibilityChange),(0,W.runInAction)((function(){e.store.$isDidMount=!0}))}},{key:"componentWillUnmount",value:function(){document.removeEventListener(we.Tm,this.docVisibilityChange)}},{key:"getRenderInfo",get:function(){var e=this.store,t=e.$userStatus,r=e.$curOrderCnt,n=e.$needOrderCnt,o=e.afterJumpUrl,i=e.buyJumpUrl;return t===Z.NOT_MEET?{info:U().createElement("div",{className:ge().info},"全平台再拼",U().createElement("i",null,n-r),"单 必免",ne||(ne=U().createElement("i",null,"1")),"单"),trackingInfo:this.store.getLog(2),url:i,buttonTxt:"立即拼单 >"}:t===Z.CAN_TAKE?{info:U().createElement("div",{className:ge().info},"已免",oe||(oe=U().createElement("i",null,"1")),"单，待领取"),trackingInfo:this.store.getLog(3),url:o,buttonTxt:"去领取 >"}:{info:U().createElement("div",{className:ge().info},"已免",ie||(ie=U().createElement("i",null,"1")),"单，已领取"),trackingInfo:this.store.getLog(4),url:o,buttonTxt:"已领取 >"}}},{key:"renderBefore",value:function(){var e=this,t=this.store,r=t.beforeJumpUrl,n=t.$isDidMount,o=t.beforeBtnTxt,i=this.store.getLog(1);return U().createElement("div",{className:ge().beforeContentWrapper},ae||(ae=U().createElement("p",null,"开尝鲜月卡 尊享",U().createElement("i",null,"超值权益"))),U().createElement("div",{className:ge().tagWrapper},ue||(ue=U().createElement("span",null,"领124元优惠券")),se||(se=U().createElement("span",null,"限时拼10免1"))),U().createElement(be.Z,{trackingInfo:i},U().createElement("div",{className:ye()(ge().beforeBtn,y()({},ge().beforeBtnAddAni,n)),onClick:function(){return e.trackForward(r,i)}},o," ",">")))}},{key:"renderAfter",value:function(){var e=this,t=this.store,r=t.$curOrderCnt,n=t.$needOrderCnt,o=t.$userStatus,i=this.getRenderInfo,a=i.trackingInfo,u=i.info,s=i.buttonTxt,c=i.url;return U().createElement("div",{className:ge().afterContentWrapper},U().createElement("div",{className:ge().left},ce||(ce=U().createElement("p",null,"限时福利")),le||(le=U().createElement("p",null,"拼10免1"))),U().createElement("div",{className:ge().right},U().createElement("div",{className:ge().rule},"单笔实付≥25元 | ",U().createElement("span",{onClick:function(){return e.onRulesClick()}},"规则")),u,U().createElement("div",{className:ge().progressBarWrapper},U().createElement("div",{className:ge().progressBar,style:{width:"".concat(r/n*100,"%"),maxWidth:"1.3rem"}})),U().createElement("div",{className:ge().count},U().createElement("i",null,r),"/",n),U().createElement(be.Z,{trackingInfo:a},U().createElement("div",{className:ye()(ge().afterBtn,y()({},ge().gotAward,o===Z.GOT_AWARD)),onClick:function(){return e.onBtnClick(c,a)}},s))))}},{key:"renderContent",value:function(){return this.store.userhasOpen?this.renderAfter():this.renderBefore()}},{key:"render",value:function(){return this.store.showProgress&&U().createElement("div",{id:this.componentId,style:this.UIStore.style},U().createElement("div",{className:ge().wrapper},this.renderContent()))||null}}]),n}(G.Z),te.Store=fe,H=re,X=P()(H.prototype,"onBtnClick",[_e.U],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=g()(B().mark((function t(r,n){var o,i,a;return B().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=e.store,i=o.buyJumpType,a=o.buyJumpPoint,o.$userStatus===Z.NOT_MEET&&i===M.POSITION?(0,ve.tT)(a):e.trackForward(r,n);case 2:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()}}),ee=P()(H.prototype,"onRulesClick",[V],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t,r,n=e.rootStore.getComponentById(e.store.rulesDialogId)[0];null==n||null===(t=n.store)||void 0===t||null===(r=t.toggle)||void 0===r||r.call(t)}}}),P()(H.prototype,"getRenderInfo",[W.computed],Object.getOwnPropertyDescriptor(H.prototype,"getRenderInfo"),H.prototype),Q=H))||Q)||Q)||Q)},pslD:function(e,t,r){var n=r("Ddtv"),o=r("DDs0"),i="string"==typeof n?[[e.id,n,""]]:n;(t=e.exports=n.locals||{})._getContent=function(){return i},t._getCss=function(){return""+n},t._insertCss=function(e){return o(i,e)}},Ddtv:function(e,t,r){(t=e.exports=r("Cgg2")(!1)).push([e.id,'.CUhHoPDC{width:3.57rem;height:.61rem;margin:0 auto;background:#ffb7b7;border-radius:.04rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}._3uFvn2Gy{width:3.51rem;height:.55rem;background:-webkit-linear-gradient(133deg,#fff7e9,#fffcf2);background:linear-gradient(-43deg,#fff7e9,#fffcf2);border-radius:.03rem;position:relative}._3uFvn2Gy:after{content:"";position:absolute;top:0;left:0;display:block;width:.32rem;height:.32rem;background-size:100% 100%;background-image:url("https://promotion.pddpic.com/promo/2020-11-11/9b2a4d25-9101-4e9b-8f8d-b3202e398322.png.slim.png")}._3uFvn2Gy p{position:absolute;top:.06rem;left:.35rem;height:.17rem;line-height:.17rem;font-size:.15rem;font-weight:700;color:#8f3a1c}._3uFvn2Gy p i{color:#f00000}.iWtYEwpL{position:absolute;top:.28rem;left:.34rem}.iWtYEwpL span{display:inline-block;height:.22rem;padding:0 .06rem;line-height:.22rem;background:#fde392;border-radius:.03rem;margin-right:.09rem;font-size:.13rem;color:#a64d2e;text-align:center}._2kTNY6Qb{position:absolute;right:.28rem;top:.18rem;width:.73rem;height:.19rem;line-height:.19rem;background:#f00000;border-radius:.09rem;font-size:.12rem;color:#fff;text-align:center;font-weight:700}._3wSPMghw{width:3.51rem;height:.55rem;margin:0 auto;background-color:#fff;border-radius:.03rem;overflow:hidden}._5d9pIkOz{width:.7rem;height:.55rem;display:inline-block;vertical-align:top;background:-webkit-linear-gradient(311deg,#ff5a00,red);background:linear-gradient(139deg,#ff5a00,red)}._5d9pIkOz p{width:.7rem;height:.16rem;line-height:.16rem;font-size:.14rem;font-weight:700;color:#fff;margin-top:.11rem;text-align:center}._5d9pIkOz p:last-of-type{margin-top:.06rem}._3B_DqMKB{width:2.81rem;height:.55rem;display:inline-block;position:relative}._3f3-ambG{padding-right:.03rem;top:.05rem;right:0;width:1.07rem;background:#ffedb5;border-radius:.08rem 0 0 .08rem;font-size:.1rem;color:#b25b3d;text-align:right}._3f3-ambG,._3zGe--Sb{position:absolute;height:.15rem}._3zGe--Sb{top:.12rem;left:.11rem;line-height:.15rem;font-size:.13rem;color:#8f3a1c}._3zGe--Sb i{color:#f00000}._2QIKmqXU{position:absolute;top:.36rem;left:.11rem;width:1.3rem;height:.07rem;background:#ffc0c0;border-radius:.04rem}._2QIKmqXU:after{position:absolute;right:-.13rem;top:-.05rem;content:"";display:block;width:.16rem;height:.16rem;border-radius:50%;border:.01rem solid #fff;background-size:100% 100%;background-image:url("https://promotion.pddpic.com/promo/2020-11-11/ca022b16-6073-4884-b25b-e53c8807a9c7.png.slim.png")}._2eCVBTzY{height:.07rem;background:#f00000;border-radius:.04rem}._2Wbv5Y1m{position:absolute;bottom:.08rem;left:1.58rem;font-size:.11rem;color:#8f3a1c;font-weight:700}._2Wbv5Y1m i{color:#f00000}._2IoIZXNM{position:absolute;right:.09rem;top:.28rem;width:.73rem;height:.19rem;line-height:.19rem;background:#f00000;border-radius:.09rem;font-size:.12rem;color:#fff;text-align:center}._3swk99VS{-webkit-animation:_2Rf5assZ 1s infinite;animation:_2Rf5assZ 1s infinite}.PmHF1Fxw{background:#ff9595}@-webkit-keyframes _2Rf5assZ{0%{-webkit-transform:scale(1.1);transform:scale(1.1)}50%{-webkit-transform:scale(1.3);transform:scale(1.3)}to{-webkit-transform:scale(1.1);transform:scale(1.1)}}@keyframes _2Rf5assZ{0%{-webkit-transform:scale(1.1);transform:scale(1.1)}50%{-webkit-transform:scale(1.3);transform:scale(1.3)}to{-webkit-transform:scale(1.1);transform:scale(1.1)}}',""]),t.locals={wrapper:"CUhHoPDC",beforeContentWrapper:"_3uFvn2Gy",tagWrapper:"iWtYEwpL",beforeBtn:"_2kTNY6Qb",afterContentWrapper:"_3wSPMghw",left:"_5d9pIkOz",right:"_3B_DqMKB",rule:"_3f3-ambG",info:"_3zGe--Sb",progressBarWrapper:"_2QIKmqXU",progressBar:"_2eCVBTzY",count:"_2Wbv5Y1m",afterBtn:"_2IoIZXNM",beforeBtnAddAni:"_3swk99VS",breathing:"_2Rf5assZ",gotAward:"PmHF1Fxw"}}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/assets/js/mobile-dc/DcMonthCardProgress-f1b28ef27e6607fe26db.js.map