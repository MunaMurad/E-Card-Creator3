(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-layouts-signin-signin-one-signin-one-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/signin/signin-one/signin-one.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/signin/signin-one/signin-one.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen=\"true\">\n  <!-- <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"medium\" auto-hide=\"false\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar> -->\n <ion-grid>\n\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-align-self-center\" size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n       \n          <div class=\"login-logo\">\n            <img src=\"assets/appicon.svg\" alt=\"Ionic logo\">\n          </div>\n\n          <ion-list class=\"ion-margin-top ion-margin margin-0-28\">\n            \n            <!-- ############ -->\n            <ion-item  class=\"roundedInput8px margin-bottom-10\">\n              <ion-label>\n                <ion-icon name=\"person-add-outline\"></ion-icon>\n                </ion-label>\n              <ion-input placeholder=\"Username\" ></ion-input>\n            </ion-item>\n            <!-- ############ -->                              \n            <ion-item  class=\"roundedInput8px margin-bottom-10\">\n\n              <ion-label slot=\"start\" class=\"margin-right-8\">\n                <ion-icon name=\"lock-closed-outline\"></ion-icon>\n                </ion-label>\n\n              <ion-input placeholder=\"Password\" [type]=\"showPassword ? 'text' : 'password'\" clearOnEdit=\"false\"></ion-input>\n\n                  <!-- ### Show/hide password ### -->    \n                  <div (click)=\"onPasswordToggle()\" ion-button fill=\"clear\" size=\"small\" >\n                    <ion-icon  slot=\"icon-only\" color=\"medium\" [name]=\"showPassword ? 'eye-off' : 'eye'\"></ion-icon>\n                  </div>\n\n            </ion-item>\n\n            <!-- ############ -->\n            <span >\n              <p class=\"ion-text-right\">Forgot password?</p>\n            </span>\n            <!-- ############ -->\n            <ion-button mode=\"ios\" class=\"ion-margin-top\" color=\"success\" expand=\"block\" >Signin</ion-button>\n          </ion-list>\n       \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n      \n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/ui-layouts/signin/signin-one/signin-one-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/ui-layouts/signin/signin-one/signin-one-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: SigninOnePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninOnePageRoutingModule", function() { return SigninOnePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _signin_one_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin-one.page */ "./src/app/ui-layouts/signin/signin-one/signin-one.page.ts");




const routes = [
    {
        path: '',
        component: _signin_one_page__WEBPACK_IMPORTED_MODULE_3__["SigninOnePage"]
    }
];
let SigninOnePageRoutingModule = class SigninOnePageRoutingModule {
};
SigninOnePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SigninOnePageRoutingModule);



/***/ }),

/***/ "./src/app/ui-layouts/signin/signin-one/signin-one.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/ui-layouts/signin/signin-one/signin-one.module.ts ***!
  \*******************************************************************/
/*! exports provided: SigninOnePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninOnePageModule", function() { return SigninOnePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _signin_one_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signin-one-routing.module */ "./src/app/ui-layouts/signin/signin-one/signin-one-routing.module.ts");
/* harmony import */ var _signin_one_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signin-one.page */ "./src/app/ui-layouts/signin/signin-one/signin-one.page.ts");







let SigninOnePageModule = class SigninOnePageModule {
};
SigninOnePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _signin_one_routing_module__WEBPACK_IMPORTED_MODULE_5__["SigninOnePageRoutingModule"]
        ],
        declarations: [_signin_one_page__WEBPACK_IMPORTED_MODULE_6__["SigninOnePage"]]
    })
], SigninOnePageModule);



/***/ }),

