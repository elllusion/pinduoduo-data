(window.ReadWeJsonp=window.ReadWeJsonp||[]).push([[26],{"/Gaa":function(t,e,o){"use strict";o.r(e);var n=o("1OyB"),r=o("vuIU"),a=o("JX7q"),c=o("Ji7U"),i=o("LK+K"),u=o("rePB"),d=o("bdvc"),f=o("q1tI"),l=o.n(f),s=o("NYpQ"),h=o("9uCs"),m=o("c7uK"),p=o("opb1"),_=new function PerformLogStore(){Object(n.default)(this,PerformLogStore),Object(u.default)(this,"log",!1)},b=function(t){Object(c.default)(PerformLog,t);var e=Object(i.default)(PerformLog);function PerformLog(){var t;Object(n.default)(this,PerformLog);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return t=e.call.apply(e,[this].concat(r)),Object(u.default)(Object(a.default)(t),"sto",void 0),Object(u.default)(Object(a.default)(t),"record",(function(){if(!_.log){_.log=!0;var t=[];if(window.performance&&window.performance.getEntries){var e=performance.getEntries().filter((function(t){return t.name.match(/\.js$/)})),o=h.a.prefetchReadGray,n=0,r=0,a=0,c=0,i=0,u=1;e.forEach((function(t){"transferSize"in t&&(0===t.transferSize?(r++,c+=t.duration||0):(a++,i+=t.duration||0,u=0),n++)})),e.sort((function(t,e){return e.duration-t.duration}));var f=e[0]||{},l=f.duration,b=f.name;if(o&&0===u&&l>600&&Object(m.a)(p.a.MAX_JS_NAME,"".concat(b,"-").concat(l,"-").concat(e.length,"-").concat(e.slice(0,4).map((function(t){return t.name})).join("-"))),n>0){var g=Object(d.i)().fun_id,v=void 0===g?"":g,O=o?1:0;t.push({"groupId":"90129","longFields":{"memory_cache_radio":Math.round(0/n*100),"disk_cache_radio":Math.round(r/n*100),"http_io_radio":Math.round(a/n*100),"memory_cache_duration":0,"disk_cache_duration":r?Math.round(c/r):0,"http_io_duration":a?Math.round(i/a):0,"all_cached":u,"max_duration":l},"tags":{"fun_id":v,"from_garden_prefetch":O,"has_http_io":a?1:0}})}}t.length>0&&Object(s.a)(t)}})),t}return Object(r.default)(PerformLog,[{"key":"componentDidMount","value":function componentDidMount(){var t=this;this.sto=window.setTimeout((function(){t.record(),t.checkWebkitSupport()}),1e4)}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.sto&&clearTimeout(this.sto)}},{"key":"checkWebkitSupport","value":function checkWebkitSupport(){try{CSS.supports("-webkit-transform","translate(0,0)")||Object(m.a)(p.a.NO_SUPPORT_WEBKIT)}catch(t){}}},{"key":"render","value":function render(){return l.a.createElement("div",null)}}]),PerformLog}(f.Component);e.default=b}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-fun-read/js/dynamic_perform_log~9e9ecca8_e56f3d279411e1e60407.js.map