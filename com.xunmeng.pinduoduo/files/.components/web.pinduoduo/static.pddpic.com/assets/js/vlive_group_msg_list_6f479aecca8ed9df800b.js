!function(){var e,t,n,r,o,i,a,c={32453:function(e,t,n){"use strict";n(96253),n(40851);var r,o=n(82811),i=n(67376),a=n(87401),c=n(70798),l=n(45063),u=n(61824),s=n(55597),f=(n(82139),n(27476),n(95767),n(98837),n(98351),n(18482)),p=n(25118),d=n(38796),m=n(68309),g=n(69348),O=n(99057),v=n(45558),y=n(91074),h=n(11269),b=n(43736),_=(n(11246),n(62850),n(62773),n(96409),n(52310),n(94882),n(19371),n(37883)),E=n.n(_),w=n(22188),P=n(42202),I=n(22691),R=n(63320),Z=n(64258),L=n(94537),T=n(81114),D=1,S=2,N=3,k=(r={},(0,f.Z)(r,T.gn.AUTHOR_MSG_GROUP,"创作者服务通知"),(0,f.Z)(r,T.gn.FOCUS_GROUP,"关注"),(0,f.Z)(r,T.gn.FAVOR_GROUP,"点赞"),(0,f.Z)(r,T.gn.AUTHOR_RED_PACKET_GROUP,"作者红包"),(0,f.Z)(r,T.gn.RED_FLOWER_GROUP,"送花"),r);function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,h.Z)(e);if(t){var o=(0,h.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,y.Z)(this,n)}}var U,A,M=function(e){(0,v.Z)(n,e);var t=C(n);function n(){return(0,m.Z)(this,n),t.apply(this,arguments)}return(0,g.Z)(n,[{key:"getMyMsgList",value:function(e){return this.post("api/leporis/notification/list",e,{timeout:15e3})}}]),n}(n(49937).Z),j=n(80107),F=n(11830),G="like_feed_toast",x=3;!function(e){e[e.REDPOCKET=40311]="REDPOCKET",e[e.FOLLOW_RED_PACKET=41010]="FOLLOW_RED_PACKET"}(A||(A={}));var H=1,V=2,z=(U={},(0,f.Z)(U,H,"https://funimg.pddpic.com/fb8838b5-8ebf-4582-bd53-94d791f95e3b.png.slim.png"),(0,f.Z)(U,V,"https://funimg.pddpic.com/ddd484c5-21c3-481b-bcdb-9e01c8562831.png.slim.png"),n(42972)),W=n(39757);n(66108);function B(e,t){"undefined"!=typeof localStorage&&K(e,t,localStorage)}function K(e,t,n){if(e)return null==t?n.removeItem(e):void n.setItem(e,JSON.stringify(t))}function X(e){if("undefined"!=typeof localStorage)return J(e,localStorage)}function J(e,t){if(null==e)return null;var n=null;try{n=JSON.parse(t.getItem(e))}catch(e){console.error("_getVal() Error while parsing value",e)}return n}var Y,q,$,Q,ee,te,ne,re,oe,ie,ae,ce,le,ue,se,fe,pe,de,me;(new Date).toDateString();function ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(n),!0).forEach((function(t){(0,f.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ge(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ve(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,h.Z)(e);if(t){var o=(0,h.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,y.Z)(this,n)}}var ye=106652,he=(Y=w.aD.bound,q=w.aD.bound,$=w.aD.bound,Q=w.aD.bound,ee=w.aD.bound,te=function(e){(0,v.Z)(i,e);var t,n,r,o=ve(i);function i(){var e;(0,m.Z)(this,i);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=o.call.apply(o,[this].concat(n))).service=void 0,e.followUserService=void 0,(0,d.Z)(e,"list",ne,(0,O.Z)(e)),(0,d.Z)(e,"hasMore",re,(0,O.Z)(e)),(0,d.Z)(e,"redDotTimeMs",oe,(0,O.Z)(e)),(0,d.Z)(e,"isLoading",ie,(0,O.Z)(e)),e.postIndexParam=null,e.pageIndexParam=null,e.abResult=[],e.navigationHeight=0,e.skinId=void 0,(0,d.Z)(e,"firstListIds",ae,(0,O.Z)(e)),(0,d.Z)(e,"needShowLayer",ce,(0,O.Z)(e)),(0,d.Z)(e,"skin",le,(0,O.Z)(e)),(0,d.Z)(e,"pUnoContext",ue,(0,O.Z)(e)),(0,d.Z)(e,"getMsgList",se,(0,O.Z)(e)),(0,d.Z)(e,"clearRedDot",fe,(0,O.Z)(e)),(0,d.Z)(e,"updateFollowedStatus",pe,(0,O.Z)(e)),e.getRemoteData=(0,p.Z)(E().mark((function t(){return E().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.getMsgList());case 1:case"end":return t.stop()}}),t)}))),e.getLeoData=function(){try{if(void 0!==e.skinId){var t=(0,Z.$_)("msg_list_skin",e.$ctx.requestContext);e.skin=t["skin"+e.skinId]||{}}}catch(e){return{}}},e.lastUnReceiveNotificationIds=[],(0,d.Z)(e,"needGuideMsgPosition",de,(0,O.Z)(e)),(0,d.Z)(e,"showGuideLayer",me,(0,O.Z)(e)),e}return(0,g.Z)(i,[{key:"platformType",get:function(){var e;return Number(null===(e=this.$ctx.query)||void 0===e?void 0:e.platform_type)||T.gn.AUTHOR_MSG_GROUP}},{key:"platform",get:function(){return this.$ctx.platform}},{key:"isNativePlatform",get:function(){return this.platform.isNativePlatform}},{key:"targetNotificationId",get:function(){return+this.$ctx.query.notification_id}},{key:"isImmersive",get:function(){return 1==+this.$ctx.query._pdd_fs}},{key:"showFavorRedPacketClickTips",get:function(){var e=this.$ctx.query,t=e._scene,n=e.notification_id,r=e.action_type;return t===G&&!!n&&+r===x}},{key:"initServices",value:function(){this.service=new M(this.$axiosHttp)}},{key:"generateParams",value:function(){return{scene:(this.$ctx.query||{}).scene||"anchor_center",page_size:20,page_from:ye,platform_type:this.platformType,page_index_param:this.pageIndexParam}}},{key:"formatMsg",value:function(e,t,n){var r=(e||{}).userList,o=void 0===r?[]:r,i=o[0]||{};return t===i.uin?(o[0]=Oe(Oe({},i),{},{followed:n}),Oe({},e||{})):e}},{key:"unFollowUser",value:(r=(0,p.Z)(E().mark((function e(t){var n,r,o=arguments;return E().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]&&o[1],r={uin:t,pageSn:ye,pageElSn:n?F.Z.UnFollowFromEachBtnClick.page_el_sn:F.Z.UnFollowClick.page_el_sn},e.next=4,this.followUserService.unFollow(r);case 4:e.sent&&this.updateFollowedStatus({followUin:t,followed:!1});case 6:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)})},{key:"followUser",value:(n=(0,p.Z)(E().mark((function e(t){var n;return E().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={uin:t,pageSn:ye,pageElSn:F.Z.FollowClick.page_el_sn},e.next=3,this.followUserService.follow(n);case 3:e.sent&&this.updateFollowedStatus({followUin:t,followed:!0});case 5:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"getDatasource",value:function(){var e,t;return this.$title=(null===(e=this.$ctx.query)||void 0===e?void 0:e.title)||k[this.platformType],this.navigationHeight=(null===(t=this.$ctx.unoData)||void 0===t?void 0:t.nh)||0,[this.getRemoteData,this.getLeoData]}},{key:"prepareClientData",value:(t=(0,p.Z)(E().mark((function e(){var t;return E().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.followUserService=new j.Z(this.$axiosHttp),this.showFavorRedPacketClickTips&&this.showNewRedPacketStyle&&(t=X("first_show_favor_redpkt_guide_layer"),this.needShowLayer=1!==t);case 2:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"abJumpWay",get:function(){return{allJumpToVideoFlow:this.abResult.includes(T.fZ.NEW_2),openRedPacketNow:this.abResult.includes(T.fZ.NEW_1)}}},{key:"showNewRedPacketStyle",get:function(){return this.abResult.includes(T.fZ.NEW_1)||this.abResult.includes(T.fZ.NEW_2)}},{key:"registerMsgUpdate",value:function(){var e=this;this.isNativePlatform&&(0,R.rB)("mobileShortVideoMsgStatusChange",(function(t){var n=t||{},r=n.like_envelope_id,o=n.new_status,i=n.cash;if(Object.values(T.Nz).includes(o)&&r){var a=e.list.find((function(e){var t;return(null==e||null===(t=e.bizExt)||void 0===t?void 0:t.likeRedPacketId)===r}));a&&(i&&(a.bizExt.cash=i),a.bizExt.likeRedPacketStatus=o)}}))}},{key:"setShowGuideLayer",value:function(e,t,n){var r=this;if(e){var o=document.getElementById((0,W.Ch)(n)),i=(0,z.Z)(o,document.documentElement).top;if(!this.isImmersive&&i>0||this.isImmersive&&i>this.navigationHeight){var a=null;window.addEventListener("scroll",(function n(){null!==a&&clearTimeout(a),a=setTimeout((function(){var o=null==t?void 0:t.getBoundingClientRect(),i=o.top,a=o.left;r.needGuideMsgPosition={top:"calc(".concat(i,"px - 0.12rem)"),left:a},r.showGuideLayer=e,window.removeEventListener("scroll",n)}),500)}))}else{var c=null==t?void 0:t.getBoundingClientRect(),l=c.top,u=c.left;this.needGuideMsgPosition={top:"calc(".concat(l,"px - 0.12rem)"),left:u},this.showGuideLayer=e}}else this.showGuideLayer=e}}]),i}(L.u),ne=(0,b.Z)(te.prototype,"list",[w.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),re=(0,b.Z)(te.prototype,"hasMore",[w.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),oe=(0,b.Z)(te.prototype,"redDotTimeMs",[w.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ie=(0,b.Z)(te.prototype,"isLoading",[w.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),ae=(0,b.Z)(te.prototype,"firstListIds",[w.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),ce=(0,b.Z)(te.prototype,"needShowLayer",[w.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),le=(0,b.Z)(te.prototype,"skin",[w.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{redPocketBgImg:""}}}),(0,b.Z)(te.prototype,"showFavorRedPacketClickTips",[w.Fl],Object.getOwnPropertyDescriptor(te.prototype,"showFavorRedPacketClickTips"),te.prototype),ue=(0,b.Z)(te.prototype,"pUnoContext",[w.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{ls:T.hM.NormalLoad}}}),se=(0,b.Z)(te.prototype,"getMsgList",[w.aD],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return(0,p.Z)(E().mark((function t(){var n,r,o,i,a,c,l,u,s,f,p,d=arguments;return E().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=d.length>0&&void 0!==d[0]&&d[0],!e.isLoading){t.next=3;break}return t.abrupt("return");case 3:return e.isLoading=!0,t.prev=4,t.next=7,e.service.getMyMsgList(e.generateParams());case 7:if(t.t0=t.sent,t.t0){t.next=10;break}t.t0={};case 10:r=t.t0,o=(null==r?void 0:r.result)||{},i=o.hasMore,a=o.list,c=void 0===a?[]:a,l=o.redDotTimeMs,u=o.pageIndexParam,s=o.abResult,f=o.materialList,p=o.lastUnReceiveNotificationIds,(0,w.z)((function(){if(e.list=n?e.list.concat(c):c,e.hasMore=i,e.redDotTimeMs=l,e.pageIndexParam=u,null!=s&&s.length&&(e.abResult=s),!n){e.firstListIds=c.map((function(e){return e.notificationId}));var t=(f||[]).find((function(e){return 0===e.sceneType}))||{};e.skinId=t.id}null!=p&&p.length&&e.showNewRedPacketStyle&&(e.lastUnReceiveNotificationIds=p)}));case 13:return t.prev=13,e.isLoading=!1,t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[4,,13,16]])})))}}),fe=(0,b.Z)(te.prototype,"clearRedDot",[w.aD],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=e.platform,n=t.isLiteNativePlatform,r=t.version;e.isNativePlatform&&!n&&(0,P.yC)(r,"5.87.0")>=0&&(0,I.Q6)("JSVideoTab","removeMessageBoxSubTypeRedDot",{sub_type:e.platformType,timestamp:e.redDotTimeMs})}}}),(0,b.Z)(te.prototype,"formatMsg",[Y],Object.getOwnPropertyDescriptor(te.prototype,"formatMsg"),te.prototype),pe=(0,b.Z)(te.prototype,"updateFollowedStatus",[w.aD],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){var n=t.followUin,r=t.followed;(0,w.z)((function(){e.list=e.list.map((function(t){return e.formatMsg(t,n,r)}))}))}}}),(0,b.Z)(te.prototype,"unFollowUser",[q],Object.getOwnPropertyDescriptor(te.prototype,"unFollowUser"),te.prototype),(0,b.Z)(te.prototype,"followUser",[$],Object.getOwnPropertyDescriptor(te.prototype,"followUser"),te.prototype),(0,b.Z)(te.prototype,"abJumpWay",[w.Fl],Object.getOwnPropertyDescriptor(te.prototype,"abJumpWay"),te.prototype),(0,b.Z)(te.prototype,"showNewRedPacketStyle",[w.Fl],Object.getOwnPropertyDescriptor(te.prototype,"showNewRedPacketStyle"),te.prototype),(0,b.Z)(te.prototype,"registerMsgUpdate",[Q],Object.getOwnPropertyDescriptor(te.prototype,"registerMsgUpdate"),te.prototype),de=(0,b.Z)(te.prototype,"needGuideMsgPosition",[w.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),me=(0,b.Z)(te.prototype,"showGuideLayer",[w.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),(0,b.Z)(te.prototype,"setShowGuideLayer",[ee],Object.getOwnPropertyDescriptor(te.prototype,"setShowGuideLayer"),te.prototype),te),be=n(77153),_e=n(8224),Ee=n(344),we=n(15913),Pe=n.n(we);function Ie(e){var t=e.show,n=e.style;return t?a.createElement("div",{className:Pe().root,style:n},a.createElement("span",{className:Pe().icon}),a.createElement("span",{className:Pe().text},"正在加载中...")):null}function Re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ze(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Re(Object(n),!0).forEach((function(t){(0,f.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Re(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Le(e){var t=e.show,n=e.text,r=e.style;return t?a.createElement("div",{style:Ze({lineHeight:1,fontWeight:400,width:"100%",fontSize:"0.14rem",textAlign:"center",color:"#666",padding:"0.2rem 0"},r)},n||"没有更多了..."):null}function Te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function De(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Te(Object(n),!0).forEach((function(t){(0,f.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Se(e){var t=e.rootMargin,n=e.onIntersecting,r=e.threshold,o=e.root,i=e.style,c=(0,a.useRef)(null);return(0,a.useEffect)((function(){var e=new IntersectionObserver((function(e){n&&e.length&&e.forEach((function(t){t.isIntersecting&&n(e[0])}))}),{root:o,rootMargin:t,threshold:r});return e.observe(c.current),function(){return e.disconnect()}}),[n,o,t,r]),a.createElement("div",{ref:c,style:De({height:1},i)})}Ie.defaultProps={style:null},Le.defaultProps={text:"没有更多了...",style:null},Se.defaultProps={rootMargin:"600px"};var Ne=(0,a.forwardRef)((function(e,t){var n=e.loadMore,r=e.hasMore,o=e.initialLoading,i=e.showInitialLoading,c=e.loading,l=e.children,u=e.className,s=e.style,f=e.renderEnd,p=e.renderLoading,d=e.dataLength,m=e.rootMargin,g=o?i:c,O=null;O=p?!!g&&p():a.createElement(Ie,{show:g});var v=!r&&!c,y=null;return y=f?v&&f():a.createElement(Le,{show:v}),a.createElement("section",{className:u,style:s,ref:t},l,O,y,r&&!c&&!o&&a.createElement(Se,{key:d,onIntersecting:n,rootMargin:m}))}));Ne.defaultProps={showInitialLoading:!0,style:null,className:"",dataLength:0,renderEnd:null,renderLoading:null};var ke=n(50627),Ce=n(81254),Ue=n(8307),Ae=n(20342),Me=n(52505),je=n(86056),Fe=n(24649),Ge=n(40161),xe=n(59023),He=n(57753),Ve=n(23493),ze=n.n(Ve),We=n(94184),Be=n.n(We),Ke=n(72346),Xe=n(43802),Je=n.n(Xe);var Ye=function(e){var t=e||{},n=t.userList,r=t.followUser,o=t.unFollowUser,i=(null==n?void 0:n[0])||{},c=i.followed,l=i.reverseFollowed,u=i.uin,s=(0,a.useMemo)((function(){return c&&l?Ke.EV.FOLLOW_EACH:c&&!l?Ke.EV.HAS_FOLLOW:Ke.EV.NEED_FOLLOW}),[c,l]);return!Ke.Sw[s]||!u?null:a.createElement("span",{className:Be()(Je().hasFollow,(0,f.Z)({},Je().follow,s===Ke.EV.NEED_FOLLOW)),onClick:ze()((function(e){e&&e.preventDefault(),e&&e.stopPropagation(),s===Ke.EV.NEED_FOLLOW?r(u):o(u,c&&l)}),2e3)},Ke.Sw[s])},qe=n(42889),$e=n(21527),Qe=n.n($e),et=n(67331),tt=n(67055);function nt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function rt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?nt(Object(n),!0).forEach((function(t){(0,f.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):nt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ot=(0,c.Pi)((function(e){var t=e||{},n=t.userList,r=t.title,o=t.message,i=t.time,c=t.linkUrl,l=t.bizType,u=t.cover,s=t.buttonVo,f=t.platformType,d=t.messageConfig,m=t.preTitleIcon,g=t.lazy,O=t.followUser,v=t.unFollowUser,y=t.bizExt,h=t.notificationId,b=t.abJumpWay,_=t.showNewRedPacketStyle,w=t.platform,P=t.needShowGuide,I=t.showGuideLayer,R=t.setShowGuideLayer,Z=t.needGuideMsgPosition,L=t.styleType,k=t.tagList,C=t.skin,U=t.abResult,A=(n||[])[0]||{},M=A.avatar,j=A.personUrl,F=A.nickname,G=A.followed,x=A.reverseFollowed,H=A.sex,V=A.nearby,z=(d||{}).fontColor,K=void 0===z?"#9C9C9C":z,X=l===Ke.mI.FOCUS,J={page_el_sn:Ke.bj[l]||Ke.KG};if(l===Ke.mI.UP_VIDEO){var Y=_&&null!=y&&y.likeRedPacketId?1:0;J=rt(rt({},J),{},{is_redpkt:Y})}Ke.bj[l]||(J=rt(rt({},J),{},{message_type:l,message_id:h}));var q=[Ke.mI.UP_VIDEO,Ke.mI.UP_COMMENT,Ke.mI.FOCUS,Ke.Xc.FAVOR,Ke.Xc.COMMENT_FAVOR,Ke.mI.RED_FLOWER].includes(l),$=q?F:r,Q=q?r:o,ee=m||{},te=ee.wide,ne=ee.high,re={width:(0,W.Eo)(te),height:(0,W.Eo)(ne),margin:".02rem .04rem .02rem 0",objectFit:"cover"};(0,a.useEffect)((function(){if(P&&null!=y&&y.likeRedPacketId){var e=document.getElementById("envelope_"+h);B("first_show_favor_redpkt_guide_layer",1),R(!0,e,h)}}),[P]);var oe=function(){var e=(0,p.Z)(E().mark((function e(){var t;return E().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,He.hJ)(J);case 2:t=c||j,_&&null!=y&&y.likeRedPacketId&&(t=(0,Fe.ru)({like_red_packet_id:y.likeRedPacketId},t)),t&&je.ZP.uniformForward(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ie=function(){var e=(0,p.Z)(E().mark((function e(t){return E().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(f!==T.gn.AUTHOR_MSG_GROUP)||!j){e.next=6;break}return t.stopPropagation(),e.next=5,(0,He.hJ)({page_el_sn:Ke.bj[l]});case 5:je.ZP.uniformForward(j);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();if([Ke.dX.RED_PACKET_LOSE_STORAGE,Ke.dX.RED_PACKET].includes(L)){var ae;if(!y)return null;var ce=y;return L===Ke.dX.RED_PACKET_LOSE_STORAGE&&(ce=rt(rt({},y),{},{authorEnvelopeStatus:T.Nz.EXPIRED})),a.createElement(Me.Z,{trackingInfo:{page_el_sn:5471195,status:null===(ae=ce)||void 0===ae?void 0:ae.authorEnvelopeStatus}},a.createElement(et.Z,{avatar:M,goProfile:ie,nickname:F,tagList:k,time:i,title:r,message:o,bizExt:ce,linkUrl:c,notificationId:h,bgImg:C.redPocketBgImg,lazy:g}))}return a.createElement(Me.Z,{trackingInfo:J},a.createElement("div",{className:Qe().wrap,onClick:oe,id:(0,W.Ch)(h)},a.createElement("section",{className:Qe().left},a.createElement("div",{className:Qe().icon},!!M&&a.createElement(Ge.Z,{src:M,onClick:ie,trimUrlQuery:!0,lazy:g,resizeWidth:144}))),a.createElement("section",{className:Qe().right},a.createElement("div",{className:Qe().title,onClick:ie},$||"",a.createElement(tt.Z,{sex:H,nearby:V,followed:G,reverseFollowed:x,abResult:U,hideFollow:f===T.gn.FOCUS_GROUP})),a.createElement("div",{className:Qe().msg,style:{color:K}},!(null==m||!m.url)&&a.createElement(Ge.Z,{src:m.url,style:re,trimUrlQuery:!0,lazy:g}),[Ke.mI.UP_VIDEO,Ke.mI.UP_COMMENT].includes(l)&&a.createElement("div",{className:Qe().upIcon}),Q||""),a.createElement("div",{className:Qe().time},i||""),_&&(!(null==y||!y.likeRedPacketId)||!(null==y||!y.authorEnvelopeId))&&a.createElement(Ce.Z,{id:"envelope_"+h,platform:w,data:rt({title:r,linkUrl:c,notificationId:h,nickname:F,avatar:M},y),abJumpWay:b,goPlayVideo:oe}),I&&P&&a.createElement(qe.Z,{hide:function(){return R(!1)},position:Z,fingerStyle:{top:"0.27rem",left:"1.07rem"},maskStyle:{width:"1.67rem"}},a.createElement(Ce.Z,{platform:w,data:rt({title:r,linkUrl:c,notificationId:h,nickname:F,avatar:M},y),abJumpWay:b,goPlayVideo:oe,id:"envelope_"+h,closeLayer:function(){return R(!1)}}))),function(){if(u)return a.createElement(Ge.Z,{className:Qe().cover,src:u,trimUrlQuery:!0,lazy:g,resizeWidth:198});if(null!=s&&s.showType){var e=s.text,t=s.bgColor,r=s.color,o=s.size,i=s.imageUrl,f=s.showType,p={backgroundColor:t,color:r,fontSize:"".concat(o/100,"rem")};if(f===S)return a.createElement(Ge.Z,{className:Qe().cover,src:i,trimUrlQuery:!0,lazy:g});if(f===D)return a.createElement("section",{className:Qe().operation,style:p},e||"");if(f===N){var d=(0,xe.R)(e);return a.createElement("p",{className:Qe().talkText},d.map((function(e,t){return a.createElement("span",{key:"".concat(t,"-comment")},"text"===e.type&&e.text,"emoji"===e.type&&a.createElement(Ge.Z,{className:Qe().emojiStyle,src:e.url,trimUrlQuery:!0,lazy:g}))})))}}return X?a.createElement(Ye,{linkUrl:c,userList:n,bizType:l,followUser:O,unFollowUser:v}):null}()))})),it=n(23743),at=n.n(it);var ct=(0,c.Pi)((function(){var e=(0,ke.Z)().store||{},t=e.list,n=e.hasMore,r=e.isLoading,o=e.getMsgList,i=e.clearRedDot,c=e.followUser,l=e.unFollowUser,u=e.platformType,s=e.pUnoContext,f=e.abJumpWay,p=e.showNewRedPacketStyle,d=e.registerMsgUpdate,m=e.firstListIds,g=e.lastUnReceiveNotificationIds,O=e.$ctx,v=e.needShowLayer,y=e.targetNotificationId,h=e.showGuideLayer,b=e.setShowGuideLayer,_=e.needGuideMsgPosition,E=e.navigationHeight,w=e.skin,P=e.abResult;(0,a.useEffect)((function(){i(),(0,Ae.jQ)(null==s?void 0:s.ls,E),d()}),[i,null==s?void 0:s.ls,d]);var I=(0,a.useCallback)((function(){o(!0)}),[o]);return a.createElement("div",{className:at().wrap},a.createElement(Ne,{hasMore:n,dataLength:(null==t?void 0:t.length)||0,loading:r,loadMore:I},(t||[]).map((function(e,t){return a.createElement(ot,(0,Ee.Z)({key:(null==e?void 0:e.notificationId)||t,followUser:c,unFollowUser:l,platformType:u,lazy:t>8,abJumpWay:f,showNewRedPacketStyle:p,platform:O.platform,needShowGuide:v&&y===(null==e?void 0:e.notificationId),showGuideLayer:h,setShowGuideLayer:b,needGuideMsgPosition:_,skin:w,abResult:P},e))}))),!(null==g||!g.length)&&!(null==m||!m.length)&&a.createElement(Ue.Z,null,a.createElement(Ce.M,{firstListIds:m,lastUnReceiveNotificationIds:g})))})),lt=n(56753),ut=function(e){var t=e.title;return a.createElement(lt.h,{type:"static",title:t,renderHeaderRight:function(){return null}})},st=[{leoKey:"msg_list_skin",formatter:n(79596).p}],ft=(0,s.Z)((0,be.k)(),(0,Z.lV)(st),(0,l.Iq)({store:he},{serverTemplateName:"vlive_group_msg_list",title:"",fallbackCSR:!0,options:{pageProperty:{pageName:"vlive_group_msg_list",pageSN:106652},shareInfo:{noDefaultShare:!0},noDefaultShare:!0}}),(0,c.f3)("store"),c.Pi)((function(e){var t=e.store;return a.createElement(_e.I,{store:t},t.isImmersive&&a.createElement(ut,{title:t.$title}),a.createElement(ct,null),a.createElement(u.eA,null))})),pt=(0,o.Z)(ft),dt=(0,i.Z)(ft),mt=n(19303);Promise.resolve("function"==typeof dt&&dt()).then((function(){return(0,mt.x)(pt)}))},39757:function(e,t,n){"use strict";n.d(t,{Ch:function(){return a},Eo:function(){return c},WD:function(){return l}});n(62850),n(62773),n(27476);var r=n(24649),o=n(86056),i=n(57753);function a(e){return"msg_root_el_".concat(e)}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return e/100+"rem"}function l(e){var t=e.redPacketStatus,n=e.authorEnvelopeId,a=e.title,c=e.matchReasonType,l=e.notificationId,u=e.linkUrl;if((0,i.hJ)({page_el_sn:5471195,status:t}),u){var s={redpacket_status:t,author_envelope_id:n,author_envelope_title:a,match_reason_type:c,notification_id:l};u.includes("pdd_live_tab_list")&&(s=Object.keys(s).reduce((function(e,t){return e["_hub_t_".concat(t)]=s[t],e}),{}));var f=(0,r.ru)(s,u);o.ZP.uniformForward(f)}}},72346:function(e,t,n){"use strict";n.d(t,{EV:function(){return y},KG:function(){return P},Sw:function(){return h},UF:function(){return I},Xc:function(){return b},bj:function(){return w},dX:function(){return v},iv:function(){return R},mI:function(){return O},n1:function(){return Z}});n(27476),n(95767),n(98837),n(94882),n(98351);var r,o,i,a,c,l,u,s,f=n(18482),p=n(81114),d=n(40377);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,f.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O={FOCUS:1,UP_VIDEO:2,UP_COMMENT:3,COMMENT_VIDEO:4,REPLY:5,VISIT:6,CHECK_FAIL:7,COLLECTION_AUDIT_FAIL:13,DATE:17,CANCEL_DATE:18,LITTLE_GOD_WEALTH:14,AGENCY_INVITE:26,TALK_ABOUT:29,AUTHOR_INFO_SUBMIT:21,AUTHOR_INFO_SUCCESS:22,AUTHOR_INFO_FAILED:23,AUTHOR_RED_PACKET:19,RED_FLOWER:101},v=(r={},(0,f.Z)(r,O.FOCUS,"关注了你"),(0,f.Z)(r,O.UP_VIDEO,"赞了你的视频"),(0,f.Z)(r,O.UP_COMMENT,"赞了你的评论"),(0,f.Z)(r,O.COMMENT_VIDEO,"评论了你的视频"),(0,f.Z)(r,O.REPLY,"回复了"),(0,f.Z)(r,O.VISIT,"访问了你的主页"),(0,f.Z)(r,O.CHECK_FAIL,"视频审核不通过"),{NORMAL:0,COMMENT:10001,REPLY:10002,RED_PACKET:30001,RED_PACKET_LOSE_STORAGE:30002,VIDEO_APPLY:10,AGENCY_INVITE:20,ORIGINAL_AUTH_GROUP:21,MSG_GROUP:22}),y={NEED_FOLLOW:1,HAS_FOLLOW:2,FOLLOW_EACH:3},h=(o={},(0,f.Z)(o,y.NEED_FOLLOW,"关注"),(0,f.Z)(o,y.HAS_FOLLOW,"已关注"),(0,f.Z)(o,y.FOLLOW_EACH,"互相关注"),o),b={REJECTED:33,COMMENT_FAVOR:32,ON_VIDEO:31,ON_TEXT:30,COMMENT_REPLY:29,ON_COMMENT:28,FAVOR:27},_=(i={},(0,f.Z)(i,b.REJECTED,5863753),(0,f.Z)(i,b.COMMENT_FAVOR,5863752),(0,f.Z)(i,b.ON_VIDEO,5863749),(0,f.Z)(i,b.ON_TEXT,5863750),(0,f.Z)(i,b.COMMENT_REPLY,5863751),(0,f.Z)(i,b.ON_COMMENT,5863748),(0,f.Z)(i,b.FAVOR,5863747),i),E=(a={},(0,f.Z)(a,O.AUTHOR_INFO_SUBMIT,5803133),(0,f.Z)(a,O.AUTHOR_INFO_SUCCESS,5803135),(0,f.Z)(a,O.AUTHOR_INFO_FAILED,5803138),a),w=g(g(g({},_),E),{},(c={},(0,f.Z)(c,O.FOCUS,5256479),(0,f.Z)(c,O.UP_VIDEO,5256478),(0,f.Z)(c,O.UP_COMMENT,5273560),(0,f.Z)(c,O.COMMENT_VIDEO,5256481),(0,f.Z)(c,O.REPLY,5273561),(0,f.Z)(c,O.VISIT,5273557),(0,f.Z)(c,O.CHECK_FAIL,5273531),(0,f.Z)(c,O.COLLECTION_AUDIT_FAIL,5273558),(0,f.Z)(c,O.LITTLE_GOD_WEALTH,5256480),(0,f.Z)(c,O.AGENCY_INVITE,5663783),(0,f.Z)(c,O.AUTHOR_RED_PACKET,5471195),(0,f.Z)(c,O.RED_FLOWER,7130301),c)),P=2287710,I=(l={},(0,f.Z)(l,p.Nz.HAD_GET,"已领取"),(0,f.Z)(l,p.Nz.EXPIRED,"已过期"),(0,f.Z)(l,p.Nz.INVALID,"已抢光"),l),R=(u={},(0,f.Z)(u,p.Nz.CAN_GET,d.IG.CanGet),(0,f.Z)(u,p.Nz.HAD_GET,d.IG.HasGot),u),Z=d.IG.Default;(0,f.Z)({},O.AGENCY_INVITE,"机构邀约已过期，请联系机构重新邀约"),s={},(0,f.Z)(s,p.gn.FAVOR_GROUP,6281297),(0,f.Z)(s,p.gn.FOCUS_GROUP,6281298),(0,f.Z)(s,p.gn.AUTHOR_MSG_GROUP,5803055),(0,f.Z)(s,p.gn.AUTHOR_RED_PACKET_GROUP,7135005),(0,f.Z)(s,p.gn.RED_FLOWER_GROUP,7130263)},81114:function(e,t,n){"use strict";var r;n.d(t,{Nz:function(){return u},fZ:function(){return l},gn:function(){return c},hM:function(){return a}}),function(e){e[e.DouYin=1]="DouYin",e[e.KuaiShou=2]="KuaiShou",e[e.ShiPinHao=3]="ShiPinHao",e[e.Bilibili=4]="Bilibili",e[e.XiaoHongShu=5]="XiaoHongShu",e[e.Taobao=6]="Taobao",e[e.Other=7]="Other",e[e.WeiSi=8]="WeiSi",e[e.DuXiaoSi=9]="DuXiaoSi",e[e.XiGua=10]="XiGua"}(r||(r={}));var o,i,a,c={AUTHOR_MSG_GROUP:3,FOCUS_GROUP:5,FAVOR_GROUP:6,AUTHOR_RED_PACKET_GROUP:8,RED_FLOWER_GROUP:9};r.DouYin,r.KuaiShou,r.XiaoHongShu,r.Bilibili;!function(e){e[e.DOING=0]="DOING",e[e.COMPLETED=1]="COMPLETED",e[e.FAILED=2]="FAILED",e[e.INIT=3]="INIT"}(o||(o={})),function(e){e[e.NOT=0]="NOT",e[e.LOADING=1]="LOADING",e[e.COMPLETE=2]="COMPLETE",e[e.FAILED=3]="FAILED"}(i||(i={})),function(e){e[e.PullDownRefresh=1]="PullDownRefresh",e[e.NormalLoad=0]="NormalLoad"}(a||(a={}));var l={OLD:"old",NEW_1:"new_red_style",NEW_2:"new_red_style_container"},u={CAN_GET:1,HAD_GET:2,EXPIRED:3,INVALID:4}},13906:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});n(96620);var r=3600;function o(e){if("number"!=typeof e||e<1)return["00","00","00"];var t=Math.floor(e/r),n=Math.floor((e-t*r)/60),o=e-t*r-60*n;return[t>9?"".concat(t):"0".concat(t),n>9?"".concat(n):"0".concat(n),o>9?"".concat(o):"0".concat(o)]}},78493:function(e,t,n){"use strict";n.d(t,{Jv:function(){return a},yC:function(){return o.yC}});var r=n(74711),o=n(42202);var i,a=(i=window.navigator.userAgent,(0,r.Xf)(i));a.system,o.we.IOS,"undefined"!=typeof window&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},57753:function(e,t,n){"use strict";n.d(t,{hJ:function(){return i}});var r,o=n(35607);!function(e){e.Impr="impr",e.Click="click"}(r||(r={}));var i=function(e){return(0,o.ax)(e)}},20342:function(e,t,n){"use strict";n.d(t,{Uk:function(){return d},jQ:function(){return p}});var r=n(52171),o=n(25118),i=n(37883),a=n.n(i),c=(n(96253),n(40851),n(22691)),l=n(24649),u=n(81114),s=n(39757),f=n(42972);var p=function(){var e=(0,o.Z)(a().mark((function e(t,n){var r,o,i,c,p,d;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=(0,l.FU)(location.href),o=r.notification_id,i=r._pdd_fs,o&&t!==u.hM.PullDownRefresh&&(c=document.getElementById((0,s.Ch)(o)),p=(0,f.Z)(c),d=p.top,c&&d>0&&(1==+i?window.scrollTo({top:d-n,behavior:"smooth"}):c.scrollIntoView({behavior:"smooth"})));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ignoreApi,n=e.simpleRate;(0,c.Nt)({ignoreApi:["JSVideoTab:removeMessageBoxSubTypeRedDot","AMDevice:deviceInfo","AMDevice:getMemoryInfo","AMDevice:getBatteryInfo","WebScene:getPageVisibility","JSNavigation:referPageContext","JSUIControl:setTitle","WebScene:onWebMounted","JSNotification:send","JSUIControl:getNavigationHeight","AMUser:info","WebScene:getUnoContext","WebScene:getTiming"].concat((0,r.Z)(t||[])),simpleRate:n||.1})}},23743:function(e){e.exports={wrap:"kg6EADBt"}},43802:function(e){e.exports={"fixed-cover":"_20P8h2R3",hasFollow:"AAe-Lm8F",follow:"_2k0-uZAn",zoomIn:"_2zR0l6yD"}},21527:function(e){e.exports={"fixed-cover":"_1KkxLKZ2",wrap:"DKzlY-hv",left:"_1ALSUlGj",icon:"_28TkExOy",right:"_4WlPNGZO",title:"_1lLb3aNe",msg:"-un8ps0z",time:"_35gFm8EA",cover:"_2h7YffXP",operation:"_12SryXSq",talkText:"_2ZJzuEEE",emojiStyle:"_2wkikNv9",upIcon:"_XVBHIpU",zoomIn:"_2o64ARYD"}},15913:function(e){e.exports={root:"_2XEBYAxN",icon:"h3w-V8Rd",loading:"_1CGPMlPN",text:"_3G4Gq7Iz"}},29807:function(e){"use strict";e.exports=pinbridge},40377:function(e,t,n){"use strict";n.d(t,{CZ:function(){return s},DL:function(){return p},Ft:function(){return u},IG:function(){return c},Om:function(){return l},XS:function(){return f},tN:function(){return d}});n(27476),n(95767),n(98837),n(94882),n(98351);var r=n(18482),o=n(39185);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c={Default:"https://funimg.pddpic.com/7add5bec-6ede-439b-a717-63a49044e156.png.slim.png",CanGet:"https://funimg.pddpic.com/1a4dc7ed-c7db-4d4c-bab1-aa124d1d5cf9.png.slim.png",HasGot:"https://funimg.pddpic.com/c0dc29d8-95ac-4d3e-b2d0-40ff13e8a2ad.png.slim.png"},l="https://funimg.pddpic.com/dab48184-4d45-49ae-9e93-b5a60ea49437.png.slim.png",u="https://funimg.pddpic.com/11602edf-a236-4a1d-82a1-8c991446a058.png.slim.png",s="https://funimg.pddpic.com/da08b071-024d-4be8-bf1e-32af830b415b.png.slim.png",f="https://funimg.pddpic.com/06419c4b-ad2d-4702-959f-4cda24edfd39.png.slim.png",p="https://funimg.pddpic.com/fcef79b4-e42b-44ad-8876-84ecfa25a92e.png.slim.png",d="https://funimg.pddpic.com/72cc270c-ecab-4cea-b40a-47f67ad01a2e.png.slim.png";a(a({AUTHOR_AUTH_MSG_ICON:"https://promotion.pddpic.com/promo/short_video/88720a5b-c9eb-428f-bc6e-55aeab8104d4.png.slim.png",FIRST_VISIT_TIP_BG:"https://promotion.pddpic.com/promo/d17161f1-eed8-4a4b-ab45-5a61e7c9bb43.png.slim.png",SETTING_ICON:"https://funimg.pddpic.com/cb527e24-c9a4-44f0-935b-333911b298d4.png.slim.png",SHORT_VIDEO_FONT:"https://funimg.pddpic.com/fonts/dda3f1e4-0bf6-43ca-ab4b-b2c9dd9e41e1.ttf",RED_PACKET:l,ARROW_RIGHT:u,FAVOR_TEXT:s,VIDEO_TEXT:f,FINGER_ICON:p},c),o.r)}},l={};function u(e){var t=l[e];if(void 0!==t)return t.exports;var n=l[e]={id:e,loaded:!1,exports:{}};return c[e].call(n.exports,n,n.exports,u),n.loaded=!0,n.exports}u.m=c,e=[],u.O=function(t,n,r,o){if(!n){var i=1/0;for(s=0;s<e.length;s++){n=e[s][0],r=e[s][1],o=e[s][2];for(var a=!0,c=0;c<n.length;c++)(!1&o||i>=o)&&Object.keys(u.O).every((function(e){return u.O[e](n[c])}))?n.splice(c--,1):(a=!1,o<i&&(i=o));if(a){e.splice(s--,1);var l=r();void 0!==l&&(t=l)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[n,r,o]},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},u.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);u.r(o);var i={};t=t||[null,n({}),n([]),n(n)];for(var a=2&r&&e;"object"==typeof a&&!~t.indexOf(a);a=n(a))Object.getOwnPropertyNames(a).forEach((function(t){i[t]=function(){return e[t]}}));return i.default=function(){return e},u.d(o,i),o},u.d=function(e,t){for(var n in t)u.o(t,n)&&!u.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},u.f={},u.e=function(e){return Promise.all(Object.keys(u.f).reduce((function(t,n){return u.f[n](e,t),t}),[]))},u.u=function(e){return"assets/js/"+({699:"ms_web_c",1437:"pdd-mod/qq-service",1795:"react_anti",2840:"ms_wx_c",3400:"ms_wx_app_c",3910:"monitor-dev-panel",5911:"ms_native_c",6795:"ms_qq_c",8920:"pdd-mod/wechat-service"}[e]||e)+"_"+{699:"6732b5028e99ec3711b5",1437:"8c02393760457f458cb0",1795:"441bea40694e5c52acea",2568:"6a9075934c166e207340",2840:"6434b9a1d923ed8182f5",3400:"24b2cb1994a4daafc256",3910:"1463c1311397215db064",4369:"5a4a3b3070791597ae79",5911:"7eb7b058f14ab10fa6ff",5929:"a14da7d1d823f43f659e",6795:"0c9491c4660477c5771a",8920:"02c40a20678ac528640a"}[e]+".js"},u.miniCssF=function(e){return"assets/css/monitor-dev-panel_d314c614b241f08063cc.css"},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},o="mobile-live-video:",u.l=function(e,t,n,i){if(r[e])r[e].push(t);else{var a,c;if(void 0!==n)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var f=l[s];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==o+n){a=f;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,u.nc&&a.setAttribute("nonce",u.nc),a.setAttribute("data-webpack",o+n),a.src=e),r[e]=[t];var p=function(t,n){a.onerror=a.onload=null,clearTimeout(d);var o=r[e];if(delete r[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),c&&document.head.appendChild(a)}},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},u.j=3424,u.p="https://static.pddpic.com/",u.p=window.__webpack_public_path__||u.p,i=function(e){return new Promise((function(t,n){var r=u.miniCssF(e),o=u.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(a=n[r]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){var a;if((o=(a=i[r]).getAttribute("data-href"))===e||o===t)return a}}(r,o))return t();!function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),c=i&&i.target&&i.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=a,l.request=c,o.parentNode.removeChild(o),r(l)}},o.href=t,document.head.appendChild(o)}(e,o,t,n)}))},a={3424:0},u.f.miniCss=function(e,t){a[e]?t.push(a[e]):0!==a[e]&&{3910:1}[e]&&t.push(a[e]=i(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))},function(){var e={3424:0};u.f.j=function(t,n){var r=u.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var i=u.p+u.u(t),a=new Error;u.l(i,(function(n){if(u.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,r[1](a)}}),"chunk-"+t,t)}},u.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,i=n[0],a=n[1],c=n[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(r in a)u.o(a,r)&&(u.m[r]=a[r]);if(c)var s=c(u)}for(t&&t(n);l<i.length;l++)o=i[l],u.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return u.O(s)},n=self.webpackChunkmobile_live_video=self.webpackChunkmobile_live_video||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var s=u.O(void 0,[1216,6457,1658],(function(){return u(32453)}));s=u.O(s)}();
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/assets/js/vlive_group_msg_list_6f479aecca8ed9df800b.js.map