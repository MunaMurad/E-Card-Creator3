function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-components-toast-toast-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/toast/toast.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/toast/toast.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiComponentsToastToastPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-title>Toast</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen class=\"ion-padding\">\n  <ion-button expand=\"block\">Pair <ion-icon slot=\"end\" name=\"bluetooth\"></ion-icon></ion-button>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/ui-components/toast/toast-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/ui-components/toast/toast-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: ToastPageRoutingModule */

  /***/
  function srcAppUiComponentsToastToastRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastPageRoutingModule", function () {
      return ToastPageRoutingModule;
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


    var _toast_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./toast.page */
    "./src/app/ui-components/toast/toast.page.ts");

    var routes = [{
      path: '',
      component: _toast_page__WEBPACK_IMPORTED_MODULE_3__["ToastPage"]
    }];

    var ToastPageRoutingModule = function ToastPageRoutingModule() {
      _classCallCheck(this, ToastPageRoutingModule);
    };

    ToastPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ToastPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/ui-components/toast/toast.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/ui-components/toast/toast.module.ts ***!
    \*****************************************************/

  /*! exports provided: ToastPageModule */

  /***/
  function srcAppUiComponentsToastToastModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastPageModule", function () {
      return ToastPageModule;
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


    var _toast_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./toast-routing.module */
    "./src/app/ui-components/toast/toast-routing.module.ts");
    /* harmony import */


    var _toast_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./toast.page */
    "./src/app/ui-components/toast/toast.page.ts");

    var ToastPageModule = function ToastPageModule() {
      _classCallCheck(this, ToastPageModule);
    };

    ToastPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _toast_routing_module__WEBPACK_IMPORTED_MODULE_5__["ToastPageRoutingModule"]],
      declarations: [_toast_page__WEBPACK_IMPORTED_MODULE_6__["ToastPage"]]
    })], ToastPageModule);
    /***/
  },

  /***/
  "./src/app/ui-components/toast/toast.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/ui-components/toast/toast.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiComponentsToastToastPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWNvbXBvbmVudHMvdG9hc3QvdG9hc3QucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ui-components/toast/toast.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/ui-components/toast/toast.page.ts ***!
    \***************************************************/

  /*! exports provided: ToastPage */

  /***/
  function srcAppUiComponentsToastToastPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastPage", function () {
      return ToastPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var ToastPage = /*#__PURE__*/function () {
      function ToastPage(toastController) {
        _classCallCheck(this, ToastPage);

        this.toastController = toastController;
      }

      _createClass(ToastPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "presentToast",
        value: function presentToast() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastController.create({
                      message: 'Your settings have been saved.',
                      duration: 2000,
                      color: 'dark'
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentToastWithOptions",
        value: function presentToastWithOptions() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.toastController.create({
                      header: 'Toast header',
                      message: 'Click to Close',
                      position: 'top',
                      buttons: [{
                        side: 'start',
                        icon: 'star',
                        text: 'Favorite',
                        handler: function handler() {
                          console.log('Favorite clicked');
                        }
                      }, {
                        text: 'Done',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Cancel clicked');
                        }
                      }]
                    });

                  case 2:
                    toast = _context2.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return ToastPage;
    }();

    ToastPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    ToastPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-toast',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./toast.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/toast/toast.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./toast.page.scss */
      "./src/app/ui-components/toast/toast.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])], ToastPage);
    /***/
  }
}]);
//# sourceMappingURL=ui-components-toast-toast-module-es5.js.map