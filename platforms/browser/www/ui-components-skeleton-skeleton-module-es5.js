function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-components-skeleton-skeleton-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/skeleton/skeleton.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/skeleton/skeleton.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiComponentsSkeletonSkeletonPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Data to display after skeleton screen -->\n<div *ngIf=\"data\">\n  <div class=\"ion-padding\">\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula.\n  </div>\n\n  <ion-list>\n    <ion-list-header>\n      <ion-label>\n        Data\n      </ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <img src=\"https://ionicframework.com/docs/demos/api/skeleton-text/thebeatles.jpeg\">\n      </ion-avatar>\n      <ion-label>\n        <h3>\n          {{ data.heading }}\n        </h3>\n        <p>\n          {{ data.para1 }}\n        </p>\n        <p>\n          {{ data.para2 }}\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <img src=\"https://ionicframework.com/docs/demos/api/skeleton-text/pinkfloyd.jpeg\">\n      </ion-thumbnail>\n\n      <ion-label>\n        <h3>\n          {{ data.heading }}\n        </h3>\n        <p>\n          {{ data.para1 }}\n        </p>\n        <p>\n          {{ data.para2 }}\n        </p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name=\"call\" slot=\"start\"></ion-icon>\n\n      <ion-label>\n        <h3>\n          {{ data.heading }}\n        </h3>\n        <p>\n          {{ data.para1 }}\n        </p>\n        <p>\n          {{ data.para2 }}\n        </p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</div>\n\n<!-- Skeleton screen -->\n<div *ngIf=\"!data\">\n  <div class=\"ion-padding custom-skeleton\">\n    <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n    <ion-skeleton-text animated></ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n  </div>\n\n  <ion-list>\n    <ion-list-header>\n      <ion-label>\n        <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\n      </ion-label>\n    </ion-list-header>\n\n\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-avatar>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n\n\n\n    <ion-item>\n      <ion-skeleton-text animated style=\"width: 27px; height: 27px\" slot=\"start\"></ion-skeleton-text>\n      \n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</div>";
    /***/
  },

  /***/
  "./src/app/ui-components/skeleton/skeleton-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/ui-components/skeleton/skeleton-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: SkeletonPageRoutingModule */

  /***/
  function srcAppUiComponentsSkeletonSkeletonRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkeletonPageRoutingModule", function () {
      return SkeletonPageRoutingModule;
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


    var _skeleton_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./skeleton.page */
    "./src/app/ui-components/skeleton/skeleton.page.ts");

    var routes = [{
      path: '',
      component: _skeleton_page__WEBPACK_IMPORTED_MODULE_3__["SkeletonPage"]
    }];

    var SkeletonPageRoutingModule = function SkeletonPageRoutingModule() {
      _classCallCheck(this, SkeletonPageRoutingModule);
    };

    SkeletonPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SkeletonPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/ui-components/skeleton/skeleton.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/ui-components/skeleton/skeleton.module.ts ***!
    \***********************************************************/

  /*! exports provided: SkeletonPageModule */

  /***/
  function srcAppUiComponentsSkeletonSkeletonModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkeletonPageModule", function () {
      return SkeletonPageModule;
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


    var _skeleton_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./skeleton-routing.module */
    "./src/app/ui-components/skeleton/skeleton-routing.module.ts");
    /* harmony import */


    var _skeleton_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./skeleton.page */
    "./src/app/ui-components/skeleton/skeleton.page.ts");

    var SkeletonPageModule = function SkeletonPageModule() {
      _classCallCheck(this, SkeletonPageModule);
    };

    SkeletonPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _skeleton_routing_module__WEBPACK_IMPORTED_MODULE_5__["SkeletonPageRoutingModule"]],
      declarations: [_skeleton_page__WEBPACK_IMPORTED_MODULE_6__["SkeletonPage"]]
    })], SkeletonPageModule);
    /***/
  },

  /***/
  "./src/app/ui-components/skeleton/skeleton.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/ui-components/skeleton/skeleton.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiComponentsSkeletonSkeletonPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Custom Skeleton Line Height and Margin */\n.custom-skeleton ion-skeleton-text {\n  line-height: 13px;\n}\n.custom-skeleton ion-skeleton-text:last-child {\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZXRoZWUvSW9uaWNQcm9qZWN0cy9faW9uaWM1L2lvbmljNWZ1bGxhcHBfZmluYWwvc3JjL2FwcC91aS1jb21wb25lbnRzL3NrZWxldG9uL3NrZWxldG9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdWktY29tcG9uZW50cy9za2VsZXRvbi9za2VsZXRvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQUE7QUFDQTtFQUNJLGlCQUFBO0FDQ0o7QURFRTtFQUNFLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC91aS1jb21wb25lbnRzL3NrZWxldG9uL3NrZWxldG9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEN1c3RvbSBTa2VsZXRvbiBMaW5lIEhlaWdodCBhbmQgTWFyZ2luICovXG4uY3VzdG9tLXNrZWxldG9uIGlvbi1za2VsZXRvbi10ZXh0IHtcbiAgICBsaW5lLWhlaWdodDogMTNweDtcbiAgfVxuICBcbiAgLmN1c3RvbS1za2VsZXRvbiBpb24tc2tlbGV0b24tdGV4dDpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH0iLCIvKiBDdXN0b20gU2tlbGV0b24gTGluZSBIZWlnaHQgYW5kIE1hcmdpbiAqL1xuLmN1c3RvbS1za2VsZXRvbiBpb24tc2tlbGV0b24tdGV4dCB7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xufVxuXG4uY3VzdG9tLXNrZWxldG9uIGlvbi1za2VsZXRvbi10ZXh0Omxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/ui-components/skeleton/skeleton.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/ui-components/skeleton/skeleton.page.ts ***!
    \*********************************************************/

  /*! exports provided: SkeletonPage */

  /***/
  function srcAppUiComponentsSkeletonSkeletonPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkeletonPage", function () {
      return SkeletonPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SkeletonPage = /*#__PURE__*/function () {
      function SkeletonPage() {
        _classCallCheck(this, SkeletonPage);
      }

      _createClass(SkeletonPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          setTimeout(function () {
            _this.data = {
              'heading': 'Normal text',
              'para1': 'Lorem ipsum dolor sit amet, consectetur',
              'para2': 'adipiscing elit.'
            };
          }, 5000);
        }
      }]);

      return SkeletonPage;
    }();

    SkeletonPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-skeleton',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./skeleton.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/skeleton/skeleton.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./skeleton.page.scss */
      "./src/app/ui-components/skeleton/skeleton.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SkeletonPage);
    /***/
  }
}]);
//# sourceMappingURL=ui-components-skeleton-skeleton-module-es5.js.map