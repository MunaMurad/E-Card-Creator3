!function(){"use strict";function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||r(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=r(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){s=!0,i=e},f:function(){try{u||null==n.return||n.return()}finally{if(s)throw i}}}}function r(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}(self.webpackChunkionic5fullapp_final=self.webpackChunkionic5fullapp_final||[]).push([[5174],{45174:function(r,a,i){i.r(a),i.d(a,{ion_route:function(){return p},ion_route_redirect:function(){return d},ion_router:function(){return T},ion_router_link:function(){return W}});var s,c=i(8239),f=i(23150),l=i(52377),h=i(97585),v=i(61269),p=function(){function e(t){o(this,e),(0,f.r)(this,t),this.ionRouteDataChanged=(0,f.e)(this,"ionRouteDataChanged",7),this.url=""}return u(e,[{key:"onUpdate",value:function(e){this.ionRouteDataChanged.emit(e)}},{key:"onComponentProps",value:function(e,t){if(e!==t){var r=e?Object.keys(e):[],a=t?Object.keys(t):[];if(r.length===a.length){var o,i=n(r);try{for(i.s();!(o=i.n()).done;){var u=o.value;if(e[u]!==t[u])return void this.onUpdate(e)}}catch(s){i.e(s)}finally{i.f()}}else this.onUpdate(e)}}},{key:"connectedCallback",value:function(){this.ionRouteDataChanged.emit()}}],[{key:"watchers",get:function(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}}]),e}(),d=function(){function e(t){o(this,e),(0,f.r)(this,t),this.ionRouteRedirectChanged=(0,f.e)(this,"ionRouteRedirectChanged",7)}return u(e,[{key:"propDidChange",value:function(){this.ionRouteRedirectChanged.emit()}},{key:"connectedCallback",value:function(){this.ionRouteRedirectChanged.emit()}}],[{key:"watchers",get:function(){return{from:["propDidChange"],to:["propDidChange"]}}}]),e}(),g="root",m="forward",b=function(e){return"/"+e.filter(function(e){return e.length>0}).join("/")},y=function(e){var t,n=[""];if(null!=e){var r=e.indexOf("?");r>-1&&(t=e.substr(r+1),e=e.substr(0,r)),0===(n=e.split("/").map(function(e){return e.trim()}).filter(function(e){return e.length>0})).length&&(n=[""])}return{segments:n,queryString:t}},w=(s=(0,c.Z)(regeneratorRuntime.mark(function e(t,n,r,a){var o,i,u,s,c,f=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o=f.length>4&&void 0!==f[4]&&f[4],i=f.length>5?f[5]:void 0,e.prev=2,u=x(t),!(a>=n.length)&&u){e.next=6;break}return e.abrupt("return",o);case 6:return e.next=8,new Promise(function(e){return(0,l.c)(u,e)});case 8:return s=n[a],e.next=11,u.setRouteId(s.id,s.params,r,i);case 11:return(c=e.sent).changed&&(r=g,o=!0),e.next=15,w(c.element,n,r,a+1,o,i);case 15:if(o=e.sent,e.t0=c.markVisible,!e.t0){e.next=20;break}return e.next=20,c.markVisible();case 20:return e.abrupt("return",o);case 23:return e.prev=23,e.t1=e.catch(2),e.abrupt("return",(console.error(e.t1),!1));case 26:case"end":return e.stop()}},e,null,[[2,23]])})),function(e,t,n,r){return s.apply(this,arguments)}),k=function(){var e=(0,c.Z)(regeneratorRuntime.mark(function e(t){var n,r,a,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=[],a=t;case 2:if(!(r=x(a))){e.next=11;break}return e.next=5,r.getRouteId();case 5:if(o=e.sent){e.next=8;break}return e.abrupt("break",11);case 8:a=o.element,o.element=void 0,n.push(o);case 9:e.next=2;break;case 11:return e.abrupt("return",{ids:n,outlet:r});case 12:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),R=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",x=function(e){if(e){if(e.matches(R))return e;var t=e.querySelector(R);return null!=t?t:void 0}},C=function(e,t){return t.find(function(t){return function(e,t){var n=t.from;if(void 0===t.to||n.length>e.length)return!1;for(var r=0;r<n.length;r++){var a=n[r];if("*"===a)return!0;if(a!==e[r])return!1}return n.length===e.length}(e,t)})},S=function(e,t){for(var n=Math.min(e.length,t.length),r=0;r<n&&e[r].toLowerCase()===t[r].id;r++);return r},P=function(e,t){for(var r,a=new L(e),o=!1,i=0;i<t.length;i++){var u=t[i].path;if(""===u[0])o=!0;else{var s,c=n(u);try{for(c.s();!(s=c.n()).done;){var f=s.value,l=a.next();if(":"===f[0]){if(""===l)return null;((r=r||[])[i]||(r[i]={}))[f.slice(1)]=l}else if(l!==f)return null}}catch(h){c.e(h)}finally{c.f()}o=!1}}return o&&o!==(""===a.next())?null:r?t.map(function(e,t){return{id:e.id,path:e.path,params:E(e.params,r[t]),beforeEnter:e.beforeEnter,beforeLeave:e.beforeLeave}}):t},E=function(e,t){return e||t?Object.assign(Object.assign({},e),t):void 0},D=function(e,t){var r,a=null,o=0,i=n(t);try{for(i.s();!(r=i.n()).done;){var u=r.value,s=P(e,u);if(null!==s){var c=j(s);c>o&&(o=c,a=s)}}}catch(f){i.e(f)}finally{i.f()}return a},j=function(e){var t,r=1,a=1,o=n(e);try{for(o.s();!(t=o.n()).done;){var i,u=n(t.value.path);try{for(u.s();!(i=u.n()).done;){var s=i.value;":"===s[0]?r+=Math.pow(1,a):""!==s&&(r+=Math.pow(2,a)),a++}}catch(c){u.e(c)}finally{u.f()}}}catch(c){o.e(c)}finally{o.f()}return r},L=function(){function e(t){o(this,e),this.path=t.slice()}return u(e,[{key:"next",value:function(){return this.path.length>0?this.path.shift():""}}]),e}(),O=function(e,t){return t in e?e[t]:e.hasAttribute(t)?e.getAttribute(t):null},N=function(e){return Array.from(e.children).filter(function(e){return"ION-ROUTE-REDIRECT"===e.tagName}).map(function(e){var t=O(e,"to");return{from:y(O(e,"from")).segments,to:null==t?void 0:y(t)}})},A=function(e){return U(Z(e))},Z=function e(t){return Array.from(t.children).filter(function(e){return"ION-ROUTE"===e.tagName&&e.component}).map(function(t){var n=O(t,"component");return{path:y(O(t,"url")).segments,id:n.toLowerCase(),params:t.componentProps,beforeLeave:t.beforeLeave,beforeEnter:t.beforeEnter,children:e(t)}})},U=function(e){var t,r=[],a=n(e);try{for(a.s();!(t=a.n()).done;){var o=t.value;I([],r,o)}}catch(i){a.e(i)}finally{a.f()}return r},I=function e(t,r,a){if((t=t.slice()).push({id:a.id,path:a.path,params:a.params,beforeLeave:a.beforeLeave,beforeEnter:a.beforeEnter}),0!==a.children.length){var o,i=n(a.children);try{for(i.s();!(o=i.n()).done;){e(t,r,o.value)}}catch(u){i.e(u)}finally{i.f()}}else r.push(t)},T=function(){function e(t){o(this,e),(0,f.r)(this,t),this.ionRouteWillChange=(0,f.e)(this,"ionRouteWillChange",7),this.ionRouteDidChange=(0,f.e)(this,"ionRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}return u(e,[{key:"componentWillLoad",value:function(){var e=this;return(0,c.Z)(regeneratorRuntime.mark(function t(){var n,r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(document.body)?Promise.resolve():new Promise(function(e){window.addEventListener("ionNavWillLoad",e,{once:!0})});case 2:return t.next=4,e.runGuards(e.getPath());case 4:if(!0===(n=t.sent)){t.next=13;break}if("object"!=typeof n){t.next=11;break}return r=n.redirect,a=y(r),e.setPath(a.segments,g,a.queryString),t.next=11,e.writeNavStateRoot(a.segments,g);case 11:t.next=15;break;case 13:return t.next=15,e.onRoutesChanged();case 15:case"end":return t.stop()}},t)}))()}},{key:"componentDidLoad",value:function(){window.addEventListener("ionRouteRedirectChanged",(0,l.n)(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",(0,l.n)(this.onRoutesChanged.bind(this),100))}},{key:"onPopState",value:function(){var e=this;return(0,c.Z)(regeneratorRuntime.mark(function t(){var n,r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.historyDirection(),r=e.getPath(),t.next=4,e.runGuards(r);case 4:if(!0===(a=t.sent)){t.next=9;break}if("object"==typeof a){t.next=8;break}return t.abrupt("return",!1);case 8:r=y(a.redirect).segments;case 9:return t.abrupt("return",e.writeNavStateRoot(r,n));case 10:case"end":return t.stop()}},t)}))()}},{key:"onBackButton",value:function(e){var t=this;e.detail.register(0,function(e){t.back(),e()})}},{key:"canTransition",value:function(){var e=this;return(0,c.Z)(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.runGuards();case 2:return n=t.sent,t.abrupt("return",!0===n||"object"==typeof n&&n.redirect);case 4:case"end":return t.stop()}},t)}))()}},{key:"push",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"forward",n=arguments.length>2?arguments[2]:void 0,r=this;return(0,c.Z)(regeneratorRuntime.mark(function a(){var o,i;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e.startsWith(".")&&(e=new URL(e,window.location.href).pathname),o=y(e),a.next=4,r.runGuards(o.segments);case 4:if(!0===(i=a.sent)){a.next=9;break}if("object"==typeof i){a.next=8;break}return a.abrupt("return",!1);case 8:o=y(i.redirect);case 9:return a.abrupt("return",(r.setPath(o.segments,t,o.queryString),r.writeNavStateRoot(o.segments,t,n)));case 10:case"end":return a.stop()}},a)}))()}},{key:"back",value:function(){return window.history.back(),Promise.resolve(this.waitPromise)}},{key:"printDebug",value:function(){var e=this;return(0,c.Z)(regeneratorRuntime.mark(function r(){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:(function(e){console.group("[ion-core] ROUTES[".concat(e.length,"]"));var r,a=n(e);try{var o=function(){var e=r.value,n=[];e.forEach(function(e){return n.push.apply(n,t(e.path))});var a=e.map(function(e){return e.id});console.debug("%c ".concat(b(n)),"font-weight: bold; padding-left: 20px","=>\t","(".concat(a.join(", "),")"))};for(a.s();!(r=a.n()).done;)o()}catch(i){a.e(i)}finally{a.f()}console.groupEnd()})(A(e.el)),function(e){console.group("[ion-core] REDIRECTS[".concat(e.length,"]"));var t,r=n(e);try{for(r.s();!(t=r.n()).done;){var a=t.value;a.to&&console.debug("FROM: ","$c ".concat(b(a.from)),"font-weight: bold"," TO: ","$c ".concat(b(a.to.segments)),"font-weight: bold")}}catch(o){r.e(o)}finally{r.f()}console.groupEnd()}(N(e.el));case 1:case"end":return r.stop()}},r)}))()}},{key:"navChanged",value:function(e){var t=this;return(0,c.Z)(regeneratorRuntime.mark(function r(){var a,o,i,u,s;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(!t.busy){r.next=2;break}return r.abrupt("return",(console.warn("[ion-router] router is busy, navChanged was cancelled"),!1));case 2:return r.next=4,k(window.document.body);case 4:if(a=r.sent,o=a.ids,i=a.outlet,u=function(e,t){var r,a=null,o=0,i=e.map(function(e){return e.id}),u=n(t);try{for(u.s();!(r=u.n()).done;){var s=r.value,c=S(i,s);c>o&&(a=s,o=c)}}catch(f){u.e(f)}finally{u.f()}return a?a.map(function(t,n){return{id:t.id,path:t.path,params:E(t.params,e[n]&&e[n].params)}}):null}(o,A(t.el))){r.next=10;break}return r.abrupt("return",(console.warn("[ion-router] no matching URL for ",o.map(function(e){return e.id})),!1));case 10:if(!(s=function(e){var t,r=[],a=n(e);try{for(a.s();!(t=a.n()).done;){var o,i=t.value,u=n(i.path);try{for(u.s();!(o=u.n()).done;){var s=o.value;if(":"===s[0]){var c=i.params&&i.params[s.slice(1)];if(!c)return null;r.push(c)}else""!==s&&r.push(s)}}catch(f){u.e(f)}finally{u.f()}}}catch(f){a.e(f)}finally{a.f()}return r}(u))){r.next=18;break}return t.setPath(s,e),r.next=15,t.safeWriteNavState(i,u,g,s,null,o.length);case 15:r.t0=!0,r.next=19;break;case 18:r.t0=(console.warn("[ion-router] router could not match path because some required param is missing"),!1);case 19:return r.abrupt("return",r.t0);case 20:case"end":return r.stop()}},r)}))()}},{key:"onRedirectChanged",value:function(){var e=this.getPath();e&&C(e,N(this.el))&&this.writeNavStateRoot(e,g)}},{key:"onRoutesChanged",value:function(){return this.writeNavStateRoot(this.getPath(),g)}},{key:"historyDirection",value:function(){var e,t=window;null===t.history.state&&(this.state++,t.history.replaceState(this.state,t.document.title,null===(e=t.document.location)||void 0===e?void 0:e.href));var n=t.history.state,r=this.lastState;return this.lastState=n,n>r||n>=r&&r>0?m:n<r?"back":g}},{key:"writeNavStateRoot",value:function(e,t,n){var r=this;return(0,c.Z)(regeneratorRuntime.mark(function a(){var o,i,u,s,c,f,l,h;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(e){a.next=2;break}return a.abrupt("return",(console.error("[ion-router] URL is not part of the routing set"),!1));case 2:return o=N(r.el),i=C(e,o),u=null,i&&(s=i.to,c=s.segments,f=s.queryString,r.setPath(c,t,f),u=i.from,e=c),l=A(r.el),h=D(e,l),a.abrupt("return",h?r.safeWriteNavState(document.body,h,t,e,u,0,n):(console.error("[ion-router] the path does not match any route"),!1));case 7:case"end":return a.stop()}},a)}))()}},{key:"safeWriteNavState",value:function(e,t,n,r,a){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,i=arguments.length>6?arguments[6]:void 0,u=this;return(0,c.Z)(regeneratorRuntime.mark(function s(){var c,f;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,u.lock();case 2:return c=s.sent,f=!1,s.prev=4,s.next=7,u.writeNavState(e,t,n,r,a,o,i);case 7:f=s.sent,s.next=13;break;case 10:s.prev=10,s.t0=s.catch(4),console.error(s.t0);case 13:return s.abrupt("return",(c(),f));case 14:case"end":return s.stop()}},s,null,[[4,10]])}))()}},{key:"lock",value:function(){var e=this;return(0,c.Z)(regeneratorRuntime.mark(function t(){var n,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.waitPromise,e.waitPromise=new Promise(function(e){return r=e}),t.t0=void 0!==n,!t.t0){t.next=6;break}return t.next=6,n;case 6:return t.abrupt("return",r);case 7:case"end":return t.stop()}},t)}))()}},{key:"runGuards",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getPath(),t=arguments.length>1?arguments[1]:void 0,n=this;return(0,c.Z)(regeneratorRuntime.mark(function r(){var a,o,i,u,s,c;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(void 0===t&&(t=y(n.previousPath).segments),e&&t){r.next=2;break}return r.abrupt("return",!0);case 2:if(a=A(n.el),o=D(t,a),i=o&&o[o.length-1].beforeLeave,r.t0=!i,r.t0){r.next=10;break}return r.next=9,i();case 9:r.t0=r.sent;case 10:if(!1!==(u=r.t0)&&"object"!=typeof u){r.next=13;break}return r.abrupt("return",u);case 13:return s=D(e,a),c=s&&s[s.length-1].beforeEnter,r.abrupt("return",!c||c());case 15:case"end":return r.stop()}},r)}))()}},{key:"writeNavState",value:function(e,t,n,r,a){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,i=arguments.length>6?arguments[6]:void 0,u=this;return(0,c.Z)(regeneratorRuntime.mark(function s(){var c,f;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(!u.busy){s.next=2;break}return s.abrupt("return",(console.warn("[ion-router] router is busy, transition was cancelled"),!1));case 2:return u.busy=!0,(c=u.routeChangeEvent(r,a))&&u.ionRouteWillChange.emit(c),s.next=7,w(e,t,n,o,!1,i);case 7:return f=s.sent,s.abrupt("return",(u.busy=!1,c&&u.ionRouteDidChange.emit(c),f));case 9:case"end":return s.stop()}},s)}))()}},{key:"setPath",value:function(e,n,r){this.state++,function(e,n,r,a,o,i,u){var s=function(e,t,n){var r=b(e);return t&&(r="#"+r),void 0!==n&&(r+="?"+n),r}([].concat(t(y(n).segments),t(a)),r,u);o===m?e.pushState(i,"",s):e.replaceState(i,"",s)}(window.history,this.root,this.useHash,e,n,this.state,r)}},{key:"getPath",value:function(){var e=this;return function(t,n,r){var a=y(e.root).segments,o=r?t.hash.slice(1):t.pathname;return function(e,t){if(e.length>t.length)return null;if(e.length<=1&&""===e[0])return t;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return null;return t.length===e.length?[""]:t.slice(e.length)}(a,y(o).segments)}(window.location,0,this.useHash)}},{key:"routeChangeEvent",value:function(e,t){var n=this.previousPath,r=b(e);return this.previousPath=r,r===n?null:{from:n,redirectedFrom:t?b(t):null,to:r}}},{key:"el",get:function(){return(0,f.i)(this)}}]),e}(),W=function(){function t(e){var n=this;o(this,t),(0,f.r)(this,e),this.routerDirection="forward",this.onClick=function(e){(0,v.o)(n.href,e,n.routerDirection,n.routerAnimation)}}return u(t,[{key:"render",value:function(){var t,n=(0,h.b)(this),r={href:this.href,rel:this.rel,target:this.target};return(0,f.h)(f.H,{onClick:this.onClick,class:(0,v.c)(this.color,(t={},e(t,n,!0),e(t,"ion-activatable",!0),t))},(0,f.h)("a",Object.assign({},r),(0,f.h)("slot",null)))}}]),t}();W.style=":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"}}])}();