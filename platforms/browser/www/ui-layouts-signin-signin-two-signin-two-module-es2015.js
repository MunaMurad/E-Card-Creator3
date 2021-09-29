(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-layouts-signin-signin-two-signin-two-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/signin/signin-two/signin-two.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/signin/signin-two/signin-two.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <ion-content fullscreen=\"true\">\n  <!-- <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"medium\" auto-hide=\"false\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar> -->\n <ion-grid>\n\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-align-self-center\" size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n       \n          <!-- <div class=\"login-logo\">\n            <img src=\"assets/appicon.svg\" alt=\"Ionic logo\">\n          </div> -->\n          <div class=\"margin-0-28\">\n          <h2>Welcome to school administrator</h2>\n          <ion-list class=\"ion-margin-top ion-padding\">\n            <!-- ############ -->\n            <ion-item  class=\"roundedInput8px margin-bottom-10\">\n              <ion-label>\n                <ion-icon name=\"person-add-outline\"></ion-icon>\n                </ion-label>\n              <ion-input placeholder=\"Username\" ></ion-input>\n            </ion-item>\n            <!-- ############ -->                              \n            <ion-item  class=\"roundedInput8px margin-bottom-10\">\n\n              <ion-label slot=\"start\" class=\"margin-right-8\">\n                <ion-icon name=\"lock-closed-outline\"></ion-icon>\n                </ion-label>\n\n              <ion-input placeholder=\"Password\" [type]=\"showPassword ? 'text' : 'password'\" clearOnEdit=\"false\"></ion-input>\n\n                  <!-- ### Show/hide password ### -->    \n                  <div (click)=\"onPasswordToggle()\" ion-button fill=\"clear\" size=\"small\" >\n                    <ion-icon  slot=\"icon-only\" color=\"medium\" [name]=\"showPassword ? 'eye-off' : 'eye'\"></ion-icon>\n                  </div>\n\n            </ion-item>\n\n            <!-- ############ -->\n            <span >\n              <p class=\"ion-text-right\">Forgot password?</p>\n            </span>\n            <!-- ############ -->\n            <ion-button mode=\"ios\" class=\"ion-margin-top\" color=\"success\" expand=\"block\" >Signin</ion-button>\n          </ion-list>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n      \n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/ui-layouts/signin/signin-two/signin-two-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/ui-layouts/signin/signin-two/signin-two-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: SigninTwoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninTwoPageRoutingModule", function() { return SigninTwoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _signin_two_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin-two.page */ "./src/app/ui-layouts/signin/signin-two/signin-two.page.ts");




const routes = [
    {
        path: '',
        component: _signin_two_page__WEBPACK_IMPORTED_MODULE_3__["SigninTwoPage"]
    }
];
let SigninTwoPageRoutingModule = class SigninTwoPageRoutingModule {
};
SigninTwoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SigninTwoPageRoutingModule);



/***/ }),

/***/ "./src/app/ui-layouts/signin/signin-two/signin-two.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/ui-layouts/signin/signin-two/signin-two.module.ts ***!
  \*******************************************************************/
/*! exports provided: SigninTwoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninTwoPageModule", function() { return SigninTwoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _signin_two_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signin-two-routing.module */ "./src/app/ui-layouts/signin/signin-two/signin-two-routing.module.ts");
/* harmony import */ var _signin_two_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signin-two.page */ "./src/app/ui-layouts/signin/signin-two/signin-two.page.ts");







let SigninTwoPageModule = class SigninTwoPageModule {
};
SigninTwoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _signin_two_routing_module__WEBPACK_IMPORTED_MODULE_5__["SigninTwoPageRoutingModule"]
        ],
        declarations: [_signin_two_page__WEBPACK_IMPORTED_MODULE_6__["SigninTwoPage"]]
    })
], SigninTwoPageModule);



/***/ }),

