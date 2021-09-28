function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-colors-ui-colors-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-colors/ui-colors.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-colors/ui-colors.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiColorsUiColorsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header >\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Theme color</ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n\n    \n    <ion-segment [(ngModel)]=\"themeView\"  >\n      <ion-segment-button value=\"md\">Outline</ion-segment-button>\n      <ion-segment-button value=\"ios\">Filled</ion-segment-button>\n      <ion-segment-button value=\"ionic\">Sharp</ion-segment-button>\n    </ion-segment>\n\n\n  </ion-toolbar>\n</ion-header>,\n\n<ion-content class=\"ion-padding-top ion-text-center\">\n  <div *ngIf=\"themeView==='md'\">\n  \n    <ion-grid>\n      <ion-row>\n        <ion-col *ngFor=\"let color of colors\" size=\"6\">\n          <div\n            #colorBlock\n            [ngClass]=\"'color-block ion-color ion-color-' + color\">\n            <b>{{ color }}</b><br>\n            {{ getColorBase(colorBlock)}}\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n\n  <div *ngIf=\"themeView==='ios'\">\n    <ion-grid>\n      <ion-row>\n        <ion-col *ngFor=\"let color of colors\" size=\"6\">\n          <div\n            #colorBlock\n            [ngClass]=\"'color-block ion-color ion-color-' + color\">\n            <b>{{ color }}</b><br>\n            {{ getColorBase(colorBlock)}}\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/ui-colors/ui-colors-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/ui-colors/ui-colors-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: UiColorsPageRoutingModule */

  /***/
  function srcAppUiColorsUiColorsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiColorsPageRoutingModule", function () {
      return UiColorsPageRoutingModule;
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


    var _ui_colors_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ui-colors.page */
    "./src/app/ui-colors/ui-colors.page.ts");

    var routes = [{
      path: '',
      component: _ui_colors_page__WEBPACK_IMPORTED_MODULE_3__["UiColorsPage"]
    }];

    var UiColorsPageRoutingModule = function UiColorsPageRoutingModule() {
      _classCallCheck(this, UiColorsPageRoutingModule);
    };

    UiColorsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UiColorsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/ui-colors/ui-colors.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/ui-colors/ui-colors.module.ts ***!
    \***********************************************/

  /*! exports provided: UiColorsPageModule */

  /***/
  function srcAppUiColorsUiColorsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiColorsPageModule", function () {
      return UiColorsPageModule;
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


    var _ui_colors_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ui-colors-routing.module */
    "./src/app/ui-colors/ui-colors-routing.module.ts");
    /* harmony import */


    var _ui_colors_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ui-colors.page */
    "./src/app/ui-colors/ui-colors.page.ts");

    var UiColorsPageModule = function UiColorsPageModule() {
      _classCallCheck(this, UiColorsPageModule);
    };

    UiColorsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ui_colors_routing_module__WEBPACK_IMPORTED_MODULE_5__["UiColorsPageRoutingModule"]],
      declarations: [_ui_colors_page__WEBPACK_IMPORTED_MODULE_6__["UiColorsPage"]]
    })], UiColorsPageModule);
    /***/
  },

  /***/
  "./src/app/ui-colors/ui-colors.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/ui-colors/ui-colors.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiColorsUiColorsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-grid {\n  height: 91%;\n}\n\nion-row {\n  height: 100%;\n}\n\n.color-block {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  border-radius: 4px;\n  border: 5px solid var(--ion-color-step-100, #f6f6f6);\n}\n\n.color-block.ion-color {\n  background: var(--ion-color-base);\n  color: var(--ion-color-contrast);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZXRoZWUvSW9uaWNQcm9qZWN0cy9faW9uaWM1L2lvbmljNWZ1bGxhcHBfZmluYWwvc3JjL2FwcC91aS1jb2xvcnMvdWktY29sb3JzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdWktY29sb3JzL3VpLWNvbG9ycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBRUEsc0JBQUE7RUFFQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsWUFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtFQUNBLG9EQUFBO0FDSEY7O0FETUE7RUFDRSxpQ0FBQTtFQUNBLGdDQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC91aS1jb2xvcnMvdWktY29sb3JzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ncmlkIHtcbiAgaGVpZ2h0OiA5MSU7XG59XG5cbmlvbi1yb3cge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb2xvci1ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTAwLCAjZjZmNmY2KTtcbn1cblxuLmNvbG9yLWJsb2NrLmlvbi1jb2xvciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1iYXNlKTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb250cmFzdCk7XG59IiwiaW9uLWdyaWQge1xuICBoZWlnaHQ6IDkxJTtcbn1cblxuaW9uLXJvdyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbG9yLWJsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTAwLCAjZjZmNmY2KTtcbn1cblxuLmNvbG9yLWJsb2NrLmlvbi1jb2xvciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1iYXNlKTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb250cmFzdCk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/ui-colors/ui-colors.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/ui-colors/ui-colors.page.ts ***!
    \*********************************************/

  /*! exports provided: UiColorsPage */

  /***/
  function srcAppUiColorsUiColorsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiColorsPage", function () {
      return UiColorsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UiColorsPage = /*#__PURE__*/function () {
      function UiColorsPage() {
        _classCallCheck(this, UiColorsPage);

        this.colors = ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'light', 'medium', 'dark'];
        this.mdColor = [];
        this.iosColor = [];
        this.flatColor = [];
        this.solarColor = [];
        this.tangoColor = [];
        this.miscColor = [];
        this.themeView = "ionic";
        this.color = 'solar-base01';
        this.mdColor = [{
          colorName: 'red',
          colorCode: '#f44336'
        }, {
          colorName: 'pink',
          colorCode: '#EA1E63'
        }, {
          colorName: 'purple',
          colorCode: '#f44336'
        }, {
          colorName: 'deeppurple',
          colorCode: '#673ab7'
        }, {
          colorName: 'indigo',
          colorCode: '#3f51b5'
        }, {
          colorName: 'blue',
          colorCode: '#2196f3'
        }, {
          colorName: 'blue2',
          colorCode: '#0034a7'
        }, {
          colorName: 'lightblue',
          colorCode: '#03a9f4'
        }, {
          colorName: 'cyan',
          colorCode: '#00bcd4'
        }, {
          colorName: 'teal',
          colorCode: '#009688'
        }, {
          colorName: 'green',
          colorCode: '#4caf50'
        }, {
          colorName: 'lightgreen',
          colorCode: '#8dc34b'
        }, {
          colorName: 'lime',
          colorCode: '#cddc39'
        }, {
          colorName: 'yellow',
          colorCode: '#ffeb3b'
        }, {
          colorName: 'amber',
          colorCode: '#ffc107'
        }, {
          colorName: 'orange',
          colorCode: '#ff9800'
        }, {
          colorName: 'deeporange',
          colorCode: '#ff5722'
        }, {
          colorName: 'brown',
          colorCode: '#795548'
        }, {
          colorName: 'gray',
          colorCode: '#607d8b'
        }, {
          colorName: 'bluegray',
          colorCode: '#607D8B'
        }, {
          colorName: 'black',
          colorCode: '#000000'
        }, {
          colorName: 'white',
          colorCode: '#ffffff'
        }];
        this.iosColor = [{
          colorName: 'ios-gray',
          colorCode: '#8e8e93'
        }, {
          colorName: 'ios-lightblue',
          colorCode: '#5ac8fa'
        }, {
          colorName: 'ios-blue',
          colorCode: '#007aff'
        }, {
          colorName: 'ios-yellow',
          colorCode: '#ffcc00'
        }, {
          colorName: 'ios-orange',
          colorCode: '#ff9500'
        }, {
          colorName: 'ios-pink',
          colorCode: '#ff2d55'
        }, {
          colorName: 'ios-green',
          colorCode: '#4cd964'
        }, {
          colorName: 'ios-red',
          colorCode: '#ff3b30'
        }]; // this.flatColor = [
        //   {colorName:'flat-turquoise',colorCode:'#1abc9c'},
        //   {colorName:'flat-green-sea',colorCode:'#16a085'},
        //   {colorName:'flat-emerald',colorCode:'#2ecc71'},
        //   {colorName:'flat-peter-river',colorCode:'#3498db'},
        //   {colorName:'flat-belize-hole',colorCode:'#2980b9'},
        //   {colorName:'flat-amethyst',colorCode:'#9b59b6'},
        //   {colorName:'flat-wisteria',colorCode:'#8e44ad'},
        //   {colorName:'flat-wet-asphalt',colorCode:'#34495e'},
        //   {colorName:'flat-midnight-blue',colorCode:'#2c3e50'},
        //   {colorName:'flat-sun-flower',colorCode:'#f1c40f'},
        //   {colorName:'flat-orange',colorCode:'#f39c12'},
        //   {colorName:'flat-carrot',colorCode:'#e67e22'},
        //   {colorName:'flat-pumpkin',colorCode:'#d35400'},
        //   {colorName:'flat-alizarin',colorCode:'#e74c3c'},
        //   {colorName:'flat-pomegrenade',colorCode:'#c0392b'},
        //   {colorName:'flat-clouds',colorCode:'#e67e22'},
        //   {colorName:'flat-silver',colorCode:'#bdc3c7'},
        //   {colorName:'flat-concrete',colorCode:'#95a5a6'},
        //   {colorName:'flat-asbesthos',colorCode:'#7f8c8d'}
        // ];   
        // this.solarColor = [
        //   {colorName:'solar-yellow',colorCode:'#b58900'},
        //   {colorName:'solar-orange',colorCode:'#cb4b16'},
        //   {colorName:'solar-red',colorCode:'#dc322f'},
        //   {colorName:'solar-magenta',colorCode:'#d33682'},
        //   {colorName:'solar-violet',colorCode:'#6c71c4'},
        //   {colorName:'solar-blue',colorCode:'#268bd2'},
        //   {colorName:'solar-base03',colorCode:'#002b36'},
        //   {colorName:'solar-base02',colorCode:'#073642'},
        //   {colorName:'solar-base01',colorCode:'#586e75'},
        //   {colorName:'solar-base00',colorCode:'#657b83'},
        //   {colorName:'solar-base0',colorCode:'#839496'},
        //   {colorName:'solar-base1',colorCode:'#93a1a1'},
        //   {colorName:'solar-base2',colorCode:'#eee8d5'},
        //   {colorName:'solar-base3',colorCode:'#fdf6e3'}
        // ];   
        // this.tangoColor = [
        //   {colorName:'tango-aluminium',colorCode:'#d3d7cf'},
        //   {colorName:'tango-butter',colorCode:'#edd400'},
        //   {colorName:'tango-chameleon',colorCode:'#73d216'},
        //   {colorName:'tango-orange',colorCode:'#f57900'},
        //   {colorName:'tango-chocolate',colorCode:'#c17d11'},
        //   {colorName:'tango-sky-blue',colorCode:'#3465a4'},
        //   {colorName:'tango-plum',colorCode:'#75507b'},
        //   {colorName:'tango-slate',colorCode:'#555753'},
        //   {colorName:'tango-scarlet-red',colorCode:'#cc0000'}
        // ];
      }

      _createClass(UiColorsPage, [{
        key: "getColorBase",
        value: function getColorBase(colorBlock) {
          var color = window.getComputedStyle(colorBlock).getPropertyValue('--ion-color-base');
          return color;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UiColorsPage;
    }();

    UiColorsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ui-colors',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ui-colors.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-colors/ui-colors.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ui-colors.page.scss */
      "./src/app/ui-colors/ui-colors.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], UiColorsPage);
    /***/
  }
}]);
//# sourceMappingURL=ui-colors-ui-colors-module-es5.js.map