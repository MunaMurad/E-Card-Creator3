(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-layouts-radio-station-radio-player-radio-player-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/radio-station/radio-player/radio-player.page.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/radio-station/radio-player/radio-player.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>radio-player</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/ui-layouts/radio-station/radio-player/radio-player-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/ui-layouts/radio-station/radio-player/radio-player-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: RadioPlayerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioPlayerPageRoutingModule", function() { return RadioPlayerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _radio_player_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./radio-player.page */ "./src/app/ui-layouts/radio-station/radio-player/radio-player.page.ts");




const routes = [
    {
        path: '',
        component: _radio_player_page__WEBPACK_IMPORTED_MODULE_3__["RadioPlayerPage"]
    }
];
let RadioPlayerPageRoutingModule = class RadioPlayerPageRoutingModule {
};
RadioPlayerPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RadioPlayerPageRoutingModule);



/***/ }),

/***/ "./src/app/ui-layouts/radio-station/radio-player/radio-player.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/ui-layouts/radio-station/radio-player/radio-player.module.ts ***!
  \******************************************************************************/
/*! exports provided: RadioPlayerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioPlayerPageModule", function() { return RadioPlayerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _radio_player_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./radio-player-routing.module */ "./src/app/ui-layouts/radio-station/radio-player/radio-player-routing.module.ts");
/* harmony import */ var _radio_player_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./radio-player.page */ "./src/app/ui-layouts/radio-station/radio-player/radio-player.page.ts");







let RadioPlayerPageModule = class RadioPlayerPageModule {
};
RadioPlayerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _radio_player_routing_module__WEBPACK_IMPORTED_MODULE_5__["RadioPlayerPageRoutingModule"]
        ],
        declarations: [_radio_player_page__WEBPACK_IMPORTED_MODULE_6__["RadioPlayerPage"]]
    })
], RadioPlayerPageModule);



/***/ }),

/***/ "./src/app/ui-layouts/radio-station/radio-player/radio-player.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/ui-layouts/radio-station/radio-player/radio-player.page.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWxheW91dHMvcmFkaW8tc3RhdGlvbi9yYWRpby1wbGF5ZXIvcmFkaW8tcGxheWVyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ui-layouts/radio-station/radio-player/radio-player.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/ui-layouts/radio-station/radio-player/radio-player.page.ts ***!
  \****************************************************************************/
/*! exports provided: RadioPlayerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioPlayerPage", function() { return RadioPlayerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RadioPlayerPage = class RadioPlayerPage {
    constructor() { }
    ngOnInit() {
    }
};
RadioPlayerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-radio-player',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./radio-player.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/radio-station/radio-player/radio-player.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./radio-player.page.scss */ "./src/app/ui-layouts/radio-station/radio-player/radio-player.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RadioPlayerPage);



/***/ })

}]);
//# sourceMappingURL=ui-layouts-radio-station-radio-player-radio-player-module-es2015.js.map