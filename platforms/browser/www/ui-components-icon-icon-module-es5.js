function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-components-icon-icon-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/icon/icon.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/icon/icon.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiComponentsIconIconPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>icon</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-icon  name=\"hardware-chip-outline\" class=\"component-icon  component-icon-primary\"></ion-icon>\n  <ion-icon  name=\"hardware-chip-outline\" class=\"component-icon component-icon-primary\"></ion-icon>\n  <ion-icon name=\"hardware-chip-outline\" class=\"component-icon large component-icon-primary\"></ion-icon>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/ui-components/icon/icon-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/ui-components/icon/icon-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: IconPageRoutingModule */

  /***/
  function srcAppUiComponentsIconIconRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconPageRoutingModule", function () {
      return IconPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _icon_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./icon.page */
    "./src/app/ui-components/icon/icon.page.ts");

    var routes = [{
      path: '',
      component: _icon_page__WEBPACK_IMPORTED_MODULE_3__["IconPage"]
    }];

    var IconPageRoutingModule = function IconPageRoutingModule() {
      _classCallCheck(this, IconPageRoutingModule);
    };

    IconPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], IconPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/ui-components/icon/icon.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/ui-components/icon/icon.module.ts ***!
    \***************************************************/

  /*! exports provided: IconPageModule */

  /***/
  function srcAppUiComponentsIconIconModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconPageModule", function () {
      return IconPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _icon_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./icon-routing.module */
    "./src/app/ui-components/icon/icon-routing.module.ts");
    /* harmony import */


    var _icon_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./icon.page */
    "./src/app/ui-components/icon/icon.page.ts");

    var IconPageModule = function IconPageModule() {
      _classCallCheck(this, IconPageModule);
    };

    IconPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _icon_routing_module__WEBPACK_IMPORTED_MODULE_5__["IconPageRoutingModule"]],
      declarations: [_icon_page__WEBPACK_IMPORTED_MODULE_6__["IconPage"]]
    })], IconPageModule);
    /***/
  },

  /***/
  "./src/app/ui-components/icon/icon.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/ui-components/icon/icon.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiComponentsIconIconPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".component-icon {\n  border-radius: 50%;\n  padding: 7px;\n  height: 18px;\n  width: 18px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.large {\n  height: 100px;\n  width: 100px;\n}\n\n.component-icon-primary {\n  background: var(--ion-color-primary);\n  color: #fff;\n}\n\n.component-icon-dark {\n  background: var(--ion-color-step-850, #27323e);\n  color: var(--ion-item-background, #fff);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZXRoZWUvSW9uaWNQcm9qZWN0cy9faW9uaWM1L2lvbmljNWZ1bGxhcHBfZmluYWwvc3JjL2FwcC91aS1jb21wb25lbnRzL2ljb24vaWNvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3VpLWNvbXBvbmVudHMvaWNvbi9pY29uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBRUEsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBRUEsZUFBQTtFQUNBLGtCQUFBO0FDREo7O0FER0M7RUFDRyxhQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdFO0VBQ0Usb0NBQUE7RUFDQSxXQUFBO0FDQUo7O0FER0U7RUFDRSw4Q0FBQTtFQUNBLHVDQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC91aS1jb21wb25lbnRzL2ljb24vaWNvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tcG9uZW50LWljb24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgXG4gICAgcGFkZGluZzogN3B4O1xuICAgIGhlaWdodDogMThweDtcbiAgICB3aWR0aDogMThweDtcbiAgXG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuIC5sYXJnZSB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gXG4gIH1cbiAgLmNvbXBvbmVudC1pY29uLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuXG4gIC5jb21wb25lbnQtaWNvbi1kYXJrIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC04NTAsICMyNzMyM2UpO1xuICAgIGNvbG9yOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCAjZmZmKTtcbiAgfSIsIi5jb21wb25lbnQtaWNvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogN3B4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiAxOHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmxhcmdlIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG4uY29tcG9uZW50LWljb24tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jb21wb25lbnQtaWNvbi1kYXJrIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtODUwLCAjMjczMjNlKTtcbiAgY29sb3I6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsICNmZmYpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ui-components/icon/icon.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/ui-components/icon/icon.page.ts ***!
    \*************************************************/

  /*! exports provided: IconPage */

  /***/
  function srcAppUiComponentsIconIconPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconPage", function () {
      return IconPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var IconPage = /*#__PURE__*/function () {
      function IconPage() {
        _classCallCheck(this, IconPage);
      }

      _createClass(IconPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IconPage;
    }();

    IconPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-icon',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./icon.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/icon/icon.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./icon.page.scss */
      "./src/app/ui-components/icon/icon.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], IconPage);
    /***/
  }
}]);
//# sourceMappingURL=ui-components-icon-icon-module-es5.js.map