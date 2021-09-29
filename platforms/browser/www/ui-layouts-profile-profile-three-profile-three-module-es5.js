function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-layouts-profile-profile-three-profile-three-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/profile/profile-three/profile-three.page.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/profile/profile-three/profile-three.page.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiLayoutsProfileProfileThreeProfileThreePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header >\n  <ion-toolbar color=\"dark\">\n      <ion-buttons slot=\"start\">\n          <ion-button (click)=\"toggleSideMenu()\">\n              <ion-icon class=\"menu-icon\"  name=\"md-menu\" color=\"light\" slot=\"start\"></ion-icon>\n          </ion-button>\n      </ion-buttons>\n    <ion-title slot=\"start\">PROFILE 1</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div id=\"profile1-info\" class=\"test-class\" padding>\n      <img id=\"profile1-image\" class=\"pop-in\" [src]=\"(profile | async)?.imgProfile\"/>\n      <h3 id=\"profile1-name\">{{(profile | async)?.name}}</h3>\n      <!--<p>{{(profile2 | async)?.company}} &bull; {{(profile2 | async)?.position}}</p> -->\n      <p class=\"profile1-description\">{{(profile | async)?.position}} of {{(profile | async)?.company}}</p>\n      <ion-button  *ngIf=\"!following\"  color=\"green\" (click)=\"follow()\">Follow</ion-button>\n      <ion-button *ngIf=\"following\"  color=\"light\" (click)=\"follow()\">\n        <ion-icon slot=\"start\" name=\"checkmark\"></ion-icon>\n        Following\n      </ion-button>\n  \n   \n      <ion-grid >\n        <ion-row class=\"profile1-numbers\">\n  \n          <ion-col size=\"4\">\n            <span>{{(profile | async)?.follower}}</span>\n            <p>Followers</p>\n          </ion-col>\n  \n          <ion-col size=\"4\">   \n            <span>{{(profile | async)?.following}}</span>\n            <p>Following</p>\n          </ion-col>\n  \n          <ion-col size=\"4\">\n            <span>{{(profile | async)?.following}}</span>\n            <p>Following</p>\n          </ion-col>\n  \n        </ion-row>\n      </ion-grid>\n  \n    </div>\n  \n  \n  <!--***********  About  ***********-->\n  <ion-item class=\"margin-top-5\" lines=\"none\">\n      <h1 class=\"margin-top-5 main-header5\">About</h1>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <p >{{(profile | async)?.aboutMe}}</p>\n  </ion-item>\n  \n  <!--***********  Contact  ***********-->\n  <ion-item class=\"margin-top-5\" lines=\"none\">\n      <h1 class=\"margin-top-5 main-header5\">Contact</h1>\n  </ion-item>\n    <ion-list>\n        <ion-item lines=\"none\">\n          <ion-icon slot=\"start\" name=\"ios-mail\" item-left></ion-icon>\n          <ion-label>\n              <h2>ceo@cemo.com</h2>\n              <p>work email</p>\n          </ion-label>\n\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-icon slot=\"start\" name=\"ios-call\" item-left></ion-icon>\n        <ion-label>\n            <h2>009923124322</h2>\n            <p>mobile phone</p>\n        </ion-label>\n\n      </ion-item>\n\n      <ion-item lines=\"none\">\n          <ion-icon slot=\"start\" name=\"logo-linkedin\" item-left></ion-icon>\n          <ion-label>\n              <h2>linkedin.com/cemo</h2>\n              <p>linked in </p>\n          </ion-label>\n\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-icon slot=\"start\" name=\"logo-facebook\" item-left></ion-icon>\n        <ion-label>\n            <h2>facebook.com/cemo</h2>\n            <p>facebook</p>\n        </ion-label>\n\n      </ion-item>\n      <ion-item lines=\"none\">\n          <ion-icon slot=\"start\" name=\"logo-skype\" item-left></ion-icon>\n          <ion-label>\n              <h2>cemo@outlook.com</h2>\n              <p>skype</p>\n          </ion-label>\n\n      </ion-item>\n    </ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/ui-layouts/profile/profile-three/profile-three-routing.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/ui-layouts/profile/profile-three/profile-three-routing.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: ProfileThreePageRoutingModule */

  /***/
  function srcAppUiLayoutsProfileProfileThreeProfileThreeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileThreePageRoutingModule", function () {
      return ProfileThreePageRoutingModule;
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


    var _profile_three_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile-three.page */
    "./src/app/ui-layouts/profile/profile-three/profile-three.page.ts");

    var routes = [{
      path: '',
      component: _profile_three_page__WEBPACK_IMPORTED_MODULE_3__["ProfileThreePage"]
    }];

    var ProfileThreePageRoutingModule = function ProfileThreePageRoutingModule() {
      _classCallCheck(this, ProfileThreePageRoutingModule);
    };

    ProfileThreePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProfileThreePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/ui-layouts/profile/profile-three/profile-three.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/ui-layouts/profile/profile-three/profile-three.module.ts ***!
    \**************************************************************************/

  /*! exports provided: ProfileThreePageModule */

  /***/
  function srcAppUiLayoutsProfileProfileThreeProfileThreeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileThreePageModule", function () {
      return ProfileThreePageModule;
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


    var _profile_three_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile-three-routing.module */
    "./src/app/ui-layouts/profile/profile-three/profile-three-routing.module.ts");
    /* harmony import */


    var _profile_three_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile-three.page */
    "./src/app/ui-layouts/profile/profile-three/profile-three.page.ts");

    var ProfileThreePageModule = function ProfileThreePageModule() {
      _classCallCheck(this, ProfileThreePageModule);
    };

    ProfileThreePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_three_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileThreePageRoutingModule"]],
      declarations: [_profile_three_page__WEBPACK_IMPORTED_MODULE_6__["ProfileThreePage"]]
    })], ProfileThreePageModule);
    /***/
  },

  /***/
  "./src/app/ui-layouts/profile/profile-three/profile-three.page.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/ui-layouts/profile/profile-three/profile-three.page.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiLayoutsProfileProfileThreeProfileThreePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#profile1-image {\n  display: block;\n  border-radius: 50%;\n  width: auto;\n  height: 110px;\n  margin: 0 auto 0;\n  border-width: 2px;\n  border-style: solid;\n  border-color: rgba(255, 255, 255, 0.1);\n  -o-border-image: initial;\n     border-image: initial;\n}\n\n#profile1-info {\n  width: 100%;\n  text-align: center;\n}\n\n#profile1-name {\n  color: #444;\n  font-size: 22px;\n}\n\n.profile1-description {\n  font-size: 15px;\n  color: #888;\n}\n\n.profile1-numbers p {\n  color: #888;\n  font-size: 18px;\n  margin-top: 3px;\n}\n\n.profile1-numbers span {\n  font-weight: bold;\n  font-size: 18px;\n  color: #34354c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZXRoZWUvSW9uaWNQcm9qZWN0cy9faW9uaWM1L2lvbmljNWZ1bGxhcHBfZmluYWwvc3JjL2FwcC91aS1sYXlvdXRzL3Byb2ZpbGUvcHJvZmlsZS10aHJlZS9wcm9maWxlLXRocmVlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdWktbGF5b3V0cy9wcm9maWxlL3Byb2ZpbGUtdGhyZWUvcHJvZmlsZS10aHJlZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBRUEsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNDQUFBO0VBQ0Esd0JBQUE7S0FBQSxxQkFBQTtBQ0FKOztBREdFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDQUo7O0FERUU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNFSjs7QURFSTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0NOOztBRENJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NOIiwiZmlsZSI6InNyYy9hcHAvdWktbGF5b3V0cy9wcm9maWxlL3Byb2ZpbGUtdGhyZWUvcHJvZmlsZS10aHJlZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcHJvZmlsZTEtaW1hZ2Uge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgICBtYXJnaW46IDAgYXV0byAwO1xuICAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsMC4xKTtcbiAgICBib3JkZXItaW1hZ2U6IGluaXRpYWw7XG4gICAgLy8gYm94LXNoYWRvdzogMHB4IDExcHggMjBweCAtM3B4IHJnYmEoMTQyLCAxMzYsIDE0NiwgMC43NSk7XG4gIH1cbiAgI3Byb2ZpbGUxLWluZm8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAjcHJvZmlsZTEtbmFtZSB7XG4gICAgY29sb3I6ICM0NDQ7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG4gIC5wcm9maWxlMS1kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAjODg4O1xuICB9XG5cbiAucHJvZmlsZTEtbnVtYmVycyB7XG4gICAgcCB7XG4gICAgICBjb2xvcjogIzg4ODtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICB9XG4gICAgc3BhbiB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGNvbG9yOiAjMzQzNTRjO1xuICAgIH1cbiAgfSBcbiAgIiwiI3Byb2ZpbGUxLWltYWdlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMTEwcHg7XG4gIG1hcmdpbjogMCBhdXRvIDA7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYm9yZGVyLWltYWdlOiBpbml0aWFsO1xufVxuXG4jcHJvZmlsZTEtaW5mbyB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNwcm9maWxlMS1uYW1lIHtcbiAgY29sb3I6ICM0NDQ7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLnByb2ZpbGUxLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzg4ODtcbn1cblxuLnByb2ZpbGUxLW51bWJlcnMgcCB7XG4gIGNvbG9yOiAjODg4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cbi5wcm9maWxlMS1udW1iZXJzIHNwYW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzM0MzU0Yztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/ui-layouts/profile/profile-three/profile-three.page.ts":
  /*!************************************************************************!*\
    !*** ./src/app/ui-layouts/profile/profile-three/profile-three.page.ts ***!
    \************************************************************************/

  /*! exports provided: ProfileThreePage */

  /***/
  function srcAppUiLayoutsProfileProfileThreeProfileThreePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileThreePage", function () {
      return ProfileThreePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProfileThreePage = /*#__PURE__*/function () {
      function ProfileThreePage() {
        _classCallCheck(this, ProfileThreePage);
      }

      _createClass(ProfileThreePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProfileThreePage;
    }();

    ProfileThreePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile-three',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile-three.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/profile/profile-three/profile-three.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile-three.page.scss */
      "./src/app/ui-layouts/profile/profile-three/profile-three.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ProfileThreePage);
    /***/
  }
}]);
//# sourceMappingURL=ui-layouts-profile-profile-three-profile-three-module-es5.js.map