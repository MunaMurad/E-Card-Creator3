(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-components-progress-bar-progress-bar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/progress-bar/progress-bar.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/progress-bar/progress-bar.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n  <ion-toolbar>\n    <ion-title>Progress Bar</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"outer-content\">\n  <!-- Default Progress Bar -->\n  <ion-list>\n    <ion-list-header>\n      <ion-label>Default</ion-label>\n    </ion-list-header>\n    <ion-progress-bar></ion-progress-bar>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      <ion-label>Default at 50%</ion-label>\n    </ion-list-header>\n    <ion-progress-bar value=\"0.5\"></ion-progress-bar>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      <ion-label>Color</ion-label>\n    </ion-list-header>\n\n    <!-- Progress Bar with Color -->\n    <ion-progress-bar color=\"secondary\" value=\"0.5\"></ion-progress-bar>\n    <ion-progress-bar color=\"tertiary\" value=\"0.8\"></ion-progress-bar>\n\n    <ion-list-header>\n      <ion-label>\n        Indeterminate\n      </ion-label>\n    </ion-list-header>\n    <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n\n    <ion-list-header>\n      <ion-label>\n        Indeterminate (reversed)\n      </ion-label>\n    </ion-list-header>\n    <ion-progress-bar type=\"indeterminate\" reversed=\"true\"></ion-progress-bar>\n\n    <ion-list-header>\n      <ion-label>\n        Buffer\n      </ion-label>\n    </ion-list-header>\n    <ion-progress-bar value=\"0.25\" buffer=\"0.5\"></ion-progress-bar>\n  </ion-list>\n\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/ui-components/progress-bar/progress-bar-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/ui-components/progress-bar/progress-bar-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ProgressBarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarPageRoutingModule", function() { return ProgressBarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _progress_bar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./progress-bar.page */ "./src/app/ui-components/progress-bar/progress-bar.page.ts");




const routes = [
    {
        path: '',
        component: _progress_bar_page__WEBPACK_IMPORTED_MODULE_3__["ProgressBarPage"]
    }
];
let ProgressBarPageRoutingModule = class ProgressBarPageRoutingModule {
};
ProgressBarPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProgressBarPageRoutingModule);



/***/ }),

/***/ "./src/app/ui-components/progress-bar/progress-bar.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/ui-components/progress-bar/progress-bar.module.ts ***!
  \*******************************************************************/
/*! exports provided: ProgressBarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarPageModule", function() { return ProgressBarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _progress_bar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./progress-bar-routing.module */ "./src/app/ui-components/progress-bar/progress-bar-routing.module.ts");
/* harmony import */ var _progress_bar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./progress-bar.page */ "./src/app/ui-components/progress-bar/progress-bar.page.ts");







let ProgressBarPageModule = class ProgressBarPageModule {
};
ProgressBarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _progress_bar_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProgressBarPageRoutingModule"]
        ],
        declarations: [_progress_bar_page__WEBPACK_IMPORTED_MODULE_6__["ProgressBarPage"]]
    })
], ProgressBarPageModule);



/***/ }),

/***/ "./src/app/ui-components/progress-bar/progress-bar.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/ui-components/progress-bar/progress-bar.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWNvbXBvbmVudHMvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ui-components/progress-bar/progress-bar.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/ui-components/progress-bar/progress-bar.page.ts ***!
  \*****************************************************************/
/*! exports provided: ProgressBarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarPage", function() { return ProgressBarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProgressBarPage = class ProgressBarPage {
    constructor() { }
    ngOnInit() {
    }
};
ProgressBarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-progress-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./progress-bar.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/progress-bar/progress-bar.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./progress-bar.page.scss */ "./src/app/ui-components/progress-bar/progress-bar.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProgressBarPage);



/***/ })

}]);
//# sourceMappingURL=ui-components-progress-bar-progress-bar-module-es2015.js.map