(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-components-actionsheet-actionsheet-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/actionsheet/actionsheet.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/actionsheet/actionsheet.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>actionsheet</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/ui-components/actionsheet/actionsheet-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/ui-components/actionsheet/actionsheet-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ActionsheetPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsheetPageRoutingModule", function() { return ActionsheetPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _actionsheet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actionsheet.page */ "./src/app/ui-components/actionsheet/actionsheet.page.ts");




const routes = [
    {
        path: '',
        component: _actionsheet_page__WEBPACK_IMPORTED_MODULE_3__["ActionsheetPage"]
    }
];
let ActionsheetPageRoutingModule = class ActionsheetPageRoutingModule {
};
ActionsheetPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ActionsheetPageRoutingModule);



/***/ }),

/***/ "./src/app/ui-components/actionsheet/actionsheet.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/ui-components/actionsheet/actionsheet.module.ts ***!
  \*****************************************************************/
/*! exports provided: ActionsheetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsheetPageModule", function() { return ActionsheetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _actionsheet_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actionsheet-routing.module */ "./src/app/ui-components/actionsheet/actionsheet-routing.module.ts");
/* harmony import */ var _actionsheet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actionsheet.page */ "./src/app/ui-components/actionsheet/actionsheet.page.ts");







let ActionsheetPageModule = class ActionsheetPageModule {
};
ActionsheetPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _actionsheet_routing_module__WEBPACK_IMPORTED_MODULE_5__["ActionsheetPageRoutingModule"]
        ],
        declarations: [_actionsheet_page__WEBPACK_IMPORTED_MODULE_6__["ActionsheetPage"]]
    })
], ActionsheetPageModule);



/***/ }),

/***/ "./src/app/ui-components/actionsheet/actionsheet.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/ui-components/actionsheet/actionsheet.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWNvbXBvbmVudHMvYWN0aW9uc2hlZXQvYWN0aW9uc2hlZXQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ui-components/actionsheet/actionsheet.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/ui-components/actionsheet/actionsheet.page.ts ***!
  \***************************************************************/
/*! exports provided: ActionsheetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsheetPage", function() { return ActionsheetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ActionsheetPage = class ActionsheetPage {
    constructor() { }
    ngOnInit() {
    }
};
ActionsheetPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-actionsheet',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./actionsheet.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/actionsheet/actionsheet.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./actionsheet.page.scss */ "./src/app/ui-components/actionsheet/actionsheet.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ActionsheetPage);



/***/ })

}]);
//# sourceMappingURL=ui-components-actionsheet-actionsheet-module-es2015.js.map