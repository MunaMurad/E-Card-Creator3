function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-components-button-button-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/button/button.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/button/button.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiComponentsButtonButtonPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>badge</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <section>\n    <ion-list-header>\n      <ion-label>\n        Small Size\n      </ion-label>\n    </ion-list-header>\n    <ion-button size=\"small\">Default</ion-button>\n    <ion-button size=\"small\" color=\"secondary\">Secondary</ion-button>\n    <ion-button size=\"small\" color=\"tertiary\">Tertiary</ion-button>\n  </section>\n\n  <section>\n    <ion-list-header>\n      <ion-label>\n        Default Size\n      </ion-label>\n    </ion-list-header>\n    <ion-button color=\"success\">Success</ion-button>\n    <ion-button color=\"warning\">Warning</ion-button>\n    <ion-button color=\"danger\">Danger</ion-button>\n  </section>\n\n  <section>\n    <ion-list-header>\n      <ion-label>\n        Large Size\n      </ion-label>\n    </ion-list-header>\n    <ion-button size=\"large\" color=\"light\">Light</ion-button>\n    <ion-button size=\"large\" color=\"medium\">Medium</ion-button>\n    <ion-button size=\"large\" color=\"dark\">Dark</ion-button>\n    <ion-button size=\"large\" class=\"gradient\">Gradient</ion-button>\n  </section>\n\n  <section>\n    <ion-list-header>\n      <ion-label>\n        Block Width\n      </ion-label>\n    </ion-list-header>\n    <ion-button expand=\"block\">A block button</ion-button>\n  </section>\n\n  <section>\n    <ion-list-header>\n      <ion-label>\n        Full Width\n      </ion-label>\n    </ion-list-header>\n    <ion-button expand=\"full\" color=\"secondary\">A full-width button</ion-button>\n  </section>\n\n\n\n\n<!-- Default -->\n<ion-button>Default</ion-button>\n\n<!-- Anchor -->\n<ion-button href=\"#\">Anchor</ion-button>\n\n<!-- Colors -->\n<ion-button color=\"primary\">Primary</ion-button>\n<ion-button color=\"secondary\">Secondary</ion-button>\n<ion-button color=\"tertiary\">Tertiary</ion-button>\n<ion-button color=\"success\">Success</ion-button>\n<ion-button color=\"warning\">Warning</ion-button>\n<ion-button color=\"danger\">Danger</ion-button>\n<ion-button color=\"light\">Light</ion-button>\n<ion-button color=\"medium\">Medium</ion-button>\n<ion-button color=\"dark\">Dark</ion-button>\n\n<!-- Expand -->\n<ion-button expand=\"full\">Full Button</ion-button>\n<ion-button expand=\"block\">Block Button</ion-button>\n\n<!-- Round -->\n<ion-button shape=\"round\">Round Button</ion-button>\n\n<!-- Fill -->\n<ion-button expand=\"full\" fill=\"outline\">Outline + Full</ion-button>\n<ion-button expand=\"block\" fill=\"outline\">Outline + Block</ion-button>\n<ion-button shape=\"round\" fill=\"outline\">Outline + Round</ion-button>\n\n<!-- Icons -->\n<ion-button>\n  <ion-icon slot=\"start\" name=\"logo-facebook\"></ion-icon>\n  Left Icon\n</ion-button>\n\n<ion-button>\n  Right Icon\n  <ion-icon slot=\"end\" name=\"star\"></ion-icon>\n</ion-button>\n\n<ion-button>\n  <ion-icon slot=\"icon-only\" name=\"star\"></ion-icon>\n\n</ion-button>\n\n<!-- Sizes -->\n<ion-button size=\"large\">Large</ion-button>\n<ion-button>Default</ion-button>\n<ion-button size=\"small\">Small</ion-button>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/ui-components/button/button-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/ui-components/button/button-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: ButtonPageRoutingModule */

  /***/
  function srcAppUiComponentsButtonButtonRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ButtonPageRoutingModule", function () {
      return ButtonPageRoutingModule;
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


    var _button_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./button.page */
    "./src/app/ui-components/button/button.page.ts");

    var routes = [{
      path: '',
      component: _button_page__WEBPACK_IMPORTED_MODULE_3__["ButtonPage"]
    }];

    var ButtonPageRoutingModule = function ButtonPageRoutingModule() {
      _classCallCheck(this, ButtonPageRoutingModule);
    };

    ButtonPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ButtonPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/ui-components/button/button.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/ui-components/button/button.module.ts ***!
    \*******************************************************/

  /*! exports provided: ButtonPageModule */

  /***/
  function srcAppUiComponentsButtonButtonModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ButtonPageModule", function () {
      return ButtonPageModule;
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


    var _button_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./button-routing.module */
    "./src/app/ui-components/button/button-routing.module.ts");
    /* harmony import */


    var _button_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./button.page */
    "./src/app/ui-components/button/button.page.ts");

    var ButtonPageModule = function ButtonPageModule() {
      _classCallCheck(this, ButtonPageModule);
    };

    ButtonPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _button_routing_module__WEBPACK_IMPORTED_MODULE_5__["ButtonPageRoutingModule"]],
      declarations: [_button_page__WEBPACK_IMPORTED_MODULE_6__["ButtonPage"]]
    })], ButtonPageModule);
    /***/
  },

  /***/
  "./src/app/ui-components/button/button.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/ui-components/button/button.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiComponentsButtonButtonPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-list-header {\n  padding-left: 4px;\n}\n\nsection {\n  margin-bottom: 1em;\n  padding: 0 10px;\n}\n\n.gradient {\n  --background: rgba(76,185,196,1);\n  --background: -moz-linear-gradient(45deg, rgba(76,185,196,1) 0%, rgba(61,211,174,1) 100%);\n  --background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(76,185,196,1)), color-stop(100%, rgba(61,211,174,1)));\n  --background: -webkit-linear-gradient(45deg, rgba(76,185,196,1) 0%, rgba(61,211,174,1) 100%);\n  --background: -o-linear-gradient(45deg, rgba(76,185,196,1) 0%, rgba(61,211,174,1) 100%);\n  --background: -ms-linear-gradient(45deg, rgba(76,185,196,1) 0%, rgba(61,211,174,1) 100%);\n  --background: linear-gradient(45deg, rgba(76,185,196,1) 0%, rgba(61,211,174,1) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#4cb9c4\", endColorstr=\"#3dd3ae\", GradientType=1 );\n  --color:#ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZXRoZWUvSW9uaWNQcm9qZWN0cy9faW9uaWM1L2lvbmljNWZ1bGxhcHBfZmluYWwvc3JjL2FwcC91aS1jb21wb25lbnRzL2J1dHRvbi9idXR0b24ucGFnZS5zY3NzIiwic3JjL2FwcC91aS1jb21wb25lbnRzL2J1dHRvbi9idXR0b24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksaUJBQUE7QUNBSjs7QURHRTtFQUNFLGtCQUFBO0VBRUEsZUFBQTtBQ0RKOztBREdFO0VBQ0UsZ0NBQUE7RUFDQSx5RkFBQTtFQUNBLGdJQUFBO0VBQ0EsNEZBQUE7RUFDQSx1RkFBQTtFQUNBLHdGQUFBO0VBQ0Esb0ZBQUE7RUFDQSxvSEFBQTtFQUVBLGVBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3VpLWNvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1saXN0LWhlYWRlciB7XG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gIH1cbiAgXG4gIHNlY3Rpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgXG4gICAgcGFkZGluZzogMCAxMHB4O1xuICB9XG4gIC5ncmFkaWVudHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoNzYsMTg1LDE5NiwxKTtcbiAgICAtLWJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDc2LDE4NSwxOTYsMSkgMCUsIHJnYmEoNjEsMjExLDE3NCwxKSAxMDAlKTtcbiAgICAtLWJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCBib3R0b20sIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwJSwgcmdiYSg3NiwxODUsMTk2LDEpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDYxLDIxMSwxNzQsMSkpKTtcbiAgICAtLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDc2LDE4NSwxOTYsMSkgMCUsIHJnYmEoNjEsMjExLDE3NCwxKSAxMDAlKTtcbiAgICAtLWJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSg3NiwxODUsMTk2LDEpIDAlLCByZ2JhKDYxLDIxMSwxNzQsMSkgMTAwJSk7XG4gICAgLS1iYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDc2LDE4NSwxOTYsMSkgMCUsIHJnYmEoNjEsMjExLDE3NCwxKSAxMDAlKTtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSg3NiwxODUsMTk2LDEpIDAlLCByZ2JhKDYxLDIxMSwxNzQsMSkgMTAwJSk7XG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyM0Y2I5YzQnLCBlbmRDb2xvcnN0cj0nIzNkZDNhZScsIEdyYWRpZW50VHlwZT0xICk7XG5cbiAgICAtLWNvbG9yOiNmZmZmZmY7XG59IiwiaW9uLWxpc3QtaGVhZGVyIHtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG5cbnNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cblxuLmdyYWRpZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDc2LDE4NSwxOTYsMSk7XG4gIC0tYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoNzYsMTg1LDE5NiwxKSAwJSwgcmdiYSg2MSwyMTEsMTc0LDEpIDEwMCUpO1xuICAtLWJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCBib3R0b20sIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwJSwgcmdiYSg3NiwxODUsMTk2LDEpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDYxLDIxMSwxNzQsMSkpKTtcbiAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSg3NiwxODUsMTk2LDEpIDAlLCByZ2JhKDYxLDIxMSwxNzQsMSkgMTAwJSk7XG4gIC0tYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDc2LDE4NSwxOTYsMSkgMCUsIHJnYmEoNjEsMjExLDE3NCwxKSAxMDAlKTtcbiAgLS1iYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDc2LDE4NSwxOTYsMSkgMCUsIHJnYmEoNjEsMjExLDE3NCwxKSAxMDAlKTtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoNzYsMTg1LDE5NiwxKSAwJSwgcmdiYSg2MSwyMTEsMTc0LDEpIDEwMCUpO1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj1cIiM0Y2I5YzRcIiwgZW5kQ29sb3JzdHI9XCIjM2RkM2FlXCIsIEdyYWRpZW50VHlwZT0xICk7XG4gIC0tY29sb3I6I2ZmZmZmZjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/ui-components/button/button.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/ui-components/button/button.page.ts ***!
    \*****************************************************/

  /*! exports provided: ButtonPage */

  /***/
  function srcAppUiComponentsButtonButtonPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ButtonPage", function () {
      return ButtonPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ButtonPage = /*#__PURE__*/function () {
      function ButtonPage() {
        _classCallCheck(this, ButtonPage);
      }

      _createClass(ButtonPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ButtonPage;
    }();

    ButtonPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-button',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./button.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/button/button.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./button.page.scss */
      "./src/app/ui-components/button/button.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ButtonPage);
    /***/
  }
}]);
//# sourceMappingURL=ui-components-button-button-module-es5.js.map