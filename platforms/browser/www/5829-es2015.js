"use strict";(self.webpackChunkionic5fullapp_final=self.webpackChunkionic5fullapp_final||[]).push([[5829],{55829:function(t,n,o){o.r(n),o.d(n,{RealListPageModule:function(){return M}});var e=o(38583),i=o(3679),r=o(52462),a=o(17410),c=o(64762),g=o(2378),p=o(36696),l=o(17806),s=o(62272);function d(t,n){1&t&&(s.TgZ(0,"div",22),s._uU(1,"New"),s.qZA())}function h(t,n){if(1&t&&(s.TgZ(0,"div",23),s._uU(1),s.qZA()),2&t){const t=s.oxw().$implicit;s.xp6(1),s.Oqu(t.status_message)}}const u=function(t){return{"background-image":t}};function m(t,n){if(1&t&&(s.TgZ(0,"ion-col",12),s.TgZ(1,"ion-card",13),s.YNc(2,d,2,0,"div",14),s.YNc(3,h,2,1,"div",15),s._UZ(4,"div",16),s.TgZ(5,"ion-card-content",17),s.TgZ(6,"ion-label"),s.TgZ(7,"ion-text",18),s.TgZ(8,"h2",19),s._uU(9),s.ALo(10,"currency"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(11,"ion-label"),s.TgZ(12,"h3",20),s._uU(13),s.qZA(),s.qZA(),s.TgZ(14,"ion-label",21),s.TgZ(15,"h3",20),s._uU(16),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&t){const t=n.$implicit;s.xp6(1),s.MGl("routerLink","/real-detail/",t.id,""),s.xp6(1),s.Q6J("ngIf",t.new),s.xp6(1),s.Q6J("ngIf",0==t.status),s.xp6(1),s.Q6J("ngStyle",s.VKq(12,u,"url("+t.image_header+")")),s.xp6(5),s.hij(" Price: ",s.gM2(10,7,t.price,"USD","symbol","1.0-0")," "),s.xp6(4),s.Oqu(t.short_features),s.xp6(3),s.hij(" ",t.location," ")}}function b(t,n){if(1&t&&(s.TgZ(0,"div"),s.TgZ(1,"div",10),s.TgZ(2,"ion-row"),s.YNc(3,m,17,14,"ion-col",11),s.ALo(4,"async"),s.qZA(),s.qZA(),s.qZA()),2&t){const t=s.oxw();s.xp6(3),s.Q6J("ngForOf",s.lcZ(4,1,t.buyItems))}}function f(t,n){1&t&&(s.TgZ(0,"div",22),s._uU(1,"New"),s.qZA())}function x(t,n){if(1&t&&(s.TgZ(0,"div",23),s._uU(1),s.qZA()),2&t){const t=s.oxw().$implicit;s.xp6(1),s.Oqu(t.status_message)}}function _(t,n){if(1&t&&(s.TgZ(0,"ion-col",12),s.TgZ(1,"ion-card",13),s.YNc(2,f,2,0,"div",14),s.YNc(3,x,2,1,"div",15),s._UZ(4,"div",16),s.TgZ(5,"ion-card-content",17),s.TgZ(6,"ion-label"),s.TgZ(7,"ion-text",18),s.TgZ(8,"h2",19),s._uU(9),s.ALo(10,"currency"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(11,"ion-label"),s.TgZ(12,"h3",20),s._uU(13),s.qZA(),s.qZA(),s.TgZ(14,"ion-label",21),s.TgZ(15,"h3",20),s._uU(16),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&t){const t=n.$implicit;s.xp6(1),s.MGl("routerLink","/real-detail/",t.id,""),s.xp6(1),s.Q6J("ngIf",t.new),s.xp6(1),s.Q6J("ngIf",0==t.status),s.xp6(1),s.Q6J("ngStyle",s.VKq(12,u,"url("+t.image_header+")")),s.xp6(5),s.hij(" Rent: ",s.gM2(10,7,t.price,"USD","symbol","1.0-0")," / m "),s.xp6(4),s.Oqu(t.short_features),s.xp6(3),s.hij(" ",t.location," ")}}function w(t,n){if(1&t&&(s.TgZ(0,"div"),s.TgZ(1,"div",10),s.TgZ(2,"ion-row"),s.YNc(3,_,17,14,"ion-col",11),s.ALo(4,"async"),s.qZA(),s.qZA(),s.qZA()),2&t){const t=s.oxw();s.xp6(3),s.Q6J("ngForOf",s.lcZ(4,1,t.rentItems))}}const Z=[{path:"",component:(()=>{class t{constructor(t,n,o,e,i){this.realestateService=t,this.activatedRoute=n,this.navController=o,this.router=e,this.modalController=i,this.footerScrollConfig={cssProperty:"margin-bottom",maxValue:void 0},this.headerScrollConfig={cssProperty:"margin-top",maxValue:45},this.viewType="buy"}ngOnInit(){this.buyItems=this.realestateService.getHouseByType("buy"),this.rentItems=this.realestateService.getHouseByType("rent")}openMap(){return(0,c.__awaiter)(this,void 0,void 0,function*(){return yield(yield this.modalController.create({component:p.o,cssClass:"",componentProps:{}})).present()})}openSearchModal(){return(0,c.__awaiter)(this,void 0,void 0,function*(){return yield(yield this.modalController.create({component:l.f,cssClass:"",componentProps:{}})).present()})}}return t.\u0275fac=function(n){return new(n||t)(s.Y36(g.f),s.Y36(a.gz),s.Y36(r.SH),s.Y36(a.F0),s.Y36(r.IN))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-real-list"]],decls:17,vars:3,consts:[[1,"ion-no-border"],["mode","ios"],["slot","start"],["mode","md","color","greensea","defaultHref","#"],["mode","ios","placeholder","Search by Location, Area or Pin Code..","search-icon","search-outline",3,"click"],["mode","md","value","buy","color","greensea",3,"ngModel","ngModelChange"],["value","buy"],["value","rent"],["fixed","",1,"ion-no-padding"],[4,"ngIf"],[1,"margin-top-15"],["size-lg","4","size-md","4","size-sm","6","size","12",4,"ngFor","ngForOf"],["size-lg","4","size-md","4","size-sm","6","size","12"],[1,"real-card2","slide-up",3,"routerLink"],["class","real-tags",4,"ngIf"],["class","ribbon pop-in",4,"ngIf"],[1,"real-card2-bg",3,"ngStyle"],[1,"padding-all-15","margin-bottom-5"],["color","black"],[1,"margin-top-0","main-b-header7"],[1,"margin-top-5","main-header7"],["text-wrap",""],[1,"real-tags"],[1,"ribbon","pop-in"]],template:function(t,n){1&t&&(s.TgZ(0,"ion-header",0),s.TgZ(1,"ion-toolbar",1),s.TgZ(2,"ion-buttons",2),s._UZ(3,"ion-back-button",3),s.qZA(),s.TgZ(4,"ion-searchbar",4),s.NdJ("click",function(){return n.openSearchModal()}),s.qZA(),s.qZA(),s.TgZ(5,"ion-toolbar"),s.TgZ(6,"ion-segment",5),s.NdJ("ngModelChange",function(t){return n.viewType=t}),s.TgZ(7,"ion-segment-button",6),s.TgZ(8,"ion-label"),s._uU(9,"Buy"),s.qZA(),s.qZA(),s.TgZ(10,"ion-segment-button",7),s.TgZ(11,"ion-label"),s._uU(12,"Rent"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(13,"ion-content"),s.TgZ(14,"ion-grid",8),s.YNc(15,b,5,3,"div",9),s.YNc(16,w,5,3,"div",9),s.qZA(),s.qZA()),2&t&&(s.xp6(6),s.Q6J("ngModel",n.viewType),s.xp6(9),s.Q6J("ngIf","buy"===n.viewType),s.xp6(1),s.Q6J("ngIf","rent"===n.viewType))},directives:[r.Gu,r.sr,r.Sm,r.oU,r.cs,r.VI,r.j9,r.cJ,r.QI,i.JJ,i.On,r.GO,r.Q$,r.W2,r.jY,e.O5,r.Nd,e.sg,r.wI,r.PM,r.YI,a.rH,e.PC,r.FN,r.yW],pipes:[e.Ov,e.H9],styles:['ion-item[_ngcontent-%COMP%]{--background:#F9F9F9}ion-searchbar[_ngcontent-%COMP%]{padding:0 18px}ion-searchbar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:20px!important}.searchbar-input-container[_ngcontent-%COMP%]{height:43px!important}ion-item[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#fff;font-size:40px}ion-searchbar[_ngcontent-%COMP%]{padding:0 10px 10px!important;height:50px!important}.agent-icon[_ngcontent-%COMP%]{display:inline-block;margin:0 5px!important}.transparent[_ngcontent-%COMP%]{--background: rgba(0,0,0,0);--border-color: rgba(0,0,0,0)}h4[_ngcontent-%COMP%]{font-family:roboto;color:#464646!important;letter-spacing:-1px;font-size:22px;font-weight:lighter}ion-chip[_ngcontent-%COMP%]{padding:10px!important;border-radius:8px!important;height:35px;margin-left:11px}.horizontal-scroll[_ngcontent-%COMP%]{margin-left:12px;white-space:nowrap;height:auto;overflow-X:scroll;overflow-y:auto}.imgTall[_ngcontent-%COMP%]{width:140px!important;height:260px!important}.card-tall[_ngcontent-%COMP%]{position:relative;width:120px!important;height:315px!important;margin:0 5px!important}.div-tall-bg[_ngcontent-%COMP%]:before{content:" ";position:absolute;left:0;right:0;top:0;bottom:0;background-size:cover;background-position:center}.div-tall-bg[_ngcontent-%COMP%]{border-radius:9px!important;position:relative;width:120px;height:245px;background-color:#ddd;background-size:cover;background-position:center}.card2[_ngcontent-%COMP%]{position:relative;width:149px!important;height:92px!important;margin:0 5px!important;background-color:#ddd;border-radius:8px!important}.card2-bg[_ngcontent-%COMP%]:before{content:" ";position:absolute;left:0;right:0;top:0;bottom:0;background-size:cover;background-position:center}.card2-bg[_ngcontent-%COMP%]{position:relative;height:92px;background-size:cover;background-position:center}.card2-bg[_ngcontent-%COMP%]   .card2-title[_ngcontent-%COMP%]{width:100px;padding:0 5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-style:roboto;font-size:16px;font-weight:400;color:#fff;position:absolute;top:30%;text-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);width:100%;text-align:center}.card2-bg[_ngcontent-%COMP%]   .card2-star[_ngcontent-%COMP%]{width:179px!important;height:77px!important;padding:0 5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-style:roboto;font-size:17px;font-weight:600;color:#fff;position:absolute;top:60%;text-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);width:100%;text-align:center}.card3[_ngcontent-%COMP%]{position:relative;width:201px!important;height:357px!important;margin:0 5px!important}.card3-bg[_ngcontent-%COMP%]:before{content:" ";position:absolute;left:0;right:0;top:0;bottom:0;background-size:cover;background-position:center}.card3-bg[_ngcontent-%COMP%]{position:relative;width:100%;height:252px;background-color:#ddd;background-size:cover;background-position:center;border-radius:8px!important}.card3-bg[_ngcontent-%COMP%]   .card3-title[_ngcontent-%COMP%]{width:100px;padding:0 15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:17px;font-weight:600;color:#fff;position:absolute;top:25%;text-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);width:100%;text-align:center}.segment-card[_ngcontent-%COMP%]{display:flex;overflow-x:scroll;background-color:#00f;height:200px}.segment-card[_ngcontent-%COMP%]   .segment-item[_ngcontent-%COMP%]{-webkit-margin-start:0px!important;margin-inline-start:0px!important;display:inline-block!important;min-width:300px!important;height:120px!important;width:auto!important}.segment-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{position:absolute;top:36%;font-size:2em;width:100%;font-weight:bold;color:#fff}.segment-card[_ngcontent-%COMP%]   .card-subtitle[_ngcontent-%COMP%]{font-size:1em;position:absolute;top:52%;width:100%;color:#fff}.secondary-card[_ngcontent-%COMP%]{display:flex;overflow-x:scroll;background-color:red;height:280px}.secondary-card[_ngcontent-%COMP%]   .secondary-item[_ngcontent-%COMP%]{-webkit-margin-start:0px!important;margin-inline-start:0px!important;display:inline-block!important;min-width:300px!important;height:120px!important;width:auto!important}.secondary-card[_ngcontent-%COMP%]   .secondary-card-title[_ngcontent-%COMP%]{position:absolute;top:36%;font-size:2em;width:100%;font-weight:bold;color:#fff}.secondary-card[_ngcontent-%COMP%]   .secondary-card-subtitle[_ngcontent-%COMP%]{font-size:1em;position:absolute;top:52%;width:100%;color:#fff}.thumnails[_ngcontent-%COMP%]{overflow-x:scroll;overflow-y:hidden}.thumnails[_ngcontent-%COMP%]   .list-thumbnail[_ngcontent-%COMP%]{height:100%;white-space:nowrap}.thumnails[_ngcontent-%COMP%]   .list-thumbnail[_ngcontent-%COMP%]   .img-thumb[_ngcontent-%COMP%]{display:inline-block;border:1px solid #ddd;border-radius:4px;padding:3px;height:50px;margin:0 2px 0 0;line-height:60px}.thumnails[_ngcontent-%COMP%]   .list-thumbnail[_ngcontent-%COMP%]   .selected-img[_ngcontent-%COMP%]{border:2px solid red}[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.container[_ngcontent-%COMP%]{width:100px;background-color:green;overflow:hidden;white-space:nowrap}.container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.container[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]{overflow:auto}ion-avatar[_ngcontent-%COMP%]{background-color:#61cfe9;border-radius:50%;display:flex;align-items:center;justify-content:center;min-width:60px;min-height:60px}ion-avatar[item-start][_ngcontent-%COMP%]{margin:8px 16px 8px 0}.transition[_ngcontent-%COMP%]{transition:background-size .3s ease-in}.hide[_ngcontent-%COMP%]{display:none!important}.detail-header[_ngcontent-%COMP%]:before{content:" ";position:absolute;left:0;right:0;top:0;bottom:0;background:linear-gradient(to bottom,rgba(0,0,0,0) 68%,rgba(0,0,0,.65) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#00000000",endColorstr="#a6000000",GradientType=0)}.detail-header[_ngcontent-%COMP%]{background-image:url(https://media.fazwaz.com/site-config/1/c/cover13-banner-homepage.jpg);background-position:center center;background-repeat:no-repeat;position:relative;height:300px!important;background-size:cover}.detail-header[_ngcontent-%COMP%]   .detail-title[_ngcontent-%COMP%]{position:absolute;left:50%;margin:-75px 0 0 -135px;text-align:center;bottom:20px;min-width:350px;max-width:600px;color:#fff}.detail-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{color:#fff;--background: rgba(0, 0, 0, 0);--border-color: rgba(0, 0, 0, 0)}.detail-header[_ngcontent-%COMP%]   .detail-price[_ngcontent-%COMP%]{color:#fff;font-size:16px;font-weight:bold;position:absolute;left:20px;bottom:20px;text-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}']}),t})()}];let C=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[a.Bz.forChild(Z)],a.Bz]}),t})(),M=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[e.ez,i.u5,r.Pc,C]]}),t})()}}]);