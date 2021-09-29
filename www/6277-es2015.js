"use strict";(self.webpackChunkionic5fullapp_final=self.webpackChunkionic5fullapp_final||[]).push([[6277],{46277:function(t,n,o){o.r(n),o.d(n,{TravelDetailPageModule:function(){return A}});var e=o(38583),i=o(93092),a=o(52462),r=o(84193),l=o(64762),c=o(94072),s=o(80072),g=o(60476),p=o(73071);function d(t,n){if(1&t&&(g._UZ(0,"ion-icon",34),g.ALo(1,"async")),2&t){const t=n.$implicit,o=g.oxw();let e;g.Q6J("name",t<(null==(e=g.lcZ(1,1,o.place))?null:e.rating)?"star":"star-outline")}}function u(t,n){if(1&t&&(g.TgZ(0,"ion-chip",35),g.TgZ(1,"div"),g.TgZ(2,"ion-label"),g._uU(3),g.qZA(),g.qZA(),g.qZA()),2&t){const t=n.$implicit;g.Q6J("color",t.color),g.xp6(3),g.Oqu(t.name)}}function h(t,n){if(1&t){const t=g.EpF();g.TgZ(0,"div",36),g.TgZ(1,"img",37),g.NdJ("click",function(){const n=g.CHM(t).index;return g.oxw().openImageViewer(n)}),g.qZA(),g.qZA()}if(2&t){const t=n.$implicit;g.xp6(1),g.Q6J("src",t,g.LSH)}}const m=function(t){return{"background-image":t}},Z=function(){return[0,1,2,3,4]},f=[{path:"",component:(()=>{class t{constructor(t,n,o,e,i,a){this.travelService=t,this.userService=n,this.activatedRoute=o,this.navController=e,this.router=i,this.modalController=a,this.showToolbar=!1,this.showColor=!1,this.showTitle=!1,this.transition=!1,this.placeArray=[],this.userAuth=!1,this.favorite=!1,this.heartType="heart-empty",this.placeId=this.activatedRoute.snapshot.paramMap.get("placeId")}ngOnInit(){return(0,l.__awaiter)(this,void 0,void 0,function*(){yield this.getPlaceDetail(),yield this.getPlaceReview()})}ngOnDestroy(){}getPlaceDetail(){return(0,l.__awaiter)(this,void 0,void 0,function*(){this.userAuth=yield this.userService.isLoggedIn(),this.userId=yield this.userService.getUserId(),this.place=yield this.travelService.getPlacesDetail(this.placeId),yield this.place.subscribe(t=>{this.placeArray=t,this.heartType=t.favorite.includes(this.userId)?"heart":"heart-empty"})})}toggleHeart(){"heart-empty"==this.heartType?(console.log("Heart ON"),this.travelService.addFavorite(this.placeId,this.placeArray.name,this.placeArray.rating,this.placeArray.image_header)):(console.log("Heart OFF"),this.travelService.removeFavorite(this.placeId))}getPlaceReview(){console.log("###########call  getReview()"),this.reviews=this.travelService.getReviews(this.placeId,5)}onScroll(t){if(t&&t.detail&&t.detail.scrollTop){const n=t.detail.scrollTop;this.transition=!0,this.showToolbar=n>=160,this.showTitle=n>=160}else this.transition=!1}openImageViewer(t){this.modalController.create({component:c.f,cssClass:"fullscreen-modal",componentProps:{data:this.placeArray,index:t}}).then(t=>{t.present()})}}return t.\u0275fac=function(n){return new(n||t)(g.Y36(s.r),g.Y36(p.K),g.Y36(r.gz),g.Y36(a.SH),g.Y36(r.F0),g.Y36(a.IN))},t.\u0275cmp=g.Xpm({type:t,selectors:[["app-travel-detail"]],decls:83,vars:42,consts:[["fullscreen","true",3,"scrollEvents","ionScroll"],["slot","fixed",1,"ion-no-border"],[1,"first"],["mode","md","slot","start"],["color","light","defaultHref","#"],["color","light",1,"main-header4"],["color","light","slot","end"],["color","light"],["slot","icon-only","name","heart-outline"],[1,"detail-header",3,"ngStyle"],["fixed","",1,"ion-no-padding"],[1,"travel_space1"],["lines","none"],["text-wrap",""],[1,"travel_header1","detail-name"],["color","medium"],[1,"travel_header3","detail-price"],["slot","end"],["style","font-size: 18px !important;","color","warning",3,"name",4,"ngFor","ngForOf"],["size-lg","8","size-md","12","size-sm","12","size","12"],[1,"horizontal-scroll","ion-margin-bottom"],["outline","true",3,"color",4,"ngFor","ngForOf"],[1,"travel_space4"],[1,"detail-horizontal-scroll","ion-margin-top","ion-margin-bottom"],["class","img-gallery margin",4,"ngFor","ngForOf"],["size-lg","4","size-md","12","size-sm","12","size","12"],[1,"ion-margin-bottom"],[1,"main-header5"],[1,"ion-margin-top","ion-margin-bottom"],["slot","start","name","location-outline"],["slot","start","name","mail-outline"],["slot","start","name","call-outline"],["slot","start","name","globe-outline"],["slot","start","name","calendar-outline"],["color","warning",2,"font-size","18px !important",3,"name"],["outline","true",3,"color"],[1,"img-gallery","margin"],[3,"src","click"]],template:function(t,n){if(1&t&&(g.TgZ(0,"ion-content",0),g.NdJ("ionScroll",function(t){return n.onScroll(t)}),g.TgZ(1,"ion-header",1),g.TgZ(2,"ion-toolbar",2),g.TgZ(3,"ion-buttons",3),g._UZ(4,"ion-back-button",4),g.qZA(),g.TgZ(5,"ion-title",5),g._uU(6,"Detail"),g.qZA(),g.TgZ(7,"ion-buttons",6),g.TgZ(8,"ion-button",7),g._UZ(9,"ion-icon",8),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g._UZ(10,"div",9),g.ALo(11,"async"),g.TgZ(12,"ion-grid",10),g.TgZ(13,"div",11),g.TgZ(14,"ion-item",12),g.TgZ(15,"ion-label",13),g.TgZ(16,"h1",14),g._uU(17),g.ALo(18,"async"),g.qZA(),g.TgZ(19,"ion-text",15),g.TgZ(20,"h2",16),g._uU(21),g.ALo(22,"async"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(23,"div",17),g.YNc(24,d,2,3,"ion-icon",18),g.qZA(),g.qZA(),g.qZA(),g.TgZ(25,"ion-row"),g.TgZ(26,"ion-col",19),g.TgZ(27,"div",20),g.YNc(28,u,4,2,"ion-chip",21),g.ALo(29,"async"),g.qZA(),g.TgZ(30,"div",22),g.TgZ(31,"p"),g._uU(32),g.ALo(33,"async"),g.qZA(),g.qZA(),g.TgZ(34,"div",23),g.YNc(35,h,2,1,"div",24),g.ALo(36,"async"),g.qZA(),g.qZA(),g.TgZ(37,"ion-col",25),g.TgZ(38,"div",26),g.TgZ(39,"ion-item",12),g.TgZ(40,"h1",27),g._uU(41,"Contact"),g.qZA(),g.qZA(),g.TgZ(42,"div",28),g.TgZ(43,"ion-item",12),g._UZ(44,"ion-icon",29),g.TgZ(45,"ion-label"),g.TgZ(46,"h2"),g._uU(47),g.ALo(48,"async"),g.qZA(),g.TgZ(49,"p"),g._uU(50,"Address"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(51,"ion-item",12),g._UZ(52,"ion-icon",30),g.TgZ(53,"ion-label"),g.TgZ(54,"h2"),g._uU(55),g.ALo(56,"async"),g.qZA(),g.TgZ(57,"p"),g._uU(58,"Email"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(59,"ion-item",12),g._UZ(60,"ion-icon",31),g.TgZ(61,"ion-label"),g.TgZ(62,"h2"),g._uU(63),g.ALo(64,"async"),g.qZA(),g.TgZ(65,"p"),g._uU(66,"Phone number"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(67,"ion-item",12),g._UZ(68,"ion-icon",32),g.TgZ(69,"ion-label"),g.TgZ(70,"h2"),g._uU(71),g.ALo(72,"async"),g.qZA(),g.TgZ(73,"p"),g._uU(74,"Website"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(75,"ion-item",12),g._UZ(76,"ion-icon",33),g.TgZ(77,"ion-label"),g.TgZ(78,"h2"),g._uU(79),g.ALo(80,"async"),g.qZA(),g.TgZ(81,"p"),g._uU(82,"Openning time"),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA()),2&t){let t,o,e,i,a,r,l,c,s,p,d;g.ekj("transition",n.transition),g.Q6J("scrollEvents",!0),g.xp6(2),g.ekj("show-background",n.showToolbar),g.xp6(8),g.Q6J("ngStyle",g.VKq(39,m,"url("+(null==(t=g.lcZ(11,17,n.place))?null:t.image_header)+")")),g.xp6(7),g.Oqu(null==(o=g.lcZ(18,19,n.place))?null:o.name),g.xp6(4),g.hij(" ",null==(e=g.lcZ(22,21,n.place))?null:e.short_description,""),g.xp6(3),g.Q6J("ngForOf",g.DdM(41,Z)),g.xp6(4),g.Q6J("ngForOf",null==(i=g.lcZ(29,23,n.place))?null:i.tag),g.xp6(4),g.hij(" ",null==(a=g.lcZ(33,25,n.place))?null:a.description," "),g.xp6(3),g.Q6J("ngForOf",null==(r=g.lcZ(36,27,n.place))?null:r.images),g.xp6(12),g.Oqu(null==(l=g.lcZ(48,29,n.place))?null:l.contact_info.address),g.xp6(8),g.Oqu(null==(c=g.lcZ(56,31,n.place))?null:c.contact_info.email),g.xp6(8),g.hij("+",null==(s=g.lcZ(64,33,n.place))?null:s.contact_info.phone,""),g.xp6(8),g.Oqu(null==(p=g.lcZ(72,35,n.place))?null:p.contact_info.website),g.xp6(8),g.Oqu(null==(d=g.lcZ(80,37,n.place))?null:d.opening)}},directives:[a.W2,a.Gu,a.sr,a.Sm,a.oU,a.cs,a.wd,a.YG,a.gu,e.PC,a.jY,a.Ie,a.Q$,a.yW,e.sg,a.Nd,a.wI,a.hM],pipes:[e.Ov],styles:['ion-card[_ngcontent-%COMP%]{margin:0 0 15px!important;width:100%!important}ion-chip[_ngcontent-%COMP%]{padding:10px!important;border-radius:4px!important;height:35px;margin-left:11px}ion-toolbar.first[_ngcontent-%COMP%]{--background: transparent;--ion-color-base: transparent !important}.opening-time[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:18px;margin-top:5px}ion-buttons.showColor[_ngcontent-%COMP%]{color:#333}ion-avatar[_ngcontent-%COMP%]{background-color:#ccc;margin:10px 16px 8px 0!important}.show-title2[_ngcontent-%COMP%]{opacity:1}.show-background[_ngcontent-%COMP%]{border-style:none;animation:fadein .5s;-moz-animation:fadein .5s;-webkit-animation:fadein .5s;-o-animation:fadein .5s;background:var(--ion-color-tertiary)}@keyframes fadein{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{0%{opacity:0}to{opacity:1}}ion-card[_ngcontent-%COMP%]{border-radius:9px!important;box-shadow:0 5px 30px #0000001a!important}.img-gallery-box[_ngcontent-%COMP%]{display:inline-block;padding:4px}.img-gallery[_ngcontent-%COMP%]{margin-left:8px;width:110px;height:90px;background-color:#ddd;display:inline-block;border-radius:8px}.img-gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:4px;width:120px;height:90px}.horizontal-scroll[_ngcontent-%COMP%]{white-space:nowrap;height:auto;overflow-x:scroll;overflow-y:auto}.header-md[_ngcontent-%COMP%]:after{background-image:none}.header-ios[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]:last-child{--border-width: 0}.img-thumbnail[_ngcontent-%COMP%]:before{content:" ";position:absolute;left:0;right:0;top:0;bottom:0;background-size:cover;background-position:center}.img-thumbnail[_ngcontent-%COMP%]{border-radius:9px!important;position:relative;width:100%;height:100px;background-color:#ddd;background-size:cover;background-position:center}.detail-header[_ngcontent-%COMP%]:before{content:" ";position:absolute;left:0;right:0;top:0;bottom:0;background:linear-gradient(to bottom,rgba(0,0,0,0) 68%,rgba(0,0,0,.65) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#00000000",endColorstr="#a6000000",GradientType=0)}.detail-header[_ngcontent-%COMP%]{position:relative;height:300px!important;background-size:cover;background-position:center}.detail-header[_ngcontent-%COMP%]   .detail-title[_ngcontent-%COMP%]{text-align:center;position:absolute;left:2px;bottom:20px;width:100%;min-width:350px;max-width:600px;color:#fff}.detail-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{color:#fff;--background: rgba(0, 0, 0, 0);--border-color: rgba(0, 0, 0, 0)}.detail-header[_ngcontent-%COMP%]   .detail-price[_ngcontent-%COMP%]{color:#fff;font-size:16px;font-weight:bold;position:absolute;left:20px;bottom:20px;text-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}.transition[_ngcontent-%COMP%]{transition:background-size .3s ease-in}.avatar-top[_ngcontent-%COMP%]{margin:16px 16px auto 0}.detail-horizontal-scroll[_ngcontent-%COMP%]{margin-left:10px;white-space:nowrap;height:auto;overflow-x:scroll;overflow-y:auto;vertical-align:top!important}']}),t})()}];let b=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=g.oAB({type:t}),t.\u0275inj=g.cJS({imports:[[r.Bz.forChild(f)],r.Bz]}),t})(),A=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=g.oAB({type:t}),t.\u0275inj=g.cJS({imports:[[e.ez,i.u5,a.Pc,b]]}),t})()}}]);