(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[24],{"4/Vx":function(e,t,a){(t=e.exports=a("I1BE")(!1)).push([e.i,'._1pRNmGiO{background-color:gray}._1a1HNW8m{position:absolute;bottom:0;left:0;right:0;background-color:#292625}._157mBgHE{position:absolute;bottom:1.1rem;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);font-size:.14rem;color:hsla(0,0%,100%,.8);text-align:center}._157mBgHE:before{left:-.3rem}._157mBgHE:after,._157mBgHE:before{content:"";width:.22rem;height:.01rem;background-color:hsla(0,0%,100%,.5);position:absolute;top:.1rem}._157mBgHE:after{right:-.3rem}._3BwfUwes{position:absolute;width:3.75rem;top:0;height:.52rem;padding-top:.1rem}.MWhQaWKy{margin:0 auto;max-width:2.56rem;height:.29rem;line-height:.3rem;text-align:center;font-size:.2rem;font-weight:700;color:#e0c9b5;overflow:hidden}',""]),t.locals={headerWrapper:"_1pRNmGiO",background:"_1a1HNW8m",tipTag:"_157mBgHE",navHeader:"_3BwfUwes",title:"MWhQaWKy"}},9:function(e,t,a){e.exports=a("JLoy")},Ah3V:function(e,t,a){(t=e.exports=a("I1BE")(!1)).push([e.i,".qgQGO1HH{-webkit-flex-wrap:wrap;flex-wrap:wrap;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-top:-.97rem;min-height:50vh;background-color:#f4f4f4}.IacaxPhC,.qgQGO1HH{display:-webkit-box;display:-webkit-flex;display:flex}.IacaxPhC{padding:.08rem .08rem 0;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;width:100%}._3YFT9ctf{margin:.13rem auto;color:#9c9c9c;font-size:.14rem}",""]),t.locals={listWrapper:"qgQGO1HH",goodsList:"IacaxPhC",loadEnd:"_3YFT9ctf"}},Dq7l:function(e,t,a){var i=a("4/Vx"),r=a("Q8e5"),o="string"==typeof i?[[e.i,i,""]]:i;(t=e.exports=i.locals||{})._getContent=function(){return o},t._getCss=function(){return""+i},t._insertCss=function(e){return r(o,e)}},FKHD:function(e,t,a){"use strict";var i=a("0K67"),r=a("MVZn"),o=a.n(r);a.d(t,"a",(function(){return s}));class s extends i.a{constructor(...e){super(...e),this.getTabList=(e={})=>this.post("/api/lithium/query/tab_list",e,{ignoreTransferKeys:["p_rec"],enableAntiContent:!0}).then((e=>[40001,40002,40003,54001,54002].includes(null==e?void 0:e.errorCode)?e:e&&e.result?function(e){const t=e.tabList||[],a=e.tabList.some((e=>{var t;return null===(t=e.subTabs)||void 0===t?void 0:t.length}));return a&&t.forEach((e=>{var t;(null===(t=e.subTabs)||void 0===t?void 0:t.length)||(e.subTabs=[o()(o()({},e),{},{tabName:"推荐",parentTabId:e.tabId})])})),o()(o()({},e),{},{tabList:t,hasSubTabs:a})}(e.result||{}):null)).catch((e=>Promise.reject(e))),this.getBestGoods=(e={})=>this.post("/api/lithium/query/award/info",e,{ignoreTransferKeys:["p_rec"],enableAntiContent:!0}).then((e=>e&&e.result?e.result:{})).catch((e=>({}))),this.getAwardHistory=(e={})=>this.get("/api/lithium/query/award/show",e,{ignoreTransferKeys:["p_rec"],enableAntiContent:!0}).catch((e=>({}))),this.getRecGoods=(e={})=>this.post("/api/engels/high/level/goods/query/rec/list",e,{ignoreTransferKeys:["p_rec"]}),this.getRecFeed=(e={})=>this.post("/api/lithium/query/goods_list",e,{ignoreTransferKeys:["p_rec","special_text"],enableAntiContent:!0}),this.searchHotQuery=e=>this.get("search_hotquery",e),this.getAtmosphereComments=(e={})=>this.post("/api/lithium/user/like_atmosphere_barrage",e,{enableAntiContent:!0}).catch((e=>({}))),this.getHotZoneBanners=(e={})=>this.post("/api/lithium/query/material/index",e).then((e=>e.success?e.result:{})).catch((e=>({}))),this.getHomePageData=(e={})=>this.post("/api/lithium/query/home_page_data",e,{ignoreTransferKeys:["p_rec"],enableAntiContent:!0}).catch((e=>({}))),this.getBuyingAtEaseData=(e={})=>this.post("/api/lithium/query/module_goods",e,{enableAntiContent:!0}).then((e=>e.success&&e.result||{})).catch((e=>({})))}}},JLoy:function(e,t,a){"use strict";a.r(t);var i=a("v1Eo"),r=a("FdF9"),o=a("ECpg"),s=a("kMSe"),n=a("L67k"),l=a("mj+i"),c=a("e6sO"),u=a("1T2z"),d=a("B+OI"),p=a("fMod"),h=a("B5Xf"),f=a("mnCI"),b=a("kqQl"),g=a("v1gd"),m=a("s+hE"),_=a("MIjw"),y=a("Ki0b"),w=a("Rw9l"),E=a("jxKE");const v="95044",x="sbxeghhl.html?__rp_name=bestgoods_tab_list&_pdd_fs=1&_pdd_tc=ffffff&_pdd_sbs=1";var L,k,O,j,C,H,M,T,q=a("MVZn"),S=a.n(q),I=a("yG8O"),B=a.n(I),A=a("U+yc"),D=a.n(A),N=(a("1ABj"),a("2vnA")),K=a("FKHD"),Q=a("HWRh"),z=a("H2i1");let G=(L=N.d.bound,k=N.d.bound,O=class extends o.b{constructor(...e){var t;super(...e),t=this,B()(this,"goodsList",j,this),B()(this,"loading",C,this),B()(this,"hasMore",H,this),B()(this,"title",M,this),B()(this,"behavior",T,this),this.offset=0,this.bestgoodsIndexService=new K.a(this),this.commonService=new Q.a(this),this.init=async function(){try{t.title=t.queries.title||t.title,await t.loadMoreListGoods(),t.updateShareInfo(S()(S()({},t.$shareInfo),{},{title:t.title,message:"发现不一样的好货",thumbnailURL:t.goodsList.length?t.goodsList[0].imgUrl:"https://funimg.pddpic.com/subjects/2020-05-22/432b51fb-c2ce-43b2-87ab-6886ad1e0ae2.png.slim.png",shareURL:Object(l.a)(t.queries,x)})),t.updateShareConfig({setNativeShareButton:!1})}catch(e){}}}get queries(){return this.$ctx.requestContext.query}async loadMoreListGoods(e=20){if(!this.loading&&this.hasMore){this.loading=!0;try{const{biz_pool_id:t,tab_id:a}=this.queries,i={offset:this.offset,count:e,listId:this.$listId,tab_id:a,biz_pool_id:t},r=await this.bestgoodsIndexService.getRecFeed(i),{result:o={}}=r||{},{data:s=[],hasMore:n}=o,l=this.goodsList.concat(Object(z.b)(s.map(z.c),this.goodsList.length));Object(N.o)((()=>{this.goodsList=l,this.offset+=s.length,n&&s.length||(this.hasMore=!1)}))}catch(t){}finally{this.loading=!1}}}getDatasource(){return this.init}async setLikeQuery(e,t,a){try{return await this.commonService.queryGoodsLike({goods_id:e,like:t,source:a})}catch(i){return{}}}},j=D()(O.prototype,"goodsList",[N.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),C=D()(O.prototype,"loading",[N.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),H=D()(O.prototype,"hasMore",[N.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),M=D()(O.prototype,"title",[N.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"发现好货"}}),T=D()(O.prototype,"behavior",[N.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"发现不一样的好货"}}),D()(O.prototype,"queries",[N.e],Object.getOwnPropertyDescriptor(O.prototype,"queries"),O.prototype),D()(O.prototype,"loadMoreListGoods",[L],Object.getOwnPropertyDescriptor(O.prototype,"loadMoreListGoods"),O.prototype),D()(O.prototype,"setLikeQuery",[k],Object.getOwnPropertyDescriptor(O.prototype,"setLikeQuery"),O.prototype),O);var P;let W=Object(o.c)({store:G},{requireLogin:!1,serverTemplateName:"bestgoods_tab_list",fallbackCSR:!0,title:"发现好货",options:{pageProperty:{pageName:"TAB商品落地页",pageSN:v},shareInfo:{noDefaultShare:!0},usePDDShare:!1}})(P=Object(s.c)("store")(P=Object(n.b)(P=Object(s.d)(P=class extends r.default.Component{render(){const{store:e}=this.props,{title:t,behavior:a,queries:i,loadMoreListGoods:o,goodsList:s,$ctx:n,hasMore:L}=e;return r.default.createElement(b.a,{store:e},r.default.createElement(c.a.Provider,{value:e.$ctx},r.default.createElement(p.b,null,r.default.createElement(_.a,null,r.default.createElement(y.a,{title:t,tip:a})),r.default.createElement(_.a,null,r.default.createElement(w.a,{ctx:n,loadMore:o,goodsList:s,hasMore:L,likeSource:E.b.TabList})),r.default.createElement(h.a,null),r.default.createElement(f.a,null,r.default.createElement(g.a,{store:e}),r.default.createElement(_.a,null,r.default.createElement(m.a,null),r.default.createElement(m.b,{pageElSn:4553464})),r.default.createElement(u.a,{style:{marginTop:"0.81rem",zIndex:10002},url:Object(l.a)(i,x),params:{page_sn:v,window_id:30401,campaign:"campaign=h5_base",cid:"bestgoods_tab_list_wx"}}),r.default.createElement(d.a,null)))))}})||P)||P)||P)||P;Object(i.a)(W,W.appConfig.options)},Ki0b:function(e,t,a){"use strict";var i=a("FdF9"),r=a("kMSe"),o=a("ECpg"),s=a("fMod"),n=a("e6sO"),l=a("Wo7p"),c=a("DCO6"),u=a("S8c2"),d=a("TSYQ"),p=a.n(d),h=a("Dq7l"),f=a.n(h);t.a=Object(r.d)((function({title:e,tip:t}){var a;Object(o.d)(f.a);const r=()=>i.default.createElement("div",{className:f.a.title},e),d=Object(i.useContext)(s.a),h=Object(i.useContext)(n.a),b=!(null==h||null===(a=h.platform)||void 0===a?void 0:a.isNativePlatform)&&!(null==d?void 0:d.isImmersive);return i.default.createElement(l.a,{className:p()(f.a.headerWrapper),iosHeight:1.32,androidHeight:1.32,bgColor:"#292625",browserHeight:1.77},i.default.createElement(u.a,{processParam:{resizeWidth:750},src:"https://funimg.pddpic.com/subjects/2020-04-14/0d63db2f-ba77-40bd-b896-4038ae15e42f.png",className:f.a.background}),i.default.createElement(c.a,{title:"",hideInitTitle:!0,btnStyle:["#ffffff","#ffffff"],statusBarStyle:[1,1],useBlackStatusText:!1,rollingAlphaFromWhiteToBlack:!1,bgImg:"https://funimg.pddpic.com/subjects/2020-04-19/582e2fea-8b61-42d2-9f65-8d26331a4cc4.jpg"},i.default.createElement(r,null)),b&&i.default.createElement("div",{className:f.a.navHeader},i.default.createElement(r,null)),i.default.createElement("div",{className:f.a.tipTag},i.default.createElement("span",null,t||"大家都在逛")))}))},Qjlm:function(e,t,a){var i=a("Ah3V"),r=a("Q8e5"),o="string"==typeof i?[[e.i,i,""]]:i;(t=e.exports=i.locals||{})._getContent=function(){return o},t._getCss=function(){return""+i},t._insertCss=function(e){return r(o,e)}},Rw9l:function(e,t,a){"use strict";var i=a("FdF9"),r=a("kMSe"),o=a("ECpg"),s=a("PEIp"),n=a("H2i1"),l=a("MVvR"),c=a("L67k"),u=a("Qjlm"),d=a.n(u);t.a=Object(r.d)((function({loadMore:e,ctx:t,goodsList:a,hasMore:r,likeSource:u,goodsTrackingInfo:p=(()=>{})}){Object(o.d)(d.a);const h=Object(i.useCallback)(((e,a)=>i.default.createElement(c.a,null,i.default.createElement(s.a,{isDefault:!0,goods:e,webpEnable:t.webpEnable,source:u,getTrackingInfo:p}))),[t.webpEnable,p]),f=Object(i.useCallback)((()=>r?null:i.default.createElement("div",{className:d.a.loadEnd},"- 以上为全部商品 -")),[r]);return i.default.createElement("div",{className:d.a.listWrapper},i.default.createElement(l.a,{className:d.a.goodsList,list:Object(n.e)(a),onLoadMore:e,renderItem:h,isLoading:r,isEnd:!r,renderCustomListEnd:f}))}))},SJUw:function(e,t){e.exports=window.pinbridge}},[[9,2,3,1,0]]]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-best-goods/js/react_bestgoods_tab_list_8b986c7a88ea899dc7d2.module.js.map