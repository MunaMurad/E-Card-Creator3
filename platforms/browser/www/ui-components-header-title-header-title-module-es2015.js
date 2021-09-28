(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-components-header-title-header-title-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/header-title/header-title.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/header-title/header-title.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent=true>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"tertiary\" auto-hide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"tertiary\">Product</ion-title>\n  </ion-toolbar>\n\n  <!-- <ion-toolbar>\n    <ion-title>Subheader</ion-title>\n  </ion-toolbar> -->\n</ion-header>\n\n<!-- Header without a border -->\n<!-- <ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title>Header - No Border</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content fullscreen=true>\n  <ion-header  collapse=\"condense\">\n\n    <ion-toolbar>\n      <ion-title color=\"tertiary\" size=\"large\">Product</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <!-- skeleton thumbnail -->\n  <div class=\"top-grey-box\" ></div>\n  <ion-item *ngFor=\"let i of [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]\">\n     <ion-thumbnail slot=\"start\">\n       <ion-skeleton-text ></ion-skeleton-text>\n     </ion-thumbnail>\n     <!-- <ion-avatar slot=\"start\">\n         <ion-skeleton-text animated></ion-skeleton-text>\n       </ion-avatar> -->\n     <ion-label>\n       <h3>\n         <ion-skeleton-text  style=\"width: 50%\"></ion-skeleton-text>\n       </h3>\n       <p>\n         <ion-skeleton-text  style=\"width: 80%\"></ion-skeleton-text>\n       </p>\n       <p>\n         <ion-skeleton-text  style=\"width: 60%\"></ion-skeleton-text>\n       </p>\n     </ion-label>\n   </ion-item>\n </ion-content>");

/***/ }),

/***/ "./src/app/ui-components/header-title/header-title-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/ui-components/header-title/header-title-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: HeaderTitlePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTitlePageRoutingModule", function() { return HeaderTitlePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _header_title_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header-title.page */ "./src/app/ui-components/header-title/header-title.page.ts");




const routes = [
    {
        path: '',
        component: _header_title_page__WEBPACK_IMPORTED_MODULE_3__["HeaderTitlePage"]
    }
];
let HeaderTitlePageRoutingModule = class HeaderTitlePageRoutingModule {
};
HeaderTitlePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HeaderTitlePageRoutingModule);



/***/ }),

/***/ "./src/app/ui-components/header-title/header-title.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/ui-components/header-title/header-title.module.ts ***!
  \*******************************************************************/
/*! exports provided: HeaderTitlePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTitlePageModule", function() { return HeaderTitlePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _header_title_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header-title-routing.module */ "./src/app/ui-components/header-title/header-title-routing.module.ts");
/* harmony import */ var _header_title_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header-title.page */ "./src/app/ui-components/header-title/header-title.page.ts");







let HeaderTitlePageModule = class HeaderTitlePageModule {
};
HeaderTitlePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _header_title_routing_module__WEBPACK_IMPORTED_MODULE_5__["HeaderTitlePageRoutingModule"]
        ],
        declarations: [_header_title_page__WEBPACK_IMPORTED_MODULE_6__["HeaderTitlePage"]]
    })
], HeaderTitlePageModule);



/***/ }),

/***/ "./src/app/ui-components/header-title/header-title.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/ui-components/header-title/header-title.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWNvbXBvbmVudHMvaGVhZGVyLXRpdGxlL2hlYWRlci10aXRsZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ui-components/header-title/header-title.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/ui-components/header-title/header-title.page.ts ***!
  \*****************************************************************/
/*! exports provided: HeaderTitlePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTitlePage", function() { return HeaderTitlePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderTitlePage = class HeaderTitlePage {
    constructor() { }
    ngOnInit() {
    }
};
HeaderTitlePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header-title',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header-title.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/header-title/header-title.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header-title.page.scss */ "./src/app/ui-components/header-title/header-title.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HeaderTitlePage);



/***/ })

}]);
//# sourceMappingURL=ui-components-header-title-header-title-module-es2015.js.map