(self.webpackChunk_name_mobile_dc=self.webpackChunk_name_mobile_dc||[]).push([["9cff"],{"25h1":function(t,e,r){"use strict";r.d(e,{c:function(){return s}});var n=r("swbT"),o=r("lb/N"),i=r("2tVT"),a=function t(e,r,i,a){if(e)return new Promise((function(c){if(r){a=a||c;var s=new Image;s.onload=a,s.onerror=function(){t(e,r-1,i,a),(0,n.y7)(new Error("【图片未成功加载】：".concat(e)))},s.src=(0,o.Z)(e)}else i.push(e),a()}))},c=function(t){var e=[];return Promise.all([].concat(t).map((function(t){return a(t,2,e,null)}))).then((function(){return e}))},s=function(t,e){c(t.map((function(t){return(0,i.BT)(t,e)})))};e.Z=c},"Th+S":function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return Dt}});var n=r("xeO4"),o=r.n(n),i=r("/4JS"),a=r.n(i),c=r("0Qln"),s=r.n(c),u=r("U5BY"),l=r.n(u),f=r("hwDT"),p=r.n(f),h=r("i/Q6"),g=r.n(h),d=r("f6/u"),m=r.n(d),y=r("f17R"),b=r.n(y),v=r("Vl5s"),w=r.n(v),k=r("jXLS"),D=r.n(k),O=(r("XC3m"),r("T6n4")),x=r.n(O),_=r("9bdW"),P=r.n(_),j=r("KdYu"),R=r("UK90"),E=r("25h1"),C=r("wfOt"),I=r("VqmC");function S(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function A(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?S(Object(r),!0).forEach((function(e){a()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var z,N;function T(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var V,B,F,M,U,Z,X=(z=function(t){m()(n,t);var e,r=(e=n,function(){var t,r=w()(e);if(T()){var n=w()(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return b()(this,t)});function n(){var t;l()(this,n);for(var e=arguments.length,o=new Array(e),i=0;i<e;i++)o[i]=arguments[i];return t=r.call.apply(r,[this].concat(o)),s()(t,"imgData",N,g()(t)),t.getRemark=function(){var e=[];return t.imgData.map((function(t){e.push(t.name),e.push((t.rects||[]).map((function(t){return t.nickName})))})),e.push("对话框"),e},t}return p()(n,[{key:"afterInit",value:function(){this.imgData.forEach((function(t){t.popDialogs||(0,R.set)(t,{popDialogs:[]})}))}}]),n}(C.Z),N=D()(z.prototype,"imgData",[R.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[A(A({id:1,imgUrl:"//funimg.pddpic.com/act180115/promo_new_year/banner_icon_l_1.png",url:"",name:"",width:0,height:0},I.Ou),{},{popDialogs:[]})]}}),z),K=X,L=r("iuwq"),Y=r("rst1"),H=r.n(Y),J=r("ukrc"),$=r.n(J),q=r("MV8a"),G=r("V56i"),Q=r("U/sb"),W=r.n(Q),tt=r("2tVT"),et=r("Z6Bh"),rt=r("u2c9"),nt=r.n(rt),ot=r("9vur");function it(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var at,ct,st,ut,lt,ft=function(t,e){return Math.max(parseFloat(t.toFixed(e)),0)},pt=new(p()((function t(){var e=this;l()(this,t),this.addTask=function(t){e.tasks.push(t),e.excuteTask()},this.excuteTask=o()(x().mark((function t(){var r;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isExcuting){t.next=4;break}return t.abrupt("return");case 4:if(!e.tasks.length){t.next=11;break}return e.isExcuting=!0,r=e.tasks.pop(),t.next=9,r();case 9:e.isExcuting=!1,e.excuteTask();case 11:case"end":return t.stop()}}),t)}))),this.tasks=[],this.isExcuting=!1}))),ht=(V=$()(W()),B=(0,j.inject)("store"),F=R.action.bound,V(M=B(M=(0,j.observer)((U=function(t){m()(i,t);var e,r,n=(e=i,function(){var t,r=w()(e);if(it()){var n=w()(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return b()(this,t)});function i(){var t;l()(this,i);for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(t=n.call.apply(n,[this].concat(r))).handleDrag=function(e){var r=e.top,n=e.left;n>=0&&r>=0&&(0,R.runInAction)((function(){t.store.x=ft(n/100,2),t.store.y=ft(r/100,2)}))},s()(t,"$shouldShowDialogAni",Z,g()(t)),t}return p()(i,[{key:"DragNode",get:function(){var t;return null===(t=this.rootStore.editorContext)||void 0===t?void 0:t.DragNode}},{key:"editorX",get:function(){return 100*this.store.x}},{key:"editorY",get:function(){return 100*this.store.y}},{key:"renderDragNode",value:function(){var t=this.DragNode;return t&&P().createElement(t,{onDrag:this.handleDrag,top:this.editorY,left:this.editorX})}},{key:"showDialogAni",value:(r=o()(x().mark((function t(){return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.$shouldShowDialogAni=!0,t.next=3,(0,ot._)(1500);case 3:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},{key:"componentWillUnmount",value:function(){this.interval&&clearInterval(this.interval)}},{key:"renderPopDialog",value:function(t){var e,r=this.showDialogAni,n=this.$shouldShowDialogAni,o=this.store,i=o.text,c=o.l;return P().createElement(et.Z,{onEnter:function(){pt.addTask(r)}},P().createElement(tt.ZP,{style:t,className:nt()(W().dialog,(e={},a()(e,W().dialogAni,n),a()(e,W().dialogAniToRight,!c),a()(e,W().dialogAniToLeft,!!c),e)),backgroundImage:c?"//promotion.pddpic.com/promo/2020-04-14/f79a3107-79fc-4e31-ae33-d9ff40685d05.png":"//promotion.pddpic.com/promo/2020-04-14/d0dc611c-0c02-41e3-9b3a-dd497d078c99.png"},P().createElement("div",{className:nt()(W().dialogText,a()({},W().textAni,n))},i),this.rootStore.isEditor&&this.renderDragNode()))}},{key:"render",value:function(){var t=this.rootStore.isEditor?{top:this.editorY,left:this.editorX}:{top:"".concat(this.store.y,"rem"),left:"".concat(this.store.x,"rem")};return this.renderPopDialog(t)}}]),i}(L.Z),D()(U.prototype,"editorX",[R.computed],Object.getOwnPropertyDescriptor(U.prototype,"editorX"),U.prototype),D()(U.prototype,"editorY",[R.computed],Object.getOwnPropertyDescriptor(U.prototype,"editorY"),U.prototype),Z=D()(U.prototype,"$shouldShowDialogAni",[R.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),D()(U.prototype,"showDialogAni",[F],Object.getOwnPropertyDescriptor(U.prototype,"showDialogAni"),U.prototype),M=U))||M)||M)||M),gt=ht,dt=r("BFRN"),mt=r("eEnm"),yt=r("VCAa");function bt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function vt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?bt(Object(r),!0).forEach((function(e){a()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):bt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function wt(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var kt=$()(H())(at=(0,j.inject)("store")(at=(0,j.observer)((lt=ut=function(t){m()(i,t);var e,r,n=(e=i,function(){var t,r=w()(e);if(wt()){var n=w()(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return b()(this,t)});function i(){var t;l()(this,i);for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return t=n.call.apply(n,[this].concat(r)),s()(t,"$shouldPopDialog",st,g()(t)),t.getExtraUrlParams=function(t){return vt({to_url:(0,G.mE)(t)},(0,G.mB)(t))},t.renderSingleImg=function(e,r){var n=t.store.getLog,o="concat-images-component-".concat(t.componentId,"-").concat(r),i=t.store.getRemark().indexOf(e.name),a=n(i),c=vt(vt({},n(i)),t.getExtraUrlParams(e.url));return P().createElement("div",{className:H().verticalSlide,style:{minHeight:(0,yt.Q1)(e.height/2-1)},key:r,onClick:t.onImgClick.bind(g()(t),{url:e.url,trackingInfo:c})},P().createElement(q.Z,{blockId:o,trackingInfo:c},P().createElement(dt.Z,{src:e.imgUrl,lazy:r>=4,className:H().verticalImg})),P().createElement(mt.Z,{item:e,rootStore:t.rootStore,trackingInfo:a,getLog:function(e){return t.store.getLogByMultiIndex(i+1,e)}}),t.$shouldPopDialog&&t.renderPopDialogs(e))},t.renderPopDialogs=function(e){var r=t.store.getRemark().length-1,n=t.store.getLog(r);return P().createElement(P().Fragment,null,(e.popDialogs||[]).map((function(e,r){return P().createElement(q.Z,{key:r,trackingInfo:vt(vt({},n),{},{pop_text:e.text})},P().createElement(gt,{componentStore:e,store:t.rootStore}))})))},t}return p()(i,[{key:"onImgClick",value:function(t,e){var r=t.url,n=t.trackingInfo,o=void 0===n?{}:n;r&&e.stopPropagation(),this.trackForward(r,o)}},{key:"componentDidMount",value:(r=o()(x().mark((function t(){var e=this;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,E.Z)(this.store.imgData.slice(0,4).map((function(t){return t.imgUrl})));case 2:(0,R.runInAction)((function(){e.$shouldPopDialog=!0}));case 3:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},{key:"render",value:function(){return P().createElement("div",{className:H().verticalContainer},this.store.imgData.map(this.renderSingleImg))}}]),i}(L.Z),ut.Store=K,ct=lt,st=D()(ct.prototype,"$shouldPopDialog",[R.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),at=ct))||at)||at)||at,Dt=kt},VqmC:function(t,e,r){"use strict";r.d(e,{Eu:function(){return i},D_:function(){return a},Ou:function(){return c}});var n=r("K63m"),o=["244, 67, 54","3, 169, 1","3, 169, 244","255, 233, 36","156, 39, 176","245, 34, 45","139, 195, 74","255, 193, 7","158, 158, 158"],i=function(t){return"rgba(".concat(o[t%o.length],", 0.7)")},a=new n.Z({alias:"ANCHOR_JUMP",text:"热区锚点",value:0},{alias:"HOT_JUMP",text:"热区跳转",value:1}),c={rects:[],clickMode:a.HOT_JUMP}},eEnm:function(t,e,r){"use strict";r.d(e,{Z:function(){return it}});var n,o,i,a,c,s,u,l,f,p,h,g,d,m,y=r("U5BY"),b=r.n(y),v=r("hwDT"),w=r.n(v),k=r("f6/u"),D=r.n(k),O=r("f17R"),x=r.n(O),_=r("Vl5s"),P=r.n(_),j=r("9bdW"),R=r.n(j),E=r("KdYu"),C=r("/4JS"),I=r.n(C),S=r("jXLS"),A=r.n(S),z=r("mwIZ"),N=r.n(z),T=r("UK90"),V=r("0Qln"),B=r.n(V),F=(r("XC3m"),n=w()((function t(){b()(this,t),B()(this,"id",o,this),B()(this,"nickName",i,this),B()(this,"url",a,this),B()(this,"x",c,this),B()(this,"y",s,this),B()(this,"width",u,this),B()(this,"height",l,this),B()(this,"zIndex",f,this),B()(this,"hashPointId",p,this)})),o=A()(n.prototype,"id",[T.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),i=A()(n.prototype,"nickName",[T.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),a=A()(n.prototype,"url",[T.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),c=A()(n.prototype,"x",[T.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),s=A()(n.prototype,"y",[T.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),u=A()(n.prototype,"width",[T.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.5}}),l=A()(n.prototype,"height",[T.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.5}}),f=A()(n.prototype,"zIndex",[T.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),p=A()(n.prototype,"hashPointId",[T.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),n),M=r("fl51"),U=r.n(M),Z=r("ukrc"),X=r.n(Z),K=r("iuwq"),L=r("VoVD"),Y=r("V56i"),H=r("VqmC"),J=r("VCAa"),$=r("MV8a");function q(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function G(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?q(Object(r),!0).forEach((function(e){I()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function Q(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var W,tt=function(t,e){return parseFloat(t.toFixed(e))},et=X()(U())(h=(0,E.inject)("store")(h=(0,E.observer)((m=d=function(t){D()(n,t);var e,r=(e=n,function(){var t,r=P()(e);if(Q()){var n=P()(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return x()(this,t)});function n(){var t;b()(this,n);for(var e=arguments.length,o=new Array(e),i=0;i<e;i++)o[i]=arguments[i];return(t=r.call.apply(r,[this].concat(o))).handleClickRect=function(e){e.stopPropagation(),t.props.clickMode===H.D_.ANCHOR_JUMP&&t.store.hashPointId?(0,J.Fw)(t.rootStore,t.store.hashPointId):t.props.clickMode===H.D_.HOT_JUMP&&t.store.url&&(0,L.Z)(t.store.url,t.trackingInfo)},t.handleDrag=function(e){var r=e.top,n=e.left;n>=0&&r>=0&&(0,T.runInAction)((function(){t.store.x=tt(n/100,2),t.store.y=tt(r/100,2)}))},t.handleDragBottom=function(e){(0,T.runInAction)((function(){t.store.height=tt(e.height/100,2)}))},t.handleDragRight=function(e){(0,T.runInAction)((function(){t.store.width=tt(e.width/100,2)}))},t.renderResize=function(){var e={width:100*t.store.width,height:100*t.store.height,onDragBottom:t.handleDragBottom,onDragRight:t.handleDragRight,useLessDirections:["top-left","top-right","top-mid","bottom-mid","mid-left","mid-right","bottom-left"]},r=t.Resize;return r&&R().createElement(r,e)},t}return w()(n,[{key:"DragNode",get:function(){return N()(this.rootStore,"editorContext.DragNode",null)}},{key:"Resize",get:function(){return N()(this.rootStore,"editorContext.Resize",null)}},{key:"editorX",get:function(){return 100*this.store.x}},{key:"editorY",get:function(){return 100*this.store.y}},{key:"renderDragNode",value:function(){var t=this.DragNode;return t&&R().createElement(t,{onDrag:this.handleDrag,top:this.editorY,left:this.editorX})}},{key:"trackingInfo",get:function(){return G(G({},this.props.getLog(this.props.index)),{},{hi_rect_name:this.store.nickName,to_url:this.store.url},(0,Y.mB)(this.store.url))}},{key:"render",value:function(){var t={position:"absolute",top:"".concat(this.store.y,"rem"),left:"".concat(this.store.x,"rem"),width:"".concat(this.store.width,"rem"),height:"".concat(this.store.height,"rem"),zIndex:parseInt(this.store.zIndex,10)||1};return this.rootStore.isEditor?R().createElement("div",{style:G(G({},t),{},{backgroundColor:this.props.bgColor})},R().createElement("div",{className:U().nickName},this.store.nickName),this.renderResize(),this.renderDragNode()):R().createElement($.Z,{trackingInfo:this.trackingInfo},R().createElement("div",{onClick:this.handleClickRect,style:t}))}}]),n}(K.Z),d.Store=F,g=m,A()(g.prototype,"editorX",[T.computed],Object.getOwnPropertyDescriptor(g.prototype,"editorX"),g.prototype),A()(g.prototype,"editorY",[T.computed],Object.getOwnPropertyDescriptor(g.prototype,"editorY"),g.prototype),h=g))||h)||h)||h,rt=et;function nt(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var ot=(0,E.observer)(W=function(t){D()(n,t);var e,r=(e=n,function(){var t,r=P()(e);if(nt()){var n=P()(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return x()(this,t)});function n(){return b()(this,n),r.apply(this,arguments)}return w()(n,[{key:"render",value:function(){var t,e,r=this,n=this.props.item;return R().createElement("div",null,(null===(t=n.rects)||void 0===t?void 0:t.length)>0&&R().createElement(R().Fragment,null,null===(e=n.rects)||void 0===e?void 0:e.map((function(t,e){return R().createElement(rt,{key:e,clickMode:n.clickMode,componentStore:t,bgColor:(0,H.Eu)(e),getLog:r.props.getLog,index:e})}))))}}]),n}(R().Component))||W,it=ot},"U/sb":function(t,e,r){var n=r("fbKJ"),o=r("DDs0"),i="string"==typeof n?[[t.id,n,""]]:n;(e=t.exports=n.locals||{})._getContent=function(){return i},e._getCss=function(){return""+n},e._insertCss=function(t){return o(i,t)}},rst1:function(t,e,r){var n=r("bgtv"),o=r("DDs0"),i="string"==typeof n?[[t.id,n,""]]:n;(e=t.exports=n.locals||{})._getContent=function(){return i},e._getCss=function(){return""+n},e._insertCss=function(t){return o(i,t)}},fl51:function(t,e,r){var n=r("BlvS"),o=r("DDs0"),i="string"==typeof n?[[t.id,n,""]]:n;(e=t.exports=n.locals||{})._getContent=function(){return i},e._getCss=function(){return""+n},e._insertCss=function(t){return o(i,t)}},fbKJ:function(t,e,r){(e=t.exports=r("Cgg2")(!1)).push([t.id,"@-webkit-keyframes bD4yV4Bm{0%{-webkit-transform:scale(0);transform:scale(0)}60%{-webkit-transform:scale(1.08);transform:scale(1.08)}80%{-webkit-transform:scale(.96);transform:scale(.96)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes bD4yV4Bm{0%{-webkit-transform:scale(0);transform:scale(0)}60%{-webkit-transform:scale(1.08);transform:scale(1.08)}80%{-webkit-transform:scale(.96);transform:scale(.96)}to{-webkit-transform:scale(1);transform:scale(1)}}._1Q1md5ow{visibility:hidden;position:absolute;z-index:10;width:.99rem;background-size:100% 100%;background-repeat:no-repeat;background-position:0 0}._2GlHjfgy{-webkit-animation:_1myuldbs 1s linear;animation:_1myuldbs 1s linear}@-webkit-keyframes _1myuldbs{0%{opacity:0}to{opacity:1}}@keyframes _1myuldbs{0%{opacity:0}to{opacity:1}}._2xGRAr8y{visibility:hidden}._1gja6UBD{visibility:visible!important;-webkit-animation:bD4yV4Bm .625s linear!important;animation:bD4yV4Bm .625s linear!important}._275ytH-M{white-space:normal;color:#fff;font-size:.11rem;font-weight:500;line-height:.15rem;text-align:left}.G0a7FFXK{-webkit-transform-origin:0 100%;transform-origin:0 100%}.G0a7FFXK ._275ytH-M{padding:.06rem .05rem .08rem .15rem}._3jKdzOt_{-webkit-transform-origin:100% 100%;transform-origin:100% 100%}._3jKdzOt_ ._275ytH-M{padding:.06rem .15rem .08rem .05rem}",""]),e.locals={dialog:"_1Q1md5ow",textAni:"_2GlHjfgy","gradual-in":"_1myuldbs",hidden:"_2xGRAr8y",dialogAni:"_1gja6UBD","ani-jelly":"bD4yV4Bm",dialogText:"_275ytH-M",dialogAniToRight:"G0a7FFXK",dialogAniToLeft:"_3jKdzOt_"}},bgtv:function(t,e,r){(e=t.exports=r("Cgg2")(!1)).push([t.id,"._12T2DTqx{overflow:hidden;position:relative}._3FdihmIC{width:3.75rem;position:relative}._3FdihmIC img{position:relative;-webkit-user-select:none;user-select:none;pointer-events:none}._2FEX1gVL{width:100%}",""]),e.locals={verticalContainer:"_12T2DTqx",verticalSlide:"_3FdihmIC",verticalImg:"_2FEX1gVL"}},BlvS:function(t,e,r){(e=t.exports=r("Cgg2")(!1)).push([t.id,"._37O9133K{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);font-size:.16rem;color:#fff;font-weight:800;max-width:100%;max-height:100%;overflow:hidden}",""]),e.locals={nickName:"_37O9133K"}}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/assets/js/mobile-dc/DcConcatImages-cc8d51194128bc6e151e.js.map