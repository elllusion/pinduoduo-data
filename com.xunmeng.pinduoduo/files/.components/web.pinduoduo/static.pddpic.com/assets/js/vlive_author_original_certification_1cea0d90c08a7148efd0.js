!function(){var e,t,r,n,a,o,i,c={84247:function(e,t,r){"use strict";r(96253),r(40851);var n=r(45063),a=function(e){return(0,n.D4)(e)},o=r(67376),i=r(87401),c=r(70798),u=r(36102),l=r.n(u),s=r(77153),p=r(8224);r(62850),r(62773);function f(){return(0,i.useContext)(c.yX)}var d,m,v,h=r(18482);!function(e){e[e.DOING=0]="DOING",e[e.COMPLETED=1]="COMPLETED",e[e.FAILED=2]="FAILED"}(m||(m={})),function(e){e[e.NOT=0]="NOT",e[e.LOADING=1]="LOADING",e[e.COMPLETE=2]="COMPLETE",e[e.FAILED=3]="FAILED"}(v||(v={}));var b,E=(d={},(0,h.Z)(d,m.COMPLETED,"https://funimg.pddpic.com/48225c6d-1bda-46d0-b6c3-a9521d41def1.png.slim.png"),(0,h.Z)(d,m.DOING,"https://funimg.pddpic.com/50a75f22-1b65-41bd-bba2-baa08ad0ffb6.png.slim.png"),d);!function(e){e[e.CODE=0]="CODE",e[e.VIDEO=1]="VIDEO",e[e.CODE_VIDEO=2]="CODE_VIDEO"}(b||(b={}));var y=7130601,g=7130477,O=7130462,_=r(94184),D=r.n(_),w=r(344),N=r(95813),A=(r(51876),r(27476),r(95767),r(98837),r(94882),r(98351),r(37548)),Z=r(42202),P=r(3009),S=r(31658),I=["processParam","resizeWidth","quality","lazy","trimUrlQuery","src"];function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){(0,h.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function T(e){var t,r=e.processParam,n=e.resizeWidth,a=e.quality,o=e.lazy,c=void 0!==o&&o,u=e.trimUrlQuery,l=void 0!==u&&u,s=e.src,p=(0,N.Z)(e,I),f=(0,i.useContext)(P.Z),d=(0,i.useContext)(S.Z),m=null==d||null===(t=d.platform)||void 0===t?void 0:t.system,v=!!m&&m!==Z.we.IOS,h=s||"";return l&&(h=h.split("?")[0]),i.createElement(A.Z,(0,w.Z)({processParam:C({webpEnable:f,enableGifToWebp:v,resizeWidth:n,quality:a},r),lazy:c,src:h},p))}var k=r(30739),L=r.n(k);var j=(0,c.Pi)((function(e){var t=e.stepTitle,r=e.status,n=e.title,a=e.className;return i.createElement("div",{className:D()(L().wrap,a)},i.createElement("span",{className:L().stepTitle},t),i.createElement(T,{className:L().icon,src:E[r],resizeWidth:54}),i.createElement("span",{className:L().title},n))})),U=r(25118),V=r(23877),R=r(37883),F=r.n(R),z=(r(83276),r(19371),r(52310),r(11246),r(22691)),M=r(92263),W=r(52505);r(52171);function B(e){var t=(0,i.useRef)(!1);return(0,i.useCallback)((0,U.Z)(F().mark((function r(){var n,a=arguments;return F().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t.current){r.next=2;break}return r.abrupt("return");case 2:return t.current=!0,r.prev=3,r.next=6,e.apply(void 0,a);case 6:return n=r.sent,t.current=!1,r.abrupt("return",n);case 11:throw r.prev=11,r.t0=r.catch(3),t.current=!1,r.t0;case 15:case"end":return r.stop()}}),r,null,[[3,11]])}))),[e])}var G=r(81114),H=r(55673),q=r.n(H),J=r(57753);var K,Y=(0,c.Pi)((function(e){var t=e.certificationType,r=f().store,n=r.authInfo,a=r.isNewAuthor,o=n.codeAuthStatus,c=n.authCode,u=n.code,l=c||u,s=Object.entries(o||{}),p=t===b.CODE_VIDEO,d=s.every((function(e){var t=(0,V.Z)(e,2)[1];return(null==t?void 0:t.status)===G.m_.COMPLETED})),v={page_el_sn:O,type:p?1:0},E=B(function(){var e=(0,U.Z)(F().mark((function e(t,r){return F().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,J.hJ)(v),t.stopPropagation(),e.prev=2,e.next=5,(0,z.Q6)("AMStorage","setPasteboard",{text:l});case 5:(0,M.Z)("复制成功，请前往".concat(r,"平台发送密钥")),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),(0,M.Z)("复制失败，请重试");case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t,r){return e.apply(this,arguments)}}());return i.createElement(W.Z,{trackingInfo:v},i.createElement("div",{className:p?q().stepCompleted:""},i.createElement(j,{stepTitle:"第二步",status:d?m.COMPLETED:m.DOING,title:"账号认证"}),i.createElement("div",{className:D()(q().platformsWrap,(0,h.Z)({},q().showDashed,!p))},s.map((function(e,t){var r,n=(0,V.Z)(e,2),a=n[0],o=n[1]||{},c=o.status,u=o.pddUid,s=o.platUid,p=(G.xF.find((function(e){return e.value===Number(a)}))||{}).label,f=c===G.m_.COMPLETED,d=c===G.m_.FAILED;return i.createElement("div",{className:q().platformContent,key:a},i.createElement("div",{className:q().labelStatus},i.createElement("div",{className:q().label},p," ",s),i.createElement("div",{className:D()(q().status,(r={},(0,h.Z)(r,q().completedStatus,f),(0,h.Z)(r,q().failed,d),r))},f?"已认证":d?"认证失败":"待认证")),!f&&!d&&i.createElement("div",{className:q().codeContent},"认证方式：",i.createElement("p",null,"1.点击下方红色按钮一键复制密钥：",i.createElement("span",{className:q().redWord},l)),i.createElement("p",null,"2.使用",p,"账号：",i.createElement("span",{className:q().redWord},s)," 搜索：",i.createElement("span",{className:q().redWord},u)),i.createElement("p",null,"3.关注以上小助手账号，将密钥完整粘贴后，私信发送"),i.createElement("div",{className:q().copyKey,onClick:function(e){return E(e,p)}},"复制密钥")))})),d?i.createElement("div",{className:q().tips},a?"你的作者等级材料已经提交，预计7个工作日内审核完成，请耐心等候。":"已完成认证"):i.createElement("div",{className:q().tips},"请在72小时内完成认证，否则将无法获得流量和现金扶持。"))))}));!function(e){e[e.INIT=0]="INIT",e[e.ING=1]="ING",e[e.PASSED=2]="PASSED",e[e.REJECT=3]="REJECT",e[e.UPLOAD_SUCCESS=4]="UPLOAD_SUCCESS",e[e.UPLOAD_FAILED=5]="UPLOAD_FAILED"}(K||(K={}));var X=[{title:"视频出镜主体需要有个人明显特征元素：",steps:["一创作者需有露脸视频","二创作者需展示明显的人格化特征，如以制作工程图为背景、 由创作者本人配音介绍视频创作过程的视频"]},{title:"创作者需在视频中口述下方文案：",steps:["我是xxx（作者本人的账号名称），很高兴入驻拼多多，我承诺该账号发布的视频均为本人原创作品，如账号出现搬运、侵权等问题，一切后果由作者本人承担"]}],Q=r(2910),$=r.n(Q);function ee(){return i.createElement("div",{className:$().steps},X.map((function(e,t){return i.createElement(i.Fragment,{key:t},i.createElement("div",{className:$().stepTitle},i.createElement("span",null,t+1),e.title),i.createElement("div",{className:$().stepWrap},e.steps.map((function(e,t){return i.createElement("div",{key:t,className:$().videoStep},e)}))))})))}var te=(0,i.memo)(ee),re=r(51216),ne=r.n(re);function ae(e){var t=e||{},r=t.deleteAuthVideo,n=t.coverUrl,a=t.serverUrl,o=t.selectAuthVideo,c=t.certificationType,u={page_el_sn:g,type:c===b.VIDEO?0:1};return i.createElement(W.Z,{trackingInfo:u},i.createElement("div",null,i.createElement("section",{className:ne().videoCover,onClick:function(){(0,J.hJ)(u),!a&&o()}},n?i.createElement(i.Fragment,null,i.createElement("img",{src:n,className:ne().coverImg}),a?i.createElement("div",{className:ne().deleteBth},i.createElement(T,{className:ne().delete,src:"https://funimg.pddpic.com/c9d3d2ea-a73b-4499-8923-78037b217ae3.png.slim.png",resizeWidth:60,onClick:r}),i.createElement(T,{className:ne().playIcon,src:"https://funimg.pddpic.com/de02ed5b-880e-4691-bfab-45dc178d4390.png.slim.png",resizeWidth:144})):i.createElement("div",{className:ne().uploading},i.createElement(T,{className:ne().loadingIcon,src:"https://funimg.pddpic.com/96f0b960-1d36-4bde-a759-77f81f218afb.png.slim.png"}),"上传中")):i.createElement("div",{className:ne().upContent},i.createElement("span",{className:ne().upIcon},"+"),i.createElement("span",{className:ne().upText},"点击拍摄认证视频"))),i.createElement(te,null)))}var oe=(0,i.memo)(ae),ie=r(14381),ce=r.n(ie),ue=["isNewAuthor","setShowUnderReviewDialog","applyVideoAuth","certificationType","data"];var le=(0,c.Pi)((function(e){var t=e.isNewAuthor,r=e.setShowUnderReviewDialog,n=e.applyVideoAuth,a=e.certificationType,o=e.data,c=(0,N.Z)(e,ue),u=(o||{}).videoAuthStatus,l=void 0===u?K.INIT:u,s=!(null==c||!c.serverUrl),p=[K.PASSED,K.ING].includes(l),f=K.PASSED===l||s,d=t?K.INIT===l:[K.INIT,K.REJECT].includes(l),v=K.ING===l||K.REJECT===l&&t,E=a===b.VIDEO?"第二步":"第三步",g=B((0,U.Z)(F().mark((function e(){return F().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!p){e.next=2;break}return e.abrupt("return");case 2:return(0,J.hJ)({page_el_sn:y,status:s?1:0}),e.next=5,n();case 5:e.sent&&r(!0);case 7:case"end":return e.stop()}}),e)}))));return i.createElement("div",{className:ce().wrap},i.createElement("div",{className:ce().titleWrap},i.createElement(j,{stepTitle:E,status:f?m.COMPLETED:m.DOING,title:"原创视频认证"}),i.createElement("div",{className:D()(ce().uploadStatus,(0,h.Z)({},ce().uploadCompleteStatus,f))},function(){switch(l){case K.ING:return"审核中";case K.REJECT:return t?"审核中":"带上传";case K.PASSED:return"已认证"}return c.coverUrl&&!c.serverUrl?"上传中":s?"已上传":"待上传"}())),i.createElement("div",{className:ce().content},!t&&K.REJECT===l&&i.createElement("div",{className:ce().waitingText},"认证视频被驳回，请重新上传。"),d&&i.createElement(oe,(0,w.Z)({},c,{certificationType:a})),v&&i.createElement("div",{className:ce().waitingText},"你的作者等级材料已经提交，预计7个工作日内审核完成，请耐心等候。"),K.PASSED===l&&i.createElement("div",{className:ce().waitingText},t?"你的作者等级材料已经提交，预计7个工作日内审核完成，请耐心等候。":"已完成认证。")),d&&i.createElement("div",{className:ce().dialogFooter},i.createElement(W.Z,{trackingInfo:{page_el_sn:y,status:s?1:0}},i.createElement("button",{className:D()(ce().dialogConfirmBtn,(0,h.Z)({},ce().confirmButtonActive,s)),onClick:g},"提交认证")),i.createElement("div",{className:ce().safeBottom})))})),se=r(38438),pe=(r(49385),r(86056)),fe=r(74711);var de;(de=window.navigator.userAgent,(0,fe.Xf)(de)).system,Z.we.IOS,"undefined"!=typeof window&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);function me(){pe.ZP.back()}var ve=r(25939),he=r.n(ve);function be(e){var t=e.closeDialog;return i.createElement(se.Z,null,i.createElement(i.Fragment,null,i.createElement("div",{className:he().wrap},i.createElement(se.Z.CloseButton,{onClick:t}),i.createElement("div",{className:he().dialogTitle},"原创作者认证"),i.createElement("div",{className:D()(he().stepWrap,he().completed)},i.createElement(T,{className:he().icon,src:E[m.COMPLETED],resizeWidth:54}),i.createElement("span",{className:he().title},"提交等级认证材料")),i.createElement("div",{className:he().dot}),i.createElement("div",{className:he().stepWrap},i.createElement(T,{className:he().icon,src:E[m.DOING],resizeWidth:54}),i.createElement("span",{className:he().title},"原创视频认证"),i.createElement("div",{className:he().uploadStatus},"审核中")),i.createElement("div",{className:he().tips},"你的原创认证视频已上传，预计7个工作日内审核完成，请耐心等候。")),i.createElement("div",{className:he().dialogConfirmBtn,onClick:function(){t(),me()}},"我知道了")))}(0,c.Pi)(be);var Ee=r(14375),ye=r.n(Ee);var ge=(0,c.Pi)((function(){var e=f().store,t=e.authInfo,r=e.certificationType,n=e.uploadVideoAuthData,a=e.selectAuthVideo,o=e.deleteAuthVideo,c=e.applyVideoAuth,u=e.setShowUnderReviewDialog,l=e.showUnderReviewDialog,s=e.isNewAuthor;return i.createElement("div",{className:ye().container},i.createElement(j,{stepTitle:"第一步",status:m.COMPLETED,title:"提交等级认证材料",className:ye().completed}),i.createElement("div",{className:ye().stepDot}),[b.CODE,b.CODE_VIDEO].includes(r)&&i.createElement(Y,{certificationType:r}),[b.VIDEO,b.CODE_VIDEO].includes(r)&&i.createElement(le,{isNewAuthor:s,certificationType:r,selectAuthVideo:a,coverUrl:null==n?void 0:n.coverUrl,serverUrl:n.serverUrl,deleteAuthVideo:o,applyVideoAuth:c,data:t,setShowUnderReviewDialog:u}),l&&i.createElement(be,{closeDialog:function(){return u(!1)}}))})),Oe=(r(82139),r(38796)),_e=r(68309),De=r(69348),we=r(99057),Ne=r(45558),Ae=r(91074),Ze=r(11269),Pe=r(43736),Se=r(22188),Ie=r(94537),xe=r(41754),Ce=r(23327);function Te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ke(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Te(Object(r),!0).forEach((function(t){(0,h.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Te(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Le=r(44518).Z;function je(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,Ze.Z)(e);if(t){var a=(0,Ze.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,Ae.Z)(this,r)}}var Ue,Ve,Re,Fe,ze,Me,We,Be,Ge,He,qe,Je,Ke,Ye="/haw/pro/settlement/query/auth_pop",Xe="/haw/pro/settlement/query/tips",Qe="/haw/pro/settlement/edit/update_auth_material",$e=function(e){(0,Ne.Z)(r,e);var t=je(r);function r(){return(0,_e.Z)(this,r),t.apply(this,arguments)}return(0,De.Z)(r,[{key:"getAuthInfo",value:function(e,t){return this.get(e?Xe:Ye,t)}},{key:"uploadVideoUrl",value:function(e){return this.post(Qe,e,{enableTransfer:!1})}}]),r}(Le);function et(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function tt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?et(Object(r),!0).forEach((function(t){(0,h.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):et(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function rt(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,Ze.Z)(e);if(t){var a=(0,Ze.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,Ae.Z)(this,r)}}var nt=(Ue=Se.aD.bound,Ve=function(e){(0,Ne.Z)(a,e);var t,r,n=rt(a);function a(){var e;(0,_e.Z)(this,a);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).service=void 0,(0,Oe.Z)(e,"certificationType",Re,(0,we.Z)(e)),(0,Oe.Z)(e,"authInfo",Fe,(0,we.Z)(e)),(0,Oe.Z)(e,"uploadStatus",ze,(0,we.Z)(e)),(0,Oe.Z)(e,"uploadVideoAuthData",Me,(0,we.Z)(e)),(0,Oe.Z)(e,"showUnderReviewDialog",We,(0,we.Z)(e)),(0,Oe.Z)(e,"applyVideoAuth",Be,(0,we.Z)(e)),(0,Oe.Z)(e,"submitAuthVideo",Ge,(0,we.Z)(e)),(0,Oe.Z)(e,"selectAuthVideo",He,(0,we.Z)(e)),(0,Oe.Z)(e,"deleteAuthVideo",qe,(0,we.Z)(e)),(0,Oe.Z)(e,"setShowUnderReviewDialog",Je,(0,we.Z)(e)),(0,Oe.Z)(e,"backHandler",Ke,(0,we.Z)(e)),e.getRemoteData=function(){return e.getAuthInfo()},e}return(0,De.Z)(a,[{key:"platform",get:function(){return this.$ctx.platform}},{key:"isNativePlatform",get:function(){return this.platform.isNativePlatform}},{key:"isNewAuthor",get:function(){var e;return 1==+(null===(e=this.$ctx.query)||void 0===e?void 0:e.is_new)}},{key:"initServices",value:function(){this.service=new $e(this.$axiosHttp)}},{key:"getAuthInfo",value:(r=(0,U.Z)(F().mark((function e(){var t,r,n,a,o;return F().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},this.isNewAuthor&&(t={type:1==+(null===(r=this.$ctx.query)||void 0===r?void 0:r.cargo_auth)?1:0}),e.next=4,this.service.getAuthInfo(this.isNewAuthor,t);case 4:if(e.t0=e.sent,e.t0){e.next=7;break}e.t0={};case 7:n=e.t0,a=n.result,o=(a||{}).authType,this.certificationType=o,this.authInfo=a||{};case 12:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"getDatasource",value:function(){return[this.getRemoteData]}},{key:"prepareClientData",value:(t=(0,U.Z)(F().mark((function e(){return F().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.$ctx.platform.isNativePlatform&&(0,z.z2)({callback:this.backHandler});case 1:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})}]),a}(Ie.u),Re=(0,Pe.Z)(Ve.prototype,"certificationType",[Se.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),Fe=(0,Pe.Z)(Ve.prototype,"authInfo",[Se.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),ze=(0,Pe.Z)(Ve.prototype,"uploadStatus",[Se.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return G.TE.NOT}}),Me=(0,Pe.Z)(Ve.prototype,"uploadVideoAuthData",[Se.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{coverUrl:"",videoUrl:"",serverUrl:""}}}),We=(0,Pe.Z)(Ve.prototype,"showUnderReviewDialog",[Se.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),(0,Pe.Z)(Ve.prototype,"getAuthInfo",[Ue],Object.getOwnPropertyDescriptor(Ve.prototype,"getAuthInfo"),Ve.prototype),Be=(0,Pe.Z)(Ve.prototype,"applyVideoAuth",[Se.aD],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return(0,U.Z)(F().mark((function t(){return F().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e.uploadVideoAuthData.serverUrl){t.next=10;break}return t.next=4,e.service.uploadVideoUrl({authVideoUrl:e.uploadVideoAuthData.serverUrl,isAuthVideo:!0});case 4:if(!t.sent.success){t.next=8;break}return(0,Se.z)((function(){e.authInfo=tt(tt({},e.authInfo),{},{videoAuthStatus:1}),e.deleteAuthVideo()})),t.abrupt("return",!0);case 8:t.next=12;break;case 10:return(0,M.Z)("提交认证失败"),t.abrupt("return",!1);case 12:t.next=18;break;case 14:return t.prev=14,t.t0=t.catch(0),(0,Ce.y)(t.t0),t.abrupt("return",!1);case 18:case"end":return t.stop()}}),t,null,[[0,14]])})))}}),Ge=(0,Pe.Z)(Ve.prototype,"submitAuthVideo",[Se.aD],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return(0,U.Z)(F().mark((function t(){var r;return F().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,z.Q6)("JSMedia","videoUpload",{video_url:e.uploadVideoAuthData.videoUrl,bucket:"haw-pro-api-settlement",biz_name:"vlive_author_level",need_compress:!1});case 2:if(null==(r=t.sent)||!r.server_url){t.next=7;break}return e.uploadStatus=G.TE.COMPLETE,e.uploadVideoAuthData.serverUrl=r.server_url,t.abrupt("return",!0);case 7:return e.uploadStatus=G.TE.FAILED,(0,M.Z)("上传视频失败,请重试~"),t.abrupt("return",!1);case 10:case"end":return t.stop()}}),t)})))}}),He=(0,Pe.Z)(Ve.prototype,"selectAuthVideo",[Se.aD],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return(0,U.Z)(F().mark((function t(){var r,n,a,o,i;return F().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,z.Q6)("JSMedia","videoCapture",{copy_to_gallery:1,max_duration:120,camera:"front",style:0,appear_style:0}).then((function(e){return ke(ke({},e),{},{success:!0})})).catch((function(e){var t;return{toast:null==e||null===(t=e.data)||void 0===t?void 0:t.toast,success:!1}}));case 3:if(r=t.sent,n=r.success,a=r.video_url,o=r.cover_image,i=r.toast,n){t.next=12;break}return e.uploadStatus=G.TE.NOT,(0,M.Z)(i||"拍摄失败，请重试~"),t.abrupt("return");case 12:if("mp4"===a.substr(a.lastIndexOf(".")+1).toLowerCase()){t.next=17;break}return e.uploadStatus=G.TE.NOT,(0,M.Z)("请拍摄并上传认证视频"),t.abrupt("return");case 17:return e.uploadStatus=G.TE.LOADING,e.uploadVideoAuthData={coverUrl:"data:image/png;base64,"+o,videoUrl:a,serverUrl:""},t.next=21,e.submitAuthVideo();case 21:t.next=27;break;case 23:t.prev=23,t.t0=t.catch(0),e.uploadStatus=G.TE.FAILED,(0,Ce.y)(t.t0);case 27:case"end":return t.stop()}}),t,null,[[0,23]])})))}}),qe=(0,Pe.Z)(Ve.prototype,"deleteAuthVideo",[Se.aD],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.uploadVideoAuthData={coverUrl:"",videoUrl:"",serverUrl:""}}}}),Je=(0,Pe.Z)(Ve.prototype,"setShowUnderReviewDialog",[Se.aD],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.showUnderReviewDialog=t}}}),Ke=(0,Pe.Z)(Ve.prototype,"backHandler",[Se.aD],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.uploadStatus===G.TE.LOADING?(0,xe.Z)({title:"退出页面将导致视频上传失败，确认退出吗？",confirmButtonLabel:"确认退出",cancelButtonLabel:"再等等",onConfirm:function(){me()}}):me()}}}),Ve),at=l()((0,s.k)(),(0,n.Iq)({store:nt},{serverTemplateName:"vlive_author_original_certification",title:"原创作者认证",fallbackCSR:!0,options:{pageProperty:{pageName:"original_identify_page",pageSN:117530},shareInfo:{noDefaultShare:!0},noDefaultShare:!0,disablePullReload:!0}}),(0,c.f3)("store"),c.Pi)((function(e){var t=e.store;return i.createElement(p.I,{store:t},i.createElement(ge,null))})),ot=a(at),it=(0,o.Z)(at),ct=r(19303);Promise.resolve("function"==typeof it&&it()).then((function(){return(0,ct.x)(ot)}))},81114:function(e,t,r){"use strict";var n;r.d(t,{TE:function(){return o},m_:function(){return a},xF:function(){return c}}),function(e){e[e.DouYin=1]="DouYin",e[e.KuaiShou=2]="KuaiShou",e[e.ShiPinHao=3]="ShiPinHao",e[e.Bilibili=4]="Bilibili",e[e.XiaoHongShu=5]="XiaoHongShu",e[e.Taobao=6]="Taobao",e[e.Other=7]="Other",e[e.WeiSi=8]="WeiSi",e[e.DuXiaoSi=9]="DuXiaoSi",e[e.XiGua=10]="XiGua"}(n||(n={}));var a,o,i,c=[{label:"抖音",value:n.DouYin},{label:"快手",value:n.KuaiShou},{label:"小红书",value:n.XiaoHongShu},{label:"哔哩哔哩",value:n.Bilibili}];!function(e){e[e.DOING=0]="DOING",e[e.COMPLETED=1]="COMPLETED",e[e.FAILED=2]="FAILED",e[e.INIT=3]="INIT"}(a||(a={})),function(e){e[e.NOT=0]="NOT",e[e.LOADING=1]="LOADING",e[e.COMPLETE=2]="COMPLETE",e[e.FAILED=3]="FAILED"}(o||(o={})),function(e){e[e.PullDownRefresh=1]="PullDownRefresh",e[e.NormalLoad=0]="NormalLoad"}(i||(i={}))},57753:function(e,t,r){"use strict";r.d(t,{hJ:function(){return o}});var n,a=r(35607);!function(e){e.Impr="impr",e.Click="click"}(n||(n={}));var o=function(e){return(0,a.ax)(e)}},24316:function(){},71611:function(e){e.exports={root:"_3kJOHato"}},21679:function(e){e.exports={root:"_2tlQjtVP"}},57840:function(e){e.exports={root:"_1o0Z4KRu"}},24079:function(e){e.exports={root:"_2_R9cyxl"}},45793:function(e){e.exports={root:"A9DIVMHH"}},8631:function(e){e.exports={root:"_2vFepLDg"}},53872:function(e){e.exports={root:"_3sOFMl4c"}},89795:function(e){e.exports={root:"_3W0iZ9uG",zoomIn:"_2-3BqKpw"}},95922:function(e){e.exports={root:"m5ozkA7a",hollow:"L5kWDKZ-"}},91515:function(e){e.exports={root:"jPB1u7d8"}},20955:function(e){e.exports={root:"_37_UbZj_",left:"_99XRt57i",right:"_2S4HkkSK",bottom:"_1rZc487o",top:"_1E12010v",all:"_22c1GZNM"}},12668:function(e){e.exports={root:"_3jf2bFhY"}},14375:function(e){e.exports={container:"_2-CjHmd4",stepDot:"T_OSiNCz",completed:"_3szLOE3U"}},55673:function(e){e.exports={platformsWrap:"_2__HYaC9",noDashed:"_3_6x3lh8",stepCompleted:"e1hRSUFN",platformContent:"_33LkYVno",labelStatus:"_15y9qHl7",label:"_1Jlcd8ON",status:"_1SolQuVa",completedStatus:"_15HRX8jK",failed:"_3Oia2YxC",codeContent:"_1zYlexF8",redWord:"omONnruR",copyKey:"d5h3rSAG",tips:"_1HYadxw2"}},30739:function(e){e.exports={wrap:"_2goOwJO7",stepTitle:"_3_l1bh9F",title:"_2d2F8qLP",icon:"_2dyV50vC"}},25939:function(e){e.exports={wrap:"_2NHGy9U3",dialogTitle:"_2lGMMWcW",stepWrap:"_3x6fUAGD",completed:"_2vVPu-mz",dot:"_2yn-9m9c",title:"_3uiqVWRp",icon:"k6WDNxrm",dialogConfirmBtn:"_2cyzV5kb",tips:"_1ZJSaOUu",uploadStatus:"_2eAyRidf"}},2910:function(e){e.exports={steps:"_2NSBCMki",stepWrap:"Fl0J9don",stepTitle:"sl7H_ZFJ",videoStep:"_2AeoxHUo"}},51216:function(e){e.exports={videoCover:"_1YDMnqmO",uploading:"_4XaklyLL",loadingIcon:"_1ekK4Ptq",rotateLoading:"_2-iTAUHa",coverImg:"_20Z9Kr8S",deleteBth:"YKSbFV3r",delete:"h6GFmlpf",playIcon:"_1anOaEPf",upContent:"_3rzjAa4r",upIcon:"tS3EJkve",upText:"FYPvF1pb"}},14381:function(e){e.exports={titleWrap:"Jh3Rc8IB",uploadStatus:"_3LKB6YkL",uploadCompleteStatus:"_12WaKR8P",content:"_1nb6Z1FI",dialogFooter:"_2muYP8eR",dialogConfirmBtn:"t8N8W2Kn",confirmButtonActive:"_1U01UmLD",waitingText:"_2pQZAcO_",safeBottom:"_3HKl0Og4"}},29807:function(e){"use strict";e.exports=pinbridge}},u={};function l(e){var t=u[e];if(void 0!==t)return t.exports;var r=u[e]={id:e,loaded:!1,exports:{}};return c[e].call(r.exports,r,r.exports,l),r.loaded=!0,r.exports}l.m=c,e=[],l.O=function(t,r,n,a){if(!r){var o=1/0;for(s=0;s<e.length;s++){r=e[s][0],n=e[s][1],a=e[s][2];for(var i=!0,c=0;c<r.length;c++)(!1&a||o>=a)&&Object.keys(l.O).every((function(e){return l.O[e](r[c])}))?r.splice(c--,1):(i=!1,a<o&&(o=a));if(i){e.splice(s--,1);var u=n();void 0!==u&&(t=u)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[r,n,a]},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,{a:t}),t},r=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},l.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var a=Object.create(null);l.r(a);var o={};t=t||[null,r({}),r([]),r(r)];for(var i=2&n&&e;"object"==typeof i&&!~t.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((function(t){o[t]=function(){return e[t]}}));return o.default=function(){return e},l.d(a,o),a},l.d=function(e,t){for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.f={},l.e=function(e){return Promise.all(Object.keys(l.f).reduce((function(t,r){return l.f[r](e,t),t}),[]))},l.u=function(e){return"assets/js/"+({699:"ms_web_c",1437:"pdd-mod/qq-service",1795:"react_anti",2840:"ms_wx_c",3400:"ms_wx_app_c",3910:"monitor-dev-panel",5911:"ms_native_c",6795:"ms_qq_c",8920:"pdd-mod/wechat-service"}[e]||e)+"_"+{699:"6732b5028e99ec3711b5",1437:"8c02393760457f458cb0",1795:"441bea40694e5c52acea",2568:"6a9075934c166e207340",2840:"6434b9a1d923ed8182f5",3400:"24b2cb1994a4daafc256",3910:"1463c1311397215db064",4369:"5a4a3b3070791597ae79",5911:"7eb7b058f14ab10fa6ff",5929:"a14da7d1d823f43f659e",6795:"0c9491c4660477c5771a",8920:"02c40a20678ac528640a"}[e]+".js"},l.miniCssF=function(e){return"assets/css/monitor-dev-panel_d314c614b241f08063cc.css"},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n={},a="mobile-live-video:",l.l=function(e,t,r,o){if(n[e])n[e].push(t);else{var i,c;if(void 0!==r)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var p=u[s];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==a+r){i=p;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.setAttribute("data-webpack",a+r),i.src=e),n[e]=[t];var f=function(t,r){i.onerror=i.onload=null,clearTimeout(d);var a=n[e];if(delete n[e],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((function(e){return e(r)})),t)return t(r)},d=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),c&&document.head.appendChild(i)}},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},l.j=329,l.p="https://static.pddpic.com/",l.p=window.__webpack_public_path__||l.p,o=function(e){return new Promise((function(t,r){var n=l.miniCssF(e),a=l.p+n;if(function(e,t){for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var a=(i=r[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===t))return i}var o=document.getElementsByTagName("style");for(n=0;n<o.length;n++){var i;if((a=(i=o[n]).getAttribute("data-href"))===e||a===t)return i}}(n,a))return t();!function(e,t,r,n){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=function(o){if(a.onerror=a.onload=null,"load"===o.type)r();else{var i=o&&("load"===o.type?"missing":o.type),c=o&&o.target&&o.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=c,a.parentNode.removeChild(a),n(u)}},a.href=t,document.head.appendChild(a)}(e,a,t,r)}))},i={329:0},l.f.miniCss=function(e,t){i[e]?t.push(i[e]):0!==i[e]&&{3910:1}[e]&&t.push(i[e]=o(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))},function(){var e={329:0};l.f.j=function(t,r){var n=l.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise((function(r,a){n=e[t]=[r,a]}));r.push(n[2]=a);var o=l.p+l.u(t),i=new Error;l.l(o,(function(r){if(l.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+t,t)}},l.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,a,o=r[0],i=r[1],c=r[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(n in i)l.o(i,n)&&(l.m[n]=i[n]);if(c)var s=c(l)}for(t&&t(r);u<o.length;u++)a=o[u],l.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return l.O(s)},r=self.webpackChunkmobile_live_video=self.webpackChunkmobile_live_video||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var s=l.O(void 0,[1216,6457,4115],(function(){return l(84247)}));s=l.O(s)}();
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/assets/js/vlive_author_original_certification_1cea0d90c08a7148efd0.js.map