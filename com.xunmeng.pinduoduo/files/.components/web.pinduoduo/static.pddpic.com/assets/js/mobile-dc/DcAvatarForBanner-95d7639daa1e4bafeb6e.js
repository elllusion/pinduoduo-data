(self.webpackChunk_name_mobile_dc=self.webpackChunk_name_mobile_dc||[]).push([["88bf"],{"7uUq":function(e,t,r){"use strict";r.d(t,{K:function(){return n},b:function(){return i}});var n=function(e,t){return t.axios.post("api/carnival/content_list/no_back_list",e)},i=function(e){return e.axios.post("user/profile/me",{})}},iPGO:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return I}});var n=r("/4JS"),i=r.n(n),o=r("U5BY"),a=r.n(o),s=r("hwDT"),u=r.n(s),c=r("f6/u"),l=r.n(c),f=r("f17R"),m=r.n(f),h=r("Vl5s"),p=r.n(h),d=r("9bdW"),y=r.n(d),v=r("KdYu"),b=r("iuwq"),w=r("ukrc"),x=r.n(w),g=r("BFRN"),k=r("hc/5"),C=r.n(k),N=r("xeO4"),_=r.n(N),O=r("T6n4"),S=r.n(O),E=r("wfOt"),R=r("7uUq"),D=r("FrRG"),P=(0,r("D+Sb").u)([{name:"avatar",value:1,label:"用户头像"},{name:"community",value:2,label:"用户小区"}]);function j(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var q,G,A,U=function(e){l()(i,e);var t,r,n=(t=i,function(){var e,r=p()(t);if(j()){var n=p()(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return m()(this,e)});function i(){var e;a()(this,i);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r)))._useMockData=!0,e.userAvatar="",e.userNickName="",e.userCommunityName="",e.isShow=!1,e.editors={x:".2rem",y:"",width:"1rem",textColor:"#fff",mode:P.avatar},e}return u()(i,[{key:"request",value:(r=_()(S().mark((function e(){var t,r,n,i,o,a;return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,this.rootStore.userHasLogin()||this.rootStore.isEditor){e.next=3;break}return e.abrupt("return");case 3:if(this.editors.mode!==P.avatar){e.next=12;break}return e.next=6,(0,R.b)(this.requestParams);case 6:t=e.sent,this.userAvatar=t.avatar,this.userNickName=t.nickname,this.isShow=!0,e.next=22;break;case 12:if(r=this.rootStore.requestContext.queries,n=r.community_id,i=r.community_name,!n||!i){e.next=17;break}this.userCommunityName=decodeURIComponent(i),e.next=21;break;case 17:return e.next=19,(0,D.Yw)(this.requestParams);case 19:a=e.sent,this.userCommunityName=(null==a||null===(o=a.result)||void 0===o?void 0:o.community_name)||"";case 21:this.isShow=!0;case 22:e.next=27;break;case 24:e.prev=24,e.t0=e.catch(0),this.logError(e.t0);case 27:case"end":return e.stop()}}),e,this,[[0,24]])}))),function(){return r.apply(this,arguments)})}]),i}(E.Z);function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function H(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var I=x()(C())(q=(0,v.observer)((A=G=function(e){l()(n,e);var t,r=(t=n,function(){var e,r=p()(t);if(H()){var n=p()(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return m()(this,e)});function n(){return a()(this,n),r.apply(this,arguments)}return u()(n,[{key:"renderAvatar",value:function(){var e=this.store,t=e.userAvatar,r=e.userNickName;return y().createElement(y().Fragment,null,y().createElement(g.Z,{className:C().avatar,src:t}),y().createElement("span",{className:C().user},r))}},{key:"renderCommunityName",value:function(){var e=this.store.userCommunityName;return e?e.length>6?y().createElement("div",{className:C().userCommunityName},"你的小区 ",e.substring(0,6),"...正在拼"):y().createElement("div",{className:C().userCommunityName},"你的小区 ",e,"正在拼"):y().createElement("div",{className:C().userCommunityName},"你的小区正在拼")}},{key:"render",value:function(){var e=this.store,t=e.editors;if(!e.isShow)return null;var r=F(F({},this.style),{},{left:t.x,top:t.y,width:t.width,backgroundColor:this.store.rootStore.isEditor?"rgba(0, 0, 0, .5)":"",color:t.textColor});return y().createElement("div",{className:C().wrapper,style:r},t.mode===P.avatar?this.renderAvatar():this.renderCommunityName())}}]),n}(b.Z),G.Store=U,q=A))||q)||q},"hc/5":function(e,t,r){var n=r("2ppM"),i=r("DDs0"),o="string"==typeof n?[[e.id,n,""]]:n;(t=e.exports=n.locals||{})._getContent=function(){return o},t._getCss=function(){return""+n},t._insertCss=function(e){return i(o,e)}},"2ppM":function(e,t,r){(t=e.exports=r("Cgg2")(!1)).push([e.id,".Ew9IycyG{height:.24rem;font-size:.14rem;color:#fff;font-weight:700;line-height:.24rem;position:absolute;z-index:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}._1pd5HcL0{width:.24rem;height:.24rem;border-radius:50%;margin-right:.07rem}._2w97G0Ub{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}._1olCGwt2{font-size:.18rem;text-align:center;width:100%}",""]),t.locals={wrapper:"Ew9IycyG",avatar:"_1pd5HcL0",user:"_2w97G0Ub",userCommunityName:"_1olCGwt2"}}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/assets/js/mobile-dc/DcAvatarForBanner-95d7639daa1e4bafeb6e.js.map