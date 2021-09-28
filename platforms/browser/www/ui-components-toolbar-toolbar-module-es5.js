function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-components-toolbar-toolbar-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/toolbar/toolbar.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/toolbar/toolbar.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiComponentsToolbarToolbarPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Toolbar</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content fullscreen=\"true\">\n\n<!-- ############## -->\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Toolbar</ion-title>\n    </ion-toolbar>\n    <ion-toolbar>\n      <ion-searchbar></ion-searchbar>\n    </ion-toolbar>\n  </ion-header>\n\n\n<!-- ############## -->\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button auto-hide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>Standard</ion-title>\n  </ion-toolbar>\n\n<!-- ############## -->\n\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button>\n        Clear\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        Done\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>Buttons</ion-title>\n  </ion-toolbar>\n\n<!-- ############## -->\n\n  <ion-toolbar>\n    <ion-segment value=\"all\">\n      <ion-segment-button value=\"all\">All</ion-segment-button>\n      <ion-segment-button value=\"favorites\">Favorites</ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n<!-- ############## -->\n  <ion-toolbar>\n    <ion-title>Progress</ion-title>\n\n    <ion-progress-bar value=\".4\"></ion-progress-bar>\n  </ion-toolbar>\n\n<!-- ############## -->\n  <ion-toolbar color=\"primary\">\n    <ion-title>Primary</ion-title>\n  </ion-toolbar>\n\n\n<!-- ############## -->\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-button>\n        <ion-icon name=\"heart\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button auto-hide=\"false\"></ion-menu-button>\n    </ion-buttons>\n\n    <ion-title>Tertiary</ion-title>\n  </ion-toolbar>\n\n\n\n<!-- ############## -->\n  <ion-toolbar color=\"danger\">\n    <ion-buttons slot=\"start\">\n      \n      <ion-button>\n        <ion-icon name=\"star\"></ion-icon>\n      </ion-button>\n\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" ios=\"ellipsis-vertical\" md=\"ellipsis-vertical\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>Danger</ion-title>\n  </ion-toolbar>\n\n\n\n<!-- ############## -->\n      <ion-header>\n          <ion-toolbar>\n            <ion-buttons slot=\"primary\">\n              <ion-button>\n                Edit\n              </ion-button>\n            </ion-buttons>\n            <ion-buttons slot=\"end\">\n              <ion-button>\n                <ion-icon slot=\"icon-only\" ios=\"add-outline\" md=\"add-sharp\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n\n            <ion-title>Page title</ion-title>\n          </ion-toolbar>\n        </ion-header>\n\n\n\n        <!-- ############## -->\n        <ion-header>\n          <ion-toolbar>\n            <ion-buttons slot=\"start\">\n              <!-- <ion-back-button defaultHref=\"#\" text={ ios ? 'February' : ''}></ion-back-button> -->\n            </ion-buttons>\n            <ion-buttons slot=\"end\">\n              <ion-button>\n                <ion-icon slot=\"icon-only\" ios=\"list-outline\" md=\"list-sharp\"></ion-icon>\n              </ion-button>\n              <ion-button>\n                <ion-icon slot=\"icon-only\" ios=\"search-outline\" md=\"search-sharp\"></ion-icon>\n              </ion-button>\n              <ion-button>\n                <ion-icon slot=\"icon-only\" ios=\"add-outline\" md=\"add-sharp\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-header>\n\n\n\n\n\n<!-- ############## -->\n        <ion-header>\n          <ion-toolbar>\n            <ion-buttons slot=\"primary\">\n              <ion-button>\n                <ion-icon slot=\"icon-only\" ios=\"heart-outline\" md=\"heart-sharp\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n            <ion-buttons slot=\"end\">\n              <ion-button>\n                <ion-icon slot=\"icon-only\" ios=\"search-outline\" md=\"search-sharp\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n\n            <ion-title>Page title</ion-title>\n          </ion-toolbar>\n        </ion-header>\n\n\n        <!-- ############## -->\n        <ion-header>\n          <ion-toolbar>\n            <ion-buttons slot=\"primary\">\n              <ion-button>\n                Reset\n              </ion-button>\n            </ion-buttons>\n            <ion-buttons slot=\"end\">\n              <ion-button>\n                Done\n              </ion-button>\n            </ion-buttons>\n\n            <ion-title>Page title</ion-title>\n          </ion-toolbar>\n        </ion-header>\n\n\n        <!-- ############## -->\n        <ion-header>\n          <ion-toolbar>\n            <ion-buttons slot=\"start\">\n              <!-- <ion-back-button defaultHref=\"#\" text={ ios ? 'Notes' : ''}></ion-back-button> -->\n            </ion-buttons>\n\n            <ion-buttons slot=\"end\">\n              <ion-button>\n                <ion-icon slot=\"icon-only\" name=\"person-circle-outline\"></ion-icon>\n              </ion-button>\n              <ion-button>\n                <ion-icon slot=\"icon-only\" name=\"share-outline\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-header>\n\n\n        <!-- ############## -->\n        <ion-header>\n          <ion-toolbar>\n            <ion-buttons slot=\"start\">\n              <!-- <ion-menu-button autoHide={false}></ion-menu-button> -->\n            </ion-buttons>\n\n            <ion-title>Page title</ion-title>\n          </ion-toolbar>\n        </ion-header>\n\n\n        <!-- ############## -->\n        <ion-header>\n          <ion-toolbar>\n            <ion-buttons slot=\"start\">\n              <ion-back-button defaultHref=\"#\"></ion-back-button>\n            </ion-buttons>\n            <ion-buttons slot=\"end\">\n              <ion-button>\n                <ion-icon slot=\"icon-only\" ios=\"star-outline\" md=\"star-sharp\"></ion-icon>\n              </ion-button>\n            </ion-buttons>\n\n            <ion-title>Page title</ion-title>\n          </ion-toolbar>\n        </ion-header>\n\n\n  <!-- ############## -->\n\n        <ion-header>\n          <ion-toolbar>\n            <ion-title>Page title</ion-title>\n\n            <!-- <ion-progress-bar value={.4}></ion-progress-bar> -->\n          </ion-toolbar>\n        </ion-header>\n\n</ion-content>\n\n\n\n\n<!-- ############## -->\n<ion-footer>\n  <ion-toolbar>\n    <ion-title>\n      Click to Add Text\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button id=\"changeText\" onClick=\"toggleText()\">\n        <ion-icon slot=\"start\" name=\"refresh\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/ui-components/toolbar/toolbar-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/ui-components/toolbar/toolbar-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ToolbarPageRoutingModule */

  /***/
  function srcAppUiComponentsToolbarToolbarRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolbarPageRoutingModule", function () {
      return ToolbarPageRoutingModule;
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


    var _toolbar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./toolbar.page */
    "./src/app/ui-components/toolbar/toolbar.page.ts");

    var routes = [{
      path: '',
      component: _toolbar_page__WEBPACK_IMPORTED_MODULE_3__["ToolbarPage"]
    }];

    var ToolbarPageRoutingModule = function ToolbarPageRoutingModule() {
      _classCallCheck(this, ToolbarPageRoutingModule);
    };

    ToolbarPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ToolbarPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/ui-components/toolbar/toolbar.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/ui-components/toolbar/toolbar.module.ts ***!
    \*********************************************************/

  /*! exports provided: ToolbarPageModule */

  /***/
  function srcAppUiComponentsToolbarToolbarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolbarPageModule", function () {
      return ToolbarPageModule;
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


    var _toolbar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./toolbar-routing.module */
    "./src/app/ui-components/toolbar/toolbar-routing.module.ts");
    /* harmony import */


    var _toolbar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./toolbar.page */
    "./src/app/ui-components/toolbar/toolbar.page.ts");

    var ToolbarPageModule = function ToolbarPageModule() {
      _classCallCheck(this, ToolbarPageModule);
    };

    ToolbarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _toolbar_routing_module__WEBPACK_IMPORTED_MODULE_5__["ToolbarPageRoutingModule"]],
      declarations: [_toolbar_page__WEBPACK_IMPORTED_MODULE_6__["ToolbarPage"]]
    })], ToolbarPageModule);
    /***/
  },

  /***/
  "./src/app/ui-components/toolbar/toolbar.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/ui-components/toolbar/toolbar.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiComponentsToolbarToolbarPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWNvbXBvbmVudHMvdG9vbGJhci90b29sYmFyLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ui-components/toolbar/toolbar.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/ui-components/toolbar/toolbar.page.ts ***!
    \*******************************************************/

  /*! exports provided: ToolbarPage */

  /***/
  function srcAppUiComponentsToolbarToolbarPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolbarPage", function () {
      return ToolbarPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ToolbarPage = /*#__PURE__*/function () {
      function ToolbarPage() {
        _classCallCheck(this, ToolbarPage);
      }

      _createClass(ToolbarPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ToolbarPage;
    }();

    ToolbarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-toolbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./toolbar.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/toolbar/toolbar.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./toolbar.page.scss */
      "./src/app/ui-components/toolbar/toolbar.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ToolbarPage);
    /***/
  }
}]);
//# sourceMappingURL=ui-components-toolbar-toolbar-module-es5.js.map