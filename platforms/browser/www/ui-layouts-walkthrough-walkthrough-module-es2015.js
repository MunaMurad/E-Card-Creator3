(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-layouts-walkthrough-walkthrough-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/walkthrough/walkthrough.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/walkthrough/walkthrough.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Walkthrough</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">My Navigation Bar</ion-title>\n    </ion-toolbar>\n  </ion-header>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/ui-layouts/walkthrough/walkthrough-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/ui-layouts/walkthrough/walkthrough-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: WalkthroughPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughPageRoutingModule", function() { return WalkthroughPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _walkthrough_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./walkthrough.page */ "./src/app/ui-layouts/walkthrough/walkthrough.page.ts");




const routes = [
    {
        path: '',
        component: _walkthrough_page__WEBPACK_IMPORTED_MODULE_3__["WalkthroughPage"]
    }
];
let WalkthroughPageRoutingModule = class WalkthroughPageRoutingModule {
};
WalkthroughPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WalkthroughPageRoutingModule);



/***/ }),

/***/ "./src/app/ui-layouts/walkthrough/walkthrough.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/ui-layouts/walkthrough/walkthrough.module.ts ***!
  \**************************************************************/
/*! exports provided: WalkthroughPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughPageModule", function() { return WalkthroughPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _walkthrough_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./walkthrough-routing.module */ "./src/app/ui-layouts/walkthrough/walkthrough-routing.module.ts");
/* harmony import */ var _walkthrough_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./walkthrough.page */ "./src/app/ui-layouts/walkthrough/walkthrough.page.ts");







let WalkthroughPageModule = class WalkthroughPageModule {
};
WalkthroughPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _walkthrough_routing_module__WEBPACK_IMPORTED_MODULE_5__["WalkthroughPageRoutingModule"]
        ],
        declarations: [_walkthrough_page__WEBPACK_IMPORTED_MODULE_6__["WalkthroughPage"]]
    })
], WalkthroughPageModule);



/***/ }),

/***/ "./src/app/ui-layouts/walkthrough/walkthrough.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/ui-layouts/walkthrough/walkthrough.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWxheW91dHMvd2Fsa3Rocm91Z2gvd2Fsa3Rocm91Z2gucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ui-layouts/walkthrough/walkthrough.page.ts":
/*!************************************************************!*\
  !*** ./src/app/ui-layouts/walkthrough/walkthrough.page.ts ***!
  \************************************************************/
/*! exports provided: WalkthroughPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkthroughPage", function() { return WalkthroughPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WalkthroughPage = class WalkthroughPage {
    constructor() { }
    ngOnInit() {
    }
};
WalkthroughPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-walkthrough',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./walkthrough.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/walkthrough/walkthrough.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./walkthrough.page.scss */ "./src/app/ui-layouts/walkthrough/walkthrough.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], WalkthroughPage);



/***/ })

}]);
//# sourceMappingURL=ui-layouts-walkthrough-walkthrough-module-es2015.js.map