!function(){var e,t,r,n,a,i,o,c={48001:function(e,t,r){"use strict";r(96253),r(40851);var n=r(45063),a=function(e){return(0,n.D4)(e)},i=r(67376),o=r(87401),c=r(70798),u=r(61824),s=r(36102),l=r.n(s),d=r(77153),f=r(8224),p=r(59795),m=r.n(p),v=(r(82139),r(95767),r(98351),r(18482)),b=r(25118),g=r(38796),y=r(68309),h=r(69348),_=r(99057),P=r(45558),x=r(91074),I=r(11269),O=r(43736),E=r(37883),k=r.n(E),w=(r(98837),r(94899),r(19371),r(94882),r(27476),r(11246),r(22188)),Z=r(94537);function N(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,I.Z)(e);if(t){var a=(0,I.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,x.Z)(this,r)}}var S,L=function(e){(0,P.Z)(r,e);var t=N(r);function r(){return(0,y.Z)(this,r),t.apply(this,arguments)}return(0,h.Z)(r,[{key:"getTabs",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.post("/api/orpheus/audio/labels",e,{enableAntiContent:!0,enableTransfer:!0})}},{key:"getList",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.post("/api/orpheus/audio/list/by/label",e,{enableAntiContent:!0})}},{key:"getAudio",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.post("/api/orpheus/audio/detail",e,{enableAntiContent:!0})}}]),r}(r(44518).Z);!function(e){e[e.NotLoad=0]="NotLoad",e[e.Loading=1]="Loading",e[e.Loaded=2]="Loaded"}(S||(S={}));var M,j,C,D,A,T,z,U,B,q,R,H,W,F,G,V=-1024;function X(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?X(Object(r),!0).forEach((function(t){(0,v.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,I.Z)(e);if(t){var a=(0,I.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,x.Z)(this,r)}}var Q=(M=function(e){(0,P.Z)(r,e);var t=Y(r);function r(){var e;(0,y.Z)(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).service=void 0,(0,g.Z)(e,"isSendSiblingMusic",j,(0,_.Z)(e)),(0,g.Z)(e,"tabs",C,(0,_.Z)(e)),(0,g.Z)(e,"dataMap",D,(0,_.Z)(e)),e.initTabItem={labelId:0,name:"推荐"},(0,g.Z)(e,"currentTabIndex",A,(0,_.Z)(e)),(0,g.Z)(e,"currentPlayAudio",T,(0,_.Z)(e)),(0,g.Z)(e,"needExtraPadding",z,(0,_.Z)(e)),e.customAudioId=0,e.getTabs=(0,b.Z)(k().mark((function t(){var r,n,a,i,o,c,u;return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$ctx.query,n=r.label_id,a=void 0===n?0:n,i=r.hide_my_music_label,o=void 0===i?"0":i,t.prev=1,t.next=4,e.service.getTabs({labelId:a,pageSize:10});case 4:if(c=t.sent,u=c.result,c.success){t.next=9;break}throw new Error("req tabs failed");case 9:return(0,w.z)((function(){e.tabs="1"===o?u.filter((function(e){return"我的音乐"!==e.name&&2!==e.labelId})):u,e.currentTabIndex=Math.max(e.tabs.findIndex((function(e){return e.active})),0),e.initTabItem=e.tabs[e.currentTabIndex]})),t.next=12,e.getInitList();case 12:t.next=16;break;case 14:t.prev=14,t.t0=t.catch(1);case 16:case"end":return t.stop()}}),t,null,[[1,14]])}))),e.getMatchedAuido=(0,b.Z)(k().mark((function t(){var r,n,a,i,o,c,u,s,l,d,f,p;return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,r=e.$ctx.query,n=r.selected_audio_id,a=r.selected_audio_type,i=r.selected_feed_id,o=r.audio_url,c=r.audio_play_interval,u=r.audio_name,s=r.audio_cover_url,l=r.cover_path_base64,d={model:[],page:1,hasMore:!1,loading:!1},!(o&&c&&u&&s&&l)){t.next=7;break}d.model.push({audioName:u,coverUrl:s,coverUrlBase64:l,playUrl:o,playInterval:+c,isPlaying:!1,loadStatus:S.NotLoad,startPlayTimestamp:void 0,labelId:V,isFromVideo:!0}),t.next=14;break;case 7:if(!n||!a){t.next=14;break}return t.next=10,e.service.getAudio({audio_id:n,audio_type:+a,feed_id:i});case 10:f=t.sent,p=f.result,f.success&&d.model.push({audioName:p.audioName,coverUrl:p.audioCover,playUrl:p.audioUrl,playInterval:p.audioDuration,type:a,audioId:n,isPlaying:!1,loadStatus:S.NotLoad,startPlayTimestamp:void 0,labelId:V});case 14:(0,w.z)((function(){e.needExtraPadding=d.model.length>0,e.dataMap=J(J({},e.dataMap),{},(0,v.Z)({},V,d))})),t.next=19;break;case 17:t.prev=17,t.t0=t.catch(0);case 19:case"end":return t.stop()}}),t,null,[[0,17]])}))),(0,g.Z)(e,"clearMatchedAudio",U,(0,_.Z)(e)),e.getInitList=(0,b.Z)(k().mark((function t(){var r,n,a;return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.initTabItem.labelId,t.prev=1,t.next=4,e.service.getList({labelId:r,page:1});case 4:if(n=t.sent,a=n.result,n.success){t.next=9;break}throw new Error("req init list failed");case 9:(0,w.z)((function(){e.dataMap=J(J({},e.dataMap),{},(0,v.Z)({},r,J(J({},a),{},{model:(a.model||[]).map((function(e){return J(J({},e),{},{labelId:r})}))})))})),t.next=14;break;case 12:t.prev=12,t.t0=t.catch(1);case 14:case"end":return t.stop()}}),t,null,[[1,12]])}))),e.reqMoreList=function(){var t=(0,b.Z)(k().mark((function t(r){var n,a,i,o,c,u,s,l;return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n={hasMore:!0,loading:!1,page:0,model:[]},(a=e.dataMap[r]||n).hasMore&&!a.loading){t.next=4;break}return t.abrupt("return");case 4:return a.loading=!0,t.prev=5,i=a.model,o=void 0===i?[]:i,c=a.page,u=void 0===c?0:c,t.next=9,e.service.getList({labelId:r,page:u+1});case 9:if(s=t.sent,l=s.result,s.success){t.next=14;break}throw new Error("req more list failed");case 14:(0,w.z)((function(){var t=(l.model||[]).map((function(e){return J(J({},e),{},{labelId:r})}));e.dataMap=J(J({},e.dataMap),{},(0,v.Z)({},r,J(J({},l),{},{model:e.uniqList(o.concat(t)),loading:!1})))})),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(5),a.loading=!1;case 20:case"end":return t.stop()}}),t,null,[[5,17]])})));return function(e){return t.apply(this,arguments)}}(),(0,g.Z)(e,"changeCurrentTab",B,(0,_.Z)(e)),(0,g.Z)(e,"onStartLoading",q,(0,_.Z)(e)),(0,g.Z)(e,"onEndLoading",R,(0,_.Z)(e)),(0,g.Z)(e,"changeLoadingStauts",H,(0,_.Z)(e)),(0,g.Z)(e,"onPlay",W,(0,_.Z)(e)),(0,g.Z)(e,"onPause",F,(0,_.Z)(e)),e.setCurrentPlayAudio=function(t){e.currentPlayAudio=t},e.clearCurrentPlayAudio=function(){e.currentPlayAudio=null},(0,g.Z)(e,"addAudioFromVideo",G,(0,_.Z)(e)),e}return(0,h.Z)(r,[{key:"matchedAudio",get:function(){var e,t;return null===(e=this.dataMap[-1024])||void 0===e||null===(t=e.model)||void 0===t?void 0:t[0]}},{key:"initServices",value:function(){this.service=new L(this.$axiosHttp)}},{key:"getLocalData",value:function(e){return{isSendSiblingMusic:"1"===e.query.need_list}}},{key:"getDatasource",value:function(){return{localData:{loader:this.getLocalData,dump:!0},tabVsList:{loader:this.getTabs},audioDeatail:{loader:this.getMatchedAuido}}}},{key:"uniqList",value:function(e){var t=e.map((function(e){return e.audioId}));return e.filter((function(e,r){return t.indexOf(e.audioId)===r}))}}]),r}(Z.u),j=(0,O.Z)(M.prototype,"isSendSiblingMusic",[w.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),C=(0,O.Z)(M.prototype,"tabs",[w.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),D=(0,O.Z)(M.prototype,"dataMap",[w.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),A=(0,O.Z)(M.prototype,"currentTabIndex",[w.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),T=(0,O.Z)(M.prototype,"currentPlayAudio",[w.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),(0,O.Z)(M.prototype,"matchedAudio",[w.Fl],Object.getOwnPropertyDescriptor(M.prototype,"matchedAudio"),M.prototype),z=(0,O.Z)(M.prototype,"needExtraPadding",[w.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),U=(0,O.Z)(M.prototype,"clearMatchedAudio",[w.aD],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){var r;(null===(r=e.currentPlayAudio)||void 0===r?void 0:r.audioId)===t.audioId&&e.clearCurrentPlayAudio(),e.dataMap=J(J({},e.dataMap),{},(0,v.Z)({},V,{model:[],page:1,hasMore:!1,loading:!1}))}}}),B=(0,O.Z)(M.prototype,"changeCurrentTab",[w.aD],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.currentTabIndex=t}}}),q=(0,O.Z)(M.prototype,"onStartLoading",[w.aD],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.changeLoadingStauts(t,S.Loading)}}}),R=(0,O.Z)(M.prototype,"onEndLoading",[w.aD],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.changeLoadingStauts(t,S.NotLoad)}}}),H=(0,O.Z)(M.prototype,"changeLoadingStauts",[w.aD],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t,r){var n=t.labelId,a=(e.dataMap[n].model||[]).map((function(e){return e.audioId===t.audioId?J(J({},e),{},{loadStatus:r}):e}));e.dataMap[n]=J(J({},e.dataMap[n]),{},{model:a})}}}),W=(0,O.Z)(M.prototype,"onPlay",[w.aD],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){var r=t.audioId,n=t.labelId;e.setCurrentPlayAudio(J(J({},t),{},{startPlayTimestamp:(new Date).getTime()}));var a={};Object.keys(e.dataMap).forEach((function(t){var i=Number(t),o=(e.dataMap[i].model||[]).map((function(e){var t=e.audioId===r&&i===n;return J(J({},e),{},{isPlaying:t,loadStatus:t?S.Loaded:e.loadStatus})}));a[i]=J(J({},e.dataMap[i]),{},{model:o})})),e.dataMap=a}}}),F=(0,O.Z)(M.prototype,"onPause",[w.aD],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){var r=t.labelId,n=(e.dataMap[r].model||[]).map((function(e){return e.audioId===t.audioId?J(J({},e),{},{isPlaying:!1}):e}));e.dataMap[r]=J(J({},e.dataMap[r]),{},{model:n}),e.clearCurrentPlayAudio()}}}),G=(0,O.Z)(M.prototype,"addAudioFromVideo",[w.aD],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){var r;e.dataMap[0]&&(null===(r=e.dataMap[0].model)||void 0===r||r.unshift({audioId:"custom_".concat(e.customAudioId++),labelId:0,audioName:t.audio_name,coverUrlBase64:t.cover_path_base64,coverUrl:t.audio_cover_url,labels:[],playInterval:t.audio_play_interval,playUrl:t.audio_url,type:4,isFromVideo:!0}),e.changeCurrentTab(0))}}}),M),K=r(94184),$=r.n(K),ee=r(33628),te=r(1600);function re(){return(0,o.useContext)(c.yX)}var ne=r(23877),ae=r(66938),ie=r.n(ae);function oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ce(e){var t=e.tabs,r=void 0===t?[]:t,n=e.containerClassName,a=void 0===n?"":n,i=e.activeTabIdx,c=void 0===i?0:i,u=e.tabRemWidth,s=e.activeMarkClassName,l=void 0===s?"":s,d=e.renderItem,f=(0,o.useState)(u?{width:"".concat(u,"rem"),left:"".concat(u*c,"rem"),visibility:"visible"}:{visibility:"hidden"}),p=(0,ne.Z)(f,2),m=p[0],b=p[1],g=(0,o.useMemo)((function(){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(r),!0).forEach((function(t){(0,v.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):oe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},u?{width:"".concat(u,"rem")}:{})}),[u]),y=(0,o.useRef)({}),h=(0,o.useRef)(null);return(0,o.useEffect)((function(){var e,t=null===(e=y.current)||void 0===e?void 0:e[c];if(t&&h.current){var r=t.getBoundingClientRect().width,n=(window.innerWidth||document.documentElement.clientWidth)/2,a=t.offsetLeft-n+r/2;h.current.scrollLeft=a}}),[h,y,c]),(0,o.useEffect)((function(){if(!u){var e,t=null===(e=y.current)||void 0===e?void 0:e[c];t&&b({left:t.offsetLeft+"px",width:t.offsetWidth+"px",visibility:"visible"})}}),[u,y,c]),o.createElement("div",{className:ie().scroll,ref:h},o.createElement("div",{className:$()(ie().tabs,a)},r.map((function(e,t){return o.createElement("div",{style:g,key:t,ref:function(e){return y.current[t]=e},className:ie().tabItem},d(e,t,t===c))})),l&&o.createElement("div",{style:m,className:ie().activeMark},o.createElement("div",{className:l}))))}function ue(e){var t=(0,o.useState)(!1),r=(0,ne.Z)(t,2),n=r[0],a=r[1];return(0,o.useEffect)((function(){a(!0)}),[]),n||e.disabled?e.children:null}r(39115),r(56997),r(91181);var se=r(63320),le=r(22691),de=r(22403),fe=r(92263),pe=r(74711),me=r(42202);var ve,be=(ve=window.navigator.userAgent,(0,pe.Xf)(ve)),ge=(be.system,me.we.IOS,"undefined"!=typeof window&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),r(49385)),ye=(r(62850),r(62773),r(86056));var he=function(){var e=(0,b.Z)(k().mark((function e(t){var r,n,a,i,o;return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t&&be.isNativePlatform||ye.ZP.back(),r=Array.isArray(t)?t:[t],e.next=4,(0,le.Q6)("PDDNavigator","pageSourceStack");case 4:if(!((n=e.sent).pageSourceStack&&n.pageSourceStack.length>1)){e.next=15;break}a=function(e){var t=n.pageSourceStack[e],a=t.page_url,i=void 0===a?"":a,o=t.page_hash,c=t.page_type;if(r.some((function(e){return i.includes(e)})))return(0,le.Q6)("PDDNavigator","backToGoodsList",{page_url:i,page_hash:o,page_type:c}),{v:void 0}},i=n.pageSourceStack.length-1;case 8:if(!(i>=0)){e.next=15;break}if(o=a(i),"object"!==(0,ge.Z)(o)){e.next=12;break}return e.abrupt("return",o.v);case 12:i--,e.next=8;break;case 15:ye.ZP.back();case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_e=r(23327);function Pe(e){var t=e.currentPlayAudio,r=e.onPause,n=e.onPlay,a=e.addAudioFromVideo,i=e.sessionId,c=(0,o.useRef)(!1),u=(0,o.useRef)(!1),s=(0,o.useCallback)((0,b.Z)(k().mark((function e(){var n;return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t,e.prev=1,!n.isFromVideo){e.next=6;break}return e.next=5,(0,se.lW)("pdd_videokit_music_direct_play",{music_play_url:n.playUrl,session_id:i});case 5:return e.abrupt("return");case 6:return e.next=8,(0,le.Sk)({audio_id:n.audioId,audio_url:n.playUrl,audio_check_settings:1,audio_volume:.5,complete:function(e){var t=(new Date).getTime(),a=n.startPlayTimestamp;t-(void 0===a?t:a)>=n.playInterval&&r(n)}});case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),(0,_e.y)(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])}))),[t,r]),l=(0,o.useCallback)((0,b.Z)(k().mark((function e(){return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([(0,se.lW)("pdd_videokit_music_direct_pause",{session_id:i}),(0,le.ON)()]);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),(0,_e.y)(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])}))),[]);return(0,o.useEffect)((function(){be.isNativePlatform&&(u.current?t?(l(),s()):l():u.current=!0)}),[t,l,s,r]),(0,o.useEffect)((function(){if(be.isNativePlatform){var e=function(){},n=function(){},a=function(){t&&r(t)};return(0,b.Z)(k().mark((function t(){return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,se.rB)("onAppHide",a);case 2:return e=t.sent,t.next=5,(0,se.rB)("onPageHide",a);case 5:n=t.sent;case 6:case"end":return t.stop()}}),t)})))(),function(){e(),n()}}}),[t,r,n,s,l]),(0,o.useEffect)((function(){if(be.isNativePlatform&&!c.current){c.current=!0;var e=function(){};return(0,b.Z)(k().mark((function t(){return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,se.rB)("edit_music_library_notify",(function(e){(0,de.Cp)();try{var t=e;"string"==typeof e&&(t=JSON.parse(e));var r=t,n=r.source_router_url,a=r.action;if("back"!==(void 0===a?"back":a))return;he(n)}catch(e){(0,_e.y)(e),(0,fe.Z)("解析音乐使用消息体失败")}}));case 2:e=t.sent;case 3:case"end":return t.stop()}}),t)})))(),function(){e()}}}),[]),(0,o.useEffect)((function(){if(be.isNativePlatform){var e=function(){};return(0,b.Z)(k().mark((function t(){return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,se.rB)("pdd_user_did_finish_get_audio_from_video",(function(e){a(e)}));case 2:e=t.sent;case 3:case"end":return t.stop()}}),t)})))(),function(){e()}}}),[]),null}var xe=r(15913),Ie=r.n(xe);function Oe(e){var t=e.show,r=e.style;return t?o.createElement("div",{className:Ie().root,style:r},o.createElement("span",{className:Ie().icon}),o.createElement("span",{className:Ie().text},"正在加载中...")):null}function Ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ke(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ee(Object(r),!0).forEach((function(t){(0,v.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ee(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function we(e){var t=e.show,r=e.text,n=e.style;return t?o.createElement("div",{style:ke({lineHeight:1,fontWeight:400,width:"100%",fontSize:"0.14rem",textAlign:"center",color:"#666",padding:"0.2rem 0"},n)},r||"没有更多了..."):null}function Ze(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ne(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ze(Object(r),!0).forEach((function(t){(0,v.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ze(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Se(e){var t=e.rootMargin,r=e.onIntersecting,n=e.threshold,a=e.root,i=e.style,c=(0,o.useRef)(null);return(0,o.useEffect)((function(){var e=new IntersectionObserver((function(e){r&&e.length&&e.forEach((function(t){t.isIntersecting&&r(e[0])}))}),{root:a,rootMargin:t,threshold:n});return e.observe(c.current),function(){return e.disconnect()}}),[r,a,t,n]),o.createElement("div",{ref:c,style:Ne({height:1},i)})}Oe.defaultProps={style:null},we.defaultProps={text:"没有更多了...",style:null},Se.defaultProps={rootMargin:"600px"};var Le=(0,o.forwardRef)((function(e,t){var r=e.loadMore,n=e.hasMore,a=e.initialLoading,i=e.showInitialLoading,c=e.loading,u=e.children,s=e.className,l=e.style,d=e.renderEnd,f=e.renderLoading,p=e.dataLength,m=e.rootMargin,v=a?i:c,b=null;b=f?!!v&&f():o.createElement(Oe,{show:v});var g=!n&&!c,y=null;return y=d?g&&d():o.createElement(we,{show:g}),o.createElement("section",{className:s,style:l,ref:t},u,b,y,n&&!c&&!a&&o.createElement(Se,{key:p,onIntersecting:r,rootMargin:m}))}));Le.defaultProps={showInitialLoading:!0,style:null,className:"",dataLength:0,renderEnd:null,renderLoading:null};var Me=r(344),je=r(95813),Ce=(r(51876),r(37548)),De=r(3009),Ae=r(31658),Te=["processParam","resizeWidth","quality","lazy","trimUrlQuery","src"];function ze(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ue(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ze(Object(r),!0).forEach((function(t){(0,v.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ze(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Be(e){var t,r=e.processParam,n=e.resizeWidth,a=e.quality,i=e.lazy,c=void 0!==i&&i,u=e.trimUrlQuery,s=void 0!==u&&u,l=e.src,d=(0,je.Z)(e,Te),f=(0,o.useContext)(De.Z),p=(0,o.useContext)(Ae.Z),m=null==p||null===(t=p.platform)||void 0===t?void 0:t.system,v=!!m&&m!==me.we.IOS,b=l||"";return s&&(b=b.split("?")[0]),o.createElement(Ce.Z,(0,Me.Z)({processParam:Ue({webpEnable:f,enableGifToWebp:v,resizeWidth:n,quality:a},r),lazy:c,src:b},d))}var qe,Re="https://promotion.pddpic.com/promo/short_video/a3d1e326-e250-4cb2-99e1-86d4505e24f3.png.slim.png",He="https://promotion.pddpic.com/promo/short_video/23c61059-4031-401b-b714-3e0137cc0cc8.png.slim.png",We="https://promotion.pddpic.com/promo/short_video/3c68df79-27c9-479f-80a1-8eaa4989c6f2.gif",Fe="https://promotion.pddpic.com/promo/short_video/b06ce134-a736-4330-931a-ddff84767e26.gif.slim.c3.gif",Ge=r(52171),Ve=r(23493),Xe=r.n(Ve),Je=(r(50110),r(52505)),Ye=r(57753),Qe=r(14566),Ke=r.n(Qe),$e=1034200,et="请去拼多多APP进行操作",tt="请升级拼多多最新版本APP进行操作";function rt(e){var t=e.model,r=e.idx,n=e.sessionId,a=e.loadCover,i=e.isSendSiblingMusic,c=e.musicList,u=e.onPlay,s=e.onPause,l=e.onStartLoading,d=e.onEndLoading,f=t.labels,p=void 0===f?[]:f,m=t.coverUrl,v=void 0===m?"":m,g=t.coverUrlBase64,y=t.audioName,h=void 0===y?"":y,_=t.isPlaying,P=t.loadStatus,x=void 0===P?S.NotLoad:P,I=(0,o.useMemo)((function(){return{exps:"",p_rec:"",page_el_sn:1034199,music_id:t.audioId,music_status:t.isPlaying?0:1}}),[t]),O=(0,o.useCallback)((0,b.Z)(k().mark((function e(){var r,n,a;return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(be.isNativePlatform){e.next=3;break}return(0,fe.Z)(et),e.abrupt("return");case 3:if(!((0,me.yC)(be.version,"4.70.0")<0)){e.next=6;break}return(0,fe.Z)(tt),e.abrupt("return");case 6:if(r=t.isPlaying,n=t.loadStatus,a=void 0===n?S.NotLoad:n,(0,Ye.hJ)(I),!r){e.next=12;break}s(t),e.next=26;break;case 12:if(e.prev=12,a!==S.Loading){e.next=15;break}return e.abrupt("return");case 15:if(l(t),t.isFromVideo){e.next=19;break}return e.next=19,(0,le.ST)({audio_id:t.audioId,audio_url:t.playUrl});case 19:u(t),e.next=26;break;case 22:e.prev=22,e.t0=e.catch(12),d(t),(0,_e.y)(e.t0);case 26:case"end":return e.stop()}}),e,null,[[12,22]])}))),[t,I,s,u,l,d]),E=Xe()(function(){var e=(0,b.Z)(k().mark((function e(t,a){var o,u,s,l,d;return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.stopPropagation(),clearTimeout(qe),(0,Ye.hJ)({page_el_sn:$e,music_id:a.audioId}),be.isNativePlatform){e.next=6;break}return(0,fe.Z)(et),e.abrupt("return");case 6:if("5.88.0",!((0,me.yC)(be.version,"5.88.0")<0)){e.next=10;break}return(0,fe.Z)(tt),e.abrupt("return");case 10:return e.prev=10,(0,de.$Z)(),i&&(20,o=c.slice(r,r+20),u=[],s=-1,o.length<20&&(l=Math.max(r-20+o.length,0),u=c.slice(l,r)),d=[].concat((0,Ge.Z)(u),(0,Ge.Z)(o)).map((function(e,t){return e.audioId===a.audioId&&(s=t),{play_url:e.playUrl,music_id:e.audioId,audio_name:e.audioName,audio_duration:e.playInterval,audio_type:e.type,cover_url:e.coverUrl||"",cover_path_base64:e.coverUrlBase64||"",audio_labels:e.labels||[]}})),(0,se.lW)("shoot_music_library_list_receive",{music_list:JSON.stringify(d||[]),selected_audio_id:a.audioId,selected_audio_index:s,session_id:n})),e.next=15,(0,se.lW)("edit_music_library_receive",{audio_url:a.playUrl,audio_id:a.isFromVideo?void 0:a.audioId,audio_name:a.audioName,audio_duration:a.playInterval,audio_type:a.type,audio_cover_url:a.coverUrl||"",cover_path_base64:a.coverUrlBase64||"",audio_labels:JSON.stringify(a.labels||[]),audio_play_interval:a.playInterval,session_id:n});case 15:qe=setTimeout((function(){(0,_e.y)(new Error("music pick back timeout")),(0,de.Cp)(),he("pdd_capture.html")}),5e3),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(10),(0,_e.y)(e.t0),(0,de.Cp)();case 22:case"end":return e.stop()}}),e,null,[[10,18]])})));return function(t,r){return e.apply(this,arguments)}}(),1e3),w=x===S.Loading?Fe:_?He:Re,Z=g||(null==v?void 0:v.split("?")[0])||"";return o.createElement(Je.Z,{trackingInfo:I},o.createElement("div",{className:Ke().musicItem,onClick:O},o.createElement("div",{className:Ke().cover},a&&Z?o.createElement("img",{src:Z,className:Ke().coverImg}):null,o.createElement(Be,{src:w,className:Ke().icon,resizeWidth:90})),o.createElement("div",{className:Ke().middle},o.createElement("div",{className:Ke().nameBox},o.createElement("div",{className:$()(Ke().name,_?Ke().isPlaying:"")},h),_?o.createElement(Be,{src:We,className:Ke().playingIcon}):null),p.length>0&&o.createElement("div",{className:Ke().labels},p.map((function(e,t){return o.createElement("span",{key:t,className:Ke().label},e.name)})))),o.createElement(Je.Z,{trackingInfo:{page_el_sn:$e,music_id:t.audioId}},o.createElement("div",{className:Ke().btn,onClick:function(e){return E(e,t)}},"使用"))))}var nt=r(49112),at=r.n(nt);var it=(0,c.Pi)((function(e){var t=e.labelId,r=e.loadCover,n=e.sessionId,a=re().store,i=a.dataMap,c=a.isSendSiblingMusic,u=a.reqMoreList,s=a.onPlay,l=a.onStartLoading,d=a.onEndLoading,f=a.onPause;if((0,o.useEffect)((function(){i[t]||u(t)}),[]),!i[t])return null;var p=i[t],m=p.hasMore,v=void 0!==m&&m,b=p.loading,g=void 0!==b&&b,y=p.model,h=void 0===y?[]:y;return v||g||0!==h.length?o.createElement(Le,{hasMore:v,loading:g,loadMore:function(){return u(t)}},o.createElement("div",{className:at().list},h.map((function(e,a){return o.createElement(rt,{model:e,key:e.audioId,sessionId:n,idx:a,isSendSiblingMusic:c,musicList:h,loadCover:r,labelId:t,onPlay:s,onPause:f,onStartLoading:l,onEndLoading:d})})))):o.createElement("div",{className:at().emptyArea},o.createElement(Be,{src:"https://promotion.pddpic.com/promo/short_video/b626ffb0-ca86-469a-a31a-cd2589b0379f.png.slim.png",className:at().emptyIcon}),o.createElement("p",null,"暂无音乐收藏"))})),ot=r(35607),ct=r(99335),ut=r.n(ct),st=function(e){var t=e.navigationHeight,r=e.statusbarHeight,n=e.sessionId,a={top:r,height:t-r},i="1"===re().store.$ctx.query.music_extract;return o.createElement("div",{className:ut().box,style:{height:t,display:t?"block":"none"}},o.createElement("div",{className:ut().inner,style:a},o.createElement(Be,{src:"https://promotion.pddpic.com/promo/short_video/5421a190-9250-4470-a295-f73d84437a3a.png.slim.png",className:ut().backIcon,onClick:function(){ye.ZP.back()}}),"音乐库",i&&o.createElement(Je.Z,{trackingInfo:{page_el_sn:7254494}},o.createElement("div",{className:ut().pick,onClick:function(){(0,ot.ax)({page_el_sn:7254494}),(0,se.lW)("pdd_videokit_music_extract",{session_id:n})}},"音乐提取"))))},lt=(0,o.memo)(st),dt=r(17924),ft=r.n(dt),pt=function(e){var t=e.tab,r=e.active,n=e.idx,a=e.onClick,i=t.name,c={page_el_sn:1034196,label_ids:t.labelId};return o.createElement(Je.Z,{trackingInfo:c},o.createElement("div",{className:$()(ft().tabItem,r?ft().active:""),onClick:function(){(0,Ye.hJ)(c),a(n)}},i))},mt=r(24649),vt=r(71714),bt=r.n(vt),gt=(0,o.memo)((function(e){var t=e.isSendSiblingMusic;return o.createElement("div",{className:bt().searchBox},o.createElement("div",{className:bt().searchInput,onClick:function(){(0,Ye.hJ)({page_el_sn:1076256});var e="/vlive_music_search.html?_pdd_sbs=1&_pdd_fs=1&_pdd_tc=00ffffff";t&&(e=(0,mt.ru)({need_list:1},e)),ye.ZP.uniformForward(e)}},o.createElement(Be,{src:"https://promotion.pddpic.com/promo/short_video/e4dd6c22-3af7-4c29-b69d-6f6e18e6927d.png.slim.png",className:bt().searchIcon}),"搜索歌曲名称"))})),yt=r(50508),ht=r.n(yt);function _t(e){var t=e.model,r=e.onPlay,n=e.onCancel,a=e.onPause,i=e.onStartLoading,c=e.onEndLoading,u=e.sessionId,s=t.coverUrl,l=void 0===s?"":s,d=t.coverUrlBase64,f=t.audioName,p=void 0===f?"":f,m=t.isPlaying,v=t.loadStatus,g=void 0===v?S.NotLoad:v,y=(0,o.useCallback)((0,b.Z)(k().mark((function e(){var n,o,u;return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(be.isNativePlatform){e.next=3;break}return(0,fe.Z)("请去拼多多APP进行操作"),e.abrupt("return");case 3:if(!((0,me.yC)(be.version,"4.70.0")<0)){e.next=6;break}return(0,fe.Z)("请升级拼多多最新版本APP进行操作"),e.abrupt("return");case 6:if(n=t.isPlaying,o=t.loadStatus,u=void 0===o?S.NotLoad:o,!n){e.next=11;break}a(t),e.next=25;break;case 11:if(e.prev=11,u!==S.Loading){e.next=14;break}return e.abrupt("return");case 14:if(i(t),t.isFromVideo){e.next=18;break}return e.next=18,(0,le.ST)({audio_id:t.audioId,audio_url:t.playUrl});case 18:r(t),e.next=25;break;case 21:e.prev=21,e.t0=e.catch(11),c(t),(0,_e.y)(e.t0);case 25:case"end":return e.stop()}}),e,null,[[11,21]])}))),[t,a,r,i,c]),h=Xe()((function(e){e.stopPropagation(),(0,se.lW)("shoot_music_library_cancel_music",{session_id:u,audio_url:t.playUrl,audio_name:t.audioName,audio_cover_url:t.coverUrl}),n(t)}),1e3),_=g===S.Loading?Fe:m?He:Re,P=d||l;return o.createElement("div",{className:ht().wrap},o.createElement("div",{className:ht().musicItem,onClick:y},o.createElement("div",{className:ht().cover},P?o.createElement("img",{src:P}):null,o.createElement(Be,{src:_,className:ht().icon,resizeWidth:90,trimUrlQuery:!0})),o.createElement("div",{className:ht().nameBox},o.createElement("div",{className:$()(ht().name,m?ht().isPlaying:"")},p),m?o.createElement(Be,{src:We,className:ht().playingIcon}):null),o.createElement("div",{className:ht().btn,onClick:function(e){return h(e)}},"取消使用")))}var Pt=(0,o.memo)(_t),xt=r(63455),It=r.n(xt),Ot=(0,c.Pi)((function(){var e=re().store,t=e.$ctx,r=e.isSendSiblingMusic,n=e.currentTabIndex,a=e.currentPlayAudio,i=e.matchedAudio,c=e.tabs,u=e.needExtraPadding,s=e.clearMatchedAudio,l=e.changeCurrentTab,d=e.onPause,f=e.onPlay,p=e.onStartLoading,m=e.onEndLoading,b=e.addAudioFromVideo,g=(0,o.useContext)(ee.Nx),y=g.navigationHeight,h=void 0===y?0:y,_=g.statusbarHeight,P=void 0===_?0:_,x=t.query.session_id;return o.createElement("div",{className:It().app},o.createElement(Pe,{currentPlayAudio:a,onPause:d,onPlay:f,addAudioFromVideo:b,sessionId:x}),o.createElement(lt,{navigationHeight:h,statusbarHeight:P,sessionId:x}),o.createElement(gt,{isSendSiblingMusic:r}),o.createElement(ce,{tabs:c||[],containerClassName:It().tabList,activeTabIdx:n,activeMarkClassName:It().activeMark,renderItem:function(e,t,r){return o.createElement(pt,{tab:e,idx:t,active:r,onClick:l})}}),o.createElement(te.N,{index:n,onSlideEnd:l},c.map((function(e,t){return o.createElement(ue,{key:e.labelId,disabled:t===n},o.createElement("div",{className:$()(It().swiperItem,(0,v.Z)({},It().paddingExtra,u)),style:{height:"calc(100vh - ".concat(h,"px - ").concat("0.5rem"," - ").concat(".42rem",")")}},o.createElement(it,{index:t,labelId:e.labelId,loadCover:Math.abs(t-n)<=2,sessionId:x})))}))),!!i&&o.createElement(Pt,{model:i,onPlay:f,onPause:d,onStartLoading:p,onEndLoading:m,onCancel:s,sessionId:x}))})),Et=l()((0,d.k)(),(0,n.Iq)({store:Q},{serverTemplateName:"vlive_music_list",title:"音乐库",fallbackCSR:!0,requireLogin:!0,options:{pageProperty:{pageName:"music_list",pageSN:28799},shareInfo:{noDefaultShare:!0},noDefaultShare:!0,disablePullReload:!0}}),(0,c.f3)("store"),c.Pi)((function(e){var t=e.store;return o.createElement(f.I,{store:t},o.createElement("div",{className:m().pageWrap},o.createElement(Ot,null),o.createElement(u.eA,null)))})),kt=a(Et),wt=(0,i.Z)(Et),Zt=r(19303);Promise.resolve("function"==typeof wt&&wt()).then((function(){return(0,Zt.x)(kt)}))},81114:function(e,t,r){"use strict";var n;!function(e){e[e.DouYin=1]="DouYin",e[e.KuaiShou=2]="KuaiShou",e[e.ShiPinHao=3]="ShiPinHao",e[e.Bilibili=4]="Bilibili",e[e.XiaoHongShu=5]="XiaoHongShu",e[e.Taobao=6]="Taobao",e[e.Other=7]="Other",e[e.WeiSi=8]="WeiSi",e[e.DuXiaoSi=9]="DuXiaoSi",e[e.XiGua=10]="XiGua"}(n||(n={}));var a,i,o;n.DouYin,n.KuaiShou,n.XiaoHongShu,n.Bilibili;!function(e){e[e.DOING=0]="DOING",e[e.COMPLETED=1]="COMPLETED",e[e.FAILED=2]="FAILED",e[e.INIT=3]="INIT"}(a||(a={})),function(e){e[e.NOT=0]="NOT",e[e.LOADING=1]="LOADING",e[e.COMPLETE=2]="COMPLETE",e[e.FAILED=3]="FAILED"}(i||(i={})),function(e){e[e.PullDownRefresh=1]="PullDownRefresh",e[e.NormalLoad=0]="NormalLoad"}(o||(o={}))},57753:function(e,t,r){"use strict";r.d(t,{hJ:function(){return i}});var n,a=r(35607);!function(e){e.Impr="impr",e.Click="click"}(n||(n={}));var i=function(e){return(0,a.ax)(e)}},24316:function(){},53414:function(e){e.exports={content:"_2P6zzsn-",isNotTransform:"_3MfRZUr6",item:"_2pZSBHy2",innerItem:"_3io_krRr"}},94506:function(e){e.exports={group:"_1bzZPkJF",childHide:"_3kd5EFjp",childHidden:"_16eAl1ZI",childVisible:"_3Bxk5qY0"}},59795:function(e){e.exports={pageWrap:"_3H56iXvO"}},50508:function(e){e.exports={"fixed-cover":"D0-9LMzg",musicItem:"_3nChpWFU",cover:"_2dY2-Qih",coverImg:"lOHyU-VG",icon:"UMEPLEEP",nameBox:"_2JyHh1PH",playingIcon:"_3pHDe01d",name:"_1a-fIzUE",isPlaying:"Oz0y0sp0",btn:"_2pgDGjfc",zoomIn:"_3K9q7PuH"}},99335:function(e){e.exports={"fixed-cover":"_9QmWFxUP",box:"_2nS3XkkH",inner:"_3DK45lqF",backIcon:"_2cDuYv6q",pick:"_3Afrliuh",zoomIn:"_6f7Y5y4p"}},14566:function(e){e.exports={"fixed-cover":"_2q-uW6bW",musicItem:"ticxBKJd",cover:"_1f5I-gSo",coverImg:"_2rJWc8DL",icon:"_1yWa_DeM",middle:"_2UOflExb",nameBox:"_2YrT8I5m",playingIcon:"_30F7sK3R",name:"_1hcCPYqf",isPlaying:"uK8pRRTn",labels:"_2SfrkXP4",label:"_14B_jzw7",btn:"vIM-6lRb",zoomIn:"_379JgMXv"}},49112:function(e){e.exports={list:"_3mX6py2O",emptyArea:"GBxIr68x",emptyIcon:"_2cu0S38H"}},71714:function(e){e.exports={"fixed-cover":"_2nkdA8G0",searchBox:"_14I1njWO",searchInput:"_3zwxaH2m",searchIcon:"_3yRqe4jQ",zoomIn:"_11M7zEeh"}},17924:function(e){e.exports={"fixed-cover":"_3kfVm2fZ",tabItem:"_18s_bxvp",active:"_4dobC9_Q",zoomIn:"tRMCOr6Z"}},63455:function(e){e.exports={"fixed-cover":"q3_AHGRi",tabList:"_1aeDegc0",activeMark:"wJvX_1gc",swiperItem:"_2pvHZYZj",paddingExtra:"_33suvp7s",zoomIn:"_1GqNGalY"}},15913:function(e){e.exports={root:"_2XEBYAxN",icon:"h3w-V8Rd",loading:"_1CGPMlPN",text:"_3G4Gq7Iz"}},66938:function(e){e.exports={"fixed-cover":"_1JoBA3CA",scroll:"_1dmNyiRs",tabs:"_1R7q2UHu",tabItem:"_1rGaxCt4",activeMark:"_12HDU61Z",zoomIn:"_2PWhnQD1"}},29807:function(e){"use strict";e.exports=pinbridge}},u={};function s(e){var t=u[e];if(void 0!==t)return t.exports;var r=u[e]={id:e,loaded:!1,exports:{}};return c[e].call(r.exports,r,r.exports,s),r.loaded=!0,r.exports}s.m=c,e=[],s.O=function(t,r,n,a){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],n=e[l][1],a=e[l][2];for(var o=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(s.O).every((function(e){return s.O[e](r[c])}))?r.splice(c--,1):(o=!1,a<i&&(i=a));if(o){e.splice(l--,1);var u=n();void 0!==u&&(t=u)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,n,a]},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,{a:t}),t},r=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},s.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var a=Object.create(null);s.r(a);var i={};t=t||[null,r({}),r([]),r(r)];for(var o=2&n&&e;"object"==typeof o&&!~t.indexOf(o);o=r(o))Object.getOwnPropertyNames(o).forEach((function(t){i[t]=function(){return e[t]}}));return i.default=function(){return e},s.d(a,i),a},s.d=function(e,t){for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.f={},s.e=function(e){return Promise.all(Object.keys(s.f).reduce((function(t,r){return s.f[r](e,t),t}),[]))},s.u=function(e){return"assets/js/"+({699:"ms_web_c",1437:"pdd-mod/qq-service",1795:"react_anti",2840:"ms_wx_c",3400:"ms_wx_app_c",3910:"monitor-dev-panel",5911:"ms_native_c",6795:"ms_qq_c",8920:"pdd-mod/wechat-service"}[e]||e)+"_"+{699:"6732b5028e99ec3711b5",1437:"8c02393760457f458cb0",1795:"441bea40694e5c52acea",2568:"6a9075934c166e207340",2840:"6434b9a1d923ed8182f5",3400:"24b2cb1994a4daafc256",3910:"1463c1311397215db064",4369:"5a4a3b3070791597ae79",5911:"7eb7b058f14ab10fa6ff",5929:"a14da7d1d823f43f659e",6795:"0c9491c4660477c5771a",8920:"02c40a20678ac528640a"}[e]+".js"},s.miniCssF=function(e){return"assets/css/monitor-dev-panel_d314c614b241f08063cc.css"},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n={},a="mobile-live-video:",s.l=function(e,t,r,i){if(n[e])n[e].push(t);else{var o,c;if(void 0!==r)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==a+r){o=d;break}}o||(c=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,s.nc&&o.setAttribute("nonce",s.nc),o.setAttribute("data-webpack",a+r),o.src=e),n[e]=[t];var f=function(t,r){o.onerror=o.onload=null,clearTimeout(p);var a=n[e];if(delete n[e],o.parentNode&&o.parentNode.removeChild(o),a&&a.forEach((function(e){return e(r)})),t)return t(r)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=f.bind(null,o.onerror),o.onload=f.bind(null,o.onload),c&&document.head.appendChild(o)}},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},s.j=6423,s.p="https://static.pddpic.com/",s.p=window.__webpack_public_path__||s.p,i=function(e){return new Promise((function(t,r){var n=s.miniCssF(e),a=s.p+n;if(function(e,t){for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var a=(o=r[n]).getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){var o;if((a=(o=i[n]).getAttribute("data-href"))===e||a===t)return o}}(n,a))return t();!function(e,t,r,n){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=function(i){if(a.onerror=a.onload=null,"load"===i.type)r();else{var o=i&&("load"===i.type?"missing":i.type),c=i&&i.target&&i.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=o,u.request=c,a.parentNode.removeChild(a),n(u)}},a.href=t,document.head.appendChild(a)}(e,a,t,r)}))},o={6423:0},s.f.miniCss=function(e,t){o[e]?t.push(o[e]):0!==o[e]&&{3910:1}[e]&&t.push(o[e]=i(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))},function(){var e={6423:0};s.f.j=function(t,r){var n=s.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise((function(r,a){n=e[t]=[r,a]}));r.push(n[2]=a);var i=s.p+s.u(t),o=new Error;s.l(i,(function(r){if(s.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;o.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",o.name="ChunkLoadError",o.type=a,o.request=i,n[1](o)}}),"chunk-"+t,t)}},s.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,a,i=r[0],o=r[1],c=r[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(n in o)s.o(o,n)&&(s.m[n]=o[n]);if(c)var l=c(s)}for(t&&t(r);u<i.length;u++)a=i[u],s.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return s.O(l)},r=self.webpackChunkmobile_live_video=self.webpackChunkmobile_live_video||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var l=s.O(void 0,[1216,6457,4115],(function(){return s(48001)}));l=s.O(l)}();
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/assets/js/vlive_music_38598cff157e92935356.js.map