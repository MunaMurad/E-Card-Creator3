(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-layouts-travel-travel-category-travel-category-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/travel/travel-category/travel-category.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/travel/travel-category/travel-category.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>travel-category</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/ui-layouts/travel/travel-category/travel-category-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/ui-layouts/travel/travel-category/travel-category-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: TravelCategoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelCategoryPageRoutingModule", function() { return TravelCategoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _travel_category_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./travel-category.page */ "./src/app/ui-layouts/travel/travel-category/travel-category.page.ts");




const routes = [
    {
        path: '',
        component: _travel_category_page__WEBPACK_IMPORTED_MODULE_3__["TravelCategoryPage"]
    }
];
let TravelCategoryPageRoutingModule = class TravelCategoryPageRoutingModule {
};
TravelCategoryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TravelCategoryPageRoutingModule);



/***/ }),

/***/ "./src/app/ui-layouts/travel/travel-category/travel-category.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/ui-layouts/travel/travel-category/travel-category.module.ts ***!
  \*****************************************************************************/
/*! exports provided: TravelCategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelCategoryPageModule", function() { return TravelCategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _travel_category_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./travel-category-routing.module */ "./src/app/ui-layouts/travel/travel-category/travel-category-routing.module.ts");
/* harmony import */ var _travel_category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./travel-category.page */ "./src/app/ui-layouts/travel/travel-category/travel-category.page.ts");







let TravelCategoryPageModule = class TravelCategoryPageModule {
};
TravelCategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _travel_category_routing_module__WEBPACK_IMPORTED_MODULE_5__["TravelCategoryPageRoutingModule"]
        ],
        declarations: [_travel_category_page__WEBPACK_IMPORTED_MODULE_6__["TravelCategoryPage"]]
    })
], TravelCategoryPageModule);



/***/ }),

/***/ "./src/app/ui-layouts/travel/travel-category/travel-category.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/ui-layouts/travel/travel-category/travel-category.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWxheW91dHMvdHJhdmVsL3RyYXZlbC1jYXRlZ29yeS90cmF2ZWwtY2F0ZWdvcnkucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ui-layouts/travel/travel-category/travel-category.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/ui-layouts/travel/travel-category/travel-category.page.ts ***!
  \***************************************************************************/
/*! exports provided: TravelCategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelCategoryPage", function() { return TravelCategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TravelCategoryPage = class TravelCategoryPage {
    constructor() { }
    ngOnInit() {
    }
};
TravelCategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-travel-category',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./travel-category.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/travel/travel-category/travel-category.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./travel-category.page.scss */ "./src/app/ui-layouts/travel/travel-category/travel-category.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TravelCategoryPage);



/***/ })

}]);
//# sourceMappingURL=ui-layouts-travel-travel-category-travel-category-module-es2015.js.map