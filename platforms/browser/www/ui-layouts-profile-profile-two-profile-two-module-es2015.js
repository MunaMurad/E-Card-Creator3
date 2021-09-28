(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-layouts-profile-profile-two-profile-two-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/profile/profile-two/profile-two.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/profile/profile-two/profile-two.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>profile-two</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- /////////// Profile image on left-side /////////// -->\n  <ion-row padding>\n    <ion-col col-3>\n      <!--<img src=\"{{(profile | async)?.imgProfile}}\" class=\"avatar\" alt=\"\">-->\n         <ion-avatar class=\"avatar\">\n              <img src=\"{{(profile | async)?.imgProfile}}\" class=\"avatar\"/>  \n          </ion-avatar>    \n    </ion-col>\n    <ion-col col-3 text-center>\n      <h5>21</h5>\n      <p no-padding no-margin>posts</p>\n    </ion-col>\n    <ion-col col-3 text-center>\n      <h5>114</h5>\n      <p no-paddin no-margin>followers</p>\n    </ion-col>\n    <ion-col col-3 text-center>\n      <h5>119</h5>\n      <p no-paddin no-margin>following</p>\n    </ion-col>\n  </ion-row>\n  <ion-item lines=\"none\">\n    <ion-thumbnail slot=\"start\">\n      <div class=\"profile\">\n        <img src=\"https://ionicframework.com/docs/demos/api/list/avatar-luke.png\">\n      </div>\n    </ion-thumbnail>\n    <ion-label>\n      <h2>Thomas jonior Kunly</h2>\n      <p>Sydney, Australia</p>\n    </ion-label>\n    <ion-button fill=\"outline\" slot=\"end\">View</ion-button>\n  </ion-item>\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/ui-layouts/profile/profile-two/profile-two-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/ui-layouts/profile/profile-two/profile-two-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: ProfileTwoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileTwoPageRoutingModule", function() { return ProfileTwoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profile_two_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-two.page */ "./src/app/ui-layouts/profile/profile-two/profile-two.page.ts");




const routes = [
    {
        path: '',
        component: _profile_two_page__WEBPACK_IMPORTED_MODULE_3__["ProfileTwoPage"]
    }
];
let ProfileTwoPageRoutingModule = class ProfileTwoPageRoutingModule {
};
ProfileTwoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfileTwoPageRoutingModule);



/***/ }),

/***/ "./src/app/ui-layouts/profile/profile-two/profile-two.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/ui-layouts/profile/profile-two/profile-two.module.ts ***!
  \**********************************************************************/
/*! exports provided: ProfileTwoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileTwoPageModule", function() { return ProfileTwoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_two_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-two-routing.module */ "./src/app/ui-layouts/profile/profile-two/profile-two-routing.module.ts");
/* harmony import */ var _profile_two_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-two.page */ "./src/app/ui-layouts/profile/profile-two/profile-two.page.ts");







let ProfileTwoPageModule = class ProfileTwoPageModule {
};
ProfileTwoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_two_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileTwoPageRoutingModule"]
        ],
        declarations: [_profile_two_page__WEBPACK_IMPORTED_MODULE_6__["ProfileTwoPage"]]
    })
], ProfileTwoPageModule);



/***/ }),

/***/ "./src/app/ui-layouts/profile/profile-two/profile-two.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/ui-layouts/profile/profile-two/profile-two.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile img {\n  width: 70px;\n  border-radius: 50%;\n  padding: 1px;\n  border: 2px solid #ccc;\n  background-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZXRoZWUvSW9uaWNQcm9qZWN0cy9faW9uaWM1L2lvbmljNWZ1bGxhcHBfZmluYWwvc3JjL2FwcC91aS1sYXlvdXRzL3Byb2ZpbGUvcHJvZmlsZS10d28vcHJvZmlsZS10d28ucGFnZS5zY3NzIiwic3JjL2FwcC91aS1sYXlvdXRzL3Byb2ZpbGUvcHJvZmlsZS10d28vcHJvZmlsZS10d28ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3VpLWxheW91dHMvcHJvZmlsZS9wcm9maWxlLXR3by9wcm9maWxlLXR3by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZSBpbWd7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBhZGRpbmc6MXB4O1xuICAgIGJvcmRlcjoycHggc29saWQgI2NjYztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XG4gICAgLy9tYXJnaW4tdG9wOiBjYWxjKC0xICogdmFyKC0taW9uLXNhZmUtYXJlYS10b3ApKTtcbn0iLCIucHJvZmlsZSBpbWcge1xuICB3aWR0aDogNzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiAxcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59Il19 */");

/***/ }),

/***/ "./src/app/ui-layouts/profile/profile-two/profile-two.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/ui-layouts/profile/profile-two/profile-two.page.ts ***!
  \********************************************************************/
/*! exports provided: ProfileTwoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileTwoPage", function() { return ProfileTwoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfileTwoPage = class ProfileTwoPage {
    constructor() { }
    ngOnInit() {
    }
};
ProfileTwoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-two',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-two.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/profile/profile-two/profile-two.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile-two.page.scss */ "./src/app/ui-layouts/profile/profile-two/profile-two.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProfileTwoPage);



/***/ })

}]);
//# sourceMappingURL=ui-layouts-profile-profile-two-profile-two-module-es2015.js.map