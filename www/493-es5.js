!function(){"use strict";function e(e,n){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return t(e,n)}(e))||n&&e&&"number"==typeof e.length){a&&(e=a);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,c=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return l=e.done,e},e:function(e){c=!0,r=e},f:function(){try{l||null==a.return||a.return()}finally{if(c)throw r}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}(self.webpackChunkionic5fullapp_final=self.webpackChunkionic5fullapp_final||[]).push([[493],{30493:function(t,o,i){i.r(o),i.d(o,{MapOnePageModule:function(){return M}});var r=i(38583),l=i(3679),c=i(52462),s=i(17410),p=i(64762),u=i(86205),m=i(62272),f=i(86834),g=i(67092),d=["map"];function h(e,t){if(1&e&&m._UZ(0,"ion-icon",11),2&e){var n=t.$implicit,a=m.oxw(2);m.Q6J("name",n<a.placeRating?"star":"star-outline")}}var y=function(){return[0,1,2,3,4]};function v(e,t){if(1&e){var n=m.EpF();m.TgZ(0,"div",7),m.TgZ(1,"ion-item"),m.TgZ(2,"ion-thumbnail",0),m._UZ(3,"img",8),m.qZA(),m.TgZ(4,"ion-label"),m.TgZ(5,"h2"),m._uU(6),m.qZA(),m.TgZ(7,"p"),m.YNc(8,h,1,1,"ion-icon",9),m.qZA(),m.TgZ(9,"p"),m._uU(10),m.qZA(),m.TgZ(11,"ion-button",10),m.NdJ("click",function(){return m.CHM(n),m.oxw().openDetail("placeId")}),m._uU(12,"More detail"),m.qZA(),m.qZA(),m.qZA(),m.qZA()}if(2&e){var a=m.oxw();m.xp6(3),m.s9C("src",a.placeImage,m.LSH),m.xp6(3),m.Oqu(a.placeName),m.xp6(2),m.Q6J("ngForOf",m.DdM(4,y)),m.xp6(2),m.Oqu(a.placeDescription)}}var w,b=[{path:"",component:(w=function(){function t(e,a,o,i,r,l){n(this,t),this.mapService=e,this.modalController=a,this.activatedRoute=o,this.navController=i,this.ionicComponentService=r,this.router=l,this.viewDetail=!1,this.mapStyle=[{featureType:"landscape.man_made",elementType:"all",stylers:[{color:"#faf5ed"},{lightness:"0"},{gamma:"1"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#bae5a6"}]},{featureType:"road",elementType:"all",stylers:[{weight:"1.00"},{gamma:"1.8"},{saturation:"0"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{hue:"#ffb200"}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{lightness:"0"},{gamma:"1"}]},{featureType:"transit.station.airport",elementType:"all",stylers:[{hue:"#b000ff"},{saturation:"23"},{lightness:"-4"},{gamma:"0.80"}]},{featureType:"water",elementType:"all",stylers:[{color:"#a0daf2"}]}]}var o,i,r;return o=t,(i=[{key:"ngOnInit",value:function(){this.getPlace()}},{key:"getPlace",value:function(){return(0,p.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.ionicComponentService.presentLoading(),e.next=3,this.mapService.getAllPlaces().subscribe(function(e){console.log("######################### getAllPlaces loaded ="+e),t.places=e,console.log("+++++++++++++= ........place array="+JSON.stringify(t.places)),t.ionicComponentService.dismissLoading(),t.displayMap()});case 3:case"end":return e.stop()}},e,this)}))}},{key:"displayMap",value:function(){var e={center:new google.maps.LatLng(-28.024,140.887),zoom:5,styles:this.mapStyle,mapTypeId:google.maps.MapTypeId.ROADMAP,disableDefaultUI:!0};console.log("call map>>>>>>>"),this.map=new google.maps.Map(this.mapElement.nativeElement,e),this.addMarkersToMap()}},{key:"addMarkersToMap",value:function(){var t=this;console.log("<>>>>>>> call addMarkeToMap");var n,a=e(this.places);try{var o=function(){var e=n.value;console.log("lat="+e.lat),i=new google.maps.LatLng(e.lat,e.lng),r={url:"https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png",scaledSize:new google.maps.Size(50,50)},t.mapMarker=new google.maps.Marker({position:i,animation:google.maps.Animation.DROP,markerSelected:!0,icon:r}),t.mapMarker.setMap(t.map),t.map.setCenter(i),google.maps.event.addListener(t.mapMarker,"click",function(){t.getPlaceDetail(e.id,e.name,e.description,e.rating,e.image)})};for(a.s();!(n=a.n()).done;){var i,r;o()}}catch(l){a.e(l)}finally{a.f()}}},{key:"openDetail",value:function(e){this.viewDetail=!0,console.log("-------pass placeId="+e),this.modalController.create({component:u.$,showBackdrop:!0,componentProps:{placeId:this.placeId}}).then(function(e){return e.present()})}},{key:"getPlaceDetail",value:function(e,t,n,a,o){this.viewDetail=!0,this.placeId=e,this.placeName=t,this.placeDescription=n,this.placeRating=a,this.placeImage=o,console.log("placeId="+this.placeId)}}])&&a(o.prototype,i),r&&a(o,r),t}(),w.\u0275fac=function(e){return new(e||w)(m.Y36(f.Y),m.Y36(c.IN),m.Y36(s.gz),m.Y36(c.SH),m.Y36(g.d),m.Y36(s.F0))},w.\u0275cmp=m.Xpm({type:w,selectors:[["app-map-one"]],viewQuery:function(e,t){var n;1&e&&m.Gf(d,5),2&e&&m.iGM(n=m.CRH())&&(t.mapElement=n.first)},decls:11,vars:1,consts:[["slot","start"],["mode","md","color","river","defaultHref","#"],["color","river",1,"main-header4"],["id","wrapper"],["id","map"],["map",""],["class","place-detail effect6",4,"ngIf"],[1,"place-detail","effect6"],[3,"src"],["style","font-size: 14px !important;","color","warning",3,"name",4,"ngFor","ngForOf"],["fill","outline","slot","end","color","yellow",3,"click"],["color","warning",2,"font-size","14px !important",3,"name"]],template:function(e,t){1&e&&(m.TgZ(0,"ion-header"),m.TgZ(1,"ion-toolbar"),m.TgZ(2,"ion-buttons",0),m._UZ(3,"ion-back-button",1),m.qZA(),m.TgZ(4,"ion-title",2),m._uU(5,"MAP 1"),m.qZA(),m.qZA(),m.qZA(),m.TgZ(6,"ion-content"),m.TgZ(7,"div",3),m._UZ(8,"div",4,5),m.YNc(10,v,13,5,"div",6),m.qZA(),m.qZA()),2&e&&(m.xp6(10),m.Q6J("ngIf",t.viewDetail))},directives:[c.Gu,c.sr,c.Sm,c.oU,c.cs,c.wd,c.W2,r.O5,c.Ie,c.Bs,c.Q$,r.sg,c.YG,c.gu],styles:["#wrapper[_ngcontent-%COMP%]{position:relative;width:100%;height:100%}.scroll-content[_ngcontent-%COMP%]{height:100%}#map[_ngcontent-%COMP%]{width:100%;height:100%}.place-detail[_ngcontent-%COMP%]{background-color:none;position:absolute;padding:0;bottom:5px;height:150px;width:350px;z-index:99;text-align:center;margin-left:auto;margin-right:auto;left:0;right:0}ion-thumbnail[_ngcontent-%COMP%]{--size: 80px;margin-top:0;margin-bottom:0;border-radius:8px!important;background-color:#ddd;min-width:6rem;min-height:7rem}ion-label[_ngcontent-%COMP%]{margin:0 5px}ion-item[_ngcontent-%COMP%]{--inner-padding-end: 0px;--padding-start: 0px;border-radius:5px!important}.effect6[_ngcontent-%COMP%]{box-shadow:0 1px 4px #0000004d,0 0 40px #0000001a inset}"]}),w)}],T=function(){var e=function e(){n(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=m.oAB({type:e}),e.\u0275inj=m.cJS({imports:[[s.Bz.forChild(b)],s.Bz]}),e}(),M=function(){var e=function e(){n(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=m.oAB({type:e}),e.\u0275inj=m.cJS({imports:[[r.ez,l.u5,c.Pc,T]]}),e}()}}])}();