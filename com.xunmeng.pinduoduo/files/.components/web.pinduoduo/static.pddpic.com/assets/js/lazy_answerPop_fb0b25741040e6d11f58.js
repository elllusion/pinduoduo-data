(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"0hzW":function(e,t,a){},"KNvx":function(e,t,a){},"mThi":function(e,t,a){"use strict";a.r(t);var n=a("p5LO"),o=a("1OyB"),r=a("vuIU"),i=a("Ji7U"),c=a("LK+K"),l=a("q1tI"),s=a.n(l),u=a("Q/z/"),b=a("brQG"),p=a("JX7q"),f=a("rePB"),d=a("TyAF"),w=a("PS6B"),O=a("a3ss"),m=a("Y65e"),h=(a("+JCI"),a("g4sS")),j=a("bdvc"),v=a("2vnA"),g=a("8AFK");var y,A,P,S,z,T,k,I,E,R,N,Q,C,L,x,_,q,M,W=a("4bvG"),B=a("6OU5"),D=a("TRXh"),J=a("1YS8"),G=a("GkIh"),K=new(y=Object(W.a)(),A=function(e){Object(i.default)(AnswerStore,e);var t=Object(c.default)(AnswerStore);function AnswerStore(){var e;Object(o.default)(this,AnswerStore);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return e=t.call.apply(t,[this].concat(n)),Object(O.a)(Object(p.default)(e),"soloInfo",P,Object(p.default)(e)),Object(O.a)(Object(p.default)(e),"soloQuestion",S,Object(p.default)(e)),Object(O.a)(Object(p.default)(e),"soloMarkInfo",z,Object(p.default)(e)),Object(O.a)(Object(p.default)(e),"myOpt",T,Object(p.default)(e)),Object(O.a)(Object(p.default)(e),"showRightOpt",k,Object(p.default)(e)),Object(O.a)(Object(p.default)(e),"isBtnUnLock",I,Object(p.default)(e)),Object(O.a)(Object(p.default)(e),"showStepAnimate",E,Object(p.default)(e)),Object(O.a)(Object(p.default)(e),"switchTime",R,Object(p.default)(e)),Object(O.a)(Object(p.default)(e),"showAnswerPop",N,Object(p.default)(e)),Object(O.a)(Object(p.default)(e),"showRewardPop",Q,Object(p.default)(e)),Object(O.a)(Object(p.default)(e),"rewardResult",C,Object(p.default)(e)),Object(O.a)(Object(p.default)(e),"rightNum",L,Object(p.default)(e)),Object(O.a)(Object(p.default)(e),"totalQuestion",x,Object(p.default)(e)),Object(O.a)(Object(p.default)(e),"isLastQuestion",_,Object(p.default)(e)),Object(f.default)(Object(p.default)(e),"SWITCH_TIME",2e3),Object(f.default)(Object(p.default)(e),"choiceLock",!1),e}return Object(r.default)(AnswerStore,[{"key":"gameStart","value":function gameStart(){var e=this;return function answerGameStartReq(e){return Object(g.a)("api/ranch/v2/solo/command/create",{"useAnti":!0,"params":e})}().then((function(t){var a=Object(j.x)(t||{}),n=a.soloQuestion,o=void 0===n?{}:n,r=a.soloInfo,i=void 0===r?{}:r;e.soloInfo=i,e.soloQuestion=o,e.totalQuestion=i.totalProgress,e.resetStatus()})).catch((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(D.b)(e),J.a.closePop(G.a.ANSWER_POP)}))}},{"key":"resetStatus","value":function resetStatus(){this.rightNum=0,this.myOpt="",this.isLastQuestion=!1,this.showAnswerPop=!0,this.rewardResult=[]}},{"key":"postAnswer","value":function postAnswer(e){var t=this;if(this.choiceLock)return Promise.reject().catch(B.e);this.choiceLock=!0;var a=this.soloInfo.soloId,n=this.soloQuestion,o=n.questionId;return n.questionIndex===n.totalQuestion&&(this.isLastQuestion=!0),function postAnswerReq(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{"solo_id":0,"question_id":0,"answer":""};return Object(g.a)("api/ranch/v2/solo/command/mark",{"useAnti":!0,"params":e})}({"solo_id":a,"question_id":o,"answer":e}).then((function(a){var n=Object(j.x)(a||{}),o=n.soloQuestion,r=void 0===o?{}:o,i=n.soloMarkInfo,c=void 0===i?{}:i;t.myOpt=e,t.soloMarkInfo=c,t.showStepAnimate=!0,t.switchTime=t.SWITCH_TIME,t.myOpt===c.answer?t.rightNum+=1:t.showRightOpt=!0;var l=setInterval((function(){t.switchTime<=1e3&&(clearInterval(l),r.questionId||(t.showAnswerPop=!1),t.soloQuestion=r,t.myOpt="",t.showStepAnimate=!1,t.choiceLock=!1,t.showRightOpt=!1),t.switchTime-=1e3}),1e3);return t.isLastQuestion})).catch((function(){t.showAnswerPop=!1,t.choiceLock=!1}))}}]),AnswerStore}(h.a),P=Object(m.a)(A.prototype,"soloInfo",[v.observable],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){return{}}}),S=Object(m.a)(A.prototype,"soloQuestion",[v.observable],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){return{}}}),z=Object(m.a)(A.prototype,"soloMarkInfo",[v.observable],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){return{}}}),T=Object(m.a)(A.prototype,"myOpt",[v.observable],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){return""}}),k=Object(m.a)(A.prototype,"showRightOpt",[v.observable],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){return!1}}),I=Object(m.a)(A.prototype,"isBtnUnLock",[v.observable],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){return!1}}),E=Object(m.a)(A.prototype,"showStepAnimate",[v.observable],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){return!1}}),R=Object(m.a)(A.prototype,"switchTime",[v.observable],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){return 0}}),N=Object(m.a)(A.prototype,"showAnswerPop",[v.observable],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){return!1}}),Q=Object(m.a)(A.prototype,"showRewardPop",[v.observable],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){return!1}}),C=Object(m.a)(A.prototype,"rewardResult",[v.observable],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){return[]}}),L=Object(m.a)(A.prototype,"rightNum",[v.observable],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){return 0}}),x=Object(m.a)(A.prototype,"totalQuestion",[v.observable],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){return 5}}),_=Object(m.a)(A.prototype,"isLastQuestion",[v.observable],{"configurable":!0,"enumerable":!0,"writable":!0,"initializer":function initializer(){return!1}}),Object(m.a)(A.prototype,"gameStart",[v.action,y],Object.getOwnPropertyDescriptor(A.prototype,"gameStart"),A.prototype),Object(m.a)(A.prototype,"resetStatus",[v.action],Object.getOwnPropertyDescriptor(A.prototype,"resetStatus"),A.prototype),Object(m.a)(A.prototype,"postAnswer",[v.action],Object.getOwnPropertyDescriptor(A.prototype,"postAnswer"),A.prototype),A),U=a("TSYQ"),H=a.n(U),F=a("q0O3"),Y=a("8tQc"),X=(a("0hzW"),a("vHnQ")),V=a("Jyuy"),Z=Object(d.observer)(q=function(e){Object(i.default)(TopicPop,e);var t=Object(c.default)(TopicPop);function TopicPop(){var e;Object(o.default)(this,TopicPop);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return e=t.call.apply(t,[this].concat(n)),Object(f.default)(Object(p.default)(e),"handleSelect",(function(e){var t=K.SWITCH_TIME,a=K.soloQuestion,n=(void 0===a?{}:a).endTime,o=void 0===n?0:n;if(X.a.currentTime>=o)return D.a.showToast("答题已超时，请重新开始"),void K.set("showAnswerPop",!1);K.postAnswer(e).then((function(e){e&&F.default.dealMissionStore.rewardGain(Y.h.missionDailyAnswer,!1,!1).then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.rewardResult,n=void 0===a?[]:a;n.length<1||(K.set("rewardResult",n),setTimeout((function(){K.set({"showRewardPop":!0,"showAnswerPop":!1})}),t))})).catch((function(){K.set("showAnswerPop",!1)}))}))})),Object(f.default)(Object(p.default)(e),"onClose",(function(){J.a.closePop(G.a.ANSWER_POP)})),e}return Object(r.default)(TopicPop,[{"key":"renderSwitchTime","value":function renderSwitchTime(){var e=K.switchTime,t=K.isLastQuestion;return e>0&&!t&&s.a.createElement(n.a,{"className":"ans-pop-tips ab-x"},e/1e3,"秒后进入下一题")}},{"key":"render","value":function render(){var e=this,t=K.soloInfo,a=K.soloQuestion,o=void 0===a?{}:a,r=K.showRightOpt,i=K.myOpt,c=K.showStepAnimate,l=void 0===c||c,p=K.soloMarkInfo,f=void 0===p?{}:p,d=o.questionIndex,O=o.title,m=o.choiceItems,h=void 0===m?[]:m,j=o.questionId,v=void 0===j?"":j,g=f.answer,y=f.gainScore,A=t.totalProgress,P=h.length>2;return s.a.createElement(n.a,{"className":"ans"},s.a.createElement(V.a,{"onClose":this.onClose},s.a.createElement(n.a,{"className":H()("topic",{"two-columns":P})},s.a.createElement(n.a,{"className":"topic-order bg-init"},s.a.createElement(b.a,{"className":"cur-order"},"第",d,"题"),"/共",A,"题"),s.a.createElement(n.a,{"className":"topic-title fl-xy"},O),s.a.createElement(n.a,{"className":"w-full bottom-16 ab-auto"},s.a.createElement(n.a,{"className":"topic-options fl-b flex-row flex-wrap"},h.map((function(t){var a=t||{},o=a.item,c=void 0===o?"":o,p=a.index,f=i===p&&i!==g,d=p===g&&r,O=i===p&&i===g;return s.a.createElement(n.a,{"key":p+"-"+v,"className":H()("topic-option fl-xy",{"wrong-option":f,"right-option":O||d}),"onClick":e.handleSelect.bind(e,p)},s.a.createElement(b.a,{"className":"sm-size"},c),f?s.a.createElement(u.a,{"className":"ans-wrong-icon fixed-right ab-y","src":Object(w.f)("ans_wrong")}):null,O||d?s.a.createElement(u.a,{"className":"ans-right-icon fixed-right ab-y","src":Object(w.f)("ans_right")}):null,O&&l?s.a.createElement(n.a,{"className":"topic-gain-animate"},"+",y,"g"):null)})))),this.renderSwitchTime())))}}]),TopicPop}(l.Component))||q,$=a("N6C/"),ee=a("3m2z"),te=a("tSAD"),ae=(a("KNvx"),function(e){Object(i.default)(AnswerRewardPop,e);var t=Object(c.default)(AnswerRewardPop);function AnswerRewardPop(){var e;Object(o.default)(this,AnswerRewardPop);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return e=t.call.apply(t,[this].concat(n)),Object(f.default)(Object(p.default)(e),"onBtnClick",(function(){e.onClose(),F.default.feedStore.feed()})),Object(f.default)(Object(p.default)(e),"onClose",(function(){K.set("showRewardPop",!1),J.a.closePop(G.a.ANSWER_POP)})),e}return Object(r.default)(AnswerRewardPop,[{"key":"renderTop","value":function renderTop(){var e=K.rightNum,t=e===K.totalQuestion;return e>0&&s.a.createElement(n.a,{"className":H()("ans-reward-title relative",{"all bg-init":t,"some bg-init":!t})},s.a.createElement(te.a,{"className":"num-img","src":Object(w.g)("ans_"+e)}))}},{"key":"render","value":function render(){var e=K.rewardResult,t=void 0===e?[]:e,a=K.rightNum;return s.a.createElement($.a,{"rewardResult":t,"titleObj":{"title":this.renderTop()},"onClose":this.onClose,"bgStyle":{"top":"44%"},"btnList":[{"content":"去喂食","onClick":this.onBtnClick}],"sloganList":[{"content":a>0?"获得".concat(Object(ee.b)(t),"奖励"):s.a.createElement(s.a.Fragment,null,s.a.createElement(n.a,null,"本次没有回答正确的题哦，别灰心"),s.a.createElement(n.a,null,"送你参与奖".concat(Object(ee.b)(t))))}]})}}]),AnswerRewardPop}(l.Component)),ne=Object(d.observer)(M=function(e){Object(i.default)(Answer,e);var t=Object(c.default)(Answer);function Answer(){return Object(o.default)(this,Answer),t.apply(this,arguments)}return Object(r.default)(Answer,[{"key":"componentDidMount","value":function componentDidMount(){K.gameStart()}},{"key":"render","value":function render(){var e=K.showAnswerPop,t=K.showRewardPop;return s.a.createElement(n.a,{"className":"answer-com"},e&&s.a.createElement(Z,null),t&&s.a.createElement(ae,null))}}]),Answer}(l.Component))||M;t.default=ne}}]);
//# sourceMappingURL=http://vgunxpkt.com/sourcemaps/mobile-ranch/js/lazy_answerPop_fb0b25741040e6d11f58.js.map