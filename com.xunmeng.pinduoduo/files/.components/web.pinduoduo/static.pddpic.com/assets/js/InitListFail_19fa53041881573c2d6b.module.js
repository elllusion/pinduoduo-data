(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[6],{Gccd:function(e,t,s){},UUVV:function(e,t,s){"use strict";s.r(t);var r=s("FdF9");s("Gccd");class a extends r.default.Component{constructor(...e){super(...e),this.state={showFestivalError:!1,firstRender:!0,disableClickDefault:!1,disableClickFestival:!1},this.sum=10,this.counter=()=>{let e=this.sum;const{showFestivalError:t}=this.state;this.interval=setInterval((()=>{e--,e>0?this.setState({sum:e}):(this.setState({sum:e,disableClickDefault:t,disableClickFestival:!t}),clearInterval(this.interval))}),1e3)},this.defaultHandler=()=>{const{showFestivalError:e,disableClickDefault:t,disableClickFestival:s}=this.state;(e?s:t)||(this.setState({disableClickDefault:!e,disableClickFestival:e}),this.counter(),location.reload())},this.showCounter=e=>e&&e<this.sum,this.getErrorText=(e=this.sum)=>{const{showFestivalError:t,firstRender:s}=this.state;return this.showCounter(e)?t?`刷新(${e}s)`:`重新加载(${e}s)`:t?s?"刷新":e===this.sum?`刷新(${e}s)`:"再试一次":e!==this.sum||s?"重新加载":`重新加载(${e}s)`}}hideSpinner(){const e=document.querySelector("#pin-spinner");e&&e.style&&(e.style.display="none")}componentDidMount(){let{showFestivalError:e,firstRender:t}=this.state;window.sessionStorage&&window.sessionStorage.getItem("ErrorPageNotfirstRender")?t=!1:window.sessionStorage&&window.sessionStorage.setItem("ErrorPageNotfirstRender",1),t||(this.setState({firstRender:t,disableClickDefault:!e,disableClickFestival:e}),this.counter()),this.hideSpinner()}render(){const{showFestivalError:e,sum:t,disableClickDefault:s,disableClickFestival:a}=this.state;return r.default.createElement("div",{className:"error-wrap"},r.default.createElement("div",{id:"error",style:e?{display:"none"}:{display:"block",paddingTop:"80px"}},r.default.createElement("div",{className:"error-img"}),r.default.createElement("p",{className:"error-msg"},"页面正在加载中，请稍后"),r.default.createElement("div",{className:s?"error-btn default-btn-disabled":"error-btn",onClick:this.defaultHandler},this.getErrorText(t))),r.default.createElement("div",{id:"error_festival",style:e?{display:"block"}:{display:"none"}},r.default.createElement("div",{className:"oc-error-page"},r.default.createElement("div",{className:"oc-error-page-icon"}),r.default.createElement("div",{className:"oc-error-page-text"},"当前访问人数较多，排队中"),r.default.createElement("div",{className:"oc-error-page-hint"}," 请稍后再试 "),r.default.createElement("div",{className:a?"oc-error-page-btn oc-error-page-btn-refreshing":"oc-error-page-btn",id:"btn2",onClick:this.defaultHandler},this.getErrorText(t)))))}}var i=a;s.d(t,"default",(function(){return l}));class l extends r.Component{render(){return r.default.createElement(i,null)}}}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-best-goods/js/InitListFail_19fa53041881573c2d6b.module.js.map