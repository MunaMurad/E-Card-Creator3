function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-components-badge-badge-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/badge/badge.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/badge/badge.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiComponentsBadgeBadgePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>badge</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>\n      <ion-label>\n        Badges\n      </ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-label>Followers</ion-label>\n      <ion-badge slot=\"end\">22k</ion-badge>\n    </ion-item>\n    <ion-item>\n      <ion-label>Likes</ion-label>\n      <ion-badge color=\"secondary\" slot=\"end\">118k</ion-badge>\n    </ion-item>\n    <ion-item>\n      <ion-label>Stars</ion-label>\n      <ion-badge color=\"tertiary\" slot=\"end\">34k</ion-badge>\n    </ion-item>\n    <ion-item>\n      <ion-label>Completed</ion-label>\n      <ion-badge color=\"success\" slot=\"end\">80</ion-badge>\n    </ion-item>\n    <ion-item>\n      <ion-label>Warnings</ion-label>\n      <ion-badge color=\"warning\" slot=\"end\">70</ion-badge>\n    </ion-item>\n    <ion-item>\n      <ion-label>Notifications</ion-label>\n      <ion-badge color=\"danger\" slot=\"end\">1000</ion-badge>\n    </ion-item>\n    <ion-item>\n      <ion-label>Unread</ion-label>\n      <ion-badge color=\"light\" slot=\"end\">24</ion-badge>\n    </ion-item>\n    <ion-item>\n      <ion-label>Drafts</ion-label>\n      <ion-badge color=\"medium\" slot=\"end\">14</ion-badge>\n    </ion-item>\n    <ion-item lines=\"full\">\n      <ion-label>Deleted</ion-label>\n      <ion-badge color=\"dark\" slot=\"end\">4</ion-badge>\n    </ion-item>\n  </ion-list>\n\n  <ion-tab-bar>\n    <ion-tab-button selected>\n      <ion-icon name=\"globe\"></ion-icon>\n      <ion-badge color=\"tertiary\">44</ion-badge>\n    </ion-tab-button>\n    <ion-tab-button>\n      <ion-icon name=\"people\"></ion-icon>\n      <ion-badge color=\"success\">1</ion-badge>\n    </ion-tab-button>\n    <ion-tab-button>\n      <ion-icon name=\"mail\"></ion-icon>\n      <ion-badge>2.3k</ion-badge>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/ui-components/badge/badge-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/ui-components/badge/badge-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: BadgePageRoutingModule */

  /***/
  function srcAppUiComponentsBadgeBadgeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BadgePageRoutingModule", function () {
      return BadgePageRoutingModule;
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


    var _badge_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./badge.page */
    "./src/app/ui-components/badge/badge.page.ts");

    var routes = [{
      path: '',
      component: _badge_page__WEBPACK_IMPORTED_MODULE_3__["BadgePage"]
    }];

    var BadgePageRoutingModule = function BadgePageRoutingModule() {
      _classCallCheck(this, BadgePageRoutingModule);
    };

    BadgePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BadgePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/ui-components/badge/badge.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/ui-components/badge/badge.module.ts ***!
    \*****************************************************/

  /*! exports provided: BadgePageModule */

  /***/
  function srcAppUiComponentsBadgeBadgeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BadgePageModule", function () {
      return BadgePageModule;
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


    var _badge_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./badge-routing.module */
    "./src/app/ui-components/badge/badge-routing.module.ts");
    /* harmony import */


    var _badge_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./badge.page */
    "./src/app/ui-components/badge/badge.page.ts");

    var BadgePageModule = function BadgePageModule() {
      _classCallCheck(this, BadgePageModule);
    };

    BadgePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _badge_routing_module__WEBPACK_IMPORTED_MODULE_5__["BadgePageRoutingModule"]],
      declarations: [_badge_page__WEBPACK_IMPORTED_MODULE_6__["BadgePage"]]
    })], BadgePageModule);
    /***/
  },

  /***/
  "./src/app/ui-components/badge/badge.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/ui-components/badge/badge.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiComponentsBadgeBadgePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-tab-bar {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZXRoZWUvSW9uaWNQcm9qZWN0cy9faW9uaWM1L2lvbmljNWZ1bGxhcHBfZmluYWwvc3JjL2FwcC91aS1jb21wb25lbnRzL2JhZGdlL2JhZGdlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdWktY29tcG9uZW50cy9iYWRnZS9iYWRnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxlQUFBO0VBRUEsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC91aS1jb21wb25lbnRzL2JhZGdlL2JhZGdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4gIGlvbi10YWItYmFyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gIFxuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICB9IiwiaW9uLXRhYi1iYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/ui-components/badge/badge.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/ui-components/badge/badge.page.ts ***!
    \***************************************************/

  /*! exports provided: BadgePage */

  /***/
  function srcAppUiComponentsBadgeBadgePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BadgePage", function () {
      return BadgePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BadgePage = /*#__PURE__*/function () {
      function BadgePage() {
        _classCallCheck(this, BadgePage);
      }

      _createClass(BadgePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BadgePage;
    }();

    BadgePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-badge',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./badge.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/badge/badge.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./badge.page.scss */
      "./src/app/ui-components/badge/badge.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], BadgePage);
    /***/
  }
}]);
//# sourceMappingURL=ui-components-badge-badge-module-es5.js.map