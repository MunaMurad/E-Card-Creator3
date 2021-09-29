function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-layouts-food-food-detail-food-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/food/food-detail/food-detail.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/food/food-detail/food-detail.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiLayoutsFoodFoodDetailFoodDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>food-detail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/ui-layouts/food/food-detail/food-detail-routing.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/ui-layouts/food/food-detail/food-detail-routing.module.ts ***!
    \***************************************************************************/

  /*! exports provided: FoodDetailPageRoutingModule */

  /***/
  function srcAppUiLayoutsFoodFoodDetailFoodDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodDetailPageRoutingModule", function () {
      return FoodDetailPageRoutingModule;
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


    var _food_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./food-detail.page */
    "./src/app/ui-layouts/food/food-detail/food-detail.page.ts");

    var routes = [{
      path: '',
      component: _food_detail_page__WEBPACK_IMPORTED_MODULE_3__["FoodDetailPage"]
    }];

    var FoodDetailPageRoutingModule = function FoodDetailPageRoutingModule() {
      _classCallCheck(this, FoodDetailPageRoutingModule);
    };

    FoodDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FoodDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/ui-layouts/food/food-detail/food-detail.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/ui-layouts/food/food-detail/food-detail.module.ts ***!
    \*******************************************************************/

  /*! exports provided: FoodDetailPageModule */

  /***/
  function srcAppUiLayoutsFoodFoodDetailFoodDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodDetailPageModule", function () {
      return FoodDetailPageModule;
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


    var _food_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./food-detail-routing.module */
    "./src/app/ui-layouts/food/food-detail/food-detail-routing.module.ts");
    /* harmony import */


    var _food_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./food-detail.page */
    "./src/app/ui-layouts/food/food-detail/food-detail.page.ts");

    var FoodDetailPageModule = function FoodDetailPageModule() {
      _classCallCheck(this, FoodDetailPageModule);
    };

    FoodDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _food_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["FoodDetailPageRoutingModule"]],
      declarations: [_food_detail_page__WEBPACK_IMPORTED_MODULE_6__["FoodDetailPage"]]
    })], FoodDetailPageModule);
    /***/
  },

  /***/
  "./src/app/ui-layouts/food/food-detail/food-detail.page.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/ui-layouts/food/food-detail/food-detail.page.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiLayoutsFoodFoodDetailFoodDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWxheW91dHMvZm9vZC9mb29kLWRldGFpbC9mb29kLWRldGFpbC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ui-layouts/food/food-detail/food-detail.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/ui-layouts/food/food-detail/food-detail.page.ts ***!
    \*****************************************************************/

  /*! exports provided: FoodDetailPage */

  /***/
  function srcAppUiLayoutsFoodFoodDetailFoodDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodDetailPage", function () {
      return FoodDetailPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FoodDetailPage = /*#__PURE__*/function () {
      function FoodDetailPage() {
        _classCallCheck(this, FoodDetailPage);
      }

      _createClass(FoodDetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FoodDetailPage;
    }();

    FoodDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-food-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./food-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/food/food-detail/food-detail.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./food-detail.page.scss */
      "./src/app/ui-layouts/food/food-detail/food-detail.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FoodDetailPage);
    /***/
  }
}]);
//# sourceMappingURL=ui-layouts-food-food-detail-food-detail-module-es5.js.map