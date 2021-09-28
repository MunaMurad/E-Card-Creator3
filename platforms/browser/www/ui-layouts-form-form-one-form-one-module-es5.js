function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-layouts-form-form-one-form-one-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/form/form-one/form-one.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/form/form-one/form-one.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiLayoutsFormFormOneFormOnePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Form style 1</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <!-- #############################################-->\n      <!-- ############# Form 1 (left icon) ########### -->\n      <!-- #############################################-->\n\n      <ion-col size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size=\"12\">\n        \n        <ion-card mode=\"ios\" color=\"medium\" class=\"card-bg-img4 ion-padding\">\n          <ion-card-header>\n            <h4 class=\"ion-no-margin ion-text-center\">SIGNUP</h4>\n          </ion-card-header>\n\n              <ion-list class=\"ion-margin-top\">\n                <!-- ############ -->\n                <ion-item  class=\"roundedInput25px margin-bottom-10\">\n                  <ion-label>\n                    <ion-icon name=\"person-add-outline\"></ion-icon>\n                    </ion-label>\n                  <ion-input placeholder=\"Username\" ></ion-input>\n                </ion-item>\n                 <!-- ############ -->                              \n                <ion-item  class=\"roundedInput8px margin-bottom-10\">\n\n                  <ion-label slot=\"start\" class=\"margin-right-8\">\n                    <ion-icon name=\"lock-closed-outline\"></ion-icon>\n                    </ion-label>\n\n                  <ion-input placeholder=\"Password\" [type]=\"showPassword ? 'text' : 'password'\" clearOnEdit=\"false\"></ion-input>\n\n                      <!-- ### Show/hide password ### -->    \n                      <div (click)=\"onPasswordToggle()\" ion-button fill=\"clear\" size=\"small\" >\n                        <ion-icon  slot=\"icon-only\" color=\"medium\" [name]=\"showPassword ? 'eye-off' : 'eye'\"></ion-icon>\n                      </div>\n\n                </ion-item>\n\n                <!-- ############ -->\n                <span >\n                  <p class=\"ion-text-right\">Forgot password?</p>\n                </span>\n                <!-- ############ -->\n                <ion-button class=\"ion-margin-top\" color=\"success\" expand=\"block\" shape=\"\">Signin</ion-button>\n              </ion-list>\n        </ion-card>\n\n      </ion-col>\n\n      <!-- #############################################-->\n      <!-- ########## Form 2 (Stacked Label ) ########## -->\n      <!-- #############################################-->\n\n      <ion-col size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size=\"12\">\n        <ion-card mode=\"ios\" color=\"medium\" class=\"card-bg-img1 ion-padding\">\n          <ion-card-header>\n            <h4 class=\"ion-no-margin ion-text-center\">SIGNIN</h4>\n          </ion-card-header>\n          <form>\n            <ion-list>\n\n              <!-- ############ -->\n              <ion-list-header mode=\"md\">\n                <ion-label color=\"light\">\n                  Username\n                </ion-label>\n              </ion-list-header>\n              <ion-item  class=\"roundedInput8px\">\n                <ion-input></ion-input>\n              </ion-item>\n\n              <!-- ############ -->\n              <ion-list-header mode=\"md\">\n                <ion-label color=\"light\">\n                  E-mail\n                </ion-label>\n              </ion-list-header>\n              <ion-item  class=\"roundedInput8px\">\n                <ion-input></ion-input>\n              </ion-item>\n\n              <!-- ############ -->\n              <ion-list-header mode=\"md\">\n                <ion-label color=\"light\">\n                  Password\n                </ion-label>\n              </ion-list-header>\n              <ion-item  class=\"roundedInput8px\">\n                <ion-input></ion-input>\n              </ion-item>\n\n               <!-- ############ -->\n               <ion-list-header mode=\"md\">\n                <ion-label color=\"light\">\n                  Confirm password\n                </ion-label>\n              </ion-list-header>\n              <ion-item  class=\"roundedInput8px\">\n                <ion-input></ion-input>\n              </ion-item>         \n              <!-- ############ -->\n              <ion-button class=\"ion-margin-top\" color=\"success\" expand=\"block\" shape=\"\">Create</ion-button>\n              <!-- <ion-button  color=\"primary\"  fill=\"outline\" expand=\"block\" >\n                <ion-icon slot=\"start\"name=\"logo-facebook\"></ion-icon>\n                Signin with facebook\n              </ion-button> -->\n\n              <!-- <span>\n                <p class=\"ion-text-center\">or</p>\n              </span>\n              \n              <ion-button class=\"ion-margin-top\" color=\"primary\" fill=\"outline\" expand=\"block\">\n                <ion-icon slot=\"start\" color=\"primary\" name=\"logo-facebook\"></ion-icon>\n                Signup with Facebook\n              </ion-button>\n              <ion-button  color=\"danger\" fill=\"outline\" expand=\"block\">\n                <ion-icon slot=\"start\" color=\"danger\" name=\"logo-google\"></ion-icon>\n                Singup with Google\n              </ion-button> -->\n\n              <span>\n                <p class=\"ion-text-center\">or</p>\n              </span>\n              <!-- ############ -->\n              <ion-button class=\"ion-margin-top\" color=\"primary\" expand=\"block\">\n                <ion-icon slot=\"start\" color=\"light\" name=\"logo-facebook\"></ion-icon>\n                Signup with Facebook\n              </ion-button>\n              <ion-button  color=\"danger\" expand=\"block\">\n                <ion-icon slot=\"start\" color=\"light\" name=\"logo-google\"></ion-icon>\n                Singup with Google\n              </ion-button>              \n            </ion-list>\n          </form>\n        </ion-card>\n      </ion-col>\n\n\n      <!-- #############################################-->\n      <!-- ############# Form 3 (right icon) ########### -->\n      <!-- #############################################-->\n\n      <ion-col size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size=\"12\">\n        <ion-card mode=\"ios\" color=\"medium\" mode=\"ios\" class=\"card-bg-img2 ion-padding\">\n          <ion-card-header>\n            <h4 class=\"ion-no-margin\">Event registration</h4>\n          </ion-card-header>\n            <form>\n              <ion-list>\n                <!-- ############ -->\n                <ion-item  class=\"roundedInput8px\">\n                  <ion-input placeholder=\"Firstname\" ></ion-input>\n                  <ion-label>\n                    <ion-icon color=\"medium\" name=\"person-outline\"></ion-icon>\n                    </ion-label>\n                </ion-item>\n                 <!-- ############ -->               \n                <ion-item class=\"ion-padding-end\"  class=\"roundedInput8px\">\n                  <ion-input placeholder=\"Lastname\" ></ion-input>\n                  <ion-label>\n                    <ion-icon color=\"medium\" name=\"people-outline\"></ion-icon>\n                  </ion-label>\n\n                </ion-item>\n\n                 <!-- ############ -->               \n                 <ion-item class=\"ion-padding-end\"  class=\"roundedInput8px\">\n                  <ion-input placeholder=\"Company\" ></ion-input>\n                  <ion-label>\n                    <ion-icon color=\"medium\" name=\"business-outline\"></ion-icon>\n                  </ion-label>\n                </ion-item>\n                 <!-- ############ -->               \n                 <ion-item class=\"ion-padding-end\"  class=\"roundedInput8px\">\n                  <ion-input placeholder=\"Phone number\" ></ion-input>\n                  <ion-label>\n                    <ion-icon color=\"medium\" name=\"call-outline\"></ion-icon>\n                  </ion-label>\n                </ion-item>\n                 <!-- ############ -->               \n                 <ion-item class=\"ion-padding-end\"  class=\"roundedInput8px\">\n                  <ion-input placeholder=\"E-mail\" ></ion-input>\n                  <ion-label>\n                    <ion-icon color=\"medium\" name=\"mail-outline\"></ion-icon>\n                  </ion-label>\n                </ion-item>\n                <!-- ############ -->\n                <ion-item  class=\"roundedInput8px\">\n\n                    <ion-textarea rows=\"6\" placeholder=\"About your company\"></ion-textarea>\n                  <!-- <ion-input placeholder=\"Username\" ></ion-input> -->\n                </ion-item>\n\n                 <!-- ############ -->               \n                <ion-item  class=\"roundedInput8px\">\n                  <ion-label color=\"medium\">Status</ion-label>\n                  <ion-toggle></ion-toggle>\n                </ion-item>\n              <!-- ############ -->               \n              <ion-item  class=\"roundedInput8px\">\n                <ion-label color=\"medium\">Gender</ion-label>\n                <ion-select placeholder=\"Select One\">\n                  <ion-select-option value=\"f\">Female</ion-select-option>\n                  <ion-select-option value=\"m\">Male</ion-select-option>\n                </ion-select>\n              </ion-item>\n\n                <span>\n                  <p class=\"ion-text-right\">Already signup?</p>\n                </span>\n                <!-- ############ -->\n                <ion-button class=\"ion-margin-top\" color=\"success\" expand=\"block\" >Submit</ion-button>\n\n              </ion-list>\n\n            </form>\n        </ion-card>\n      </ion-col>\n\n\n\n      <!-- #########################################-->\n      <!-- ############# Form 4 (Rating) ########### -->\n      <!-- #########################################-->\n      <ion-col size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size=\"12\">\n        <ion-card mode=\"ios\" color=\"light\" mode=\"ios\" class=\"card-bg-img3 ion-padding\">\n          <!-- <ion-card-header>\n            <h4 class=\"ion-no-margin\">Review</h4>\n          </ion-card-header> -->\n              <ion-list>\n                <!-- ****** rating ******* -->\n                <h4 class=\"ion-text-center\">Please give a rating: {{rating}}</h4>\n                <div class=\"ion-justify-content-center ion-padding-bottom\">\n                  <rating [(ngModel)]=\"rating\"\n                    readonly=\"false\"\n                    size=\"default\" \n                    resettable= \"true\">\n                  </rating>\n                </div>\n\n                <!-- ############ -->\n                <ion-item class=\"roundedInput8px\">\n                    <ion-textarea rows=\"6\" placeholder=\"What do think about this product?\"></ion-textarea>\n                  <!-- <ion-input placeholder=\"Username\" ></ion-input> -->\n                </ion-item>\n                <!-- ############ -->\n                <ion-button  color=\"success\" expand=\"block\" shape=\"\">Submit</ion-button>\n              \n              </ion-list>\n        </ion-card>\n      </ion-col>\n      \n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/ui-layouts/form/form-one/form-one-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/ui-layouts/form/form-one/form-one-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: FormOnePageRoutingModule */

  /***/
  function srcAppUiLayoutsFormFormOneFormOneRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormOnePageRoutingModule", function () {
      return FormOnePageRoutingModule;
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


    var _form_one_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./form-one.page */
    "./src/app/ui-layouts/form/form-one/form-one.page.ts");

    var routes = [{
      path: '',
      component: _form_one_page__WEBPACK_IMPORTED_MODULE_3__["FormOnePage"]
    }];

    var FormOnePageRoutingModule = function FormOnePageRoutingModule() {
      _classCallCheck(this, FormOnePageRoutingModule);
    };

    FormOnePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FormOnePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/ui-layouts/form/form-one/form-one.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/ui-layouts/form/form-one/form-one.module.ts ***!
    \*************************************************************/

  /*! exports provided: FormOnePageModule */

  /***/
  function srcAppUiLayoutsFormFormOneFormOneModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormOnePageModule", function () {
      return FormOnePageModule;
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


    var _form_one_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./form-one-routing.module */
    "./src/app/ui-layouts/form/form-one/form-one-routing.module.ts");
    /* harmony import */


    var _form_one_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./form-one.page */
    "./src/app/ui-layouts/form/form-one/form-one.page.ts");
    /* harmony import */


    var ionic4_rating_dist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ionic4-rating/dist */
    "./node_modules/ionic4-rating/dist/index.js");

    var FormOnePageModule = function FormOnePageModule() {
      _classCallCheck(this, FormOnePageModule);
    };

    FormOnePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], ionic4_rating_dist__WEBPACK_IMPORTED_MODULE_7__["IonicRatingModule"], _form_one_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormOnePageRoutingModule"]],
      declarations: [_form_one_page__WEBPACK_IMPORTED_MODULE_6__["FormOnePage"]]
    })], FormOnePageModule);
    /***/
  },

  /***/
  "./src/app/ui-layouts/form/form-one/form-one.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/ui-layouts/form/form-one/form-one.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiLayoutsFormFormOneFormOnePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-col {\n  padding: 0px !important;\n}\n\nion-list {\n  --ion-item-background: transparent;\n}\n\n.card-bg, ion-card.card-bg-img4, ion-card.card-bg-img3, ion-card.card-bg-img2, ion-card.card-bg-img1 {\n  --background: none;\n  background-position: center center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\nion-card.card-bg-img1 {\n  background-image: url(\"https://image.freepik.com/free-vector/antibody-immunoglobulin-molecule-theme_23-2148573169.jpg\");\n}\n\nion-card.card-bg-img2 {\n  background-image: url(\"https://image.freepik.com/free-vector/gradient-green-blue-abstract-geometric-background_23-2148362562.jpg\");\n}\n\nion-card.card-bg-img3 {\n  background-image: url(\"https://image.freepik.com/free-vector/colorful-memphis-design-background-vector_53876-81744.jpg\");\n}\n\nion-card.card-bg-img4 {\n  background-image: url(\"https://image.freepik.com/free-vector/fluid-style-wallpaper-with-memphis-elements_23-2148498121.jpg\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZXRoZWUvSW9uaWNQcm9qZWN0cy9faW9uaWM1L2lvbmljNWZ1bGxhcHBfZmluYWwvc3JjL2FwcC91aS1sYXlvdXRzL2Zvcm0vZm9ybS1vbmUvZm9ybS1vbmUucGFnZS5zY3NzIiwic3JjL2FwcC91aS1sYXlvdXRzL2Zvcm0vZm9ybS1vbmUvZm9ybS1vbmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBEQTtFQUNHLHVCQUFBO0FDekRIOztBRDJEQztFQUNDLGtDQUFBO0FDeERGOztBRDJEQTtFQUNFLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FDeERGOztBRDJEQTtFQUVFLHVIQUFBO0FDekRGOztBRDJEQztFQUVDLGtJQUFBO0FDekRGOztBRDJEQztFQUVDLHdIQUFBO0FDekRGOztBRDJEQztFQUVDLDRIQUFBO0FDekRGIiwiZmlsZSI6InNyYy9hcHAvdWktbGF5b3V0cy9mb3JtL2Zvcm0tb25lL2Zvcm0tb25lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi1pdGVtOmZpcnN0LWNoaWxkIHtcbi8vICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4vLyAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbi8vICAgfVxuLy8gICBpb24taXRlbTpsYXN0LWNoaWxkIHtcbi8vICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4vLyAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbi8vICAgfVxuLy8gICBpb24taXRlbS5pdGVtIHtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMXB4O1xuLy8gICAgIC5sYWJlbCB7XG4vLyAgICAgICB3aWR0aDogMTAlO1xuLy8gICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbi8vICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4vLyAgICAgfVxuLy8gICB9XG5cblxuXG5cbi8vICAgLmxvZ2luLWZvcm0ge1xuLy8gICAgIC0tYmFja2dyb3VuZDogI2ZhZmFmYTtcbi8vICAgICAudGl0bGUge1xuLy8gICAgICAgZm9udC1zaXplOiAyNXB4O1xuLy8gICAgICAgLS1jb2xvcjogIzEyNTlhMTtcbi8vICAgICB9XG4vLyAgICAgLnN1Yi10aXRsZSB7XG4vLyAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuLy8gICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbi8vICAgICB9XG4gIFxuLy8gICAgIC5idG4tbG9naW4ge1xuLy8gICAgICAgLS1iYWNrZ3JvdW5kOiAjZTg4MjMzO1xuLy8gICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuLy8gICAgIH1cbiAgXG4vLyAgICAgLmlucHV0LWNvbnRhaW5lciB7XG4vLyAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGU4O1xuLy8gICAgICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4vLyAgICAgICAtLW1pbi1oZWlnaHQ6NTBweDsgXG4vLyAgICAgICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkIDojMTI1OWExO1xuLy8gICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICAmOmZpcnN0LWNoaWxkIHtcbi8vICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbi8vICAgICAgIH1cbiAgXG4vLyAgICAgICAuZW1haWwtcGF0dGVybiB7XG4vLyAgICAgICAgIGNvbG9yOiAjY2NjY2NjO1xuLy8gICAgICAgfVxuICBcbi8vICAgICAgIC5jdXN0b20taWNvbntcbi8vICAgICAgICAgICB3aWR0aDoxNnB4O1xuLy8gICAgICAgICAgIGhlaWdodDogMTZweDtcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cblxuaW9uLWNvbHtcbiAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuIH1cbiBpb24tbGlzdCB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5jYXJkLWJne1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gfVxuXG5pb24tY2FyZC5jYXJkLWJnLWltZzF7XG4gIEBleHRlbmQgLmNhcmQtYmc7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9pbWFnZS5mcmVlcGlrLmNvbS9mcmVlLXZlY3Rvci9hbnRpYm9keS1pbW11bm9nbG9idWxpbi1tb2xlY3VsZS10aGVtZV8yMy0yMTQ4NTczMTY5LmpwZycpO1xuIH1cbiBpb24tY2FyZC5jYXJkLWJnLWltZzJ7XG4gIEBleHRlbmQgLmNhcmQtYmc7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9pbWFnZS5mcmVlcGlrLmNvbS9mcmVlLXZlY3Rvci9ncmFkaWVudC1ncmVlbi1ibHVlLWFic3RyYWN0LWdlb21ldHJpYy1iYWNrZ3JvdW5kXzIzLTIxNDgzNjI1NjIuanBnJyk7XG4gfVxuIGlvbi1jYXJkLmNhcmQtYmctaW1nM3tcbiAgQGV4dGVuZCAuY2FyZC1iZztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2ltYWdlLmZyZWVwaWsuY29tL2ZyZWUtdmVjdG9yL2NvbG9yZnVsLW1lbXBoaXMtZGVzaWduLWJhY2tncm91bmQtdmVjdG9yXzUzODc2LTgxNzQ0LmpwZycpO1xuIH1cbiBpb24tY2FyZC5jYXJkLWJnLWltZzR7XG4gIEBleHRlbmQgLmNhcmQtYmc7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9pbWFnZS5mcmVlcGlrLmNvbS9mcmVlLXZlY3Rvci9mbHVpZC1zdHlsZS13YWxscGFwZXItd2l0aC1tZW1waGlzLWVsZW1lbnRzXzIzLTIxNDg0OTgxMjEuanBnJyk7XG4gfVxuXG4vLyBpb24tY29udGVudHtcbi8vICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuLy8gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vaW1hZ2UuZnJlZXBpay5jb20vZnJlZS12ZWN0b3IvYWJzdHJhY3QtZGVzaWduLWJsdWUtYmFja2dyb3VuZF8yMy0yMTQ4NDk3NDg5LmpwZycpO1xuLy8gICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuLy8gICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuLy8gICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuLy8gfSIsImlvbi1jb2wge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWxpc3Qge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uY2FyZC1iZywgaW9uLWNhcmQuY2FyZC1iZy1pbWc0LCBpb24tY2FyZC5jYXJkLWJnLWltZzMsIGlvbi1jYXJkLmNhcmQtYmctaW1nMiwgaW9uLWNhcmQuY2FyZC1iZy1pbWcxIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG5pb24tY2FyZC5jYXJkLWJnLWltZzEge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2ltYWdlLmZyZWVwaWsuY29tL2ZyZWUtdmVjdG9yL2FudGlib2R5LWltbXVub2dsb2J1bGluLW1vbGVjdWxlLXRoZW1lXzIzLTIxNDg1NzMxNjkuanBnXCIpO1xufVxuXG5pb24tY2FyZC5jYXJkLWJnLWltZzIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2ltYWdlLmZyZWVwaWsuY29tL2ZyZWUtdmVjdG9yL2dyYWRpZW50LWdyZWVuLWJsdWUtYWJzdHJhY3QtZ2VvbWV0cmljLWJhY2tncm91bmRfMjMtMjE0ODM2MjU2Mi5qcGdcIik7XG59XG5cbmlvbi1jYXJkLmNhcmQtYmctaW1nMyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vaW1hZ2UuZnJlZXBpay5jb20vZnJlZS12ZWN0b3IvY29sb3JmdWwtbWVtcGhpcy1kZXNpZ24tYmFja2dyb3VuZC12ZWN0b3JfNTM4NzYtODE3NDQuanBnXCIpO1xufVxuXG5pb24tY2FyZC5jYXJkLWJnLWltZzQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2ltYWdlLmZyZWVwaWsuY29tL2ZyZWUtdmVjdG9yL2ZsdWlkLXN0eWxlLXdhbGxwYXBlci13aXRoLW1lbXBoaXMtZWxlbWVudHNfMjMtMjE0ODQ5ODEyMS5qcGdcIik7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/ui-layouts/form/form-one/form-one.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/ui-layouts/form/form-one/form-one.page.ts ***!
    \***********************************************************/

  /*! exports provided: FormOnePage */

  /***/
  function srcAppUiLayoutsFormFormOneFormOnePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormOnePage", function () {
      return FormOnePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FormOnePage = /*#__PURE__*/function () {
      function FormOnePage() {
        _classCallCheck(this, FormOnePage);

        this.rating = 1;
        this.showPassword = false;
      }

      _createClass(FormOnePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {} //####### Show / hide password #######//

      }, {
        key: "onPasswordToggle",
        value: function onPasswordToggle() {
          this.showPassword = !this.showPassword;
        }
      }]);

      return FormOnePage;
    }();

    FormOnePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-form-one',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./form-one.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/form/form-one/form-one.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./form-one.page.scss */
      "./src/app/ui-layouts/form/form-one/form-one.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FormOnePage);
    /***/
  }
}]);
//# sourceMappingURL=ui-layouts-form-form-one-form-one-module-es5.js.map