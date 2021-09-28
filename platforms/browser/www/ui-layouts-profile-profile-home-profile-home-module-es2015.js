(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-layouts-profile-profile-home-profile-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/profile/profile-home/profile-home.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/profile/profile-home/profile-home.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Profile-home</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list >\n\n        <ion-item routerLink=\"/profile-one\">\n          <ion-icon slot=\"start\" icon=\"hardware-chip-outline\"class=\"component-icon component-icon-primary\"></ion-icon>\n          <ion-label>Profile 1</ion-label>\n        </ion-item>\n \n        <ion-item routerLink=\"/profile-two\">\n          <ion-icon slot=\"start\" icon=\"hardware-chip-outline\"class=\"component-icon component-icon-primary\"></ion-icon>\n          <ion-label>Profile 2</ion-label>\n        </ion-item>\n      \n        <ion-item routerLink=\"/profile-three\">\n          <ion-icon slot=\"start\" icon=\"hardware-chip-outline\"class=\"component-icon component-icon-primary\"></ion-icon>\n          <ion-label>Profile 3</ion-label>\n        </ion-item>\n\n        <ion-item routerLink=\"/profile-four\">\n          <ion-icon slot=\"start\" icon=\"hardware-chip-outline\"class=\"component-icon component-icon-primary\"></ion-icon>\n          <ion-label>Profile 4</ion-label>\n        </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/ui-layouts/profile/profile-home/profile-home-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/ui-layouts/profile/profile-home/profile-home-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: ProfileHomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileHomePageRoutingModule", function() { return ProfileHomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profile_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-home.page */ "./src/app/ui-layouts/profile/profile-home/profile-home.page.ts");




const routes = [
    {
        path: '',
        component: _profile_home_page__WEBPACK_IMPORTED_MODULE_3__["ProfileHomePage"]
    }
];
let ProfileHomePageRoutingModule = class ProfileHomePageRoutingModule {
};
ProfileHomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfileHomePageRoutingModule);



/***/ }),

/***/ "./src/app/ui-layouts/profile/profile-home/profile-home.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/ui-layouts/profile/profile-home/profile-home.module.ts ***!
  \************************************************************************/
/*! exports provided: ProfileHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileHomePageModule", function() { return ProfileHomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-home-routing.module */ "./src/app/ui-layouts/profile/profile-home/profile-home-routing.module.ts");
/* harmony import */ var _profile_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-home.page */ "./src/app/ui-layouts/profile/profile-home/profile-home.page.ts");







let ProfileHomePageModule = class ProfileHomePageModule {
};
ProfileHomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_home_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileHomePageRoutingModule"]
        ],
        declarations: [_profile_home_page__WEBPACK_IMPORTED_MODULE_6__["ProfileHomePage"]]
    })
], ProfileHomePageModule);



/***/ }),

/***/ "./src/app/ui-layouts/profile/profile-home/profile-home.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/ui-layouts/profile/profile-home/profile-home.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWxheW91dHMvcHJvZmlsZS9wcm9maWxlLWhvbWUvcHJvZmlsZS1ob21lLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ui-layouts/profile/profile-home/profile-home.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/ui-layouts/profile/profile-home/profile-home.page.ts ***!
  \**********************************************************************/
/*! exports provided: ProfileHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileHomePage", function() { return ProfileHomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfileHomePage = class ProfileHomePage {
    constructor() { }
    ngOnInit() {
    }
};
ProfileHomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/profile/profile-home/profile-home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile-home.page.scss */ "./src/app/ui-layouts/profile/profile-home/profile-home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProfileHomePage);



/***/ })

}]);
//# sourceMappingURL=ui-layouts-profile-profile-home-profile-home-module-es2015.js.map