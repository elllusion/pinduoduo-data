(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[71],{OCos:function(e,t,n){"use strict";var o=n("yXPU"),r=n.n(o),a=n("lwsE"),i=n.n(a),s=n("W8MJ"),c=n.n(s),l=n("7W2i"),u=n.n(l),p=n("a1gu"),d=n.n(p),f=n("Nsbk"),m=n.n(f),h=n("o0o1"),v=n.n(h),g=n("q1tI"),w=n.n(g),T=n("X0J6"),b=n("h7Yj"),y=n("a0DL"),E=n("TSYQ"),L=n.n(E);n("Pgmh");var k=function(e){var t=e.show,n=L()({"infinite-gotop-container":!0,"go-top-show":t,"go-top-hide":!t});return w.a.createElement("div",{className:n,onClick:e.goTop},w.a.createElement("span",{className:"go-top-text"},"顶部"))},N=n("DzJC"),S=n.n(N);n("T/fs");function I(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=m()(e);if(t){var r=m()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return d()(this,n)}}var D=function(e){u()(n,e);var t=I(n);function n(){var e;i()(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!1,isShowGoTop:!1,isFinishLoading:!1,sentinelKey:Object(b.nanoid)()},e.onScroll=S()((function(){e.props.isUseGoTop&&e.checkShowGoTop()}),300),e.getSentinels=function(){var t=e.props,n=t.rootMargin,o=t.threshold;return n="string"==typeof n?n:"".concat(n,"px"),w.a.createElement(T.a,{key:e.state.sentinelKey,doImpr:!1,onEnter:e.onLoadDown,rootMargin:n,threshold:o,root:e.props.container},w.a.createElement("div",{style:{width:"100%",height:1}}))},e.resetObserver=S()((function(){e.setState({sentinelKey:Object(b.nanoid)()})}),500),e.onLoadDown=r()(v.a.mark((function t(){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({isLoading:!0}),t.next=3,e.props.onLoadDown();case 3:n=t.sent,e.setState({isLoading:!1}),"end"===n?(e.setState({isFinishLoading:!0}),e.props.onFinishLoadDown()):e.resetObserver();case 6:case"end":return t.stop()}}),t)}))),e.checkShowGoTop=function(){var t=parseInt(e.scroller.offsetHeight/1.5,10);e.scrollTop>=t?e.setState({isShowGoTop:!0}):e.setState({isShowGoTop:!1})},e.goTop=function(){e.scrollTop=0},e}return c()(n,[{key:"componentDidMount",value:function(){this.props.isUseGoTop&&this.setupGoTop()}},{key:"componentWillUnmount",value:function(){this.props.isUseGoTop&&this.cleanupGoTop()}},{key:"setupGoTop",value:function(){var e=this.props,t=e.useWindow,n=e.scroller;t?(this.scroller=document.body,window.addEventListener("scroll",this.onScroll,!1)):(this.scroller=n,this.scroller.addEventListener("scroll",this.onScroll,!1))}},{key:"cleanupGoTop",value:function(){this.props.useWindow?window.removeEventListener("scroll",this.onScroll):this.scroller&&this.scroller.removeEventListener&&this.scroller.removeEventListener("scroll",this.onScroll),this.onScroll.cancel&&this.onScroll.cancel()}},{key:"scrollTop",get:function(){return this.props.useWindow?document.body.scrollTop+document.documentElement.scrollTop:this.scroller.scrollTop},set:function(e){this.props.useWindow?(document.body.scrollTop=e,0===document.body.scrollTop&&(document.documentElement.scrollTop=e)):this.scroller.scrollTop=e}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.isShowGoTop,o=e.isFinishLoading,r=this.props,a=r.isUseGoTop,i=r.children,s=r.DownLoader;return w.a.createElement("div",{className:"infinite-list-wrapper"},i,!o&&this.getSentinels(),a&&w.a.createElement(k,{show:n,goTop:this.goTop}),t&&w.a.createElement(s,null))}}]),n}(g.Component);D.defaultProps={dataSource:[],onLoadDown:function(){},onFinishLoadDown:function(){},isUseGoTop:!0,useWindow:!0,scroller:{},rootMargin:0,container:null,DownLoader:y.a};t.a=D},PZcl:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var o=function(e){return e}},Pgmh:function(e,t,n){},"T/fs":function(e,t,n){},X0J6:function(e,t,n){"use strict";var o=n("lwsE"),r=n.n(o),a=n("W8MJ"),i=n.n(a),s=n("PJYZ"),c=n.n(s),l=n("7W2i"),u=n.n(l),p=n("a1gu"),d=n.n(p),f=n("Nsbk"),m=n.n(f),h=n("q1tI"),v=n.n(h),g=n("i8i4"),w=n("eHaf");function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=m()(e);if(t){var r=m()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return d()(this,n)}}var b=function(e){u()(o,e);var t=T(o);function o(e){var n;return r()(this,o),(n=t.call(this,e)).provideOptions=function(){n.DomNode=Object(g.findDOMNode)(c()(n)),n.DomNode&&n.registerImprToComponent()},n.registerImprToComponent=function(){var e=n.props,t={threshold:e.threshold,rootMargin:e.rootMargin,root:e.root};n.observer=new IntersectionObserver(n.observerCallBack,t),n.observer.observe(n.DomNode)},n.observerCallBack=function(e,t){e.forEach((function(e){n.singleTracking(e)}))},n.singleTracking=function(e){var t=n.props,o=t.onEnter,r=t.onLeave,a=t.doImpr;n.isItemIn(e)?(a&&n.trackingAction(),o(e)):r(e)},n.trackingAction=function(){n.timer&&clearTimeout(n.timer),n.timer=setTimeout((function(){var e=n.DomNode.getBoundingClientRect().top;if(!(e<-200||e>800)){var t=n.props,o=t.once,r=t.trackingInfo,a=void 0===r?{}:r;Object(w.sendImprMetrics)(a),n.observer&&n.DomNode&&o&&n.observer.unobserve(n.DomNode)}}),300)},n.isItemIn=function(e){var t=n.props.threshold;return e.isIntersecting&&e.intersectionRatio>=t},n.observer=null,n.DomNode=null,n.timer=null,n}return i()(o,[{key:"componentDidMount",value:function(){n("Wr5T"),this.provideOptions()}},{key:"componentWillUnmount",value:function(){this.observer&&this.DomNode&&this.observer.unobserve(this.DomNode)}},{key:"render",value:function(){return v.a.Children.only(this.props.children)}}]),o}(h.Component);b.defaultProps={root:null,doImpr:!0,isCombined:!1,threshold:1,rootMargin:"0px",gap:300,imprItem:{},once:!0,onEnter:function(){},onLeave:function(){}},t.a=b},a0DL:function(e,t,n){"use strict";var o=n("q1tI"),r=n.n(o);n("pY4A");t.a=function(){return r.a.createElement("div",{className:"downloader-container"},r.a.createElement("div",{className:"loader-spinner"}),r.a.createElement("div",{className:"loader-text"},"正在加载中..."))}},miz2:function(e,t,n){e.exports={taskListContainer:"_32k3z7N8",slideIn:"_1Zorxxjf",scrollWrpper:"KbmiQ61O",slideOut:"XOl4XxtO",title:"_1L3hYgra",arrowIconWrapper:"_2uCenQf1",arrowIcon:"_3EoPnCmH",subTitleWrap:"-pZe3aE6",subTitle:"_1dMTHVjl",red:"_3tzI2nlL",flowItemWrap:"_3JMeZin5",flowItem:"_1PqKS8TI",left:"_2l3pozS-",name:"_25V_FU4v",time:"gHBm6mOy",right:"R-LHC3vR",bottom:"BNaREruI"}},pY4A:function(e,t,n){},x2QP:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return G}));var o=n("lSNA"),r=n.n(o),a=n("RIqP"),i=n.n(a),s=n("yXPU"),c=n.n(s),l=n("lwsE"),u=n.n(l),p=n("W8MJ"),d=n.n(p),f=n("7W2i"),m=n.n(f),h=n("a1gu"),v=n.n(h),g=n("Nsbk"),w=n.n(g),T=n("mwIZ"),b=n.n(T),y=n("o0o1"),E=n.n(y),L=n("q1tI"),k=n.n(L),N=n("TSYQ"),S=n.n(N),I=n("Wgwc"),D=n.n(I),M=n("AZ7A"),O=n("OCos"),_=n("alVk"),x=n("kFzF"),C=n("FFpd"),W=n("PZcl"),R=n("WlAH"),P=n("miz2"),A=n.n(P);function B(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=w()(e);if(t){var r=w()(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return v()(this,n)}}var G=function(e){m()(n,e);var t=B(n);function n(){var e;u()(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={isSlideout:!1,currentBeanNum:0,hasMore:!0,isLoading:!1,list:[],indexParams:""},e.isLoading=!1,e.loadMore=c()(E.a.mark((function t(){var n,o,r,a,s,c,l,u,p,d,f,m,h,v,g,w,T=arguments;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=T.length>0&&void 0!==T[0]&&T[0],o=e.state,r=o.isLoading,a=o.hasMore,!r&&a){t.next=4;break}return t.abrupt("return");case 4:return e.isLoading=!0,t.prev=5,s={page_size:10,scroll_type:1},n||(s.index_params=e.state.indexParams),t.next=10,e.httpClient.post(C.b.FlowList,s);case 10:if((c=t.sent).isApiError){t.next=20;break}l=Object(M.c)(b()(c,"result",{})),u=l.currentBeanNum,p=void 0===u?0:u,d=l.pageInfo,m=(f=d||{}).hasMore,h=f.list,v=(h||[]).slice(-1)[0],g=(v||{}).indexParams,w=void 0===g?"":g,e.setState({currentBeanNum:Object(W.a)(p),indexParams:w,list:[].concat(i()(e.state.list),i()(h||[])),hasMore:m}),t.next=21;break;case 20:throw new Error("接口错误");case 21:t.next=26;break;case 23:t.prev=23,t.t0=t.catch(5),e.setState({hasMore:!1});case 26:return t.prev=26,e.setState({isLoading:!1}),t.finish(26);case 29:if(e.state.hasMore){t.next=31;break}return t.abrupt("return",R.d);case 31:case"end":return t.stop()}}),t,null,[[5,23,26,29]])}))),e.showHideAnimation=function(){e.setState({isSlideout:!0})},e.onOpenTaskListModalClick=function(){e.showHideAnimation(),e.props.closeSelf(),e.props.openTaskListModal()},e.renderTitle=function(){return k.a.createElement("div",{className:A.a.title},"收支记录",k.a.createElement("div",{className:A.a.arrowIconWrapper,onClick:e.onOpenTaskListModalClick},k.a.createElement("i",{className:A.a.arrowIcon})))},e.renderSubTitle=function(){var t=e.state.currentBeanNum;return k.a.createElement("div",{className:A.a.subTitleWrap},k.a.createElement("div",{className:A.a.subTitle},"当前金豆",k.a.createElement("span",{className:A.a.red},t)))},e.renderRewardList=function(){var t=e.state,n=t.list,o=t.hasMore;return k.a.createElement("div",{className:A.a.flowList},n.length>0&&k.a.createElement(O.a,{rootMargin:200,isUseGoTop:!0,onLoadDown:e.loadMore},n.map((function(e,t){e=e||{};var n=D()(e.time).format("MM.DD HH:mm"),o=Object(W.a)(e.changedNum),r=o>0?"+".concat(o):o;return k.a.createElement("div",{className:A.a.flowItemWrap,key:t},k.a.createElement("div",{className:A.a.flowItem},k.a.createElement("div",{className:A.a.left},k.a.createElement("div",{className:A.a.name},e.content),k.a.createElement("div",{className:A.a.time},n)),k.a.createElement("div",{className:A.a.right},r)))}))),!o&&k.a.createElement("div",{className:A.a.bottom},"没有更多数据啦~"))},e}return d()(n,[{key:"componentDidMount",value:function(){this.props.getInstance(this),this.httpClient=new x.a,this.loadMore(!0),Object(_.b)()}},{key:"componentWillUnmount",value:function(){Object(_.a)()}},{key:"render",value:function(){return k.a.createElement("div",{className:S()(A.a.taskListContainer,r()({},A.a.slideOut,this.state.isSlideout))},this.renderTitle(),k.a.createElement("div",{className:A.a.scrollWrpper},this.renderSubTitle(),this.renderRewardList()))}}]),n}(L.Component)}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-live-layer/js/loadable_live_activity_pop_GoldenBeanExchangeRecordModal_8617dd1e83082e9b8657.js.map