webpackJsonp([10],{709:function(e,o,t){"use strict";var i=t(1),n=t(13),s=t(31);e.exports=function(){var e=t(727),o=i.createNodeFromHTML(e),l=!1,a=null,c={Refresh:"refresh",Wait:"wait"},d=["多多粉们太热情了，服务器需要休息一下，请稍后重试～","多多粉们太热情了，服务器需要休息一下，请稍后重试～"],r={Refresh:"刷新",Wait:"刷新({0}s)"},u=null!=localStorage.getItem(n.LocalStorageKey.ShowAlertDelayLoad)?1:0;i.saveToLocalStorage(n.LocalStorageKey.ShowAlertDelayLoad,"1");var v=function(e){a=avalon.define({$id:"alert_delay_load",visible:!1,desc:d[u],buttonLabel:e<=0?r.Refresh:i.format(r.Wait,e),buttonStyle:e<=0?c.Refresh:c.Wait,seconds:e,imgUrl:i.getCDNImgURL("jsalert/delay_load_icon_v2.png"),show:function(){a.visible=!0,i.ui.disableScroll()},hide:function(){a.visible=!1,i.ui.enableScroll()},clickRefresh:function(){event.stopPropagation(),a.seconds>0||(a.visible=!1,i.ui.enableScroll(),Navigation.reload())}})},b=function e(){--a.seconds<=0?a.buttonLabel=r.Refresh:(a.buttonLabel=i.format(r.Wait,a.seconds),setTimeout(e,1e3)),a.buttonStyle=a.seconds<=0?c.Refresh:c.Wait,s.hide()},f=function(){a&&a.show()},h=function(){a&&a.hide()},m=function(e){e=e||{},l?a.seconds=e.seconds||0:(document.body.appendChild(o),l=!0,v(e.seconds||0),avalon.scan(o),b()),f(),s.hide()};return{load:m,show:f,hide:h}}()},727:function(e,o){e.exports='<div ms-controller="alert_delay_load" ms-visible="visible">\n    <div class="bg-fill"></div>\n    <div id="delay-load">\n        <img class="head-icon" ms-src="imgUrl">\n        <div class="desc" ms-text="desc"></div>\n        <div ms-class="button {{buttonStyle}}" ms-text="buttonLabel" ms-click="clickRefresh()"></div>\n    </div>\n</div>\n'}});