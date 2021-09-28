!function(){"use strict";function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkionic5fullapp_final=self.webpackChunkionic5fullapp_final||[]).push([[8592],{68225:function(t,n,e){e.d(n,{c:function(){return a}});var r=e(23150),i=e(52954),o=e(39461),a=function(t,n){var e,a,c=function(t,r,i){if("undefined"!=typeof document){var o=document.elementFromPoint(t,r);o&&n(o)?o!==e&&(s(),u(o,i)):s()}},u=function(t,n){e=t,a||(a=e);var i=e;(0,r.c)(function(){return i.classList.add("ion-activated")}),n()},s=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e){var n=e;(0,r.c)(function(){return n.classList.remove("ion-activated")}),t&&a!==e&&e.click(),e=void 0}};return(0,o.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:function(t){return c(t.currentX,t.currentY,i.a)},onMove:function(t){return c(t.currentX,t.currentY,i.b)},onEnd:function(){s(!0),(0,i.h)(),a=void 0}})}},77330:function(t,n,e){e.d(n,{a:function(){return a},d:function(){return c}});var r,i=e(8239),o=e(52377),a=(r=(0,i.Z)(regeneratorRuntime.mark(function t(n,e,r,i,a){var c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=2;break}return t.abrupt("return",n.attachViewToDom(e,r,a,i));case 2:if("string"==typeof r||r instanceof HTMLElement){t.next=4;break}throw new Error("framework delegate is missing");case 4:return c="string"==typeof r?e.ownerDocument&&e.ownerDocument.createElement(r):r,i&&i.forEach(function(t){return c.classList.add(t)}),a&&Object.assign(c,a),e.appendChild(c),t.next=10,new Promise(function(t){return(0,o.c)(c,t)});case 10:return t.abrupt("return",c);case 11:case"end":return t.stop()}},t)})),function(t,n,e,i,o){return r.apply(this,arguments)}),c=function(t,n){if(n){if(t)return t.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},52954:function(t,n,e){e.d(n,{a:function(){return o},b:function(){return a},c:function(){return i},d:function(){return u},h:function(){return c}});var r={getEngine:function(){var t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(t){var n=this.getEngine();if(n){var e=this.isCapacitor()?t.style.toUpperCase():t.style;n.impact({style:e})}},notification:function(t){var n=this.getEngine();if(n){var e=this.isCapacitor()?t.style.toUpperCase():t.style;n.notification({style:e})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var t=this.getEngine();!t||(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged:function(){var t=this.getEngine();!t||(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd:function(){var t=this.getEngine();!t||(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},i=function(){r.selection()},o=function(){r.selectionStart()},a=function(){r.selectionChanged()},c=function(){r.selectionEnd()},u=function(t){r.impact(t)}},66575:function(t,e,r){r.d(e,{s:function(){return i}});var i=function(t){try{if(t instanceof function(){return function t(e){n(this,t),this.value=e}}())return t.value;if(!c()||"string"!=typeof t||""===t)return t;var e=document.createDocumentFragment(),r=document.createElement("div");e.appendChild(r),r.innerHTML=t,s.forEach(function(t){for(var n=e.querySelectorAll(t),r=n.length-1;r>=0;r--){var i=n[r];i.parentNode?i.parentNode.removeChild(i):e.removeChild(i);for(var c=a(i),u=0;u<c.length;u++)o(c[u])}});for(var i=a(e),u=0;u<i.length;u++)o(i[u]);var l=document.createElement("div");l.appendChild(e);var f=l.querySelector("div");return null!==f?f.innerHTML:l.innerHTML}catch(e){return console.error(e),""}},o=function t(n){if(!n.nodeType||1===n.nodeType){for(var e=n.attributes.length-1;e>=0;e--){var r=n.attributes.item(e),i=r.name;if(u.includes(i.toLowerCase())){var o=r.value;null!=o&&o.toLowerCase().includes("javascript:")&&n.removeAttribute(i)}else n.removeAttribute(i)}for(var c=a(n),s=0;s<c.length;s++)t(c[s])}},a=function(t){return null!=t.children?t.children:t.childNodes},c=function(){var t=window,n=t&&t.Ionic&&t.Ionic.config;return!n||(n.get?n.get("sanitizerEnabled",!0):!0===n.sanitizerEnabled||void 0===n.sanitizerEnabled)},u=["class","id","href","src","name","slot"],s=["script","style","iframe","meta","link","object","embed"]},60408:function(t,n,e){e.d(n,{S:function(){return r}});var r={bubbles:{dur:1e3,circles:9,fn:function(t,n,e){var r=t*n/e-t+"ms",i=2*Math.PI*n/e;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(t,n,e){var r=n/e,i=t*r-t+"ms",o=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(t,n){return{r:6,style:{left:9-9*n+"px","animation-delay":-110*n+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(t,n,e){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*n+(n<6?180:-180),"deg)"),"animation-delay":t*n/e-t+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(t,n,e){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*n+(n<6?180:-180),"deg)"),"animation-delay":t*n/e-t+"ms"}}}}}},61269:function(t,n,e){e.d(n,{c:function(){return a},g:function(){return c},h:function(){return o},o:function(){return s}});var r,i=e(8239),o=function(t,n){return null!==n.closest(t)},a=function(t,n){return"string"==typeof t&&t.length>0?Object.assign((e={"ion-color":!0},r="ion-color-".concat(t),i=!0,r in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i,e),n):n;var e,r,i},c=function(t){var n={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return n[t]=!0}),n},u=/^[a-z][a-z0-9+\-.]*:/,s=(r=(0,i.Z)(regeneratorRuntime.mark(function t(n,e,r,i){var o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(null==n||"#"===n[0]||u.test(n)){t.next=4;break}if(!(o=document.querySelector("ion-router"))){t.next=4;break}return t.abrupt("return",(null!=e&&e.preventDefault(),o.push(n,r,i)));case 4:return t.abrupt("return",!1);case 5:case"end":return t.stop()}},t)})),function(t,n,e,i){return r.apply(this,arguments)})},95993:function(e,r,i){i.d(r,{V:function(){return s}});var o,a=i(64762),c=i(52462),u=i(60476),s=((o=function(){function e(t,r,i){n(this,e),this.element=t,this.renderer=r,this.domCtrl=i,this.lastValue=0}var r,i,o;return r=e,(i=[{key:"ngOnChanges",value:function(t){var n=this;if(this.scrollContent&&this.config){this.scrollContent.scrollEvents=!0;var e=function(t){return(0,a.__awaiter)(n,void 0,void 0,regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.scrollContent.getScrollElement();case 2:n=t.sent,this.contentHeight=n.offsetHeight,this.scrollHeight=n.scrollHeight,void 0===this.config.maxValue&&(this.config.maxValue=this.element.nativeElement.offsetHeight),this.lastScrollPosition=n.scrollTop;case 4:case"end":return t.stop()}},t,this)}))};this.scrollContent&&this.scrollContent instanceof c.W2?(this.scrollContent.ionScrollStart.subscribe(e),this.scrollContent.ionScroll.subscribe(function(t){return(0,a.__awaiter)(n,void 0,void 0,regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",this.adjustElementOnScroll(t));case 1:case"end":return n.stop()}},n,this)}))}),this.scrollContent.ionScrollEnd.subscribe(function(t){return(0,a.__awaiter)(n,void 0,void 0,regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",this.adjustElementOnScroll(t));case 1:case"end":return n.stop()}},n,this)}))})):this.scrollContent instanceof HTMLElement&&(this.scrollContent.addEventListener("ionScrollStart",e),this.scrollContent.addEventListener("ionScroll",function(t){return(0,a.__awaiter)(n,void 0,void 0,regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",this.adjustElementOnScroll(t));case 1:case"end":return n.stop()}},n,this)}))}),this.scrollContent.addEventListener("ionScrollEnd",function(t){return(0,a.__awaiter)(n,void 0,void 0,regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",this.adjustElementOnScroll(t));case 1:case"end":return n.stop()}},n,this)}))}))}}},{key:"adjustElementOnScroll",value:function(t){var n=this;t&&this.domCtrl.write(function(){return(0,a.__awaiter)(n,void 0,void 0,regeneratorRuntime.mark(function t(){var n,e,r,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.scrollContent.getScrollElement();case 2:n=t.sent,e=n.scrollTop>0?n.scrollTop:0,r=e-this.lastScrollPosition,this.lastScrollPosition=e,i=this.lastValue+r,i=Math.max(0,Math.min(i,this.config.maxValue)),this.renderer.setStyle(this.element.nativeElement,this.config.cssProperty,"-".concat(i,"px")),this.lastValue=i;case 7:case"end":return t.stop()}},t,this)}))})}}])&&t(r.prototype,i),o&&t(r,o),e}()).\u0275fac=function(t){return new(t||o)(u.Y36(u.SBq),u.Y36(u.Qsj),u.Y36(c.Cb))},o.\u0275dir=u.lG2({type:o,selectors:[["","scrollHide",""]],inputs:{config:["scrollHide","config"],scrollContent:"scrollContent"},features:[u.TTD]}),o)}}])}();