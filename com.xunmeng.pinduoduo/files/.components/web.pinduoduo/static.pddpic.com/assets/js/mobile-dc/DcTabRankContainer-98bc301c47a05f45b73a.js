(self.webpackChunk_name_mobile_dc=self.webpackChunk_name_mobile_dc||[]).push([["eda0"],{P7WB:function(t,e,r){"use strict";var n=r("AIhP"),i=r.n(n),o=r("sdwB"),s=r.n(o),a=r("9bdW"),u=r.n(a),c=r("Bc86"),l=["list","rootStore"];e.Z=function(t){var e=t.list,r=t.rootStore,n=s()(t,l);return u().createElement(u().Fragment,null,e.map((function(t,e){return u().createElement(c.Z,i()({key:t.componentId,item:t,index:e,rootStore:r},n))})))}},RAN8:function(t,e,r){"use strict";r.d(e,{Z:function(){return nt}});var n,i,o=r("xeO4"),s=r.n(o),a=r("0Qln"),u=r.n(a),c=r("U5BY"),l=r.n(c),f=r("hwDT"),p=r.n(f),h=r("i/Q6"),d=r.n(h),v=r("iWIM"),b=r.n(v),y=r("f6/u"),g=r.n(y),m=r("f17R"),_=r.n(m),w=r("Vl5s"),I=r.n(w),k=r("jXLS"),C=r.n(k),R=(r("XC3m"),r("T6n4")),O=r.n(R),E=r("UK90"),S=r("NP/l"),A=r("DQkW"),L=r("/4JS"),T=r.n(L),x=r("K63m"),P=r("Skb2"),D=r("V5cf");function N(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function j(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?N(Object(r),!0).forEach((function(e){T()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var q=new x.Z({alias:"RECOMMEND",text:"个性化排序",value:0},{alias:"GMV_RACING",text:"商品池gmv赛马",value:1},{text:"页面赛马",alias:"PAGE_RACING",value:2},{text:"商品池销量赛马",alias:"SALES_RACING",value:3}),M=new x.Z({text:"页面UV价值赛马",alias:"UV",value:0},{text:"gmv+uv价值-规则1",alias:"AVE_1",value:1},{text:"点击转化+支付转化-规则2",alias:"AVE_2",value:2},{text:"gmv+点击转化+uv价值-规则3",alias:"AVE_3",value:3}),G=new x.Z({text:"小时级数据",alias:"HOUR_DATA",value:0},{text:"天级数据",alias:"DAYS_DATA",value:1}),$=(n={},T()(n,M.UV,"uv_val"),T()(n,M.AVE_1,"custom_weight_1"),T()(n,M.AVE_2,"custom_weight_2"),T()(n,M.AVE_3,"custom_weight_3"),n);function z(t){return{group_id:this.group_id,list_id:t.listId,page_no:1,page_size:this.rootStore.isEditor?Math.max(40,this.componentBlockLength||0):this.showComponentLength,show_main_tab:!1}}var V=(i={},T()(i,q.RECOMMEND,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this.requestParams,r=z.call(this,e),n=j(j({group:D.G_.CAT_MAIN_CONTENT},t),r);return(0,P.$Z)(n,e)})),T()(i,q.GMV_RACING,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this.requestParams,r=z.call(this,e),n=j(j({group:D.G_.SUB_TAB_RACING,goods_count:0},t),r);return(0,P.$Z)(n,e)})),T()(i,q.PAGE_RACING,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this.requestParams,r=z.call(this,e),n=j(j({group:D.G_.CAT_SUB_CONTENT_TAB_RACING,goods_count:0,resort_type:$[this.horse_type]},t),r);return(0,P.$Z)(n,e)})),T()(i,q.SALES_RACING,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this.requestParams,r=z.call(this,e),n=j(j(j({group:D.G_.TAB_RACING_INNER,goods_count:0},t),r),{},{extra_param:{sort_rule:this.time_type===G.HOUR_DATA?1:2}});return(0,P.$Z)(n,e)})),i);var Z,U,B,W,H,Q,X,F,J,K=r("zqxM"),Y=r.n(K);function tt(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var et="FirstScreenSeparator",rt=(Z=function(t){g()(o,t);var e,r,n,i=(e=o,function(){var t,r=I()(e);if(tt()){var n=I()(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return _()(this,t)});function o(){var t;l()(this,o);for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t=i.call.apply(i,[this].concat(r)),u()(t,"config",U,d()(t)),u()(t,"group_id",B,d()(t)),u()(t,"showComponentLength",W,d()(t)),u()(t,"$showChildIds",H,d()(t)),u()(t,"sortingMethod",Q,d()(t)),u()(t,"horse_type",X,d()(t)),u()(t,"time_type",F,d()(t)),u()(t,"useRankTag",J,d()(t)),t}return p()(o,[{key:"firstLoadChildren",get:function(){return this.children}},{key:"displayChildrenIds",get:function(){return this.rootStore.isEditor?this.childrenIds.slice(0,this.showComponentLength):this.$showChildIds}},{key:"firstRequestChildren",get:function(){var t=this,e=this.rootStore.requestContext.queries,r=e.component_id,n=e.is_back,i=-1;if(n&&r&&this.displayChildrenIds.includes(r)&&(i=this.displayChildrenIds.findIndex((function(t){return t===r}))),-1!==i)return this.displayChildren.filter((function(t,e){return e<=i}));var o=this.rootStore.list.filter((function(e){return e.key===et||t.childrenIds.includes(e.componentId)})).findIndex((function(t){return t.key===et}));return o>0?this.displayChildren.slice(0,o):[]}},{key:"wrapperRankInList",get:function(){var t=this;return this.rootStore.list.findIndex((function(e){return e.componentId===t.componentId}))}},{key:"request",value:(n=s()(O().mark((function t(){var e=this;return O().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.promotTabHook();case 3:return this.displayChildren.forEach((function(t,r){(0,E.runInAction)((function(){t.store.$useFold=!!(e.showTabLength&&e.showTabLength<r+1),t.store.height=t.store.$useFold&&t.store.foldedHeight||t.store.height,e.rootStore.isEditor||(t.requestIn=e.firstRequestChildren.some((function(e){return e.componentId===t.componentId}))?A.Q.FIRSTSCREEN:A.Q.EXPOSURE,t.store.comRank=e.wrapperRankInList+r+1)}))})),t.abrupt("return",b()(I()(o.prototype),"request",this).call(this));case 7:t.prev=7,t.t0=t.catch(0),this.logError(t.t0);case 10:case"end":return t.stop()}}),t,this,[[0,7]])}))),function(){return n.apply(this,arguments)})},{key:"getRequestApi",value:function(){return t=this.sortingMethod,V[t];var t}},{key:"dealTabData",value:function(t){return t}},{key:"getStickyParams",value:function(){var t,e=null===(t=this.config.find((function(t){return t.isSticky})))||void 0===t?void 0:t.id;return e?this.sortingMethod===q.RECOMMEND?{location_lock:"1",list_token:e}:{top_tab_id:e}:{}}},{key:"validateRes",value:function(t){var e,r=function(t){return t.map((function(t){return t.id}))},n=r(this.config),i=r(t);(null===(e=Y()(i,n))||void 0===e?void 0:e.length)>0&&this.logError("返回异常，groupId配置发生变化，编辑页配置：".concat(n,"，展示页配置：").concat(i))}},{key:"promotTabHook",value:(r=s()(O().mark((function t(){var e,r,n,i,o,s,a=this;return O().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=this.getStickyParams(),t.next=4,this.getRequestApi().call(this,n);case 4:i=t.sent,o=(null===(r=i.content_list)||void 0===r?void 0:r.map((function(t){return{id:t.content_id,name:t.content_name}})))||[],this.validateRes(o),s=this.dealTabData(o),e=s.slice(0,this.showComponentLength||20).map((function(t){return((0,E.toJS)(a.config).find((function(e){return+e.id==+t.id}))||{}).childrenIds||[]})).reduce((function(t,e){return t.concat(e)}),[]),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),e=(0,E.toJS)(this.config).slice(0,this.showComponentLength||20).reduce((function(t,e){return t.concat(e.childrenIds)}),[]);case 14:(0,E.runInAction)((function(){a.$showChildIds=e}));case 15:case"end":return t.stop()}}),t,this,[[0,11]])}))),function(){return r.apply(this,arguments)})}]),o}(S.Z),U=C()(Z.prototype,"config",[E.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),B=C()(Z.prototype,"group_id",[E.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),W=C()(Z.prototype,"showComponentLength",[E.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),H=C()(Z.prototype,"$showChildIds",[E.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Q=C()(Z.prototype,"sortingMethod",[E.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),X=C()(Z.prototype,"horse_type",[E.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),F=C()(Z.prototype,"time_type",[E.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return G.HOUR_DATA}}),J=C()(Z.prototype,"useRankTag",[E.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),C()(Z.prototype,"firstLoadChildren",[E.computed],Object.getOwnPropertyDescriptor(Z.prototype,"firstLoadChildren"),Z.prototype),C()(Z.prototype,"displayChildrenIds",[E.computed],Object.getOwnPropertyDescriptor(Z.prototype,"displayChildrenIds"),Z.prototype),C()(Z.prototype,"firstRequestChildren",[E.computed],Object.getOwnPropertyDescriptor(Z.prototype,"firstRequestChildren"),Z.prototype),C()(Z.prototype,"wrapperRankInList",[E.computed],Object.getOwnPropertyDescriptor(Z.prototype,"wrapperRankInList"),Z.prototype),Z),nt=rt},"+DTq":function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return rt}});var n,i=r("U5BY"),o=r.n(i),s=r("hwDT"),a=r.n(s),u=r("f6/u"),c=r.n(u),l=r("f17R"),f=r.n(l),p=r("Vl5s"),h=r.n(p),d=r("9bdW"),v=r.n(d),b=r("KdYu"),y=r("iuwq"),g=r("xeO4"),m=r.n(g),_=r("iQtE"),w=r.n(_),I=r("0Qln"),k=r.n(I),C=r("i/Q6"),R=r.n(C),O=r("iWIM"),E=r.n(O),S=r("jXLS"),A=r.n(S),L=(r("XC3m"),r("T6n4")),T=r.n(L),x=r("UK90"),P=r("/4JS"),D=r.n(P),N=r("K63m"),j=r("Skb2"),q=r("V5cf");function M(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function G(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?M(Object(r),!0).forEach((function(e){D()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var $=new N.Z({alias:"REC_LIST",text:"个性化榜单",value:0},{alias:"REC_VENUE",text:"个性化分会场",value:1});var z,V,Z,U,B,W=(n={},D()(n,$.REC_LIST,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this.requestParams,r=G({group:q.G_.MAIN_BILLBOARD,group_id:this.group_id,list_id:e.listId,page_no:1,page_size:this.rootStore.isEditor?40:this.showComponentLength,show_main_tab:!1},t);return(0,j.$Z)(r,e)})),D()(n,$.REC_VENUE,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this.requestParams,r=G({group:q.G_.CAT_MAIN_CONTENT,group_id:this.group_id,list_id:e.listId,page_no:1,page_size:this.rootStore.isEditor?20:this.showComponentLength,show_main_tab:!1},t);return(0,j.$Z)(r,e)})),n);function H(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var Q,X,F,J=(z=function(t){c()(i,t);var e,r,n=(e=i,function(){var t,r=h()(e);if(H()){var n=h()(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return f()(this,t)});function i(){var t;o()(this,i);for(var e=arguments.length,r=new Array(e),s=0;s<e;s++)r[s]=arguments[s];return t=n.call.apply(n,[this].concat(r)),k()(t,"config",V,R()(t)),k()(t,"enableSticky",Z,R()(t)),k()(t,"stickTopChildren",U,R()(t)),k()(t,"tabId",B,R()(t)),t}return a()(i,[{key:"$navList",get:function(){return this.children.filter((function(t){return"LeftSideNav"===t.key}))}},{key:"$contentList",get:function(){return this.displayChildren.filter((function(t){return"LeftSideNav"!==t.key}))}},{key:"getRequestApi",value:function(){return t=this.sortingMethod,W[t];var t}},{key:"dealTabData",value:function(t){var e,r=null===(e=this.$navList)||void 0===e?void 0:e[0],n=this.rootStore.query.subject_id,i=t.find((function(t){return t.id===n}));if(!r.store.enableFocus||!i)return t;var o=[i].concat(w()(t.filter((function(t){return t.id!==n}))));return this.enableSticky&&(r.store._activeIndex=1),o}},{key:"promotTabHook",value:(r=m()(T().mark((function t(){var e,r=this;return T().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E()(h()(i.prototype),"promotTabHook",this).call(this);case 2:e=this.$showChildIds,this.enableSticky&&e.unshift.apply(e,w()(this.stickTopChildren)),this.tabId&&e.unshift(this.tabId),(0,x.runInAction)((function(){r.$showChildIds=e})),this.refreshLeftNav();case 7:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},{key:"refreshLeftNav",value:function(){var t,e=null===(t=this.$navList)||void 0===t?void 0:t[0];e&&e.store.refreshTab&&e.store.refreshTab()}}]),i}(r("RAN8").Z),V=A()(z.prototype,"config",[x.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Z=A()(z.prototype,"enableSticky",[x.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),U=A()(z.prototype,"stickTopChildren",[x.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),B=A()(z.prototype,"tabId",[x.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),z),K=J,Y=r("P7WB");function tt(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var et=(0,b.inject)("store")(Q=(0,b.observer)((F=X=function(t){c()(n,t);var e,r=(e=n,function(){var t,r=h()(e);if(tt()){var n=h()(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return f()(this,t)});function n(){var t;o()(this,n);for(var e=arguments.length,i=new Array(e),s=0;s<e;s++)i[s]=arguments[s];return(t=r.call.apply(r,[this].concat(i))).getWidgets=function(e){return v().createElement(Y.Z,{rootMargin:"700px",list:e,rootStore:t.rootStore})},t}return a()(n,[{key:"componentDidMount",value:function(){this.store.refreshLeftNav()}},{key:"render",value:function(){var t,e,r=null===(t=this.store.$navList)||void 0===t||null===(e=t[0])||void 0===e?void 0:e.store.tabWidth;return v().createElement("div",{id:this.store.componentId,style:this.style},v().createElement("div",null,this.getWidgets(this.store.$navList)),v().createElement("div",{style:{marginLeft:r}},this.getWidgets(this.store.$contentList)))}}]),n}(y.Z),X.Store=K,Q=F))||Q)||Q,rt=et},LqpT:function(t,e,r){var n=r("1hJj"),i=r("jbM+"),o=r("Xt/L"),s=r("eUgh"),a=r("sEf8"),u=r("xYSL");t.exports=function(t,e,r,c){var l=-1,f=i,p=!0,h=t.length,d=[],v=e.length;if(!h)return d;r&&(e=s(e,a(r))),c?(f=o,p=!1):e.length>=200&&(f=u,p=!1,e=new n(e));t:for(;++l<h;){var b=t[l],y=null==r?b:r(b);if(b=c||0!==b?b:0,p&&y==y){for(var g=v;g--;)if(e[g]===y)continue t;d.push(b)}else f(e,y,c)||d.push(b)}return d}},EA7m:function(t,e,r){var n=r("zZ0H"),i=r("Ioao"),o=r("wclG");t.exports=function(t,e){return o(i(t,e,n),t+"")}},zqxM:function(t,e,r){var n=r("LqpT"),i=r("XGnz"),o=r("EA7m"),s=r("3L66"),a=o((function(t,e){return s(t)?n(t,i(e,1,s,!0)):[]}));t.exports=a},"3L66":function(t,e,r){var n=r("MMmD"),i=r("Vslq");t.exports=function(t){return i(t)&&n(t)}}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/assets/js/mobile-dc/DcTabRankContainer-98bc301c47a05f45b73a.js.map