!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=8)}([function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";t.exports={isEmpty:function(t){return void 0===t||(null==t||0==t.length)},isArray:function(t){return t instanceof Array}}},function(t,e,n){"use strict";(function(t){var n,o,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};Object.defineProperty(e,"__esModule",{value:!0}),t.pinbridge=(n=0,o={},t.callback=function(t,e,n){console.log("callback excuted"),n=n||{};var r=o[t];if(r)try{r.func?r.func(e,n):0===e&&r.onSuccess?r.onSuccess(n):0!==e&&r.onError&&r.onError(n,e)}catch(t){console.log(t)}},t.removeCallback=function(t){console.log("removeCallback excuted"),delete o[t]},{callback:t.callback,removeCallback:t.removeCallback,callNative:function(e,a,i,A,u){i=i||{};var l=++n;return o[l]={onSuccess:A,onError:u},function(e,n,o,r){console.log("callNativeImpl excuted");var a=t._fastJsN.callNative(e,n,o?JSON.stringify(o):"",r);return(a=a?JSON.parse(a):null)&&a.hasOwnProperty("errorCode")&&(t.callback(a.callID,a.errorCode,a.data),t.removeCallback(a.callID)),a}(e,a,i=function t(e){if("object"!==(void 0===e?"undefined":r(e)))return e;var a={};for(var i in"[object Array]"===Object.prototype.toString.call(e)&&(a=[]),e)if(e.hasOwnProperty(i)){var A=e[i];if("function"==typeof A){var u=++n;o[u]={func:A},a[i]="__aimi_function_"+u}else"object"===(void 0===A?"undefined":r(A))?a[i]=t(A):a[i]=A}return a}(i),l)},callbackFromNative:function(e,n,o){t.callback(e,n,o)},decodeFunctions:function(t){if("object"===(void 0===t?"undefined":r(t))){var e=this,n=function(n){if(!t.hasOwnProperty(n))return"continue";var o,a,i,A=t[n];if("string"==typeof A&&0===A.indexOf("__aimi_function_")){var u=A.substring("__aimi_function_".length).split("_");3===u.length&&(o=parseInt(u[0]),a=parseInt(u[1]),i=parseInt(u[2]),NaN!==o&&NaN!==a&&NaN!==i&&(t[n]=function(t,n){e.callNative("AMBridgeAPI","callback",{bridge_id:a,context_id:i,call_id:o,error_code:t,response:n})}))}else"object"===(void 0===A?"undefined":r(A))&&e.decodeFunctions(A)};for(var o in t)n(o)}}}),e.default=t.pinbridge}).call(this,n(0))},function(t,e,n){"use strict";var o=function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var r=o(n(2));e.default={get:function(t,e,n,o){var a={method:"GET",url:t(),headers:o||{}};o&&(a.headers=o),r.default.callNative("JSNetwork","request",a,e,n)},post:function(t,e,n,o,a){var i={method:"POST",url:t,data:n,headers:e||{}};r.default.callNative("JSNetwork","request",i,o,a)}}},function(t,e,n){"use strict";var o=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var r=o(n(13));e.parseResult=function(t){try{var e=t.status;return 200==e?JSON.parse(decodeURIComponent(t.response)):(console.log("Parse Result error: status = "+e),null)}catch(t){console.log("Parse Result error:"+t)}return null},e.format_price=function(t){return String(t/100)},e.getUrlQueryValue=function(t,e){if(!t)return"";var n=t.split("?");if(n&&n[1]){var o=n[1].split("&");if(!r.isEmpty(o))for(var a=0;a<o.length;a++){var i=o[a].split("=");if(i&&2===i.length&&i[0]===e)return i[1]}}return""},e.getValueObject=function(t,e){if(t&&e&&t[e]){var n=t[e];return n&&"string"==typeof n?JSON.parse(n):n}return""},e.appendUrlParams=function(t,e){if(!e)return t;var n="";for(var o in e)0!==n.length&&(n+="&"),n+=o+"="+encodeURIComponent(e[o]);return t.indexOf("?")?t.indexOf("?")===t.length-1?t+n:t+"&"+n:t+"?"+n},e.constuctURL=function(t,e){var n=t.indexOf("?")>-1?"":"?";for(var o in e)null!=e[o]&&(n=n+("?"===n?"":"&")+o+"="+e[o]);return t+n}},function(t,e,n){"use strict";var o=function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var r=o(n(2)),a=function(){function t(){}return t.prototype.setupConfig=function(t){r.default.callNative("LegoEngine","setupConfig",null==t?{}:t)},t.prototype.setData=function(t,e,n,o,a){var i=a||{};i.components=null==t?[]:t,i.isFirst=e,i.hasMore=n,i.page=o,r.default.callNative("LegoEngine","setData",i)},t.prototype.addData=function(t,e,n,o){var a=o||{};a.components=null==t?[]:t,a.isFirst=!1,a.hasMore=e,a.page=n,r.default.callNative("LegoEngine","addData",a)},t.prototype.appendData=function(t,e,n,o){var a=o||{};a.components=null==t?[]:t,a.isFirst=!1,a.hasMore=e,a.page=n,r.default.callNative("LegoEngine","appendData",a)},t.prototype.onError=function(t){r.default.callNative("LegoEngine","onError",t)},t.prototype.onUpdate=function(t,e,n,o){var a={callId:t,data:e};r.default.callNative("LegoEventAction","updateComponent",a,n,o)},t.prototype.removeCallBack=function(t){var e={callId:t};r.default.callNative("LegoEventAction","removeCallBack",e)},t}();e.default=a},function(t,e,n){"use strict";var o=function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var r=o(n(2)),a=o(n(1)),i=function(){function t(){}return t.prototype.isLogin=function(t){r.default.callNative("AMUser","getAccessToken",{},function(e){var n=e.access_token;console.log("AccessToken:"+n),a.default.isEmpty(n)?t(!1):t(!0)},function(e){console.log("isLogin Error:"+e.toString()),t(!1)})},t.prototype.login=function(t,e){console.log("Call Login "),r.default.callNative("JSNavigation","modal",{type:"login",props:{complete:function(n,o){0===n?t(o):e(o)}}})},t}();e.default=i},function(t,e,n){"use strict";var o=function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var r=o(n(2));e.default={showToast:function(t){var e={message:t};r.default.callNative("JSAlert","toast",e,function(t){})}}},function(t,e,n){"use strict";var o=function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var r=o(n(9));o(n(25)).default.render(r.default)},function(t,e,n){"use strict";(function(t){var o=function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var r=o(n(10)),a=o(n(14)),i=o(n(5)),A=o(n(1)),u=o(n(15)),l=o(n(6)),s=o(n(16)),c=o(n(7)),f=o(n(17)),p=o(n(24));t.dataMap={};var d={};t.pageId=(new Date).getTime()+"_"+Math.ceil(1e9*(Math.random()+1));var g=!1,m=null,_=0,v=null,y={},h={};function b(t){return null!=t&&void 0!==t}a.default.addonComponents.forEach(function(t){h[t.componentId]=t.name,y[t.componentId]=t.type});var C=a.default.firstApiComp,w=JSON.parse(a.default.componentStore),E=a.default.loadMoreType,M=a.default.components,S=a.default.loadMoreTips,x=a.default.initConfig.backgroundColor,B=a.default.initConfig.params,P=a.default.loadMoreComponent,N=a.default.api,O=!!C,Q=!!b(E),k=M.filter(function(t){return t.needAvatar}).map(function(t){return t.name}),L=null;var j=[],F={};function R(t,e){F[t]=e;for(var n=!0,o=0;o<j.length;o++)if(!F.hasOwnProperty(j[o])){n=!1;break}n?(I(!1),g=!0,O=!1):O&&F[C]&&(I(!0),g=!0,O=!1)}function D(t,e){b(P)&&t===P&&(L=e)}function I(e){var n=new Array,o=!1;for(var r in F)if(F[r]){o=!0;break}if(o)try{if(M.forEach(function(o){if(o.__isFirstScreen){if(!g){var r=w[o.name];(i=d[o.name]&&F[d[o.name]]?F[d[o.name]]:null)&&J(o.type,i,o.itemRow);var a=(u=f.default(o.type,r)).assemble(i,null,null);t.dataMap[o.name]=a,n.push(a)}}else if(!e){var i;r=w[o.name];(i=d[o.name]&&F[d[o.name]]?F[d[o.name]]:null)&&J(o.type,i,o.itemRow);a=(u=f.default(o.type,r)).assemble(i,null,null);var u,l=null;if(i){var s=o.hotAreaConfigs;if(!A.default.isEmpty(s))l=function(t,e){var n=null;if(!A.default.isEmpty(e)){n=e.filter(function(e){return e.position<=t});var o=e.filter(function(e){return e.position>t});A.default.isEmpty(o)?m=null:(m=o,_=t)}return n}(a.items.length,s)}if(!i||A.default.isEmpty(l))t.dataMap[o.name]=a,a instanceof Array?Array.prototype.push.apply(n,a):n.push(a);else{var c=X(l,i,u);t.dataMap[o.name]=c,Array.prototype.push.apply(n,c)}}}),0==n.length)Z(1);else{var a=new i.default;g?a.addData(n,Q,2,null):a.setData(n,!0,Q,1,null)}}catch(t){console.log("exception:"+t),Z(1)}else Z(1)}function Z(t){var e={code:1==t?-1:-2};(new i.default).onError(e)}function H(t,e,n){Q=e;var o,r=[],a=new i.default,l=w[P];if(Q){var s=f.default(E,l);o=t,v&&(Array.prototype.push.apply(o,v),v=null);var c=M.find(function(t){return t.name===P});J(E,t,c.itemRow);var p=s.assemble(t,n.totalNum,null),d=function(t){var e=null;if(!A.default.isEmpty(m)){var n=m,o=n.filter(function(e){return e.position<=t+_&&e.position>_}),r=n.filter(function(e){return e.position>t+_});e=u.default.deepCopy(o).map(function(t){return t.position=t.position-_,t}),A.default.isEmpty(r)?m=null:(m=r,_=t+_)}return e}(A.default.isArray(t)?t.length:0);if(A.default.isEmpty(d))r.push(p),a.addData(r,!0,n.page,null);else{var g=X(d,t,s);Array.prototype.push.apply(r,g),a.addData(r,!0,n.page,null)}}else a.addData(r,!1,n.page,null)}function X(t,e,n){for(var o=t.map(function(t){return t.position}),r=t.map(function(t){return t.id}),a=n.assemble(e,null,o),i=[],A=0;A<r.length;++A){var u=a[A];i.push(u);var l=r[A],s=h[l],c=F[d[s]],p=y[l],g=w[s],m=f.default(p,g).assemble(c,null,null);m&&(m instanceof Array?Array.prototype.push.apply(i,m):i.push(m))}if(a.length>r.length){u=a[a.length-1];i.push(u)}return i}function J(t,e,n){if(1!=e.length){var o=0;if("Designer"===t&&(o=n||2),"DoubleGoodsList"===t&&(o=2),"TripleGoodsList"===t&&(o=3),0!=o){var r=e.length%o;0!=r&&(v=e.splice(e.length-r,r))}}}e.default={firstLoad:function(e){try{var n=new i.default;if(b(x)||b(S)){var o={backgroundColor:x,mjFooterNoMoreDataTitle:S};n.setupConfig(o)}if(null!=e&&null!=e.appinfo)if("string"==typeof e.appinfo){var a=JSON.parse(e.appinfo);t.pdduid=a.pdduid,t.province_id=a.province_id,t.lego_os=a.os,t.app_version=a.version}else t.pdduid=e.appinfo.pdduid,t.province_id=e.appinfo.province_id,t.lego_os=e.appinfo.os,t.app_version=e.appinfo.version;null!=e&&(b(B)&&B.forEach(function(n){t[n]=e[n]}),e.lego_page_context&&(t.page_id=e.lego_page_context.page_id,t.page_sn=e.lego_page_context.page_sn,t.page_name=e.lego_page_context.page_name),t.page_id||(t.page_id="10046_"+t.pageId),t.page_sn||(t.page_sn="10046"),t.page_name||(t.page_name=""))}catch(t){}v=null,_=0,m=null,j=[],F={},g=!1,t.list_id=s.default.uuid(10,36),N.forEach(function(t){if(b(t.name)){t.link_ref.split(",").forEach(function(e){d[e]=t.name});var e=r.default[t.name],n=k.indexOf(t.name)>=0;e(t.name,R,D,n),j.push(t.name)}})},loadMore:function(){b(P)&&Q&&L&&L.loadMore(H)},useFullCutCoupon:function(t){var e=new l.default;t.args,t.method,e.isLogin(function(n){n?(console.log("已登录"),new p.default(null,null).useCouponRequest(t)):(console.log("未登录"),e.login(function(t){console.log("登录成功"),c.default.showToast("登录成功")},function(t){console.log("登录失败"),c.default.showToast("登录失败")}))})}}}).call(this,n(0))},function(t,e,n){"use strict";(function(e){var o,r=n(11),a=(o=r)&&o.__esModule?o:{default:o};var i={};i.d1694_5w5_0=function(t,n,o,r){var i={mall_id:20251,tab_id:20251,subject_id:"20251",size:20};!function(t){e.list_id&&(t.list_id=e.list_id)}(i);var A={needAvatar:r,name:"d1694_5w5_0",rspItemsPath:"result.goods_list",uri:"http://apiv2.hutaojie.com/api/george/resource_goods/query_list"},u=new a.default(i,A);o("d1694_5w5_0",u),u.firstLoad(n)};e.eventCache={},t.exports=i}).call(this,n(0))},function(t,e,n){"use strict";var o=function(t){return t&&t.__esModule?t:{default:t}},r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e},a=o(n(3)),i=o(n(1)),A=o(n(12)),u=r(n(4)),l=function(){function t(t,e){this.params=t,this.page=1,this.name=e.name,this.needAvatar=e.needAvatar,this.rspItemsPath=e.rspItemsPath,this.totalNum=0,this.uri=e.uri}return t.prototype.getGoods=function(t){var e=this;a.default.get(function(){var t=u.constuctURL(e.uri,e.params);return t+="&page="+e.page},function(n){if(200==n.status)try{var o=JSON.parse(decodeURIComponent(n.response));if(e.rspItemsPath&&e.rspItemsPath.split(".").forEach(function(t){o&&(o=o[t])}),e.page++,e.needAvatar)(new A.default).getUserAvatars(o,function(e){t(e)});else t(o)}catch(e){t(null)}else t(null)},function(t){console.log(t)},null)},t.prototype.firstLoad=function(t){var e=this;this.getGoods(function(n){t(e.name,n)})},t.prototype.loadMore=function(t){var e=this;this.getGoods(function(n){n&&n.length>0?(!i.default.isEmpty(e.params.maxSize)&&e.params.maxSize-e.totalNum<n.length&&(n=n.slice(0,e.params.maxSize-e.totalNum)),e.totalNum+=n.length,n.length>0?t(n,!0,e):t(n,!1,e)):t(n,!0,e)})},t}();t.exports=l},function(t,e,n){"use strict";(function(e){var o=function(t){return t&&t.__esModule?t:{default:t}},r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(4)),a=o(n(3)),i=o(n(1)),A=function(){function t(){}return t.prototype.getUserAvatars=function(t,n){t||n(t);var o,A=t,u={pdduid:e.pdduid?e.pdduid:0,goods_ids:A.map(function(t){return t.goods_id})};o=function(e,o){if(o&&0!=o.length){for(var r=e?e.length:0,a=0;a<r;a++){var A=e[a].goods_id;if(A){var u=o[A.toString()];if(null!=u){var l=u.list;i.default.isEmpty(l)||(e[a].groupAvatars=l.filter(function(t){return null!==t.avatar}).map(function(t){return t.avatar}))}}}n(t)}else n(t)},a.default.post("http://apiv3.yangkeduo.com/api/espresso/nears_groups",null,JSON.stringify(u),function(t){var e=r.parseResult(t);o(A,e||[])},function(t){o(A,[])})},t}();t.exports=A}).call(this,n(0))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isEmpty=function(t){return null==t||0===t.length},e.isArray=function(t){return t instanceof Array}},function(t){t.exports={name:"d1694_5w5",initConfig:{backgroundColor:"#f4f4f4",page_sn:"11807",params:["subject_id","subjects_id","tab_id","trans_info"]},api:[{uri:"http://apiv2.hutaojie.com/api/george/resource_goods/query_list",params:'{"mall_id":20251,"tab_id":20251,"subject_id":"20251","size":20}',link_ref:"d1694_5w5_0",name:"d1694_5w5_0",has_more:!1,rspItemsPath:"result.goods_list"}],components:[{type:"HotListHComponent",name:"d1694_5w5_0",binUrl:"d1694_5w5_0_2",template:{type:"grid",name:"grid",style:{backgroundColor:"#f4f4f4",columns:[1,1],rowSpace:"8rp",margin:["24rp","0rp","24rp","0rp"],columnSpace:"0"},itemConfig:{style:{width:"700rp",height:"224rp"},type:"dynamic",name:"d1694_5w5_0_2"}},action:"goForward",actionParam:"",subject_id:0,tab_id:0,mall_id:0,page_el_sn:214594,page_sn:11807,tagFillColor:"#0cE02E24",tagTextColor:"#E02E24",rspItemsPropMap:{goodsName:"short_name"},hasMore:!0,goods_name_max_line:1,componentId:"p-evEmE8MQE"}],addonComponents:[],loadMoreComponent:"d1694_5w5_0",loadMoreType:"HotListHComponent",componentTypes:{HotListHComponent:!0},needAvatarTypes:"[]",componentStore:'{"d1694_5w5_0":{"type":"HotListHComponent","name":"d1694_5w5_0","binUrl":"d1694_5w5_0_2","template":{"type":"grid","name":"grid","style":{"backgroundColor":"#f4f4f4","columns":[1,1],"rowSpace":"8rp","margin":["24rp","0rp","24rp","0rp"],"columnSpace":"0"},"itemConfig":{"style":{"width":"700rp","height":"224rp"},"type":"dynamic","name":"d1694_5w5_0_2"}},"action":"goForward","actionParam":"","subject_id":0,"tab_id":0,"mall_id":0,"page_el_sn":214594,"page_sn":11807,"tagFillColor":"#0cE02E24","tagTextColor":"#E02E24","rspItemsPropMap":{"goodsName":"short_name"},"hasMore":true,"goods_name_max_line":1,"componentId":"p-evEmE8MQE"}}'}},function(t,e,n){"use strict";t.exports={deepCopy:function(t){return JSON.parse(JSON.stringify(t))}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={uuid:function(t,e){var n,o="0123456789abcdefghijklmnopqrstuvwxyz".split(""),r=[];if(e=e||o.length,t)for(n=0;n<t;n++)r[n]=o[0|Math.random()*e];else{var a=void 0;for(r[8]=r[13]=r[18]=r[23]="-",r[14]="4",n=0;n<36;n++)r[n]||(a=0|16*Math.random(),r[n]=o[19==n?3&a|8:a])}return r.join("")}}},function(t,e,n){"use strict";var o,r=n(18),a=(o=r)&&o.__esModule?o:{default:o};t.exports=function(t,e){switch(t){case"HotListHComponent":return new a.default(e);default:return null}}},function(t,e,n){"use strict";(function(t){var o=function(){return(o=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},r=function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=r(n(19)),i=r(n(20)),A=n(22),u=function(){function e(t){this.params=t}return e.prototype.assemble=function(e){for(var n=this.params.startIndex?this.params.startIndex:0,r=this.params.endIndex?this.params.endIndex:e.length,u=[],s=n;s<r;s++){var c=e[s],f="";s<3&&(f=0==s?"https://t13img.yangkeduo.com/cart/2018-07-29/1367fd69480825d6e1f7112f48696ba5.png":1==s?"https://t13img.yangkeduo.com/cart/2018-07-29/fde750d18bcb6b577ad8e9dfa3aeb99e.png":"https://t13img.yangkeduo.com/cart/2018-07-29/7f8b7c26f10951c56d43311bbb6a8dc4.png");var p={propMap:this.params.rspItemsPropMap,addonMapping:this.params.addonMapping,gifMapping:this.params.gifMapping},d=(new i.default).dataObjFromOrigin(c,p),g=new a.default,m={idx:s};if(g.configAction(d,c,this.params),d.stat_track=JSON.stringify(g.generateTrackInfo(c,this.params,m)),d.tagFillColor=this.params.tagFillColor,d.tagTextColor=this.params.tagTextColor,d.tag||delete d.tag,1===this.params.goods_name_max_line?d.goods_name_line_1=!0:d.goods_name_line_2=!0,f){var _=(t.lego_os,l(16));d.goodsName=_+d.goodsName,d.top_url=f}else{_="iOS"===t.lego_os?l(14):l(15);d.goodsName=_+d.goodsName,d.rank="TOP "+String(s+1)}var v=new Array;v.push({txt:"¥",color:"#E02E24",font:22,text_style:"bold",point_type:"rp"}),v.push({txt:" ",color:"#E02E24",font:5}),v.push({txt:d.price+" ",color:"#E02E24",font:34,text_style:"bold",point_type:"rp"}),v.push({txt:"¥"+d.normalPrice,color:"#9C9C9C",font:22,text_style:"strike",point_type:"rp"}),d.price_json_string=JSON.stringify(v);var y={data:d};u.push(y)}return o({},this.params.template,{itemConfig:o({},this.params.template.itemConfig,{template:{url:A.fetchURL(this.params.binUrl)}}),items:u})},e}();function l(t){for(var e="";t--;)e+=" ";return e}e.default=u}).call(this,n(0))},function(t,e,n){"use strict";(function(e){var n=function(){function t(){}return t.prototype.configAction=function(t,e,n){t.action=n.action;var o={goods_id:String(e.goods_id)};e.link_url&&(o.link_url=e.link_url),t.actionParam=JSON.stringify(o)},t.prototype.generateTrackInfo=function(t,n,o){try{return{p_rec:JSON.stringify(t.p_rec),goods_id:t.goods_id,idx:o.idx,rec_goods_id:t.goods_id,list_id:null==e.list_id?"":e.list_id,page_el_sn:n.page_el_sn,page_sn:e.page_sn?e.page_sn:n.page_sn,page_id:e.page_id?e.page_id:n.page_id,tab_id:n.tab_id,subject_id:n.subject_id,mall_id:n.mall_id}}catch(t){console.log(t)}},t}();t.exports=n}).call(this,n(0))},function(t,e,n){"use strict";var o=function(t){return t&&t.__esModule?t:{default:t}},r=o(n(21)),a=o(n(1)),i=function(){function t(){}return t.prototype.dataObjFromOrigin=function(t,e){var n={price:String(t.price/100),stdPrice:String(t.price/100),lqPrice:String(t.price/100),minOnSaleGroupPrice:String(t.min_onsale_group_price/100),minOnSaleGroupPriceOriginal:String(t.min_on_sale_group_price_original/100),ltPrice:String(t.min_on_sale_group_price_original/100),marketPrice:String(t.market_price/100),originPrice:String(t.market_price/100),normalPrice:String(t.normal_price/100),activityPrice:t.activity_price,ltActivityPrice:t.activity_price,lqActivityPrice:t.activity_price,chargePrice:t.card_price?t.card_price:String(t.price/100),cardPrice:t.card_price?t.card_price:String(t.price/100),couponPrice:String(t.coupon_price/100),quantity:t.cnt,usedQuantity:t.used_quantity,initQuantity:t.init_quantity,startTime:t.start_time,endTime:t.end_time,thumb_url:t.hd_thumb_url?r.default.formatUrl(t.hd_thumb_url,t.hd_thumb_wm):r.default.formatUrl(t.thumb_url,t.thumb_wm),saleTips:t.sales_tip,mallId:t.mall_id,mallName:t.mall_name,couponAmount:t.coupon_amount,subscribeStatus:t.subscribe_status,remainQuantity:t.remain_quantity,isSoldOout:t.is_sold_out};n.needAvatar=e.needAvatar,n.needAvatar&&t.groupAvatars&&t.groupAvatars.length>0&&(n.groupAvatars=t.groupAvatars),e.useFavoriteStyle&&t.fans_num?t.fans_num<1e4?n.favoriteTips="已有"+t.fans_num+"人收藏":t.fans_num<1e5?n.favoriteTips="已有"+String(Math.floor(t.fans_num/1e3)/10)+"万人收藏":n.favoriteTips="已有"+String(Math.floor(t.fans_num/1e4))+"万人收藏":n.alreadyBuyTips=!0,n.fans_num=t.fans_num;var o=function(t){for(var e="";t--;)e+=" ";return e},i=e.addonMapping,A=e.indentMapping,u=e.propMap;for(var l in u)t[u[l]]&&(n[l]=t[u[l]]);for(var l in i)n[l]&&(n[l]=i[l]+n[l]);for(var l in A)if(n[l]){var s=A[l];n[l]=o(2*s)+n[l]}if(e.gifMapping)for(var c in e.gifMapping)n[c]=e.gifMapping[c];return t.tag&&(n.tag=t.tag),1==t.title_type?n.discount_icon_str="":2==t.title_type&&(n.discount_icon_str=""),t.icon&&(n.icon=t.icon),t.title_type&&(n.title_type=t.title_type),t.title&&(n.title=t.title),a.default.isEmpty(t.goods_tags)||(n.goodsTags=t.goods_tags),t.extend_info&&t.extend_info.grouping_count&&t.extend_info.grouping_count>0&&(n.groupingText=t.extend_info.grouping_count+"人正在拼"),n},t}();t.exports=i},function(t,e,n){"use strict";function o(t){if("omsproductionimg.yangkeduo.com"===t||"pddtestimg.yangkeduo.com"===t)return!0;return/^a\d+img.yangkeduo.com$/.test(t)}function r(t){if("testimg.yangkeduo.com"===t)return!0;return/^t\d+img.yangkeduo.com$/.test(t)}function a(t){var e=t.split("?")[0],n=/^(https?:\/\/)/.exec(e);if(n){var o=n[0];e=e.substr(o.length)}return e?e.split("/")[0]:null}Object.defineProperty(e,"__esModule",{value:!0}),e.default={formatUrl:function(t,e){if(!t||!e)return t;var n=a(t);return n?o(n)?t+"?x-oss-process=image/quality,50"+e+"/format,webp":r(n)?t+"?imageMogr2/format/webp/quality/50%7C"+e:t:t},compressedUrl:function(t){if(!t)return t;var e=a(t);return e?o(e)?t+"?x-oss-process=image/quality,50/format,webp":r(e)?t+"?imageMogr2/format/webp/thumbnail/300x":t:t}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(23);e.fetchURLList=function(t){var e=new o;return t.map(function(t){return e.getBin(t)}).filter(function(t){return t})},e.fetchURL=function(t){return(new o).getBin(t)}},function(t,e,n){"use strict";var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();var r=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.templates={d1694_5w5_0_1:"QUxJVlYAAQAAAAEAAAAvAAACswAAAuIAAAErAAAEEQAAAAAAAAQVAAAAAAABAAAAAAABAA1kMTY5NF81dzVfMF8xAp4AABkEAC//bAAAAGBc1fDx/////7CYVS7/////d3CsvP////8AAAACqy9+Nn2QdFBdihv3r93dvQAAAAAZAVzV8PH////+AoaH0L0AAAAYd3CsvAAAAMgAAAAAAAAD7QAESm59nwAAABVc1fDxAAAAwIaH0L0AAAAId3CsvAAAAMAAAVBq+95AgAAAAQABveQ4jsnOAAABAAAJAANKbn2fAAAAEFzV8PEAAAAud3CsvAAAAHIAAAEAAb3kXaGrbwAAAQEAAAcDXKy6jf////8GI07/AAAAAsCbLjb/FRUWBUpufZ8AAAAVxC06zgAAABpc1fDxAAAAHIaH0L0AAADsd3CsvAAAAMAAAeFBZjtB4AAAAnO2YxJ6QgInADZFLa9dmbMAAAEAAAcDXKy6jf////8GI07/AAAAAsCbLjb/FRUWBUpufZ8AAAAVxC06zgAAABpc1fDxAAAAHIaH0L0AAADsd3CsvAAAAMAAAeFBZjtB4AAAAnO2YxJh49iGADZFLa9dmbMAAAEAAAcBd3CsvP////4ESm59nwAAABXELTrOAAAAGFzV8PEAAAAehofQvQAAARAAAARztmMSJN3C3rCYVS5HB2SgADZFLURp9XrAmy4217nMygAAAQAAAwOqMvXQAAAAAR7HC8QAAAAQXNXw8f////4CWEhxwwAAABB3cKy8AAAAyAAAAAAAAAAHBR7HC8QAAAAQXNXw8f////6Lbht1AAAAAXdwrLz////+wJsuNv/gLiQDSm59nwAAABXELTrOAAAAGFhIccP////7AAABADZFLQHGBoQAAAEAA+4EHscLxAAAABBc1fDx/////otuG3UAAAAEd3CsvP////4BWEhxw/////kAAAEANkUtf/PXTQAAAQEBAAAADX2QdFAACSR7YWN0aW9ufa/d3b0ADiR7YWN0aW9uUGFyYW19OI7JzgAMJHt0aHVtYl91cmx9AcYGhAAJ55av5oqi5Lu3JN3C3gAaQHske3RhZ30gPyB2aXNpYmxlIDogZ29uZX16QgInAChAeyR7Z29vZHNfbmFtZV9saW5lXzF9ID8gdmlzaWJsZSA6IGdvbmV9YePYhgAoQHske2dvb2RzX25hbWVfbGluZV8yfSA/IHZpc2libGUgOiBnb25lfUcHZKAADyR7dGFnRmlsbENvbG9yfV2hq28ACiR7dG9wX3VybH2vXZmzAAwke2dvb2RzTmFtZX1EafV6AAYke3RhZ33XuczKAA8ke3RhZ1RleHRDb2xvcn1/89dNAA0ke2pzb25TdHJpbmd9AAAAAA==",d1694_5w5_0_0:"QUxJVlYAAQAAAAEAAAAvAAABbwAAAZ4AAAC+AAACYAAAAAAAAAJkAAAAAAABAAAAAAABAA1kMTY5NF81dzVfMF8wAVoAABkDAC//bAAAAGBc1fDx/////ndwrLz/////AQwPsZwAAAAGAAABsJhVLrBoWx8AAAAACQF3cKy8/////wFc1fDxAAABYAAAAnO2YxJgUgkKAAG95Bub/rwAAAEAAB0DqjL10AAAAABc1fDx/////ndwrLz////+AAAAAAAAAAAZAlzV8PH////+sJhVLv////8DSm59nwAAABgDt5eEAAAAGHdwrLwAAAK+AAAAAAAAABEEAC//bAAAAGCwmFUu/////9gXz28AAAADd3CsvP////8DXNXw8QAAAVBjnR4aAAABUH7pjCUAAAAAAAACc7ZjEjZ2APhWBT+Q/v/y4QAAAQAAEQQAL/9sAAAAYLCYVS7/////2BfPbwAAAAN3cKy8/////wNc1fDxAAABZGOdHhoAAAFkfumMJQAAAAAAAAJztmMS96afT1YFP5D+//LhAAABAQEBAAAABrBoWx8AEiR7YmFja2dyb3VuZENvbG9yfRub/rwAEyR7YmFja2dyb3VuZF9pbWFnZX1gUgkKACdAeyR7YmFja2dyb3VuZF9pbWFnZX0gPyB2aXNpYmxlIDogZ29uZX33pp9PACFAeyR7ZG91YmxlTGluZX0gPyB2aXNpYmxlIDogZ29uZX3+//LhAAwke2RhdGFfbGlzdH02dgD4ACFAeyR7c2luZ2xlTGluZX0gPyB2aXNpYmxlIDogZ29uZX0AAAAA",d1694_5w5_0_2:"QUxJVlYAAQAAAAEAAAAvAAAC8QAAAyAAAAF1AAAEmQAAAAAAAASdAAAAAAABAAAAAAABAA1kMTY5NF81dzVfMF8yAtwAABsFqjL10AAAAAEAL/9sAAAAYFzV8PH////+sJhVLv////93cKy8/////wABUGr73kEAAAAAAqsvfjZ9kHRQXYob96/d3b0AAAAACQJKbn2fAAAACB7HC8QAAAAgAlzV8PEAAADAd3CsvAAAAMAAAAEAAb3kOI7JzgAAAQAAGQF3Js8BAAAAAQVKbn2fAAAAEAO3l4QAAAAQXNXw8QAAAMCGh9C9AAAAEFhIccMAAAAQAAAAAAAAAB0DqjL10AAAAABc1fDx/////ndwrLz/////AAAAAAAAAAAZAlzV8PH////+d3CsvP////8AAAAAAAAAABkBsJhVLv/4bGwDXNXw8QAAACKGh9C9AAAADHdwrLwAAABkAVBq+95BAAAAAAFztmMSSPYRqAAAAAAHBh7HC8QAAAAkXNXw8f////4QuHJOAAAAJMF/HIQAAAABd3CsvP////7Amy42/////wHELTrOAAAAFgAAAQA2RS1IuKNaAAABAQAACQADXNXw8QAAACiGh9C9AAAADHdwrLwAAAByAAACc7ZjElSFsBMAAb3kXaGrbwAAAQAABwVcrLqN/////4aH0L0AAAADd3CsvP////4GI07/AAAAAsCbLjb/AAAAAsQtOs4AAAAeXNXw8QAAADEAAeFBZjtCQAAAAnO2YxJ6QgInADZFLa9dmbMAAAEAAAcGXKy6jf////9c1fDx/////oaH0L0AAAADd3CsvP////4GI07/AAAAAsCbLjb/AAAAAcQtOs4AAAAeAAHhQWY7QkAAAAJztmMSYePYhgA2RS2vXZmzAAABAQAABwF3cKy8/////gPELTrOAAAAGFzV8PEAAAAehofQvQAAAAQAAARztmMSJN3C3rCYVS5HB2SgADZFLURp9XrAmy4217nMygAAAQEAA+4DHscLxAAAABBc1fDx/////ndwrLz/////AAAAAQA2RS0C1cKCAAABAQEAAAAPfZB0UAAJJHthY3Rpb259r93dvQAOJHthY3Rpb25QYXJhbX04jsnOAAwke3RodW1iX3VybH1IuKNaAAcke3Jhbmt9JN3C3gAaQHske3RhZ30gPyB2aXNpYmxlIDogZ29uZX16QgInAChAeyR7Z29vZHNfbmFtZV9saW5lXzF9ID8gdmlzaWJsZSA6IGdvbmV9YePYhgAoQHske2dvb2RzX25hbWVfbGluZV8yfSA/IHZpc2libGUgOiBnb25lfUcHZKAADyR7dGFnRmlsbENvbG9yfV2hq28ACiR7dG9wX3VybH2vXZmzAAwke2dvb2RzTmFtZX1EafV6AAYke3RhZ33XuczKAA8ke3RhZ1RleHRDb2xvcn1UhbATAB5AeyR7dG9wX3VybH0gPyB2aXNpYmxlIDogZ29uZX0C1cKCABQke3ByaWNlX2pzb25fc3RyaW5nfUj2EagAG0B7JHtyYW5rfSA/IHZpc2libGUgOiBnb25lfQAAAAA="}}return o(t,[{key:"getBin",value:function(t){return"dynamic://"+this.templates[t]}}]),t}();t.exports=r},function(t,e,n){"use strict";(function(e){var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=function(t){return t&&t.__esModule?t:{default:t}},a=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e},i=r(n(5)),A=a(n(4)),u=r(n(3)),l=r(n(6)),s=r(n(7)),c=function(){function t(t,e){this.params=t,this.name=e.name}return t.prototype.getCouponRequest=function(t){var n=this;u.default.get(function(){var t=n.params.getCouponUrl+"mall_id="+n.params.mallId+"&type=1";return e.pdduid?t+"&pdduid="+e.pdduid:t},function(e){var o=A.parseResult(e).result.coupon_list;t(n.name,o)},function(e){console.log("Get MallCoupon Request error:"+JSON.stringify(e)),t(null,null)},null)},t.prototype.invokeCallback=function(t){var e=new l.default,n=this;e.isLogin(function(o){o?n.useCouponRequest(t):e.login(function(){s.default.showToast("登录成功")},function(){s.default.showToast("登录失败")})})},t.prototype.useCouponRequest=function(t){var n=t.args;if("object"===(void 0===n?"undefined":o(n))){var r=n.batch_id,a=n.mall_id,i=n.index,l=n.name,c={mall_id:a,batch_id:r},f=this;u.default.post(this.params.useCouponUrl,{"p-lego":1},JSON.stringify(c),function(n){var o=A.parseResult(n);if(o)if(!0===o.success){var r=e.dataMap[l];f.updateCouponReceived(r,i,t.callId),s.default.showToast("领券成功")}else s.default.showToast("领券失败");else console.log("领券接口请求失败")},function(t){console.log("请求使用优惠券 error:"+JSON.stringify(t))})}},t.prototype.updateCouponReceived=function(t,e,n){console.log("Mall Coupon:"+t),console.log("更新优惠券信息:"+e);(new i.default).onUpdate(n,{received:"true"},null,null)},t}();t.exports=c}).call(this,n(0))},function(t,e,n){"use strict";(function(t){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};Object.defineProperty(e,"__esModule",{value:!0});var o=null;function r(t){null!=o&&o.firstLoad&&o.firstLoad(t)}function a(){null!=o&&o.firstLoad&&o.loadMore()}function i(e){console.log("type = "+(void 0===e?"undefined":n(e)));try{var o=e.method,r=t.eventCache;r.hasOwnProperty(o)?r[o](e):console.log("not find method:"+o)}catch(t){console.log(t)}}e.default={render:function(e){o=e,t.firstLoad=r,t.init=r,t.loadMore=a,t.LegoEventDispatcher=i}}}).call(this,n(0))}]);