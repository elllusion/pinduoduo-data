var __reflect=this&&this.__reflect||function(e,t,o){e.__class__=t,o?o.push(t):o=[t],e.__types__=e.__types__?o.concat(e.__types__):o},mouse;!function(e){var t=function(){function e(){}return e.MOUSE_MOVE="mouseMove",e.MOUSE_OVER="mouseOver",e.MOUSE_OUT="mouseOut",e.ROLL_OVER="rollOver",e.ROLL_OUT="rollOut",e.MOUSE_WHEEL="mouseWheel",e}();e.MouseEvent=t,__reflect(t.prototype,"mouse.MouseEvent")}(mouse||(mouse={}));var mouse;!function(e){var t,o,n,u=function(u,s,r,l){if(u!=e.MouseEvent.ROLL_OVER||!t.isRollOver){if(u==e.MouseEvent.ROLL_OVER?t.isRollOver=!0:u==e.MouseEvent.ROLL_OUT&&delete t.isRollOver,n&&t.buttonModeForMouse)try{var E=o.$displayList.renderBuffer.surface;u==e.MouseEvent.ROLL_OVER?E.style.cursor="pointer":u==e.MouseEvent.ROLL_OUT&&(E.style.cursor="auto")}catch(i){}egret.TouchEvent.dispatchTouchEvent(t,u,s,!1,r,l,null)}};e.enable=function(l){n="Windows PC"==egret.Capabilities.os||"Mac OS"==egret.Capabilities.os,o=l,n&&r();var E=function(o,n){t&&!t.$stage&&(u(e.MouseEvent.MOUSE_OUT,!0,o,n),u(e.MouseEvent.ROLL_OUT,!1,o,n),t=null);var s=l.$hitTest(o,n);null!=s&&s!=l?t?s!=t&&(u(e.MouseEvent.MOUSE_OUT,!0,o,n),t.hitTestPoint(o,n,!0)||u(e.MouseEvent.ROLL_OUT,!1,o,n),t=s,u(e.MouseEvent.ROLL_OVER,!1,o,n),u(e.MouseEvent.MOUSE_OVER,!0,o,n)):(t=s,u(e.MouseEvent.ROLL_OVER,!1,o,n),u(e.MouseEvent.MOUSE_OVER,!0,o,n)):t&&(u(e.MouseEvent.MOUSE_OUT,!0,o,n),u(e.MouseEvent.ROLL_OUT,!1,o,n),t=null)},i=0/0,c=0/0,v=egret.sys.TouchHandler.prototype.onTouchMove;egret.sys.TouchHandler.prototype.onTouchMove=function(t,n,u){if(i=t,c=n,v.call(this,t,n,u),s){var r=o.$hitTest(t,n);r||(r=o),egret.TouchEvent.dispatchTouchEvent(r,e.MouseEvent.MOUSE_MOVE,!0,!0,t,n,u,!0)}E(t,n)};var a=egret.sys.TouchHandler.prototype.onTouchBegin;egret.sys.TouchHandler.prototype.onTouchBegin=function(e,t,o){a.call(this,e,t,o),E(e,t)};var O=egret.sys.TouchHandler.prototype.onTouchEnd;egret.sys.TouchHandler.prototype.onTouchEnd=function(e,t,o){O.call(this,e,t,o),E(e,t)},l.addEventListener(egret.Event.ENTER_FRAME,function(){0/0!=i&&0/0!=c&&E(i,c)},null)},e.setButtonMode=function(e,t){e.buttonModeForMouse=t};var s=!1;e.setMouseMoveEnabled=function(e){s=e};var r=function(){var t="mousewheel",n=function(t){var n=t.type;("DOMMouseScroll"==n||"mousewheel"==n)&&(t.delta=t.wheelDelta?t.wheelDelta:-(t.detail||0),o.dispatchEventWith(e.MouseEvent.MOUSE_WHEEL,!1,t.delta))};window.addEventListener?("mousewheel"===t&&void 0!==document.mozFullScreen&&(t="DOMMouseScroll"),window.addEventListener(t,function(e){n(e)},!1)):window.attachEvent&&window.attachEvent("on"+t,function(e){e=e||window.event,n(e)})}}(mouse||(mouse={}));