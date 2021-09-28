function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-components-select-select-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/select/select.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/select/select.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiComponentsSelectSelectPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent={true}>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Select</ion-title>\n  </ion-toolbar>\n</ion-header>,\n\n<ion-content fullscreen={true}>\n  <ion-list>\n    <ion-list-header lines=\"full\">\n      <ion-label>Select Trip</ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-label position=\"stacked\">\n        Origin\n      </ion-label>\n      <ion-select placeholder=\"Select Airport\">\n        <ion-select-option value=\"madison\">Madison (MSN)</ion-select-option>\n        <ion-select-option value=\"chicago\">Chicago (ORD)</ion-select-option>\n        <ion-select-option value=\"austin\">Austin (AUS)</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">\n        Destination\n      </ion-label>\n      <ion-select placeholder=\"Select Airport\">\n        <ion-select-option value=\"newyork\">New York (JFK)</ion-select-option>\n        <ion-select-option value=\"honolulu\">Honolulu (HNL)</ion-select-option>\n        <ion-select-option value=\"baltimore\">Baltimore (BWI)</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">\n        Passengers\n      </ion-label>\n      <ion-select value=\"1\">\n        <ion-select-option value=\"1\">1 Adult</ion-select-option>\n        <ion-select-option value=\"2\">2 Adults</ion-select-option>\n        <ion-select-option value=\"3\">3 Adults</ion-select-option>\n        <ion-select-option value=\"4\">4 Adults</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item lines=\"full\">\n      <ion-label position=\"stacked\">\n        Add-ons\n      </ion-label>\n      <ion-select placeholder=\"Select Multiple Add-ons\" multiple={true}>\n        <ion-select-option value=\"firstclass\">First Class</ion-select-option>\n        <ion-select-option value=\"bag\">Additional Bag</ion-select-option>\n        <ion-select-option value=\"headphones\">Headphones</ion-select-option>\n        <ion-select-option value=\"wifi\">Inflight WiFi</ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      <ion-label>Select Interfaces</ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-label position=\"stacked\">\n        Gender\n      </ion-label>\n      <ion-select placeholder=\"Popover Interface\" interface=\"popover\">\n        <ion-select-option value=\"f\">Female</ion-select-option>\n        <ion-select-option value=\"m\">Male</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">\n        Mute Notifications\n      </ion-label>\n      <ion-select placeholder=\"Action Sheet Interface\" interface=\"action-sheet\">\n        <ion-select-option value=\"mute_15\">For 15 Minutes</ion-select-option>\n        <ion-select-option value=\"mute_1\">For 1 Hour</ion-select-option>\n        <ion-select-option value=\"mute_23\">For 24 Hours</ion-select-option>\n        <ion-select-option value=\"mute_inf\">Until I turn it back on</ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/ui-components/select/select-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/ui-components/select/select-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: SelectPageRoutingModule */

  /***/
  function srcAppUiComponentsSelectSelectRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectPageRoutingModule", function () {
      return SelectPageRoutingModule;
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


    var _select_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./select.page */
    "./src/app/ui-components/select/select.page.ts");

    var routes = [{
      path: '',
      component: _select_page__WEBPACK_IMPORTED_MODULE_3__["SelectPage"]
    }];

    var SelectPageRoutingModule = function SelectPageRoutingModule() {
      _classCallCheck(this, SelectPageRoutingModule);
    };

    SelectPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SelectPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/ui-components/select/select.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/ui-components/select/select.module.ts ***!
    \*******************************************************/

  /*! exports provided: SelectPageModule */

  /***/
  function srcAppUiComponentsSelectSelectModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectPageModule", function () {
      return SelectPageModule;
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


    var _select_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./select-routing.module */
    "./src/app/ui-components/select/select-routing.module.ts");
    /* harmony import */


    var _select_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./select.page */
    "./src/app/ui-components/select/select.page.ts");

    var SelectPageModule = function SelectPageModule() {
      _classCallCheck(this, SelectPageModule);
    };

    SelectPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _select_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelectPageRoutingModule"]],
      declarations: [_select_page__WEBPACK_IMPORTED_MODULE_6__["SelectPage"]]
    })], SelectPageModule);
    /***/
  },

  /***/
  "./src/app/ui-components/select/select.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/ui-components/select/select.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiComponentsSelectSelectPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWNvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ui-components/select/select.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/ui-components/select/select.page.ts ***!
    \*****************************************************/

  /*! exports provided: SelectPage */

  /***/
  function srcAppUiComponentsSelectSelectPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectPage", function () {
      return SelectPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SelectPage = /*#__PURE__*/function () {
      function SelectPage() {
        _classCallCheck(this, SelectPage);
      }

      _createClass(SelectPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SelectPage;
    }();

    SelectPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-select',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./select.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/select/select.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./select.page.scss */
      "./src/app/ui-components/select/select.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SelectPage);
    /***/
  }
}]);
//# sourceMappingURL=ui-components-select-select-module-es5.js.map