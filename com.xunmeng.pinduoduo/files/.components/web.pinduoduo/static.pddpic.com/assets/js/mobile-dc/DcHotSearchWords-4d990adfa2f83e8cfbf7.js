(self.webpackChunk_name_mobile_dc=self.webpackChunk_name_mobile_dc||[]).push([["c97f"],{"//ph":function(e,t,r){"use strict";r.d(t,{C:function(){return n}});var n=new(r("K63m").Z)({text:"大促1-10008",alias:"S",value:10008},{text:"大促2-10009",alias:"A",value:10009},{text:"大促3-10010",alias:"B",value:10010},{text:"大促4-10117",alias:"C",value:10117},{text:"大促5-10118",alias:"D",value:10118})},B1pg:function(e,t,r){"use strict";r.d(t,{Ys:function(){return p},Dv:function(){return h},vJ:function(){return b},Ml:function(){return d}});var n=r("/4JS"),o=r.n(n),i=r("xeO4"),a=r.n(i),c=r("T6n4"),s=r.n(c),u=r("nVUW");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=function(){var e=a()(s().mark((function e(t,r){var n,o,i,a=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>2&&void 0!==a[2]?a[2]:{},o="/search_hotquery",e.next=4,r.axios.post(o,t,f({defaultErrorHandler:function(){}},n));case 4:if(i=e.sent){e.next=7;break}throw new u.fB({message:"search_hotquery接口返回异常!",request:t,response:i,url:o});case 7:return e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),h=function(){var e=a()(s().mark((function e(t,r){var n,o,i,a=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=a.length>2&&void 0!==a[2]?a[2]:{},e.next=3,p(t,r,o);case 3:if(null!=(i=e.sent)&&null!==(n=i.hotqs)&&void 0!==n&&n.length){e.next=6;break}throw new u.fB({message:"hotqs热词返回为空",request:t,response:i,url:"/search_hotquery"});case 6:return e.abrupt("return",i.hotqs);case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),b=function(){var e=a()(s().mark((function e(t,r){var n,o,i,a=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=a.length>2&&void 0!==a[2]?a[2]:{},e.next=3,r.axios.get("api/search/hotquery/i2hotq",f({params:t,defaultErrorHandler:function(){}},o));case 3:if(null!=(i=e.sent)&&null!==(n=i.i2q)&&void 0!==n&&n.length||i.is_ignore_warning){e.next=6;break}throw new u.fB({message:"回退搜索词返回为空",request:t,response:i,url:"/api/search/hotquery/i2hotq"});case 6:return e.abrupt("return",i.i2q);case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),d=function(){var e=a()(s().mark((function e(t,r){var n,o,i,a=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=a.length>2&&void 0!==a[2]?a[2]:{},e.next=3,r.axios.get("/search",f({params:t,defaultErrorHandler:function(){}},o));case 3:if(null!=(i=e.sent)&&null!==(n=i.items)&&void 0!==n&&n.length){e.next=6;break}throw new u.fB({message:"搜索异常错误，可能达到最高QPS已限流或搜索词搜索清单数据返回为空",request:t,response:i,url:"search"});case 6:return e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},"3bqy":function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return fe}});var n,o,i,a,c,s,u,l,f,p,h,b,d=r("/4JS"),y=r.n(d),m=r("U5BY"),g=r.n(m),w=r("hwDT"),v=r.n(w),x=r("f6/u"),k=r.n(x),O=r("f17R"),C=r.n(O),W=r("Vl5s"),j=r.n(W),E=r("9bdW"),_=r.n(E),D=r("KdYu"),R=r("iuwq"),S=r("ukrc"),q=r.n(S),N=r("xeO4"),T=r.n(N),z=r("0Qln"),P=r.n(z),I=r("i/Q6"),L=r.n(I),B=r("jXLS"),F=r.n(B),H=(r("XC3m"),r("T6n4")),X=r.n(H),U=r("wfOt"),Y=r("UK90"),A=r("B1pg"),J=r("5oH6"),K=r("//ph"),Z=r("D+Sb"),$=(0,Z.u)([{name:"SINGLE_COL",text:"单排",value:1},{name:"DOUBLE_COL",text:"双排",value:2}]),G=(0,Z.u)([{name:"RECOM",text:"个性化搜索词",value:1},{name:"FIXED",text:"固定搜索词",value:2}]),M=(0,Z.u)([{name:"THREE_COL",text:"一排三个",value:3},{name:"FOUR_COL",text:"一排四个",value:4}]);function Q(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var V,ee,te,re=(n=function(e){k()(d,e);var t,r,n=(t=d,function(){var e,r=j()(t);if(Q()){var n=j()(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return C()(this,e)});function d(){var e;g()(this,d);for(var t=arguments.length,r=new Array(t),y=0;y<t;y++)r[y]=arguments[y];return e=n.call.apply(n,[this].concat(r)),P()(e,"searchWordsType",o,L()(e)),P()(e,"searchRowNum",i,L()(e)),P()(e,"defaultWords",a,L()(e)),P()(e,"$searchWords",c,L()(e)),P()(e,"styleType",s,L()(e)),P()(e,"wordsColor",u,L()(e)),P()(e,"sceneType",l,L()(e)),P()(e,"wordsActivityID",f,L()(e)),P()(e,"categoryIds",p,L()(e)),P()(e,"exCategoryIds",h,L()(e)),P()(e,"shieldWords",b,L()(e)),e}return v()(d,[{key:"isFixedWords",get:function(){return this.searchWordsType===G.FIXED}},{key:"isThreeCol",get:function(){return this.styleType===M.THREE_COL}},{key:"showSearchNum",get:function(){return this.isThreeCol?this.styleType:this.searchRowNum*this.styleType}},{key:"request",value:(r=T()(X().mark((function e(t){var r,n,o=this;return X().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=[],this.isFixedWords){e.next=6;break}return e.next=4,(0,A.Dv)({task:"8",source:this.sceneType,term_blacklist:this.shieldWords,cate_arr:this.categoryIds.map((function(e){return+e})),cate_blacklist:this.exCategoryIds.map((function(e){return+e})),hotqs_quantity:8,query_size:4.5},t);case 4:n=e.sent,r=n;case 6:(0,Y.runInAction)((function(){o.$searchWords=(0,J.qz)(r,o.showSearchNum,o.defaultWords.join())}));case 7:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)})},{key:"getRemark",value:function(){return[this.nickName,"搜索词"]}}]),d}(U.Z),o=F()(n.prototype,"searchWordsType",[Y.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return G.RECOM}}),i=F()(n.prototype,"searchRowNum",[Y.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return $.SINGLE_COL}}),a=F()(n.prototype,"defaultWords",[Y.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),c=F()(n.prototype,"$searchWords",[Y.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),s=F()(n.prototype,"styleType",[Y.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return M.THREE_COL}}),u=F()(n.prototype,"wordsColor",[Y.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"#666"}}),l=F()(n.prototype,"sceneType",[Y.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return K.C.S}}),f=F()(n.prototype,"wordsActivityID",[Y.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),p=F()(n.prototype,"categoryIds",[Y.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),h=F()(n.prototype,"exCategoryIds",[Y.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),b=F()(n.prototype,"shieldWords",[Y.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),F()(n.prototype,"isFixedWords",[Y.computed],Object.getOwnPropertyDescriptor(n.prototype,"isFixedWords"),n.prototype),F()(n.prototype,"isThreeCol",[Y.computed],Object.getOwnPropertyDescriptor(n.prototype,"isThreeCol"),n.prototype),F()(n.prototype,"showSearchNum",[Y.computed],Object.getOwnPropertyDescriptor(n.prototype,"showSearchNum"),n.prototype),n),ne=r("znEX"),oe=r.n(ne),ie=r("MV8a"),ae=r("u2c9"),ce=r.n(ae);function se(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ue(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?se(Object(r),!0).forEach((function(t){y()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):se(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function le(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var fe=q()(oe())(V=(0,D.inject)("store")(V=(0,D.observer)((te=ee=function(e){k()(n,e);var t,r=(t=n,function(){var e,r=j()(t);if(le()){var n=j()(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return C()(this,e)});function n(){return g()(this,n),r.apply(this,arguments)}return v()(n,[{key:"getSearchWords",value:function(){var e=this,t=this.store,r=t.showSearchNum,n=t.$searchWords,o=t.isThreeCol,i=t.wordsActivityID,a=t.wordsColor;return n.slice(0,r).map((function(t,r){var n,c,s=(0,J.zD)(t,i),u=ue(ue({},e.store.getLog(1)),{},{to_url:s,word:t.word});return _().createElement(ie.Z,{key:r,trackingInfo:u},_().createElement("div",{className:ce()((n={},y()(n,oe().threeColWrap,o),y()(n,oe().fourColWrap,!o),n)),style:{color:a},onClick:e.trackForward.bind(e,s,u)},_().createElement("div",{className:ce()((c={},y()(c,oe().threeColWord,o),y()(c,oe().fourColWord,!o),c))},t.word)))}))}},{key:"render",value:function(){var e=this.store,t=e.showSearchNum,r=e.$searchWords,n=e.isThreeCol;return r.length<t?null:_().createElement("div",null,_().createElement(ie.Z,{trackingInfo:this.store.getLog(0)},_().createElement("div",{className:oe().wrapper},n&&_().createElement("div",{className:oe().hotTxt},"热搜:")||null,this.getSearchWords())))}}]),n}(R.Z),ee.Store=re,V=te))||V)||V)||V},znEX:function(e,t,r){var n=r("B5Rm"),o=r("DDs0"),i="string"==typeof n?[[e.id,n,""]]:n;(t=e.exports=n.locals||{})._getContent=function(){return i},t._getCss=function(){return""+n},t._insertCss=function(e){return o(i,e)}},B5Rm:function(e,t,r){(t=e.exports=r("Cgg2")(!1)).push([e.id,'.S68KjtJk{padding-bottom:.1rem;width:100%}._3XilwH-U{display:-webkit-box;display:flex;display:-webkit-flex;-webkit-box-pack:center;justify-content:center;-webkit-justify-content:center;-webkit-box-align:center;align-items:center;-webkit-align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-flex-direction:row;line-height:normal;width:100%;height:100%}.RNLuY9Et{height:.27rem;width:.81rem;vertical-align:top;margin-top:.1rem;background-color:#fff;border-radius:.135rem;line-height:normal;margin-right:.07rem;display:inline-block;font-size:.13rem;overflow:hidden}.RNLuY9Et:last-child,.RNLuY9Et:nth-child(4){margin-right:0}._2GgrW7Ps{height:.2rem;border-radius:.1rem;display:inline-block;width:.87rem;margin-top:.06rem;margin-left:.07rem;background-color:#fff}.DFgqIzw2{line-height:normal;text-align:center;font-size:.12rem;font-weight:700;height:100%;display:-webkit-box;display:flex;display:-webkit-flex;-webkit-box-pack:center;justify-content:center;-webkit-justify-content:center;-webkit-box-align:center;align-items:center;-webkit-align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-flex-direction:row}.nFB1xWcN{color:#fff;font-size:.15rem;margin-right:.04rem;margin-top:.05rem;margin-left:.07rem}.nFB1xWcN,.nFB1xWcN:before{display:inline-block;position:relative;top:.02rem}.nFB1xWcN:before{content:"";margin-right:.03rem;width:.15rem;height:.15rem;background-size:100% 100%;background-image:url("https://promotion.pddpic.com/cart/2020-08-03/145daeb6-ca87-4b3e-9e4d-e5c8c5f11e77_suffix.png")}',""]),t.locals={wrapper:"S68KjtJk",fourColWord:"_3XilwH-U",fourColWrap:"RNLuY9Et",threeColWrap:"_2GgrW7Ps",threeColWord:"DFgqIzw2",hotTxt:"nFB1xWcN"}}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/assets/js/mobile-dc/DcHotSearchWords-4d990adfa2f83e8cfbf7.js.map