(self.webpackChunkmobile_fun_cashback=self.webpackChunkmobile_fun_cashback||[]).push([[7355],{29524:function(e){e.exports={content:"_203nAh",title:"_217rLE",time:"_2t1jbe",cards:"TN8Mju",card:"_1TsM8B",cardBg:"_7ILsWw",reward1:"IAlF1E",reward2:"-yN4IV",desc:"_33NUr4",detail:"_3lVHtE",sub:"_1XLSOd",commonFadeIn:"_1rfmai",commonFadeOut:"_3y1jlf",rotate360:"gsKCCp",commonScaleOut:"_12rGDs",commonScaleIn:"_1qYr2N"}},97106:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return I}});var o,r=t(20064),i=t(54669),c=t(31894),a=t(16374),l=t(10370),u=t(69804),s=t(38091),f=t(80217),d=t(57016),m=t(47750),b=t(75004),p=t(29524),v=t.n(p),y=t(54658),w=t(51139),h=t(80373);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function E(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function C(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function g(e,n){return g=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},g(e,n)}function N(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,o=S(e);if(n){var r=S(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return k(this,t)}}function k(e,n){if(n&&("object"===_(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return M(e)}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}function D(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var I=(0,h.Z5)(o=(0,h.TG)(o=(0,m.Pi)(o=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&g(e,n)}(NewbieMissionDetain_BIMD,e);var n,t,o,m=N(NewbieMissionDetain_BIMD);function NewbieMissionDetain_BIMD(){var e;E(this,NewbieMissionDetain_BIMD);for(var n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];return D(M(e=m.call.apply(m,[this].concat(t))),"renderSignIn",(function(){var n,t,o,r,a,l,u,f,d,m=e.context.comboLoginStore,p=m.comboLoginType,y=m.getComboLoginRewardArr,w=e.context.comboLoginStore.getMissioninfo(p)||{},h=w.finishCount,_=(0,i.Ct)(null!==(n=null==y||null===(t=y(w))||void 0===t||null===(o=t[h-1])||void 0===o?void 0:o.rewardAmount)&&void 0!==n?n:0),E=(0,i.Ct)(null!==(r=null===(a=e.context.signInStore)||void 0===a||null===(l=a.signInArr)||void 0===l||null===(u=l[e.context.signInStore.todayIndex])||void 0===u||null===(f=u.rewards)||void 0===f||null===(d=f[0])||void 0===d?void 0:d.ra)&&void 0!==r?r:0);return b.createElement("div",{onClick:e.onCardClick.bind(M(e),!1),className:v().card},b.createElement("div",{className:v().reward1},E||_,b.createElement("span",null,"元")),b.createElement("div",{className:v().detail},"已领取"),b.createElement(s.Z,{className:v().cardBg,src:(0,c.p2)("f4d59674-df3c-456d-9f78-0543c2816451")}),b.createElement("div",{className:v().desc},"连续领返现"))})),D(M(e),"renderBrowse",(function(){var n,t,o,a,l,u=(0,i.Ct)(null!==(n=null===(t=e.context.freeMissionStore.getFreeMission(r.h.SCAN_REWARD))||void 0===t||null===(o=t.extMap)||void 0===o||null===(a=o.mergeReward)||void 0===a||null===(l=a.reduce)||void 0===l?void 0:l.call(a,(function(e,n){return e+(null==n?void 0:n.rewardAmount)}),0))&&void 0!==n?n:0);return b.createElement("div",{onClick:e.onCardClick.bind(M(e),!0),className:v().card},b.createElement("div",{className:v().reward2},u<1?"最高":"",b.createElement("span",null,u<1?1:u),"元"),b.createElement(s.Z,{className:v().cardBg,src:(0,c.p2)("6b9b77f5-4b85-4c99-9ff9-5242361c8a2b")}),b.createElement("div",{className:v().desc},"浏览领返现"))})),D(M(e),"onCardClick",(function(n){(0,w.iH)(n?6571872:6571873),n&&e.onUnload()})),D(M(e),"onUnload",(function(){e.context.popupQueueStore.close("showNewbieMissionDetain")})),D(M(e),"onClose",(function(n){(0,w.iH)(n?6571877:6571874),e.onUnload()})),D(M(e),"onBack",(function(){(0,w.iH)(6571875),y.Z.back()})),e}return n=NewbieMissionDetain_BIMD,(t=[{key:"componentDidMount",value:function(){(0,w.oy)(6571871)}},{key:"render",value:function(){var e=this.context.globalStore.fakeTodayTimeLeft;return b.createElement(f.Z,{onClose:this.onClose.bind(this,!0)},b.createElement("div",{className:v().content},b.createElement(d.Z,{wrapperClass:v().title,text:"今日还有返现<#E02E24#未领取>"}),b.createElement("div",{className:v().time},"仅剩",b.createElement("span",null,(0,a.NF)(e))),b.createElement("div",{className:v().cards},this.renderSignIn(),this.renderBrowse()),b.createElement(u.Z,{onClick:this.onClose.bind(this,!1),text:"去领返现",size:"md",color:"red",width:250,showFinger:!0}),b.createElement("div",{onClick:this.onBack,className:v().sub},"退出")),b.createElement(l.Z,null))}}])&&C(n.prototype,t),o&&C(n,o),NewbieMissionDetain_BIMD}(b.Component))||o)||o)||o}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-fun-cashback/js/popup-NewbieMissionDetain_0a0d17e4f4ba00fa440f.js.map