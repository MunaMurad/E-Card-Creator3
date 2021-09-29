(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-components-header-transparent-header-transparent-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/header-transparent/header-transparent.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/header-transparent/header-transparent.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n  <ion-toolbar >\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"primary\" auto-hide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"primary\" slot=\"start\">Transparent</ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-searchbar></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n\n  <ion-content fullscreen>\n    <!-- skeleton thumbnail -->\n  \n    <ion-item *ngFor=\"let i of [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]\">\n       <ion-thumbnail slot=\"start\">\n         <ion-skeleton-text ></ion-skeleton-text>\n       </ion-thumbnail>\n       <!-- <ion-avatar slot=\"start\">\n           <ion-skeleton-text animated></ion-skeleton-text>\n         </ion-avatar> -->\n       <ion-label>\n         <h3>\n           <ion-skeleton-text  style=\"width: 50%\"></ion-skeleton-text>\n         </h3>\n         <p>\n           <ion-skeleton-text  style=\"width: 80%\"></ion-skeleton-text>\n         </p>\n         <p>\n           <ion-skeleton-text  style=\"width: 60%\"></ion-skeleton-text>\n         </p>\n       </ion-label>\n     </ion-item>\n</ion-content>");

/***/ }),

/***/ "./src/app/ui-components/header-transparent/header-transparent-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/ui-components/header-transparent/header-transparent-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: HeaderTransparentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTransparentPageRoutingModule", function() { return HeaderTransparentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _header_transparent_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header-transparent.page */ "./src/app/ui-components/header-transparent/header-transparent.page.ts");




const routes = [
    {
        path: '',
        component: _header_transparent_page__WEBPACK_IMPORTED_MODULE_3__["HeaderTransparentPage"]
    }
];
let HeaderTransparentPageRoutingModule = class HeaderTransparentPageRoutingModule {
};
HeaderTransparentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HeaderTransparentPageRoutingModule);



/***/ }),

/***/ "./src/app/ui-components/header-transparent/header-transparent.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/ui-components/header-transparent/header-transparent.module.ts ***!
  \*******************************************************************************/
/*! exports provided: HeaderTransparentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTransparentPageModule", function() { return HeaderTransparentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _header_transparent_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header-transparent-routing.module */ "./src/app/ui-components/header-transparent/header-transparent-routing.module.ts");
/* harmony import */ var _header_transparent_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header-transparent.page */ "./src/app/ui-components/header-transparent/header-transparent.page.ts");







let HeaderTransparentPageModule = class HeaderTransparentPageModule {
};
HeaderTransparentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _header_transparent_routing_module__WEBPACK_IMPORTED_MODULE_5__["HeaderTransparentPageRoutingModule"]
        ],
        declarations: [_header_transparent_page__WEBPACK_IMPORTED_MODULE_6__["HeaderTransparentPage"]]
    })
], HeaderTransparentPageModule);



/***/ }),

/***/ "./src/app/ui-components/header-transparent/header-transparent.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/ui-components/header-transparent/header-transparent.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --opacity:0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZXRoZWUvSW9uaWNQcm9qZWN0cy9faW9uaWM1L2lvbmljNWZ1bGxhcHBfZmluYWwvc3JjL2FwcC91aS1jb21wb25lbnRzL2hlYWRlci10cmFuc3BhcmVudC9oZWFkZXItdHJhbnNwYXJlbnQucGFnZS5zY3NzIiwic3JjL2FwcC91aS1jb21wb25lbnRzL2hlYWRlci10cmFuc3BhcmVudC9oZWFkZXItdHJhbnNwYXJlbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Esc0JBQUE7QUNDQSIsImZpbGUiOiJzcmMvYXBwL3VpLWNvbXBvbmVudHMvaGVhZGVyLXRyYW5zcGFyZW50L2hlYWRlci10cmFuc3BhcmVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcbi0tb3BhY2l0eTowICFpbXBvcnRhbnQ7XG59IiwiaW9uLXRvb2xiYXIge1xuICAtLW9wYWNpdHk6MCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/ui-components/header-transparent/header-transparent.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/ui-components/header-transparent/header-transparent.page.ts ***!
  \*****************************************************************************/
/*! exports provided: HeaderTransparentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTransparentPage", function() { return HeaderTransparentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderTransparentPage = class HeaderTransparentPage {
    constructor() { }
    ngOnInit() {
    }
};
HeaderTransparentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header-transparent',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header-transparent.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/header-transparent/header-transparent.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header-transparent.page.scss */ "./src/app/ui-components/header-transparent/header-transparent.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HeaderTransparentPage);



/***/ })

}]);
//# sourceMappingURL=ui-components-header-transparent-header-transparent-module-es2015.js.map