(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-layouts-realestate-real-detail-real-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/realestate/real-detail/real-detail.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/realestate/real-detail/real-detail.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>real-detail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/ui-layouts/realestate/real-detail/real-detail-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/ui-layouts/realestate/real-detail/real-detail-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: RealDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealDetailPageRoutingModule", function() { return RealDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _real_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./real-detail.page */ "./src/app/ui-layouts/realestate/real-detail/real-detail.page.ts");




const routes = [
    {
        path: '',
        component: _real_detail_page__WEBPACK_IMPORTED_MODULE_3__["RealDetailPage"]
    }
];
let RealDetailPageRoutingModule = class RealDetailPageRoutingModule {
};
RealDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RealDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/ui-layouts/realestate/real-detail/real-detail.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/ui-layouts/realestate/real-detail/real-detail.module.ts ***!
  \*************************************************************************/
/*! exports provided: RealDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealDetailPageModule", function() { return RealDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _real_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./real-detail-routing.module */ "./src/app/ui-layouts/realestate/real-detail/real-detail-routing.module.ts");
/* harmony import */ var _real_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./real-detail.page */ "./src/app/ui-layouts/realestate/real-detail/real-detail.page.ts");







let RealDetailPageModule = class RealDetailPageModule {
};
RealDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _real_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["RealDetailPageRoutingModule"]
        ],
        declarations: [_real_detail_page__WEBPACK_IMPORTED_MODULE_6__["RealDetailPage"]]
    })
], RealDetailPageModule);



/***/ }),

/***/ "./src/app/ui-layouts/realestate/real-detail/real-detail.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/ui-layouts/realestate/real-detail/real-detail.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWxheW91dHMvcmVhbGVzdGF0ZS9yZWFsLWRldGFpbC9yZWFsLWRldGFpbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ui-layouts/realestate/real-detail/real-detail.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/ui-layouts/realestate/real-detail/real-detail.page.ts ***!
  \***********************************************************************/
/*! exports provided: RealDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealDetailPage", function() { return RealDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RealDetailPage = class RealDetailPage {
    constructor() { }
    ngOnInit() {
    }
};
RealDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-real-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./real-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/realestate/real-detail/real-detail.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./real-detail.page.scss */ "./src/app/ui-layouts/realestate/real-detail/real-detail.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RealDetailPage);



/***/ })

}]);
//# sourceMappingURL=ui-layouts-realestate-real-detail-real-detail-module-es2015.js.map