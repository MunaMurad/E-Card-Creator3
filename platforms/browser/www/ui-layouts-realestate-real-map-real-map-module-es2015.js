(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-layouts-realestate-real-map-real-map-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/realestate/real-map/real-map.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/realestate/real-map/real-map.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>real-map</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/ui-layouts/realestate/real-map/real-map-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/ui-layouts/realestate/real-map/real-map-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: RealMapPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealMapPageRoutingModule", function() { return RealMapPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _real_map_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./real-map.page */ "./src/app/ui-layouts/realestate/real-map/real-map.page.ts");




const routes = [
    {
        path: '',
        component: _real_map_page__WEBPACK_IMPORTED_MODULE_3__["RealMapPage"]
    }
];
let RealMapPageRoutingModule = class RealMapPageRoutingModule {
};
RealMapPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RealMapPageRoutingModule);



/***/ }),

/***/ "./src/app/ui-layouts/realestate/real-map/real-map.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/ui-layouts/realestate/real-map/real-map.module.ts ***!
  \*******************************************************************/
/*! exports provided: RealMapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealMapPageModule", function() { return RealMapPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _real_map_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./real-map-routing.module */ "./src/app/ui-layouts/realestate/real-map/real-map-routing.module.ts");
/* harmony import */ var _real_map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./real-map.page */ "./src/app/ui-layouts/realestate/real-map/real-map.page.ts");







let RealMapPageModule = class RealMapPageModule {
};
RealMapPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _real_map_routing_module__WEBPACK_IMPORTED_MODULE_5__["RealMapPageRoutingModule"]
        ],
        declarations: [_real_map_page__WEBPACK_IMPORTED_MODULE_6__["RealMapPage"]]
    })
], RealMapPageModule);



/***/ }),

/***/ "./src/app/ui-layouts/realestate/real-map/real-map.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/ui-layouts/realestate/real-map/real-map.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWxheW91dHMvcmVhbGVzdGF0ZS9yZWFsLW1hcC9yZWFsLW1hcC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ui-layouts/realestate/real-map/real-map.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/ui-layouts/realestate/real-map/real-map.page.ts ***!
  \*****************************************************************/
/*! exports provided: RealMapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealMapPage", function() { return RealMapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RealMapPage = class RealMapPage {
    constructor() { }
    ngOnInit() {
    }
};
RealMapPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-real-map',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./real-map.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/realestate/real-map/real-map.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./real-map.page.scss */ "./src/app/ui-layouts/realestate/real-map/real-map.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RealMapPage);



/***/ })

}]);
//# sourceMappingURL=ui-layouts-realestate-real-map-real-map-module-es2015.js.map