!function(){"use strict";function t(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}function o(t,o){for(var n=0;n<o.length;n++){var e=o[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}(self.webpackChunkionic5fullapp_final=self.webpackChunkionic5fullapp_final||[]).push([[4353],{64353:function(n,e,i){i.r(e),i.d(e,{FoodCategoryPageModule:function(){return w}});var r=i(38583),c=i(93092),a=i(52462),d=i(84193),s=i(60476),g=i(29785);function l(t,o){if(1&t&&(s.TgZ(0,"ion-badge",10),s._uU(1),s.qZA()),2&t){var n=s.oxw();s.xp6(1),s.Oqu(n.cart.length)}}var p=function(t){return{"background-image":t}};function u(t,o){if(1&t&&(s.TgZ(0,"ion-col",11),s.TgZ(1,"ion-card",12),s.TgZ(2,"div",13),s.TgZ(3,"h2",14),s._uU(4),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&t){var n=o.$implicit;s.xp6(2),s.MGl("routerLink","/food-list/",n.id,""),s.Q6J("ngStyle",s.VKq(3,p,"url("+n.image+")")),s.xp6(2),s.hij(" ",n.name,"")}}var f,b=[{path:"",component:(f=function(){function n(o,e,i,r){t(this,n),this.foodService=o,this.activatedRoute=e,this.navController=i,this.router=r,this.viewType="1col",this.cart=[],this.cart=this.foodService.getCart()}var e,i,r;return e=n,(i=[{key:"ngOnInit",value:function(){this.categories=this.foodService.getCategories()}},{key:"changeView",value:function(t){this.viewType=t}}])&&o(e.prototype,i),r&&o(e,r),n}(),f.\u0275fac=function(t){return new(t||f)(s.Y36(g.d),s.Y36(d.gz),s.Y36(a.SH),s.Y36(d.F0))},f.\u0275cmp=s.Xpm({type:f,selectors:[["app-food-category"]],decls:15,vars:4,consts:[[1,"ion-no-border"],["slot","start"],["color","success"],["color","success",1,"main-b-header6"],["slot","end"],["routerLink","/food-cart","routerDirection","forward",1,"badge-button"],["name","basket-outline","color","success"],["class","badge-one","color","danger",4,"ngIf"],["fixed","",1,"ion-no-padding"],["size-lg","6","size-md","6","size-sm","6","size","12",4,"ngFor","ngForOf"],["color","danger",1,"badge-one"],["size-lg","6","size-md","6","size-sm","6","size","12"],["tappable","",1,"card-main","card-wide2"],[1,"card-wide2-bg",3,"ngStyle","routerLink"],[1,"card-s-wide-title"]],template:function(t,o){1&t&&(s.TgZ(0,"ion-header",0),s.TgZ(1,"ion-toolbar"),s.TgZ(2,"ion-buttons",1),s._UZ(3,"ion-back-button",2),s.qZA(),s.TgZ(4,"ion-title",3),s._uU(5,"Category"),s.qZA(),s.TgZ(6,"ion-buttons",4),s.TgZ(7,"ion-button",5),s._UZ(8,"ion-icon",6),s.YNc(9,l,2,1,"ion-badge",7),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(10,"ion-content"),s.TgZ(11,"ion-grid",8),s.TgZ(12,"ion-row"),s.YNc(13,u,5,5,"ion-col",9),s.ALo(14,"async"),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(9),s.Q6J("ngIf",o.cart.length>0),s.xp6(4),s.Q6J("ngForOf",s.lcZ(14,2,o.categories)))},directives:[a.Gu,a.sr,a.Sm,a.oU,a.cs,a.wd,a.YG,a.YI,d.rH,a.gu,r.O5,a.W2,a.jY,a.Nd,r.sg,a.yp,a.wI,a.PM,r.PC],pipes:[r.Ov],styles:['ion-toolbar[_ngcontent-%COMP%]:last-child.show-liner{--border-width: 0 0 .55px}ion-col[_ngcontent-%COMP%]{padding:5px 5px 0}.content[_ngcontent-%COMP%]{background-color:#ddd}ion-card.cardGrid[_ngcontent-%COMP%]{position:relative;text-align:center;margin:12px 10px 0 0!important;width:100%!important}ion-card[_ngcontent-%COMP%]{border-radius:9px!important}.card-wide[_ngcontent-%COMP%]{height:157px!important;margin:10px 10px 0!important;background-color:#ddd}.card-wide-bg[_ngcontent-%COMP%]:before{content:" ";position:absolute;left:0;right:0;top:0;bottom:0;background-size:cover;background-position:center}.card-wide-bg[_ngcontent-%COMP%]{position:relative;height:157px;background-color:#ddd;background-size:cover;background-position:center}.card-wide-bg[_ngcontent-%COMP%]   .card-wide-title[_ngcontent-%COMP%]{width:100px;padding:0 5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:22px;font-style:roboto;font-weight:600;color:#fff;position:absolute;top:25%;text-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);width:100%;text-align:center}.card-wide-bg[_ngcontent-%COMP%]   .card-wide-sub-title[_ngcontent-%COMP%]{width:100px;padding:0 5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:18px;font-style:roboto;font-weight:400;color:#fff;position:absolute;top:42%;text-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);width:100%;text-align:center}']}),f)}],h=function(){var o=function o(){t(this,o)};return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=s.oAB({type:o}),o.\u0275inj=s.cJS({imports:[[d.Bz.forChild(b)],d.Bz]}),o}(),w=function(){var o=function o(){t(this,o)};return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=s.oAB({type:o}),o.\u0275inj=s.cJS({imports:[[r.ez,c.u5,a.Pc,h]]}),o}()}}])}();