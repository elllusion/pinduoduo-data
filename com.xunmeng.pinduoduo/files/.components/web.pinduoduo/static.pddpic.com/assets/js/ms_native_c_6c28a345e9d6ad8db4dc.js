(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[10],{"3Wbp":function(e,t,r){"use strict";r.r(t);var a=r("lwsE"),n=r.n(a),i=r("W8MJ"),s=r.n(i),o=r("a1gu"),h=r.n(o),c=r("Nsbk"),_=r.n(c),u=r("iWIM"),p=r.n(u),E=r("7W2i"),l=r.n(E),S=r("KoDT"),f=r("h3qu"),I=r("MpJ2"),d=r("dKgK"),O=r("a/1V"),A=function(e){return Object(S.a)().version},T=60006;function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],A());return Object(S.a)().platform===f.a.PddIOS&&Object(f.c)(r,e)>=0||Object(S.a)().platform===f.a.PddAndroid&&Object(f.c)(r,t)>=0||Object(S.a)().platform===f.a.PDDTinyAndorid}var v=function(){var e=A();return Object(S.a)().platform===f.a.PddIOS&&Object(f.c)(e,"4.37.0")>=0},y=function(){return m("4.85.0","4.85.0")},C=function(){return m("5.41.0","5.41.0")},g=function(){return"JSShare"},b=r("/bZk"),R=r("chhR"),N=r("EECB"),L=r("o0o1"),D=r.n(L),P=r("cDf5"),H=r.n(P),M=r("yXPU"),j=r.n(M),U=r("YSLc"),W=r("W9H9"),k=r("gfNA"),w=r("Ne86"),x=r("7sJ8"),G=r("8l/m"),B=r("rIj9"),Y="api/flow/audience/share/types",K=r("v1av"),V=r("z4CT"),Q=r("dp2P"),Z=b.b.ShareErrorCode,F=function(){function e(){n()(this,e),this._inited=!1,this._queryShareTypePromise=null,this._rules=null,this._enableShareTypes=[],this.appOptional=null,this._rom=0,this._isCipherDowngrade=!1,this._enableSilentMode=!1}return s()(e,[{key:"build",value:function(){var e=this;return this._inited?Promise.resolve():(this._queryShareTypePromise||(this._queryShareTypePromise=this.loadRules(),this._queryShareTypePromise.then(function(t){return e._inited=!0,e._processRules(t),K.a.getInstance().build({magicTrace:t.magic_trace})}).catch(function(t){Object(V.a)({errorCode:0,message:"分享规则初始化失败",options:{message:t&&t.message,errorCode:t&&t.errorCode}}),e._inited=!0})),this._queryShareTypePromise)}},{key:"reset",value:function(){this._inited=!1,this._queryShareTypePromise=null,this._rules=null,this._enableShareTypes=[],this.appOptional=null,this._rom=0,this._isCipherDowngrade=!1,this._enableSilentMode=!1}},{key:"getAppOptional",value:function(){return this.appOptional}},{key:"getRules",value:function(){var e=this;return this.build().then(function(){return e._rules},function(){return Promise.resolve(e._rules)})}},{key:"loadRules",value:function(){return Object(S.a)().isNativePlatform?Object(I.h)(g(),"queryShareTypes",{page_sn:Object(G.c)()+"",page_info:{page_name:Object(G.b)(),page_url:location&&location.href}}):function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=Object(B.a)({pageInfo:{pageId:Object(G.a)()}},{defaultErrorHandler:function(e){}}),a={};return a.page_sn=t.pageSn||"",a.page_info=t.pageInfo||{},a.platform="h5","post"===e.toLowerCase()?r.post(Y,a):r.get(Y,{params:a})}("post",{pageSn:Object(G.c)()+"",pageInfo:{page_name:Object(G.b)(),page_url:location&&location.href}})}},{key:"_processRules",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.share_types||[];this.appOptional=e.app_optional,this._rom=e.rom,this._enableSilentMode=e.is_weird,e.degrade&&this.setCipherDowngrade(!0);var r=[];return this._rules=t.reduce(function(e,t){var a=t.share_type;return a&&(e[a]=t,r.push(parseInt(a,10))),e},{}),this._innerShareTypes=e.inner_share_types||[],this._innerShareTypes.forEach(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r.push(parseInt(e.share_type,10))}),this._enableShareTypes=r,this._rules}},{key:"getRuleByType",value:function(e){return(this._rules||{})[e]}},{key:"checkSync",value:function(e,t){if(!this._rules)return Z.SHARE_LIMITER_NOT_INIT;if(this._enableShareTypes.indexOf(e)<0)return Z.SHARE_TYPE_DISABLED;var r=t.getShareForm(e),a=(this.getRuleByType(e)||{}).share_methods||[];return[W.a.COMMAND,W.a.TEXT].indexOf(r)>=0?Object(Q.c)(t.urlWrapType)&&t.marketActivityID&&(t.shortURLApi&&a.indexOf(x.a.LINK)>=0||t.shortCommandApi&&a.indexOf(x.a.CIPHER)>=0)?0:a.indexOf(x.a.NORMAL)>=0?0:Z.SHARE_TYPE_DISABLED:[O.a.WECHAT_SESSION,O.a.WECHAT_TIMELINE].indexOf(e)>=0?Object(Q.d)(t.urlWrapType)&&t.marketActivityID&&a.indexOf(x.a.DOMAIN)<0?Z.SHARE_TYPE_DISABLED:a.indexOf(x.a.NORMAL)>=0?0:Z.SHARE_TYPE_DISABLED:0}},{key:"setCipherDowngrade",value:function(e){this._isCipherDowngrade=e}},{key:"isCipherDowngrade",get:function(){return this._isCipherDowngrade}},{key:"rom",get:function(){return this._rom}},{key:"isSilentMode",get:function(){return this._enableSilentMode}}]),e}(),q=null;function X(){return q||(q=new F),q}var z=r("MVZn"),J=r.n(z),$=r("bbLm"),ee=r("rUjM"),te="api/flow/walrus/inquire/confusion/info",re="api/flow/chron/share/card",ae={MAIN:0,GENERAL:1,TP:2};function ne(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:ee.a.TP_FIRST,[]),r=[],a=[],n=[];return e.forEach(function(e){if(e)switch(e.dev_type){case ae.GENERAL:t.push(e);break;case ae.TP:r.push(e);break;case ae.MAIN:a.push(e);break;default:n.push(e)}}),y()||(t=r=[]),r[0]||t[0]||a[0]}var ie=r("Qm63"),se=r("2Goq"),oe=r("T8QY"),he=r("J4zp"),ce=r.n(he),_e=r("6wpZ"),ue={QUERY_CODE:0,QUERY_TEXT:1,POP_CIPHER:2};var pe={};function Ee(e){var t=e.consumeMode,r=e.scene;if("number"!=typeof t||[_e.a.CONSUME_RAW,_e.a.RECYCLE_RAW].indexOf(t)>=0)return Promise.resolve();var a=function(e){if(e&&!(e.length<=0)){if([_e.a.CONSUME_TIME_DIVIDE,_e.a.RECYCLE_TIME_DIVIDE].indexOf(t)>=0){var r=new Date,a=r.getMinutes(),n=r.getSeconds();return e[Math.floor(e.length*(60*a+n)/3600)]}if(_e.a.RECYCLE_TIME_DIVIDE_MULTI===t){var i=e.length,s=Math.min(Math.max(parseInt(window.__SHARE_CIPHER_PARALLEL_SIZE__,10)||0,2),i),o=Math.max(Math.floor(i/s),1),h=Math.floor(Math.random()*s),c=new Date,_=c.getMinutes(),u=c.getSeconds(),p=Math.floor(o*(60*_+u)/3600);return e[Math.max(h*o+p,i-1)]}return e[0]}},n=(pe[r]||{}).texts;return n?Promise.resolve(a(n)):function(e){return Object(I.h)(g(),"getLocalCipherInfo",{action:ue.QUERY_TEXT,page_sn:Object(G.c)()+"",scene:e}).then(function(){var t=((arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).texts||[]).map(function(e){if(e)return e.version&&Object(f.c)(e.version,window.__SHARE_CIPHER_VER__||"0.0.1")>=0?e.text:e.version?void 0:e.text}).filter(function(e){return!!e});return pe[e]=pe[e]||{},pe[e].texts=t,t},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(V.a)({errorCode:e.errorCode,message:"本地获取口令文本失败",options:e.data}),null})}(r).then(a)}function le(e){var t=e.consumeMode,r=e.scene;return"number"!=typeof t?Promise.resolve():[_e.a.CONSUME,_e.a.CONSUME_TIME_DIVIDE,_e.a.CONSUME_RAW].indexOf(t)>=0?function(e){return Object(I.h)(g(),"getLocalCipherInfo",{action:ue.POP_CIPHER,page_sn:Object(G.c)()+"",scene:e}).then(function(e){return e.cipher},function(e){return Object(V.a)({errorCode:e.errorCode,message:"本地消费口令码失败",options:e.data}),null})}(r):function(e){return Object(I.h)(g(),"getLocalCipherInfo",{action:ue.QUERY_CODE,page_sn:Object(G.c)()+"",scene:e}).then(function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).ciphers||[]},function(e){return Object(V.a)({errorCode:e.errorCode,message:"本地获取口令码失败",options:e.data}),null})}(r).then(function(e){if(e&&!(e.length<=0))return e[0]})}var Se=r("q8Ib");function fe(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return Object(S.a)().isNativePlatform?Ie.apply(void 0,t).then(function(e){return e.missed?w.d.apply(void 0,t):e}):w.d.apply(void 0,t)}var Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.shareURL||"",r=e.urlWrapType;if(e.marketActivityID&&e.activitySceneSn&&r===Q.a.SERVER_TP_APP)return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=Object(B.a)({pageInfo:{pageId:Object(G.a)()}},{defaultErrorHandler:function(e){}}),a={long_url:e.shareURL||"",activity_code:(e.marketActivityID||0)+"",scene_sn:e.activitySceneSn||"",rom:e.rom||0,params:{}};return e.payloadMixin&&"object"===H()(e.payloadMixin)&&(a=Object.assign(a,e.payloadMixin)),"string"!=typeof a.params&&(a.params=JSON.stringify(a.params)),r.post(te,a).then(function(){var e=((arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).infos||[]).filter(function(e){return Object.keys(e).length>0});return{info:ne(e,t),tpInfos:e,tpDowngrade:e.length<=0}})}(Object.assign({rom:X().rom},e),e.tpSelectCategory).then(function(e){var r=e.info,a=e.tpInfos;return{tpInfo:r,tpDowngrade:e.tpDowngrade,tpInfos:a,realShareURL:(r||a[0]||{}).link_url||t,targetShareURL:t}},function(e){return Promise.resolve({tpDowngrade:!0,realShareURL:t,targetShareURL:t})});if(e.marketActivityID&&Object(Q.b)(r)){var a=Object(Q.d)(r)?Se.b.WEIXIN_TINY_DOMAIN:Se.b.SHORT_LINK,n=t.replace(/^(\w+:)?\/\//,""),i=Object(ie.a)(e),s=e.cipherScene,o=e.consumeMode,h=Object(se.a)(),c=function(){var s=new Promise(function(i,s){Object(Se.c)(e.requestUsePost?"post":"get",{shareURL:n,marketActivityID:e.marketActivityID,platform:Object(w.c)(),shareDomainType:a,shortURLApi:e.shortURLApi,shortCommandApi:e.shortCommandApi,domainURLApi:e.domainURLApi,payloadMixin:e.payloadMixin}).then(function(e){if(e){var n=e.domain,s=void 0===n?"":n,o=e.shortURL,h=e.shareText,c=e.raw;if(a===Se.b.WEIXIN_TINY_DOMAIN)r===Q.a.DOMAIN_REPLACE&&i(Object(w.a)(t,s));else if(a===Se.b.SHORT_LINK)return void i({useShortURL:!0,realShareURL:o||t,targetShareURL:t,shareText:h,rawResponse:c})}i({realShareURL:t,targetShareURL:t})}).catch(function(e){s(e)})});return a===Se.b.SHORT_LINK&&s.then(function(e){e&&e.useShortURL&&(h.cacheResponseByHash(i,e),h.setShareID(i,(new oe.a(t).query||{}).refer_share_id))}),s};if(r===Q.a.SERVER_SHORT_URL_WITH_CACHE){var _=h.getResponseByHash(s);return _?(h.increaseCount(s),Promise.resolve(_)):(_=h.getResponseByHash(i))?(h.increaseCount(i),Promise.resolve(_)):s&&X().isCipherDowngrade?function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.scene,r=e.consumeMode;return Object(S.a)().isNativePlatform&&C()&&t&&"number"==typeof r?Promise.all([le(e),Ee(e)]).then(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=ce()(e,2),a=t[0],n=t[1];return a&&[_e.a.CONSUME_RAW,_e.a.RECYCLE_RAW].indexOf(r)>=0?a:a&&n?Object.assign({text:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.replace(/%s/g,t)}(n,a.cipher)},a):void 0}):Promise.resolve()}({scene:s,consumeMode:o}).then(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(e&&e.share_id){var t={cipher:e.cipher,shareText:e.text,shareID:e.share_id};return h.cacheResponseByHash(s,t),h.setShareID(s,e.shareID),t}return c()},function(e){return c()}):c()}return c()}return e.activitySceneSn&&r===Q.a.SERVER_TP_APP_CARD?function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=Object(B.a)({pageInfo:{pageId:Object(G.a)()}},{defaultErrorHandler:function(e){}}),a=J()({scene_id:e.activitySceneSn,long_url:e.shareURL||"",rom:e.rom||0,param:{},page_sn:Object(G.c)()},Object($.b)(e));return e.payloadMixin&&"object"===H()(e.payloadMixin)&&(a=Object.assign({},e.payloadMixin.param_map,a)),"string"!=typeof a.param&&(a.param=JSON.stringify(a.param)),r.post(re,{param_map:a}).then(function(){var e=((arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).infos||[]).filter(function(e){return Object.keys(e).length>0});return{info:ne(e,t),tpInfos:e,tpDowngrade:e.length<=0}})}(Object.assign({rom:X().rom},e),e.tpSelectCategory).then(function(e){var r=e.info,a=e.tpInfos;return{tpInfo:r,tpDowngrade:e.tpDowngrade,tpInfos:a,realShareURL:(r||a[0]||{}).link_url||t,targetShareURL:t}},function(e){return Promise.resolve({tpDowngrade:!0,realShareURL:t,targetShareURL:t})}):Promise.resolve({missed:!0,realShareURL:t,targetShareURL:t})},de=r("XfDS"),Oe=r("Upw4");function Ae(){return Te.apply(this,arguments)}function Te(){return(Te=j()(D.a.mark(function e(){var t,r,a,n=arguments;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.length>0&&void 0!==n[0]?n[0]:{},"function"==typeof(r=n.length>1?n[1]:void 0).cipherProcessor){e.next=4;break}return e.abrupt("return",t);case 4:return e.prev=4,e.next=7,r.cipherProcessor({cipherText:t.title,cipherCode:t.cipher,shareEntity:r});case 7:"string"==typeof(a=e.sent)&&(t.title=t.desc=a),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(4);case 13:return e.abrupt("return",t);case 14:case"end":return e.stop()}},e,null,[[4,11]])}))).apply(this,arguments)}var me="static",ve="dynamic",ye=function(e){return e?Array.isArray(e)&&e.length>0?e[0]:"object"===H()(e)?e:null:null},Ce=function(e){return e?Array.isArray(e)&&e.length>0?e.map(function(e,t){return e?"string"==typeof e?{type:me,data:e}:"object"===H()(e)?e.type?e:{type:ve,options:e}:void 0:null}).filter(function(e){return!!e}):"object"===H()(e)?[{type:ve,options:e}]:[]:[]};function ge(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=e.drawImageOptions;return"function"==typeof a?a(r=J()({shareRefer:Object($.b)(e)},r||{})):"object"===H()(a)?t?Promise.resolve(Ce(a)):Promise.resolve(ye(a)):Promise.resolve({})}var be=function(e){function t(e){var r;return n()(this,t),(r=h()(this,_()(t).call(this,e))).drawImageOptions=e.drawImageOptions,r.redirectURI=e.redirectURI||"",r.miniObjectPath=e.miniObjectPath||"",r.miniObjectID=e.miniObjectID,r.useWxAppShare=e.useWxAppShare||!1,r.forceDowngrade=e.forceDowngrade||!1,r.excludeShareChoices=e.excludeShareChoices||[],r.thirdPartyOpenType=e.thirdPartyOpenType,r.drawImageClass=e.drawImageClass,r.needSharedAmount=e.needSharedAmount||!1,r.cipherScene=e.cipherScene,r.consumeMode=e.consumeMode,r.activitySceneSn=e.activitySceneSn,r.tpSelectCategory=e.tpSelectCategory,r.pinTimelineParams=e.pinTimelineParams,r}return l()(t,e),s()(t,[{key:"normalize",value:function(){var e=j()(D.a.mark(function e(t){var r,a,n,i,s,o,h,c,_=this;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t!==O.a.COPY_CIPHER){e.next=2;break}return e.abrupt("return",this.processCipher());case 2:if(r=Object.assign({},this),t!==O.a.PIN_TIMELINE){e.next=5;break}return e.abrupt("return",r.pinTimelineParams);case 5:a={title:r.title,desc:r.message,thumbnail:r.thumbnailURL,share_url:r.shareURL,share_id:r.shareID},r.payloadMixin&&(n=r.payloadMixin.extra,"object"===H()(n)&&void 0!==n.share_prefer&&(a.share_prefer=n.share_prefer)),i=!1,e.t0=t,e.next=e.t0===O.a.WECHAT_SESSION?11:e.t0===O.a.WECHAT_TIMELINE_IMAGE?14:e.t0===O.a.WECHAT_TIMELINE_IMAGE_WITH_NO_SDK?14:e.t0===O.a.WECHAT_SESSION_IMAGE?14:e.t0===O.a.QQ_CHAT_SESSION_IMAGE?14:e.t0===O.a.QQ_ZONE_IMAGE?14:e.t0===O.a.WEIBO_IMAGE?14:e.t0===O.a.WECHAT_SESSION_IMAGE_WITH_NO_SDK?14:e.t0===O.a.WECHAT_SESSION_IMAGES_WITH_NO_SDK?19:e.t0===O.a.SHARE_IMAGE_PASSIVELY?24:e.t0===O.a.IOS_SYSTEM_SHARE_CARD?30:e.t0===O.a.WECHAT_SESSION_CARD_WITH_NO_SDK?30:e.t0===O.a.WECHAT_TIMELINE_CARD_WITH_NO_SDK?30:32;break;case 11:if(r.miniObjectPath&&"string"==typeof r.miniObjectPath)a.mini_object_path=Object($.a)(r);else if("function"==typeof r.miniObjectPath)try{a.mini_object_path=r.miniObjectPath(r.shareURL)}catch(e){}return r.miniObjectID&&(a.mini_object_id=r.miniObjectID),e.abrupt("break",33);case 14:return i=!0,e.next=17,ge(r);case 17:return a.options=e.sent,e.abrupt("break",33);case 19:return i=!0,e.next=22,ge(r,!0);case 22:return a.multi_image_options=e.sent,e.abrupt("break",33);case 24:return i=!0,e.next=27,ge(r);case 27:return a.options=e.sent,r.thirdPartyOpenType&&(a.open_type=r.thirdPartyOpenType),e.abrupt("break",33);case 30:return a.excluded_types=r.excludeShareChoices,e.abrupt("break",33);case 32:return e.abrupt("break",33);case 33:if(s=this.getShareForm.call(r,t),o=[W.a.COMMAND,W.a.TEXT].indexOf(s)>=0,this.targetShareURL=r.shareURL,this.realShareURL=r.shareURL,this.useShortURL=!1,t===O.a.WECHAT_SESSION&&a.mini_object_path&&(this.realShareURL=a.mini_object_path),Object(Oe.a)(t)&&(h=Object(w.b)(t,r.shareURL),a.share_url=h,this.shareURL=h,this.realShareURL=h,this.targetShareURL=h),t===O.a.WECHAT_SESSION&&a.mini_object_path&&(this.realShareURL=this.targetShareURL=a.mini_object_path),s!==W.a.CARD&&s!==W.a.WXAPP_CARD||!r.urlWrapType){e.next=45;break}return e.abrupt("return",fe(r).then(function(e){var t=e.realShareURL,n=e.targetShareURL,i=e.useShortURL,s=e.tpDowngrade,o=e.tpInfo,h=e.tpInfos,c=e.appendQuery,u=e.categoryShareInfo,p=e.useCipher,E=e.missed;return p?Promise.reject(new Error("operation refused")):(E||(_.useShortURL=i,_.realShareURL=t,_.targetShareURL=n),a.share_url=t,o&&(a.title=o.title||a.title,a.desc=o.message||a.desc),u&&(a.title=u.title||a.title,a.thumbnail=u.thumbnailURL||a.thumbnail),a.tpInfo=o,a.tpInfos=h,a.tpDowngrade=s,r.urlWrapType===Q.a.SERVER_QUERY_APPEND&&"string"==typeof a.mini_object_path&&a.mini_object_path&&(a.mini_object_path=Object($.a)({miniObjectPath:a.mini_object_path,shareURL:t},{appendQuery:c}),_.realShareURL=a.mini_object_path),a)}));case 45:if(!i||!Object(Q.c)(r.urlWrapType)&&r.urlWrapType!==Q.a.MAGIC_TRACE&&r.urlWrapType!==Q.a.MAGIC_TRACE_DYNAMIC){e.next=49;break}return e.abrupt("return",fe(r).then(function(){var e=j()(D.a.mark(function e(){var t,n,i,s,o,h=arguments;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=h.length>0&&void 0!==h[0]?h[0]:{},n=t.realShareURL,i=t.targetShareURL,s=t.useShortURL,o=t.shareText,_.targetShareURL=i,r.shortCommandApi?(_.pcode=o,a.share_url=o):(_.useShortURL=s,_.realShareURL=n,a.share_url=s?Object(de.a)(n):n),!s){e.next=16;break}if(!a.multi_image_options){e.next=11;break}return e.next=8,ge(r,!0,t);case 8:a.multi_image_options=e.sent,e.next=16;break;case 11:if(!a.options){e.next=16;break}return e.next=14,ge(r,!1,t);case 14:a.options=e.sent,a.options&&"object"===H()(a.options)&&a.options.$params&&(Object.assign(a,a.options.$params),delete a.options.$params);case 16:return e.abrupt("return",a);case 17:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()));case 49:if(!o){e.next=60;break}if(c=a.title||"",!Object(Q.c)(r.urlWrapType)){e.next=55;break}return e.abrupt("return",fe(r).then(function(e){var t=e.realShareURL,n=e.targetShareURL,i=e.useShortURL,s=e.shareText,o=e.shareID,h=e.cipher,u=e.tpInfo,p=e.tpInfos,E=e.tpDowngrade;if(o&&(a.shareID=o),h&&(a.cipher=h),u&&(a.title=u.link_url||a.title,a.desc=u.link_url||a.desc,c=a.title),a.tpInfo=u,a.tpInfos=p,a.tpDowngrade=E,_.targetShareURL=n,r.shortCommandApi){var l=i||h?s:"",S=l||n;c=Object(k.b)(c,S,n,l),a.title=a.desc=c,_.pcode=c}else{var f=i?t:"",I=f||n;c=Object(k.b)(c,I,n,f),a.title=a.desc=c,_.useShortURL=i,_.realShareURL=I}return Ae(a,r)}));case 55:return c=Object(k.b)(c,r.shareURL),a.title=a.desc=c,e.abrupt("return",Ae(a,r));case 58:e.next=61;break;case 60:return e.abrupt("return",Promise.resolve(a));case 61:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getShareForm",value:function(e){return e===O.a.WECHAT_SESSION?this.miniObjectPath||this.useWxAppShare?W.a.WXAPP_CARD:W.a.CARD:[4,2,5,6,24,25].includes(e)?W.a.CARD:[8,9,10,11,12,13,15,19,20,22].includes(e)?W.a.IMAGE:[3,16,17,21,O.a.COPY_CIPHER].includes(e)?this.shortCommandApi?W.a.COMMAND:W.a.TEXT:e===O.a.COPY_LINK?W.a.COPY_LINK:W.a.DEFAULT}},{key:"getShareMethod",value:function(e){return[9,16,19,20].includes(e)?U.a.SYSTEM:[1,2,3,4,5,8,10,11,12,13,15,17,21,24,25].includes(e)?U.a.SDK:e===O.a.SHARE_IMAGE_PASSIVELY?this.thirdPartyOpenType?U.a.MANUAL:U.a.DEFAULT:e===O.a.COPY_CIPHER?U.a.MANUAL:U.a.DEFAULT}}]),t}(k.a),Re=r("A4fa"),Ne=r("WiBJ");var Le=r("KxTr"),De=Object.keys(O.a).map(function(e){return O.a[e]}).filter(function(e){return[O.a.WECHAT_BIG_IMAGE].indexOf(e)<=0}),Pe=function(e){function t(e){var r;return n()(this,t),(r=h()(this,_()(t).call(this,e))).ShareEntityClass=be,r._enableShareTypes=De.concat(),r.shareLimiter=X(),r._isEnableShareCheck=!1,r.setShareCheck(!0),r}return l()(t,e),s()(t,[{key:"setShareCheck",value:function(e){Object(S.a)().isTinyNativePlatform?this._isEnableShareCheck=!0:this._isEnableShareCheck=!!e&&m("4.51.0","4.51.0")}},{key:"checkShareTypeEnable",value:function(e){var t=this.getShareEntityByShareType(e);if(!this.validateShareParams(e,t))return b.a.SHARE_PARAMS_NOT_VALID;if(!function(e){var t=!1;if("number"!=typeof e)return!1;switch(e){case O.a.WECHAT_SESSION:case O.a.WECHAT_TIMELINE:case O.a.WECHAT_SESSION_APP:case O.a.QQ_CHAT_SESSION:case O.a.QQ_ZONE:case O.a.WECHAT_TIMELINE_IMAGE:case O.a.WECHAT_TIMELINE_IMAGE_WITH_NO_SDK:case O.a.WECHAT_SESSION_IMAGE:case O.a.QQ_CHAT_SESSION_IMAGE:case O.a.QQ_ZONE_IMAGE:case O.a.WECHAT_SESSION_TEXT_WITH_NO_SDK:case O.a.WECHAT_SESSION_TEXT:t=!0;break;case O.a.WEIBO:case O.a.WEIBO_IMAGE:t=m("4.81.0","4.81.0");break;case O.a.WECHAT_SESSION_IMAGE_WITH_NO_SDK:case O.a.WECHAT_SESSION_IMAGES_WITH_NO_SDK:t=m("4.37.0","4.36.0");break;case O.a.WECHAT_TIMELINE_TEXT:t=m("4.39.0","4.39.0");break;case O.a.IOS_SYSTEM_SHARE_CARD:case O.a.WECHAT_SESSION_CARD_WITH_NO_SDK:case O.a.WECHAT_TIMELINE_CARD_WITH_NO_SDK:t=v();break;case O.a.SHARE_IMAGE_PASSIVELY:t=m("4.49.0","4.49.0");break;case O.a.COPY_LINK:case O.a.COPY_CIPHER:t=!0;break;case O.a.WECHAT_SESSION_MUSIC:case O.a.WECHAT_SESSION_VIDEO:t=m("4.86.0","4.86.0");break;case O.a.FRIENDS:case O.a.WECHAT_BIG_IMAGE:t=!0;break;case O.a.PIN_TIMELINE:t=m("5.6.0","5.6.0")}return t}(e)||this._enableShareTypes.indexOf(e)<0)return b.a.SHARE_TYPE_DISABLED;if(this._isEnableShareCheck&&[O.a.COPY_LINK,O.a.COPY_CIPHER].indexOf(e)<0){var r=this.shareLimiter.checkSync(e,t);if(r)return r}return 0}},{key:"share",value:function(e){var t=this.checkShareTypeEnable(e);return t||(e===O.a.PIN_TIMELINE?this._sharePinTimeline(e):e===O.a.WECHAT_BIG_IMAGE?this._nativeShareBigImage(e):[O.a.WECHAT_SESSION,O.a.WECHAT_TIMELINE,O.a.WEIBO,O.a.QQ_CHAT_SESSION,O.a.QQ_ZONE,O.a.TENCENT_WEIBO,O.a.WECHAT_SESSION_APP,O.a.FRIENDS,O.a.WECHAT_SESSION_MUSIC,O.a.WECHAT_SESSION_VIDEO].indexOf(e)>=0?this._nativeShareCard(e):[O.a.WECHAT_TIMELINE_IMAGE,O.a.WECHAT_TIMELINE_IMAGE_WITH_NO_SDK,O.a.WECHAT_SESSION_IMAGE,O.a.QQ_CHAT_SESSION_IMAGE,O.a.QQ_ZONE_IMAGE,O.a.WEIBO_IMAGE,O.a.WECHAT_SESSION_IMAGE_WITH_NO_SDK,O.a.SHARE_IMAGE_PASSIVELY].indexOf(e)>=0?this._nativeShareImage(e):[O.a.WECHAT_SESSION_TEXT_WITH_NO_SDK,O.a.WECHAT_SESSION_TEXT,O.a.WECHAT_TIMELINE_TEXT].indexOf(e)>=0?this._nativeShareText(e):O.a.COPY_LINK===e?this._nativeShareClipboard(e):O.a.COPY_CIPHER===e?this.copyCipher():b.a.SHARE_TYPE_NOT_FOUND)}},{key:"validateShareParams",value:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!0}},{key:"_setupShareTypes",value:function(){}},{key:"resetLimiter",value:function(){return this.shareLimiter.reset(),this._queryShareTypePromise=null,this.waitShareLimiter()}},{key:"refreshShare",value:function(e,r){var a=p()(_()(t.prototype),"refreshShare",this).call(this,e,r);return this.emit(R.a.ON_SHARE_PREPARE,{shareType:r}),a}},{key:"_setupPlatformShareSDK",value:function(){return this.waitShareLimiter()}},{key:"waitShareLimiter",value:function(){var e=this;return this._isEnableShareCheck?(this._queryShareTypePromise||(this._queryShareTypePromise=this.shareLimiter.build().catch(function(t){return e.emit(R.a.SHARE_LIMIT_LOAD_FAIL),Promise.resolve()})),this._queryShareTypePromise):Promise.resolve()}},{key:"_nativeShareCard",value:function(e){var t=this;this.emit(R.a.ON_SHARE_TRIGGER,{shareType:e});var r=this.getShareEntityByShareType(e);return r.normalize(e).then(function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=a.tpInfo,i=a.tpInfos,s=a.tpDowngrade;if(delete a.tpInfo,delete a.tpInfos,delete a.tpDowngrade,s)t.emit(R.a.ON_SHARE_COMPLETED,{shareType:e,shareResultType:N.a.FAIL,tpDowngrade:!0,tpInfo:n});else{var o=Object.assign({type:e,redirect_uri:r.redirectURI||"",share_params:a,share_method:Object(Ne.a)(r,e)});r.needSharedAmount&&(o.show_check_detail=1),n&&n.dev_type&&(o.dev_app=n.dev_app,o.dev_type=n.dev_type),i&&(o.dev_infos=i),t._invokeNativeShare(o,function(r){t.emit(R.a.ON_SHARE_COMPLETED,{shareType:e,shareResultType:N.a.SUCCESS,responseData:r,tpInfo:n})},function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=parseInt(r.errorCode,10)||0,i=a===T?N.a.CANCEL:N.a.FAIL;t.emit(R.a.ON_SHARE_COMPLETED,{shareType:e,shareResultType:i,nativeShareErrorCode:a,responseData:r.data,tpInfo:n})})}},this.getNormalizeErrorHandler(e)),0}},{key:"_nativeShareImage",value:function(e){var t=this;this.emit(R.a.ON_SHARE_TRIGGER,{shareType:e});var r=this.getShareEntityByShareType(e),a=e;return r.normalize(e).then(function(n){var i={type:a,share_params:n,share_method:Object(Ne.a)(r,e)},s=!1;a===O.a.WECHAT_TIMELINE_IMAGE_WITH_NO_SDK&&(i.complete=function(){t.emit(R.a.ON_SHARE_COMPLETED,{shareType:e,useComplete:!0,shareResultType:N.a.SUCCESS})},s=!0),t._invokeNativeShare(i,function(r){!s&&t.emit(R.a.ON_SHARE_COMPLETED,{shareType:e,shareResultType:N.a.SUCCESS,responseData:r})},function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=parseInt(r.errorCode,10),n=a===T?N.a.CANCEL:N.a.FAIL;!s&&t.emit(R.a.ON_SHARE_COMPLETED,{shareType:e,shareResultType:n,nativeShareErrorCode:a,responseData:r.data})})},this.getNormalizeErrorHandler(e)),0}},{key:"_nativeShareText",value:function(e){var t=this,r=this.getShareEntityByShareType(e),a=r.cipherScene&&"string"==typeof r.cipher;!a&&this.emit(R.a.ON_SHARE_TRIGGER,{shareType:e});var n=e;return r.normalize(e).then(function(i){var s=i.tpInfo,o=i.tpInfos,h=i.tpDowngrade;if(delete i.tpInfo,delete i.tpInfos,delete i.tpDowngrade,a&&(t.emit(R.a.ON_SHARE_TRIGGER,{shareType:e,shareID:i.shareID}),delete i.shareID),h)t.emit(R.a.ON_SHARE_COMPLETED,{shareType:e,shareResultType:N.a.FAIL,tpDowngrade:!0,tpInfo:s});else{var c=Object.assign({type:n,share_params:i,share_method:Object(Ne.a)(r,e)});s&&s.dev_type&&(c.dev_app=s.dev_app,c.dev_type=s.dev_type),o&&(c.dev_infos=o);var _=!1;if(r.forceDowngrade||Object(S.a)().system===f.b.IOS&&n===O.a.WECHAT_SESSION_TEXT_WITH_NO_SDK)return t.emit(R.a.ON_SHARE_COMPLETED,{shareType:e,shareResultType:N.a.FAIL,shareParams:i}),0;Object(S.a)().system===f.b.Android&&n===O.a.WECHAT_SESSION_TEXT_WITH_NO_SDK&&(c.complete=function(){t.emit(R.a.ON_SHARE_COMPLETED,{shareType:e,useComplete:!0,shareResultType:N.a.SUCCESS})},_=!0),t._invokeNativeShare(c,function(r){!_&&t.emit(R.a.ON_SHARE_COMPLETED,{shareType:e,shareResultType:N.a.SUCCESS,responseData:r})},function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=parseInt(r.errorCode,10)||0,n=a===T?N.a.CANCEL:N.a.FAIL;!_&&t.emit(R.a.ON_SHARE_COMPLETED,{shareType:e,shareResultType:n,nativeShareErrorCode:a,responseData:r.data})})}},this.getNormalizeErrorHandler(e)),0}},{key:"_nativeShareBigImage",value:function(e){return b.a.SHARE_TYPE_DISABLED}},{key:"_nativeShareClipboard",value:function(e){var t=this;this.emit(R.a.ON_SHARE_TRIGGER,{shareType:e});var r=this.getShareEntityByShareType(e);return r.normalize(e).then(function(){var a=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).share_url||r.shareURL;(Object(S.a)().isNativePlatform?new Promise(function(e,t){Object(I.h)("JSStorage","getPasteboard",null).then(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e(t.text)})}):Promise.reject()).then(null,function(){return Promise.resolve("")}).then(function(r){(function(e){return"string"!=typeof e?Promise.reject():Object(S.a)().isNativePlatform?Object(I.h)("JSStorage","setPasteboard",{text:e}):Promise.reject()})(a).then(function(){t.emit(R.a.ON_SHARE_COMPLETED,{shareType:e,shareResultType:N.a.SUCCESS,content:a,originContent:r})},function(){t.emit(R.a.ON_SHARE_COMPLETED,{shareType:e,shareResultType:N.a.FAIL,content:a,originContent:r})})})},this.getNormalizeErrorHandler(e)),0}},{key:"_sharePinTimeline",value:function(e){var t=this;return this.emit(R.a.ON_SHARE_TRIGGER,{shareType:e}),this.getShareEntityByShareType(e).normalize(e).then(function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object.assign({type:e,share_params:r});t._invokeNativeShare(a,function(r){t.emit(R.a.ON_SHARE_COMPLETED,{shareType:e,shareResultType:N.a.SUCCESS,responseData:r})},function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=parseInt(r.errorCode,10)||0;t.emit(R.a.ON_SHARE_COMPLETED,{shareType:e,shareResultType:N.a.FAIL,nativeShareErrorCode:a,responseData:r.data})})},this.getNormalizeErrorHandler(e)),0}},{key:"setupNativeShareButton",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.shareIcon,a=void 0===r?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAMAAADUivDaAAAAM1BMVEUAAABmZmZmZmZlZWVmZmZmZmZlZWVlZWVoaGhlZWVkZGRmZmZlZWVlZWVlZWVmZmZmZmauFdI/AAAAEHRSTlMAhnjzbtHHEBrfJrGXRzZXUNTSwgAAAPRJREFUWMPt1+sKgzAMBWC71NbLLuf9n3a6sxFYN2vq/gxyEBSFz9pGaLpdOYucuyPJCUtSbheGHo/0Q6swjXhmnNqEqwCYHwfk2iJcFkEuJyDwyi7c+O6V4HhuViFyBkhwVqJNCFwHEq+1CTaB1UCCFWI0BJiXkxJLZkAso2BVK8FaD509SjB/QcQkWBO2iYA1kuLHn5KRbQKvFL8vhT2jUKOs55j3z0WORcUnvVEj9EF6/8JsIzKAd8K6qE444cTviNNBYhrHqZnQOOGEE0444USdyDYhA1Lsfs1dRqrtwTXVPTjTw5y+6EfMwvCtK6pHu6I7B+8m1re+k3UAAAAASUVORK5CYII=":r,n=t.shareIconSize,i=void 0===n?22:n;return"string"!=typeof a||"number"!=typeof i?b.a.SHARE_PARAMS_NOT_VALID:(Object(I.h)("JSUIControl","setRightBarButtons",{buttons:[{icons:{normal:a},callback:function(){e.emit(R.a.ON_SHARE_BUTTON_CLICKED)},size:i}]}).catch(function(e){}),0)}},{key:"_invokeNativeShare",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,a=g(),n="share",i=Object(G.c)()+"";this._isEnableShareCheck?(e=Object.assign({origin:"h5",page_sn:i,page_info:{page_name:Object(G.b)(),page_url:location&&location.href}},e),this.shareLimiter.getAppOptional()&&(e.app_optional=this.shareLimiter.getAppOptional()),n="performShare"):e.page_sn=i,Object(I.h)(a,n,e).then(t,r)}},{key:"shareCipherManually",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Re.a.OPEN_WECHAT,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Le.a.DEFAULT;return e&&"string"==typeof e?m("4.74.0","4.74.0","4.80.0")?(t!==Re.a.OPEN_WECHAT&&t!==Re.a.OPEN_WECHAT_IOS_SILENT&&t!==Re.a.OPEN_WECHAT_ANDROID_SILENT||(t=Object(S.a)().platform!==f.a.PDDTinyAndorid&&m("4.88.0","4.88.0")&&this.shareLimiter.isSilentMode?Object(S.a)().system===f.b.IOS?Re.a.OPEN_WECHAT_IOS_SILENT:Re.a.OPEN_WECHAT_ANDROID_SILENT:Re.a.OPEN_WECHAT),Object(I.h)(g(),"shareCipher",{cipher:e,open_type:t,paste_type:r})):Promise.reject(new Error("not support")):Promise.reject(new Error("invalid cipher"))}}]),t}(d.a);t.default=Pe}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-packet/js/ms_native_c_6c28a345e9d6ad8db4dc.js.map