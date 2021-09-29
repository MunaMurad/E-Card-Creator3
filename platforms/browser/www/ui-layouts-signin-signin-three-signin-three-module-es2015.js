(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-layouts-signin-signin-three-signin-three-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/signin/signin-three/signin-three.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/signin/signin-three/signin-three.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen=\"true\">\n  <!-- <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"medium\" auto-hide=\"false\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar> -->\n <ion-grid>\n\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-align-self-center\" size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n       \n          <div class=\"login-logo\">\n            <img src=\"assets/appicon.svg\" alt=\"Ionic logo\">\n          </div>\n\n          <form class=\"margin-0-28\">\n            <ion-list mode=\"ios\">\n\n              <!-- ############ -->\n\n              <ion-item lines=\"none\">\n                <ion-label color=\"medium\" position=\"stacked\">Username</ion-label>\n                <ion-input color=\"light\"></ion-input>\n              </ion-item>\n\n              <!-- ############ -->\n\n              <ion-item>\n                <ion-label color=\"light\" position=\"stacked\">E-mail</ion-label>\n                <ion-input color=\"light\"></ion-input>\n              </ion-item>\n\n              <!-- ############ -->\n              <ion-item>\n                <ion-label color=\"light\" position=\"stacked\">Password</ion-label>\n                <ion-input color=\"light\"></ion-input>\n              </ion-item>\n\n               <!-- ############ -->\n              <ion-item  class=\"\">\n                <ion-label color=\"light\" position=\"stacked\">Confirm password</ion-label>\n                <ion-input color=\"light\"></ion-input>\n              </ion-item>         \n              <!-- ############ -->\n              <ion-button class=\"ion-margin-top\" color=\"success\" expand=\"block\" shape=\"\">Create</ion-button>\n              <!-- <ion-button  color=\"primary\"  fill=\"outline\" expand=\"block\" >\n                <ion-icon slot=\"start\"name=\"logo-facebook\"></ion-icon>\n                Signin with facebook\n              </ion-button> -->\n\n              <!-- <span>\n                <p class=\"ion-text-center\">or</p>\n              </span>\n              \n              <ion-button class=\"ion-margin-top\" color=\"primary\" fill=\"outline\" expand=\"block\">\n                <ion-icon slot=\"start\" color=\"primary\" name=\"logo-facebook\"></ion-icon>\n                Signup with Facebook\n              </ion-button>\n              <ion-button  color=\"danger\" fill=\"outline\" expand=\"block\">\n                <ion-icon slot=\"start\" color=\"danger\" name=\"logo-google\"></ion-icon>\n                Singup with Google\n              </ion-button> -->\n\n              <span>\n                <p class=\"ion-text-center\">or</p>\n              </span>\n              <!-- ############ -->\n              <ion-button class=\"ion-margin-top\" color=\"primary\" expand=\"block\">\n                <ion-icon slot=\"start\" color=\"light\" name=\"logo-facebook\"></ion-icon>\n                Signup with Facebook\n              </ion-button>\n              <ion-button  color=\"danger\" expand=\"block\">\n                <ion-icon slot=\"start\" color=\"light\" name=\"logo-google\"></ion-icon>\n                Singup with Google\n              </ion-button>              \n            </ion-list>\n          </form>\n       \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n      \n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/ui-layouts/signin/signin-three/signin-three-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/ui-layouts/signin/signin-three/signin-three-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: SigninThreePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninThreePageRoutingModule", function() { return SigninThreePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _signin_three_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin-three.page */ "./src/app/ui-layouts/signin/signin-three/signin-three.page.ts");




const routes = [
    {
        path: '',
        component: _signin_three_page__WEBPACK_IMPORTED_MODULE_3__["SigninThreePage"]
    }
];
let SigninThreePageRoutingModule = class SigninThreePageRoutingModule {
};
SigninThreePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SigninThreePageRoutingModule);



/***/ }),

/***/ "./src/app/ui-layouts/signin/signin-three/signin-three.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/ui-layouts/signin/signin-three/signin-three.module.ts ***!
  \***********************************************************************/
/*! exports provided: SigninThreePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninThreePageModule", function() { return SigninThreePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _signin_three_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signin-three-routing.module */ "./src/app/ui-layouts/signin/signin-three/signin-three-routing.module.ts");
/* harmony import */ var _signin_three_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signin-three.page */ "./src/app/ui-layouts/signin/signin-three/signin-three.page.ts");







