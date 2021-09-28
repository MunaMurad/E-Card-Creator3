function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-layouts-food-food-tabs-food-tabs-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/food/food-tabs/food-tabs.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/food/food-tabs/food-tabs.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiLayoutsFoodFoodTabsFoodTabsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-toolbar>\n  <ion-buttons slot=\"start\">\n    <ion-menu-button></ion-menu-button>\n  </ion-buttons>\n\n  <ion-title >Food</ion-title>\n\n</ion-toolbar>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/ui-layouts/food/food-tabs/food-tabs-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/ui-layouts/food/food-tabs/food-tabs-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: FoodTabsPageRoutingModule */

  /***/
  function srcAppUiLayoutsFoodFoodTabsFoodTabsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodTabsPageRoutingModule", function () {
      return FoodTabsPageRoutingModule;
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


    var _food_tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./food-tabs.page */
    "./src/app/ui-layouts/food/food-tabs/food-tabs.page.ts");

    var routes = [{
      path: '',
      component: _food_tabs_page__WEBPACK_IMPORTED_MODULE_3__["FoodTabsPage"]
    }];

    var FoodTabsPageRoutingModule = function FoodTabsPageRoutingModule() {
      _classCallCheck(this, FoodTabsPageRoutingModule);
    };

    FoodTabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FoodTabsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/ui-layouts/food/food-tabs/food-tabs.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/ui-layouts/food/food-tabs/food-tabs.module.ts ***!
    \***************************************************************/

  /*! exports provided: FoodTabsPageModule */

  /***/
  function srcAppUiLayoutsFoodFoodTabsFoodTabsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodTabsPageModule", function () {
      return FoodTabsPageModule;
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


    var _food_tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./food-tabs-routing.module */
    "./src/app/ui-layouts/food/food-tabs/food-tabs-routing.module.ts");
    /* harmony import */


    var _food_tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./food-tabs.page */
    "./src/app/ui-layouts/food/food-tabs/food-tabs.page.ts");

    var FoodTabsPageModule = function FoodTabsPageModule() {
      _classCallCheck(this, FoodTabsPageModule);
    };

    FoodTabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _food_tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["FoodTabsPageRoutingModule"]],
      declarations: [_food_tabs_page__WEBPACK_IMPORTED_MODULE_6__["FoodTabsPage"]]
    })], FoodTabsPageModule);
    /***/
  },

  /***/
  "./src/app/ui-layouts/food/food-tabs/food-tabs.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/ui-layouts/food/food-tabs/food-tabs.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiLayoutsFoodFoodTabsFoodTabsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWxheW91dHMvZm9vZC9mb29kLXRhYnMvZm9vZC10YWJzLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ui-layouts/food/food-tabs/food-tabs.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/ui-layouts/food/food-tabs/food-tabs.page.ts ***!
    \*************************************************************/

  /*! exports provided: FoodTabsPage */

  /***/
  function srcAppUiLayoutsFoodFoodTabsFoodTabsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodTabsPage", function () {
      return FoodTabsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FoodTabsPage = /*#__PURE__*/function () {
      function FoodTabsPage() {
        _classCallCheck(this, FoodTabsPage);
      }

      _createClass(FoodTabsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FoodTabsPage;
    }();

    FoodTabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-food-tabs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./food-tabs.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/food/food-tabs/food-tabs.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./food-tabs.page.scss */
      "./src/app/ui-layouts/food/food-tabs/food-tabs.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FoodTabsPage);
    /***/
  }
}]);
//# sourceMappingURL=ui-layouts-food-food-tabs-food-tabs-module-es5.js.map