/***/ "./src/app/ui-layouts/signin/signin-two/signin-two.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/ui-layouts/signin/signin-two/signin-two.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --opacity:0 !important;\n}\n\nion-col {\n  padding: 0px !important;\n}\n\n.login-logo {\n  padding: 20px 0;\n  min-height: 100px;\n  text-align: center;\n}\n\n.login-logo img {\n  max-width: 100px;\n}\n\n.list {\n  margin-bottom: 0;\n}\n\nion-button {\n  font-weight: 300;\n}\n\nion-grid {\n  width: 100%;\n  height: 100%;\n  background: #dfdfdf;\n}\n\nion-row {\n  height: 100%;\n}\n\nion-col {\n  min-width: 450px;\n  padding: 30px !important;\n  border: 1px solid #eee;\n  background-color: #fff;\n  border-radius: 8px;\n}\n\n.list-width {\n  width: 450px !important;\n}\n\n@media (min-width: 240px) and (max-width: 768px) {\n  ion-grid {\n    background: #fff;\n  }\n\n  ion-col {\n    min-height: 650px;\n    border: none;\n    background: transparent;\n    border-radius: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZXRoZWUvSW9uaWNQcm9qZWN0cy9faW9uaWM1L2lvbmljNWZ1bGxhcHBfZmluYWwvc3JjL2FwcC91aS1sYXlvdXRzL3NpZ25pbi9zaWduaW4tdHdvL3NpZ25pbi10d28ucGFnZS5zY3NzIiwic3JjL2FwcC91aS1sYXlvdXRzL3NpZ25pbi9zaWduaW4tdHdvL3NpZ25pbi10d28ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0Usc0JBQUE7QUNGSjs7QURnQkU7RUFDRSx1QkFBQTtBQ2JKOztBRG9CRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDakJKOztBRG9CRTtFQUNFLGdCQUFBO0FDakJKOztBRG9CRTtFQUNFLGdCQUFBO0FDakJKOztBRHFCRTtFQUNFLGdCQUFBO0FDbEJKOztBRHVCRTtFQUNJLFdBQUE7RUFDQSxZQWhEUTtFQWlEUixtQkFBQTtBQ3BCTjs7QUR1QkU7RUFDSSxZQXJEUTtBQ2lDZDs7QUR1QkU7RUFDRSxnQkFBQTtFQUNFLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDcEJOOztBRHNCRTtFQUNFLHVCQUFBO0FDbkJKOztBRHlCRTtFQUVJO0lBQ0ksZ0JBMUVNO0VDbURkOztFRHlCSTtJQUVJLGlCQUFBO0lBQ0EsWUFBQTtJQUVBLHVCQUFBO0lBQ0Esa0JBQUE7RUN4QlI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3VpLWxheW91dHMvc2lnbmluL3NpZ25pbi10d28vc2lnbmluLXR3by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICR3aGl0ZS1jb2xvcjogI2ZmZjtcbiAgJGhlaWdodDEwMDogMTAwJTtcblxuICBpb24tdG9vbGJhcntcbiAgICAtLW9wYWNpdHk6MCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAvLyBpb24tY29udGVudHtcbiAgLy8gICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIC8vICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgLy8gICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAvLyAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIC8vICAgLy9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vaW1hZ2UuZnJlZXBpay5jb20vZnJlZS12ZWN0b3IvZ3JlZW4tc2hhcGVzLWdyZWVuLWJhY2tncm91bmRfMjMtMjE0ODM1ODIxMi5qcGcnKTtcbiAgLy8gICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9pbWFnZS5mcmVlcGlrLmNvbS9mcmVlLXZlY3Rvci9zdHlsaXNoLWhleGFnb25hbC1saW5lLXBhdHRlcm4tYmFja2dyb3VuZF8xMDE3LTE5NzQyLmpwZycpO1xuICAgIFxuICAvLyAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9pbWFnZS5mcmVlcGlrLmNvbS9mcmVlLXZlY3Rvci8zZC1wYXBlci1zdHlsZS13YWxscGFwZXJfMjMtMjE0ODQ3MzQ5Mi5qcGcnKTtcbiAgLy8gIH1cblxuICBpb24tY29se1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICB9XG4gIGlvbi1saXN0IHtcbiAgIC8vLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLy8gbWFyZ2luOiAwcHggMjVweDtcbiAgfVxuXG4gIC5sb2dpbi1sb2dvIHtcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAubG9naW4tbG9nbyBpbWcge1xuICAgIG1heC13aWR0aDogMTAwcHg7XG4gIH1cbiAgXG4gIC5saXN0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIFxuICBcbiAgaW9uLWJ1dHRvbiB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbiAgXG4gIC8vIyMjIyMjIyMgZGVmYXVsdCBzY3JlZW4gIyMjIyMjIyMvL1xuXG4gIGlvbi1ncmlkIHtcbiAgICAgIHdpZHRoOjEwMCU7XG4gICAgICBoZWlnaHQ6ICRoZWlnaHQxMDA7XG4gICAgICBiYWNrZ3JvdW5kOiAjZGZkZmRmO1xuICB9XG4gIFxuICBpb24tcm93IHtcbiAgICAgIGhlaWdodDogJGhlaWdodDEwMDtcbiAgfVxuICBcbiAgaW9uLWNvbCB7XG4gICAgbWluLXdpZHRoOiA0NTBweDtcbiAgICAgIHBhZGRpbmc6IDMwcHggIWltcG9ydGFudDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7IC8vMXB4IHNvbGlkICM0ODhhZmY7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB9XG4gIC5saXN0LXdpZHRoe1xuICAgIHdpZHRoOiA0NTBweCAhaW1wb3J0YW50O1xuICAgIFxuICB9XG4gIFxuXG4gIC8vIyMjIyMjIyMgbW9iaWxlIHNjcmVlbiAjIyMjIyMjIy8vXG4gIEBtZWRpYSAobWluLXdpZHRoOiAyNDBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cbiAgICAgIGlvbi1ncmlkIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGUtY29sb3I7XG4gICAgICB9XG4gICAgICBpb24tY29sIHtcbiAgICAgICAvLyBtaW4td2lkdGg6IDQ1MHB4O1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDY1MHB4O1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAvL2hlaWdodDogNDUwcHggIWltcG9ydGFudDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICB9XG4gIH0iLCJpb24tdG9vbGJhciB7XG4gIC0tb3BhY2l0eTowICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb2wge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmxvZ2luLWxvZ28ge1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dpbi1sb2dvIGltZyB7XG4gIG1heC13aWR0aDogMTAwcHg7XG59XG5cbi5saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbmlvbi1ncmlkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2RmZGZkZjtcbn1cblxuaW9uLXJvdyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLWNvbCB7XG4gIG1pbi13aWR0aDogNDUwcHg7XG4gIHBhZGRpbmc6IDMwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4ubGlzdC13aWR0aCB7XG4gIHdpZHRoOiA0NTBweCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMjQwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICBpb24tZ3JpZCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgfVxuXG4gIGlvbi1jb2wge1xuICAgIG1pbi1oZWlnaHQ6IDY1MHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/ui-layouts/signin/signin-two/signin-two.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/ui-layouts/signin/signin-two/signin-two.page.ts ***!
  \*****************************************************************/
/*! exports provided: SigninTwoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninTwoPage", function() { return SigninTwoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SigninTwoPage = class SigninTwoPage {
    constructor() {
        this.rating = 1;
        this.showPassword = false;
    }
    ngOnInit() {
    }
    //####### Show / hide password #######//
    onPasswordToggle() {
        this.showPassword = !this.showPassword;
    }
};
SigninTwoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signin-two',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signin-two.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/signin/signin-two/signin-two.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signin-two.page.scss */ "./src/app/ui-layouts/signin/signin-two/signin-two.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SigninTwoPage);



/***/ })

}]);
//# sourceMappingURL=ui-layouts-signin-signin-two-signin-two-module-es2015.js.map