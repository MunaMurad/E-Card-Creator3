(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-layouts-shopping-shopping-detail-shopping-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/shopping/shopping-detail/shopping-detail.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/shopping/shopping-detail/shopping-detail.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>shopping-detail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/ui-layouts/shopping/shopping-detail/shopping-detail-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/ui-layouts/shopping/shopping-detail/shopping-detail-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ShoppingDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingDetailPageRoutingModule", function() { return ShoppingDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shopping_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shopping-detail.page */ "./src/app/ui-layouts/shopping/shopping-detail/shopping-detail.page.ts");




const routes = [
    {
        path: '',
        component: _shopping_detail_page__WEBPACK_IMPORTED_MODULE_3__["ShoppingDetailPage"]
    }
];
let ShoppingDetailPageRoutingModule = class ShoppingDetailPageRoutingModule {
};
ShoppingDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ShoppingDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/ui-layouts/shopping/shopping-detail/shopping-detail.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/ui-layouts/shopping/shopping-detail/shopping-detail.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ShoppingDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingDetailPageModule", function() { return ShoppingDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _shopping_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shopping-detail-routing.module */ "./src/app/ui-layouts/shopping/shopping-detail/shopping-detail-routing.module.ts");
/* harmony import */ var _shopping_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shopping-detail.page */ "./src/app/ui-layouts/shopping/shopping-detail/shopping-detail.page.ts");







let ShoppingDetailPageModule = class ShoppingDetailPageModule {
};
ShoppingDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shopping_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShoppingDetailPageRoutingModule"]
        ],
        declarations: [_shopping_detail_page__WEBPACK_IMPORTED_MODULE_6__["ShoppingDetailPage"]]
    })
], ShoppingDetailPageModule);



/***/ }),

/***/ "./src/app/ui-layouts/shopping/shopping-detail/shopping-detail.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/ui-layouts/shopping/shopping-detail/shopping-detail.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWxheW91dHMvc2hvcHBpbmcvc2hvcHBpbmctZGV0YWlsL3Nob3BwaW5nLWRldGFpbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ui-layouts/shopping/shopping-detail/shopping-detail.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/ui-layouts/shopping/shopping-detail/shopping-detail.page.ts ***!
  \*****************************************************************************/
/*! exports provided: ShoppingDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingDetailPage", function() { return ShoppingDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ShoppingDetailPage = class ShoppingDetailPage {
    constructor() { }
    ngOnInit() {
    }
};
ShoppingDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shopping-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shopping-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/shopping/shopping-detail/shopping-detail.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shopping-detail.page.scss */ "./src/app/ui-layouts/shopping/shopping-detail/shopping-detail.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ShoppingDetailPage);



/***/ })

}]);
//# sourceMappingURL=ui-layouts-shopping-shopping-detail-shopping-detail-module-es2015.js.map