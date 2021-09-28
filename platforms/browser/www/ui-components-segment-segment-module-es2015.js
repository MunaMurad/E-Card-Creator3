(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-components-segment-segment-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/segment/segment.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/segment/segment.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n  <ion-toolbar>\n    <ion-title>Segment</ion-title>\n  </ion-toolbar>\n  \n  <ion-toolbar>\n    <ion-segment value=\"all\">\n      <ion-segment-button value=\"all\">\n        <ion-label>All</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"favorites\">\n        <ion-label>Favorites</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content fullscreen>\n  <ion-list-header>Default</ion-list-header>\n\n  <!-- Label only -->\n  <ion-segment value=\"favorite\">\n    <ion-segment-button value=\"call\">\n      <ion-label>Call</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"favorite\">\n      <ion-label>Favorite</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"map\">\n      <ion-label>Map</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <!-- Icon only -->\n  <ion-segment color=\"secondary\" value=\"call\">\n    <ion-segment-button value=\"call\">\n      <ion-icon name=\"call\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"heart\">\n      <ion-icon name=\"heart\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"map\">\n      <ion-icon name=\"pin\"></ion-icon>\n    </ion-segment-button>\n  </ion-segment>\n\n  <!-- Icon top -->\n  <ion-segment color=\"tertiary\" value=\"favorite\">\n    <ion-segment-button value=\"call\">\n      <ion-label>Call</ion-label>\n      <ion-icon name=\"call\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"favorite\">\n      <ion-label>Favorite</ion-label>\n      <ion-icon name=\"heart\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"map\">\n      <ion-label>Map</ion-label>\n      <ion-icon name=\"pin\"></ion-icon>\n    </ion-segment-button>\n  </ion-segment>\n\n  <!-- Icon bottom -->\n  <ion-segment color=\"success\" value=\"call\">\n    <ion-segment-button value=\"call\" layout=\"icon-bottom\">\n      <ion-icon name=\"call\"></ion-icon>\n      <ion-label>Call</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"favorite\" layout=\"icon-bottom\">\n      <ion-icon name=\"heart\"></ion-icon>\n      <ion-label>Favorite</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"map\" layout=\"icon-bottom\">\n      <ion-icon name=\"pin\"></ion-icon>\n      <ion-label>Map</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <ion-list-header>Scrollable</ion-list-header>\n\n  <!-- Icon start -->\n  <ion-segment color=\"warning\" scrollable value=\"call\">\n    <ion-segment-button value=\"call\" layout=\"icon-start\">\n      <ion-label>Call</ion-label>\n      <ion-icon name=\"call\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"favorite\" layout=\"icon-start\">\n      <ion-label>Favorite</ion-label>\n      <ion-icon name=\"heart\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"map\" layout=\"icon-start\">\n      <ion-label>Map</ion-label>\n      <ion-icon name=\"pin\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"call\" layout=\"icon-start\">\n      <ion-label>Call</ion-label>\n      <ion-icon name=\"call\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"favorite\" layout=\"icon-start\">\n      <ion-label>Favorite</ion-label>\n      <ion-icon name=\"heart\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"map\" layout=\"icon-start\">\n      <ion-label>Map</ion-label>\n      <ion-icon name=\"pin\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"call\" layout=\"icon-start\">\n      <ion-label>Call</ion-label>\n      <ion-icon name=\"call\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"favorite\" layout=\"icon-start\">\n      <ion-label>Favorite</ion-label>\n      <ion-icon name=\"heart\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"map\" layout=\"icon-start\">\n      <ion-label>Map</ion-label>\n      <ion-icon name=\"pin\"></ion-icon>\n    </ion-segment-button>\n  </ion-segment>\n\n  <!-- Icon end -->\n  <ion-segment color=\"danger\" scrollable value=\"map\">\n    <ion-segment-button value=\"call\" layout=\"icon-end\">\n      <ion-icon name=\"call\"></ion-icon>\n      <ion-label>Call</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"favorite\" layout=\"icon-end\">\n      <ion-icon name=\"heart\"></ion-icon>\n      <ion-label>Favorite</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"map\" layout=\"icon-end\">\n      <ion-icon name=\"pin\"></ion-icon>\n      <ion-label>Map</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n\n\n\n\n<!-- ############# -->\n<ion-list-header>\n  <ion-label>\n    Scrollable\n  </ion-label>\n</ion-list-header>\n\n<div class=\"ion-padding-horizontal\">\n  <ion-segment value=\"call\" scrollable>\n    <ion-segment-button value=\"call\">\n      <ion-label>Call</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"favorite\">\n      <ion-label>Favorite</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"map\">\n      <ion-label>Map</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"watch\">\n      <ion-label>Watch</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"account\">\n      <ion-label>Account</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"settings\">\n      <ion-label>Settings</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"profile\">\n      <ion-label>Profile</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <ion-segment value=\"favorite\" color=\"tertiary\" scrollable>\n    <ion-segment-button value=\"call\">\n      <ion-icon name=\"call\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"favorite\">\n      <ion-icon name=\"heart\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"map\">\n      <ion-icon name=\"pin\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"watch\">\n      <ion-icon name=\"play-circle-outline\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"account\">\n      <ion-icon name=\"people\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"settings\">\n      <ion-icon name=\"cog\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"profile\">\n      <ion-icon name=\"person\"></ion-icon>\n    </ion-segment-button>\n  </ion-segment>\n</div>\n\n</ion-content>\n\n\n");

