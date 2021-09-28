(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-components-range-range-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/range/range.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/range/range.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list>\n  <ion-item>\n    <ion-range color=\"danger\" pin=\"true\"></ion-range>\n  </ion-item>\n\n  <ion-item>\n    <ion-range min=\"-200\" max=\"200\" color=\"secondary\">\n      <ion-label slot=\"start\">-200</ion-label>\n      <ion-label slot=\"end\">200</ion-label>\n    </ion-range>\n  </ion-item>\n\n  <ion-item>\n    <ion-range min=\"20\" max=\"80\" step=\"2\">\n      <ion-icon size=\"small\" slot=\"start\" name=\"sunny\"></ion-icon>\n      <ion-icon slot=\"end\" name=\"sunny\"></ion-icon>\n    </ion-range>\n  </ion-item>\n\n  <ion-item>\n    <ion-range min=\"1000\" max=\"2000\" step=\"100\" snaps=\"true\" color=\"secondary\"></ion-range>\n  </ion-item>\n\n  <ion-item>\n    <ion-range min=\"1000\" max=\"2000\" step=\"100\" snaps=\"true\" ticks=\"false\" color=\"secondary\"></ion-range>\n  </ion-item>\n\n  <ion-item>\n    <ion-range dualKnobs=\"true\" min=\"21\" max=\"72\" step=\"3\" snaps=\"true\"></ion-range>\n  </ion-item>\n</ion-list>");

/***/ }),

/***/ "./src/app/ui-components/range/range-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/ui-components/range/range-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: RangePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangePageRoutingModule", function() { return RangePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _range_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./range.page */ "./src/app/ui-components/range/range.page.ts");




const routes = [
    {
        path: '',
        component: _range_page__WEBPACK_IMPORTED_MODULE_3__["RangePage"]
    }
];
let RangePageRoutingModule = class RangePageRoutingModule {
};
RangePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RangePageRoutingModule);



/***/ }),

/***/ "./src/app/ui-components/range/range.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/ui-components/range/range.module.ts ***!
  \*****************************************************/
/*! exports provided: RangePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangePageModule", function() { return RangePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _range_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./range-routing.module */ "./src/app/ui-components/range/range-routing.module.ts");
/* harmony import */ var _range_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./range.page */ "./src/app/ui-components/range/range.page.ts");







let RangePageModule = class RangePageModule {
};
RangePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _range_routing_module__WEBPACK_IMPORTED_MODULE_5__["RangePageRoutingModule"]
        ],
        declarations: [_range_page__WEBPACK_IMPORTED_MODULE_6__["RangePage"]]
    })
], RangePageModule);



/***/ }),

/***/ "./src/app/ui-components/range/range.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/ui-components/range/range.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWNvbXBvbmVudHMvcmFuZ2UvcmFuZ2UucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ui-components/range/range.page.ts":
/*!***************************************************!*\
  !*** ./src/app/ui-components/range/range.page.ts ***!
  \***************************************************/
/*! exports provided: RangePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangePage", function() { return RangePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RangePage = class RangePage {
    constructor() { }
    ngOnInit() {
    }
};
RangePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-range',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./range.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/range/range.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./range.page.scss */ "./src/app/ui-components/range/range.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RangePage);



/***/ })

}]);
//# sourceMappingURL=ui-components-range-range-module-es2015.js.map