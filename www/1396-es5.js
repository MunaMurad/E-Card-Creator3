!function(){"use strict";function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var o=0;o<e.length;o++){var t=e[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}(self.webpackChunkionic5fullapp_final=self.webpackChunkionic5fullapp_final||[]).push([[1396],{11396:function(o,t,i){i.r(t),i.d(t,{SidemenuPageModule:function(){return h}});var r=i(38583),c=i(93092),a=i(52462),l=i(84193),d=i(60476),u=function(n){return[n]};function s(n,e){if(1&n){var o=d.EpF();d.TgZ(0,"ion-menu-toggle",7),d.TgZ(1,"ion-item",8),d.NdJ("click",function(){var n=d.CHM(o).index;return d.oxw().selectedIndex=n}),d._UZ(2,"ion-icon",9),d.TgZ(3,"ion-label"),d._uU(4),d.qZA(),d.qZA(),d.qZA()}if(2&n){var t=e.$implicit,i=e.index,r=d.oxw();d.xp6(1),d.ekj("selected",r.selectedIndex==i),d.Q6J("routerLink",d.VKq(6,u,t.url)),d.xp6(1),d.Q6J("ios",t.icon+"-outline")("md",t.icon+"-sharp"),d.xp6(2),d.Oqu(t.title)}}function g(n,e){if(1&n&&(d.TgZ(0,"ion-item",10),d._UZ(1,"ion-icon",11),d.TgZ(2,"ion-label"),d._uU(3),d.qZA(),d.qZA()),2&n){var o=e.$implicit;d.xp6(3),d.Oqu(o)}}var p,m=[{path:"",component:(p=function(){function o(){n(this,o),this.selectedIndex=0,this.appPages=[{title:"Nearby places",url:"/folder/Inbox",icon:"mail"},{title:"City guide app",url:"/side-menu/travel",icon:"mail"},{title:"Food delivery app",url:"/side-menu/food",icon:""},{title:"Shopping app",url:"/side-menu/shopping",icon:""},{title:"Real estate app",url:"/side-menu/realestate",icon:""},{title:"Radio station app",url:"/side-menu/radio",icon:""},{title:"chat",url:"/side-menu/chat",icon:""},{title:"feed",url:"/side-menu/feed",icon:""},{title:"intro",url:"/side-menu/intro",icon:""},{title:"image gallery",url:"/side-menu/gallery",icon:""}],this.labels=["Family","Friends","Notes","Work","Travel","Reminders"]}var t,i,r;return t=o,(i=[{key:"ngOnInit",value:function(){}}])&&e(t.prototype,i),r&&e(t,r),o}(),p.\u0275fac=function(n){return new(n||p)},p.\u0275cmp=d.Xpm({type:p,selectors:[["app-sidemenu"]],decls:14,vars:2,consts:[["contentId","main-content"],["contentId","main-content","type","overlay"],["id","inbox-list"],["auto-hide","false",4,"ngFor","ngForOf"],["id","labels-list"],["lines","none",4,"ngFor","ngForOf"],["id","main-content"],["auto-hide","false"],["routerDirection","root","lines","none","detail","false",3,"routerLink","click"],["slot","start",3,"ios","md"],["lines","none"],["slot","start","ios","bookmark-outline","md","bookmark-sharp"]],template:function(n,e){1&n&&(d.TgZ(0,"ion-split-pane",0),d.TgZ(1,"ion-menu",1),d.TgZ(2,"ion-content"),d.TgZ(3,"ion-list",2),d.TgZ(4,"ion-list-header"),d._uU(5,"Inbox"),d.qZA(),d.TgZ(6,"ion-note"),d._uU(7,"hi@ionicframework.com"),d.qZA(),d.YNc(8,s,5,8,"ion-menu-toggle",3),d.qZA(),d.TgZ(9,"ion-list",4),d.TgZ(10,"ion-list-header"),d._uU(11,"Labels"),d.qZA(),d.YNc(12,g,4,1,"ion-item",5),d.qZA(),d.qZA(),d.qZA(),d._UZ(13,"ion-router-outlet",6),d.qZA()),2&n&&(d.xp6(8),d.Q6J("ngForOf",e.appPages),d.xp6(4),d.Q6J("ngForOf",e.labels))},directives:[a.jI,a.z0,a.W2,a.q_,a.yh,a.uN,r.sg,a.jP,a.zc,a.Ie,a.YI,l.rH,a.gu,a.Q$],styles:["ion-menu[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]{--padding-top: 20px;--padding-bottom: 20px;--background: var(--ion-item-background, var(--ion-background-color, #fff))}ion-menu[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--transition: none}ion-item.selected[_ngcontent-%COMP%]{--color: var(--ion-color-primary)}ion-menu.md[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{padding:20px 0}ion-menu.md[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]{padding-left:18px;padding-right:18px;text-transform:uppercase;letter-spacing:.1em;font-weight:450}ion-menu.md[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--padding-start: 18px;margin-right:10px;border-radius:0 50px 50px 0;font-weight:500}ion-menu.md[_ngcontent-%COMP%]   ion-item.selected[_ngcontent-%COMP%]{--background: rgba(var(--ion-color-primary-rgb), .14)}ion-menu.md[_ngcontent-%COMP%]   ion-item.selected[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-primary)}ion-menu.md[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%], ion-menu.md[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#5f6368;color:var(--ion-color-step-650, #5f6368)}ion-menu.md[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]:not(:last-of-type){border-bottom:1px solid #d7d8da;border-bottom:1px solid var(--ion-color-step-150, #d7d8da)}ion-menu.ios[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]{padding-left:16px;padding-right:16px;margin-bottom:8px}ion-menu.ios[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{padding:20px 0 0}ion-menu.ios[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--padding-start: 16px;--min-height: 50px}ion-menu.ios[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:24px;color:#73849a}ion-menu.ios[_ngcontent-%COMP%]   ion-item.selected[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-primary)}"]}),p),children:[{path:"food",loadChildren:function(){return i.e(8666).then(i.bind(i,78666)).then(function(n){return n.FoodTabsPageModule})}},{path:"food-category",loadChildren:function(){return i.e(4353).then(i.bind(i,64353)).then(function(n){return n.FoodCategoryPageModule})}},{path:"food-list",loadChildren:function(){return i.e(6410).then(i.bind(i,66410)).then(function(n){return n.FoodListPageModule})}},{path:"food-detail",loadChildren:function(){return i.e(8252).then(i.bind(i,58252)).then(function(n){return n.FoodDetailPageModule})}},{path:"food-cart",loadChildren:function(){return i.e(1710).then(i.bind(i,41710)).then(function(n){return n.FoodCartPageModule})}}]}],f=function(){var e=function e(){n(this,e)};return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=d.oAB({type:e}),e.\u0275inj=d.cJS({imports:[[l.Bz.forChild(m)],l.Bz]}),e}(),h=function(){var e=function e(){n(this,e)};return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=d.oAB({type:e}),e.\u0275inj=d.cJS({imports:[[r.ez,c.u5,a.Pc,f]]}),e}()}}])}();