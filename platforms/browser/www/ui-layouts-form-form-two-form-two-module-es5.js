function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-layouts-form-form-two-form-two-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/form/form-two/form-two.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/form/form-two/form-two.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiLayoutsFormFormTwoFormTwoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Form style 2</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <!-- #############################################-->\n      <!-- ############# Form 1 (left icon) ########### -->\n      <!-- #############################################-->\n\n      <ion-col size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size=\"12\">\n        \n        <ion-card mode=\"ios\"  class=\"ion-padding\">\n          <ion-card-header>\n            <h4 class=\"ion-no-margin ion-text-center\">SIGNUP</h4>\n          </ion-card-header>\n\n              <ion-list class=\"ion-margin-top\">\n                <!-- ############ -->\n                <ion-item  class=\"roundedInput25px margin-bottom-10\">\n                  <ion-label>\n                    <ion-icon name=\"person-add-outline\"></ion-icon>\n                    </ion-label>\n                  <ion-input placeholder=\"Username\" ></ion-input>\n                </ion-item>\n                 <!-- ############ -->                              \n                <ion-item  class=\"roundedInput25px margin-bottom-10\">\n\n                  <ion-label slot=\"start\" class=\"margin-right-8\">\n                    <ion-icon name=\"lock-closed-outline\"></ion-icon>\n                    </ion-label>\n\n                  <ion-input placeholder=\"Password\" [type]=\"showPassword ? 'text' : 'password'\" clearOnEdit=\"false\"></ion-input>\n\n                      <!-- ### Show/hide password ### -->    \n                      <div (click)=\"onPasswordToggle()\" ion-button fill=\"clear\" size=\"small\" >\n                        <ion-icon  slot=\"icon-only\" color=\"medium\" [name]=\"showPassword ? 'eye-off' : 'eye'\"></ion-icon>\n                      </div>\n\n                </ion-item>\n\n                <!-- ############ -->\n                <span >\n                  <p class=\"ion-text-right\">Forgot password?</p>\n                </span>\n                <!-- ############ -->\n                <ion-button class=\"ion-margin-top\" color=\"success\" expand=\"block\" shape=\"\">Signin</ion-button>\n              </ion-list>\n        </ion-card>\n\n      </ion-col>\n\n      <!-- #############################################-->\n      <!-- ########## Form 2 (Stacked Label ) ########## -->\n      <!-- #############################################-->\n\n      <ion-col size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size=\"12\">\n        <ion-card mode=\"ios\" class=\"ion-padding\">\n          <ion-card-header>\n            <h4 class=\"ion-no-margin ion-text-center\">SIGNIN</h4>\n          </ion-card-header>\n          <form>\n            <ion-list>\n\n              <!-- ############ -->\n              <ion-list-header mode=\"md\">\n                <ion-label>\n                  Username\n                </ion-label>\n              </ion-list-header>\n              <ion-item  class=\"roundedInput25px\">\n                <ion-input></ion-input>\n              </ion-item>\n\n              <!-- ############ -->\n              <ion-list-header mode=\"md\">\n                <ion-label>\n                  E-mail\n                </ion-label>\n              </ion-list-header>\n              <ion-item  class=\"roundedInput25px\">\n                <ion-input></ion-input>\n              </ion-item>\n\n              <!-- ############ -->\n              <ion-list-header mode=\"md\">\n                <ion-label>\n                  Password\n                </ion-label>\n              </ion-list-header>\n              <ion-item  class=\"roundedInput25px\">\n                <ion-input></ion-input>\n              </ion-item>\n\n               <!-- ############ -->\n               <ion-list-header mode=\"md\">\n                <ion-label>\n                  Confirm password\n                </ion-label>\n              </ion-list-header>\n              <ion-item  class=\"roundedInput25px\">\n                <ion-input></ion-input>\n              </ion-item>         \n              <!-- ############ -->\n              <ion-button class=\"ion-margin-top\" color=\"success\" expand=\"block\" shape=\"\">Create</ion-button>\n              <!-- <ion-button  color=\"primary\"  fill=\"outline\" expand=\"block\" >\n                <ion-icon slot=\"start\"name=\"logo-facebook\"></ion-icon>\n                Signin with facebook\n              </ion-button> -->\n\n              <!-- <span>\n                <p class=\"ion-text-center\">or</p>\n              </span>\n              \n              <ion-button class=\"ion-margin-top\" color=\"primary\" fill=\"outline\" expand=\"block\">\n                <ion-icon slot=\"start\" color=\"primary\" name=\"logo-facebook\"></ion-icon>\n                Signup with Facebook\n              </ion-button>\n              <ion-button  color=\"danger\" fill=\"outline\" expand=\"block\">\n                <ion-icon slot=\"start\" color=\"danger\" name=\"logo-google\"></ion-icon>\n                Singup with Google\n              </ion-button> -->\n\n              <span>\n                <p class=\"ion-text-center\">or</p>\n              </span>\n              <!-- ############ -->\n              <ion-button class=\"ion-margin-top\" color=\"primary\" expand=\"block\">\n                <ion-icon slot=\"start\" color=\"light\" name=\"logo-facebook\"></ion-icon>\n                Signup with Facebook\n              </ion-button>\n              <ion-button  color=\"danger\" expand=\"block\">\n                <ion-icon slot=\"start\" color=\"light\" name=\"logo-google\"></ion-icon>\n                Singup with Google\n              </ion-button>              \n            </ion-list>\n          </form>\n        </ion-card>\n      </ion-col>\n\n\n      <!-- #############################################-->\n      <!-- ############# Form 3 (right icon) ########### -->\n      <!-- #############################################-->\n\n      <ion-col size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size=\"12\">\n        <ion-card mode=\"ios\" mode=\"ios\" class=\"ion-padding\">\n          <ion-card-header>\n            <h4 class=\"ion-no-margin\">Event registration</h4>\n          </ion-card-header>\n            <form>\n              <ion-list>\n                <!-- ############ -->\n                <ion-item  class=\"roundedInput25px\">\n                  <ion-input placeholder=\"Firstname\" ></ion-input>\n                  <ion-label>\n                    <ion-icon name=\"person-outline\"></ion-icon>\n                    </ion-label>\n                </ion-item>\n                 <!-- ############ -->               \n                <ion-item class=\"ion-padding-end\"  class=\"roundedInput25px\">\n                  <ion-input placeholder=\"Lastname\" ></ion-input>\n                  <ion-label>\n                    <ion-icon color=\"medium\" name=\"people-outline\"></ion-icon>\n                  </ion-label>\n\n                </ion-item>\n\n                 <!-- ############ -->               \n                 <ion-item class=\"ion-padding-end\"  class=\"roundedInput25px\">\n                  <ion-input placeholder=\"Company\" ></ion-input>\n                  <ion-label>\n                    <ion-icon color=\"medium\" name=\"business-outline\"></ion-icon>\n                  </ion-label>\n                </ion-item>\n                 <!-- ############ -->               \n                 <ion-item class=\"ion-padding-end\"  class=\"roundedInput25px\">\n                  <ion-input placeholder=\"Phone number\" ></ion-input>\n                  <ion-label>\n                    <ion-icon color=\"medium\" name=\"call-outline\"></ion-icon>\n                  </ion-label>\n                </ion-item>\n                 <!-- ############ -->               \n                 <ion-item class=\"ion-padding-end\"  class=\"roundedInput25px\">\n                  <ion-input placeholder=\"E-mail\" ></ion-input>\n                  <ion-label>\n                    <ion-icon color=\"medium\" name=\"mail-outline\"></ion-icon>\n                  </ion-label>\n                </ion-item>\n                <!-- ############ -->\n                <ion-item  class=\"roundedInput25px\">\n\n                    <ion-textarea rows=\"6\" placeholder=\"About your company\"></ion-textarea>\n                  <!-- <ion-input placeholder=\"Username\" ></ion-input> -->\n                </ion-item>\n\n                 <!-- ############ -->               \n                <ion-item  class=\"roundedInput25px\">\n                  <ion-label color=\"medium\">Status</ion-label>\n                  <ion-toggle></ion-toggle>\n                </ion-item>\n              <!-- ############ -->               \n              <ion-item  class=\"roundedInput25px\">\n                <ion-label color=\"medium\">Gender</ion-label>\n                <ion-select placeholder=\"Select One\">\n                  <ion-select-option value=\"f\">Female</ion-select-option>\n                  <ion-select-option value=\"m\">Male</ion-select-option>\n                </ion-select>\n              </ion-item>\n\n                <span>\n                  <p class=\"ion-text-right\">Already signup?</p>\n                </span>\n                <!-- ############ -->\n                <ion-button class=\"ion-margin-top\" color=\"success\" expand=\"block\" >Submit</ion-button>\n\n              </ion-list>\n\n            </form>\n        </ion-card>\n      </ion-col>\n\n\n\n      <!-- #########################################-->\n      <!-- ############# Form 4 (Rating) ########### -->\n      <!-- #########################################-->\n      <ion-col size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size=\"12\">\n        <ion-card mode=\"ios\" mode=\"ios\" class=\"ion-padding\">\n          <!-- <ion-card-header>\n            <h4 class=\"ion-no-margin\">Review</h4>\n          </ion-card-header> -->\n              <ion-list>\n                <!-- ****** rating ******* -->\n                <h4 class=\"ion-text-center\">Please give a rating: {{rating}}</h4>\n                <div class=\"ion-justify-content-center ion-padding-bottom\">\n                  <rating [(ngModel)]=\"rating\"\n                    readonly=\"false\"\n                    size=\"default\" \n                    resettable= \"true\">\n                  </rating>\n                </div>\n\n                <!-- ############ -->\n                <ion-item class=\"roundedInput25px\">\n                    <ion-textarea rows=\"6\" placeholder=\"What do think about this product?\"></ion-textarea>\n                  <!-- <ion-input placeholder=\"Username\" ></ion-input> -->\n                </ion-item>\n                <!-- ############ -->\n                <ion-button  color=\"success\" expand=\"block\" shape=\"\">Submit</ion-button>\n              \n              </ion-list>\n        </ion-card>\n      </ion-col>\n      \n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/ui-layouts/form/form-two/form-two-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/ui-layouts/form/form-two/form-two-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: FormTwoPageRoutingModule */

  /***/
  function srcAppUiLayoutsFormFormTwoFormTwoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormTwoPageRoutingModule", function () {
      return FormTwoPageRoutingModule;
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


    var _form_two_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./form-two.page */
    "./src/app/ui-layouts/form/form-two/form-two.page.ts");

    var routes = [{
      path: '',
      component: _form_two_page__WEBPACK_IMPORTED_MODULE_3__["FormTwoPage"]
    }];

    var FormTwoPageRoutingModule = function FormTwoPageRoutingModule() {
      _classCallCheck(this, FormTwoPageRoutingModule);
    };

    FormTwoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FormTwoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/ui-layouts/form/form-two/form-two.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/ui-layouts/form/form-two/form-two.module.ts ***!
    \*************************************************************/

  /*! exports provided: FormTwoPageModule */

  /***/
  function srcAppUiLayoutsFormFormTwoFormTwoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormTwoPageModule", function () {
      return FormTwoPageModule;
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


    var _form_two_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./form-two-routing.module */
    "./src/app/ui-layouts/form/form-two/form-two-routing.module.ts");
    /* harmony import */


    var _form_two_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./form-two.page */
    "./src/app/ui-layouts/form/form-two/form-two.page.ts");
    /* harmony import */


    var ionic4_rating_dist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ionic4-rating/dist */
    "./node_modules/ionic4-rating/dist/index.js");

    var FormTwoPageModule = function FormTwoPageModule() {
      _classCallCheck(this, FormTwoPageModule);
    };

    FormTwoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], ionic4_rating_dist__WEBPACK_IMPORTED_MODULE_7__["IonicRatingModule"], _form_two_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormTwoPageRoutingModule"]],
      declarations: [_form_two_page__WEBPACK_IMPORTED_MODULE_6__["FormTwoPage"]]
    })], FormTwoPageModule);
    /***/
  },

  /***/
  "./src/app/ui-layouts/form/form-two/form-two.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/ui-layouts/form/form-two/form-two.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiLayoutsFormFormTwoFormTwoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWxheW91dHMvZm9ybS9mb3JtLXR3by9mb3JtLXR3by5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ui-layouts/form/form-two/form-two.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/ui-layouts/form/form-two/form-two.page.ts ***!
    \***********************************************************/

  /*! exports provided: FormTwoPage */

  /***/
  function srcAppUiLayoutsFormFormTwoFormTwoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormTwoPage", function () {
      return FormTwoPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FormTwoPage = /*#__PURE__*/function () {
      function FormTwoPage() {
        _classCallCheck(this, FormTwoPage);

        this.rating = 1;
        this.showPassword = false;
      }

      _createClass(FormTwoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {} //####### Show / hide password #######//

      }, {
        key: "onPasswordToggle",
        value: function onPasswordToggle() {
          this.showPassword = !this.showPassword;
        }
      }]);

      return FormTwoPage;
    }();

    FormTwoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-form-two',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./form-two.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/form/form-two/form-two.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./form-two.page.scss */
      "./src/app/ui-layouts/form/form-two/form-two.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FormTwoPage);
    /***/
  }
}]);
//# sourceMappingURL=ui-layouts-form-form-two-form-two-module-es5.js.map