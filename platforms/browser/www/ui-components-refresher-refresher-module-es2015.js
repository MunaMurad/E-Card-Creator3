(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-components-refresher-refresher-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/refresher/refresher.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/refresher/refresher.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Default Refresher -->\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n</ion-content>\n\n<!-- Custom Refresher Properties -->\n<ion-content>\n  <ion-refresher slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n</ion-content>\n\n<!-- Custom Refresher Content -->\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"chevron-down-circle-outline\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n</ion-content>");

/***/ }),

/***/ "./src/app/ui-components/refresher/refresher-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/ui-components/refresher/refresher-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: RefresherPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefresherPageRoutingModule", function() { return RefresherPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _refresher_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./refresher.page */ "./src/app/ui-components/refresher/refresher.page.ts");




const routes = [
    {
        path: '',
        component: _refresher_page__WEBPACK_IMPORTED_MODULE_3__["RefresherPage"]
    }
];
let RefresherPageRoutingModule = class RefresherPageRoutingModule {
};
RefresherPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RefresherPageRoutingModule);



/***/ }),

/***/ "./src/app/ui-components/refresher/refresher.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/ui-components/refresher/refresher.module.ts ***!
  \*************************************************************/
/*! exports provided: RefresherPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefresherPageModule", function() { return RefresherPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _refresher_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./refresher-routing.module */ "./src/app/ui-components/refresher/refresher-routing.module.ts");
/* harmony import */ var _refresher_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./refresher.page */ "./src/app/ui-components/refresher/refresher.page.ts");







let RefresherPageModule = class RefresherPageModule {
};
RefresherPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _refresher_routing_module__WEBPACK_IMPORTED_MODULE_5__["RefresherPageRoutingModule"]
        ],
        declarations: [_refresher_page__WEBPACK_IMPORTED_MODULE_6__["RefresherPage"]]
    })
], RefresherPageModule);



/***/ }),

/***/ "./src/app/ui-components/refresher/refresher.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/ui-components/refresher/refresher.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWNvbXBvbmVudHMvcmVmcmVzaGVyL3JlZnJlc2hlci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ui-components/refresher/refresher.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/ui-components/refresher/refresher.page.ts ***!
  \***********************************************************/
/*! exports provided: RefresherPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefresherPage", function() { return RefresherPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RefresherPage = class RefresherPage {
    constructor() { }
    ngOnInit() {
    }
    doRefresh(event) {
        console.log('Begin async operation');
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }
};
RefresherPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-refresher',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./refresher.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/refresher/refresher.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./refresher.page.scss */ "./src/app/ui-components/refresher/refresher.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RefresherPage);



/***/ })

}]);
//# sourceMappingURL=ui-components-refresher-refresher-module-es2015.js.map