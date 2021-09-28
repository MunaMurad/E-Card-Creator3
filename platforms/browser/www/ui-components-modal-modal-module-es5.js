function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-components-modal-modal-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/modal/modal.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/modal/modal.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiComponentsModalModalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent={true}>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Modal</ion-title>\n  </ion-toolbar>\n</ion-header>,\n\n<ion-content fullscreen class=\"component-content\">\n\n  <div class=\"ion-padding-start ion-padding-end\">\n    <ion-button expand=\"block\" (click)=\"presentModalSwipe()\">Open Modal</ion-button>\n\n    <ion-button color=\"medium\" expand=\"block\" (click)=\"openBottomModal()\">Bottom modal</ion-button>\n    <ion-button color=\"medium\" expand=\"block\"  (click)=\"openTopModal()\">Top modal</ion-button>\n    <ion-button color=\"medium\" expand=\"block\" (click)=\"openMiddleModal()\">Middle modal</ion-button>\n    <ion-button color=\"medium\" expand=\"block\"  (click)=\"openFullModal()\">Full modal</ion-button>\n    <ion-button color=\"medium\" expand=\"block\"  (click)=\"openSwipeableModal()\">Swipe to close modal</ion-button>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/ui-components/modal/modal-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/ui-components/modal/modal-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: ModalPageRoutingModule */

  /***/
  function srcAppUiComponentsModalModalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalPageRoutingModule", function () {
      return ModalPageRoutingModule;
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


    var _modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./modal.page */
    "./src/app/ui-components/modal/modal.page.ts");

    var routes = [{
      path: '',
      component: _modal_page__WEBPACK_IMPORTED_MODULE_3__["ModalPage"]
    }];

    var ModalPageRoutingModule = function ModalPageRoutingModule() {
      _classCallCheck(this, ModalPageRoutingModule);
    };

    ModalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ModalPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/ui-components/modal/modal.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/ui-components/modal/modal.module.ts ***!
    \*****************************************************/

  /*! exports provided: ModalPageModule */

  /***/
  function srcAppUiComponentsModalModalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalPageModule", function () {
      return ModalPageModule;
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


    var _modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modal-routing.module */
    "./src/app/ui-components/modal/modal-routing.module.ts");
    /* harmony import */


    var _modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./modal.page */
    "./src/app/ui-components/modal/modal.page.ts");

    var ModalPageModule = function ModalPageModule() {
      _classCallCheck(this, ModalPageModule);
    };

    ModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalPageRoutingModule"]],
      declarations: [_modal_page__WEBPACK_IMPORTED_MODULE_6__["ModalPage"]]
    })], ModalPageModule);
    /***/
  },

  /***/
  "./src/app/ui-components/modal/modal.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/ui-components/modal/modal.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiComponentsModalModalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".modal-wrapper {\n  height: 300px;\n  bottom: 0px;\n  position: absolute;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZXRoZWUvSW9uaWNQcm9qZWN0cy9faW9uaWM1L2lvbmljNWZ1bGxhcHBfZmluYWwvc3JjL2FwcC91aS1jb21wb25lbnRzL21vZGFsL21vZGFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdWktY29tcG9uZW50cy9tb2RhbC9tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdWktY29tcG9uZW50cy9tb2RhbC9tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtd3JhcHBlciB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBib3R0b206IDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgIGRpc3BsYXk6IGJsb2NrOyAgXG59IiwiLm1vZGFsLXdyYXBwZXIge1xuICBoZWlnaHQ6IDMwMHB4O1xuICBib3R0b206IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/ui-components/modal/modal.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/ui-components/modal/modal.page.ts ***!
    \***************************************************/

  /*! exports provided: ModalPage */

  /***/
  function srcAppUiComponentsModalModalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalPage", function () {
      return ModalPage;
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
    /* harmony import */


    var _modal_content_modal_content_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../modal-content/modal-content.page */
    "./src/app/ui-components/modal-content/modal-content.page.ts");

    var ModalPage = /*#__PURE__*/function () {
      function ModalPage(modalController, routerOutlet) {
        _classCallCheck(this, ModalPage);

        this.modalController = modalController;
        this.routerOutlet = routerOutlet;
      }

      _createClass(ModalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "settings",
        value: function settings() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _modal_content_modal_content_page__WEBPACK_IMPORTED_MODULE_3__["ModalContentPage"],
                      componentProps: {
                        website: 'edupala.com'
                      },
                      cssClass: 'setting-modal',
                      backdropDismiss: false
                    });

                  case 2:
                    modal = _context.sent;
                    modal.present(); // this.dataFromModal = await modal.onWillDismiss();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentModal",
        value: function presentModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalController.create({
                      component: _modal_content_modal_content_page__WEBPACK_IMPORTED_MODULE_3__["ModalContentPage"]
                    });

                  case 2:
                    modal = _context2.sent;
                    _context2.next = 5;
                    return modal.present();

                  case 5:
                    return _context2.abrupt("return", _context2.sent);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "openSwipeableModal",
        value: function openSwipeableModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var modal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalController.create({
                      component: _modal_content_modal_content_page__WEBPACK_IMPORTED_MODULE_3__["ModalContentPage"],
                      swipeToClose: true,
                      presentingElement: this.routerOutlet.nativeEl
                    });

                  case 2:
                    modal = _context3.sent;
                    _context3.next = 5;
                    return modal.present();

                  case 5:
                    return _context3.abrupt("return", _context3.sent);

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        } //******** bottom ***********//

      }, {
        key: "openBottomModal",
        value: function openBottomModal() {
          this.modalController.create({
            component: _modal_content_modal_content_page__WEBPACK_IMPORTED_MODULE_3__["ModalContentPage"],
            cssClass: 'from-bottom-modal',
            componentProps: {// data: this.placeArray,
              // index: image
            }
          }).then(function (modal) {
            modal.present();
          });
        } //******** Top ***********//

      }, {
        key: "openTopModal",
        value: function openTopModal() {
          this.modalController.create({
            component: _modal_content_modal_content_page__WEBPACK_IMPORTED_MODULE_3__["ModalContentPage"],
            cssClass: 'from-top-modal',
            componentProps: {// data: this.placeArray,
              // index: image
            }
          }).then(function (modal) {
            modal.present();
          });
        } //******** Middle ***********//

      }, {
        key: "openMiddleModal",
        value: function openMiddleModal() {
          this.modalController.create({
            component: _modal_content_modal_content_page__WEBPACK_IMPORTED_MODULE_3__["ModalContentPage"],
            cssClass: 'from-middle-modal',
            componentProps: {// data: this.placeArray,
              // index: image
            }
          }).then(function (modal) {
            modal.present();
          });
        } //******** Full ***********//

      }, {
        key: "openFullModal",
        value: function openFullModal(image) {
          this.modalController.create({
            component: _modal_content_modal_content_page__WEBPACK_IMPORTED_MODULE_3__["ModalContentPage"],
            componentProps: {// data: this.placeArray,
              // index: image
            }
          }).then(function (modal) {
            modal.present();
          });
        }
      }]);

      return ModalPage;
    }();

    ModalPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"]
      }];
    };

    ModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./modal.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/modal/modal.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./modal.page.scss */
      "./src/app/ui-components/modal/modal.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"]])], ModalPage);
    /***/
  }
}]);
//# sourceMappingURL=ui-components-modal-modal-module-es5.js.map