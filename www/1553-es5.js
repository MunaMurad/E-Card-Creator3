!function(){"use strict";function e(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function o(e,o){for(var n=0;n<o.length;n++){var t=o[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}(self.webpackChunkionic5fullapp_final=self.webpackChunkionic5fullapp_final||[]).push([[1553],{1553:function(n,t,i){i.r(t),i.d(t,{FireSignupPageModule:function(){return b}});var r=i(38583),a=i(93092),s=i(52462),l=i(84193),c=i(64762),u=i(60476),g=i(73071),m=i(67092);function p(e,o){1&e&&(u.TgZ(0,"p"),u._UZ(1,"ion-icon",34),u._uU(2," Firstname field must be at least 3 characters long! "),u.qZA())}function d(e,o){1&e&&(u.TgZ(0,"p"),u._UZ(1,"ion-icon",34),u._uU(2," Lastname field must be at least 3 characters long! "),u.qZA())}function Z(e,o){1&e&&(u.TgZ(0,"p"),u._UZ(1,"ion-icon",34),u._uU(2," Phone field must be at least 6 characters long! "),u.qZA())}function h(e,o){1&e&&(u.TgZ(0,"p"),u._UZ(1,"ion-icon",34),u._uU(2," Username must be e-mail! "),u.qZA())}function f(e,o){1&e&&(u.TgZ(0,"p"),u._UZ(1,"ion-icon",34),u._uU(2," Password field must be at least 6 characters long! "),u.qZA())}var v,q=[{path:"",component:(v=function(){function n(o,t,i,r,s,l){e(this,n),this.router=o,this.activatedRoute=t,this.menuCtrl=i,this.userService=r,this.ionicComponentService=s,this.formBuilder=l,this.showPassword=!1,this.registerForm=l.group({firstname:["",a.kI.compose([a.kI.minLength(3),a.kI.required])],lastname:["",a.kI.compose([a.kI.minLength(3),a.kI.required])],phone:["",a.kI.compose([a.kI.minLength(2),a.kI.required])],username:["",a.kI.compose([a.kI.required,a.kI.pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)])],password:["",a.kI.compose([a.kI.minLength(6),a.kI.required])]})}var t,i,r;return t=n,(i=[{key:"ngOnInit",value:function(){this.redirectUrl=this.activatedRoute.snapshot.queryParamMap.get("redirectUrl"),console.log("redirectUrl="+this.redirectUrl)}},{key:"submitFormTest",value:function(){this.registerForm.valid?(console.log(this.registerForm.value),console.log("yes, ")):(console.log(this.registerForm.value),console.log("invalid form"))}},{key:"registerUser",value:function(){return(0,c.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var o=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("call signopUser"),!this.registerForm.valid){e.next=9;break}return this.ionicComponentService.presentLoading(),console.log(this.registerForm.value),console.log("yes, "),e.next=7,this.userService.signupUser(this.registerForm.value.firstname,this.registerForm.value.lastname,this.registerForm.value.phone,this.registerForm.value.username,this.registerForm.value.password).then(function(){o.ionicComponentService.dismissLoading(),o.router.navigateByUrl(o.redirectUrl?"/"+o.redirectUrl:"/walkthrough")},function(e){var n=e.message;o.ionicComponentService.dismissLoading(),o.ionicComponentService.presentAlert(n)});case 7:e.next=10;break;case 9:console.log(this.registerForm.value),console.log("invalid form");case 10:case"end":return e.stop()}},e,this)}))}},{key:"onPasswordToggle",value:function(){this.showPassword=!this.showPassword}}])&&o(t.prototype,i),r&&o(t,r),n}(),v.\u0275fac=function(e){return new(e||v)(u.Y36(l.F0),u.Y36(l.gz),u.Y36(s._q),u.Y36(g.K),u.Y36(m.d),u.Y36(a.qu))},v.\u0275cmp=u.Xpm({type:v,selectors:[["app-fire-signup"]],decls:59,vars:9,consts:[[1,"ion-no-border"],["slot","end"],["color","orange","auto-hide","false"],["color","orange","lass","main-header4"],["slot","start"],["color","orange"],["fullscreen","true"],["fixed","",1,"ion-no-padding"],["collapse","condense",1,"ion-no-border"],["color","orange","size","large"],[1,"register-form","ion-margin"],["color","dark"],["text-center","",1,"ion-margin-bottom","main-header7"],["novalidate","",3,"formGroup"],[1,"ion-margin-top","ion-padding"],[1,"roundedInput8px","margin-bottom-10"],["name","person-outline","color","medium"],["type","text","formControlName","firstname","placeholder","First name"],["name","people-outline","color","medium"],["type","text","formControlName","lastname","placeholder","Lastname"],["name","call-outline","color","medium"],["type","number","formControlName","phone","placeholder","phone"],["name","mail-outline","color","medium"],["type","text","formControlName","username","placeholder","Username(email)"],["slot","start",1,"margin-right-8"],["name","lock-closed-outline","color","medium"],["type","text","formControlName","password","placeholder","Password","clearOnEdit","false",3,"type"],["ion-button","","fill","clear","size","small",3,"click"],["slot","icon-only","color","medium",3,"name"],["color","danger"],[4,"ngIf"],["mode","ios","color","orange","expand","block",1,"ion-margin-top",3,"disabled","click"],["mode","ios","color","orange","expand","block","fill","outline","routerLink","/fire-signin",1,"ion-margin-top"],[1,"ion-text-center","ion-margin-bottom","main-header8"],["name","information-circle-outline"]],template:function(e,o){1&e&&(u.TgZ(0,"ion-header",0),u.TgZ(1,"ion-toolbar"),u.TgZ(2,"ion-buttons",1),u._UZ(3,"ion-menu-button",2),u.qZA(),u.TgZ(4,"ion-title",3),u._uU(5,"SIGN UP"),u.qZA(),u.TgZ(6,"ion-buttons",4),u._UZ(7,"ion-back-button",5),u.qZA(),u.qZA(),u.qZA(),u.TgZ(8,"ion-content",6),u.TgZ(9,"ion-grid",7),u.TgZ(10,"ion-header",8),u.TgZ(11,"ion-toolbar"),u.TgZ(12,"ion-title",9),u._uU(13,"SIGN UP"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(14,"div",10),u.TgZ(15,"ion-text",11),u.TgZ(16,"h2",12),u._uU(17," Create new account. "),u.qZA(),u.qZA(),u.TgZ(18,"form",13),u.TgZ(19,"ion-list",14),u.TgZ(20,"ion-item",15),u.TgZ(21,"ion-label"),u._UZ(22,"ion-icon",16),u.qZA(),u._UZ(23,"ion-input",17),u.qZA(),u.TgZ(24,"ion-item",15),u.TgZ(25,"ion-label"),u._UZ(26,"ion-icon",18),u.qZA(),u._UZ(27,"ion-input",19),u.qZA(),u.TgZ(28,"ion-item",15),u.TgZ(29,"ion-label"),u._UZ(30,"ion-icon",20),u.qZA(),u._UZ(31,"ion-input",21),u.qZA(),u.TgZ(32,"ion-item",15),u.TgZ(33,"ion-label"),u._UZ(34,"ion-icon",22),u.qZA(),u._UZ(35,"ion-input",23),u.qZA(),u.TgZ(36,"ion-item",15),u.TgZ(37,"ion-label",24),u._UZ(38,"ion-icon",25),u.qZA(),u._UZ(39,"ion-input",26),u.TgZ(40,"div",27),u.NdJ("click",function(){return o.onPasswordToggle()}),u._UZ(41,"ion-icon",28),u.qZA(),u.qZA(),u.qZA(),u.TgZ(42,"ion-text",29),u.YNc(43,p,3,0,"p",30),u.qZA(),u.TgZ(44,"ion-text",29),u.YNc(45,d,3,0,"p",30),u.qZA(),u.TgZ(46,"ion-text",29),u.YNc(47,Z,3,0,"p",30),u.qZA(),u.TgZ(48,"ion-text",29),u.YNc(49,h,3,0,"p",30),u.qZA(),u.TgZ(50,"ion-text",29),u.YNc(51,f,3,0,"p",30),u.qZA(),u.TgZ(52,"ion-button",31),u.NdJ("click",function(){return o.registerUser()}),u._uU(53," Create "),u.qZA(),u.TgZ(54,"ion-button",32),u._uU(55," Cancel "),u.qZA(),u.TgZ(56,"ion-text",11),u.TgZ(57,"h2",33),u._uU(58," By clicking Sign up you agree to the following Terms ans Conditions without reservation "),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA()),2&e&&(u.xp6(18),u.Q6J("formGroup",o.registerForm),u.xp6(21),u.Q6J("type",o.showPassword?"text":"password"),u.xp6(2),u.Q6J("name",o.showPassword?"eye-off":"eye"),u.xp6(2),u.Q6J("ngIf",!o.registerForm.controls.firstname.valid&&o.registerForm.controls.firstname.touched),u.xp6(2),u.Q6J("ngIf",!o.registerForm.controls.lastname.valid&&o.registerForm.controls.lastname.touched),u.xp6(2),u.Q6J("ngIf",!o.registerForm.controls.phone.valid&&o.registerForm.controls.phone.touched),u.xp6(2),u.Q6J("ngIf",!o.registerForm.controls.username.valid&&o.registerForm.controls.username.touched),u.xp6(2),u.Q6J("ngIf",!o.registerForm.controls.password.valid&&o.registerForm.controls.password.touched),u.xp6(1),u.Q6J("disabled",!o.registerForm.valid))},directives:[s.Gu,s.sr,s.Sm,s.fG,s.wd,s.oU,s.cs,s.W2,s.jY,s.yW,a._Y,a.JL,a.sg,s.q_,s.Ie,s.Q$,s.gu,s.pK,s.j9,a.JJ,a.u,s.as,r.O5,s.YG,s.YI,l.rH],styles:[".logo-box[_ngcontent-%COMP%]{width:100%;height:200px;position:relative;overflow:hidden;margin-top:30px}.logo-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;width:140px;height:140px;top:0;bottom:0;right:0;left:0;margin:auto}.register-form[_ngcontent-%COMP%]{width:75%;margin:auto;padding-top:20px}.register-form[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{background:none}"]}),v)}],U=function(){var o=function o(){e(this,o)};return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=u.oAB({type:o}),o.\u0275inj=u.cJS({imports:[[l.Bz.forChild(q)],l.Bz]}),o}(),b=function(){var o=function o(){e(this,o)};return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=u.oAB({type:o}),o.\u0275inj=u.cJS({imports:[[r.ez,a.u5,a.UX,s.Pc,U]]}),o}()}}])}();