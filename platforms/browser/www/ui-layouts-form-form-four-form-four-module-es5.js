function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-layouts-form-form-four-form-four-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/form/form-four/form-four.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/form/form-four/form-four.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiLayoutsFormFormFourFormFourPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Form style 4</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"ion-align-self-start\">\n        <div>\n          1 of 4\n        </div>\n      </ion-col>\n      <ion-col class=\"ion-align-self-center\">\n        <div>\n          2 of 4\n        </div>\n      </ion-col>\n      <ion-col class=\"ion-align-self-end\">\n        <div>\n          3 of 4\n        </div>\n      </ion-col>\n      <ion-col>\n        <div>\n          4 of 4 <br>\n          # <br>\n          # <br>\n          #\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-grid>\n    <ion-row>\n      <!-- #############################################-->\n      <!-- ############# Form 1 (left icon) ########### -->\n      <!-- #############################################-->\n\n      <ion-col size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size=\"12\">\n        \n        <ion-card mode=\"ios\" color=\"medium\" class=\"card-bg-img4 ion-padding\">\n          <ion-card-header>\n            <h4 class=\"ion-no-margin ion-text-center\">SIGNUP</h4>\n          </ion-card-header>\n\n              <ion-list class=\"ion-margin-top\">\n                <!-- ############ -->\n                <ion-item  class=\"margin-bottom-10\">\n                  <ion-label>\n                    <ion-icon color=\"light\" name=\"person-add-outline\"></ion-icon>\n                    </ion-label>\n                  <ion-input color=\"light\"  placeholder=\"Username\" ></ion-input>\n                </ion-item>\n                 <!-- ############ -->                              \n                <ion-item class=\" margin-bottom-10\">\n\n                  <ion-label slot=\"start\" class=\"margin-right-8\">\n                    <ion-icon color=\"light\" name=\"lock-closed-outline\"></ion-icon>\n                    </ion-label>\n\n                  <ion-input color=\"light\" placeholder=\"Password\" [type]=\"showPassword ? 'text' : 'password'\" clearOnEdit=\"false\"></ion-input>\n\n                      <!-- ### Show/hide password ### -->    \n                      <div (click)=\"onPasswordToggle()\" ion-button fill=\"clear\" size=\"small\" >\n                        <ion-icon  slot=\"icon-only\" color=\"light\" [name]=\"showPassword ? 'eye-off' : 'eye'\"></ion-icon>\n                      </div>\n\n                </ion-item>\n\n                <!-- ############ -->\n                <span >\n                  <p class=\"ion-text-right\">Forgot password?</p>\n                </span>\n                <!-- ############ -->\n                <ion-button class=\"ion-margin-top\" color=\"success\" expand=\"block\" shape=\"\">Signin</ion-button>\n              </ion-list>\n        </ion-card>\n\n      </ion-col>\n\n      <!-- #############################################-->\n      <!-- ########## Form 2 (Stacked Label ) ########## -->\n      <!-- #############################################-->\n\n      <ion-col size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size=\"12\">\n        <ion-card mode=\"ios\" color=\"medium\" class=\"card-bg-img1 ion-padding\">\n          <ion-card-header>\n            <h4 color=\"light\" class=\"ion-no-margin ion-text-center\">SIGNUP</h4>\n          </ion-card-header>\n          <form>\n            <ion-list>\n\n              <!-- ############ -->\n\n              <ion-item >\n                <ion-label color=\"light\" position=\"stacked\">Username</ion-label>\n                <ion-input color=\"light\"></ion-input>\n              </ion-item>\n\n              <!-- ############ -->\n\n              <ion-item>\n                <ion-label color=\"light\" position=\"stacked\">E-mail</ion-label>\n                <ion-input color=\"light\"></ion-input>\n              </ion-item>\n\n              <!-- ############ -->\n              <ion-item>\n                <ion-label color=\"light\" position=\"stacked\">Password</ion-label>\n                <ion-input color=\"light\"></ion-input>\n              </ion-item>\n\n               <!-- ############ -->\n              <ion-item  class=\"\">\n                <ion-label color=\"light\" position=\"stacked\">Confirm password</ion-label>\n                <ion-input color=\"light\"></ion-input>\n              </ion-item>         \n              <!-- ############ -->\n              <ion-button class=\"ion-margin-top\" color=\"success\" expand=\"block\" shape=\"\">Create</ion-button>\n              <!-- <ion-button  color=\"primary\"  fill=\"outline\" expand=\"block\" >\n                <ion-icon slot=\"start\"name=\"logo-facebook\"></ion-icon>\n                Signin with facebook\n              </ion-button> -->\n\n              <!-- <span>\n                <p class=\"ion-text-center\">or</p>\n              </span>\n              \n              <ion-button class=\"ion-margin-top\" color=\"primary\" fill=\"outline\" expand=\"block\">\n                <ion-icon slot=\"start\" color=\"primary\" name=\"logo-facebook\"></ion-icon>\n                Signup with Facebook\n              </ion-button>\n              <ion-button  color=\"danger\" fill=\"outline\" expand=\"block\">\n                <ion-icon slot=\"start\" color=\"danger\" name=\"logo-google\"></ion-icon>\n                Singup with Google\n              </ion-button> -->\n\n              <span>\n                <p class=\"ion-text-center\">or</p>\n              </span>\n              <!-- ############ -->\n              <ion-button class=\"ion-margin-top\" color=\"primary\" expand=\"block\">\n                <ion-icon slot=\"start\" color=\"light\" name=\"logo-facebook\"></ion-icon>\n                Signup with Facebook\n              </ion-button>\n              <ion-button  color=\"danger\" expand=\"block\">\n                <ion-icon slot=\"start\" color=\"light\" name=\"logo-google\"></ion-icon>\n                Singup with Google\n              </ion-button>              \n            </ion-list>\n          </form>\n        </ion-card>\n      </ion-col>\n\n\n      <!-- #############################################-->\n      <!-- ############# Form 3 (right icon) ########### -->\n      <!-- #############################################-->\n\n      <ion-col size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size=\"12\">\n        <ion-card mode=\"ios\" color=\"medium\" mode=\"ios\" class=\"card-bg-img2 ion-padding\">\n          <ion-card-header>\n            <h4 class=\"ion-no-margin\">Event registration</h4>\n          </ion-card-header>\n            <form>\n              <ion-list>\n                <!-- ############ -->\n                <ion-item class=\"ion-padding-end\">\n                  <ion-input color=\"light\" placeholder=\"Firstname\" ></ion-input>\n                  <ion-label>\n                    <ion-icon color=\"light\" name=\"person-outline\"></ion-icon>\n                    </ion-label>\n                </ion-item>\n                 <!-- ############ -->               \n                <ion-item class=\"ion-padding-end\">\n                  <ion-input color=\"light\" placeholder=\"Lastname\" ></ion-input>\n                  <ion-label>\n                    <ion-icon color=\"light\" name=\"people-outline\"></ion-icon>\n                  </ion-label>\n\n                </ion-item>\n\n                 <!-- ############ -->               \n                 <ion-item class=\"ion-padding-end\">\n                  <ion-input color=\"light\" placeholder=\"Company\" ></ion-input>\n                  <ion-label>\n                    <ion-icon color=\"light\" name=\"business-outline\"></ion-icon>\n                  </ion-label>\n                </ion-item>\n                 <!-- ############ -->               \n                 <ion-item class=\"ion-padding-end\">\n                  <ion-input color=\"light\" placeholder=\"Phone number\" ></ion-input>\n                  <ion-label>\n                    <ion-icon color=\"light\" name=\"call-outline\"></ion-icon>\n                  </ion-label>\n                </ion-item>\n                 <!-- ############ -->               \n                 <ion-item class=\"ion-padding-end\">\n                  <ion-input color=\"light\" placeholder=\"E-mail\" ></ion-input>\n                  <ion-label>\n                    <ion-icon color=\"light\" name=\"mail-outline\"></ion-icon>\n                  </ion-label>\n                </ion-item>\n                <!-- ############ -->\n                <ion-item>\n\n                    <ion-textarea color=\"light\" rows=\"6\" placeholder=\"About your company\"></ion-textarea>\n                  <!-- <ion-input placeholder=\"Username\" ></ion-input> -->\n                </ion-item>\n\n                 <!-- ############ -->               \n                <ion-item>\n                  <ion-label color=\"light\">Status</ion-label>\n                  <ion-toggle></ion-toggle>\n                </ion-item>\n              <!-- ############ -->               \n              <ion-item>\n                <ion-label color=\"light\">Gender</ion-label>\n                <ion-select color=\"light\" placeholder=\"Select One\">\n                  <ion-select-option value=\"f\">Female</ion-select-option>\n                  <ion-select-option value=\"m\">Male</ion-select-option>\n                </ion-select>\n              </ion-item>\n\n                <span>\n                  <p class=\"ion-text-right\">Already signup?</p>\n                </span>\n                <!-- ############ -->\n                <ion-button class=\"ion-margin-top\" color=\"success\" expand=\"block\" >Submit</ion-button>\n\n              </ion-list>\n\n            </form>\n        </ion-card>\n      </ion-col>\n\n\n\n      <!-- #########################################-->\n      <!-- ############# Form 4 (Rating) ########### -->\n      <!-- #########################################-->\n      <ion-col size-lg=\"6\" size-md=\"6\" size-sm=\"6\" size=\"12\">\n        <ion-card mode=\"ios\" color=\"medium\" mode=\"ios\" class=\"card-bg-img3 ion-padding\">\n          <!-- <ion-card-header>\n            <h4 class=\"ion-no-margin\">Review</h4>\n          </ion-card-header> -->\n              <ion-list>\n                <!-- ****** rating ******* -->\n                <h4 class=\"ion-text-center\">Please give a rating: {{rating}}</h4>\n                <div class=\"ion-justify-content-center ion-padding-bottom\">\n                  <rating [(ngModel)]=\"rating\"\n                    readonly=\"false\"\n                    size=\"default\" \n                    resettable= \"true\">\n                  </rating>\n                </div>\n\n                <!-- ############ -->\n                <ion-item class=\"\">\n                    <ion-textarea color=\"light\" rows=\"6\" placeholder=\"What do think about this product?\"></ion-textarea>\n                  <!-- <ion-input placeholder=\"Username\" ></ion-input> -->\n                </ion-item>\n                <!-- ############ -->\n                <ion-button  color=\"success\" expand=\"block\" shape=\"\">Submit</ion-button>\n              \n              </ion-list>\n        </ion-card>\n      </ion-col>\n      \n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/ui-layouts/form/form-four/form-four-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/ui-layouts/form/form-four/form-four-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: FormFourPageRoutingModule */

  /***/
  function srcAppUiLayoutsFormFormFourFormFourRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormFourPageRoutingModule", function () {
      return FormFourPageRoutingModule;
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


    var _form_four_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./form-four.page */
    "./src/app/ui-layouts/form/form-four/form-four.page.ts");

    var routes = [{
      path: '',
      component: _form_four_page__WEBPACK_IMPORTED_MODULE_3__["FormFourPage"]
    }];

    var FormFourPageRoutingModule = function FormFourPageRoutingModule() {
      _classCallCheck(this, FormFourPageRoutingModule);
    };

    FormFourPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FormFourPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/ui-layouts/form/form-four/form-four.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/ui-layouts/form/form-four/form-four.module.ts ***!
    \***************************************************************/

  /*! exports provided: FormFourPageModule */

  /***/
  function srcAppUiLayoutsFormFormFourFormFourModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormFourPageModule", function () {
      return FormFourPageModule;
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


    var _form_four_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./form-four-routing.module */
    "./src/app/ui-layouts/form/form-four/form-four-routing.module.ts");
    /* harmony import */


    var _form_four_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./form-four.page */
    "./src/app/ui-layouts/form/form-four/form-four.page.ts");
    /* harmony import */


    var ionic4_rating_dist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ionic4-rating/dist */
    "./node_modules/ionic4-rating/dist/index.js");

    var FormFourPageModule = function FormFourPageModule() {
      _classCallCheck(this, FormFourPageModule);
    };

    FormFourPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], ionic4_rating_dist__WEBPACK_IMPORTED_MODULE_7__["IonicRatingModule"], _form_four_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormFourPageRoutingModule"]],
      declarations: [_form_four_page__WEBPACK_IMPORTED_MODULE_6__["FormFourPage"]]
    })], FormFourPageModule);
    /***/
  },

  /***/
  "./src/app/ui-layouts/form/form-four/form-four.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/ui-layouts/form/form-four/form-four.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiLayoutsFormFormFourFormFourPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-bg, ion-card.card-bg-img4, ion-card.card-bg-img3, ion-card.card-bg-img2, ion-card.card-bg-img1 {\n  --background: none;\n  background-position: center center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\nion-card.card-bg-img1 {\n  background-image: url(\"https://image.freepik.com/free-vector/abstract-galaxy-background_1199-247.jpg\");\n}\n\nion-card.card-bg-img2 {\n  background-image: url(\"https://image.freepik.com/free-vector/realistic-elegant-geometric-shapes-background_23-2148434482.jpg\");\n}\n\nion-card.card-bg-img3 {\n  background-image: url(\"https://image.freepik.com/free-vector/abstract-futuristic-background_23-2148399335.jpg\");\n}\n\nion-card.card-bg-img4 {\n  background-image: url(\"https://image.freepik.com/free-vector/red-neon-glowing-lights-arrow-style-background_1017-25201.jpg\");\n}\n\nion-col {\n  padding: 0px !important;\n}\n\nion-list {\n  --ion-item-background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZXRoZWUvSW9uaWNQcm9qZWN0cy9faW9uaWM1L2lvbmljNWZ1bGxhcHBfZmluYWwvc3JjL2FwcC91aS1sYXlvdXRzL2Zvcm0vZm9ybS1mb3VyL2Zvcm0tZm91ci5wYWdlLnNjc3MiLCJzcmMvYXBwL3VpLWxheW91dHMvZm9ybS9mb3JtLWZvdXIvZm9ybS1mb3VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FDQ0o7O0FERUU7RUFFRSxzR0FBQTtBQ0FKOztBREVHO0VBRUMsOEhBQUE7QUNBSjs7QURFRztFQUVDLCtHQUFBO0FDQUo7O0FERUc7RUFFQyw0SEFBQTtBQ0FKOztBREVHO0VBQ0MsdUJBQUE7QUNDSjs7QURDRTtFQUNDLGtDQUFBO0FDRUgiLCJmaWxlIjoic3JjL2FwcC91aS1sYXlvdXRzL2Zvcm0vZm9ybS1mb3VyL2Zvcm0tZm91ci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1iZ3tcbiAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICB9XG4gIFxuICBpb24tY2FyZC5jYXJkLWJnLWltZzF7XG4gICAgQGV4dGVuZCAuY2FyZC1iZztcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vaW1hZ2UuZnJlZXBpay5jb20vZnJlZS12ZWN0b3IvYWJzdHJhY3QtZ2FsYXh5LWJhY2tncm91bmRfMTE5OS0yNDcuanBnJyk7XG4gICB9XG4gICBpb24tY2FyZC5jYXJkLWJnLWltZzJ7XG4gICAgQGV4dGVuZCAuY2FyZC1iZztcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vaW1hZ2UuZnJlZXBpay5jb20vZnJlZS12ZWN0b3IvcmVhbGlzdGljLWVsZWdhbnQtZ2VvbWV0cmljLXNoYXBlcy1iYWNrZ3JvdW5kXzIzLTIxNDg0MzQ0ODIuanBnJyk7XG4gICB9XG4gICBpb24tY2FyZC5jYXJkLWJnLWltZzN7XG4gICAgQGV4dGVuZCAuY2FyZC1iZztcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vaW1hZ2UuZnJlZXBpay5jb20vZnJlZS12ZWN0b3IvYWJzdHJhY3QtZnV0dXJpc3RpYy1iYWNrZ3JvdW5kXzIzLTIxNDgzOTkzMzUuanBnJyk7XG4gICB9XG4gICBpb24tY2FyZC5jYXJkLWJnLWltZzR7XG4gICAgQGV4dGVuZCAuY2FyZC1iZztcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vaW1hZ2UuZnJlZXBpay5jb20vZnJlZS12ZWN0b3IvcmVkLW5lb24tZ2xvd2luZy1saWdodHMtYXJyb3ctc3R5bGUtYmFja2dyb3VuZF8xMDE3LTI1MjAxLmpwZycpO1xuICAgfVxuICAgaW9uLWNvbHtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgfVxuICBpb24tbGlzdCB7XG4gICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuIH1cbiAiLCIuY2FyZC1iZywgaW9uLWNhcmQuY2FyZC1iZy1pbWc0LCBpb24tY2FyZC5jYXJkLWJnLWltZzMsIGlvbi1jYXJkLmNhcmQtYmctaW1nMiwgaW9uLWNhcmQuY2FyZC1iZy1pbWcxIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG5pb24tY2FyZC5jYXJkLWJnLWltZzEge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2ltYWdlLmZyZWVwaWsuY29tL2ZyZWUtdmVjdG9yL2Fic3RyYWN0LWdhbGF4eS1iYWNrZ3JvdW5kXzExOTktMjQ3LmpwZ1wiKTtcbn1cblxuaW9uLWNhcmQuY2FyZC1iZy1pbWcyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9pbWFnZS5mcmVlcGlrLmNvbS9mcmVlLXZlY3Rvci9yZWFsaXN0aWMtZWxlZ2FudC1nZW9tZXRyaWMtc2hhcGVzLWJhY2tncm91bmRfMjMtMjE0ODQzNDQ4Mi5qcGdcIik7XG59XG5cbmlvbi1jYXJkLmNhcmQtYmctaW1nMyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vaW1hZ2UuZnJlZXBpay5jb20vZnJlZS12ZWN0b3IvYWJzdHJhY3QtZnV0dXJpc3RpYy1iYWNrZ3JvdW5kXzIzLTIxNDgzOTkzMzUuanBnXCIpO1xufVxuXG5pb24tY2FyZC5jYXJkLWJnLWltZzQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2ltYWdlLmZyZWVwaWsuY29tL2ZyZWUtdmVjdG9yL3JlZC1uZW9uLWdsb3dpbmctbGlnaHRzLWFycm93LXN0eWxlLWJhY2tncm91bmRfMTAxNy0yNTIwMS5qcGdcIik7XG59XG5cbmlvbi1jb2wge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWxpc3Qge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ui-layouts/form/form-four/form-four.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/ui-layouts/form/form-four/form-four.page.ts ***!
    \*************************************************************/

  /*! exports provided: FormFourPage */

  /***/
  function srcAppUiLayoutsFormFormFourFormFourPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormFourPage", function () {
      return FormFourPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FormFourPage = /*#__PURE__*/function () {
      function FormFourPage() {
        _classCallCheck(this, FormFourPage);

        this.rating = 1;
        this.showPassword = false;
      }

      _createClass(FormFourPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {} //####### Show / hide password #######//

      }, {
        key: "onPasswordToggle",
        value: function onPasswordToggle() {
          this.showPassword = !this.showPassword;
        }
      }]);

      return FormFourPage;
    }();

    FormFourPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-form-four',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./form-four.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/form/form-four/form-four.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./form-four.page.scss */
      "./src/app/ui-layouts/form/form-four/form-four.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FormFourPage);
    /***/
  }
}]);
//# sourceMappingURL=ui-layouts-form-form-four-form-four-module-es5.js.map