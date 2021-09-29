function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-layouts-map-map-detail-map-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/map/map-detail/map-detail.page.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/map/map-detail/map-detail.page.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiLayoutsMapMapDetailMapDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>map-detail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/ui-layouts/map/map-detail/map-detail-routing.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/ui-layouts/map/map-detail/map-detail-routing.module.ts ***!
    \************************************************************************/

  /*! exports provided: MapDetailPageRoutingModule */

  /***/
  function srcAppUiLayoutsMapMapDetailMapDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapDetailPageRoutingModule", function () {
      return MapDetailPageRoutingModule;
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


    var _map_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./map-detail.page */
    "./src/app/ui-layouts/map/map-detail/map-detail.page.ts");

    var routes = [{
      path: '',
      component: _map_detail_page__WEBPACK_IMPORTED_MODULE_3__["MapDetailPage"]
    }];

    var MapDetailPageRoutingModule = function MapDetailPageRoutingModule() {
      _classCallCheck(this, MapDetailPageRoutingModule);
    };

    MapDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MapDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/ui-layouts/map/map-detail/map-detail.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/ui-layouts/map/map-detail/map-detail.module.ts ***!
    \****************************************************************/

  /*! exports provided: MapDetailPageModule */

  /***/
  function srcAppUiLayoutsMapMapDetailMapDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapDetailPageModule", function () {
      return MapDetailPageModule;
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


    var _map_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./map-detail-routing.module */
    "./src/app/ui-layouts/map/map-detail/map-detail-routing.module.ts");
    /* harmony import */


    var _map_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./map-detail.page */
    "./src/app/ui-layouts/map/map-detail/map-detail.page.ts");

    var MapDetailPageModule = function MapDetailPageModule() {
      _classCallCheck(this, MapDetailPageModule);
    };

    MapDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _map_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["MapDetailPageRoutingModule"]],
      declarations: [_map_detail_page__WEBPACK_IMPORTED_MODULE_6__["MapDetailPage"]]
    })], MapDetailPageModule);
    /***/
  },

  /***/
  "./src/app/ui-layouts/map/map-detail/map-detail.page.scss":
  /*!****************************************************************!*\
    !*** ./src/app/ui-layouts/map/map-detail/map-detail.page.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiLayoutsMapMapDetailMapDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWxheW91dHMvbWFwL21hcC1kZXRhaWwvbWFwLWRldGFpbC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ui-layouts/map/map-detail/map-detail.page.ts":
  /*!**************************************************************!*\
    !*** ./src/app/ui-layouts/map/map-detail/map-detail.page.ts ***!
    \**************************************************************/

  /*! exports provided: MapDetailPage */

  /***/
  function srcAppUiLayoutsMapMapDetailMapDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapDetailPage", function () {
      return MapDetailPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MapDetailPage = /*#__PURE__*/function () {
      function MapDetailPage() {
        _classCallCheck(this, MapDetailPage);
      }

      _createClass(MapDetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MapDetailPage;
    }();

    MapDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-map-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./map-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/map/map-detail/map-detail.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./map-detail.page.scss */
      "./src/app/ui-layouts/map/map-detail/map-detail.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], MapDetailPage);
    /***/
  }
}]);
//# sourceMappingURL=ui-layouts-map-map-detail-map-detail-module-es5.js.map