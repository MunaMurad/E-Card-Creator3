(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-layouts-food-food-cart-food-cart-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/food/food-cart/food-cart.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/food/food-cart/food-cart.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>food-cart</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/ui-layouts/food/food-cart/food-cart-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/ui-layouts/food/food-cart/food-cart-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: FoodCartPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodCartPageRoutingModule", function() { return FoodCartPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _food_cart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./food-cart.page */ "./src/app/ui-layouts/food/food-cart/food-cart.page.ts");




const routes = [
    {
        path: '',
        component: _food_cart_page__WEBPACK_IMPORTED_MODULE_3__["FoodCartPage"]
    }
];
let FoodCartPageRoutingModule = class FoodCartPageRoutingModule {
};
FoodCartPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FoodCartPageRoutingModule);



/***/ }),

/***/ "./src/app/ui-layouts/food/food-cart/food-cart.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/ui-layouts/food/food-cart/food-cart.module.ts ***!
  \***************************************************************/
/*! exports provided: FoodCartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodCartPageModule", function() { return FoodCartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _food_cart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./food-cart-routing.module */ "./src/app/ui-layouts/food/food-cart/food-cart-routing.module.ts");
/* harmony import */ var _food_cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./food-cart.page */ "./src/app/ui-layouts/food/food-cart/food-cart.page.ts");







let FoodCartPageModule = class FoodCartPageModule {
};
FoodCartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _food_cart_routing_module__WEBPACK_IMPORTED_MODULE_5__["FoodCartPageRoutingModule"]
        ],
        declarations: [_food_cart_page__WEBPACK_IMPORTED_MODULE_6__["FoodCartPage"]]
    })
], FoodCartPageModule);



/***/ }),

/***/ "./src/app/ui-layouts/food/food-cart/food-cart.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/ui-layouts/food/food-cart/food-cart.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWxheW91dHMvZm9vZC9mb29kLWNhcnQvZm9vZC1jYXJ0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ui-layouts/food/food-cart/food-cart.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/ui-layouts/food/food-cart/food-cart.page.ts ***!
  \*************************************************************/
/*! exports provided: FoodCartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodCartPage", function() { return FoodCartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FoodCartPage = class FoodCartPage {
    constructor() { }
    ngOnInit() {
    }
};
FoodCartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-food-cart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./food-cart.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/food/food-cart/food-cart.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./food-cart.page.scss */ "./src/app/ui-layouts/food/food-cart/food-cart.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FoodCartPage);



/***/ })

}]);
//# sourceMappingURL=ui-layouts-food-food-cart-food-cart-module-es2015.js.map