let SigninThreePageModule = class SigninThreePageModule {
};
SigninThreePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _signin_three_routing_module__WEBPACK_IMPORTED_MODULE_5__["SigninThreePageRoutingModule"]
        ],
        declarations: [_signin_three_page__WEBPACK_IMPORTED_MODULE_6__["SigninThreePage"]]
    })
], SigninThreePageModule);



/***/ }),

/***/ "./src/app/ui-layouts/signin/signin-three/signin-three.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/ui-layouts/signin/signin-three/signin-three.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --highlight-color-focused: #fff;\n}\n\nion-toolbar {\n  --opacity:0 !important;\n}\n\nion-content {\n  --background: none;\n  background-position: center center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: url(\"https://image.freepik.com/free-vector/futuristic-technology-background_23-2148494694.jpg\");\n}\n\nion-col {\n  padding: 0px !important;\n}\n\nion-list {\n  --ion-item-background: transparent;\n}\n\n.login-logo {\n  padding: 20px 0;\n  min-height: 100px;\n  text-align: center;\n}\n\n.login-logo img {\n  max-width: 100px;\n}\n\n.list {\n  margin-bottom: 0;\n}\n\nion-button {\n  font-weight: 300;\n}\n\nion-grid {\n  width: 100%;\n  height: 100%;\n}\n\nion-row {\n  height: 100%;\n}\n\nion-col {\n  min-width: 450px;\n  padding: 30px !important;\n  border: 1px solid #00000003;\n  background-color: rgba(0, 0, 0, 0.11);\n  border-radius: 8px;\n}\n\n.list-width {\n  width: 450px !important;\n}\n\n@media (min-width: 240px) and (max-width: 768px) {\n  ion-col {\n    min-height: 650px;\n    border: none;\n    background: transparent;\n    border-radius: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZXRoZWUvSW9uaWNQcm9qZWN0cy9faW9uaWM1L2lvbmljNWZ1bGxhcHBfZmluYWwvc3JjL2FwcC91aS1sYXlvdXRzL3NpZ25pbi9zaWduaW4tdGhyZWUvc2lnbmluLXRocmVlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdWktbGF5b3V0cy9zaWduaW4vc2lnbmluLXRocmVlL3NpZ25pbi10aHJlZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFFRSwrQkFBQTtBQ0pGOztBRFFBO0VBQ0Usc0JBQUE7QUNMRjs7QURRQTtFQUNFLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBSUEsaUhBQUE7QUNSRjs7QURXQTtFQUNFLHVCQUFBO0FDUkY7O0FEVUE7RUFDQyxrQ0FBQTtBQ1BEOztBRFVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNQRjs7QURVQTtFQUNFLGdCQUFBO0FDUEY7O0FEVUE7RUFDRSxnQkFBQTtBQ1BGOztBRFdBO0VBQ0UsZ0JBQUE7QUNSRjs7QURhQTtFQUNJLFdBQUE7RUFDQSxZQXREUTtBQzRDWjs7QURjQTtFQUNJLFlBM0RRO0FDZ0RaOztBRGNBO0VBQ0UsZ0JBQUE7RUFDRSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtBQ1hKOztBRGFBO0VBQ0UsdUJBQUE7QUNWRjs7QURnQkE7RUFLSTtJQUVJLGlCQUFBO0lBQ0EsWUFBQTtJQUVBLHVCQUFBO0lBQ0Esa0JBQUE7RUNuQk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3VpLWxheW91dHMvc2lnbmluL3NpZ25pbi10aHJlZS9zaWduaW4tdGhyZWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHdoaXRlLWNvbG9yOiAjZmZmO1xuJGhlaWdodDEwMDogMTAwJTtcblxuXG5pb24taXRlbSB7XG4gIC8vLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIsICNmMTQ1M2QpO1xuICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOiAjZmZmO1xufVxuXG5cbmlvbi10b29sYmFye1xuICAtLW9wYWNpdHk6MCAhaW1wb3J0YW50O1xuICB9XG5cbmlvbi1jb250ZW50e1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIC8vYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2ltYWdlLmZyZWVwaWsuY29tL2ZyZWUtdmVjdG9yL2dyZWVuLXNoYXBlcy1ncmVlbi1iYWNrZ3JvdW5kXzIzLTIxNDgzNTgyMTIuanBnJyk7XG4gIC8vYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2ltYWdlLmZyZWVwaWsuY29tL2ZyZWUtdmVjdG9yL3N0eWxpc2gtaGV4YWdvbmFsLWxpbmUtcGF0dGVybi1iYWNrZ3JvdW5kXzEwMTctMTk3NDIuanBnJyk7XG4gIFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vaW1hZ2UuZnJlZXBpay5jb20vZnJlZS12ZWN0b3IvZnV0dXJpc3RpYy10ZWNobm9sb2d5LWJhY2tncm91bmRfMjMtMjE0ODQ5NDY5NC5qcGcnKTtcbiB9XG5cbmlvbi1jb2x7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuaW9uLWxpc3Qge1xuIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5sb2dpbi1sb2dvIHtcbiAgcGFkZGluZzogMjBweCAwO1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9naW4tbG9nbyBpbWcge1xuICBtYXgtd2lkdGg6IDEwMHB4O1xufVxuXG4ubGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cblxuaW9uLWJ1dHRvbiB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi8vIyMjIyMjIyMgZGVmYXVsdCBzY3JlZW4gIyMjIyMjIyMvL1xuXG5pb24tZ3JpZCB7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6ICRoZWlnaHQxMDA7XG4gICAgLy9iYWNrZ3JvdW5kOiAjZGZkZmRmO1xufVxuXG5pb24tcm93IHtcbiAgICBoZWlnaHQ6ICRoZWlnaHQxMDA7XG59XG5cbmlvbi1jb2wge1xuICBtaW4td2lkdGg6IDQ1MHB4O1xuICAgIHBhZGRpbmc6IDMwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwMDM7IC8vMXB4IHNvbGlkICM0ODhhZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjExKTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4ubGlzdC13aWR0aHtcbiAgd2lkdGg6IDQ1MHB4ICFpbXBvcnRhbnQ7XG4gIFxufVxuXG5cbi8vIyMjIyMjIyMgbW9iaWxlIHNjcmVlbiAjIyMjIyMjIy8vXG5AbWVkaWEgKG1pbi13aWR0aDogMjQwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuXG4gICAgaW9uLWdyaWQge1xuICAgICAgICAvL2JhY2tncm91bmQ6ICR3aGl0ZS1jb2xvcjtcbiAgICB9XG4gICAgaW9uLWNvbCB7XG4gICAgIC8vIG1pbi13aWR0aDogNDUwcHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDY1MHB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIC8vaGVpZ2h0OiA0NTBweCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIH1cbn0iLCJpb24taXRlbSB7XG4gIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6ICNmZmY7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1vcGFjaXR5OjAgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vaW1hZ2UuZnJlZXBpay5jb20vZnJlZS12ZWN0b3IvZnV0dXJpc3RpYy10ZWNobm9sb2d5LWJhY2tncm91bmRfMjMtMjE0ODQ5NDY5NC5qcGdcIik7XG59XG5cbmlvbi1jb2wge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWxpc3Qge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4ubG9naW4tbG9nbyB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luLWxvZ28gaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbn1cblxuLmxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuaW9uLWdyaWQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pb24tcm93IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pb24tY29sIHtcbiAgbWluLXdpZHRoOiA0NTBweDtcbiAgcGFkZGluZzogMzBweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwMDM7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmxpc3Qtd2lkdGgge1xuICB3aWR0aDogNDUwcHggIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDI0MHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgaW9uLWNvbCB7XG4gICAgbWluLWhlaWdodDogNjUwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/ui-layouts/signin/signin-three/signin-three.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/ui-layouts/signin/signin-three/signin-three.page.ts ***!
  \*********************************************************************/
/*! exports provided: SigninThreePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninThreePage", function() { return SigninThreePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SigninThreePage = class SigninThreePage {
    constructor() { }
    ngOnInit() {
    }
};
SigninThreePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signin-three',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signin-three.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/signin/signin-three/signin-three.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signin-three.page.scss */ "./src/app/ui-layouts/signin/signin-three/signin-three.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SigninThreePage);



/***/ })

}]);
//# sourceMappingURL=ui-layouts-signin-signin-three-signin-three-module-es2015.js.map