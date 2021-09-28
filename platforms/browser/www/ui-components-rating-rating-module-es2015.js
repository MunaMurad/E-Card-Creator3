(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-components-rating-rating-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/rating/rating.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/rating/rating.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar color=\"gold\">\n      <ion-buttons slot=\"start\">\n          <ion-button (click)=\"toggleSideMenu()\">\n              <ion-icon color=\"dark\"  class=\"menu-icon\"  name=\"md-menu\"  slot=\"start\"></ion-icon>\n          </ion-button>\n      </ion-buttons>\n    <ion-title slot=\"start\">Rating</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card  class=\"info-card ion-margin ion-padding-top ion-padding-bottom\"  >\n      <ion-card-content>\n\n                <!-- ****** rating ******* -->\n                <rating [(ngModel)]=\"rating\"\n                readonly=\"false\"\n                size=\"default\" \n                resettable= \"true\">\n                </rating>\n                <br>\n                <h1 class=\"ion-text-center\">Rating: {{rating}}</h1>\n\n      </ion-card-content>\n  </ion-card>\n</ion-content>\n   ");

/***/ }),

/***/ "./src/app/ui-components/rating/rating-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/ui-components/rating/rating-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: RatingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingPageRoutingModule", function() { return RatingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _rating_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rating.page */ "./src/app/ui-components/rating/rating.page.ts");




const routes = [
    {
        path: '',
        component: _rating_page__WEBPACK_IMPORTED_MODULE_3__["RatingPage"]
    }
];
let RatingPageRoutingModule = class RatingPageRoutingModule {
};
RatingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RatingPageRoutingModule);



/***/ }),

/***/ "./src/app/ui-components/rating/rating.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/ui-components/rating/rating.module.ts ***!
  \*******************************************************/
/*! exports provided: RatingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingPageModule", function() { return RatingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _rating_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rating-routing.module */ "./src/app/ui-components/rating/rating-routing.module.ts");
/* harmony import */ var _rating_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rating.page */ "./src/app/ui-components/rating/rating.page.ts");
/* harmony import */ var ionic4_rating_dist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic4-rating/dist */ "./node_modules/ionic4-rating/dist/index.js");








let RatingPageModule = class RatingPageModule {
};
RatingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ionic4_rating_dist__WEBPACK_IMPORTED_MODULE_7__["IonicRatingModule"],
            _rating_routing_module__WEBPACK_IMPORTED_MODULE_5__["RatingPageRoutingModule"]
        ],
        declarations: [_rating_page__WEBPACK_IMPORTED_MODULE_6__["RatingPage"]]
    })
], RatingPageModule);



/***/ }),

/***/ "./src/app/ui-components/rating/rating.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/ui-components/rating/rating.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWNvbXBvbmVudHMvcmF0aW5nL3JhdGluZy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ui-components/rating/rating.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/ui-components/rating/rating.page.ts ***!
  \*****************************************************/
/*! exports provided: RatingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingPage", function() { return RatingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RatingPage = class RatingPage {
    constructor() {
        this.rating = 1;
    }
    ngOnInit() {
    }
};
RatingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rating',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rating.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/rating/rating.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rating.page.scss */ "./src/app/ui-components/rating/rating.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RatingPage);



/***/ })

}]);
//# sourceMappingURL=ui-components-rating-rating-module-es2015.js.map