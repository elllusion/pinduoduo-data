(self.webpackChunk_name_mobile_dc=self.webpackChunk_name_mobile_dc||[]).push([["37ba","2f31"],{"Vj+h":function(e,t,n){"use strict";var r=n("X/oI"),o=n("wfOt");t.Z=(0,o.w)(r.Z)},upIe:function(e,t,n){"use strict";var r=n("XGyy"),o=n("rJMY");t.Z=(0,r.r_)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.T;return function(t){var n=t.fn;return function(t){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var a=n.apply(t,o),c=function(){return t._emit(e)};return a instanceof Promise?a.then(c,(function(){})):c(),a}}}))},"d++z":function(e,t,n){"use strict";var r=n("iQtE"),o=n.n(r),i=n("/4JS"),a=n.n(i),c=n("9bdW"),l=n.n(c),s=n("KVD2"),u=n.n(s),f=n("pQHD"),m=n.n(f),d=n("W4bd"),p=n("rJMY");function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.collectStoreFromProps,n=void 0===t?function(e){return[e.componentStore]}:t,r=e.mapStore2Props,i=void 0===r?function(){return{}}:r,a=e.eventName,s=void 0===a?p.T:a;return function(e){var t=function(t){var r=(0,d.N)(),a=n(t),u=g(g({},t),i.apply(void 0,o()(a).concat([t])));return(0,c.useEffect)((function(){var e=!1,t=m()((function(){return e||r()}),0,{leading:!1,trailing:!0}),n=a.map((function(e){var n;return null===(n=e._on)||void 0===n?void 0:n.call(e,s,t)}));return function(){e=!0,n.forEach((function(e){return null==e?void 0:e()}))}}),[]),l().createElement(e,u)},r=(0,c.memo)(t);return u()(r,e),r}}},rJMY:function(e,t,n){"use strict";n.d(t,{T:function(){return r}});var r=Symbol.for("__CART_STORE_CHANGED__")},"RpV/":function(e,t,n){"use strict";n.d(t,{Z:function(){return P}});var r,o,i,a=n("/4JS"),c=n.n(a),l=n("U5BY"),s=n.n(l),u=n("hwDT"),f=n.n(u),m=n("f6/u"),d=n.n(m),p=n("f17R"),b=n.n(p),g=n("Vl5s"),h=n.n(g),w=n("9bdW"),k=n.n(w),y=n("u2c9"),v=n.n(y),x=n("Hp7V"),_=n("TtA4"),E=n("ukrc"),O=n.n(E),j=n("mMmj"),D=n.n(j);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function N(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var z={},I={zIndex:1113},P=O()(D())((i=o=function(e){d()(r,e);var t,n=(t=r,function(){var e,n=h()(t);if(N()){var r=h()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return b()(this,e)});function r(){return s()(this,r),n.apply(this,arguments)}return f()(r,[{key:"getBtns",value:function(){var e=this.props,t=e.clickCancel,n=e.clickConfirm,r=e.btnGroupClass,o=e.cancel,i=e.confirm;return k().createElement("div",{className:v()(D().btns,r)},k().createElement("button",{className:v()(D().btn,D().cancel),onClick:t},o),k().createElement("button",{className:v()(D().btn,D().confirm),onClick:n},i))}},{key:"render",value:function(){var e=this.props,t=e.show,n=e.clickMask,r=e.maskClass,o=e.maskStyle,i=this.props,a=i.children,l=i.cancel,s=i.confirm,u=i.title,f=this.props,m=f.clickCloseBtn,d=f.closeBtn,p=f.closeBtnClass,b=f.closeBtnType,g=this.props,h=g.needAnimation,w=g.contentClass,y=g.contentStyle,E=g.disablePullReload,O=l&&s?I:{},j=S(S({},o),O);return k().createElement(_.Z,{show:t,onClick:n,maskClass:r,style:j,disablePullReload:E},k().createElement("div",{className:v()(D().content,w,c()({},D().jelly,h)),style:y},d&&a&&k().createElement(x.Z,{className:v()(D().close,p),onClick:m,type:b}),!a&&k().createElement("div",{className:D().inner},u),a,l&&s&&this.getBtns()))}}]),r}(k().Component),o.defaultProps={closeBtn:!0,clickCloseBtn:null,closeBtnClass:"",closeBtnType:"gray",contentClass:"",contentStyle:z,needAnimation:!0,btnGroupClass:"",title:"",cancel:"",confirm:"",clickCancel:null,clickConfirm:null,show:!0,clickMask:function(){},maskClass:"",maskStyle:z,disablePullReload:!0},r=i))||r},hpbW:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Me}});var r,o,i,a,c,l,s,u,f=n("9bdW"),m=n.n(f),d=n("d++z"),p=n("/4JS"),b=n.n(p),g=n("xeO4"),h=n.n(g),w=n("0Qln"),k=n.n(w),y=n("U5BY"),v=n.n(y),x=n("hwDT"),_=n.n(x),E=n("i/Q6"),O=n.n(E),j=n("f6/u"),D=n.n(j),C=n("f17R"),S=n.n(C),N=n("Vl5s"),z=n.n(N),I=n("jXLS"),P=n.n(I),R=(n("XC3m"),n("T6n4")),Z=n.n(R),T=n("Vj+h"),B=n("4k0V"),A=n("zWf8"),L=n("L8Fz"),U=n("upIe"),G=n("D+Sb"),M="https://promotion.pddpic.com/cart/2021-07-12/972ff648-d7dd-4885-9258-369698734fdf_suffix.png",Q="https://promotion.pddpic.com/cart/2021-07-12/9f2a2bef-6116-40c5-bee4-209f8ffabcfa_suffix.png",W="https://promotion.pddpic.com/cart/2021-07-12/94453110-0d1f-4c02-a193-92de08f0e293_suffix.png",J="https://promotion.pddpic.com/cart/2021-07-12/4854e862-6e5a-459d-80d5-d64496560de9_suffix.png",F="https://promotion.pddpic.com/cart/2021-07-12/8d34c92a-0774-45b6-b5cf-1b125d864fbf_suffix.png",V="https://promotion.pddpic.com/cart/2021-07-12/085634e4-7b4a-4192-adfd-1ca896fbdc8f_suffix.png",Y="https://promotion.pddpic.com/cart/2021-07-13/e25e3ee1-af91-41a4-85df-7ed88ad16cbf_suffix.png",X="https://promotion.pddpic.com/cart/2021-07-13/d0f82c10-0f97-4f18-95d8-39a0dbc92daf_suffix.png",K="https://promotion.pddpic.com/cart/2021-07-13/6ec2f232-64c7-4459-b198-c326b2c96bb7_suffix.png",q="https://promotion.pddpic.com/cart/2021-07-13/071a4e81-e3bc-4a9a-90ee-4edbbbd614dd_suffix.png",H="https://promotion.pddpic.com/cart/2021-09-26/21b8fe92-e121-4ef9-ba20-88ec43cd749f_suffix.png",$="https://promotion.pddpic.com/promo/2f5102a0-ce95-4463-bb58-27c07d415451.png.slim.png",ee="/api/brand-chaumet/pendant/command/receive",te=(0,G.u)([{name:"DACU",value:"dacu",label:"大促"},{name:"JINGLING",value:"jingling",label:"游戏"}]),ne=(0,G.u)([{name:"NEW",value:0,label:"新用户"},{name:"DIALOG",value:1,label:"弹窗"},{name:"DIALOG_CLOSE",value:2,label:"弹窗关闭"},{name:"DIALOG_USE",value:3,label:"弹窗去使用"},{name:"OLD",value:4,label:"老用户"},{name:"OLD_ACHIEVE",value:5,label:"老用户领取"},{name:"OLD_MY",value:6,label:"老用户我的黑卡"},{name:"ICON",value:7,label:"悬浮ICON"},{name:"TOP_BANNER",value:8,label:"顶部Banner"}]),re=n("VCAa"),oe=n("hQaO");function ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(n),!0).forEach((function(t){b()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ie(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ce(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var le={useNativeAntiToken:!0,defaultErrorHandler:function(){}},se=(r=function(e){D()(r,e);var t,n=(t=r,function(){var e,n=z()(t);if(ce()){var r=z()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return S()(this,e)});function r(){var e;v()(this,r);for(var t=arguments.length,f=new Array(t),m=0;m<t;m++)f[m]=arguments[m];return(e=n.call.apply(n,[this].concat(f))).isShowDialog=!1,e.isShowDisableDialog=!1,e.canTake=!1,e.maxNum=void 0,e.minNum=void 0,e.amount=void 0,e.dcNewUser=void 0,e.newUserDialog=void 0,e.reward=void 0,e.showIcon=void 0,e.hide=void 0,e.openFromGoodsList=void 0,e.onDialogClick=void 0,e.useUrl=void 0,e.sceneId=te.DACU,e.topBannerStore=new oe.Z,e.achievedBtnText=void 0,e.achievedBtnUrl=void 0,k()(e,"achieve",o,O()(e)),k()(e,"getBaseInfo",i,O()(e)),k()(e,"request",a,O()(e)),k()(e,"showAction",c,O()(e)),k()(e,"hideAction",l,O()(e)),k()(e,"onLeave",s,O()(e)),k()(e,"onEnter",u,O()(e)),e.showGoodJumpInterruptDialog=h()(Z().mark((function t(){return Z().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.newUserDialog){t.next=2;break}return t.abrupt("return");case 2:return e.openFromGoodsList=!0,e.showAction(),t.abrupt("return",new Promise((function(t){e.onDialogClick=function(){t(!0),e.openFromGoodsList=!1}})));case 5:case"end":return t.stop()}}),t)}))),e}return _()(r,[{key:"isGame",get:function(){return this.sceneId===te.JINGLING}},{key:"btnText",get:function(){return this.isGame?this.achievedBtnText:"我的黑卡"}},{key:"btnUrl",get:function(){return this.isGame?this.achievedBtnUrl:"/blackcard_index.html?_pdd_fs=1&scene_id=dacu"}},{key:"reqParams",get:function(){var e={scene_id:this.sceneId};return this.isGame?e:ae(ae({},e),{},{carnival_id:this.rootStore.promotion_id})}}]),r}(T.Z),o=P()(r.prototype,"achieve",[U.Z,A.U],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return h()(Z().mark((function t(){var n,r,o,i;return Z().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.post(ee,e.reqParams,le);case 3:if(o=t.sent,1!==(null==(i=o.result)||null===(n=i.receive_result)||void 0===n?void 0:n.code)){t.next=8;break}return e.isShowDisableDialog=!0,t.abrupt("return");case 8:return e.amount=(0,B.priceCent)((null===(r=i.brand_card)||void 0===r?void 0:r.amount)||0),e.reward=(0,B.priceCent)(i.reward),e.canTake=!1,e.dcNewUser=!1,t.next=14,(0,re.Fw)(e.rootStore,e.componentId);case 14:!e.openFromGoodsList&&e.showAction(),t.next=21;break;case 17:t.prev=17,t.t0=t.catch(0),e.logError(t.t0),(0,L.html)("<div>活动太火爆<br/>请稍后重试<div>");case 21:case"end":return t.stop()}}),t,null,[[0,17]])})))}}),i=P()(r.prototype,"getBaseInfo",[U.Z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return h()(Z().mark((function t(){var n,r,o,i,a,c;return Z().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=["/api/brand-chaumet/pendant/query/brand_card_home",e.reqParams,le],!e.rootStore.requestMemoized){t.next=7;break}return t.next=4,(n=e.rootStore).requestMemoized.apply(n,i);case 4:t.t0=t.sent,t.next=10;break;case 7:return t.next=9,(r=e.rootStore.axios).post.apply(r,i);case 9:t.t0=t.sent;case 10:if(a=t.t0,null!==(c=a.result)){t.next=15;break}return e.hide=!0,t.abrupt("return");case 15:e.hide=!1,e.canTake=c.show_can_receive,e.minNum=(0,B.priceCent)(c.show_min_amount),e.maxNum=(0,B.priceCent)(c.show_max_amount),e.amount=(0,B.priceCent)((null===(o=c.brand_card)||void 0===o?void 0:o.amount)||0),e.dcNewUser=c.show_can_receive;case 21:case"end":return t.stop()}}),t)})))}}),a=P()(r.prototype,"request",[U.Z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return h()(Z().mark((function t(){return Z().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.rootStore.userInfo.uid||e.rootStore.isEditor){t.next=3;break}return e.hide=!0,t.abrupt("return");case 3:return t.prev=3,t.next=6,e.getBaseInfo();case 6:t.next=12;break;case 8:t.prev=8,t.t0=t.catch(3),e.logError(t.t0),e.hide=!0;case 12:case"end":return t.stop()}}),t,null,[[3,8]])})))}}),c=P()(r.prototype,"showAction",[U.Z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.isShowDialog=!0}}}),l=P()(r.prototype,"hideAction",[U.Z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.isShowDialog=!1}}}),s=P()(r.prototype,"onLeave",[U.Z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.showIcon=!0}}}),u=P()(r.prototype,"onEnter",[U.Z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.showIcon=!1}}}),r),ue=n("Z6Bh"),fe=n("TKwH"),me=n.n(fe),de=n("r6YC"),pe=n.n(de),be=n("2tVT"),ge=n("MV8a"),he=n("BqXm"),we=function(e){me()(pe());var t=e.componentStore,n=t.achieve,r=t.maxNum,o=t.minNum,i=(0,t.getLog)(ne.NEW);return m().createElement(ge.Z,{key:"new",trackingInfo:i},m().createElement(be.ZP,{className:pe().wrap,backgroundImage:M},m().createElement("div",{className:pe().info},"送你黑卡金"),m().createElement("div",{className:pe().award},m().createElement("div",null,o,"~",r),m().createElement("div",{className:pe().unit},"元")),m().createElement(be.ZP,{className:pe().btn,backgroundImage:J,onClick:function(){(0,he.i)(i),n()}})))},ke=n("lQo9"),ye=n.n(ke),ve=n("QQwa"),xe=n("GDNQ"),_e=function(e){me()(ye());var t=e.componentStore,n=t.achieve,r=t.amount,o=t.canTake,i=t.dialogId,a=t.rootStore,c=t.getLog,l=t.btnText,s=t.btnUrl,u=c(ne.OLD),f=c(ne.OLD_MY),d=c(ne.OLD_ACHIEVE);return m().createElement(ge.Z,{key:"old",trackingInfo:u},m().createElement(be.ZP,{className:ye().wrap,backgroundImage:Q},m().createElement("div",{className:ye().award},m().createElement("div",{className:ye().unit},"¥"),m().createElement("div",null,r)),m().createElement(be.ZP,{className:ye().bubble,backgroundImage:X}),m().createElement(be.ZP,{className:ye().icon,backgroundImage:K,onClick:function(){(0,ve.G)(i,a)}}),o?m().createElement(be.ZP,{className:ye().btn,backgroundImage:F,onClick:function(){(0,he.i)(d),n()}}):m().createElement(m().Fragment,null,m().createElement("div",{className:ye().my,onClick:function(){(0,he.i)(f),(0,xe.Y5)(s,f)}},l," >"),m().createElement("div",{className:ye().status},"明日再来"))))},Ee=n("H+T8"),Oe=n("9MVD"),je=n.n(Oe),De=n("RpV/"),Ce=n("9vur"),Se=n("9bMP");function Ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ze(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ne(Object(n),!0).forEach((function(t){b()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ie=function(e){me()(je());var t=e.componentStore,n=t.isShowDialog,r=t.hideAction,o=t.reward,i=t.getLog,a=t.newUserDialog,c=t.componentId,l=t.rootStore,s=t.rootStore,u=s.navOffset,f=s.componentMap,d=t.useUrl,p=t.openFromGoodsList,b=t.achieve,g=t.maxNum;if(!n)return null;var w=ze({newUserDialog:a},i(ne.DIALOG)),k=function(){var t=h()(Z().mark((function t(){var n,o,s,m,g,h,w,k;return Z().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=ze({newUserDialog:a},i(ne.DIALOG_USE)),(0,he.i)(o),r(),!d){t.next=7;break}return(0,L.html)("领取成功"),(0,xe.Y5)(d,o),t.abrupt("return");case 7:if(!p){t.next=18;break}return t.next=10,b();case 10:return(0,L.html)("<div>领取成功<br/>即将跳往你喜欢的商品<div>"),t.next=13,(0,Ce._)(1e3);case 13:return null===(s=(m=e.componentStore).onDialogClick)||void 0===s||s.call(m),t.next=16,(0,Ce._)(1e3);case 16:return location.href=(0,B.appendQuery)({sp:(0,Se.cx)(),is_back:1},location.href),t.abrupt("return");case 18:(0,L.html)("领取成功"),g=null===(n=document.querySelector("#".concat(c)))||void 0===n?void 0:n.offsetTop,h=l.navRankList.reduce((function(e,t){return e+t.calcHeight(f[t.id].store,l)}),0),w=g-u-h,k=(0,B.appendQuery)({sp:w,is_back:1},location.href),Ee.default.reload(k);case 24:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return m().createElement(De.Z,{show:n,clickCloseBtn:function(){var t,n,o=ze({newUserDialog:a},i(ne.DIALOG_CLOSE));(0,he.i)(o),r(),p&&(null===(t=(n=e.componentStore).onDialogClick)||void 0===t||t.call(n))},contentClass:je().content,closeBtnType:"transparent",closeBtnClass:je().close},m().createElement(ge.Z,{trackingInfo:w},m().createElement(be.ZP,{className:je().bg,backgroundImage:V},a?m().createElement(m().Fragment,null,m().createElement("div",{className:je().info,style:{paddingTop:".27rem"}},"送你黑卡金"),m().createElement("div",{className:je().award,style:{marginTop:".07rem"}},m().createElement("div",{className:je().yen},"¥"),p?g:o)):m().createElement(m().Fragment,null,m().createElement("div",{className:je().info,style:{paddingTop:".18rem"}},"送你黑卡金"),m().createElement("div",{className:"".concat(je().award," ").concat(je().bottom)},m().createElement("div",null,o),m().createElement("div",{className:je().unit},"元")),m().createElement(be.ZP,{className:je().bubble,backgroundImage:Y})),m().createElement(be.ZP,{className:je().btn,backgroundImage:p?H:W,onClick:k}))))},Pe=n("IldM"),Re=n.n(Pe),Ze=function(e){me()(Re());var t=e.componentStore.isShowDisableDialog;if(!t)return null;var n=function(){var e=h()(Z().mark((function e(){return Z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Ee.default.reload(location.href);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return m().createElement(De.Z,{show:t,clickCloseBtn:n,contentClass:Re().content,closeBtnType:"transparent",closeBtnClass:Re().close},m().createElement(be.ZP,{className:Re().bg,backgroundImage:V,onClick:n},m().createElement("div",{className:Re().info},"来晚了，黑卡金已领完"),m().createElement(be.ZP,{className:Re().btn,backgroundImage:$})))},Te=n("M1E5"),Be=n.n(Te),Ae=function(e){me()(Be());var t=e.componentStore,n=t.maxNum,r=t.achieve,o=t.dcNewUser,i=t.showIcon,a=t.getLog;if(!o||!i)return null;var c=a(ne.ICON);return m().createElement(ge.Z,{trackingInfo:c},m().createElement(be.ZP,{className:Be().wrap,backgroundImage:q,onClick:function(){(0,he.i)(c),r()}},m().createElement("div",{className:Be().award},m().createElement("div",{className:Be().unit},"¥"),m().createElement("div",null,n))))},Le=n("iOT4"),Ue=n("WFcP"),Ge=function(e){var t=e.componentStore,n=t.UIStore.style,r=t.hide,o=t.request,i=t.dcNewUser,a=t.onLeave,c=t.onEnter,l=t.componentId,s=t.rootStore,u=t.topBannerStore,d=t.getLog;if((0,f.useEffect)((function(){(0,Le.hE)(o)}),[]),r)return null;var p={onLeave:a,onEnter:c,once:!1,threshold:0,rootMargin:"137px"};return m().createElement("div",{style:n,id:l},i&&m().createElement(ue.Z,p,m().createElement("div",{style:{height:1}})),m().createElement(Ue.Z,{store:s,componentStore:u,trackingInfo:d(ne.TOP_BANNER)}),i?m().createElement(we,e):m().createElement(_e,e),m().createElement(Ie,e),m().createElement(Ze,e),m().createElement(Ae,e))};Ge.Store=se;var Me=(0,d.Z)()(Ge)},iusK:function(e,t,n){"use strict";n.r(t),n.d(t,{TRIGGER_SUFFIX:function(){return q},default:function(){return $}});var r,o,i,a,c,l,s,u,f,m,d,p,b=n("U5BY"),g=n.n(b),h=n("hwDT"),w=n.n(h),k=n("i/Q6"),y=n.n(k),v=n("f6/u"),x=n.n(v),_=n("f17R"),E=n.n(_),O=n("Vl5s"),j=n.n(O),D=n("9bdW"),C=n.n(D),S=n("KdYu"),N=n("iuwq"),z=n("0Qln"),I=n.n(z),P=n("jXLS"),R=n.n(P),Z=(n("XC3m"),n("UK90")),T=n("wfOt");function B(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var A,L,U,G=(r=Z.action.bound,o=Z.action.bound,i=Z.action.bound,a=function(e){x()(r,e);var t,n=(t=r,function(){var e,n=j()(t);if(B()){var r=j()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return E()(this,e)});function r(){var e;g()(this,r);for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return e=n.call.apply(n,[this].concat(o)),I()(e,"$isShow",c,y()(e)),I()(e,"rules",l,y()(e)),I()(e,"title",s,y()(e)),I()(e,"topBannerBg",u,y()(e)),I()(e,"contentColor",f,y()(e)),I()(e,"headerColor",m,y()(e)),I()(e,"functionModel",d,y()(e)),I()(e,"wholeImg",p,y()(e)),e}return w()(r,[{key:"toggle",value:function(){this.$isShow=!this.$isShow}},{key:"closeDialog",value:function(){this.$isShow=!1}},{key:"addNewRule",value:function(){this.rules.push({title:"",content:"",useJumpWord:!1,jumpWord:"",wordUrl:""})}}]),r}(T.Z),c=R()(a.prototype,"$isShow",[Z.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),l=R()(a.prototype,"rules",[Z.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[{title:"限时免单",content:"用户购买参与限时免单活动的商品即有机会享受免单优惠，具体规则如下：<br/>1）免单活动时间及免单数量均视商品而定，具体详见会场中免单商品描述；<br/>2）参团时间与成团时间均需在免单活动时间内才视为有效订单；<br/>3）有效订单方可参与免单活动，免单用户将获得与单件商品等额的无门槛优惠券，可前往我的优惠券进行查看；<br/>4）活动期间，购买同一商品，每个用户最多只能获得一次免单优惠。同一账户、同一手机号、同一收货地址等均视为同一用户，若有刷单行为，则取消免单资格；<br/>5）若同一用户在一笔订单中购买多件商品，则免单中奖后将获得与1件商品价格等额的无门槛优惠券。",useJumpWord:!1,jumpWord:"",wordUrl:""}]}}),s=R()(a.prototype,"title",[Z.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"规则弹窗模板"}}),u=R()(a.prototype,"topBannerBg",[Z.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{url:"",height:10}}}),f=R()(a.prototype,"contentColor",[Z.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"#000"}}),m=R()(a.prototype,"headerColor",[Z.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"#000"}}),d=R()(a.prototype,"functionModel",[Z.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),p=R()(a.prototype,"wholeImg",[Z.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{url:"",height:""}}}),R()(a.prototype,"toggle",[r],Object.getOwnPropertyDescriptor(a.prototype,"toggle"),a.prototype),R()(a.prototype,"closeDialog",[o],Object.getOwnPropertyDescriptor(a.prototype,"closeDialog"),a.prototype),R()(a.prototype,"addNewRule",[i],Object.getOwnPropertyDescriptor(a.prototype,"addNewRule"),a.prototype),a),M=G,Q=n("QB/J"),W=n.n(Q),J=n("ukrc"),F=n.n(J),V=n("2tVT"),Y=n("RpV/"),X=n("/18x");function K(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var q="_trigger",H=function(e,t,n){return e.replace(new RegExp(t,"gm"),n)},$=F()(W())(A=(0,S.inject)("store")(A=(0,S.observer)((U=L=function(e){x()(r,e);var t,n=(t=r,function(){var e,n=j()(t);if(K()){var r=j()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return E()(this,e)});function r(){var e;g()(this,r);for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return(e=n.call.apply(n,[this].concat(o))).toggleDialog=function(){e.store.toggle()},e.jump=function(t,n){"A"!==n.target.tagName?(n.preventDefault(),n.stopPropagation()):e.trackForward(t.wordUrl,e.store.getLog())},e.getRules=function(){return e.store.rules.map((function(t,n){var r={__html:e.formatTemplate(t)};return C().createElement("div",{key:n,className:"text-section"},C().createElement("div",{className:"text-title",style:{color:e.store.headerColor}},t.title),C().createElement("p",{style:{color:e.store.contentColor},dangerouslySetInnerHTML:r,onClick:e.jump.bind(y()(e),t)}))}))},e}return w()(r,[{key:"componentDidUpdate",value:function(){this.store.$isShow&&(0,X.sendImprMetrics)(this.store.getLog())}},{key:"formatTemplate",value:function(e){var t=e.useJumpWord,n=e.jumpWord,r=e.content,o=e.image,i=r;if(i=H(i," ","&nbsp;"),i=H(i,"\n","<br />"),t){var a='<a href="javascript:void(0)">'.concat(n,"</a>");i=H(i,n,a)}if(o){var c="<img className='dc_dialog_img' src='".concat(o,"' />");i=H(i,"#",c)}return i}},{key:"render",value:function(){if(!this.store.$isShow)return C().createElement("div",{id:this.componentId+q,style:{display:"none"},onClick:this.toggleDialog});var e=0===this.store.functionModel?"dialog-content":"dialog-content dialog-no-padding",t={};return 0!==this.store.functionModel&&(t={height:this.store.wholeImg.height+"rem"}),C().createElement(Y.Z,{show:this.store.$isShow,clickCloseBtn:this.toggleDialog,contentClass:e,contentStyle:t},0===this.store.functionModel?C().createElement(D.Fragment,null,C().createElement(V.ZP,{className:"dialog-head",style:{backgroundImage:"url(".concat(this.store.topBannerBg.url,")"),color:this.store.headerColor}},C().createElement("span",null,this.store.title)),C().createElement("div",{className:"dialog-text need-scroll",id:"dialog-rules"},this.getRules())):C().createElement("div",{className:"dialog-img-wrapper"},C().createElement("img",{src:this.store.wholeImg.url})))}}]),r}(N.Z),L.Store=M,A=U))||A)||A)||A},QQwa:function(e,t,n){"use strict";n.d(t,{G:function(){return o}});var r=n("iusK"),o=function(e,t){var n=t.getComponentById(e)[0];if(n)n.store.toggle();else{var o=document.getElementById(e+r.TRIGGER_SUFFIX);o&&o.click()}}},"QB/J":function(e,t,n){var r=n("2Zws"),o=n("DDs0"),i="string"==typeof r?[[e.id,r,""]]:r;(t=e.exports=r.locals||{})._getContent=function(){return i},t._getCss=function(){return""+r},t._insertCss=function(e){return o(i,e)}},mMmj:function(e,t,n){var r=n("QyQl"),o=n("DDs0"),i="string"==typeof r?[[e.id,r,""]]:r;(t=e.exports=r.locals||{})._getContent=function(){return i},t._getCss=function(){return""+r},t._insertCss=function(e){return o(i,e)}},"9MVD":function(e,t,n){var r=n("pQuU"),o=n("DDs0"),i="string"==typeof r?[[e.id,r,""]]:r;(t=e.exports=r.locals||{})._getContent=function(){return i},t._getCss=function(){return""+r},t._insertCss=function(e){return o(i,e)}},IldM:function(e,t,n){var r=n("ihxF"),o=n("DDs0"),i="string"==typeof r?[[e.id,r,""]]:r;(t=e.exports=r.locals||{})._getContent=function(){return i},t._getCss=function(){return""+r},t._insertCss=function(e){return o(i,e)}},M1E5:function(e,t,n){var r=n("Ee8i"),o=n("DDs0"),i="string"==typeof r?[[e.id,r,""]]:r;(t=e.exports=r.locals||{})._getContent=function(){return i},t._getCss=function(){return""+r},t._insertCss=function(e){return o(i,e)}},r6YC:function(e,t,n){var r=n("x5RX"),o=n("DDs0"),i="string"==typeof r?[[e.id,r,""]]:r;(t=e.exports=r.locals||{})._getContent=function(){return i},t._getCss=function(){return""+r},t._insertCss=function(e){return o(i,e)}},lQo9:function(e,t,n){var r=n("aVGx"),o=n("DDs0"),i="string"==typeof r?[[e.id,r,""]]:r;(t=e.exports=r.locals||{})._getContent=function(){return i},t._getCss=function(){return""+r},t._insertCss=function(e){return o(i,e)}},"2Zws":function(e,t,n){(e.exports=n("Cgg2")(!1)).push([e.id,'@-webkit-keyframes ani-jelly{0%{-webkit-transform:scale(0);transform:scale(0)}70%{-webkit-transform:scale(1.1);transform:scale(1.1)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes ani-jelly{0%{-webkit-transform:scale(0);transform:scale(0)}70%{-webkit-transform:scale(1.1);transform:scale(1.1)}to{-webkit-transform:scale(1);transform:scale(1)}}.dialog-content{-webkit-animation:ani-jelly .5s ease;animation:ani-jelly .5s ease}@-webkit-keyframes ani-loading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes ani-loading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.dialog-content{position:absolute;margin:auto;left:0;top:0;right:0;bottom:0;background:#fff;border-radius:.08rem;height:3.73rem;width:2.9rem;padding-top:.5rem;padding-bottom:.12rem}.dialog-content img{width:100%}.dialog-content .dialog-close{position:absolute;top:-.145rem;right:-.145rem;z-index:1;width:.29rem;height:.29rem;border-radius:.145rem;line-height:.29rem;background:#e0e0e0;text-align:center}.dialog-content .dialog-close .dialog-close-icon{width:.1rem;height:.1rem;display:block;position:absolute;top:.095rem;left:.095rem;background-image:url("https://promotion.pddpic.com/promo/2020-07-23/DialogIndex0.png");background-repeat:no-repeat;background-size:contain}.dialog-content .dialog-head{position:absolute;border-top-left-radius:.06rem;width:100%;text-align:center;font-weight:700;color:#ff1a1a;background-size:100% 100%;height:.575rem;top:0;font-size:.15rem;padding-top:.1rem}.dialog-content .dialog-head span{height:.26rem;line-height:.28rem;display:inline-block}.dialog-content .dialog-text{position:relative;top:.1rem;left:0;right:0;bottom:0;padding:0 .16rem;overflow-y:auto;text-align:left;height:3.1rem;padding-top:.1rem;-webkit-overflow-scrolling:touch}.dialog-content .dialog-text .text-section{margin:.1rem 0 .05rem;word-break:break-all}.dialog-content .dialog-text .text-section .text-title{font-size:.15rem;color:#f42e24;line-height:1;margin:0 0 .05rem;font-weight:bolder}.dialog-content .dialog-text .text-section a{text-decoration:underline;color:#f42e24}.dialog-content .dialog-text .text-section img{display:inline-block;height:.17rem;width:auto}.dialog-content .dialog-text .text-claims{color:#f42e24;font-size:.13rem;line-height:.15rem;margin-top:.1rem;text-align:center}.dialog-content .dialog-img-wrapper{width:100%;height:100%;border-radius:.06rem;overflow:hidden}.dialog-no-padding{padding:0}@media only screen and (min-aspect-ratio:290/373){.dialog-content{-webkit-animation:popAni .5s ease;animation:popAni .5s ease;-webkit-transform:scale(.7);transform:scale(.7)}@-webkit-keyframes popAni{0%{-webkit-transform:scale(0);transform:scale(0)}70%{-webkit-transform:scale(.8);transform:scale(.8)}to{-webkit-transform:scale(.7);transform:scale(.7)}}@keyframes popAni{0%{-webkit-transform:scale(0);transform:scale(0)}70%{-webkit-transform:scale(.8);transform:scale(.8)}to{-webkit-transform:scale(.7);transform:scale(.7)}}}',""])},QyQl:function(e,t,n){(t=e.exports=n("Cgg2")(!1)).push([e.id,"@-webkit-keyframes _3RZ391O4{0%{-webkit-transform:scale(0);transform:scale(0)}70%{-webkit-transform:scale(1.1);transform:scale(1.1)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes _3RZ391O4{0%{-webkit-transform:scale(0);transform:scale(0)}70%{-webkit-transform:scale(1.1);transform:scale(1.1)}to{-webkit-transform:scale(1);transform:scale(1)}}.zx0ZVpK4{-webkit-animation:_3RZ391O4 .5s ease;animation:_3RZ391O4 .5s ease}@-webkit-keyframes _1MASUxKl{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes _1MASUxKl{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}._1xAguRJJ{position:relative;width:2.9rem;min-height:1rem;background:#fff;border-radius:.06rem;display:-webkit-box;display:flex;display:-webkit-flex;-webkit-box-pack:center;justify-content:center;-webkit-justify-content:center;-webkit-box-align:center;align-items:center;-webkit-align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-flex-direction:column}._1w-4KbrB{position:absolute;top:0;right:0;-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%)}._3gRko6Dy{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:.1rem 10%;text-align:center;margin:.1rem 0 .05rem;color:#151516}._2Su7joqC,._3gRko6Dy{width:100%;font-size:.17rem}._2Su7joqC{border-top:.01rem solid #e0e0e0;border-radius:0 0 .06rem .06rem;overflow:hidden;display:-webkit-box;display:flex;display:-webkit-flex;-webkit-box-pack:center;justify-content:center;-webkit-justify-content:center;-webkit-box-align:center;align-items:center;-webkit-align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-flex-direction:row}._1WfDZ71l{line-height:1.5;display:inline-block;text-align:center;touch-action:manipulation;background-image:none;background-color:#fff;white-space:nowrap;-webkit-user-select:none;user-select:none;position:relative;color:#333;outline:none;padding:0 .12rem;font-size:.18rem;height:.44rem;width:100%;border-radius:0}._3K2omO8e{color:#9c9c9c;border-left:none}._24iNrTjD{color:#e02e24;border:none;border-left:.01rem solid #e0e0e0}",""]),t.locals={jelly:"zx0ZVpK4","ani-jelly":"_3RZ391O4",content:"_1xAguRJJ",close:"_1w-4KbrB",inner:"_3gRko6Dy",btns:"_2Su7joqC",btn:"_1WfDZ71l",cancel:"_3K2omO8e",confirm:"_24iNrTjD","ani-loading":"_1MASUxKl"}},pQuU:function(e,t,n){(t=e.exports=n("Cgg2")(!1)).push([e.id,"._1WXWjSgM{background-color:transparent!important;width:3.75rem!important}.IySFjJIR{width:3.2rem;height:2.62rem;background-size:100%;color:#ffdfb6;position:relative;display:-webkit-box;display:flex;display:-webkit-flex;-webkit-box-pack:start;justify-content:flex-start;-webkit-justify-content:flex-start;-webkit-box-align:center;align-items:center;-webkit-align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-flex-direction:column;line-height:1}._19Tjtjjd{width:2.29rem;height:.48rem;background-size:100%;position:absolute;bottom:.26rem;left:.46rem}.bO_kshHm{font-size:.18rem}.nbXvvNPu{-webkit-box-align:center;align-items:center;-webkit-align-items:center;font-size:.65rem}._1Xn5T5rP,.nbXvvNPu{display:-webkit-box;display:flex;display:-webkit-flex;-webkit-box-pack:center;justify-content:center;-webkit-justify-content:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-flex-direction:row}._1Xn5T5rP{-webkit-box-align:end;align-items:flex-end;-webkit-align-items:flex-end}._16D9tO7m{right:.6rem!important;top:-.42rem!important}.nWEFI1Pt{font-size:.25rem;position:relative;bottom:.05rem}._2HEBh6oc{margin-right:.07rem;font-size:.3rem}._21aJjOgJ{width:1.42rem;height:.33rem;background-size:100%;position:relative;bottom:.03rem}",""]),t.locals={content:"_1WXWjSgM",bg:"IySFjJIR",btn:"_19Tjtjjd",info:"bO_kshHm",award:"nbXvvNPu",bottom:"_1Xn5T5rP",close:"_16D9tO7m",unit:"nWEFI1Pt",yen:"_2HEBh6oc",bubble:"_21aJjOgJ"}},ihxF:function(e,t,n){(t=e.exports=n("Cgg2")(!1)).push([e.id,"._2QL64fp5{background-color:transparent!important;width:3.75rem!important}._3riFI2mJ{width:3.2rem;height:2.62rem;background-size:100%;color:#ffdfb6;position:relative;display:-webkit-box;display:flex;display:-webkit-flex;-webkit-box-pack:start;justify-content:flex-start;-webkit-justify-content:flex-start;-webkit-box-align:center;align-items:center;-webkit-align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-flex-direction:column;line-height:1}._3xnT7Wlt{right:.6rem!important;top:-.42rem!important}.u3ySZ8h_{width:100%;text-align:center;font-size:.21rem;color:#ffdfb6;line-height:1;margin-top:.61rem}._2-x0AYL6{width:2.29rem;height:.48rem;background-size:100%;position:absolute;bottom:.26rem;left:.46rem}",""]),t.locals={content:"_2QL64fp5",bg:"_3riFI2mJ",close:"_3xnT7Wlt",info:"u3ySZ8h_",btn:"_2-x0AYL6"}},Ee8i:function(e,t,n){(t=e.exports=n("Cgg2")(!1)).push([e.id,"@-webkit-keyframes _1uAf0Qep{0%{-webkit-transform:scale(0);transform:scale(0)}70%{-webkit-transform:scale(1.1);transform:scale(1.1)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes _1uAf0Qep{0%{-webkit-transform:scale(0);transform:scale(0)}70%{-webkit-transform:scale(1.1);transform:scale(1.1)}to{-webkit-transform:scale(1);transform:scale(1)}}._3wY4zYgN{-webkit-animation:_1uAf0Qep .5s ease;animation:_1uAf0Qep .5s ease}@-webkit-keyframes _2ydDzez_{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes _2ydDzez_{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}._3wY4zYgN{width:.49rem;height:.58rem;line-height:1;padding-top:.2rem;color:#ffe97f;background-size:100%;position:fixed;right:0;bottom:1.4rem;z-index:5}._20UZj6Ho{display:-webkit-box;display:flex;display:-webkit-flex;-webkit-box-pack:center;justify-content:center;-webkit-justify-content:center;-webkit-box-align:center;align-items:center;-webkit-align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-flex-direction:row;font-size:.18rem;font-weight:700;line-height:1}._1fRtqJWE{margin-right:.01rem;font-size:.12rem}",""]),t.locals={wrap:"_3wY4zYgN","ani-jelly":"_1uAf0Qep",award:"_20UZj6Ho",unit:"_1fRtqJWE","ani-loading":"_2ydDzez_"}},x5RX:function(e,t,n){(t=e.exports=n("Cgg2")(!1)).push([e.id,"._39YlhanP{width:3.49rem;height:1.37rem;margin:0 auto;color:#ffdfbb;padding:.14rem 0 .16rem;display:-webkit-box;display:flex;display:-webkit-flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-justify-content:space-between;-webkit-box-align:center;align-items:center;-webkit-align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-flex-direction:column;background-size:100%}._2jz8sfT_{font-size:.16rem}._2jz8sfT_,.WGFegX6_{line-height:1;font-weight:700}.WGFegX6_{display:-webkit-box;display:flex;display:-webkit-flex;-webkit-box-pack:center;justify-content:center;-webkit-justify-content:center;-webkit-box-align:end;align-items:flex-end;-webkit-align-items:flex-end;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-flex-direction:row;font-size:.5rem}._3f1--BB6{margin-left:.05rem;font-size:.2rem;bottom:.05rem;position:relative}._2qmDVKt8{width:1.22rem;height:.32rem;background-size:100%}",""]),t.locals={wrap:"_39YlhanP",info:"_2jz8sfT_",award:"WGFegX6_",unit:"_3f1--BB6",btn:"_2qmDVKt8"}},aVGx:function(e,t,n){(t=e.exports=n("Cgg2")(!1)).push([e.id,"._3EGuC3l6{width:3.49rem;height:.77rem;margin:0 auto;color:#ffdfbb;padding-left:.16rem;padding-top:.08rem;display:-webkit-box;display:flex;display:-webkit-flex;-webkit-box-pack:start;justify-content:flex-start;-webkit-justify-content:flex-start;-webkit-box-align:center;align-items:center;-webkit-align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-flex-direction:row;background-size:100%;line-height:1;position:relative}._33pDSxH-{font-size:.16rem}._2L-O5Rfa,._33pDSxH-{line-height:1;font-weight:700}._2L-O5Rfa{display:-webkit-box;display:flex;display:-webkit-flex;-webkit-box-pack:center;justify-content:center;-webkit-justify-content:center;-webkit-box-align:end;align-items:flex-end;-webkit-align-items:flex-end;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-flex-direction:row;font-size:.35rem;margin-right:.04rem}._3l_6sNhR{margin-right:.05rem;font-size:.2rem;bottom:.05rem;position:relative}._2QJRssGz{position:absolute;width:.72rem;height:.26rem;background-size:100%;right:.15rem;top:.24rem}._1Q5tMKSz{width:.62rem;height:.2rem;background-size:100%;margin-right:.06rem}._1CiMnKUm{width:.16rem;height:.16rem;background-size:100%}._17TVsALh{top:.23rem;font-size:.14rem;color:#b0b0b0;font-weight:700}._1bNZe3-r,._17TVsALh{width:.8rem;position:absolute;right:0;text-align:left}._1bNZe3-r{bottom:.22rem;font-size:.13rem;color:#a1a1a1;font-weight:medium}",""]),t.locals={wrap:"_3EGuC3l6",info:"_33pDSxH-",award:"_2L-O5Rfa",unit:"_3l_6sNhR",btn:"_2QJRssGz",bubble:"_1Q5tMKSz",icon:"_1CiMnKUm",my:"_17TVsALh",status:"_1bNZe3-r"}}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/assets/js/mobile-dc/DcBlackCardBanner-0767caf1a68da2bf51d2.js.map