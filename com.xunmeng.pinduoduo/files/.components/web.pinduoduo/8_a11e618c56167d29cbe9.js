webpackJsonp([8],{715:function(o,n,i){"use strict";var d=i(1),e=i(46),l={src:"weixin",campaign:"gzh",cid:"appzxdownload"};o.exports=function(){var o=i(738),n=d.createNodeFromHTML(o),t=null,a=function(o,i){document.body.appendChild(n),r(o),d.call(i)},r=function(o){c(o)},c=function(o){t||(t=avalon.define({$id:"download",isShow:!1,title:o.title||"",content:o.content||"",launchOrder:o.launchOrder||!1,isWeChatPlatform:o.isWeChatPlatform||!1,orderSN:o.orderSN||void 0,show:function(){d.ui.disableScroll(),t.isShow=!0},hide:function(){d.ui.enableScroll(),t.isShow=!1},downloadApp:function(){var n="download.html?"+d.buildQuery(l,o.queries);e.forward(n)},gotoAppOrderPage:function(){var o={src:"weixin",campaign:"gzh",cid:"ship_remind"},n="download.html"+d.buildQuery(o);if(t.isWeChatPlatform){var i={order_sn:t.orderSN},l="order.html?"+d.buildQuery(i);d.wechatLaunchPDDApp(l,function(){},function(){e.forward("download.html?"+d.buildQuery(o))},n)}else e.forward("download.html?"+d.buildQuery(o))}}),avalon.scan())},s=function(){t.show()},p=function(){t.hide()};return{load:a,show:s,hide:p}}()},738:function(o,n){o.exports='<div ms-controller="download" ms-visible="isShow" class="lotteryRuleContainer">\n    <div id="lotteryRuleMask" ms-if="!launchOrder"></div>\n    <div class="lotteryRule lotteryRuleModule" ms-if="!launchOrder">\n        <img src="/assets/img/cancel_icon.png" class="lotteryRuleCancelImg" ms-click="hide">\n        <span class="lotteryRuleHead lotteryRuleModuleHead">\n        <p style="font-size:18px;">{{title}}<p></span>\n\n        <div style="padding:20px;font-size:15px;font-weight:normal;">\n            <div>{{content}}</div>\n        </div>\n        <div style="border-radius: 5px;margin:40px 13px 13px 13px;padding: 10px;text-align: center;background-color: #fe243d;" ms-click="downloadApp">\n            <div style="font-size: 18px;color: white;font-weight:normal;">前往拼多多APP</div>\n        </div>\n    </div>\n    <div class="goto-app-download-popup" ms-if="launchOrder">\n        <div class="goto-app-download-box">\n            <div class="goto-app-download-close" ms-click="hide"></div>\n            <div>\n                <div class=\'goto-app-download-title\'>{{content}}</div>\n            </div>\n            <div class="goto-app-download-botton" ms-click="gotoAppOrderPage">前往拼多多App</div>\n        </div>\n    </div>\n</div>\n'}});