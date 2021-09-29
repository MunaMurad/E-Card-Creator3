"use strict";(self.webpackChunkionic5fullapp_final=self.webpackChunkionic5fullapp_final||[]).push([[4465],{74465:function(e,o,i){i.r(o),i.d(o,{FoodCheckoutPageModule:function(){return _}});var n=i(38583),t=i(93092),s=i(52462),r=i(84193),a=i(64762),l=i(3236),d=i(74936),c=i(60476),Z=i(73071),g=i(29785),u=i(67092);function h(e,o){if(1&e&&(c.TgZ(0,"span"),c._uU(1),c.qZA()),2&e){const e=o.$implicit;c.xp6(1),c.hij("",e.name," \xa0")}}function p(e,o){if(1&e&&(c.TgZ(0,"ion-item",41),c.TgZ(1,"ion-thumbnail",1),c._UZ(2,"ion-img",42),c.qZA(),c.TgZ(3,"ion-label",13),c.TgZ(4,"h3"),c._uU(5),c.qZA(),c.TgZ(6,"p"),c._uU(7),c.qZA(),c.TgZ(8,"p"),c._uU(9," Addon: "),c.YNc(10,h,2,1,"span",43),c.qZA(),c.qZA(),c.TgZ(11,"h5",44),c._uU(12),c.ALo(13,"currency"),c.qZA(),c.qZA()),2&e){const e=o.$implicit;c.xp6(2),c.Q6J("src",e.image),c.xp6(3),c.Oqu(e.name),c.xp6(2),c.hij("Size: ",e.size,""),c.xp6(3),c.Q6J("ngForOf",e.addOn),c.xp6(2),c.hij(" ",c.Dn7(13,5,e.price,"USD","symbol")," ")}}function m(e,o){if(1&e){const e=c.EpF();c.TgZ(0,"div",22),c.TgZ(1,"ion-item-sliding"),c.TgZ(2,"ion-item",9),c.TgZ(3,"ion-label"),c.TgZ(4,"p"),c._uU(5),c.qZA(),c.TgZ(6,"h3"),c._uU(7),c.qZA(),c.TgZ(8,"h3",45),c._uU(9),c.qZA(),c.TgZ(10,"h3"),c._uU(11),c.qZA(),c.qZA(),c._UZ(12,"ion-radio",46),c.qZA(),c.TgZ(13,"ion-item-options",47),c.TgZ(14,"ion-item-option",48),c.NdJ("click",function(){const o=c.CHM(e).$implicit;return c.oxw().editAddressModal(o.id)}),c._uU(15,"Edit"),c.qZA(),c.qZA(),c.qZA(),c.qZA()}if(2&e){const e=o.$implicit;c.xp6(5),c.Oqu(e.label),c.xp6(2),c.Oqu(e.fullname),c.xp6(2),c.Oqu(e.address),c.xp6(2),c.Oqu(e.phone),c.xp6(1),c.Q6J("value",e.id)}}function A(e,o){if(1&e){const e=c.EpF();c.TgZ(0,"ion-button",49),c.NdJ("click",function(){return c.CHM(e),c.oxw().openAddressModal()}),c._uU(1,"Add address "),c.qZA()}}const T=[{path:"",component:(()=>{class e{constructor(e,o,i,n,t,s,r){this.userService=e,this.foodService=o,this.activatedRoute=i,this.navController=n,this.modalController=t,this.router=s,this.ionicComponentService=r,this.userAuth=!1,this.checkedAddress=!1,this.checkedPayment=!1,this.orderItems=[],this.total=0,this.vat=10,this.fee=15,this.valueTotal=0,console.log(this.router.url,"Current URL")}ngOnInit(){}ionViewWillEnter(){return(0,a.__awaiter)(this,void 0,void 0,function*(){this.userAuth=yield this.userService.isLoggedIn(),this.getCartProduct(),this.getAddress()})}openAddressModal(){return(0,a.__awaiter)(this,void 0,void 0,function*(){return console.log("openModal"),yield(yield this.modalController.create({component:l.F,componentProps:{}})).present()})}editAddressModal(e){return(0,a.__awaiter)(this,void 0,void 0,function*(){return console.log("openModal"),yield(yield this.modalController.create({component:d.X,componentProps:{addressId:e}})).present()})}getAddress(){console.log("______getAddress()"),this.addresses=this.userService.getAddressByUserId()}addressGroupChange(e){console.log("addressGroupChange",e.detail),this.selectAddressId=e.detail.value,this.checkedAddress=!0,console.log("selectAddressId="+this.selectAddressId)}paymentGroupChange(e){console.log("paymentGroupChange",e.detail),this.paymentType=e.detail.value,this.checkedPayment=!0,console.log("checkedPayment = "+this.checkedPayment),console.log("paymentType="+this.paymentType)}getCartProduct(){const e=this.foodService.getCart();console.log("page not refresh__________________food-cart : items="+e),this.valueTotal=0;for(const o of e)this.valueTotal+=o.price;this.orderItems=e,console.log("..............Order items ="+JSON.stringify(this.orderItems)),this.total=this.valueTotal,this.subTotal=Number(this.total.toFixed(2)),this.vatTotal=Number((this.subTotal*this.vat/100).toFixed(2)),this.feeTotal=Number((this.fee+this.vatTotal).toFixed(2)),this.grandTotal=Number((this.subTotal+this.feeTotal).toFixed(2))}placeOrder(){this.checkedAddress?(console.log("selectAddressId = "+this.selectAddressId),this.checkedPayment?this.addOrder():this.ionicComponentService.presentAlert("Please choose payment method")):this.ionicComponentService.presentAlert("Please choose address")}addOrder(){return(0,a.__awaiter)(this,void 0,void 0,function*(){console.log("_____call addAddress"),this.ionicComponentService.presentLoading(),this.foodService.placeOrder(this.selectAddressId,this.paymentType,this.orderItems,this.grandTotal).then(()=>{console.log("New item added."),this.ionicComponentService.dismissLoading(),this.router.navigateByUrl("/food-finish")},e=>{console.log(e),this.ionicComponentService.presentToast(e,3e3),this.ionicComponentService.dismissLoading()})})}}return e.\u0275fac=function(o){return new(o||e)(c.Y36(Z.K),c.Y36(g.d),c.Y36(r.gz),c.Y36(s.SH),c.Y36(s.IN),c.Y36(r.F0),c.Y36(u.d))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-food-checkout"]],decls:103,vars:31,consts:[[1,"ion-no-border"],["slot","start"],["routerLink","/food-home","routerDirection","root"],["name","close-outline","color","success"],["color","success"],["padding",""],["fixed","",1,"ion-no-padding"],["size-lg","8","size-md","12","size-sm","12","size","12"],[1,"checkout-card"],["lines","none"],[1,"main-header5"],["lines","none","class","","lines","none",4,"ngFor","ngForOf"],["lines","none",1,"margin-top-15"],[1,"text-left"],[1,"main-b-header8"],["slot","end","text-right","",1,"main-b-header8"],["lines","none",1,"ion-margin-top"],["value","payment",3,"ionChange"],[1,"ion-padding-top","ion-padding-bottom","margin-top-15"],["slot","start","mode","md","color","warning","value","cc"],["slot","start","size","small","name","card-outline"],[1,"main-header7"],[1,"ion-padding-top","ion-padding-bottom"],["slot","start","mode","md","color","warning","value","paypal"],["slot","start","size","small","name","logo-playstation"],["slot","start","mode","md","color","warning","value","bank"],["slot","start","size","small","name","swap-horizontal-outline"],["slot","start","mode","md","color","warning","value","cash"],["slot","start","size","small","name","wallet-outline"],["size-lg","4","size-md","12","size-sm","12","size","12"],["value","address",3,"ionChange"],["class","ion-padding-top ion-padding-bottom",4,"ngFor","ngForOf"],["color","","fill","blank","expand","full",3,"click",4,"ngIf"],["size","5",1,"padding-left-15"],["color","dark"],[1,"main-header8","margin-top-3","margin-bottom-0"],["color","realgreen"],[1,"main-b-header5","margin-top-0"],["size","7"],["color","success","expand","full",3,"click"],["slot","start","name","checkmark-circle-outline"],["lines","none","lines","none",1,""],[3,"src"],[4,"ngFor","ngForOf"],["slot","end","text-right","",1,"main-header7"],[1,"ion-text-wrap"],["mode","md","color","warning","slot","start",3,"value"],["side","end"],["color","",3,"click"],["color","","fill","blank","expand","full",3,"click"]],template:function(e,o){1&e&&(c.TgZ(0,"ion-header",0),c.TgZ(1,"ion-toolbar"),c.TgZ(2,"ion-buttons",1),c.TgZ(3,"ion-button",2),c._UZ(4,"ion-icon",3),c.qZA(),c.qZA(),c.TgZ(5,"ion-title",4),c._uU(6,"Checkout"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(7,"ion-content",5),c.TgZ(8,"ion-grid",6),c.TgZ(9,"ion-row"),c.TgZ(10,"ion-col",7),c.TgZ(11,"ion-card",8),c.TgZ(12,"ion-item",9),c.TgZ(13,"h1",10),c._uU(14,"Order summary"),c.qZA(),c.qZA(),c.TgZ(15,"ion-list"),c.YNc(16,p,14,9,"ion-item",11),c.TgZ(17,"ion-item",12),c.TgZ(18,"ion-label",13),c.TgZ(19,"h1",14),c._uU(20,"Subtotal:"),c.qZA(),c.qZA(),c.TgZ(21,"h1",15),c._uU(22),c.ALo(23,"currency"),c.qZA(),c.qZA(),c.TgZ(24,"ion-item",9),c.TgZ(25,"ion-label",13),c.TgZ(26,"h1",14),c._uU(27),c.qZA(),c.qZA(),c.TgZ(28,"p",15),c._uU(29),c.ALo(30,"currency"),c.qZA(),c.qZA(),c.TgZ(31,"ion-item",9),c.TgZ(32,"ion-label",13),c.TgZ(33,"h1",14),c._uU(34,"Delivery fee:"),c.qZA(),c.qZA(),c.TgZ(35,"h1",15),c._uU(36),c.ALo(37,"currency"),c.qZA(),c.qZA(),c.TgZ(38,"ion-item",16),c.TgZ(39,"ion-label",13),c.TgZ(40,"h1",14),c._uU(41,"GrandTotal:"),c.qZA(),c.qZA(),c.TgZ(42,"h1",15),c._uU(43),c.ALo(44,"currency"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(45,"ion-card",8),c.TgZ(46,"ion-item",9),c.TgZ(47,"h1",10),c._uU(48,"Payment"),c.qZA(),c.qZA(),c.TgZ(49,"ion-radio-group",17),c.NdJ("ionChange",function(e){return o.paymentGroupChange(e)}),c.TgZ(50,"div",18),c.TgZ(51,"ion-item",9),c._UZ(52,"ion-radio",19),c._UZ(53,"ion-icon",20),c.TgZ(54,"ion-label"),c.TgZ(55,"h2",21),c._uU(56,"Credit card"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(57,"div",22),c.TgZ(58,"ion-item",9),c._UZ(59,"ion-radio",23),c._UZ(60,"ion-icon",24),c.TgZ(61,"ion-label"),c.TgZ(62,"h2",21),c._uU(63,"Paypal"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(64,"div",22),c.TgZ(65,"ion-item",9),c._UZ(66,"ion-radio",25),c._UZ(67,"ion-icon",26),c.TgZ(68,"ion-label"),c.TgZ(69,"h2",21),c._uU(70,"Bank tranfer"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(71,"div",22),c.TgZ(72,"ion-item",9),c._UZ(73,"ion-radio",27),c._UZ(74,"ion-icon",28),c.TgZ(75,"ion-label"),c.TgZ(76,"h2",21),c._uU(77,"Cash on delivery"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(78,"ion-col",29),c.TgZ(79,"ion-card",8),c.TgZ(80,"ion-item",9),c.TgZ(81,"h1",10),c._uU(82,"Delivery address"),c.qZA(),c.qZA(),c.TgZ(83,"ion-radio-group",30),c.NdJ("ionChange",function(e){return o.addressGroupChange(e)}),c.YNc(84,m,16,5,"div",31),c.ALo(85,"async"),c.qZA(),c.YNc(86,A,2,0,"ion-button",32),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(87,"ion-footer"),c.TgZ(88,"ion-toolbar"),c.TgZ(89,"ion-grid",6),c.TgZ(90,"ion-row"),c.TgZ(91,"ion-col",33),c.TgZ(92,"ion-text",34),c.TgZ(93,"h1",35),c._uU(94," Order total price "),c.qZA(),c.qZA(),c.TgZ(95,"ion-text",36),c.TgZ(96,"h1",37),c._uU(97),c.ALo(98,"currency"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(99,"ion-col",38),c.TgZ(100,"ion-button",39),c.NdJ("click",function(){return o.placeOrder()}),c._uU(101," Place order "),c._UZ(102,"ion-icon",40),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&e&&(c.xp6(16),c.Q6J("ngForOf",o.orderItems),c.xp6(6),c.hij(" ",c.Dn7(23,9,o.total,"USD","symbol")," "),c.xp6(5),c.hij("Tax(",o.vat,"%):"),c.xp6(2),c.hij(" ",c.Dn7(30,13,o.vatTotal,"USD","symbol")," "),c.xp6(7),c.hij(" ",c.Dn7(37,17,o.fee,"USD","symbol")," "),c.xp6(7),c.hij(" ",c.Dn7(44,21,o.grandTotal,"USD","symbol")," "),c.xp6(41),c.Q6J("ngForOf",c.lcZ(85,25,o.addresses)),c.xp6(2),c.Q6J("ngIf",o.userAuth),c.xp6(11),c.hij(" ",c.Dn7(98,27,o.grandTotal,"USD","symbol")," "))},directives:[s.Gu,s.sr,s.Sm,s.YG,s.YI,r.rH,s.gu,s.wd,s.W2,s.jY,s.Nd,s.wI,s.PM,s.Ie,s.q_,n.sg,s.Q$,s.se,s.QI,s.B7,s.U5,n.O5,s.fr,s.yW,s.Bs,s.Xz,s.td,s.IK,s.u8],pipes:[n.H9,n.Ov],styles:[""]}),e})()}];let q=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[r.Bz.forChild(T)],r.Bz]}),e})(),_=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[n.ez,t.u5,s.Pc,q]]}),e})()}}]);