(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-layouts-shopping-shopping-category-shopping-category-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/shopping/shopping-category/shopping-category.page.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/shopping/shopping-category/shopping-category.page.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>shopping-category</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/ui-layouts/shopping/shopping-category/shopping-category-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/ui-layouts/shopping/shopping-category/shopping-category-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: ShoppingCategoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCategoryPageRoutingModule", function() { return ShoppingCategoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shopping_category_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shopping-category.page */ "./src/app/ui-layouts/shopping/shopping-category/shopping-category.page.ts");




const routes = [
    {
        path: '',
        component: _shopping_category_page__WEBPACK_IMPORTED_MODULE_3__["ShoppingCategoryPage"]
    }
];
let ShoppingCategoryPageRoutingModule = class ShoppingCategoryPageRoutingModule {
};
ShoppingCategoryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ShoppingCategoryPageRoutingModule);



/***/ }),

/***/ "./src/app/ui-layouts/shopping/shopping-category/shopping-category.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/ui-layouts/shopping/shopping-category/shopping-category.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ShoppingCategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCategoryPageModule", function() { return ShoppingCategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _shopping_category_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shopping-category-routing.module */ "./src/app/ui-layouts/shopping/shopping-category/shopping-category-routing.module.ts");
/* harmony import */ var _shopping_category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shopping-category.page */ "./src/app/ui-layouts/shopping/shopping-category/shopping-category.page.ts");







let ShoppingCategoryPageModule = class ShoppingCategoryPageModule {
};
ShoppingCategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shopping_category_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShoppingCategoryPageRoutingModule"]
        ],
        declarations: [_shopping_category_page__WEBPACK_IMPORTED_MODULE_6__["ShoppingCategoryPage"]]
    })
], ShoppingCategoryPageModule);



/***/ }),

/***/ "./src/app/ui-layouts/shopping/shopping-category/shopping-category.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/ui-layouts/shopping/shopping-category/shopping-category.page.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWxheW91dHMvc2hvcHBpbmcvc2hvcHBpbmctY2F0ZWdvcnkvc2hvcHBpbmctY2F0ZWdvcnkucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ui-layouts/shopping/shopping-category/shopping-category.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/ui-layouts/shopping/shopping-category/shopping-category.page.ts ***!
  \*********************************************************************************/
/*! exports provided: ShoppingCategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCategoryPage", function() { return ShoppingCategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ShoppingCategoryPage = class ShoppingCategoryPage {
    constructor() { }
    ngOnInit() {
    }
};
ShoppingCategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shopping-category',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shopping-category.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/shopping/shopping-category/shopping-category.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shopping-category.page.scss */ "./src/app/ui-layouts/shopping/shopping-category/shopping-category.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ShoppingCategoryPage);



/***/ })

}]);
//# sourceMappingURL=ui-layouts-shopping-shopping-category-shopping-category-module-es2015.js.map