(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firebase-crud-fire-update-fire-update-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/firebase-crud/fire-update/fire-update.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/firebase-crud/fire-update/fire-update.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>fire-update</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/firebase-crud/fire-update/fire-update-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/firebase-crud/fire-update/fire-update-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: FireUpdatePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireUpdatePageRoutingModule", function() { return FireUpdatePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _fire_update_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fire-update.page */ "./src/app/firebase-crud/fire-update/fire-update.page.ts");




const routes = [
    {
        path: '',
        component: _fire_update_page__WEBPACK_IMPORTED_MODULE_3__["FireUpdatePage"]
    }
];
let FireUpdatePageRoutingModule = class FireUpdatePageRoutingModule {
};
FireUpdatePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FireUpdatePageRoutingModule);



/***/ }),

/***/ "./src/app/firebase-crud/fire-update/fire-update.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/firebase-crud/fire-update/fire-update.module.ts ***!
  \*****************************************************************/
/*! exports provided: FireUpdatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireUpdatePageModule", function() { return FireUpdatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _fire_update_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fire-update-routing.module */ "./src/app/firebase-crud/fire-update/fire-update-routing.module.ts");
/* harmony import */ var _fire_update_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fire-update.page */ "./src/app/firebase-crud/fire-update/fire-update.page.ts");







let FireUpdatePageModule = class FireUpdatePageModule {
};
FireUpdatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _fire_update_routing_module__WEBPACK_IMPORTED_MODULE_5__["FireUpdatePageRoutingModule"]
        ],
        declarations: [_fire_update_page__WEBPACK_IMPORTED_MODULE_6__["FireUpdatePage"]]
    })
], FireUpdatePageModule);



/***/ }),

/***/ "./src/app/firebase-crud/fire-update/fire-update.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/firebase-crud/fire-update/fire-update.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpcmViYXNlLWNydWQvZmlyZS11cGRhdGUvZmlyZS11cGRhdGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/firebase-crud/fire-update/fire-update.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/firebase-crud/fire-update/fire-update.page.ts ***!
  \***************************************************************/
/*! exports provided: FireUpdatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireUpdatePage", function() { return FireUpdatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FireUpdatePage = class FireUpdatePage {
    constructor() { }
    ngOnInit() {
    }
};
FireUpdatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fire-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fire-update.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/firebase-crud/fire-update/fire-update.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fire-update.page.scss */ "./src/app/firebase-crud/fire-update/fire-update.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FireUpdatePage);



/***/ })

}]);
//# sourceMappingURL=firebase-crud-fire-update-fire-update-module-es2015.js.map