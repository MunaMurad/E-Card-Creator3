function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-layouts-realestate-real-list-real-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/realestate/real-list/real-list.page.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/realestate/real-list/real-list.page.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiLayoutsRealestateRealListRealListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>real-list</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/ui-layouts/realestate/real-list/real-list-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/ui-layouts/realestate/real-list/real-list-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: RealListPageRoutingModule */

  /***/
  function srcAppUiLayoutsRealestateRealListRealListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RealListPageRoutingModule", function () {
      return RealListPageRoutingModule;
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


    var _real_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./real-list.page */
    "./src/app/ui-layouts/realestate/real-list/real-list.page.ts");

    var routes = [{
      path: '',
      component: _real_list_page__WEBPACK_IMPORTED_MODULE_3__["RealListPage"]
    }];

    var RealListPageRoutingModule = function RealListPageRoutingModule() {
      _classCallCheck(this, RealListPageRoutingModule);
    };

    RealListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RealListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/ui-layouts/realestate/real-list/real-list.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/ui-layouts/realestate/real-list/real-list.module.ts ***!
    \*********************************************************************/

  /*! exports provided: RealListPageModule */

  /***/
  function srcAppUiLayoutsRealestateRealListRealListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RealListPageModule", function () {
      return RealListPageModule;
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


    var _real_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./real-list-routing.module */
    "./src/app/ui-layouts/realestate/real-list/real-list-routing.module.ts");
    /* harmony import */


    var _real_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./real-list.page */
    "./src/app/ui-layouts/realestate/real-list/real-list.page.ts");

    var RealListPageModule = function RealListPageModule() {
      _classCallCheck(this, RealListPageModule);
    };

    RealListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _real_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["RealListPageRoutingModule"]],
      declarations: [_real_list_page__WEBPACK_IMPORTED_MODULE_6__["RealListPage"]]
    })], RealListPageModule);
    /***/
  },

  /***/
  "./src/app/ui-layouts/realestate/real-list/real-list.page.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/ui-layouts/realestate/real-list/real-list.page.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiLayoutsRealestateRealListRealListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWxheW91dHMvcmVhbGVzdGF0ZS9yZWFsLWxpc3QvcmVhbC1saXN0LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ui-layouts/realestate/real-list/real-list.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/ui-layouts/realestate/real-list/real-list.page.ts ***!
    \*******************************************************************/

  /*! exports provided: RealListPage */

  /***/
  function srcAppUiLayoutsRealestateRealListRealListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RealListPage", function () {
      return RealListPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RealListPage = /*#__PURE__*/function () {
      function RealListPage() {
        _classCallCheck(this, RealListPage);
      }

      _createClass(RealListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RealListPage;
    }();

    RealListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-real-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./real-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/realestate/real-list/real-list.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./real-list.page.scss */
      "./src/app/ui-layouts/realestate/real-list/real-list.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], RealListPage);
    /***/
  }
}]);
//# sourceMappingURL=ui-layouts-realestate-real-list-real-list-module-es5.js.map