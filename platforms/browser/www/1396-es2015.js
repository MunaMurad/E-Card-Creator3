"use strict";(self.webpackChunkionic5fullapp_final=self.webpackChunkionic5fullapp_final||[]).push([[1396],{11396:function(n,o,e){e.r(o),e.d(o,{SidemenuPageModule:function(){return u}});var t=e(38583),i=e(3679),r=e(52462),l=e(17410),c=e(62272);const a=function(n){return[n]};function d(n,o){if(1&n){const n=c.EpF();c.TgZ(0,"ion-menu-toggle",7),c.TgZ(1,"ion-item",8),c.NdJ("click",function(){const o=c.CHM(n).index;return c.oxw().selectedIndex=o}),c._UZ(2,"ion-icon",9),c.TgZ(3,"ion-label"),c._uU(4),c.qZA(),c.qZA(),c.qZA()}if(2&n){const n=o.$implicit,e=o.index,t=c.oxw();c.xp6(1),c.ekj("selected",t.selectedIndex==e),c.Q6J("routerLink",c.VKq(6,a,n.url)),c.xp6(1),c.Q6J("ios",n.icon+"-outline")("md",n.icon+"-sharp"),c.xp6(2),c.Oqu(n.title)}}function s(n,o){if(1&n&&(c.TgZ(0,"ion-item",10),c._UZ(1,"ion-icon",11),c.TgZ(2,"ion-label"),c._uU(3),c.qZA(),c.qZA()),2&n){const n=o.$implicit;c.xp6(3),c.Oqu(n)}}const g=[{path:"",component:(()=>{class n{constructor(){this.selectedIndex=0,this.appPages=[{title:"Nearby places",url:"/folder/Inbox",icon:"mail"},{title:"City guide app",url:"/side-menu/travel",icon:"mail"},{title:"Food delivery app",url:"/side-menu/food",icon:""},{title:"Shopping app",url:"/side-menu/shopping",icon:""},{title:"Real estate app",url:"/side-menu/realestate",icon:""},{title:"Radio station app",url:"/side-menu/radio",icon:""},{title:"chat",url:"/side-menu/chat",icon:""},{title:"feed",url:"/side-menu/feed",icon:""},{title:"intro",url:"/side-menu/intro",icon:""},{title:"image gallery",url:"/side-menu/gallery",icon:""}],this.labels=["Family","Friends","Notes","Work","Travel","Reminders"]}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=c.Xpm({type:n,selectors:[["app-sidemenu"]],decls:12,vars:2,consts:[["contentId","main-content"],["contentId","main-content","type","overlay"],["id","inbox-list"],["auto-hide","false",4,"ngFor","ngForOf"],["id","labels-list"],["lines","none",4,"ngFor","ngForOf"],["id","main-content"],["auto-hide","false"],["routerDirection","root","lines","none","detail","false",3,"routerLink","click"],["slot","start",3,"ios","md"],["lines","none"],["slot","start","ios","bookmark-outline","md","bookmark-sharp"]],template:function(n,o){1&n&&(c.TgZ(0,"ion-split-pane",0),c.TgZ(1,"ion-menu",1),c.TgZ(2,"ion-content"),c.TgZ(3,"ion-list",2),c.TgZ(4,"ion-list-header"),c._uU(5,"Inbox"),c.qZA(),c.YNc(6,d,5,8,"ion-menu-toggle",3),c.qZA(),c.TgZ(7,"ion-list",4),c.TgZ(8,"ion-list-header"),c._uU(9,"Labels"),c.qZA(),c.YNc(10,s,4,1,"ion-item",5),c.qZA(),c.qZA(),c.qZA(),c._UZ(11,"ion-router-outlet",6),c.qZA()),2&n&&(c.xp6(6),c.Q6J("ngForOf",o.appPages),c.xp6(4),c.Q6J("ngForOf",o.labels))},directives:[r.jI,r.z0,r.W2,r.q_,r.yh,t.sg,r.jP,r.zc,r.Ie,r.YI,l.rH,r.gu,r.Q$],styles:["ion-menu[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]{--padding-top: 20px;--padding-bottom: 20px;--background: var(--ion-item-background, var(--ion-background-color, #fff))}ion-menu[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--transition: none}ion-item.selected[_ngcontent-%COMP%]{--color: var(--ion-color-primary)}ion-menu.md[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{padding:20px 0}ion-menu.md[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]{padding-left:18px;padding-right:18px;text-transform:uppercase;letter-spacing:.1em;font-weight:450}ion-menu.md[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--padding-start: 18px;margin-right:10px;border-radius:0 50px 50px 0;font-weight:500}ion-menu.md[_ngcontent-%COMP%]   ion-item.selected[_ngcontent-%COMP%]{--background: rgba(var(--ion-color-primary-rgb), .14)}ion-menu.md[_ngcontent-%COMP%]   ion-item.selected[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-primary)}ion-menu.md[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%], ion-menu.md[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#5f6368;color:var(--ion-color-step-650, #5f6368)}ion-menu.md[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]:not(:last-of-type){border-bottom:1px solid #d7d8da;border-bottom:1px solid var(--ion-color-step-150, #d7d8da)}ion-menu.ios[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]{padding-left:16px;padding-right:16px;margin-bottom:8px}ion-menu.ios[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{padding:20px 0 0}ion-menu.ios[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--padding-start: 16px;--min-height: 50px}ion-menu.ios[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:24px;color:#73849a}ion-menu.ios[_ngcontent-%COMP%]   ion-item.selected[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-primary)}"]}),n})(),children:[{path:"food",loadChildren:()=>e.e(8666).then(e.bind(e,78666)).then(n=>n.FoodTabsPageModule)},{path:"food-category",loadChildren:()=>e.e(4353).then(e.bind(e,64353)).then(n=>n.FoodCategoryPageModule)},{path:"food-list",loadChildren:()=>e.e(6410).then(e.bind(e,66410)).then(n=>n.FoodListPageModule)},{path:"food-detail",loadChildren:()=>e.e(8252).then(e.bind(e,58252)).then(n=>n.FoodDetailPageModule)},{path:"food-cart",loadChildren:()=>e.e(1710).then(e.bind(e,41710)).then(n=>n.FoodCartPageModule)}]}];let p=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=c.oAB({type:n}),n.\u0275inj=c.cJS({imports:[[l.Bz.forChild(g)],l.Bz]}),n})(),u=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=c.oAB({type:n}),n.\u0275inj=c.cJS({imports:[[t.ez,i.u5,r.Pc,p]]}),n})()}}]);