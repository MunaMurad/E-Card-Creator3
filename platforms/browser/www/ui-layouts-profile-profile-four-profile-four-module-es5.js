function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-layouts-profile-profile-four-profile-four-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/profile/profile-four/profile-four.page.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/profile/profile-four/profile-four.page.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiLayoutsProfileProfileFourProfileFourPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>profile-four</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/ui-layouts/profile/profile-four/profile-four-routing.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/ui-layouts/profile/profile-four/profile-four-routing.module.ts ***!
    \********************************************************************************/

  /*! exports provided: ProfileFourPageRoutingModule */

  /***/
  function srcAppUiLayoutsProfileProfileFourProfileFourRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileFourPageRoutingModule", function () {
      return ProfileFourPageRoutingModule;
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


    var _profile_four_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile-four.page */
    "./src/app/ui-layouts/profile/profile-four/profile-four.page.ts");

    var routes = [{
      path: '',
      component: _profile_four_page__WEBPACK_IMPORTED_MODULE_3__["ProfileFourPage"]
    }];

    var ProfileFourPageRoutingModule = function ProfileFourPageRoutingModule() {
      _classCallCheck(this, ProfileFourPageRoutingModule);
    };

    ProfileFourPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProfileFourPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/ui-layouts/profile/profile-four/profile-four.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/ui-layouts/profile/profile-four/profile-four.module.ts ***!
    \************************************************************************/

  /*! exports provided: ProfileFourPageModule */

  /***/
  function srcAppUiLayoutsProfileProfileFourProfileFourModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileFourPageModule", function () {
      return ProfileFourPageModule;
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


    var _profile_four_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile-four-routing.module */
    "./src/app/ui-layouts/profile/profile-four/profile-four-routing.module.ts");
    /* harmony import */


    var _profile_four_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile-four.page */
    "./src/app/ui-layouts/profile/profile-four/profile-four.page.ts");

    var ProfileFourPageModule = function ProfileFourPageModule() {
      _classCallCheck(this, ProfileFourPageModule);
    };

    ProfileFourPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_four_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileFourPageRoutingModule"]],
      declarations: [_profile_four_page__WEBPACK_IMPORTED_MODULE_6__["ProfileFourPage"]]
    })], ProfileFourPageModule);
    /***/
  },

  /***/
  "./src/app/ui-layouts/profile/profile-four/profile-four.page.scss":
  /*!************************************************************************!*\
    !*** ./src/app/ui-layouts/profile/profile-four/profile-four.page.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiLayoutsProfileProfileFourProfileFourPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWxheW91dHMvcHJvZmlsZS9wcm9maWxlLWZvdXIvcHJvZmlsZS1mb3VyLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ui-layouts/profile/profile-four/profile-four.page.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/ui-layouts/profile/profile-four/profile-four.page.ts ***!
    \**********************************************************************/

  /*! exports provided: ProfileFourPage */

  /***/
  function srcAppUiLayoutsProfileProfileFourProfileFourPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileFourPage", function () {
      return ProfileFourPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProfileFourPage = /*#__PURE__*/function () {
      function ProfileFourPage() {
        _classCallCheck(this, ProfileFourPage);
      }

      _createClass(ProfileFourPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProfileFourPage;
    }();

    ProfileFourPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile-four',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile-four.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/profile/profile-four/profile-four.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile-four.page.scss */
      "./src/app/ui-layouts/profile/profile-four/profile-four.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ProfileFourPage);
    /***/
  }
}]);
//# sourceMappingURL=ui-layouts-profile-profile-four-profile-four-module-es5.js.map