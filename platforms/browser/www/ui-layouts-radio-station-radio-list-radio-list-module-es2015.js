(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-layouts-radio-station-radio-list-radio-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/radio-station/radio-list/radio-list.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/radio-station/radio-list/radio-list.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>radio-list</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/ui-layouts/radio-station/radio-list/radio-list-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/ui-layouts/radio-station/radio-list/radio-list-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: RadioListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioListPageRoutingModule", function() { return RadioListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _radio_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./radio-list.page */ "./src/app/ui-layouts/radio-station/radio-list/radio-list.page.ts");




const routes = [
    {
        path: '',
        component: _radio_list_page__WEBPACK_IMPORTED_MODULE_3__["RadioListPage"]
    }
];
let RadioListPageRoutingModule = class RadioListPageRoutingModule {
};
RadioListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RadioListPageRoutingModule);



/***/ }),

/***/ "./src/app/ui-layouts/radio-station/radio-list/radio-list.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/ui-layouts/radio-station/radio-list/radio-list.module.ts ***!
  \**************************************************************************/
/*! exports provided: RadioListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioListPageModule", function() { return RadioListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _radio_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./radio-list-routing.module */ "./src/app/ui-layouts/radio-station/radio-list/radio-list-routing.module.ts");
/* harmony import */ var _radio_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./radio-list.page */ "./src/app/ui-layouts/radio-station/radio-list/radio-list.page.ts");







let RadioListPageModule = class RadioListPageModule {
};
RadioListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _radio_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["RadioListPageRoutingModule"]
        ],
        declarations: [_radio_list_page__WEBPACK_IMPORTED_MODULE_6__["RadioListPage"]]
    })
], RadioListPageModule);



/***/ }),

/***/ "./src/app/ui-layouts/radio-station/radio-list/radio-list.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/ui-layouts/radio-station/radio-list/radio-list.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWxheW91dHMvcmFkaW8tc3RhdGlvbi9yYWRpby1saXN0L3JhZGlvLWxpc3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ui-layouts/radio-station/radio-list/radio-list.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/ui-layouts/radio-station/radio-list/radio-list.page.ts ***!
  \************************************************************************/
/*! exports provided: RadioListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioListPage", function() { return RadioListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RadioListPage = class RadioListPage {
    constructor() { }
    ngOnInit() {
    }
};
RadioListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-radio-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./radio-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/radio-station/radio-list/radio-list.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./radio-list.page.scss */ "./src/app/ui-layouts/radio-station/radio-list/radio-list.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RadioListPage);



/***/ })

}]);
//# sourceMappingURL=ui-layouts-radio-station-radio-list-radio-list-module-es2015.js.map