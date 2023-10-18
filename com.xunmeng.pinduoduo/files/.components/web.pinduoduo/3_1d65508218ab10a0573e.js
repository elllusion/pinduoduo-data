webpackJsonp([3],{712:function(o,i,e){"use strict";function t(o){o=o||{},this.api="free_coupon_goods_list?page={0}&size={1}",this.page=o.page||1,this.size=o.size||50,this.isLoadedAll=!1}function s(o){o=o||{},this.captainFreeGoodsList=new t,this.vm=null,this.currentId=o.id||"captain-free-goods-popup",this.container=o.container||document.body,this.isAppMask=o.isAppMask||!1,this.maskCompleteFunc=o.maskComplete||null,this.view=null,this.loadCallback=o.loadCallback||null,this.viewLoaded=!1,this.captainFreeInfo={goodsList:[],couponCount:0},this.cacheInfo=null,this.isShowed=!1,this.dataLoadCallback=o.dataLoadCallback||null}var n=e(1),a=e(20),c=e(733),p=e(46),d=e(235),r=e(52),l=e(764),u=e(762),h=e(14),g=Math.max((n.ui.getWindowHeight()-365)/2,0)+"px",f=10,m=h.Current===h.IOS&&h.isModuleVersion;t.prototype.formatItem=function(o){if(!o)return null;var i=o.group||{},e={key:o.goods_id,goodsId:o.goods_id,goodsName:o.goods_name||"",price:n.StdFormat.price(i.price,100)||null,thumbUrl:n.cdnCompress(o.hd_thumb_url||o.thumb_url)};return e},t.prototype.formatList=function(o){var i=[];if(o&&o.length>0)for(var e=0,t=o.length;e<t;e++){var s=this.formatItem(o[e]);s&&i.push(s)}return i},t.prototype.request=function(o){var i=this;if(i.isLoadedAll)return void o({goodsList:[]});var e=n.format(this.api,this.page,this.size);n.apiRequest("GET",e,null,function(e){var t=i.formatList(e.goods_list);t.length>0?i.page++:i.isLoadedAll=!0;var s=e.useable_coupons_count||0;try{o({goodsList:t,couponCount:s})}catch(i){o()}},function(){o()},!1,!1,!0)},s.prototype.load=function(){var o=this;o.viewLoaded||(o.view=n.createNodeFromHTML(n.format(c,o.currentId)),o.container.appendChild(o.view),o.setupModel(),o.prepareView(),o.captainFreeGoodsList.request(function(i){i&&(o.captainFreeInfo=i,o.update(),o.dataLoadCallback&&n.call(o.dataLoadCallback,i))}),o.viewLoaded=!0,o.loadCallback&&(n.call(o.loadCallback,!0),o.loadCallback=null))},s.prototype.setupModel=function(){var o=this;o.vm||(o.vm=avalon.define({$id:o.currentId,visible:!1,isIosApp:m,goodsList:[],couponCount:0,top:g,showMoreHint:!1,rightArrow:l,hide:function(){o.hide(),o.isAppMask&&a.maskComplete({confirmed:!1},o.maskCompleteFunc)},defaultImage:d,forwardGoods:function(i,e){var t=u.CaptainFreeGoodsClick;i&&(t.goods_id=i,t.idx=e,n.trackingRecord(t,function(){o.forward("goods.html?goods_id="+i)}))},forwardFreeGoodsList:function(){o.vm.showMoreHint&&o.forward("tzfree_list/tzfree_list.html?refer_page_name=index&refer_page_section=popup")},onScroll:function(){o.cacheNodes(),r.lazyLoadOnScroller(o.cacheInfo.scroller,null,{onlyInScroller:!0,pageVerticalRatio:0},o.cacheInfo.wrapper)}}))},s.prototype.prepareView=function(){this.view&&avalon.scan(this.view),this.cacheNodes()},s.prototype.update=function(){this.vm&&(this.vm.goodsList=[],this.vm.goodsList=this.captainFreeInfo.goodsList.slice(0,f),this.vm.couponCount=this.captainFreeInfo.couponCount,this.vm.showMoreHint=this.captainFreeInfo.goodsList.length>f,this.captainFreeInfo.couponCount>0&&this.show(),this.vm.onScroll())},s.prototype.forward=function(o){this.isAppMask?a.maskComplete({url:o},this.maskCompleteFunc):p.forward(o)},s.prototype.cacheNodes=function(){if(!this.cacheInfo){var o=document.getElementById("cfgp-body-container"),i=document.getElementById("cfgp-body-wrapper");o&&(this.cacheInfo={scroller:o,wrapper:i})}},s.prototype.didMount=function(){n.trackingRecord(u.CaptainFreePopupShow)},s.prototype.show=function(){this.vm&&(this.vm.visible=this.vm.goodsList.length>0,!m&&n.ui.disableScroll("cfgp-body-container"),this.vm.visible&&!this.isShowed&&(this.isShowed=!0,this.didMount()))},s.prototype.hide=function(){this.vm&&(this.vm.visible=!1,!m&&n.ui.enableScroll("cfgp-body-container"))},o.exports=s},733:function(o,i){o.exports='<div ms-controller="{0}" id="captain-free-goods-popup" ms-visible="visible">\n    <div class="cfgp-popup-wrapper" ms-css-top="top">\n        <div class="cfgp-close-btn" ms-click="hide"></div>\n        <div class="cfgp-popup-title">\n            <p class="cfgp-main-title">您有<i>{{couponCount}}</i>次0元拼单的机会未使用</p>\n        </div>\n        <div id="cfgp-body-wrapper" class="cfgp-body-wrapper">\n            <ul id="cfgp-body-container" class="cfgp-body-container" ms-scroll="onScroll" ms-class="cfgp-ios-bounce: isIosApp">\n                <li ms-repeat-item="goodsList" class="cfgp-goods-item" ms-click="forwardGoods(item.goodsId, $index)">\n                    <div class="cfgp-goods-img">\n                        <img ms-data-url="item.thumbUrl" ms-src="defaultImage"/>\n                    </div>\n                    <div class="cfgp-goods-details">\n                        <div class="cfgp-goods-name">\n                            <p ms-text="item.goodsName"></p>\n                        </div>\n                        <div class="cfgp-goods-buy">\n                            <div class="cfgp-goods-price">\n                                <span>￥{{item.price}}</span>\n                            </div>\n                            <div class="cfgp-goods-buy-button">\n                                <span>0元拼单</span>\n                            </div>\n                        </div>\n                    </div>\n                </li>\n                <div class="cfgp-body-footer">\n                    <div ms-click="forwardFreeGoodsList"\n                    ms-text="showMoreHint ? \'查看更多商品\' : \'没有更多商品了\'">\n                    </div>\n                    <img ms-if="showMoreHint" ms-src="rightArrow"/>\n                </div>\n            </ul>\n        </div>\n    </div>\n    <div id="cfgp-cover-mask" class="cfgp-cover-mask"></div>\n</div>\n'},762:function(o,i){"use strict";o.exports={CaptainFreePopupShow:{op:"event",event:"index_free_group_show",page_name:"index",page_section:"popup"},CaptainFreeGoodsClick:{op:"click",event:"free_group_goods_clk",page_name:"index",page_section:"popup_goods_list"}}},764:function(o,i){"use strict";o.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAbBAMAAABRv8j0AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAbUExURQAAAFhZW1hZW1hZW1hZW1hZW1hZW1hZW1hZW9p9RHcAAAAIdFJOUwDID9gYoTh1eiF0bwAAADRJREFUCNdjYBVigICIRgUIQ6IDKuTcARVisaCqUABEKKPDACYigKIGrosCAYQv4P6C+RQAETgbdQFLnSkAAAAASUVORK5CYII="}});