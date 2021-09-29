(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-layouts-travel-travel-list-travel-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/travel/travel-list/travel-list.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/travel/travel-list/travel-list.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>travel-list</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/ui-layouts/travel/travel-list/travel-list-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/ui-layouts/travel/travel-list/travel-list-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: TravelListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelListPageRoutingModule", function() { return TravelListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _travel_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./travel-list.page */ "./src/app/ui-layouts/travel/travel-list/travel-list.page.ts");




const routes = [
    {
        path: '',
        component: _travel_list_page__WEBPACK_IMPORTED_MODULE_3__["TravelListPage"]
    }
];
let TravelListPageRoutingModule = class TravelListPageRoutingModule {
};
TravelListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TravelListPageRoutingModule);



/***/ }),

/***/ "./src/app/ui-layouts/travel/travel-list/travel-list.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/ui-layouts/travel/travel-list/travel-list.module.ts ***!
  \*********************************************************************/
/*! exports provided: TravelListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelListPageModule", function() { return TravelListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _travel_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./travel-list-routing.module */ "./src/app/ui-layouts/travel/travel-list/travel-list-routing.module.ts");
/* harmony import */ var _travel_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./travel-list.page */ "./src/app/ui-layouts/travel/travel-list/travel-list.page.ts");







let TravelListPageModule = class TravelListPageModule {
};
TravelListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _travel_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["TravelListPageRoutingModule"]
        ],
        declarations: [_travel_list_page__WEBPACK_IMPORTED_MODULE_6__["TravelListPage"]]
    })
], TravelListPageModule);



/***/ }),

/***/ "./src/app/ui-layouts/travel/travel-list/travel-list.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/ui-layouts/travel/travel-list/travel-list.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWxheW91dHMvdHJhdmVsL3RyYXZlbC1saXN0L3RyYXZlbC1saXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ui-layouts/travel/travel-list/travel-list.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/ui-layouts/travel/travel-list/travel-list.page.ts ***!
  \*******************************************************************/
/*! exports provided: TravelListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelListPage", function() { return TravelListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TravelListPage = class TravelListPage {
    constructor() { }
    ngOnInit() {
    }
};
TravelListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-travel-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./travel-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/travel/travel-list/travel-list.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./travel-list.page.scss */ "./src/app/ui-layouts/travel/travel-list/travel-list.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TravelListPage);



/***/ })

}]);
//# sourceMappingURL=ui-layouts-travel-travel-list-travel-list-module-es2015.js.map