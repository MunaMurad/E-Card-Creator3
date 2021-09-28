function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-components-dialog-dialog-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/dialog/dialog.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/dialog/dialog.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiComponentsDialogDialogPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>dialog</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/ui-components/dialog/dialog-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/ui-components/dialog/dialog-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: DialogPageRoutingModule */

  /***/
  function srcAppUiComponentsDialogDialogRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogPageRoutingModule", function () {
      return DialogPageRoutingModule;
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


    var _dialog_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dialog.page */
    "./src/app/ui-components/dialog/dialog.page.ts");

    var routes = [{
      path: '',
      component: _dialog_page__WEBPACK_IMPORTED_MODULE_3__["DialogPage"]
    }];

    var DialogPageRoutingModule = function DialogPageRoutingModule() {
      _classCallCheck(this, DialogPageRoutingModule);
    };

    DialogPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DialogPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/ui-components/dialog/dialog.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/ui-components/dialog/dialog.module.ts ***!
    \*******************************************************/

  /*! exports provided: DialogPageModule */

  /***/
  function srcAppUiComponentsDialogDialogModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogPageModule", function () {
      return DialogPageModule;
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


    var _dialog_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dialog-routing.module */
    "./src/app/ui-components/dialog/dialog-routing.module.ts");
    /* harmony import */


    var _dialog_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dialog.page */
    "./src/app/ui-components/dialog/dialog.page.ts");

    var DialogPageModule = function DialogPageModule() {
      _classCallCheck(this, DialogPageModule);
    };

    DialogPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _dialog_routing_module__WEBPACK_IMPORTED_MODULE_5__["DialogPageRoutingModule"]],
      declarations: [_dialog_page__WEBPACK_IMPORTED_MODULE_6__["DialogPage"]]
    })], DialogPageModule);
    /***/
  },

  /***/
  "./src/app/ui-components/dialog/dialog.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/ui-components/dialog/dialog.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiComponentsDialogDialogPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWNvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ui-components/dialog/dialog.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/ui-components/dialog/dialog.page.ts ***!
    \*****************************************************/

  /*! exports provided: DialogPage */

  /***/
  function srcAppUiComponentsDialogDialogPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogPage", function () {
      return DialogPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DialogPage = /*#__PURE__*/function () {
      function DialogPage() {
        _classCallCheck(this, DialogPage);
      }

      _createClass(DialogPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DialogPage;
    }();

    DialogPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dialog.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/dialog/dialog.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dialog.page.scss */
      "./src/app/ui-components/dialog/dialog.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], DialogPage);
    /***/
  }
}]);
//# sourceMappingURL=ui-components-dialog-dialog-module-es5.js.map