/***/ }),

/***/ "./src/app/ui-components/segment/segment-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/ui-components/segment/segment-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SegmentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentPageRoutingModule", function() { return SegmentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _segment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./segment.page */ "./src/app/ui-components/segment/segment.page.ts");




const routes = [
    {
        path: '',
        component: _segment_page__WEBPACK_IMPORTED_MODULE_3__["SegmentPage"]
    }
];
let SegmentPageRoutingModule = class SegmentPageRoutingModule {
};
SegmentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SegmentPageRoutingModule);



/***/ }),

/***/ "./src/app/ui-components/segment/segment.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/ui-components/segment/segment.module.ts ***!
  \*********************************************************/
/*! exports provided: SegmentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentPageModule", function() { return SegmentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _segment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./segment-routing.module */ "./src/app/ui-components/segment/segment-routing.module.ts");
/* harmony import */ var _segment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./segment.page */ "./src/app/ui-components/segment/segment.page.ts");







let SegmentPageModule = class SegmentPageModule {
};
SegmentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _segment_routing_module__WEBPACK_IMPORTED_MODULE_5__["SegmentPageRoutingModule"]
        ],
        declarations: [_segment_page__WEBPACK_IMPORTED_MODULE_6__["SegmentPage"]]
    })
], SegmentPageModule);



/***/ }),

/***/ "./src/app/ui-components/segment/segment.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/ui-components/segment/segment.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ios component-segment ion-header ion-segment {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n}\n\ncomponent-segment ion-content ion-segment {\n  margin: 10px auto;\n}\n\nion-content ion-segment {\n  margin: 5px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZXRoZWUvSW9uaWNQcm9qZWN0cy9faW9uaWM1L2lvbmljNWZ1bGxhcHBfZmluYWwvc3JjL2FwcC91aS1jb21wb25lbnRzL3NlZ21lbnQvc2VnbWVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL3VpLWNvbXBvbmVudHMvc2VnbWVudC9zZWdtZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBRUEsUUFBQTtFQUNBLFNBQUE7RUFFQSw0Q0FBQTtBQ0RKOztBRElFO0VBQ0UsaUJBQUE7QUNESjs7QURHRTtFQUNFLGFBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3VpLWNvbXBvbmVudHMvc2VnbWVudC9zZWdtZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pb3MgY29tcG9uZW50LXNlZ21lbnQgaW9uLWhlYWRlciBpb24tc2VnbWVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICBcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gIFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICB9XG5cbiAgY29tcG9uZW50LXNlZ21lbnQgaW9uLWNvbnRlbnQgaW9uLXNlZ21lbnQge1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICB9XG4gIGlvbi1jb250ZW50IGlvbi1zZWdtZW50IHtcbiAgICBtYXJnaW46IDVweCAwO1xuICB9IiwiLmlvcyBjb21wb25lbnQtc2VnbWVudCBpb24taGVhZGVyIGlvbi1zZWdtZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuY29tcG9uZW50LXNlZ21lbnQgaW9uLWNvbnRlbnQgaW9uLXNlZ21lbnQge1xuICBtYXJnaW46IDEwcHggYXV0bztcbn1cblxuaW9uLWNvbnRlbnQgaW9uLXNlZ21lbnQge1xuICBtYXJnaW46IDVweCAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/ui-components/segment/segment.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/ui-components/segment/segment.page.ts ***!
  \*******************************************************/
/*! exports provided: SegmentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentPage", function() { return SegmentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SegmentPage = class SegmentPage {
    constructor() { }
    ngOnInit() {
    }
};
SegmentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-segment',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./segment.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/segment/segment.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./segment.page.scss */ "./src/app/ui-components/segment/segment.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SegmentPage);



/***/ })

}]);
//# sourceMappingURL=ui-components-segment-segment-module-es2015.js.map