/***/ "./src/app/ui-layouts/signin/signin-one/signin-one.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/ui-layouts/signin/signin-one/signin-one.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --opacity:0 !important;\n}\n\nion-content {\n  --background: none;\n  background-position: center center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: url(\"https://image.freepik.com/free-vector/3d-paper-style-wallpaper_23-2148473492.jpg\");\n}\n\nion-col {\n  padding: 0px !important;\n}\n\nion-list {\n  --ion-item-background: transparent;\n}\n\n.login-logo {\n  padding: 20px 0;\n  min-height: 100px;\n  text-align: center;\n}\n\n.login-logo img {\n  max-width: 100px;\n}\n\n.list {\n  margin-bottom: 0;\n}\n\nion-button {\n  font-weight: 300;\n}\n\nion-grid {\n  width: 100%;\n  height: 100%;\n}\n\nion-row {\n  height: 100%;\n}\n\nion-col {\n  min-width: 450px;\n  padding: 30px !important;\n  border: 1px solid #00000003;\n  background-color: rgba(0, 0, 0, 0.11);\n  border-radius: 8px;\n}\n\n.list-width {\n  width: 450px !important;\n}\n\n@media (min-width: 240px) and (max-width: 768px) {\n  ion-col {\n    min-height: 650px;\n    border: none;\n    background: transparent;\n    border-radius: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZXRoZWUvSW9uaWNQcm9qZWN0cy9faW9uaWM1L2lvbmljNWZ1bGxhcHBfZmluYWwvc3JjL2FwcC91aS1sYXlvdXRzL3NpZ25pbi9zaWduaW4tb25lL3NpZ25pbi1vbmUucGFnZS5zY3NzIiwic3JjL2FwcC91aS1sYXlvdXRzL3NpZ25pbi9zaWduaW4tb25lL3NpZ25pbi1vbmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtFRTtFQUNFLHNCQUFBO0FDakVKOztBRG9FRTtFQUNFLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBSUEseUdBQUE7QUNwRUo7O0FEdUVFO0VBQ0UsdUJBQUE7QUNwRUo7O0FEdUVFO0VBQ0Msa0NBQUE7QUNwRUg7O0FEd0VFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNyRUo7O0FEd0VFO0VBQ0UsZ0JBQUE7QUNyRUo7O0FEd0VFO0VBQ0UsZ0JBQUE7QUNyRUo7O0FEeUVFO0VBQ0UsZ0JBQUE7QUN0RUo7O0FEMkVFO0VBQ0ksV0FBQTtFQUNBLFlBakRRO0FDdkJkOztBRDRFRTtFQUNJLFlBdERRO0FDbkJkOztBRDRFRTtFQUNFLGdCQUFBO0VBQ0Usd0JBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7QUN6RU47O0FEMkVFO0VBQ0UsdUJBQUE7QUN4RUo7O0FEOEVFO0VBS0k7SUFFSSxpQkFBQTtJQUNBLFlBQUE7SUFFQSx1QkFBQTtJQUNBLGtCQUFBO0VDakZSO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC91aS1sYXlvdXRzL3NpZ25pbi9zaWduaW4tb25lL3NpZ25pbi1vbmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gI3RvcFNlY3Rpb24gPiBpb24tY2FyZCA+IGlvbi1jYXJkLWhlYWRlcntcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vIH1cblxuLy8gI3VzZXJBdmF0YXJ7XG4vLyAgICAgd2lkdGg6IDUwcHg7XG4vLyAgICAgaGVpZ2h0OiA1MHB4O1xuLy8gfVxuXG4vLyAjdG9wU2VjdGlvbiA+IGlvbi1jYXJkID4gaW9uLWNhcmQtaGVhZGVyID4gaW9uLWl0ZW0gPiBpb24tbGlzdHtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vIH1cblxuLy8gI3RvcFNlY3Rpb24gPiBpb24tY2FyZCA+IGlvbi1jYXJkLWhlYWRlciA+IGlvbi1pdGVtID4gaW9uLWxpc3QgPiBpb24taXRlbSA+IGlvbi10ZXh0YXJlYXtcbi8vICAgICBoZWlnaHQ6IDE1MHB4O1xuLy8gfVxuXG4vLyAjdXNlckF2YXRhckNvbnRhaW5lcntcbi8vICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XG4vLyB9XG5cbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyAvL1xuLy8gaW9uLWNvbHtcbi8vICAgICBpb24taW5wdXR7XG4vLyAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggcmVkO1xuLy8gICAgIH1cbi8vICB9XG4gXG4vLyAgaW9uLXJvd3tcbi8vICAgICBpb24tdGV4dGFyZWF7XG4vLyAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggcmVkO1xuLy8gICAgIH1cbi8vICB9XG5cblxuXG5cbiAgLy8gaW9uLWl0ZW06Zmlyc3QtY2hpbGQge1xuICAvLyAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgLy8gICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAvLyB9XG4gIC8vIGlvbi1pdGVtOmxhc3QtY2hpbGQge1xuICAvLyAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgLy8gICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICAvLyB9XG5cblxuICBcbiAgLy8gLml0ZW1CZyB7XG4gIC8vICAgYmFja2dyb3VuZC1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XG4gIC8vICAgbWFyZ2luLWJvdHRvbTogMXB4O1xuICAvLyAgIC5sYWJlbCB7XG4gIC8vICAgICB3aWR0aDogMTAlO1xuICAvLyAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgLy8gICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gIC8vICAgfVxuICAvLyAgIC5pbnB1dEJne1xuICAvLyAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkICFpbXBvcnRhbnQ7XG4gIC8vICAgfVxuICAvLyB9XG5cblxuXG4gICR3aGl0ZS1jb2xvcjogI2ZmZjtcbiAgJGhlaWdodDEwMDogMTAwJTtcblxuICBpb24tdG9vbGJhcntcbiAgICAtLW9wYWNpdHk6MCAhaW1wb3J0YW50O1xuICAgIH1cblxuICBpb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgLy9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vaW1hZ2UuZnJlZXBpay5jb20vZnJlZS12ZWN0b3IvZ3JlZW4tc2hhcGVzLWdyZWVuLWJhY2tncm91bmRfMjMtMjE0ODM1ODIxMi5qcGcnKTtcbiAgICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9pbWFnZS5mcmVlcGlrLmNvbS9mcmVlLXZlY3Rvci9zdHlsaXNoLWhleGFnb25hbC1saW5lLXBhdHRlcm4tYmFja2dyb3VuZF8xMDE3LTE5NzQyLmpwZycpO1xuICAgIFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9pbWFnZS5mcmVlcGlrLmNvbS9mcmVlLXZlY3Rvci8zZC1wYXBlci1zdHlsZS13YWxscGFwZXJfMjMtMjE0ODQ3MzQ5Mi5qcGcnKTtcbiAgIH1cblxuICBpb24tY29se1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuXG4gIH1cbiAgaW9uLWxpc3Qge1xuICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLy8gbWFyZ2luOiAwcHggMjVweDtcbiAgfVxuXG4gIC5sb2dpbi1sb2dvIHtcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAubG9naW4tbG9nbyBpbWcge1xuICAgIG1heC13aWR0aDogMTAwcHg7XG4gIH1cbiAgXG4gIC5saXN0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIFxuICBcbiAgaW9uLWJ1dHRvbiB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbiAgXG4gIC8vIyMjIyMjIyMgZGVmYXVsdCBzY3JlZW4gIyMjIyMjIyMvL1xuXG4gIGlvbi1ncmlkIHtcbiAgICAgIHdpZHRoOjEwMCU7XG4gICAgICBoZWlnaHQ6ICRoZWlnaHQxMDA7XG4gICAgICAvL2JhY2tncm91bmQ6ICNkZmRmZGY7XG4gIH1cbiAgXG4gIGlvbi1yb3cge1xuICAgICAgaGVpZ2h0OiAkaGVpZ2h0MTAwO1xuICB9XG4gIFxuICBpb24tY29sIHtcbiAgICBtaW4td2lkdGg6IDQ1MHB4O1xuICAgICAgcGFkZGluZzogMzBweCAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDAzOyAvLzFweCBzb2xpZCAjNDg4YWZmO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjExKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgfVxuICAubGlzdC13aWR0aHtcbiAgICB3aWR0aDogNDUwcHggIWltcG9ydGFudDtcbiAgICBcbiAgfVxuICBcblxuICAvLyMjIyMjIyMjIG1vYmlsZSBzY3JlZW4gIyMjIyMjIyMvL1xuICBAbWVkaWEgKG1pbi13aWR0aDogMjQwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuXG4gICAgICBpb24tZ3JpZCB7XG4gICAgICAgICAgLy9iYWNrZ3JvdW5kOiAkd2hpdGUtY29sb3I7XG4gICAgICB9XG4gICAgICBpb24tY29sIHtcbiAgICAgICAvLyBtaW4td2lkdGg6IDQ1MHB4O1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDY1MHB4O1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAvL2hlaWdodDogNDUwcHggIWltcG9ydGFudDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICB9XG4gIH0iLCJpb24tdG9vbGJhciB7XG4gIC0tb3BhY2l0eTowICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2ltYWdlLmZyZWVwaWsuY29tL2ZyZWUtdmVjdG9yLzNkLXBhcGVyLXN0eWxlLXdhbGxwYXBlcl8yMy0yMTQ4NDczNDkyLmpwZ1wiKTtcbn1cblxuaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tbGlzdCB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5sb2dpbi1sb2dvIHtcbiAgcGFkZGluZzogMjBweCAwO1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9naW4tbG9nbyBpbWcge1xuICBtYXgtd2lkdGg6IDEwMHB4O1xufVxuXG4ubGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbmlvbi1idXR0b24ge1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG5pb24tZ3JpZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1yb3cge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1jb2wge1xuICBtaW4td2lkdGg6IDQ1MHB4O1xuICBwYWRkaW5nOiAzMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAwMztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjExKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4ubGlzdC13aWR0aCB7XG4gIHdpZHRoOiA0NTBweCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMjQwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICBpb24tY29sIHtcbiAgICBtaW4taGVpZ2h0OiA2NTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/ui-layouts/signin/signin-one/signin-one.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/ui-layouts/signin/signin-one/signin-one.page.ts ***!
  \*****************************************************************/
/*! exports provided: SigninOnePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninOnePage", function() { return SigninOnePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SigninOnePage = class SigninOnePage {
    constructor() {
        this.showPassword = false;
    }
    ngOnInit() {
    }
    //####### Show / hide password #######//
    onPasswordToggle() {
        this.showPassword = !this.showPassword;
    }
};
SigninOnePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signin-one',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signin-one.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/signin/signin-one/signin-one.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signin-one.page.scss */ "./src/app/ui-layouts/signin/signin-one/signin-one.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SigninOnePage);



/***/ })

}]);
//# sourceMappingURL=ui-layouts-signin-signin-one-signin-one-module-es2015.js.map