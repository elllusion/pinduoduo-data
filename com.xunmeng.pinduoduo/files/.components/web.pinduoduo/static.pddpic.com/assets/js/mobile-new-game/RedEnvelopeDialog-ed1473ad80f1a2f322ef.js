(window["webpackJsonPmobile-new-game"]=window["webpackJsonPmobile-new-game"]||[]).push([["3ebe"],{"8b05":function(e,t,a){var n=a("k7jO"),r=a("Q8e5"),i="string"==typeof n?[[e.i,n,""]]:n;(t=e.exports=n.locals||{})._getContent=function(){return i},t._getCss=function(){return""+n},t._insertCss=function(e){return r(i,e)}},DmJa:function(e,t,a){(t=e.exports=a("I1BE")(!1)).push([e.i,".Z0bMX6-L{width:2.9rem;height:4.1rem;background-color:#c7383e;border-radius:.2rem;-webkit-transform:translateY(0) scale(1);transform:translateY(0) scale(1)}._1Jq66N4H{position:absolute;width:100%;height:72%;top:0;z-index:2;overflow:hidden}._3jVoDhrQ{background:-webkit-linear-gradient(bottom,#fabb7a,#f7c88c);background:linear-gradient(1turn,#fabb7a,#f7c88c);height:100%;border-radius:.2rem}._13hj310E{width:100%;height:100%}._3jjWagUu,._13hj310E{-webkit-transform:translateZ(0);transform:translateZ(0)}._3jjWagUu{z-index:5;opacity:1}",""]),t.locals={bg:"Z0bMX6-L",mainUpAniWrap:"_1Jq66N4H",mainUpAniWrapGold:"_3jVoDhrQ",mainUpAni:"_13hj310E",bottomInAni:"_3jjWagUu"}},LcxD:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return J}));var n=a("lSNA"),r=a.n(n),i=a("J4zp"),o=a.n(i),l=a("6MOg"),s=a.n(l),c=a("W5Bu"),m=a.n(c),u=a("AQuO"),d=a("5Bnk"),b=a("TSYQ"),p=a.n(b),_=a("m7EM"),f=a("PwBQ"),k=a("g5zU"),g=a.n(k),v=a("VMs4"),w=a("oAI1");function h(e){var t=e.result,a=e.btnText,n=e.onConfirm,i=e.children,o=(e.active,e.lowTitle),l=(Object(w.g)().state,Object(_.a)(t)),c=Object(f.b)(l,{isNew:!0}),b=null==c?void 0:c.Title,k=(null==t?void 0:t.result)||{},h=Array.isArray(null==k?void 0:k.uidList)?null==k?void 0:k.uidList:[],P=Object(d.q)({prizeType:l,users:h});return g()(m.a),t?s.a.createElement("div",null,s.a.createElement("div",{className:p()(m.a.bg,m.a.enlargeBg,e.className)},b?s.a.createElement(b,{result:t,prizeType:l}):o,s.a.createElement("div",{className:p()(m.a.mainUpAniWrap,r()({},m.a.mainUpAniWrapGold,P))},s.a.createElement("div",{className:m.a.mainUpAni},s.a.createElement(v.a.Provider,{value:P},s.a.createElement(d.b,{result:t},s.a.createElement(c,{result:t,prizeType:l,onComfirm:n}))))),s.a.createElement(u.a,{canAddWidgets:t.canAddWidgets,hideText:Object(d.h)(l),isGold:P,btnText:a,bottomText:Object(d.e)(l),className:m.a.bottomInAni,onConfirm:n})),i):null}var P=a("8b05"),O=a.n(P),j=a("44re"),q=a("i738"),E=a("Ea3b"),x=a("abAY"),y=a("pnEg"),N=a("+7KU");function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(Object(a),!0).forEach((function(t){r()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var B=s.a.createElement(x.a,{name:"StaticRedEnvelopeNew"});function J(e){var t;g()(O.a);var a=s.a.createRef(),n=e.list,i=e.onClose,c=Object(w.e)("navState").navState,m=Object(l.useState)(!1),u=o()(m,2),d=u[0],b=u[1],f=Object(l.useState)(0),k=o()(f,2),v=k[0],P=k[1],x=Object(l.useState)(!1),T=o()(x,2),J=T[0],S=T[1],L=Object(l.useRef)({list:n.map((function(e,t){return Y(Y({},e),{},{p_key:t})})),index:v,peerUser:{avatar:"",nickname:null}}).current,U=L.list[v];L.index=v;var A=function(){d||(b(!0),Object(j.b)({navState:c,destType:Object(_.i)(Object(_.a)(U))?"coin":"cash",animationElRef:"static_redEnvelope_new_0",maskElRef:a,disableMaskAni:v<L.list.length-1,disableAni:Object(_.o)(Object(_.a)(U)),destRec:e.destRec,destroyFunc:function(){L.index<L.list.length-1?(P((function(e){return e+1})),b(!1)):(S(!0),i())}}))},V=L.list.slice(v);return J||!V.length?null:(L.peerUser=((null==U||null===(t=U.result)||void 0===t?void 0:t.uidList)||[]).find((function(e){return!e.self}))||{},s.a.createElement(y.a,null,s.a.createElement(q.a,{ref:a},s.a.createElement(E.a,null,B,s.a.createElement("div",{className:O.a.container},V.slice(0,5).map((function(e,t){var a,n,o,l,c,m="";(null===(a=L.list)||void 0===a?void 0:a.length)>1&&(m="下一个 (".concat(e.p_key+1,"/").concat(null===(o=L.list)||void 0===o?void 0:o.length,")"),e.p_key+1===(null===(l=L.list)||void 0===l?void 0:l.length)&&(m="全部收下 (".concat(e.p_key+1,"/").concat(null===(c=L.list)||void 0===c?void 0:c.length,")")));return s.a.createElement("div",{className:O.a.itemWrap,id:"static_redEnvelope_new_".concat(t),style:{zIndex:V.length-t},key:e.p_key},s.a.createElement("div",{className:p()((n={},r()(n,O.a.dialog,d?t-1<=0:0===t),r()(n,O.a.dialog1,d?t-1==1:1===t),r()(n,O.a.dialog2,d?t-1==2:2===t),r()(n,O.a.dialog3,d?t-1==3:t>=3),n))},s.a.createElement(h,{lowTitle:L.peerUser.avatar?s.a.createElement("div",{className:O.a.avatar},s.a.createElement(N.a,{src:L.peerUser.avatar,className:O.a.avatarImg}),s.a.createElement("div",{className:O.a.nickname},L.peerUser.nickname),s.a.createElement("div",{className:O.a.afterText},"和你拼红包成功")):null,active:0===t,onClose:i,result:e,onConfirm:A,btnText:m},s.a.createElement("div",{className:O.a.opMask}))))})),s.a.createElement("div",{className:O.a.bottomText},"仅展示最近微信口令红包记录"))))))}},W5Bu:function(e,t,a){var n=a("DmJa"),r=a("Q8e5"),i="string"==typeof n?[[e.i,n,""]]:n;(t=e.exports=n.locals||{})._getContent=function(){return i},t._getCss=function(){return""+n},t._insertCss=function(e){return r(i,e)}},k7jO:function(e,t,a){(t=e.exports=a("I1BE")(!1)).push([e.i,"._1D6utVNh{bottom:-.45rem;width:100%;text-align:center;font-size:.14rem;color:hsla(0,0%,100%,.8);font-weight:400}._1D6utVNh,._3OR6HGKE{position:absolute;left:0}._3OR6HGKE{top:0}._3oBPqkqP,._3OR6HGKE{width:2.9rem;height:4.1rem}._3oBPqkqP{position:relative}._3oBPqkqP ._4F1q_oDS,._3oBPqkqP ._14N2OySm,._3oBPqkqP ._27PYLJJJ,._3oBPqkqP .ZTVNjkG_,._3YAbGiOn{position:absolute;left:0;top:0;width:2.9rem;height:4.1rem;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}._3oBPqkqP ._4F1q_oDS ._3YcLVekp,._3oBPqkqP ._14N2OySm ._3YcLVekp,._3oBPqkqP ._27PYLJJJ ._3YcLVekp,._3oBPqkqP .ZTVNjkG_ ._3YcLVekp,.XMHdxYLw{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:1;border-radius:.17rem;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}._3oBPqkqP .ZTVNjkG_{-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1);z-index:3}._3oBPqkqP .ZTVNjkG_ ._3YcLVekp{background:transparent}._3oBPqkqP ._27PYLJJJ{-webkit-transform:translate3d(0,.16rem,0) scale(.96);transform:translate3d(0,.16rem,0) scale(.96);z-index:2}._3oBPqkqP ._27PYLJJJ ._3YcLVekp{background:rgba(0,0,0,.3)}._3oBPqkqP ._4F1q_oDS{-webkit-transform:translate3d(0,.36rem,0) scale(.9);transform:translate3d(0,.36rem,0) scale(.9);z-index:1}._3oBPqkqP ._4F1q_oDS ._3YcLVekp{background:rgba(0,0,0,.5)}._3oBPqkqP ._14N2OySm{-webkit-transform:translate3d(0,.36rem,0) scale(.9);transform:translate3d(0,.36rem,0) scale(.9);opacity:0;z-index:1}._3oBPqkqP ._14N2OySm ._3YcLVekp{background:rgba(0,0,0,.5)}._2YTUKvuP{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;position:absolute;-webkit-transform:translate(-50%);transform:translate(-50%);left:50%;top:-.33rem;font-size:.18rem;color:#ffeee2;font-weight:600}._2YTUKvuP>._2arCWGkl{width:.26rem;height:.26rem;border-radius:50%;margin-right:.08rem}._2YTUKvuP>.IS7ZrJvQ{max-width:1.4rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._2YTUKvuP>._3KeHTZ3C{white-space:nowrap;-webkit-flex-shrink:0;flex-shrink:0}",""]),t.locals={bottomText:"_1D6utVNh",itemWrap:"_3OR6HGKE",container:"_3oBPqkqP",commonDialog:"_3YAbGiOn",dialog:"ZTVNjkG_",dialog1:"_27PYLJJJ",dialog2:"_4F1q_oDS",dialog3:"_14N2OySm",commonOpMask:"XMHdxYLw",opMask:"_3YcLVekp",avatar:"_2YTUKvuP",avatarImg:"_2arCWGkl",nickname:"IS7ZrJvQ",afterText:"_3KeHTZ3C"}}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/assets/js/mobile-new-game/RedEnvelopeDialog-ed1473ad80f1a2f322ef.js.map