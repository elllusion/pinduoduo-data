(self.webpackChunkmobile_fun_cashback=self.webpackChunkmobile_fun_cashback||[]).push([[1725],{81154:function(e){e.exports={wrapper:"_2aSuLv",title:"_3vFuoj",record:"_1bFuvQ",mulRecord:"yUNY5T",recordText:"zjcQxi",recordImg:"_2zg9rJ",desc:"_1YRhYE",descAmount:"RsUhII",banner:"_39rmrP",arrow:"TSS1DS",amount:"_2QfPek",unit:"_1UNPxW",recordWrapper:"_13JeXX",tips:"_3O2s6e",commonFadeIn:"_1tX9Y6",commonFadeOut:"Xzq8T0",rotate360:"_2GoqET",commonScaleOut:"oLfNRx",commonScaleIn:"_3TAJ67"}},57631:function(e,t,n){"use strict";n.r(t);var r,o=n(75004),c=n(47750),i=n(28064),a=n(81154),u=n.n(a),l=n(897),s=n.n(l),p=n(69017),f=n(67996),m=n(31894),d=n(54669),h=n(38091),b=n(92498),v=n(51139),y=n(80373);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function w(e,t,n,r,o,c,i){try{var a=e[c](i),u=a.value}catch(e){return void n(e)}a.done?t(u):Promise.resolve(u).then(r,o)}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t){return _=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},_(e,t)}function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=N(e);if(t){var o=N(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return E(this,n)}}function E(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return I(e)}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e){return N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},N(e)}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=(0,y.Z5)(r=(0,y.TG)(r=(0,c.Pi)(r=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(NewbieOutOrderPopup_BIMD,e);var t,n,r,c,a,l=x(NewbieOutOrderPopup_BIMD);function NewbieOutOrderPopup_BIMD(){var e;g(this,NewbieOutOrderPopup_BIMD);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return P(I(e=l.call.apply(l,[this].concat(n))),"state",{showAmountTips:!1,counter:3}),P(I(e),"onClose",(function(t){"event"===t?((0,v.oe)(6436438),(0,v.iH)(6436438,{cardClick:1})):(0,v.iH)("icon"===t?6436439:6436438),e.context.popupQueueStore.close("showNewbieOutOrderPopup");var n=e.context,r=n.grayStore,o=n.globalStore,c=n.cashCenterStore,i=n.popupQueueStore,a=n.signInStore;e.context.newbieGuideStore.handleNextGuideProcess({grayStore:r,globalStore:o,cashCenterStore:c,popupQueueStore:i,signInStore:a,isOutOrder:!0})})),e}return t=NewbieOutOrderPopup_BIMD,n=[{key:"componentDidMount",value:(c=regeneratorRuntime.mark((function e(){var t,n,r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.context.globalStore,(0,v.oy)(6436437),e.next=4,(0,d.Dc)(500);case 4:if(!this.context.comboLoginStore.comboLoginType){e.next=10;break}return e.next=8,this.context.comboLoginStore.completeCardMission({globalStore:t});case 8:e.next=13;break;case 10:if(!this.context.signInStore.canGainSignInReward){e.next=13;break}return e.next=13,null===(n=this.context.signInStore.gainSignInReward())||void 0===n?void 0:n.then((function(e){var t=e.pointAmount,n=e.reward;r.context.globalStore.setPoint(t,n)}));case 13:(0,d.Dc)(3e3).then((function(){r.setState({showAmountTips:!0}),r.timer=setInterval((function(){var e=r.state.counter;e?r.setState({counter:e-1}):(clearInterval(r.timer),r.onClose("event"))}),1e3)}));case 14:case"end":return e.stop()}}),e,this)})),a=function(){var e=this,t=arguments;return new Promise((function(n,r){var o=c.apply(e,t);function i(e){w(o,n,r,i,a,"next",e)}function a(e){w(o,n,r,i,a,"throw",e)}i(void 0)}))},function(){return a.apply(this,arguments)})},{key:"componentWillUnmount",value:function(){this.timer&&clearInterval(this.timer)}},{key:"render",value:function(){var e=this.context.globalStore,t=e.dailyOuterOrderList,n=e.pointsAmount,r=void 0===n?0:n,c=e.pointsTurnSelf,a=void 0!==c&&c,l=t.filter((function(e){return!e.gain})),v=(null==l?void 0:l[0])||{},y=v.thumbUrl,S=void 0===y?"":y,w=v.goodsName,g=void 0===w?"":w,O=v.orderAmount,_=l.length>1,x=this.state,E=x.showAmountTips,I=x.counter;return o.createElement(i.wI,{onClose:this.onClose.bind(this,"icon"),bgLight:"light",closeIconStyle:{right:(0,p.S)(28)},showTitleStar:!0,popupScaleIn:!1},o.createElement("div",{className:u().wrapper},o.createElement("div",{className:u().title},o.createElement(f.Z,{text:"恭喜通过以下订单, 获得"}),o.createElement(f.Z,{start:"#FFEBA6",end:"#FFDB3C",text:"大额返现"})),o.createElement("div",{className:u().amount},o.createElement(b.Z,{value:r,duration:3,turnSelf:a,fixScrollByValueChange:!0,turns:1}),o.createElement("div",{className:u().unit},E?o.createElement("div",{className:u().tips},"已翻倍"):null,"元")),o.createElement("div",{className:s()(u().record,P({},u().mulRecord,_))},o.createElement(h.Z,{src:_?(0,m.E$)("goods_banner3"):(0,m.p2)("goods_arrow2"),className:_?u().banner:u().arrow}),o.createElement("div",{className:u().recordWrapper},o.createElement(h.Z,{src:S,className:u().recordImg}),o.createElement("div",{className:u().recordText},(0,d.VQ)(g,12),o.createElement("p",null,"¥",O/100)))),o.createElement("div",{className:u().desc},o.createElement(i.DD,{text:"已存入返现余额，可提现至<{cash%15%}#FFE268#微信零钱>"})),o.createElement(i.un,{text:E&&I?"去提现（".concat(I,"秒）"):"去提现",size:"md",width:290,color:"red",onClick:this.onClose.bind(this,"btn"),showFinger:E})))}}],n&&O(t.prototype,n),r&&O(t,r),NewbieOutOrderPopup_BIMD}(o.Component))||r)||r)||r;t.default=k}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-fun-cashback/js/popup-NewbieOutOrderPopup_f630a626d3b070c762a6.js.map