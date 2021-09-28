(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-components-searchbar-searchbar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/searchbar/searchbar.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/searchbar/searchbar.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>searchbar</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<!-- Default Searchbar -->\n<ion-searchbar></ion-searchbar>\n\n<!-- Searchbar with cancel button always shown -->\n<ion-searchbar showCancelButton=\"always\"></ion-searchbar>\n\n<!-- Searchbar with cancel button never shown -->\n<ion-searchbar showCancelButton=\"never\"></ion-searchbar>\n\n<!-- Searchbar with cancel button shown on focus -->\n<ion-searchbar showCancelButton=\"focus\"></ion-searchbar>\n\n<!-- Searchbar with danger color -->\n<ion-searchbar color=\"danger\"></ion-searchbar>\n\n<!-- Searchbar with value -->\n<ion-searchbar value=\"Ionic\"></ion-searchbar>\n\n<!-- Searchbar with telephone type -->\n<ion-searchbar type=\"tel\"></ion-searchbar>\n\n<!-- Searchbar with numeric inputmode -->\n<ion-searchbar inputmode=\"numeric\"></ion-searchbar>\n\n<!-- Searchbar disabled -->\n<ion-searchbar disabled=\"true\"></ion-searchbar>\n\n<!-- Searchbar with a cancel button and custom cancel button text -->\n<ion-searchbar showCancelButton=\"focus\" cancelButtonText=\"Custom Cancel\"></ion-searchbar>\n\n<!-- Searchbar with a custom debounce -->\n<ion-searchbar debounce=\"500\"></ion-searchbar>\n\n<!-- Animated Searchbar -->\n<ion-searchbar animated></ion-searchbar>\n\n<!-- Searchbar with a placeholder -->\n<ion-searchbar placeholder=\"Filter Schedules\"></ion-searchbar>\n\n<!-- Searchbar in a Toolbar -->\n<ion-toolbar>\n  <ion-searchbar></ion-searchbar>\n</ion-toolbar>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/ui-components/searchbar/searchbar-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/ui-components/searchbar/searchbar-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: SearchbarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchbarPageRoutingModule", function() { return SearchbarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _searchbar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./searchbar.page */ "./src/app/ui-components/searchbar/searchbar.page.ts");




const routes = [
    {
        path: '',
        component: _searchbar_page__WEBPACK_IMPORTED_MODULE_3__["SearchbarPage"]
    }
];
let SearchbarPageRoutingModule = class SearchbarPageRoutingModule {
};
SearchbarPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SearchbarPageRoutingModule);



/***/ }),

/***/ "./src/app/ui-components/searchbar/searchbar.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/ui-components/searchbar/searchbar.module.ts ***!
  \*************************************************************/
/*! exports provided: SearchbarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchbarPageModule", function() { return SearchbarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _searchbar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./searchbar-routing.module */ "./src/app/ui-components/searchbar/searchbar-routing.module.ts");
/* harmony import */ var _searchbar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./searchbar.page */ "./src/app/ui-components/searchbar/searchbar.page.ts");







let SearchbarPageModule = class SearchbarPageModule {
};
SearchbarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _searchbar_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchbarPageRoutingModule"]
        ],
        declarations: [_searchbar_page__WEBPACK_IMPORTED_MODULE_6__["SearchbarPage"]]
    })
], SearchbarPageModule);



/***/ }),

/***/ "./src/app/ui-components/searchbar/searchbar.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/ui-components/searchbar/searchbar.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWNvbXBvbmVudHMvc2VhcmNoYmFyL3NlYXJjaGJhci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ui-components/searchbar/searchbar.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/ui-components/searchbar/searchbar.page.ts ***!
  \***********************************************************/
/*! exports provided: SearchbarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchbarPage", function() { return SearchbarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchbarPage = class SearchbarPage {
    constructor() { }
    ngOnInit() {
    }
};
SearchbarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-searchbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./searchbar.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/searchbar/searchbar.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./searchbar.page.scss */ "./src/app/ui-components/searchbar/searchbar.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SearchbarPage);



/***/ })

}]);
//# sourceMappingURL=ui-components-searchbar-searchbar-module-es2015.js.map