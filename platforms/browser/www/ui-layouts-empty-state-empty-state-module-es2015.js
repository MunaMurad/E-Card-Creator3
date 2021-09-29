(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-layouts-empty-state-empty-state-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/empty-state/empty-state.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/empty-state/empty-state.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Empty state</ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n\n    \n    <ion-segment scrollable [(ngModel)]=\"styleView\"  >\n      <ion-segment-button value=\"style1\">Outline</ion-segment-button>\n      <ion-segment-button value=\"style2\">Filled</ion-segment-button>\n      <ion-segment-button value=\"style3\">Sharp</ion-segment-button>\n      <ion-segment-button value=\"style1\">Outline</ion-segment-button>\n      <ion-segment-button value=\"style2\">Filled</ion-segment-button>\n      <ion-segment-button value=\"style3\">Sharp</ion-segment-button>\n    </ion-segment>\n\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div *ngIf=\"styleView==='style1'\">\n    <div id=\"container\">\n      <ion-icon name=\"hardware-chip-outline\" class=\"component-icon large component-icon-primary\"></ion-icon>\n      <br>\n      <strong class=\"capitalize\">EMpty state</strong>\n      <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\n    </div>\n  \n  </div>\n\n\n  <div *ngIf=\"styleView==='style2'\">\n    <div id=\"container\">\n      <ion-icon name=\"speedometer-outline\" class=\"component-icon large \"></ion-icon>\n      <br>\n      <strong class=\"capitalize\">EMpty state2</strong>\n      <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\n    </div>\n  </div>\n\n  <div *ngIf=\"styleView==='style3'\">\n    <div id=\"container\">\n      <ion-icon name=\"hardware-chip-outline\" class=\"component-icon large component-icon-primary\"></ion-icon>\n      <br>\n      <strong class=\"capitalize\">EMpty state3</strong>\n      <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/ui-layouts/empty-state/empty-state-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/ui-layouts/empty-state/empty-state-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: EmptyStatePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyStatePageRoutingModule", function() { return EmptyStatePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _empty_state_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./empty-state.page */ "./src/app/ui-layouts/empty-state/empty-state.page.ts");




const routes = [
    {
        path: '',
        component: _empty_state_page__WEBPACK_IMPORTED_MODULE_3__["EmptyStatePage"]
    }
];
let EmptyStatePageRoutingModule = class EmptyStatePageRoutingModule {
};
EmptyStatePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EmptyStatePageRoutingModule);



/***/ }),

/***/ "./src/app/ui-layouts/empty-state/empty-state.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/ui-layouts/empty-state/empty-state.module.ts ***!
  \**************************************************************/
/*! exports provided: EmptyStatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyStatePageModule", function() { return EmptyStatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _empty_state_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./empty-state-routing.module */ "./src/app/ui-layouts/empty-state/empty-state-routing.module.ts");
/* harmony import */ var _empty_state_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./empty-state.page */ "./src/app/ui-layouts/empty-state/empty-state.page.ts");







let EmptyStatePageModule = class EmptyStatePageModule {
};
EmptyStatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _empty_state_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmptyStatePageRoutingModule"]
        ],
        declarations: [_empty_state_page__WEBPACK_IMPORTED_MODULE_6__["EmptyStatePage"]]
    })
], EmptyStatePageModule);



/***/ }),

/***/ "./src/app/ui-layouts/empty-state/empty-state.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/ui-layouts/empty-state/empty-state.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".component-icon {\n  border-radius: 50%;\n  padding: 7px;\n  height: 18px;\n  width: 18px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.large {\n  height: 100px;\n  width: 100px;\n}\n\n.component-icon-primary {\n  background: var(--ion-color-primary);\n  color: #fff;\n}\n\n.component-icon-dark {\n  background: var(--ion-color-step-850, #27323e);\n  color: var(--ion-item-background, #fff);\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZXRoZWUvSW9uaWNQcm9qZWN0cy9faW9uaWM1L2lvbmljNWZ1bGxhcHBfZmluYWwvc3JjL2FwcC91aS1sYXlvdXRzL2VtcHR5LXN0YXRlL2VtcHR5LXN0YXRlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdWktbGF5b3V0cy9lbXB0eS1zdGF0ZS9lbXB0eS1zdGF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUVBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLGVBQUE7RUFDQSxrQkFBQTtBQ0RKOztBREdDO0VBQ0csYUFBQTtFQUNBLFlBQUE7QUNBSjs7QURHRTtFQUNFLG9DQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdFO0VBQ0UsOENBQUE7RUFDQSx1Q0FBQTtBQ0FKOztBRElFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FDREo7O0FESUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURJRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FDREo7O0FESUU7RUFDRSxxQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvdWktbGF5b3V0cy9lbXB0eS1zdGF0ZS9lbXB0eS1zdGF0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tcG9uZW50LWljb24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgXG4gICAgcGFkZGluZzogN3B4O1xuICAgIGhlaWdodDogMThweDtcbiAgICB3aWR0aDogMThweDtcbiAgXG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuIC5sYXJnZSB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gXG4gIH1cbiAgLmNvbXBvbmVudC1pY29uLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuXG4gIC5jb21wb25lbnQtaWNvbi1kYXJrIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC04NTAsICMyNzMyM2UpO1xuICAgIGNvbG9yOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCAjZmZmKTtcbiAgfVxuXG4vLyBcbiAgI2NvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgfVxuICBcbiAgI2NvbnRhaW5lciBzdHJvbmcge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgfVxuICBcbiAgI2NvbnRhaW5lciBwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgY29sb3I6ICM4YzhjOGM7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIFxuICAjY29udGFpbmVyIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfSIsIi5jb21wb25lbnQtaWNvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogN3B4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiAxOHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmxhcmdlIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG4uY29tcG9uZW50LWljb24tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jb21wb25lbnQtaWNvbi1kYXJrIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtODUwLCAjMjczMjNlKTtcbiAgY29sb3I6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsICNmZmYpO1xufVxuXG4jY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/ui-layouts/empty-state/empty-state.page.ts":
/*!************************************************************!*\
  !*** ./src/app/ui-layouts/empty-state/empty-state.page.ts ***!
  \************************************************************/
/*! exports provided: EmptyStatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyStatePage", function() { return EmptyStatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EmptyStatePage = class EmptyStatePage {
    constructor() {
        this.styleView = "style1";
    }
    ngOnInit() {
    }
};
EmptyStatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-empty-state',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./empty-state.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/empty-state/empty-state.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./empty-state.page.scss */ "./src/app/ui-layouts/empty-state/empty-state.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EmptyStatePage);



/***/ })

}]);
//# sourceMappingURL=ui-layouts-empty-state-empty-state-module-es2015.js.map