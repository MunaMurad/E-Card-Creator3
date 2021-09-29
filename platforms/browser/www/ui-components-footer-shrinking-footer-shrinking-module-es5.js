function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-components-footer-shrinking-footer-shrinking-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/footer-shrinking/footer-shrinking.page.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/footer-shrinking/footer-shrinking.page.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiComponentsFooterShrinkingFooterShrinkingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border >\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\" auto-hide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title slot=\"start\">shrinking header</ion-title>\n  </ion-toolbar>\n  <ion-toolbar color=\"tertiary\">\n    <ion-searchbar  placeholder=\"Search..\" (ionFocus)=\"openSearchModal()\" search-icon=\"ios-search\" ></ion-searchbar>\n</ion-toolbar>\n</ion-header>\n\n<!-- \n<ion-content\n  [scrollEvents]=\"true\"\n  (ionScrollStart)=\"logScrollStart()\"\n  (ionScroll)=\"logScrolling($event)\"\n  (ionScrollEnd)=\"logScrollEnd()\"> -->\n  <ion-content #pageContent >\n    <!-- skeleton thumbnail -->\n  \n    <ion-item *ngFor=\"let i of [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]\">\n       <ion-thumbnail slot=\"start\">\n         <ion-skeleton-text ></ion-skeleton-text>\n       </ion-thumbnail>\n       <!-- <ion-avatar slot=\"start\">\n           <ion-skeleton-text animated></ion-skeleton-text>\n         </ion-avatar> -->\n       <ion-label>\n         <h3>\n           <ion-skeleton-text  style=\"width: 50%\"></ion-skeleton-text>\n         </h3>\n         <p>\n           <ion-skeleton-text  style=\"width: 80%\"></ion-skeleton-text>\n         </p>\n         <p>\n           <ion-skeleton-text  style=\"width: 60%\"></ion-skeleton-text>\n         </p>\n       </ion-label>\n     </ion-item>\n</ion-content>\n\n<!-- Footer without a border -->\n<ion-footer  [scrollHide]=\"footerScrollConfig\" [scrollContent]=\"pageContent\" class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <ion-skeleton-text ></ion-skeleton-text>\n      </ion-thumbnail>\n      <!-- <ion-avatar slot=\"start\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-avatar> -->\n      <ion-label>\n        <h3>\n          <ion-skeleton-text  style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text  style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text  style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n  </ion-toolbar>\n\n</ion-footer>\n\n<!-- <ion-footer  [scrollHide]=\"footerScrollConfig\" [scrollContent]=\"pageContent\">\n  <ion-toolbar >\n \n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\" auto-hide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\">header-fading</ion-title>\n    <ion-buttons  color=\"light\" slot=\"end\">\n\n      <ion-button color=\"light\"  (click)=\"openContact(speaker)\">\n        <ion-icon slot=\"icon-only\" ios=\"call-outline\" md=\"call-sharp\"></ion-icon>\n      </ion-button>\n  \n      <ion-button color=\"light\"  (click)=\"openSpeakerShare(speaker)\">\n        <ion-icon slot=\"icon-only\" ios=\"share-outline\" md=\"share-sharp\"></ion-icon>\n      </ion-button>\n\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-footer> -->";
    /***/
  },

  /***/
  "./src/app/ui-components/footer-shrinking/footer-shrinking-routing.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/ui-components/footer-shrinking/footer-shrinking-routing.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: FooterShrinkingPageRoutingModule */

  /***/
  function srcAppUiComponentsFooterShrinkingFooterShrinkingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterShrinkingPageRoutingModule", function () {
      return FooterShrinkingPageRoutingModule;
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


    var _footer_shrinking_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./footer-shrinking.page */
    "./src/app/ui-components/footer-shrinking/footer-shrinking.page.ts");

    var routes = [{
      path: '',
      component: _footer_shrinking_page__WEBPACK_IMPORTED_MODULE_3__["FooterShrinkingPage"]
    }];

    var FooterShrinkingPageRoutingModule = function FooterShrinkingPageRoutingModule() {
      _classCallCheck(this, FooterShrinkingPageRoutingModule);
    };

    FooterShrinkingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FooterShrinkingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/ui-components/footer-shrinking/footer-shrinking.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/ui-components/footer-shrinking/footer-shrinking.module.ts ***!
    \***************************************************************************/

  /*! exports provided: FooterShrinkingPageModule */

  /***/
  function srcAppUiComponentsFooterShrinkingFooterShrinkingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterShrinkingPageModule", function () {
      return FooterShrinkingPageModule;
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


    var _footer_shrinking_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./footer-shrinking-routing.module */
    "./src/app/ui-components/footer-shrinking/footer-shrinking-routing.module.ts");
    /* harmony import */


    var _footer_shrinking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./footer-shrinking.page */
    "./src/app/ui-components/footer-shrinking/footer-shrinking.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var FooterShrinkingPageModule = function FooterShrinkingPageModule() {
      _classCallCheck(this, FooterShrinkingPageModule);
    };

    FooterShrinkingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _footer_shrinking_routing_module__WEBPACK_IMPORTED_MODULE_5__["FooterShrinkingPageRoutingModule"]],
      declarations: [_footer_shrinking_page__WEBPACK_IMPORTED_MODULE_6__["FooterShrinkingPage"]]
    })], FooterShrinkingPageModule);
    /***/
  },

  /***/
  "./src/app/ui-components/footer-shrinking/footer-shrinking.page.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/ui-components/footer-shrinking/footer-shrinking.page.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiComponentsFooterShrinkingFooterShrinkingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWNvbXBvbmVudHMvZm9vdGVyLXNocmlua2luZy9mb290ZXItc2hyaW5raW5nLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ui-components/footer-shrinking/footer-shrinking.page.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/ui-components/footer-shrinking/footer-shrinking.page.ts ***!
    \*************************************************************************/

  /*! exports provided: FooterShrinkingPage */

  /***/
  function srcAppUiComponentsFooterShrinkingFooterShrinkingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterShrinkingPage", function () {
      return FooterShrinkingPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterShrinkingPage = /*#__PURE__*/function () {
      function FooterShrinkingPage() {
        _classCallCheck(this, FooterShrinkingPage);

        //****** Hide footer ********/
        this.footerScrollConfig = {
          cssProperty: 'margin-bottom',
          maxValue: 60
        };
      }

      _createClass(FooterShrinkingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterShrinkingPage;
    }();

    FooterShrinkingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer-shrinking',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer-shrinking.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/footer-shrinking/footer-shrinking.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer-shrinking.page.scss */
      "./src/app/ui-components/footer-shrinking/footer-shrinking.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FooterShrinkingPage);
    /***/
  }
}]);
//# sourceMappingURL=ui-components-footer-shrinking-footer-shrinking-module-es5.js.map