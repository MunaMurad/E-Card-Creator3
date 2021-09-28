function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-layouts-signup-signup-two-signup-two-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/signup/signup-two/signup-two.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/signup/signup-two/signup-two.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiLayoutsSignupSignupTwoSignupTwoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content fullscreen=\"true\">\n  <!-- <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"medium\" auto-hide=\"false\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar> -->\n <ion-grid>\n\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-align-self-center\" size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n       \n          <!-- <div class=\"login-logo\">\n            <img src=\"assets/appicon.svg\" alt=\"Ionic logo\">\n          </div> -->\n          <div class=\"margin-0-28\">\n          <h2>Welcome to school administrator</h2>\n          <ion-list class=\"ion-margin-top ion-padding\">\n            <!-- ############ -->\n            <ion-item  class=\"roundedInput8px margin-bottom-10\">\n              <ion-label>\n                <ion-icon name=\"person-add-outline\"></ion-icon>\n                </ion-label>\n              <ion-input placeholder=\"Username\" ></ion-input>\n            </ion-item>\n            <!-- ############ -->\n            <ion-item  class=\"roundedInput8px margin-bottom-10\">\n              <ion-label>\n                <ion-icon name=\"person-add-outline\"></ion-icon>\n                </ion-label>\n              <ion-input placeholder=\"Username\" ></ion-input>\n            </ion-item>\n            <!-- ############ -->\n            <ion-item  class=\"roundedInput8px margin-bottom-10\">\n              <ion-label>\n                <ion-icon name=\"person-add-outline\"></ion-icon>\n                </ion-label>\n              <ion-input placeholder=\"Username\" ></ion-input>\n            </ion-item>\n            <!-- ############ -->                              \n            <ion-item  class=\"roundedInput8px margin-bottom-10\">\n\n              <ion-label slot=\"start\" class=\"margin-right-8\">\n                <ion-icon name=\"lock-closed-outline\"></ion-icon>\n                </ion-label>\n\n              <ion-input placeholder=\"Password\" [type]=\"showPassword ? 'text' : 'password'\" clearOnEdit=\"false\"></ion-input>\n\n                  <!-- ### Show/hide password ### -->    \n                  <div (click)=\"onPasswordToggle()\" ion-button fill=\"clear\" size=\"small\" >\n                    <ion-icon  slot=\"icon-only\" color=\"medium\" [name]=\"showPassword ? 'eye-off' : 'eye'\"></ion-icon>\n                  </div>\n\n            </ion-item>\n\n            <!-- ############ -->\n            <span >\n              <p class=\"ion-text-right\">Forgot password?</p>\n            </span>\n            <!-- ############ -->\n            <ion-button mode=\"ios\" class=\"ion-margin-top\" color=\"success\" expand=\"block\" >Signin</ion-button>\n          </ion-list>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n      \n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/ui-layouts/signup/signup-two/signup-two-routing.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/ui-layouts/signup/signup-two/signup-two-routing.module.ts ***!
    \***************************************************************************/

  /*! exports provided: SignupTwoPageRoutingModule */

  /***/
  function srcAppUiLayoutsSignupSignupTwoSignupTwoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupTwoPageRoutingModule", function () {
      return SignupTwoPageRoutingModule;
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


    var _signup_two_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signup-two.page */
    "./src/app/ui-layouts/signup/signup-two/signup-two.page.ts");

    var routes = [{
      path: '',
      component: _signup_two_page__WEBPACK_IMPORTED_MODULE_3__["SignupTwoPage"]
    }];

    var SignupTwoPageRoutingModule = function SignupTwoPageRoutingModule() {
      _classCallCheck(this, SignupTwoPageRoutingModule);
    };

    SignupTwoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SignupTwoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/ui-layouts/signup/signup-two/signup-two.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/ui-layouts/signup/signup-two/signup-two.module.ts ***!
    \*******************************************************************/

  /*! exports provided: SignupTwoPageModule */

  /***/
  function srcAppUiLayoutsSignupSignupTwoSignupTwoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupTwoPageModule", function () {
      return SignupTwoPageModule;
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


    var _signup_two_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./signup-two-routing.module */
    "./src/app/ui-layouts/signup/signup-two/signup-two-routing.module.ts");
    /* harmony import */


    var _signup_two_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./signup-two.page */
    "./src/app/ui-layouts/signup/signup-two/signup-two.page.ts");

    var SignupTwoPageModule = function SignupTwoPageModule() {
      _classCallCheck(this, SignupTwoPageModule);
    };

    SignupTwoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signup_two_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupTwoPageRoutingModule"]],
      declarations: [_signup_two_page__WEBPACK_IMPORTED_MODULE_6__["SignupTwoPage"]]
    })], SignupTwoPageModule);
    /***/
  },

  /***/
  "./src/app/ui-layouts/signup/signup-two/signup-two.page.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/ui-layouts/signup/signup-two/signup-two.page.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiLayoutsSignupSignupTwoSignupTwoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar {\n  --opacity:0 !important;\n}\n\nion-col {\n  padding: 0px !important;\n}\n\n.login-logo {\n  padding: 20px 0;\n  min-height: 100px;\n  text-align: center;\n}\n\n.login-logo img {\n  max-width: 100px;\n}\n\n.list {\n  margin-bottom: 0;\n}\n\nion-button {\n  font-weight: 300;\n}\n\nion-grid {\n  width: 100%;\n  height: 100%;\n  background: #dfdfdf;\n}\n\nion-row {\n  height: 100%;\n}\n\nion-col {\n  min-width: 450px;\n  padding: 30px !important;\n  border: 1px solid #eee;\n  background-color: #fff;\n  border-radius: 8px;\n}\n\n.list-width {\n  width: 450px !important;\n}\n\n@media (min-width: 240px) and (max-width: 768px) {\n  ion-grid {\n    background: #fff;\n  }\n\n  ion-col {\n    min-height: 650px;\n    border: none;\n    background: transparent;\n    border-radius: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZXRoZWUvSW9uaWNQcm9qZWN0cy9faW9uaWM1L2lvbmljNWZ1bGxhcHBfZmluYWwvc3JjL2FwcC91aS1sYXlvdXRzL3NpZ251cC9zaWdudXAtdHdvL3NpZ251cC10d28ucGFnZS5zY3NzIiwic3JjL2FwcC91aS1sYXlvdXRzL3NpZ251cC9zaWdudXAtdHdvL3NpZ251cC10d28ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0Usc0JBQUE7QUNGRjs7QURnQkE7RUFDRSx1QkFBQTtBQ2JGOztBRG9CQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDakJGOztBRG9CQTtFQUNFLGdCQUFBO0FDakJGOztBRG9CQTtFQUNFLGdCQUFBO0FDakJGOztBRHFCQTtFQUNFLGdCQUFBO0FDbEJGOztBRHVCQTtFQUNJLFdBQUE7RUFDQSxZQWhEUTtFQWlEUixtQkFBQTtBQ3BCSjs7QUR1QkE7RUFDSSxZQXJEUTtBQ2lDWjs7QUR1QkE7RUFDRSxnQkFBQTtFQUNFLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDcEJKOztBRHNCQTtFQUNFLHVCQUFBO0FDbkJGOztBRHlCQTtFQUVJO0lBQ0ksZ0JBMUVNO0VDbURaOztFRHlCRTtJQUVJLGlCQUFBO0lBQ0EsWUFBQTtJQUVBLHVCQUFBO0lBQ0Esa0JBQUE7RUN4Qk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3VpLWxheW91dHMvc2lnbnVwL3NpZ251cC10d28vc2lnbnVwLXR3by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkd2hpdGUtY29sb3I6ICNmZmY7XG4kaGVpZ2h0MTAwOiAxMDAlO1xuXG5pb24tdG9vbGJhcntcbiAgLS1vcGFjaXR5OjAgIWltcG9ydGFudDtcbiAgfVxuXG4vLyBpb24tY29udGVudHtcbi8vICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuLy8gICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuLy8gICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuLy8gICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuLy8gICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9pbWFnZS5mcmVlcGlrLmNvbS9mcmVlLXZlY3Rvci9ncmVlbi1zaGFwZXMtZ3JlZW4tYmFja2dyb3VuZF8yMy0yMTQ4MzU4MjEyLmpwZycpO1xuLy8gICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9pbWFnZS5mcmVlcGlrLmNvbS9mcmVlLXZlY3Rvci9zdHlsaXNoLWhleGFnb25hbC1saW5lLXBhdHRlcm4tYmFja2dyb3VuZF8xMDE3LTE5NzQyLmpwZycpO1xuICBcbi8vICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2ltYWdlLmZyZWVwaWsuY29tL2ZyZWUtdmVjdG9yLzNkLXBhcGVyLXN0eWxlLXdhbGxwYXBlcl8yMy0yMTQ4NDczNDkyLmpwZycpO1xuLy8gIH1cblxuaW9uLWNvbHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5pb24tbGlzdCB7XG4gLy8tLWlvbi1pdGVtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuLy8gbWFyZ2luOiAwcHggMjVweDtcbn1cblxuLmxvZ2luLWxvZ28ge1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dpbi1sb2dvIGltZyB7XG4gIG1heC13aWR0aDogMTAwcHg7XG59XG5cbi5saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuXG5pb24tYnV0dG9uIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLy8jIyMjIyMjIyBkZWZhdWx0IHNjcmVlbiAjIyMjIyMjIy8vXG5cbmlvbi1ncmlkIHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDogJGhlaWdodDEwMDtcbiAgICBiYWNrZ3JvdW5kOiAjZGZkZmRmO1xufVxuXG5pb24tcm93IHtcbiAgICBoZWlnaHQ6ICRoZWlnaHQxMDA7XG59XG5cbmlvbi1jb2wge1xuICBtaW4td2lkdGg6IDQ1MHB4O1xuICAgIHBhZGRpbmc6IDMwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlOyAvLzFweCBzb2xpZCAjNDg4YWZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLmxpc3Qtd2lkdGh7XG4gIHdpZHRoOiA0NTBweCAhaW1wb3J0YW50O1xuICBcbn1cblxuXG4vLyMjIyMjIyMjIG1vYmlsZSBzY3JlZW4gIyMjIyMjIyMvL1xuQG1lZGlhIChtaW4td2lkdGg6IDI0MHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcblxuICAgIGlvbi1ncmlkIHtcbiAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlLWNvbG9yO1xuICAgIH1cbiAgICBpb24tY29sIHtcbiAgICAgLy8gbWluLXdpZHRoOiA0NTBweDtcbiAgICAgICAgbWluLWhlaWdodDogNjUwcHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgLy9oZWlnaHQ6IDQ1MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgfVxufSIsImlvbi10b29sYmFyIHtcbiAgLS1vcGFjaXR5OjAgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubG9naW4tbG9nbyB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luLWxvZ28gaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbn1cblxuLmxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuaW9uLWdyaWQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZGZkZmRmO1xufVxuXG5pb24tcm93IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pb24tY29sIHtcbiAgbWluLXdpZHRoOiA0NTBweDtcbiAgcGFkZGluZzogMzBweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5saXN0LXdpZHRoIHtcbiAgd2lkdGg6IDQ1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAyNDBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIGlvbi1ncmlkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB9XG5cbiAgaW9uLWNvbCB7XG4gICAgbWluLWhlaWdodDogNjUwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ui-layouts/signup/signup-two/signup-two.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/ui-layouts/signup/signup-two/signup-two.page.ts ***!
    \*****************************************************************/

  /*! exports provided: SignupTwoPage */

  /***/
  function srcAppUiLayoutsSignupSignupTwoSignupTwoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupTwoPage", function () {
      return SignupTwoPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SignupTwoPage = /*#__PURE__*/function () {
      function SignupTwoPage() {
        _classCallCheck(this, SignupTwoPage);
      }

      _createClass(SignupTwoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SignupTwoPage;
    }();

    SignupTwoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup-two',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup-two.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/signup/signup-two/signup-two.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup-two.page.scss */
      "./src/app/ui-layouts/signup/signup-two/signup-two.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SignupTwoPage);
    /***/
  }
}]);
//# sourceMappingURL=ui-layouts-signup-signup-two-signup-two-module-es5.js.map