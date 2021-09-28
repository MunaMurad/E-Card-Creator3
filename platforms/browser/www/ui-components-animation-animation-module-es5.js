function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-components-animation-animation-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/animation/animation.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/animation/animation.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiComponentsAnimationAnimationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>animation</ion-title>\n  </ion-toolbar>\n\n  <ion-toolbar>\n    <ion-segment [(ngModel)]=\"viewMode\">\n      <ion-segment-button value=\"set1\">\n        <ion-label>Set 1</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"set2\">\n          <ion-label>Set 2 </ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"set3\">\n          <ion-label>Set 3</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content fullscreen>\n\n  <div *ngIf=\"viewMode==='set1'\">\n    <!--********** Drop in *************-->\n      <ion-card color=\"darkGray\" class=\"drop-in\">\n        <ion-card-content text-center>   \n          <h3>Drop-In</h3>\n          <p>\n            Usage: class=\"drop-in\"\n          </p>\n        </ion-card-content>\n      </ion-card>\n    <!--********** wobble*************-->\n      <ion-card color=\"darkGray\" class=\"wobble\">\n        <ion-card-content text-center>   \n          <h3>Wobble</h3>\n          <p>\n            Usage: class=\"wobble\"\n          </p>\n        </ion-card-content>\n      </ion-card>\n  \n    <!--********** Fadein-down *************-->\n   <ion-card color=\"darkGray\" class=\"fadein-down\">\n        <ion-card-content text-center>   \n          <h3>Fadein-down</h3>\n          <p>\n            Usage: class=\"fadein-down\"\n          </p>\n        </ion-card-content>\n      </ion-card>\n    <!--********** Ta-da *************-->\n      <ion-card color=\"darkGray\" class=\"ta-da\">\n        <ion-card-content text-center>   \n          <h3>Ta-da</h3>\n          <p>\n            Usage: class=\"ta-da\"\n          </p>\n        </ion-card-content>\n      </ion-card>   \n  \n  </div>\n  \n  \n  \n  \n  <div *ngIf=\"viewMode==='set2'\">\n   \n  \n    <!--********** Slide up *************-->\n   <ion-card color=\"darkGray\" class=\"slide-up\">\n        <ion-card-content text-center margin-bottom>   \n          <h3>Slide-up</h3>\n          <p>\n            Usage: class=\"slide-up\"\n          </p>\n        </ion-card-content>\n      </ion-card>\n  <!--********** Slide left *************-->\n   <ion-card color=\"darkGray\" class=\"slide-left\">\n    <ion-card-content text-center margin-bottom>   \n      <h3>Slide-left</h3>\n      <p>\n        Usage: class=\"slide-left\"\n      </p>\n    </ion-card-content>\n  </ion-card>\n  <!--********** Slide right *************-->\n        <ion-card color=\"darkGray\" class=\"slide-right\">\n          <ion-card-content text-center margin-bottom>   \n            <h3>Slide-right</h3>\n            <p>\n              Usage: class=\"slide-right\"\n            </p>\n          </ion-card-content>\n        </ion-card>\n    <!--********** Wave *************-->\n      <ion-card color=\"darkGray\" class=\"wave\">\n        <ion-card-content text-center>   \n          <h3>Wave</h3>\n          <p>\n            Usage: class=\"wave\"\n          </p>\n        </ion-card-content>\n      </ion-card>   \n    <!--********** Pop in *************-->\n      <ion-card color=\"darkGray\" class=\"pop-in\">\n        <ion-card-content text-center>   \n          <h3>Pop-In</h3>\n          <p>\n            Usage: class=\"pop-in\"\n          </p>\n        </ion-card-content>\n      </ion-card>\n    <!--********** Pop put *************-->\n      <ion-card color=\"darkGray\" class=\"pop-out\">\n        <ion-card-content text-center>   \n          <h3>Pop-Out</h3>\n          <p>\n            Usage: class=\"pop-out\"\n          </p>\n        </ion-card-content>\n      </ion-card>\n  \n  \n  </div>\n  \n  \n  \n  <div *ngIf=\"viewMode==='set3'\">\n    <!--********** Swing *************-->\n      <ion-card color=\"darkGray\" class=\"swing\">\n        <ion-card-content text-center>   \n          <h3>Swing</h3>\n          <p>\n            Usage: class=\"swing\"\n          </p>\n        </ion-card-content>\n      </ion-card>\n    <!--********** Shake*************-->\n      <ion-card color=\"darkGray\" class=\"shake\">\n        <ion-card-content text-center>   \n          <h3>Shake</h3>\n          <p>\n            Usage: class=\"shake\"\n          </p>\n        </ion-card-content >\n      </ion-card>\n  \n    <!--********** Bounce *************-->\n   <ion-card color=\"darkGray\" class=\"bounce\">\n        <ion-card-content text-center>   \n          <h3>Bounce</h3>\n          <p>\n            Usage: class=\"bounce\"\n          </p>\n        </ion-card-content>\n      </ion-card>\n  \n  </div>\n  <ion-content>";
    /***/
  },

  /***/
  "./src/app/ui-components/animation/animation-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/ui-components/animation/animation-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: AnimationPageRoutingModule */

  /***/
  function srcAppUiComponentsAnimationAnimationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimationPageRoutingModule", function () {
      return AnimationPageRoutingModule;
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


    var _animation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./animation.page */
    "./src/app/ui-components/animation/animation.page.ts");

    var routes = [{
      path: '',
      component: _animation_page__WEBPACK_IMPORTED_MODULE_3__["AnimationPage"]
    }];

    var AnimationPageRoutingModule = function AnimationPageRoutingModule() {
      _classCallCheck(this, AnimationPageRoutingModule);
    };

    AnimationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AnimationPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/ui-components/animation/animation.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/ui-components/animation/animation.module.ts ***!
    \*************************************************************/

  /*! exports provided: AnimationPageModule */

  /***/
  function srcAppUiComponentsAnimationAnimationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimationPageModule", function () {
      return AnimationPageModule;
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


    var _animation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./animation-routing.module */
    "./src/app/ui-components/animation/animation-routing.module.ts");
    /* harmony import */


    var _animation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./animation.page */
    "./src/app/ui-components/animation/animation.page.ts");

    var AnimationPageModule = function AnimationPageModule() {
      _classCallCheck(this, AnimationPageModule);
    };

    AnimationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _animation_routing_module__WEBPACK_IMPORTED_MODULE_5__["AnimationPageRoutingModule"]],
      declarations: [_animation_page__WEBPACK_IMPORTED_MODULE_6__["AnimationPage"]]
    })], AnimationPageModule);
    /***/
  },

  /***/
  "./src/app/ui-components/animation/animation.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/ui-components/animation/animation.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiComponentsAnimationAnimationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWNvbXBvbmVudHMvYW5pbWF0aW9uL2FuaW1hdGlvbi5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ui-components/animation/animation.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/ui-components/animation/animation.page.ts ***!
    \***********************************************************/

  /*! exports provided: AnimationPage */

  /***/
  function srcAppUiComponentsAnimationAnimationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimationPage", function () {
      return AnimationPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AnimationPage = /*#__PURE__*/function () {
      function AnimationPage() {
        _classCallCheck(this, AnimationPage);

        this.viewMode = "set1";
      }

      _createClass(AnimationPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AnimationPage;
    }();

    AnimationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-animation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./animation.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/animation/animation.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./animation.page.scss */
      "./src/app/ui-components/animation/animation.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], AnimationPage);
    /***/
  }
}]);
//# sourceMappingURL=ui-components-animation-animation-module-es5.js.map