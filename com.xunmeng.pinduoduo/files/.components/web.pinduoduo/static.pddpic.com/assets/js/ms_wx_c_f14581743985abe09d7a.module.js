(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[12],{EP3j:function(e,a,t){"use strict";t.r(a);var r=t("dKgK"),s=t("a/1V"),h=t("chhR"),i=t("EECB"),n=t("YSLc"),S=t("W9H9"),E=t("gfNA"),l=t("Upw4"),_=t("Ne86");class o extends E.a{normalize(e){const a=Object.assign({},this);return e===s.a.COPY_CIPHER?this.processCipher():new Promise(((t,r)=>{const h=a.shareURL;this.targetShareURL=this.shareURL,this.realShareURL=this.shareURL,this.useShortURL=!1,e===s.a.WECHAT_TIMELINE||e===s.a.WECHAT_SESSION?Object(_.d)(a).then((({realShareURL:e,targetShareURL:r,useShortURL:s})=>{this.useShortURL=s,this.targetShareURL=r,this.realShareURL=e,t({title:a.title,desc:a.message,imgUrl:a.thumbnailURL,link:e})}),(()=>{})):Object(l.a)(e)?(this.targetShareURL=Object(_.b)(e,h),this.realShareURL=this.targetShareURL,t({title:a.title,desc:a.message,imgUrl:a.thumbnailURL,link:this.realShareURL})):t({title:a.title,desc:a.message,imgUrl:a.thumbnailURL,link:h})}))}getShareForm(e){return e===s.a.COPY_CIPHER?S.a.COMMAND:S.a.CARD}getShareMethod(e){return e===s.a.COPY_CIPHER?n.a.MANUAL:n.a.SDK}}var C=o,m=t("/bZk");const{ShareErrorCode:u}=m.b,p={[s.a.WECHAT_SESSION]:{name:"onMenuShareAppMessage",tag:"menuItem:share:appMessage"},[s.a.WECHAT_TIMELINE]:{name:"onMenuShareTimeline",tag:"menuItem:share:timeline"},[s.a.QQ_CHAT_SESSION]:{name:"onMenuShareQQ",tag:"menuItem:share:qq"},[s.a.QQ_ZONE]:{name:"onMenuShareQZone",tag:"menuItem:share:QZone"},[s.a.TENCENT_WEIBO]:{name:"onMenuShareWeibo",tag:"menuItem:share:weiboApp"}},T=[s.a.WECHAT_SESSION,s.a.WECHAT_TIMELINE,s.a.QQ_CHAT_SESSION,s.a.QQ_ZONE,s.a.TENCENT_WEIBO,s.a.COPY_CIPHER];class R extends r.a{constructor(e){super(e),this.ShareEntityClass=C,this._enableShareTypes=T.concat()}share(e){return e===s.a.COPY_CIPHER?this.copyCipher():u.SHARE_ACTION_DISABLE}refreshShare(e,a){return e?a?(this.shareEntityMap[a]=e,"undefined"==typeof wx?(this.emit(h.a.SDK_INIT_FAILED),Promise.resolve()):this.refreshWeChatChannelShare(a)):(this.shareEntity=e,this._enableShareTypes.forEach((a=>{this.shareEntityMap[a]=this.createShareEntity(e,a)})),this._setupPlatformShareSDK()):Promise.resolve()}_setupShareTypes(){const e=this._enableShareTypes.length;return this._enableShareTypes=T.filter((e=>this.disableShareTypes.indexOf(e)<0)),e===this._enableShareTypes.length}_setupPlatformShareSDK(){return"undefined"==typeof wx?(this.emit(h.a.SDK_INIT_FAILED),Promise.resolve()):Promise.all(this._enableShareTypes.map((e=>{this.refreshWeChatChannelShare(e)})))}_adjustMenu(){const e=T.filter((e=>this._enableShareTypes.indexOf(e)<0)).map((e=>p[e].tag));window.wx&&window.wx.hideMenuItems({menuList:e})}refreshWeChatChannelShare(e){const a=p[e];return a?this._setupWeChatChannelShare(e,a.name):Promise.resolve()}_setupWeChatChannelShare(e,a=""){if(!window.wx||"function"!=typeof window.wx[a])return Promise.resolve();const t=this.shareEntityMap[e]||this.shareEntity;return t?(this.emit(h.a.ON_SHARE_PREPARE,{shareType:e}),t.normalize(e).then((t=>{const r=Object.assign({trigger:()=>{this.emit(h.a.ON_SHARE_TRIGGER,{shareType:e})},success:()=>{this.emit(h.a.ON_SHARE_COMPLETED,{shareType:e,shareResultType:i.a.SUCCESS}),this.refreshWeChatChannelShare(e)},fail:()=>{this.emit(h.a.ON_SHARE_COMPLETED,{shareType:e,shareResultType:i.a.FAIL}),this.refreshWeChatChannelShare(e)},cancel:()=>{this.emit(h.a.ON_SHARE_COMPLETED,{shareType:e,shareResultType:i.a.CANCEL}),this.refreshWeChatChannelShare(e)}},t);window.wx[a](r)}),this.getNormalizeErrorHandler(e))):Promise.resolve()}checkShareTypeEnable(e){return this._enableShareTypes.indexOf(e)<0?u.SHARE_TYPE_DISABLED:0}}R.SUPPORTED_SHARE_TYPE=T.concat();a.default=R}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-best-goods/js/ms_wx_c_f14581743985abe09d7a.module.js.map