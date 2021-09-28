function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-components-header-shrinking-header-shrinking-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/header-shrinking/header-shrinking.page.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/header-shrinking/header-shrinking.page.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiComponentsHeaderShrinkingHeaderShrinkingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border [scrollHide]=\"headerScrollConfig\" [scrollContent]=\"pageContent\">\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\" auto-hide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title slot=\"start\">shrinking header</ion-title>\n  </ion-toolbar>\n  <ion-toolbar color=\"tertiary\">\n    <ion-searchbar  placeholder=\"Search..\" (ionFocus)=\"openSearchModal()\" search-icon=\"ios-search\" ></ion-searchbar>\n</ion-toolbar>\n</ion-header>\n\n<!-- \n<ion-content\n  [scrollEvents]=\"true\"\n  (ionScrollStart)=\"logScrollStart()\"\n  (ionScroll)=\"logScrolling($event)\"\n  (ionScrollEnd)=\"logScrollEnd()\"> -->\n  <ion-content #pageContent >\n    <!-- skeleton thumbnail -->\n  \n    <ion-item *ngFor=\"let i of [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]\">\n       <ion-thumbnail slot=\"start\">\n         <ion-skeleton-text ></ion-skeleton-text>\n       </ion-thumbnail>\n       <!-- <ion-avatar slot=\"start\">\n           <ion-skeleton-text animated></ion-skeleton-text>\n         </ion-avatar> -->\n       <ion-label>\n         <h3>\n           <ion-skeleton-text  style=\"width: 50%\"></ion-skeleton-text>\n         </h3>\n         <p>\n           <ion-skeleton-text  style=\"width: 80%\"></ion-skeleton-text>\n         </p>\n         <p>\n           <ion-skeleton-text  style=\"width: 60%\"></ion-skeleton-text>\n         </p>\n       </ion-label>\n     </ion-item>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/ui-components/header-shrinking/header-shrinking-routing.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/ui-components/header-shrinking/header-shrinking-routing.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: HeaderShrinkingPageRoutingModule */

  /***/
  function srcAppUiComponentsHeaderShrinkingHeaderShrinkingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderShrinkingPageRoutingModule", function () {
      return HeaderShrinkingPageRoutingModule;
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


    var _header_shrinking_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./header-shrinking.page */
    "./src/app/ui-components/header-shrinking/header-shrinking.page.ts");

    var routes = [{
      path: '',
      component: _header_shrinking_page__WEBPACK_IMPORTED_MODULE_3__["HeaderShrinkingPage"]
    }];

    var HeaderShrinkingPageRoutingModule = function HeaderShrinkingPageRoutingModule() {
      _classCallCheck(this, HeaderShrinkingPageRoutingModule);
    };

    HeaderShrinkingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HeaderShrinkingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/ui-components/header-shrinking/header-shrinking.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/ui-components/header-shrinking/header-shrinking.module.ts ***!
    \***************************************************************************/

  /*! exports provided: HeaderShrinkingPageModule */

  /***/
  function srcAppUiComponentsHeaderShrinkingHeaderShrinkingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderShrinkingPageModule", function () {
      return HeaderShrinkingPageModule;
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


    var _header_shrinking_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./header-shrinking-routing.module */
    "./src/app/ui-components/header-shrinking/header-shrinking-routing.module.ts");
    /* harmony import */


    var _header_shrinking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./header-shrinking.page */
    "./src/app/ui-components/header-shrinking/header-shrinking.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var HeaderShrinkingPageModule = function HeaderShrinkingPageModule() {
      _classCallCheck(this, HeaderShrinkingPageModule);
    };

    HeaderShrinkingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _header_shrinking_routing_module__WEBPACK_IMPORTED_MODULE_5__["HeaderShrinkingPageRoutingModule"]],
      declarations: [_header_shrinking_page__WEBPACK_IMPORTED_MODULE_6__["HeaderShrinkingPage"]]
    })], HeaderShrinkingPageModule);
    /***/
  },

  /***/
  "./src/app/ui-components/header-shrinking/header-shrinking.page.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/ui-components/header-shrinking/header-shrinking.page.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiComponentsHeaderShrinkingHeaderShrinkingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".top-grey-box {\n  width: 100%;\n  height: 250px;\n  background-color: #dddddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZXRoZWUvSW9uaWNQcm9qZWN0cy9faW9uaWM1L2lvbmljNWZ1bGxhcHBfZmluYWwvc3JjL2FwcC91aS1jb21wb25lbnRzL2hlYWRlci1zaHJpbmtpbmcvaGVhZGVyLXNocmlua2luZy5wYWdlLnNjc3MiLCJzcmMvYXBwL3VpLWNvbXBvbmVudHMvaGVhZGVyLXNocmlua2luZy9oZWFkZXItc2hyaW5raW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3VpLWNvbXBvbmVudHMvaGVhZGVyLXNocmlua2luZy9oZWFkZXItc2hyaW5raW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnRvcC1ncmV5LWJveHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG59IiwiLnRvcC1ncmV5LWJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ui-components/header-shrinking/header-shrinking.page.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/ui-components/header-shrinking/header-shrinking.page.ts ***!
    \*************************************************************************/

  /*! exports provided: HeaderShrinkingPage */

  /***/
  function srcAppUiComponentsHeaderShrinkingHeaderShrinkingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderShrinkingPage", function () {
      return HeaderShrinkingPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderShrinkingPage = /*#__PURE__*/function () {
      function HeaderShrinkingPage() {
        _classCallCheck(this, HeaderShrinkingPage);

        //****** Hide header ********/
        this.headerScrollConfig = {
          cssProperty: 'margin-top',
          maxValue: 39
        };
      }

      _createClass(HeaderShrinkingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderShrinkingPage;
    }();

    HeaderShrinkingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header-shrinking',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header-shrinking.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/header-shrinking/header-shrinking.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header-shrinking.page.scss */
      "./src/app/ui-components/header-shrinking/header-shrinking.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], HeaderShrinkingPage);
    /***/
  }
}]);
//# sourceMappingURL=ui-components-header-shrinking-header-shrinking-module-es5.js.map