(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{"ZXKy":function(e,t,a){e.exports={"exchangeMask":"_fEZyLr","inner":"_2vBgGa0","light":"VKNIxIp","title":"_4eroUKn","subTitle":"_2hvkR7s","content":"_3l8TW7u","bk":"CRNVgtb","btn":"_3Dr-MYq","closeBtn":"_3LN6pDN","customMoney":"_1VbDD6-","yuan":"_2EvinMA"}},"c/Dh":function(e,t,a){"use strict";a.r(t);var n,c=a("a+Ds"),o=a("p5LO"),i=a("wzp5"),r=a("w9YI"),s=a("QjaO"),l=a("cJQI"),p=a("ZsPb"),u=a("JsaZ"),m=a("MQ17"),b=a("q1tI"),O=a.n(b),v=a("ZXKy"),h=a.n(v),j=a("ABVw"),E=a("lC+4"),P=a("W1Es"),g=a("TyAF"),_=a("gpDe"),f=a("ndO7"),y=a("klxc"),w=a("M3Mi"),N=Object(g.inject)(_.b.POPUP_QUEUE)(n=Object(g.observer)(n=function(e){Object(p.a)(SingleActiveOpenPopup,e);var t=Object(u.a)(SingleActiveOpenPopup);function SingleActiveOpenPopup(){var e;Object(r.a)(this,SingleActiveOpenPopup);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return e=t.call.apply(t,[this].concat(n)),Object(m.a)(Object(l.a)(e),"state",{"num":0}),Object(m.a)(Object(l.a)(e),"timer",void 0),Object(m.a)(Object(l.a)(e),"openTimer",void 0),Object(m.a)(Object(l.a)(e),"onClose",(function(){e.openTimer&&clearTimeout(e.openTimer),e.popupQueueStore.priorityShow("showSingleActiveProgressPopup"),e.popupQueueStore.close("showSingleActiveOpenPopup")})),Object(m.a)(Object(l.a)(e),"onConfirm",(function(){Object(w.a)(6098883),e.onClose()})),e}return Object(s.a)(SingleActiveOpenPopup,[{"key":"componentDidMount","value":function componentDidMount(){var e=this;this.timer=setInterval((function(){e.setState({"num":Math.floor(998*Math.random()+1)})}),100),Object(f.I)(y.a.SINGLE_DAY_ACTIVE_POPUP),Object(w.b)(6098883),this.openTimer=setTimeout((function(){e.onClose()}),3e3)}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.timer&&clearInterval(this.timer)}},{"key":"render","value":function render(){var e=this.state.num;return O.a.createElement(o.a,{"className":h.a.exchangeMask},O.a.createElement(o.a,{"className":h.a.inner},O.a.createElement(i.a,{"className":h.a.closeBtn,"src":Object(P.c)("popup_close_btn_v2"),"onClick":this.onClose}),O.a.createElement(o.a,{"className":h.a.title},O.a.createElement(E.a,{"text":"恭喜！获得<微信打款#FFB241#>"})),O.a.createElement(o.a,{"className":h.a.subTitle},"完成任务越多，打款金额越高"),O.a.createElement(o.a,{"className":h.a.content},O.a.createElement(i.a,{"className":h.a.light,"src":Object(P.a)("water_new_light")}),O.a.createElement(i.a,{"className":h.a.bk,"src":Object(P.a)("wepay-popup-bk")}),O.a.createElement(o.a,{"className":h.a.customMoney},(e/100).toFixed(2),O.a.createElement(c.a,{"className":h.a.yuan},"元"))),O.a.createElement(o.a,{"className":h.a.btn},O.a.createElement(j.b,{"onClick":this.onConfirm,"text":"提高打款金额","type":j.a.PopupPrize}))))}},{"key":"popupQueueStore","get":function get(){return this.props[_.b.POPUP_QUEUE]}}]),SingleActiveOpenPopup}(b.Component))||n)||n;t.default=N}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-fit/js/FitV2Popups-SingleActiveOpenPopup_dd2e8af8b8f5545754cc.js.map