(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firebase-auth-fire-profile-fire-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/firebase-auth/fire-profile/fire-profile.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/firebase-auth/fire-profile/fire-profile.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>fire-profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/firebase-auth/fire-profile/fire-profile-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/firebase-auth/fire-profile/fire-profile-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: FireProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireProfilePageRoutingModule", function() { return FireProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _fire_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fire-profile.page */ "./src/app/firebase-auth/fire-profile/fire-profile.page.ts");




const routes = [
    {
        path: '',
        component: _fire_profile_page__WEBPACK_IMPORTED_MODULE_3__["FireProfilePage"]
    }
];
let FireProfilePageRoutingModule = class FireProfilePageRoutingModule {
};
FireProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FireProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/firebase-auth/fire-profile/fire-profile.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/firebase-auth/fire-profile/fire-profile.module.ts ***!
  \*******************************************************************/
/*! exports provided: FireProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireProfilePageModule", function() { return FireProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _fire_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fire-profile-routing.module */ "./src/app/firebase-auth/fire-profile/fire-profile-routing.module.ts");
/* harmony import */ var _fire_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fire-profile.page */ "./src/app/firebase-auth/fire-profile/fire-profile.page.ts");







let FireProfilePageModule = class FireProfilePageModule {
};
FireProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _fire_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["FireProfilePageRoutingModule"]
        ],
        declarations: [_fire_profile_page__WEBPACK_IMPORTED_MODULE_6__["FireProfilePage"]]
    })
], FireProfilePageModule);



/***/ }),

/***/ "./src/app/firebase-auth/fire-profile/fire-profile.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/firebase-auth/fire-profile/fire-profile.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpcmViYXNlLWF1dGgvZmlyZS1wcm9maWxlL2ZpcmUtcHJvZmlsZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/firebase-auth/fire-profile/fire-profile.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/firebase-auth/fire-profile/fire-profile.page.ts ***!
  \*****************************************************************/
/*! exports provided: FireProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireProfilePage", function() { return FireProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FireProfilePage = class FireProfilePage {
    constructor() { }
    ngOnInit() {
    }
};
FireProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fire-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fire-profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/firebase-auth/fire-profile/fire-profile.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fire-profile.page.scss */ "./src/app/firebase-auth/fire-profile/fire-profile.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FireProfilePage);



/***/ })

}]);
//# sourceMappingURL=firebase-auth-fire-profile-fire-profile-module-es2015.js.map