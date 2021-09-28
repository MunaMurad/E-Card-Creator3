function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firebase-crud-fire-read-fire-read-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/firebase-crud/fire-read/fire-read.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/firebase-crud/fire-read/fire-read.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFirebaseCrudFireReadFireReadPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>fire-read</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/firebase-crud/fire-read/fire-read-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/firebase-crud/fire-read/fire-read-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: FireReadPageRoutingModule */

  /***/
  function srcAppFirebaseCrudFireReadFireReadRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FireReadPageRoutingModule", function () {
      return FireReadPageRoutingModule;
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


    var _fire_read_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./fire-read.page */
    "./src/app/firebase-crud/fire-read/fire-read.page.ts");

    var routes = [{
      path: '',
      component: _fire_read_page__WEBPACK_IMPORTED_MODULE_3__["FireReadPage"]
    }];

    var FireReadPageRoutingModule = function FireReadPageRoutingModule() {
      _classCallCheck(this, FireReadPageRoutingModule);
    };

    FireReadPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FireReadPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/firebase-crud/fire-read/fire-read.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/firebase-crud/fire-read/fire-read.module.ts ***!
    \*************************************************************/

  /*! exports provided: FireReadPageModule */

  /***/
  function srcAppFirebaseCrudFireReadFireReadModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FireReadPageModule", function () {
      return FireReadPageModule;
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


    var _fire_read_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./fire-read-routing.module */
    "./src/app/firebase-crud/fire-read/fire-read-routing.module.ts");
    /* harmony import */


    var _fire_read_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./fire-read.page */
    "./src/app/firebase-crud/fire-read/fire-read.page.ts");

    var FireReadPageModule = function FireReadPageModule() {
      _classCallCheck(this, FireReadPageModule);
    };

    FireReadPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _fire_read_routing_module__WEBPACK_IMPORTED_MODULE_5__["FireReadPageRoutingModule"]],
      declarations: [_fire_read_page__WEBPACK_IMPORTED_MODULE_6__["FireReadPage"]]
    })], FireReadPageModule);
    /***/
  },

  /***/
  "./src/app/firebase-crud/fire-read/fire-read.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/firebase-crud/fire-read/fire-read.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFirebaseCrudFireReadFireReadPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpcmViYXNlLWNydWQvZmlyZS1yZWFkL2ZpcmUtcmVhZC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/firebase-crud/fire-read/fire-read.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/firebase-crud/fire-read/fire-read.page.ts ***!
    \***********************************************************/

  /*! exports provided: FireReadPage */

  /***/
  function srcAppFirebaseCrudFireReadFireReadPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FireReadPage", function () {
      return FireReadPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FireReadPage = /*#__PURE__*/function () {
      function FireReadPage() {
        _classCallCheck(this, FireReadPage);
      }

      _createClass(FireReadPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FireReadPage;
    }();

    FireReadPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fire-read',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fire-read.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/firebase-crud/fire-read/fire-read.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fire-read.page.scss */
      "./src/app/firebase-crud/fire-read/fire-read.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FireReadPage);
    /***/
  }
}]);
//# sourceMappingURL=firebase-crud-fire-read-fire-read-module-es5.js.map