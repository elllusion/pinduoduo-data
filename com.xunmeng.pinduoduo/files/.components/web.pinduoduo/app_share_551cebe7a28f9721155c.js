webpackJsonp([19],[function(e,a,t){"use strict";var r=t(1),n=t(6),i=t(31),o=t(13),s=t(22),h=t(95);r.prepare({disablePullReload:!0,shareInfo:{disableShare:!0},regEvents:{onApplicationResume:function(){i.hide()}}},function(){i.hide(),n.callNative("WebScene","getExtra",null,function(e){t(65)(function(a){n.decodeFunctions(e);var i=e.share_info;i.shareURL.indexOf("mall_page.html")>=0&&(i.thumbnailURL=r.addWaterMark(i.thumbnailURL,o.WaterMark.Default,!0)),i.waterMark===o.WaterMark.Default||"undefined"==typeof i.waterMark?i.thumbnailURL4WeChatMsg=r.addWaterMark(i.thumbnailURL,o.WaterMark.WeChatMsg,!0):i.thumbnailURL4WeChatMsg=i.thumbnailURL;var u=t(11).page.getInstance(),c=u.getPageInfoByUrl(i.shareURL);i.pageName=c.getPageName(),u.setKeyParams(i.keyParams);var l={userID:t(7).userID,trackingRecord:r.trackingRecord,shareDomain:s.shareDomain,shareDomains:s.shareDomains,beiTaiShareDomains:s.BeiTaiShareDomains,shop:s.shop};i.timelineDomain="http://ios.meituletui.com",i.timelineAppId="wx20392b0342c8af91",h.Native.getInstance(l).prepare(i,function(t){a.prepareShare(h.Native.getInstance().getShareInfo(),!0),a.prepareShareForCouponSend().then(function(t){a.appear(),e.directExpose&&a.directIOSShareToWeChatTL()})})})})})}]);