(self.webpackChunkmobile_fun_cashback=self.webpackChunkmobile_fun_cashback||[]).push([[2652],{75664:function(e){e.exports={content:"_3LyIuy",header:"_1qKpCs",goods:"_3Ne7b3",left:"_2MPqqx",leftPrice:"_1nKysg",leftImg:"_2wkO1y",right:"_2br8nq",rightAdd:"_3WUvsA",rightText:"_7HDGjU",multiGoods:"_1zpAKG",title:"_3TLJy5",guide:"_3n6FQq",guideText:"_2qKkln",guideImg:"_3vBYh5",btn:"_3ZNEHI",tip:"_1m5f1j",subBtn:"fI_P6o",bannberLight:"_2t-p13",commonFadeIn:"wlmWyq",commonFadeOut:"_1fxm3G",rotate360:"_5cpDGt",commonScaleOut:"_3924sW",commonScaleIn:"_1xedsn"}},46149:function(e,t,r){"use strict";r.r(t);var n=r(75004),o=r(47750),l=r(28064),i=r(897),a=r.n(i),c=r(75664),u=r.n(c),s=r(738),d=r(31894),m=r(67996),f=r(54669),g=r(54658),p=r(15001),b=r(50806),v=r(69017),h=r(98534),_=r(58303),y=r(80373);function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){w(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,l=[],i=!0,a=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);i=!0);}catch(e){a=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(a)throw o}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return j(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return j(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var D=function(){return(0,b.oy)(!0)},k=(0,o.Pi)((function(){var e=(0,s.AG)(),t=e.popupQueueStore,r=e.freeOrderStore,o=function(){t.close("showFreeOrderDetain"),g.Z.back()},i=r.freeOrderProgress,c=r.freeOrderInfo,b=(c||{}).targetAmount,y=1===b,E=N((0,h.hk)({targetDate:1e3*c.expireTime,onEnd:function(){o(),D()}}),2)[1].timeDayStr,j=N((0,n.useState)([]),2),k=j[0],A=j[1];(0,h.b6)((function(){var e={page_sn:104366,app_name:"cashback_freeorder",list_id:"cashback_freeorder_".concat((0,f.zO)(6).toString(),"_0")};y&&(0,_.dM)(e).then((function(e){var t,r;A(null==e||null===(t=e.item_list)||void 0===t||null===(r=t.slice(0,3))||void 0===r?void 0:r.map((function(e){var t,r,n,o,l,i,a,c;return O(O({},e),{},{thumbUrl:null!==(t=null==e||null===(r=e.goods)||void 0===r?void 0:r.hd_thumb_url)&&void 0!==t?t:"",goodsAmount:null!==(n=null!==(o=null==e||null===(l=e.goods)||void 0===l||null===(i=l.group)||void 0===i?void 0:i.promo_price)&&void 0!==o?o:null==e||null===(a=e.goods)||void 0===a||null===(c=a.group)||void 0===c?void 0:c.group_price)&&void 0!==n?n:0})})))}))}));var S=y?k:i;return n.createElement(l.wI,{onClose:o,showBannerLight:!0,closeIconStyle:{top:(0,v.Z)(-89)},bannerLightCls:u().bannberLight},n.createElement("div",{className:u().content},n.createElement("div",{className:u().header},n.createElement(m.Z,{textArr:[["你还有"],["免单特权","#FFEBA6","#FFD200"],["未使用","#FFFBED","#FDDD99"]]})),n.createElement("div",{className:u().title},n.createElement(l.DD,{text:y?"全场任意拼1单<#E02E24#立享免单>":"再拼1单，以下商品<#E02E24#必免1单>"})),n.createElement("div",{className:a()(u().goods,w({},u().multiGoods,b>2||y))},null==S?void 0:S.map((function(e){var t=e.thumbUrl,r=e.goodsAmount;return n.createElement("div",{className:u().left},n.createElement("img",{src:t,className:u().leftImg}),n.createElement("div",{className:u().leftPrice},"¥",(0,f.Ct)(r)))})),y?null:n.createElement("div",{className:u().right},n.createElement("img",{src:(0,d.E$)("cashback_order_free_notice_add"),className:u().rightAdd}),n.createElement("div",{className:u().rightText},"待拼1单"))),n.createElement("div",{className:u().btn},n.createElement(l.un,{size:"md",color:"red",width:250,tipsText:"距结束".concat(E),text:y?"立享免单":"去拼单，享免单",tipCls:u().tip,showFinger:!0,onClick:function(){t.close("showFreeOrderDetain"),(0,p.C3)(D,{drawGoodsList:JSON.stringify(k.map((function(e){var t,r;return null==e||null===(t=e.goods)||void 0===t||null===(r=t.ad)||void 0===r?void 0:r.goods_id})))})}})),n.createElement("div",{className:u().subBtn,onClick:o},"退出")),n.createElement("div",{className:u().guide},n.createElement("div",{className:u().guideText},"从「个人中心-拼单返现」进入可领返现"),n.createElement("img",{src:(0,d.p2)("entry_bg"),className:u().guideImg})))}));t.default=(0,y.Z5)(k)}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-fun-cashback/js/popup-freeOrderDetain_0f7adb56fa0301184d57.js.map