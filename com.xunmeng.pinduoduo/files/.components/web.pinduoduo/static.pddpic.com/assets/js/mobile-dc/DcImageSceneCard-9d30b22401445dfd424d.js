(self.webpackChunk_name_mobile_dc=self.webpackChunk_name_mobile_dc||[]).push([["7644"],{axbV:function(e,t,n){"use strict";n.d(t,{re:function(){return a},nE:function(){return s},Sk:function(){return c},gL:function(){return u}});var r=n("m8Qe"),o=n.n(r);function i(e){return e.replace(/_(\w)/g,(function(e,t){return t.toUpperCase()}))}function a(e,t,n){for(var r in t=t||{},n=n||[],e)e.hasOwnProperty(r)&&("object"===o()(e[r])&&null!==e[r]&&-1===n.indexOf(r)?t[i(r)]=a(e[r],Array.isArray(e[r])?[]:{},n):t[i(r)]=e[r]);return t}var s=function(e,t){return e.length>t?e.slice(0,t)+"...":e},c=function(e,t){return e.startsWith(t)?e:t+e},u=function(e,t){return e.startsWith(t)?e.slice(t.length):e}},"/Wvg":function(e,t,n){"use strict";var r=n("9bdW"),o=n.n(r),i=n("TKwH"),a=n.n(i),s=n("04La"),c=n("/uol"),u=n.n(c);t.Z=function(e){return a()(u()),e.isEnd?!1!==e.useEndTips?o().createElement("div",{className:u().endTips},"已经到底啦"):null:o().createElement(s.Z,{className:u().downLoader})}},"m+C7":function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return qe}});var r,o=n("iQtE"),i=n.n(o),a=n("xeO4"),s=n.n(a),c=n("AIhP"),u=n.n(c),l=n("U5BY"),f=n.n(l),d=n("hwDT"),p=n.n(d),m=n("f6/u"),g=n.n(m),v=n("f17R"),b=n.n(v),y=n("Vl5s"),h=n.n(y),_=n("T6n4"),w=n.n(_),k=n("9bdW"),I=n.n(k),E=n("KdYu"),x=n("iuwq"),L=n("wJ16"),C=n("ukrc"),S=n.n(C),N=n("Gncm"),O=n.n(N),P=n("/4JS"),D=n.n(P),T=n("8ZdQ"),j=n.n(T),A=n("TKwH"),R=n.n(A),q=n("xnpn"),$=n("902E"),Q=n("MV8a"),M=n("V56i"),F=n("D+Sb"),V=(0,F.u)([{text:"达芬奇模板",name:"DAVINCI_TEMPLATE",value:1}]),z=(0,F.u)([{text:"固定个数",name:"FIXED_QUANTITY",value:1},{text:"无限加载",name:"INFINITE",value:2}]),W=(0,F.u)([{name:"LANDING",text:"跳转落地页",value:1},{name:"DETAIL",text:"跳转商详",value:2}]);function Z(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var G=(0,E.observer)(r=function(e){g()(r,e);var t,n=(t=r,function(){var e,n=h()(t);if(Z()){var r=h()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return b()(this,e)});function r(){var e;f()(this,r);for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return(e=n.call.apply(n,[this].concat(o))).handleClick=function(t){var n=e.props,r=n.trackForward,o=n.trackingInfo,i=n.cardItem,a=e.store.editors,s=a.landingUrl,c=a.goodsJumpType,u=e.model.keywordId,l=i,f=l.sceneLabelId,d=l.sceneLabelName;c===W.LANDING?r((0,M.Vi)(s,{top_goods:u,list_token:u,scene_label_id:f,scene_label_name:d}),o):e.onItemClick(t)},e}return p()(r,[{key:"store",get:function(){return this.props.componentStore}},{key:"render",value:function(){var e=this.props,t=e.index,n=e.trackingInfo,r=this.store.templateStore;return I().createElement(Q.Z,{key:t,trackingInfo:n},I().createElement("div",{onClick:this.handleClick},I().createElement(q.Z,{index:t,id:t,data:this.model,json:r.template})))}}]),r}($.Z))||r,U=n("VRmg"),K=n("2tVT"),Y=n("axbV");function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){D()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var X,H,ee,te,ne,re,oe,ie,ae=(0,E.observer)((function(e){var t,n,r=e.cardIndex,o=e.cardItem,i=e.componentStore,a=e.trackForward;R()(j());var s=i.editors,c=s.titileStyle,l=s.bgImgList,f=r%l.length,d=null===(t=l[f])||void 0===t?void 0:t.url;return I().createElement(K.ZP,{className:j().container,backgroundImage:d},I().createElement("div",{className:j().scene,onClick:function(){var e=i.editors.landingUrl,t=o.sceneLabelId,n=o.sceneLabelName;e&&a((0,M.Vi)(e,{scene_label_id:t,scene_label_name:n}),{},1)}},I().createElement("span",{className:j().sceneLabel,style:c},null!=o&&o.sceneLabelName?(0,Y.Sk)(null==o?void 0:o.sceneLabelName,"#"):"")),null===(n=o.goodsList)||void 0===n?void 0:n.map((function(e,t){var n=(0,U.sl)({index:t,goodsItem:e,componentStore:i,pageElSnIndex:2}),r=e.keywordId,s={index:f,model:e,cardItem:o,componentStore:i,trackingInfo:J(J({},n),{},{extra_info:JSON.stringify({scene_label_id:o.sceneLabelId,keyword_id:r,image_label_source:o.imageLabelSource})}),trackForward:a};return I().createElement(G,u()({key:t},s))})))})),se=n("azrQ"),ce=S()(j())((0,E.observer)((function(e){var t=e.store,n=e.bgImg;return I().createElement(K.ZP,{className:j().container,backgroundImage:n},I().createElement("div",{className:j().scene},I().createElement("span",{className:j().sceneLabel,style:t.editors.titileStyle})),Array(4).fill("").map((function(e,n){return I().createElement("div",{key:n},I().createElement(se.x,{count:1,skeleton:t.templateStore.skeleton}))})))}))),ue=D()({},V.DAVINCI_TEMPLATE,{StyleComponent:ae,SkeletonComponent:ce}),le=S()(O())((0,E.observer)((function(e){var t=e.store,n=t.editors,r=n.styleType,o=n.bgImgList,i=t.UIStore.style,a=t.$pageSize,s=ue[r].SkeletonComponent;return I().createElement("div",{className:O().container,style:i},Array(a).fill("").map((function(e,n){var r,i=null===(r=o[n%o.length])||void 0===r?void 0:r.url;return I().createElement(s,{key:n,bgImg:i,store:t})})))}))),fe=le,de=n("vuIA"),pe=n("/Wvg"),me=n("0Qln"),ge=n.n(me),ve=n("i/Q6"),be=n.n(ve),ye=n("jXLS"),he=n.n(ye),_e=(n("XC3m"),n("UK90")),we=n("2ZWC"),ke=n("s0Le"),Ie=n("Skb2"),Ee=n("nC4b"),xe=n("V5cf");function Le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Le(Object(n),!0).forEach((function(t){D()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Le(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Se(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var Ne,Oe,Pe,De,Te=(X=_e.observable.shallow,H=_e.action.bound,ee=_e.action.bound,te=function(e){g()(o,e);var t,n,r=(t=o,function(){var e,n=h()(t);if(Se()){var r=h()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return b()(this,e)});function o(){var e;f()(this,o);for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return(e=r.call.apply(r,[this].concat(n))).editors={subjectId:"",styleType:V.DAVINCI_TEMPLATE,requestMode:z.FIXED_QUANTITY,fixedNum:1,titileStyle:{color:"#fff",top:"0rem",left:"0rem",fontSize:".25rem"},goodsJumpType:W.LANDING,landingUrl:"",bgImgList:[{url:""}]},e.templateStore=(0,ke.$)(be()(e)),ge()(e,"$pageNo",ne,be()(e)),ge()(e,"$hasMore",re,be()(e)),ge()(e,"$sceneCardList",oe,be()(e)),ge()(e,"queryContentResult",ie,be()(e)),e.getRemark=function(){return[e.nickName,"场景标签入口","关键词入口"]},e}return p()(o,[{key:"$pageSize",get:function(){return this.editors.requestMode===z.FIXED_QUANTITY?this.editors.fixedNum:10}},{key:"dataFormat",value:function(e){var t=this;return e.slice(0,this.$pageSize).map((function(e){var n,r,o,a,s,c=null!==(n=e.content_id)&&void 0!==n?n:"",u=null!==(r=e.content_name)&&void 0!==r?r:"",l=null===(o=e.content_extend)||void 0===o?void 0:o.image_label_source,f=null===(a=e.goods_list)||void 0===a||null===(s=a.slice(0,4))||void 0===s?void 0:s.map((function(e){var n,r,o,a,s=i()(new Set((e.goods_tags||[]).map((function(e){return e.text})).filter((function(e){return e})))),c=Ce(Ce({},new Ee.ZP(e,{imgType:t.imgType})),{},{keywordId:null!==(n=null==e||null===(r=e.goods_extend)||void 0===r?void 0:r.keyword_id)&&void 0!==n?n:"",keywordName:null!==(o=null==e||null===(a=e.goods_extend)||void 0===a?void 0:a.keyword_name)&&void 0!==o?o:"",tag1:null==s?void 0:s[0],tag2:null==s?void 0:s[1]});return(0,U.NR)(c,{isTemplate:!0,extraKey:["keywordId"],store:t})}));return{sceneLabelId:c,sceneLabelName:u,imageLabelSource:l,goodsList:null!=f?f:[]}}))}},{key:"afterInit",value:function(){this.$sceneCardList=this.$sceneCardList.map((function(e){return Ce(Ce({},e),{},{goodsList:(0,U.Ag)(e.goodsList)})}))}},{key:"request",value:(n=s()(w().mark((function e(){var t,n=this;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.queryContentResult();case 3:t=e.sent,(0,_e.runInAction)((function(){var e=t.content_list;n.editors.requestMode===z.INFINITE?(n.$sceneCardList=n.$sceneCardList.concat(n.dataFormat(e)),n.$pageNo++,n.$hasMore=(null==t?void 0:t.has_more)&&!(null!=t&&t.is_back_up)):n.$sceneCardList=n.dataFormat(e)})),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),this.$hasMore=!1,this.logError(e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,7]])}))),function(){return n.apply(this,arguments)})}]),o}(we.ZP),ne=he()(te.prototype,"$pageNo",[_e.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),re=he()(te.prototype,"$hasMore",[_e.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),oe=he()(te.prototype,"$sceneCardList",[X],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),ie=he()(te.prototype,"queryContentResult",[H],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return s()(w().mark((function t(){var n,r;return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={subject_id:e.editors.subjectId,group:xe.G_.PROM_IMAGE_LABEL_REC,list_id:e.requestParams.listId,page_no:e.$pageNo,page_size:e.$pageSize,min_display_num:1,goods_count:4,min_display_goods_num:4,list_token:(0,U.AG)(e.rootStore.requestContext.queries),extra_param:Ce({},e.useBusinessIcon&&e.tag?{goods_tag_code:e.tag}:{})},t.next=3,(0,Ie.$Z)(n,e.requestParams,{notSendErrorWhenBackUp:!0});case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))}}),he()(te.prototype,"dataFormat",[_e.action],Object.getOwnPropertyDescriptor(te.prototype,"dataFormat"),te.prototype),he()(te.prototype,"request",[ee],Object.getOwnPropertyDescriptor(te.prototype,"request"),te.prototype),te),je=n("G2FM"),Ae=n("UzMC");function Re(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var qe=S()(O())(Ne=(0,E.inject)("store")(Ne=(0,E.observer)((Pe=Oe=function(e){g()(o,e);var t,n,r=(t=o,function(){var e,n=h()(t);if(Re()){var r=h()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return b()(this,e)});function o(){var e;f()(this,o);for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return(e=r.call.apply(r,[this].concat(n))).couponPriceRemover=void 0,e.renderList=function(){var t=e.store,n=t.editors,r=t.$sceneCardList,o=n.styleType,i=ue[o].StyleComponent;return r.map((function(t,n){var r={cardIndex:n,cardItem:t,componentStore:e.store,trackForward:e.trackForward};return I().createElement(i,u()({key:n},r))}))},e}return p()(o,[{key:"componentDidMount",value:(n=s()(w().mark((function e(){var t=this;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,je.Rj)(this.store.templateStore)){e.next=5;break}return e.next=4,Ae.ZP.register({store:this.store,merchantTag:Ae.tJ.COMMON,updateGoodsList:function(e){t.store.$sceneCardList.forEach((function(t){t.goodsList.forEach((function(t){var n=t.goodsId;e[n]&&(0,Ae.b1)(e[n],t)}))}))},getGoodsIdList:function(){var e=t.store.$sceneCardList.reduce((function(e,t){var n=t.goodsList;return e.push.apply(e,i()(n.map((function(e){return e.goodsId})))),e}),[]);return i()(new Set(e))}});case 4:this.couponPriceRemover=e.sent;case 5:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"componentWillUnmount",value:function(){var e;null===(e=this.couponPriceRemover)||void 0===e||e.call(this)}},{key:"render",value:function(){if(!this.store.$sceneCardList.length)return null;var e=this.store,t=e.editors,n=e.$hasMore,r=t.requestMode;return I().createElement("div",{className:O().container,style:this.style},De||(De=I().createElement(L.k,null)),this.renderList(),r===z.INFINITE&&I().createElement(de.r,{rootMargin:"800px",isEnd:!n,onLoad:this.store.request},I().createElement(pe.Z,{isEnd:!n})))}}]),o}(x.Z),Oe.Store=Te,Oe.SkeletonComponent=fe,Ne=Pe))||Ne)||Ne)||Ne},"/uol":function(e,t,n){var r=n("qEvW"),o=n("DDs0"),i="string"==typeof r?[[e.id,r,""]]:r;(t=e.exports=r.locals||{})._getContent=function(){return i},t._getCss=function(){return""+r},t._insertCss=function(e){return o(i,e)}},"8ZdQ":function(e,t,n){var r=n("f1pV"),o=n("DDs0"),i="string"==typeof r?[[e.id,r,""]]:r;(t=e.exports=r.locals||{})._getContent=function(){return i},t._getCss=function(){return""+r},t._insertCss=function(e){return o(i,e)}},Gncm:function(e,t,n){var r=n("zgqw"),o=n("DDs0"),i="string"==typeof r?[[e.id,r,""]]:r;(t=e.exports=r.locals||{})._getContent=function(){return i},t._getCss=function(){return""+r},t._insertCss=function(e){return o(i,e)}},qEvW:function(e,t,n){(t=e.exports=n("Cgg2")(!1)).push([e.id,'._2tgQEqKw{position:relative;margin:0 auto;width:-webkit-max-content;width:max-content;font-size:.12rem;line-height:.4rem;height:.4rem;color:#fff}._2tgQEqKw:after,._2tgQEqKw:before{content:"";position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:.3rem;height:.01rem;background-color:#fff}._2tgQEqKw:before{left:-.4rem}._2tgQEqKw:after{right:-.4rem}.E2WBqGSS{color:#fff}',""]),t.locals={endTips:"_2tgQEqKw",downLoader:"E2WBqGSS"}},f1pV:function(e,t,n){(t=e.exports=n("Cgg2")(!1)).push([e.id,"._3AvWFfrx{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;justify-content:space-evenly;background-repeat:no-repeat;background-size:100% 100%;padding-top:.03rem}._3AvWFfrx>div{margin-bottom:.03rem}._3NiH1m4l{position:relative;width:2.33rem}._3QbTV9hR{position:absolute}",""]),t.locals={container:"_3AvWFfrx",scene:"_3NiH1m4l",sceneLabel:"_3QbTV9hR"}},zgqw:function(e,t,n){(t=e.exports=n("Cgg2")(!1)).push([e.id,"._7EfIfQbe{padding:0 .09rem}._7EfIfQbe>div{margin-bottom:.15rem}._7EfIfQbe>div:last-child{margin-bottom:0}",""]),t.locals={container:"_7EfIfQbe"}}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/assets/js/mobile-dc/DcImageSceneCard-9d30b22401445dfd424d.js.map