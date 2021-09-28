function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-layouts-realestate-real-category-real-category-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/realestate/real-category/real-category.page.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/realestate/real-category/real-category.page.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiLayoutsRealestateRealCategoryRealCategoryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>real-category</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/ui-layouts/realestate/real-category/real-category-routing.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/ui-layouts/realestate/real-category/real-category-routing.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: RealCategoryPageRoutingModule */

  /***/
  function srcAppUiLayoutsRealestateRealCategoryRealCategoryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RealCategoryPageRoutingModule", function () {
      return RealCategoryPageRoutingModule;
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


    var _real_category_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./real-category.page */
    "./src/app/ui-layouts/realestate/real-category/real-category.page.ts");

    var routes = [{
      path: '',
      component: _real_category_page__WEBPACK_IMPORTED_MODULE_3__["RealCategoryPage"]
    }];

    var RealCategoryPageRoutingModule = function RealCategoryPageRoutingModule() {
      _classCallCheck(this, RealCategoryPageRoutingModule);
    };

    RealCategoryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RealCategoryPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/ui-layouts/realestate/real-category/real-category.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/ui-layouts/realestate/real-category/real-category.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: RealCategoryPageModule */

  /***/
  function srcAppUiLayoutsRealestateRealCategoryRealCategoryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RealCategoryPageModule", function () {
      return RealCategoryPageModule;
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


    var _real_category_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./real-category-routing.module */
    "./src/app/ui-layouts/realestate/real-category/real-category-routing.module.ts");
    /* harmony import */


    var _real_category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./real-category.page */
    "./src/app/ui-layouts/realestate/real-category/real-category.page.ts");

    var RealCategoryPageModule = function RealCategoryPageModule() {
      _classCallCheck(this, RealCategoryPageModule);
    };

    RealCategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _real_category_routing_module__WEBPACK_IMPORTED_MODULE_5__["RealCategoryPageRoutingModule"]],
      declarations: [_real_category_page__WEBPACK_IMPORTED_MODULE_6__["RealCategoryPage"]]
    })], RealCategoryPageModule);
    /***/
  },

  /***/
  "./src/app/ui-layouts/realestate/real-category/real-category.page.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/ui-layouts/realestate/real-category/real-category.page.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiLayoutsRealestateRealCategoryRealCategoryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWxheW91dHMvcmVhbGVzdGF0ZS9yZWFsLWNhdGVnb3J5L3JlYWwtY2F0ZWdvcnkucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ui-layouts/realestate/real-category/real-category.page.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/ui-layouts/realestate/real-category/real-category.page.ts ***!
    \***************************************************************************/

  /*! exports provided: RealCategoryPage */

  /***/
  function srcAppUiLayoutsRealestateRealCategoryRealCategoryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RealCategoryPage", function () {
      return RealCategoryPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RealCategoryPage = /*#__PURE__*/function () {
      function RealCategoryPage() {
        _classCallCheck(this, RealCategoryPage);
      }

      _createClass(RealCategoryPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RealCategoryPage;
    }();

    RealCategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-real-category',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./real-category.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/realestate/real-category/real-category.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./real-category.page.scss */
      "./src/app/ui-layouts/realestate/real-category/real-category.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], RealCategoryPage);
    /***/
  }
}]);
//# sourceMappingURL=ui-layouts-realestate-real-category-real-category-module-es5.js.map