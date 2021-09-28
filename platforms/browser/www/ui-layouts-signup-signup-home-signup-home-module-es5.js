function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-layouts-signup-signup-home-signup-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/signup/signup-home/signup-home.page.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/signup/signup-home/signup-home.page.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiLayoutsSignupSignupHomeSignupHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>signup-home</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class=\"home-list\">\n\n        <ion-item routerLink=\"/signup-one\">\n          <ion-icon slot=\"start\" icon=\"hardware-chip-outline\"class=\"component-icon component-icon-primary\"></ion-icon>\n          <ion-label>Signup 1</ion-label>\n        </ion-item>\n \n        <ion-item routerLink=\"/signup-two\">\n          <ion-icon slot=\"start\" icon=\"hardware-chip-outline\"class=\"component-icon component-icon-primary\"></ion-icon>\n          <ion-label>Signup 2</ion-label>\n        </ion-item>\n      \n        <ion-item routerLink=\"/signup-three\">\n          <ion-icon slot=\"start\" icon=\"hardware-chip-outline\"class=\"component-icon component-icon-primary\"></ion-icon>\n          <ion-label>Signup 3</ion-label>\n        </ion-item>\n  </ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/ui-layouts/signup/signup-home/signup-home-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/ui-layouts/signup/signup-home/signup-home-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: SignupHomePageRoutingModule */

  /***/
  function srcAppUiLayoutsSignupSignupHomeSignupHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupHomePageRoutingModule", function () {
      return SignupHomePageRoutingModule;
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


    var _signup_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signup-home.page */
    "./src/app/ui-layouts/signup/signup-home/signup-home.page.ts");

    var routes = [{
      path: '',
      component: _signup_home_page__WEBPACK_IMPORTED_MODULE_3__["SignupHomePage"]
    }];

    var SignupHomePageRoutingModule = function SignupHomePageRoutingModule() {
      _classCallCheck(this, SignupHomePageRoutingModule);
    };

    SignupHomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SignupHomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/ui-layouts/signup/signup-home/signup-home.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/ui-layouts/signup/signup-home/signup-home.module.ts ***!
    \*********************************************************************/

  /*! exports provided: SignupHomePageModule */

  /***/
  function srcAppUiLayoutsSignupSignupHomeSignupHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupHomePageModule", function () {
      return SignupHomePageModule;
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


    var _signup_home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./signup-home-routing.module */
    "./src/app/ui-layouts/signup/signup-home/signup-home-routing.module.ts");
    /* harmony import */


    var _signup_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./signup-home.page */
    "./src/app/ui-layouts/signup/signup-home/signup-home.page.ts");

    var SignupHomePageModule = function SignupHomePageModule() {
      _classCallCheck(this, SignupHomePageModule);
    };

    SignupHomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signup_home_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupHomePageRoutingModule"]],
      declarations: [_signup_home_page__WEBPACK_IMPORTED_MODULE_6__["SignupHomePage"]]
    })], SignupHomePageModule);
    /***/
  },

  /***/
  "./src/app/ui-layouts/signup/signup-home/signup-home.page.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/ui-layouts/signup/signup-home/signup-home.page.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiLayoutsSignupSignupHomeSignupHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWxheW91dHMvc2lnbnVwL3NpZ251cC1ob21lL3NpZ251cC1ob21lLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ui-layouts/signup/signup-home/signup-home.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/ui-layouts/signup/signup-home/signup-home.page.ts ***!
    \*******************************************************************/

  /*! exports provided: SignupHomePage */

  /***/
  function srcAppUiLayoutsSignupSignupHomeSignupHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupHomePage", function () {
      return SignupHomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SignupHomePage = /*#__PURE__*/function () {
      function SignupHomePage() {
        _classCallCheck(this, SignupHomePage);
      }

      _createClass(SignupHomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SignupHomePage;
    }();

    SignupHomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup-home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/signup/signup-home/signup-home.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup-home.page.scss */
      "./src/app/ui-layouts/signup/signup-home/signup-home.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SignupHomePage);
    /***/
  }
}]);
//# sourceMappingURL=ui-layouts-signup-signup-home-signup-home-module-es5.js.map