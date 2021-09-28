function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-components-reorder-reorder-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/reorder/reorder.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/reorder/reorder.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiComponentsReorderReorderPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- The reorder gesture is disabled by default, enable it to drag and drop items -->\n<ion-reorder-group (ionItemReorder)=\"doReorder($event)\" disabled=\"false\">\n  <!-- Default reorder icon, end aligned items -->\n  <ion-item>\n    <ion-label>\n      Item 1\n    </ion-label>\n    <ion-reorder slot=\"end\"></ion-reorder>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>\n      Item 2\n    </ion-label>\n    <ion-reorder slot=\"end\"></ion-reorder>\n  </ion-item>\n\n  <!-- Default reorder icon, start aligned items -->\n  <ion-item>\n    <ion-reorder slot=\"start\"></ion-reorder>\n    <ion-label>\n      Item 3\n    </ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-reorder slot=\"start\"></ion-reorder>\n    <ion-label>\n      Item 4\n    </ion-label>\n  </ion-item>\n\n  <!-- Custom reorder icon end items -->\n  <ion-item>\n    <ion-label>\n      Item 5\n    </ion-label>\n    <ion-reorder slot=\"end\">\n      <ion-icon name=\"pizza\"></ion-icon>\n    </ion-reorder>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>\n      Item 6\n    </ion-label>\n    <ion-reorder slot=\"end\">\n      <ion-icon name=\"pizza\"></ion-icon>\n    </ion-reorder>\n  </ion-item>\n\n  <!-- Items wrapped in a reorder, entire item can be dragged -->\n  <ion-reorder>\n    <ion-item>\n      <ion-label>\n        Item 7\n      </ion-label>\n    </ion-item>\n  </ion-reorder>\n\n  <ion-reorder>\n    <ion-item>\n      <ion-label>\n        Item 8\n      </ion-label>\n    </ion-item>\n  </ion-reorder>\n</ion-reorder-group>";
    /***/
  },

  /***/
  "./src/app/ui-components/reorder/reorder-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/ui-components/reorder/reorder-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ReorderPageRoutingModule */

  /***/
  function srcAppUiComponentsReorderReorderRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReorderPageRoutingModule", function () {
      return ReorderPageRoutingModule;
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


    var _reorder_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./reorder.page */
    "./src/app/ui-components/reorder/reorder.page.ts");

    var routes = [{
      path: '',
      component: _reorder_page__WEBPACK_IMPORTED_MODULE_3__["ReorderPage"]
    }];

    var ReorderPageRoutingModule = function ReorderPageRoutingModule() {
      _classCallCheck(this, ReorderPageRoutingModule);
    };

    ReorderPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ReorderPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/ui-components/reorder/reorder.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/ui-components/reorder/reorder.module.ts ***!
    \*********************************************************/

  /*! exports provided: ReorderPageModule */

  /***/
  function srcAppUiComponentsReorderReorderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReorderPageModule", function () {
      return ReorderPageModule;
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


    var _reorder_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./reorder-routing.module */
    "./src/app/ui-components/reorder/reorder-routing.module.ts");
    /* harmony import */


    var _reorder_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./reorder.page */
    "./src/app/ui-components/reorder/reorder.page.ts");

    var ReorderPageModule = function ReorderPageModule() {
      _classCallCheck(this, ReorderPageModule);
    };

    ReorderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _reorder_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReorderPageRoutingModule"]],
      declarations: [_reorder_page__WEBPACK_IMPORTED_MODULE_6__["ReorderPage"]]
    })], ReorderPageModule);
    /***/
  },

  /***/
  "./src/app/ui-components/reorder/reorder.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/ui-components/reorder/reorder.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiComponentsReorderReorderPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWNvbXBvbmVudHMvcmVvcmRlci9yZW9yZGVyLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ui-components/reorder/reorder.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/ui-components/reorder/reorder.page.ts ***!
    \*******************************************************/

  /*! exports provided: ReorderPage */

  /***/
  function srcAppUiComponentsReorderReorderPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReorderPage", function () {
      return ReorderPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ReorderPage = /*#__PURE__*/function () {
      //@ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;
      function ReorderPage() {
        _classCallCheck(this, ReorderPage);
      }

      _createClass(ReorderPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ReorderPage;
    }();

    ReorderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reorder',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reorder.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/reorder/reorder.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reorder.page.scss */
      "./src/app/ui-components/reorder/reorder.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ReorderPage);
    /***/
  }
}]);
//# sourceMappingURL=ui-components-reorder-reorder-module-es5.js.map