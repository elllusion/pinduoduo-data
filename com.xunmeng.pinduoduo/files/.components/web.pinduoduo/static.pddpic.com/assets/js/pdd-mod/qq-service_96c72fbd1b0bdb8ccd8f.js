(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[17],{"3uWq":function(e,n,r){"use strict";r.r(n),r.d(n,"initQQConfig",function(){return d});var t=r("o0o1"),i=r.n(t),o=r("J4zp"),a=r.n(o),s=r("yXPU"),u=r.n(s),m=r("3OdE"),p=r("Fcpp"),c=r("IGKT"),h=r("KoDT"),g=m.a.get(location.host),w="qq/jsapi/signature";function d(e){return q.apply(this,arguments)}function q(){return(q=u()(i.a.mark(function e(n){var r,t,o,s,u,m,c;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=Math.random().toString().substring(2),t=Date.now().toString(),o={timestamp:t,noncestr:r,url:location.href.split("#")[0],open_app_id:g.ApiKey.QQPublic},e.next=5,Promise.all([n.get(w,{params:o}),l()]);case 5:if(s=e.sent,u=a()(s,1),m=u[0],window.mqq&&m.signature){e.next=10;break}throw new Error("qq sdk is no ready!");case 10:return c=m.signature,e.abrupt("return",new Promise(function(e){window.mqq.config({timestamp:t,signature:c,debug:!1,appId:g.ApiKey.QQPublic,nonceStr:r,jsApiList:["showMenuItems","hideMenuItems","onMenuShareAppMessage","onMenuShareTimeline","onMenuShareQQ","onMenuShareQZone","previewImage","chooseImage","uploadImage","getLocation"]}),window.mqq.ready(function(){window.mqq.hideMenuItems({menuList:["menuItem:favorite","menuItem:openWithSafari","menuItem:openWithQQBrowser","menuItem:share:email","menuItem:share:timeline"]}),window.mqq.showMenuItems({menuList:["menuItem:share:appMessage","menuItem:share:qq","menuItem:share:QZone"]}),e()}),window.mqq.error(function(n){p.a.trackingRecord({op:"real_error",error_type:"qq_config_error",error_message:JSON.stringify(n),page_url:location.href,payload:{signature:c}}),e()})}));case 12:case"end":return e.stop()}},e)}))).apply(this,arguments)}var l=function(){return Object(h.a)().isPureQQPlatform?Promise.all([Object(c.a)("https://mp.gtimg.cn/open/js/openApi.js",{crossOrigin:"anonymous"}),Object(c.a)("https://open.mobile.qq.com/sdk/qqapi.wk.js?_bid=152")]):r.e(30).then(r.bind(null,"Jo5p"))}}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-packet/js/pdd-mod/qq-service_96c72fbd1b0bdb8ccd8f.js.map