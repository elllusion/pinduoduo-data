"use strict";(self.webpackChunkmobile_fun_cashback=self.webpackChunkmobile_fun_cashback||[]).push([[2561],{1948:function(t,n,e){e.d(n,{Ct:function(){return o},PS:function(){return s},mf:function(){return u},m0:function(){return a},qx:function(){return c},Ds:function(){return d},pm:function(){return f},Rw:function(){return p},QU:function(){return g},c1:function(){return h},ZQ:function(){return m},rj:function(){return v},zN:function(){return _}});var i=e(58701),r=e(803);function o(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;return 1*Number((t/n).toFixed(e))}function s(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;try{var e=/^#/.test(t)?t.slice(1):t,i="transparent"===t?0:Math.ceil(n);3===(e=/^[0-9a-f]{3}|[0-9a-f]{6}$/i.test(e)?e:"fffff").length&&(e=e.replace(/(\w)(\w)(\w)/gi,"$1$1$2$2$3$3"));var r=e.slice(0,2),o=e.slice(2,4),s=e.slice(4,6);return"rgba(".concat(parseInt(r,16),",").concat(parseInt(o,16),",").concat(parseInt(s,16),",").concat((i/100).toFixed(2),")")}catch(n){return t}}function u(t){return"[object Function]"===Object.prototype.toString.call(t)}function a(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"png";n=n||"png";var e="https://pinduoduoimg.yangkeduo.com/cartoon_activity/fruiter";return"".concat(e,"/").concat(t,".").concat(n)}function c(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"png";n=n||"png";var e="https://funimg.pddpic.com/cartoon_activity/fruiter";return"".concat(e,"/").concat(t,".").concat(n)}function d(t,n){var e=arguments,i=null,r=function(){var r=e;i&&(clearTimeout(i),i=null),i=setTimeout((function(){t(r)}),n)};return r}var l=function(){return"undefined"!=typeof window},f=function(t){if(l()){var n=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),e=window.location.search.substr(1).match(n);return null!=e?unescape(e[2]):void 0}},p=function(){return!!u(i.getCurrentPlatform)&&(0,i.getCurrentPlatform)().isNativePlatform},g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(0===t)return document.body.scrollTop=0,void((document.documentElement||{}).scrollTop=0);document.body.scrollTop=t,0===document.body.scrollTop&&((document.documentElement||{}).scrollTop=t)},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=new RegExp(/^#([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i);try{if(!n.test(t))return!1;var e=(t.match(n)||[])[1]||"";3!==e.length&&4!==e.length||(e=(e.match(/./g)||[]).reduce((function(t,n){return t+n+n}),""));var i=(e.match(/.{1,2}/g)||[]).map((function(t){return parseInt(t,16)}));return 4===i.length?(i[0]=+(i[0]/255).toPrecision(3),i.push(i.shift())):i.push(1),i.toString=function(){return"rgba(".concat(this[0],",").concat(this[1],",").concat(this[2],",").concat(this[3].toFixed(1),")")},i}catch(t){return!1}},m=function(t){return t&&isNaN(t)?t:Number(t)||0},v=function(t){if(!t||!t.stack)return"";try{var n=t.stack.replace(/\n/gi,"").split(/\bat\b/).slice(0,5).join("@").replace(/\?[^:]+/gi,""),e=t.toString();return n.indexOf(e)<0&&(n=e+"@"+n),n}catch(n){return t}};var _=function(t){return t===r.o.Hmall||t===r.o.CustomRow}},18735:function(t,n,e){var i=e(82448),r=e(66556),o=e(37554);function s(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var u=function(t,n,e,i){return new(e||(e=Promise))((function(r,o){function s(t){try{a(i.next(t))}catch(t){o(t)}}function u(t){try{a(i.throw(t))}catch(t){o(t)}}function a(t){t.done?r(t.value):new e((function(n){n(t.value)})).then(s,u)}a((i=i.apply(t,n||[])).next())}))},a=function(){function t(n){var e=this;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.appName="",this.subAppName="",this.sceneId=0,this.subSceneId=0,this.listId="",this.optId=0,this.subId=0,this.page=1,this.size=20,this.pageSn=0,this.pageName="default",this.imprElsn={},this.imprExt={},this.missionLogCfg={},this.multiMissionLogCfg={},this.monitorCfg={},this.inspectCfg={},this.multiInspectCfg={},this.customCfg={},this.landUrls={},this.bizTag="",this.paymentBiz="",this.menuMap={},this.hasAscertainRec=!1,this.orgStr="",this.ruleId="",this.initLandingUrls=function(){return u(e,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((0,r.mf)(this.landUrls)){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,this.landUrls();case 4:this.landUrls=t.sent;case 5:case"end":return t.stop()}}),t,this)})))};var s=Object.assign({},n),a=s,c=a.appName,d=void 0===c?"":c,l=a.subAppName,f=void 0===l?"":l,p=a.sceneId,g=void 0===p?0:p,h=a.subSceneId,m=void 0===h?0:h,v=a.listId,_=void 0===v?"":v,b=a.optId,I=void 0===b?0:b,E=a.subId,C=void 0===E?0:E,y=a.page,L=void 0===y?0:y,A=a.size,N=void 0===A?0:A,O=a.ruleId,S=void 0===O?"":O,R={},T=i.Z.getFunctions().coreUtil;(0,r.Lf)()&&(R=T.parseUrlQuery((0,r.w)())||{}),d=d||R.app_name||"cartoon_fruit_goods",g=g||R.scene_id||0,f=f||R.sub_app_name||"",m=m||R.sub_scene_id||0,_=_||R.list_id||(0,r.zO)(6).toString(),I=I||(0,r.ZQ)(R.opt_id)||0,C=C||(0,r.ZQ)(R.sub_opt_id)||0,L=L||Number(R.page)||1,N=N||Number(R.size)||20,S=S||R.rule_id||"",s=Object.assign({},s,{appName:d,subAppName:f,sceneId:g,subSceneId:m,listId:_,optId:I,subId:C,page:L,size:N,ruleId:S}),this.reset(s),(0,o.H8)().then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e.hasAscertainRec||(e.orgStr=t)}))}var n,e,a;return n=t,e=[{key:"reset",value:function(t){var n=t||{},e=n.appName,i=void 0===e?"":e,r=n.subAppName,o=void 0===r?"":r,s=n.sceneId,u=void 0===s?"":s,a=n.subSceneId,c=void 0===a?"":a,d=n.listId,l=void 0===d?"":d,f=n.optId,p=void 0===f?this.optId:f,g=n.subId,h=void 0===g?this.subId:g,m=n.page,v=void 0===m?this.page:m,_=n.size,b=void 0===_?this.size||20:_,I=n.pageSN,E=void 0===I?this.pageSn:I,C=n.pageName,y=void 0===C?this.pageName:C,L=n.imprElsn,A=void 0===L?this.imprElsn:L,N=n.imprExt,O=void 0===N?this.imprExt:N,S=n.missionLogCfg,R=void 0===S?this.missionLogCfg:S,T=n.multiMissionLogCfg,U=void 0===T?this.multiMissionLogCfg:T,F=n.monitorCfg,w=void 0===F?this.monitorCfg:F,k=n.inspectCfg,j=void 0===k?this.inspectCfg:k,D=n.multiInspectCfg,M=void 0===D?this.multiInspectCfg:D,P=n.customCfg,G=void 0===P?this.customCfg:P,x=n.landUrls,H=void 0===x?this.landUrls:x,Z=n.bizTag,z=void 0===Z?this.bizTag:Z,V=n.paymentBiz,W=void 0===V?this.paymentBiz:V,B=n.ruleId,K=void 0===B?this.ruleId:B;this.appName=i||this.appName,this.subAppName=o||this.subAppName,this.sceneId=u||this.sceneId,this.subSceneId=c||this.subSceneId,this.listId=l||this.listId,this.optId=p,this.subId=h,this.page=v,this.size=b||this.size,this.pageSn=E,this.pageName=y,this.missionLogCfg=R,this.multiMissionLogCfg=U,this.monitorCfg=w,this.inspectCfg=j,this.multiInspectCfg=M,this.customCfg=G,this.imprElsn=A,this.imprExt=O,this.landUrls=H,this.bizTag=z,this.paymentBiz=W,this.ruleId=K,this.initLandingUrls()}},{key:"incrPage",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.page=this.page+t}},{key:"changeBaseParams",value:function(t){var n=t||{},e=n.appName,i=void 0===e?this.appName:e,r=n.subAppName,o=void 0===r?this.subAppName:r,s=n.sceneId,u=void 0===s?this.sceneId:s,a=n.subSceneId,c=void 0===a?this.subSceneId:a,d=n.listId,l=void 0===d?this.listId:d;this.appName=i,this.subAppName=o,this.sceneId=u,this.subSceneId=c,this.listId=l}},{key:"addMenuToMap",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=i.Z.getFunctions(),s=e.coreUtil,u=s.parseUrlQuery((0,r.w)())||{},a={},c=(0,r.ZQ)(u.subId)||(0,r.ZQ)(u.optId)||0;if(c===t&&(a=(0,o.Ok)(u)),Object.keys(n).length>0){var d=n.fetch_extend_params;d=Object.assign({},d,a),n.fetch_extend_params=d,this.menuMap[t]=n}}},{key:"ascertainOrgRec",value:function(t,n){if(!this.hasAscertainRec)try{var e=((t||{}).p_rec||{}).org||(0,o.s5)(n||{});this.hasAscertainRec=!!e,this.orgStr=e||""}catch(t){console.warn("确定用户所在推荐组操作异常",t)}}},{key:"getBaseParams",value:function(){var t={appName:this.appName,subAppName:this.subAppName,destAppName:this.subAppName||this.appName,sceneId:this.sceneId,subSceneId:this.subSceneId,destSceneId:this.subSceneId||this.sceneId,listId:this.listId,optId:this.optId,subId:this.subId,page:this.page,size:this.size,pageSn:this.pageSn,pageName:this.pageName,monitorCfg:this.monitorCfg,customCfg:this.customCfg,imprElsn:this.imprElsn,imprExt:this.imprExt,landUrls:this.landUrls,bizTag:this.bizTag,paymentBiz:this.paymentBiz,menu:this.menuMap[this.subId||this.optId],ruleId:this.ruleId};return Object.keys(this.multiInspectCfg).length?(t.multiInspectCfg=this.multiInspectCfg,t.inspectCfg={}):(t.inspectCfg=this.inspectCfg,t.multiInspectCfg={}),Object.keys(this.multiMissionLogCfg).length?(t.multiMissionLogCfg=this.multiMissionLogCfg,t.missionLogCfg={}):(t.missionLogCfg=this.missionLogCfg,t.multiMissionLogCfg={}),t}}],e&&s(n.prototype,e),a&&s(n,a),t}(),c=null;n.Z=function(){return c||(c=new a({})),c}},37554:function(t,n,e){e.d(n,{ep:function(){return a},uM:function(){return c},h:function(){return f},te:function(){return p},Ok:function(){return h},wS:function(){return m},Rw:function(){return v},_q:function(){return _},Tw:function(){return b},WI:function(){return I},H8:function(){return E},s5:function(){return C},UL:function(){return y}});var i=e(82448),r=e(63409),o=e(66556),s=function(t){var n=t||{},e=n.ad_product_type,i=void 0===e?0:e,o=n.live_status,s=void 0===o?0:o,u=n.live_url,a=void 0===u?"":u,c=n.h5_live_url,d=void 0===c?"":c,l=(Number(i)===r.Ce.LIVE||Number(i)===r.Ce.FAST_LIVE)&&1===Number(s),f=!!(a||"").toString().trim()&&!!(d||"").toString().trim();return l&&f},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.oLogger,e=void 0===n?{}:n,r=t.pageName,o=void 0===r?"":r,s=i.Z.getFunctions(),u=s.coreUtil,a=u.getCurrentPageName(),c=a.pathname,d=a.link;return{pageName:o=o||c,oLogger:e=Object.assign({},e||{},{link:d})}},a=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t){var e=i.Z.getFunctions(),r=e.coreUtil,s=e.pddAuth,a=(0,o.mf)(r.isWeapp)&&r.isWeapp();if((0,o.Lf)()||a){var c=i.Z.getFunctions(),d=c.requestUtil,l=u({oLogger:n,pageName:""}),f=l.pageName,p=l.oLogger,g="[".concat(f,"] :: cartoon-goods-plugins > logger: ").concat(JSON.stringify(p));try{return s.getUid().then((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e={pdd_uid:n,event_type:t,event_message:g},i=(0,o.Zb)();return d.manortkRequest(i,{method:"POST",params:e})})).catch((function(t){console.error("cartoon-goods-plugins :: logInToCat > reject",t)}))}catch(t){console.error("cartoon-goods-plugins :: logInToCat > auth",t)}}}},c=function(t){var n=t=t||{},e=n.groupId,r=void 0===e?0:e,s=n.tags,u=void 0===s?{}:s;if(r&&Object.keys(u||{}).length){var a=i.Z.getFunctions().coreUtil,c=(0,o.mf)(a.isWeapp)&&a.isWeapp(),d=function(t){var n=t;try{n=Object.assign({},t||{});for(var e=Object.keys(t||{})||[],i=0,r=e.length;i<r;i++){var o=e[i],s=n[o];Object.keys(s||{}).length>0&&(n[o]=JSON.stringify(s))}}catch(t){console.error("serializeLog>>> ",t)}return n}(t.extras||{});if((0,o.Lf)()||c){var l=a.getCurrentPageName();d=Object.assign({},d,l||{})}var f={groupId:r,tags:u,fields:d};Object.keys(t.longFields||{}).length>0&&(f.longFields=t.longFields),i.Z.getFunctions().pddPmm.reportDefined(f)}};function d(t){for(var n=t=t||{},e=n.p_rec,i=n.ad,r=n.sub_items,o=void 0===r?[]:r,s=(n.link_unit||{}).info_to_second_page,u=void 0===s?"":s,a=[],c=0,d=(o||[]).length;c<d;c++){var l=o[c]||{},f=l.thumb_url,p=l.goods_id,g=l.link_unit||{},h=g.ad_id,m=g.lu_query,v=g.trigger_goods_id,_=g.default_price,b=g.coupon_price,I=g.info_to_second_page,E=g.creative_id;a.push({creative:{creative_id:E,image_url:f},goods_id:p,ad_id:h,query:m,trigger_goods_id:v,default_price:_,coupon_price:b,ad_to_second_page:I})}return{info_to_second_page:u,recommend_query_ad_single_list:a,track_log_fields:i,p_rec:e,ad:i}}function l(t){var n=r.av.DEFAULT,e=r.av.LU_SEARCH,i=r.fP.WAIST_RECOMMEND,o=t||{},u=o.lu_general_type,a=void 0===u?n:u,c=o.link_unit,l=void 0===c?{}:c,f=o.sub_items,p=void 0===f?[]:f;a=a||n,p=p||[];var g=(l=l||{}).lu_style_type;if(a!==e||!p.length)return Object.assign({},t,{elem_type:s(t)?r.oy.LvGoods:r.oy.Goods});if(g===i){var h=d(t)||{},m=h.recommend_query_ad_single_list||[];return m.length>4&&(m=m.slice(0,4)),4===m.length?Object.assign({},h,{elem_type:r.oy.Recommend}):(console.error("pdd-cartoon-goods-plugins :: formatDefault > 腰部推荐数据不合法"),null)}return Object.assign({},t,{elem_type:s(t)?r.oy.LvGoods:r.oy.Goods})}var f=function(t,n){n&&(0,o.mf)(n)||(n=function(t){return t});for(var e=[],i=0,s=(t=t||[]).length;i<s;i++){var u=t[i]||{}||{},a=u.product_type,c=void 0===a?1:a,d=u.goods,f=void 0===d?{}:d,p=u.mall,g=void 0===p?{}:p;if(f=f||{},g=g||{},(c=Number(c)||r.v0.Goods)===r.v0.Mall&&Object.keys(g).length>0){var h=g.hole_type,m=void 0===h?2:h;e.push(n(Object.assign({},g,{elem_type:1===m?r.oy.Vmall:r.oy.Hmall})))}else if(Object.keys(f).length>0){var v=l(f)||{};Object.keys(v).length>0&&e.push(n(v))}}return b(e,"goods_id")},p=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=(t=t||{}).item_list||[];if((e||[]).length>0)return e;var i=t||{},o=i.goods_list||[],s=i.resultBundle||[];if(!o.length&&!s.length)return[];for(var u=[],a=0,c=o.length;a<c;a++){var d=o[a]||{};d=l(d),Object.keys(d||{}).length>0&&u.push(d)}for(var f=0,p=s.length;f<p;f++){var g=s[f]||{};if(g.mall_id){var h=Number(g.hole_type)||2,m=Number(g.position)||0;(m=(m-n)%20)>=u.length&&(m=u.length-1),m%2==1&&2===h&&(m-=1),g.elem_type=2===h?r.oy.Hmall:r.oy.VGoods,u.splice(m,0,g)}}return u},g=function(t,n){return t=Object.assign({},t),Object.keys(t).forEach((function(n){0===(n=String(n||"")).indexOf("fetch_")&&delete t[n]})),Object.keys(n).forEach((function(e){0===(e=String(e||"")).indexOf("fetch_")&&n[e]&&(t[e]=n[e])})),t},h=function(t){for(var n=Object.keys(t||{}),e={},i=0,r=n.length;i<r;i++){var o=n[i];0===o.indexOf("fetch_")&&(e[o.substring(6)]=t[o])}return e},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=i.Z.getFunctions(),e=n.coreUtil,r=n.navigation;if((0,o.Lf)()&&(0,o.mf)(r.replaceURL)){var s=location.pathname,u=location.protocol,a=location.host,c=e.parseUrlQuery((0,o.w)())||{};c=g(c,t);for(var d=0,l=Object.keys(t).length;d<l;d++)isNaN(t.sp)||(c.sp=t.sp),(0,o.o8)(t.opt_id)||(c.opt_id=t.opt_id),(0,o.o8)(t.sub_opt_id)||(c.sub_opt_id=t.sub_opt_id),t.list_id&&(c.list_id=t.list_id),t.sub_app_name?c.sub_app_name=t.sub_app_name:delete c.sub_app_name,t.sub_scene_id?c.sub_scene_id=t.sub_scene_id:delete c.sub_scene_id;Object.keys(c).length>0&&(s=e.appendQuery(c,"".concat(u,"//").concat(a).concat(s)));try{r.replaceURL(s)}catch(t){}}},v=function(){var t=(i.Z.getFunctions().platformUtil||{}).getCurrentPlatform,n=void 0===t?function(){return{}}:t;return!!(0,o.mf)(n)&&n().isNativePlatform},_=function(t,n){if(n=n||t,!v())return!1;var e=i.Z.getFunctions().platformUtil||{},r=e.compareVersion,s=void 0===r?function(){return!1}:r,u=e.getCurrentPlatform,a=void 0===u?function(){return{}}:u,c=e.PLATFORM,d=void 0===c?{}:c;if(!(0,o.mf)(a)||!d)return!1;var l=a()||{},f=!!d.PddAndroid&&l.platform===d.PddAndroid?t:n;return!!(0,o.mf)(s)&&s(l.version,f)>=0},b=function(t,n){var e=[];return n&&(t||[]).length?t.filter((function(t,i){var r=(t||{})[n],o=(t||{}).elem_type,s=(t||{}).ext_info||{};if(0!==o)return!0;var u=!!s.duplicateAd;return!!(e.indexOf(r)<0||u)&&(e.push(r),!0)})):t},I=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"arec";if(Number(t)>0)return t;var e=t;return Object.keys(t||{}).length>0&&(Number(e[n])||Number(e.arec))||0},E=function(){try{var t=i.Z.getFunctions(),n=t.coreUtil,e=t.pddAuth;return(0,o.Lf)()&&(0,o.mf)(n.crc32)&&(0,o.mf)(e.getUid)?e.getUid().then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(t){var e="rec_gateway"+t,i=n.crc32(e)%1e4+1;return i>=6668&&i<=1e4?"rec":i>=1&&i<=3333?"xrec":i>=3334&&i<=6667?"arec":void 0}})):Promise.resolve("")}catch(t){console.warn("计算用户所在推荐组操作异常",t)}},C=function(t){var n=((t||{})["chiru-org"]||"").toLowerCase();return n?"rec=rec"===n?"rec":"rec=xrec"===n?"xrec":"rec=arec"===n?"arec":"":""},y=function(t,n,e){var r=i.Z.getFunctions().navigation;if((0,o.mf)(r.uniformForward))return r.uniformForward(t,n,e);r.forward(t,n,null,e)}},63409:function(t,n,e){var i,r;e.d(n,{oy:function(){return i},v0:function(){return r},Ce:function(){return h},V5:function(){return s},p4:function(){return u},av:function(){return a},fP:function(){return c},hE:function(){return l},jj:function(){return f},aG:function(){return p},mc:function(){return m}}),function(t){t[t.Goods=0]="Goods",t[t.AdGoods=1]="AdGoods",t[t.LvGoods=2]="LvGoods",t[t.LgGoods=3]="LgGoods",t[t.Hmall=10]="Hmall",t[t.Vmall=20]="Vmall",t[t.Coupon=30]="Coupon",t[t.Favorite=40]="Favorite",t[t.Similar=50]="Similar",t[t.SimilarInRows=51]="SimilarInRows",t[t.HGoods=60]="HGoods",t[t.VGoods=70]="VGoods",t[t.Recommend=80]="Recommend",t[t.Topic=90]="Topic",t[t.Ulike=100]="Ulike",t[t.CPT=110]="CPT",t[t.CPS=120]="CPS",t[t.Game=130]="Game",t[t.Video=140]="Video",t[t.Sliding=150]="Sliding",t[t.SGoods=160]="SGoods",t[t.LvMall=170]="LvMall",t[t.LvMallGoods=180]="LvMallGoods",t[t.RankingList=190]="RankingList",t[t.RankingGoods=200]="RankingGoods",t[t.CustomCell=97e3]="CustomCell",t[t.CustomRow=98e3]="CustomRow"}(i||(i={})),function(t){t[t.Goods=1]="Goods",t[t.Mall=2]="Mall",t[t.Cpt=3]="Cpt",t[t.Topic=7]="Topic",t[t.Live=8]="Live",t[t.Live2=12]="Live2"}(r||(r={}));var o,s,u,a,c,d,l,f,p,g,h={CPM:3,LIVE:8,FAST_LIVE:12};!function(t){t[t.DEFAULT=0]="DEFAULT",t[t.NEW_USER_REC=1]="NEW_USER_REC",t[t.NEW_DEVICE_REC=2]="NEW_DEVICE_REC"}(o||(o={})),function(t){t[t.DEFAULT=0]="DEFAULT",t[t.GARDEN=1]="GARDEN",t[t.FARM=2]="FARM",t[t.RANCH=3]="RANCH",t[t.FIT=4]="FIT",t[t.DAILY=5]="DAILY",t[t.HOUSE=6]="HOUSE",t[t.POKER=7]="POKER",t[t.CITY=8]="CITY",t[t.READ=9]="READ",t[t.MELON=10]="MELON",t[t.QUIZ=11]="QUIZ",t[t.CASHBACK=12]="CASHBACK",t[t.SNAKE=13]="SNAKE",t[t.IME=14]="IME",t[t.FREE=15]="FREE",t[t.FLOWER=16]="FLOWER"}(s||(s={})),function(t){t[t.DEFAULT=0]="DEFAULT",t[t.GARDEN=10]="GARDEN",t[t.FARM=40]="FARM",t[t.RANCH=82]="RANCH",t[t.FIT=85]="FIT",t[t.DAILY=19]="DAILY",t[t.HOUSE=110]="HOUSE",t[t.POKER=112]="POKER",t[t.CITY=115]="CITY",t[t.READ=123]="READ",t[t.MELON=134]="MELON",t[t.SNAKE=141]="SNAKE",t[t.IME=144]="IME",t[t.FREE=145]="FREE",t[t.FLOWER=149]="FLOWER"}(u||(u={})),function(t){t[t.DEFAULT=0]="DEFAULT",t[t.LU_SEARCH=1]="LU_SEARCH"}(a||(a={})),function(t){t[t.WAIST_RECOMMEND=0]="WAIST_RECOMMEND",t[t.ULIKE_RECOMMEND=0]="ULIKE_RECOMMEND",t[t.SIMILAR=100]="SIMILAR",t[t.WISHING=2]="WISHING"}(c||(c={})),function(t){t[t.DEFAULT=0]="DEFAULT",t[t.COUPON=1]="COUPON",t[t.TOPIC=4]="TOPIC",t[t.BEST_SELLER=7]="BEST_SELLER",t[t.CPT=-1]="CPT"}(d||(d={})),function(t){t[t.DEFAULT=0]="DEFAULT",t[t.TEHUI=2]="TEHUI"}(l||(l={})),function(t){t[t.DEFAULT=0]="DEFAULT",t[t.UNPUBLISHED=1]="UNPUBLISHED",t[t.COUPONPRICE=2]="COUPONPRICE"}(f||(f={})),function(t){t[t.DEFAULT=41038]="DEFAULT",t[t.GARDEN=41036]="GARDEN",t[t.FIT=41031]="FIT",t[t.DAILY=41037]="DAILY"}(p||(p={})),function(t){t.GARDEN="ddgy"}(g||(g={}));var m={pv:"70263",exceptionCSR:"70271",manualCSR:"70272",renderEx:"70273",pirceLTFloor:"70274",pirceGTCeil:"70286",resEmpty:"70287",resError:"70288",resLessCnt:"70289",resCount:"70290",resLast:"90309",scanDepth:"70291",mktError:"90140",adClick:"90285",adShow:"90311",filterEx:"90365",normalPercent:"90440"}},13773:function(t,n,e){e.d(n,{initPlugins:function(){return h},pushPlugins:function(){return m},getPlugins:function(){return v}});var i=e(36498),r=e(23255),o=e(88262),s=e(730),u=e(14564),a=e(86888),c=e(63409),d=e(46256),l=e(66556);function f(t){return function(t){if(Array.isArray(t))return p(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return p(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return p(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}var g=null,h=function(t){if((0,l.Lf)()&&!(Object.keys(g||{}).length>0)){var n=function(t){var n=c.V5.DEFAULT,e=c.V5.GARDEN,i=c.V5.DAILY,r=c.V5.FIT,o=t.busType||n,s=c.aG.DEFAULT;o===e&&(s=c.aG.GARDEN),o===i&&(s=c.aG.DAILY),o===r&&(s=c.aG.FIT);var u=[];return o&&u.push(new a.Z({merchantTag:s})),{other:u}}(t.baseCfg),e=(0,d.f)(t),f=new r.Z(e),p=new o.Z,h=new i.Z({},null),m=new s.Z,v=new u.Z;return g=Object.assign({},n,{forward:[h,m],log:[f],switch:[],skim:[],custom:[],load:[],cache:[p],monitor:[v]})}},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if((0,l.Lf)()){Object.keys(g).length||(g=h({}));for(var n=Object.keys(t)||[],e=function(e,i){var r=n[e],o=t[r]||[],s=g[r]||[],u=[],a={};[].concat(f(o),f(s)).forEach((function(t){var n=(t||{}).name;n&&a[n]||(u.push(t),a[n]=!0)})),g[r]=u},i=0,r=n.length;i<r;i++)e(i,r);return g}},v=function(){return g}},66556:function(t,n,e){e.d(n,{o8:function(){return i},Kn:function(){return r},mf:function(){return s},Lf:function(){return u},jS:function(){return a},P2:function(){return c},zO:function(){return d},w:function(){return l},ZQ:function(){return f},Zb:function(){return p},M2:function(){return g}});var i=function(t){return"[object Undefined]"===Object.prototype.toString.call(t)},r=function(t){return"[object Object]"===Object.prototype.toString.call(t)},o=function(t){return"[object Array]"===Object.prototype.toString.call(t)},s=function(t){return"[object Function]"===Object.prototype.toString.call(t)},u=function(){return"undefined"!=typeof window},a=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"eq",i=arguments.length>3?arguments[3]:void 0;return i&&(t=i(t)),"some"===e?(n=(n=o(n)?n:[n]).map((function(t){return i?i(t):t}))).indexOf(t)>=0:(o(n)&&(n=n[0]),i&&(n=i(n)),"ne"===e||"neq"===e?t!==n:"gt"===e?t>n:"ge"===e?t>=n:"lt"===e?t<n:"le"===e?t<=n:t===n)},c=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,e=Date.now()-n;return function(){var i=Date.now();i-e>=n&&s(t)&&(e=i,t())}},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:32;t=t||32;for(var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=n.length,i="",r=0;r<t;r++)i+=n.charAt(Math.floor(Math.random()*e));return i},l=function(){return u()&&(window||{}).location.href||""},f=function(t){return t&&isNaN(t)?t:Number(t)||0},p=function(){var t="https://manortk.pinduoduo.com/me.gif";return u()&&100*Math.random()<=window.__GRAY_MANORTK_HOST&&(t="https://manortk-a.pinduoduo.com/me.gif"),u()&&"m.hutaojie.com"===(window.location||{}).hostname&&(t="http://manortk.htj.pdd.net/me.gif"),t},g=function(){var t="";try{var n=(t=((("undefined"==typeof window?{}:window||{}).location||{}).pathname||"").substring(1)).indexOf(".html");t=t.substring(0,n)||"default"}catch(n){t=""}return t||"default"}}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-fun-cashback/js/2561_41d955a9dd863e62c4fe.js.map