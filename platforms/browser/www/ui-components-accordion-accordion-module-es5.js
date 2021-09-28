function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-components-accordion-accordion-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/accordion/accordion.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/accordion/accordion.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiComponentsAccordionAccordionPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Accordion</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/ui-components/accordion/accordion-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/ui-components/accordion/accordion-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: AccordionPageRoutingModule */

  /***/
  function srcAppUiComponentsAccordionAccordionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccordionPageRoutingModule", function () {
      return AccordionPageRoutingModule;
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


    var _accordion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./accordion.page */
    "./src/app/ui-components/accordion/accordion.page.ts");

    var routes = [{
      path: '',
      component: _accordion_page__WEBPACK_IMPORTED_MODULE_3__["AccordionPage"]
    }];

    var AccordionPageRoutingModule = function AccordionPageRoutingModule() {
      _classCallCheck(this, AccordionPageRoutingModule);
    };

    AccordionPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AccordionPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/ui-components/accordion/accordion.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/ui-components/accordion/accordion.module.ts ***!
    \*************************************************************/

  /*! exports provided: AccordionPageModule */

  /***/
  function srcAppUiComponentsAccordionAccordionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccordionPageModule", function () {
      return AccordionPageModule;
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


    var _accordion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./accordion-routing.module */
    "./src/app/ui-components/accordion/accordion-routing.module.ts");
    /* harmony import */


    var _accordion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./accordion.page */
    "./src/app/ui-components/accordion/accordion.page.ts");

    var AccordionPageModule = function AccordionPageModule() {
      _classCallCheck(this, AccordionPageModule);
    };

    AccordionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _accordion_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccordionPageRoutingModule"]],
      declarations: [_accordion_page__WEBPACK_IMPORTED_MODULE_6__["AccordionPage"]]
    })], AccordionPageModule);
    /***/
  },

  /***/
  "./src/app/ui-components/accordion/accordion.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/ui-components/accordion/accordion.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiComponentsAccordionAccordionPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".expand-wrapper {\n  height: 0;\n  transition: 0.2s linear;\n}\n\n.collapsed {\n  height: 0 !important;\n}\n\n.expand-item {\n  position: relative;\n  width: 100%;\n  max-height: 32px;\n  transition: max-height 0.1s ease-out;\n  overflow: hidden;\n}\n\n.expand-item.active {\n  max-height: 200px;\n  transition: max-height 0.3s ease-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZXRoZWUvSW9uaWNQcm9qZWN0cy9faW9uaWM1L2lvbmljNWZ1bGxhcHBfZmluYWwvc3JjL2FwcC91aS1jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24ucGFnZS5zY3NzIiwic3JjL2FwcC91aS1jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUU7RUFDRSxvQkFBQTtBQ0NKOztBRElBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FDREo7O0FESUU7RUFDRSxpQkFBQTtFQUNBLG9DQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC91aS1jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4cGFuZC13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IDA7XG4gICAgdHJhbnNpdGlvbjogMC4ycyBsaW5lYXI7XG4gIH0gIFxuICBcbiAgLmNvbGxhcHNlZCB7XG4gICAgaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIC8vIFxuXG4uZXhwYW5kLWl0ZW17XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDMycHg7XG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjFzIGVhc2Utb3V0O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgXG4gIC5leHBhbmQtaXRlbS5hY3RpdmUge1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcyBlYXNlLW91dDtcbiAgfVxuICAiLCIuZXhwYW5kLXdyYXBwZXIge1xuICBoZWlnaHQ6IDA7XG4gIHRyYW5zaXRpb246IDAuMnMgbGluZWFyO1xufVxuXG4uY29sbGFwc2VkIHtcbiAgaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG5cbi5leHBhbmQtaXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDMycHg7XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4xcyBlYXNlLW91dDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmV4cGFuZC1pdGVtLmFjdGl2ZSB7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuM3MgZWFzZS1vdXQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/ui-components/accordion/accordion.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/ui-components/accordion/accordion.page.ts ***!
    \***********************************************************/

  /*! exports provided: AccordionPage */

  /***/
  function srcAppUiComponentsAccordionAccordionPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccordionPage", function () {
      return AccordionPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AccordionPage = /*#__PURE__*/function () {
      function AccordionPage() {
        _classCallCheck(this, AccordionPage);
      }

      _createClass(AccordionPage, [{
        key: "expandItem",
        value: function expandItem(itemId) {
          if (this.isItemExpanded(itemId)) {
            this.shownItem = null;
          } else {
            this.shownItem = itemId;
          }
        }
      }, {
        key: "isItemExpanded",
        value: function isItemExpanded(itemId) {
          return this.shownItem === itemId;
        } // this.expandItem = function(item) {
        //   if (this.isItemExpanded(itemId)) {
        //     $scope.shownItem = null;
        //   } else {
        //     $scope.shownItem = item;
        //   }
        // };
        // $scope.isItemExpanded = function(item) {
        //   return $scope.shownItem === item;
        // };

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AccordionPage;
    }();

    AccordionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-accordion',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./accordion.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/accordion/accordion.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./accordion.page.scss */
      "./src/app/ui-components/accordion/accordion.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], AccordionPage);
    /***/
  }
}]);
//# sourceMappingURL=ui-components-accordion-accordion-module-es5.js.map