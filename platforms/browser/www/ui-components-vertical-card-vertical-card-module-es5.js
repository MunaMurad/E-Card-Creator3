function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-components-vertical-card-vertical-card-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/vertical-card/vertical-card.page.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/vertical-card/vertical-card.page.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiComponentsVerticalCardVerticalCardPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent={true}>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Card</ion-title>\n  </ion-toolbar>\n</ion-header>,\n\n<ion-content fullscreen={true}>\n  <ion-card class=\"action-card\">\n    <img class=\"header-img\" src=\"https://ionic-docs-demo.herokuapp.com/assets/card-top-img.png\" />\n    <ion-card-header>\n      <ion-card-subtitle>Card Subtitle</ion-card-subtitle>\n      <ion-card-title>Card Title</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      Here's a small text description for the card content. Nothing more, nothing less.\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-button size=\"small\">Action</ion-button>\n          </ion-col>\n          <ion-col>\n            <ion-button fill=\"clear\">\n              <ion-icon slot=\"icon-only\" ios=\"heart\" md=\"heart-sharp\"></ion-icon>\n            </ion-button>\n            <ion-button fill=\"clear\">\n              <ion-icon slot=\"icon-only\" ios=\"share\" md=\"share-sharp\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class=\"apps-card\">\n    <ion-card-header>\n      <ion-card-subtitle>Your Daily List</ion-card-subtitle>\n      <ion-card-title>Ionic Apps We Think You'll Love.</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item>\n          <ion-thumbnail slot=\"start\">\n            <img src=\"https://ionic-docs-demo.herokuapp.com/assets/logo-untappd.png\"/>\n          </ion-thumbnail>\n          <ion-label>\n            <h3>Sworkit</h3>\n            <p>The number one fitness app</p>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-thumbnail slot=\"start\">\n            <img src=\"https://ionic-docs-demo.herokuapp.com/assets/logo-shipt.png\"/>\n          </ion-thumbnail>\n          <ion-label>\n            <h3>Untappd</h3>\n            <p>Discover and share beer</p>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-thumbnail slot=\"start\">\n            <img src=\"https://ionic-docs-demo.herokuapp.com/assets/logo-amtrak.png\"/>\n          </ion-thumbnail>\n          <ion-label>\n            <h3>Shipt</h3>\n            <p>Bring the store to your door</p>\n          </ion-label>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-thumbnail slot=\"start\">\n            <img src=\"https://ionic-docs-demo.herokuapp.com/assets/logo-sworkit.png\"/>\n          </ion-thumbnail>\n          <ion-label>\n            <h3>Amtrak</h3>\n            <p>Book a trip today</p>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class=\"coworker-card\">\n    <img src=\"/assets/card-coworker-header.png\" class=\"header-img\"/>\n    <ion-card-content>\n      <ion-list lines=\"none\">\n        <ion-item>\n          <ion-avatar slot=\"start\">\n            <img src=\"/assets/card-coworker-avatar.png\"/>\n          </ion-avatar>\n          <ion-label>\n            <h1>John Parks</h1>\n            <p>Co-worker</p>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-icon name=\"call\" slot=\"start\"></ion-icon>\n          <ion-label>\n            <h2>(555) 418-5602</h2>\n            <p>Mobile phone</p>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\n          <ion-label>\n            <h2>jparks@workmail.com</h2>\n            <p>Work email</p>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\n          <ion-label>\n            <h2>john.parks92@email.com</h2>\n            <p>Personal email</p>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class=\"music-card\">\n    <ion-card-header>\n      <img src=\"/assets/card-album.png\"/>\n    </ion-card-header>\n    <ion-card-content text-center>\n      <h2>29 #Strafford APTS</h2>\n      <p>Bon Iver — 22, A Million</p>\n\n      <ion-progress-bar value={.25}></ion-progress-bar>\n\n      <ion-button color=\"dark\" fill=\"clear\" size=\"small\">\n        <ion-icon slot=\"icon-only\" name=\"shuffle\"></ion-icon>\n      </ion-button>\n      <ion-button color=\"dark\" fill=\"clear\" size=\"large\">\n        <ion-icon slot=\"icon-only\" name=\"play-back\"></ion-icon>\n      </ion-button>\n      <ion-button color=\"dark\" fill=\"clear\" class=\"button-largest\">\n        <ion-icon slot=\"icon-only\" name=\"play\"></ion-icon>\n      </ion-button>\n      <ion-button color=\"dark\" fill=\"clear\" size=\"large\">\n        <ion-icon slot=\"icon-only\" name=\"play-forward\"></ion-icon>\n      </ion-button>\n      <ion-button color=\"dark\" fill=\"clear\" size=\"small\">\n        <ion-icon slot=\"icon-only\" name=\"repeat\"></ion-icon>\n      </ion-button>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <img src=\"/assets/madison.jpg\" />\n    <ion-card-header>\n      <ion-card-subtitle>Destination</ion-card-subtitle>\n      <ion-card-title>Madison, WI</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.\n    </ion-card-content>\n  </ion-card>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/ui-components/vertical-card/vertical-card-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/ui-components/vertical-card/vertical-card-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: VerticalCardPageRoutingModule */

  /***/
  function srcAppUiComponentsVerticalCardVerticalCardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerticalCardPageRoutingModule", function () {
      return VerticalCardPageRoutingModule;
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


    var _vertical_card_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./vertical-card.page */
    "./src/app/ui-components/vertical-card/vertical-card.page.ts");

    var routes = [{
      path: '',
      component: _vertical_card_page__WEBPACK_IMPORTED_MODULE_3__["VerticalCardPage"]
    }];

    var VerticalCardPageRoutingModule = function VerticalCardPageRoutingModule() {
      _classCallCheck(this, VerticalCardPageRoutingModule);
    };

    VerticalCardPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], VerticalCardPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/ui-components/vertical-card/vertical-card.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/ui-components/vertical-card/vertical-card.module.ts ***!
    \*********************************************************************/

  /*! exports provided: VerticalCardPageModule */

  /***/
  function srcAppUiComponentsVerticalCardVerticalCardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerticalCardPageModule", function () {
      return VerticalCardPageModule;
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


    var _vertical_card_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./vertical-card-routing.module */
    "./src/app/ui-components/vertical-card/vertical-card-routing.module.ts");
    /* harmony import */


    var _vertical_card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./vertical-card.page */
    "./src/app/ui-components/vertical-card/vertical-card.page.ts");

    var VerticalCardPageModule = function VerticalCardPageModule() {
      _classCallCheck(this, VerticalCardPageModule);
    };

    VerticalCardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _vertical_card_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerticalCardPageRoutingModule"]],
      declarations: [_vertical_card_page__WEBPACK_IMPORTED_MODULE_6__["VerticalCardPage"]]
    })], VerticalCardPageModule);
    /***/
  },

  /***/
  "./src/app/ui-components/vertical-card/vertical-card.page.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/ui-components/vertical-card/vertical-card.page.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiComponentsVerticalCardVerticalCardPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ios body.dark {\n  --ion-item-background: #1c1c1e;\n}\n\nion-card .header-img {\n  width: 100%;\n  height: 120px;\n}\n\nion-card ion-card-subtitle {\n  color: var(--text-lighter);\n}\n\nion-card ion-card-title {\n  color: var(--text-darker);\n}\n\nion-card ion-card-content {\n  color: var(--text-light);\n}\n\nion-card ion-list ion-item {\n  --padding-start: 0;\n}\n\n/* Action Card */\n\n.action-card ion-grid {\n  --ion-grid-column-padding: 0;\n  padding: 10px 0 0;\n}\n\n.action-card ion-col:last-child {\n  text-align: right;\n}\n\n.md .action-card .button-clear {\n  --background-hover: currentColor;\n  --background-focused: currentColor;\n}\n\n.action-card .button-clear {\n  --color: #c6cede;\n  --border-radius: 50%;\n  --padding-top: 0;\n  --padding-end: 0;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  margin: 0;\n  height: 36px;\n  width: 36px;\n}\n\n/* Apps Card */\n\n.apps-card ion-list ion-thumbnail {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  --border-radius: 14px;\n}\n\n/* Coworker Card */\n\n.coworker-card .header-img {\n  height: 160px;\n}\n\n.coworker-card h1 {\n  font-weight: 600;\n  font-size: 18px;\n}\n\n.coworker-card p {\n  color: var(--text-light);\n}\n\n.coworker-card ion-icon {\n  align-self: start;\n  margin-top: 10px;\n  margin-right: 29px;\n  color: var(--text-lightest);\n}\n\n/* Music Card */\n\n.music-card ion-card-header,\n.music-card ion-card-content {\n  text-align: center;\n}\n\n.music-card img {\n  width: 248px;\n  height: 248px;\n  box-shadow: 0px 2px 8px rgba(2, 8, 20, 0.1), 0px 8px 16px rgba(2, 8, 20, 0.08);\n  border-radius: 6px;\n}\n\n.music-card h2 {\n  font-weight: 600;\n  font-size: 16px;\n  color: var(--text-darker);\n}\n\n.music-card p {\n  color: var(--text-light);\n}\n\n.music-card ion-button {\n  --padding-start: 7px;\n  --padding-end: 7px;\n  margin: 0;\n}\n\n.music-card .button-largest {\n  font-size: 28px;\n}\n\n.music-card ion-progress-bar {\n  margin: 30px 0 20px;\n  --background: var(--background-darker);\n  --progress-background: var(--text-dark);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZXRoZWUvSW9uaWNQcm9qZWN0cy9faW9uaWM1L2lvbmljNWZ1bGxhcHBfZmluYWwvc3JjL2FwcC91aS1jb21wb25lbnRzL3ZlcnRpY2FsLWNhcmQvdmVydGljYWwtY2FyZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3VpLWNvbXBvbmVudHMvdmVydGljYWwtY2FyZC92ZXJ0aWNhbC1jYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0FDQ0o7O0FEYUc7RUFDQyxXQUFBO0VBQ0EsYUFBQTtBQ1ZKOztBRGFHO0VBQ0MsMEJBQUE7QUNWSjs7QURhRztFQUNDLHlCQUFBO0FDVko7O0FEYUc7RUFDQyx3QkFBQTtBQ1ZKOztBRGFHO0VBQ0Msa0JBQUE7QUNWSjs7QURhRSxnQkFBQTs7QUFFQztFQUNDLDRCQUFBO0VBRUEsaUJBQUE7QUNaSjs7QURlRztFQUNDLGlCQUFBO0FDWko7O0FEZUU7RUFDRSxnQ0FBQTtFQUNBLGtDQUFBO0FDWko7O0FEZUc7RUFDQyxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSxTQUFBO0VBRUEsWUFBQTtFQUNBLFdBQUE7QUNkSjs7QURpQkUsY0FBQTs7QUFFQztFQUNDLGVBQUE7RUFDQSxrQkFBQTtFQUVBLHFCQUFBO0FDaEJKOztBRG1CRSxrQkFBQTs7QUFFQztFQUNDLGFBQUE7QUNqQko7O0FEb0JHO0VBQ0MsZ0JBQUE7RUFDQSxlQUFBO0FDakJKOztBRG9CRztFQUNDLHdCQUFBO0FDakJKOztBRG9CRztFQUNDLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUVBLDJCQUFBO0FDbEJKOztBRHFCRSxlQUFBOztBQUVDOztFQUVDLGtCQUFBO0FDbkJKOztBRHNCRztFQUNDLFlBQUE7RUFDQSxhQUFBO0VBRUEsOEVBQUE7RUFDQSxrQkFBQTtBQ3BCSjs7QUR1Qkc7RUFDQyxnQkFBQTtFQUNBLGVBQUE7RUFFQSx5QkFBQTtBQ3JCSjs7QUR3Qkc7RUFDQyx3QkFBQTtBQ3JCSjs7QUR3Qkc7RUFDQyxvQkFBQTtFQUNBLGtCQUFBO0VBRUEsU0FBQTtBQ3RCSjs7QUR5Qkc7RUFDQyxlQUFBO0FDdEJKOztBRHlCRztFQUNDLG1CQUFBO0VBRUEsc0NBQUE7RUFDQSx1Q0FBQTtBQ3ZCSiIsImZpbGUiOiJzcmMvYXBwL3VpLWNvbXBvbmVudHMvdmVydGljYWwtY2FyZC92ZXJ0aWNhbC1jYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pb3MgYm9keS5kYXJrICB7XG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMWMxYzFlO1xuICB9XG4gIFxuLy8gICAge1xuLy8gICAgIC0tYmFja2dyb3VuZC1kYXJrZXI6IHZhcigtLWlvbi1jb2xvci1zdGVwLTIwMCwgI2U5ZWRmMyk7XG4gIFxuLy8gICAgIC0tdGV4dC1kYXJrOiB2YXIoLS1pb24tY29sb3Itc3RlcC04NTAsICMyNzMyM2YpO1xuLy8gICAgIC0tdGV4dC1kYXJrZXI6IHZhcigtLWlvbi1jb2xvci1zdGVwLTk1MCwgIzBlMTUxZik7XG4gIFxuLy8gICAgIC0tdGV4dC1saWdodDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjUwLCAjNWI3MDhiKTtcbi8vICAgICAtLXRleHQtbGlnaHRlcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNTUwLCAjNzM4NDlhKTtcbi8vICAgICAtLXRleHQtbGlnaHRlc3Q6IHZhcigtLWlvbi1jb2xvci1zdGVwLTMwMCwgI2IyYmVjZCk7XG4vLyAgIH1cbiAgXG4gICBpb24tY2FyZCAuaGVhZGVyLWltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgfVxuICBcbiAgIGlvbi1jYXJkIGlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodGVyKTtcbiAgfVxuICBcbiAgIGlvbi1jYXJkIGlvbi1jYXJkLXRpdGxlIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrZXIpO1xuICB9XG4gIFxuICAgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCB7XG4gICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICB9XG4gIFxuICAgaW9uLWNhcmQgaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgfVxuICBcbiAgLyogQWN0aW9uIENhcmQgKi9cbiAgXG4gICAuYWN0aW9uLWNhcmQgaW9uLWdyaWQge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDA7XG4gIFxuICAgIHBhZGRpbmc6IDEwcHggMCAwO1xuICB9XG4gIFxuICAgLmFjdGlvbi1jYXJkIGlvbi1jb2w6bGFzdC1jaGlsZCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbiAgXG4gIC5tZCAgLmFjdGlvbi1jYXJkIC5idXR0b24tY2xlYXIge1xuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjogY3VycmVudENvbG9yO1xuICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiBjdXJyZW50Q29sb3I7XG4gIH1cbiAgXG4gICAuYWN0aW9uLWNhcmQgLmJ1dHRvbi1jbGVhciB7XG4gICAgLS1jb2xvcjogI2M2Y2VkZTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAtLXBhZGRpbmctdG9wOiAwO1xuICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIFxuICAgIG1hcmdpbjogMDtcbiAgXG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIHdpZHRoOiAzNnB4O1xuICB9XG4gIFxuICAvKiBBcHBzIENhcmQgKi9cbiAgXG4gICAuYXBwcy1jYXJkIGlvbi1saXN0IGlvbi10aHVtYm5haWwge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIFxuICAgIC0tYm9yZGVyLXJhZGl1czogMTRweDtcbiAgfVxuICBcbiAgLyogQ293b3JrZXIgQ2FyZCAqL1xuICBcbiAgIC5jb3dvcmtlci1jYXJkIC5oZWFkZXItaW1nIHtcbiAgICBoZWlnaHQ6IDE2MHB4O1xuICB9XG4gIFxuICAgLmNvd29ya2VyLWNhcmQgaDEge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIFxuICAgLmNvd29ya2VyLWNhcmQgcCB7XG4gICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICB9XG4gIFxuICAgLmNvd29ya2VyLWNhcmQgaW9uLWljb24ge1xuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyOXB4O1xuICBcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodGVzdCk7XG4gIH1cbiAgXG4gIC8qIE11c2ljIENhcmQgKi9cbiAgXG4gICAubXVzaWMtY2FyZCBpb24tY2FyZC1oZWFkZXIsXG4gICAubXVzaWMtY2FyZCBpb24tY2FyZC1jb250ZW50IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gICAubXVzaWMtY2FyZCBpbWcge1xuICAgIHdpZHRoOiAyNDhweDtcbiAgICBoZWlnaHQ6IDI0OHB4O1xuICBcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDhweCByZ2JhKDIsIDgsIDIwLCAwLjEpLCAwcHggOHB4IDE2cHggcmdiYSgyLCA4LCAyMCwgMC4wOCk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB9XG4gIFxuICAgLm11c2ljLWNhcmQgaDIge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICBcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrZXIpO1xuICB9XG4gIFxuICAgLm11c2ljLWNhcmQgcCB7XG4gICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICB9XG4gIFxuICAgLm11c2ljLWNhcmQgaW9uLWJ1dHRvbiB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA3cHg7XG4gICAgLS1wYWRkaW5nLWVuZDogN3B4O1xuICBcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgXG4gICAubXVzaWMtY2FyZCAuYnV0dG9uLWxhcmdlc3Qge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgfVxuICBcbiAgIC5tdXNpYy1jYXJkIGlvbi1wcm9ncmVzcy1iYXIge1xuICAgIG1hcmdpbjogMzBweCAwIDIwcHg7XG4gIFxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1kYXJrZXIpO1xuICAgIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogdmFyKC0tdGV4dC1kYXJrKTtcbiAgfSIsIi5pb3MgYm9keS5kYXJrIHtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMWMxYzFlO1xufVxuXG5pb24tY2FyZCAuaGVhZGVyLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEyMHB4O1xufVxuXG5pb24tY2FyZCBpb24tY2FyZC1zdWJ0aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0ZXIpO1xufVxuXG5pb24tY2FyZCBpb24tY2FyZC10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmtlcik7XG59XG5cbmlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQge1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG59XG5cbmlvbi1jYXJkIGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xufVxuXG4vKiBBY3Rpb24gQ2FyZCAqL1xuLmFjdGlvbi1jYXJkIGlvbi1ncmlkIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMDtcbiAgcGFkZGluZzogMTBweCAwIDA7XG59XG5cbi5hY3Rpb24tY2FyZCBpb24tY29sOmxhc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLm1kIC5hY3Rpb24tY2FyZCAuYnV0dG9uLWNsZWFyIHtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBjdXJyZW50Q29sb3I7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiBjdXJyZW50Q29sb3I7XG59XG5cbi5hY3Rpb24tY2FyZCAuYnV0dG9uLWNsZWFyIHtcbiAgLS1jb2xvcjogI2M2Y2VkZTtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDM2cHg7XG4gIHdpZHRoOiAzNnB4O1xufVxuXG4vKiBBcHBzIENhcmQgKi9cbi5hcHBzLWNhcmQgaW9uLWxpc3QgaW9uLXRodW1ibmFpbCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDE0cHg7XG59XG5cbi8qIENvd29ya2VyIENhcmQgKi9cbi5jb3dvcmtlci1jYXJkIC5oZWFkZXItaW1nIHtcbiAgaGVpZ2h0OiAxNjBweDtcbn1cblxuLmNvd29ya2VyLWNhcmQgaDEge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5jb3dvcmtlci1jYXJkIHAge1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG59XG5cbi5jb3dvcmtlci1jYXJkIGlvbi1pY29uIHtcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMjlweDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHRlc3QpO1xufVxuXG4vKiBNdXNpYyBDYXJkICovXG4ubXVzaWMtY2FyZCBpb24tY2FyZC1oZWFkZXIsXG4ubXVzaWMtY2FyZCBpb24tY2FyZC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubXVzaWMtY2FyZCBpbWcge1xuICB3aWR0aDogMjQ4cHg7XG4gIGhlaWdodDogMjQ4cHg7XG4gIGJveC1zaGFkb3c6IDBweCAycHggOHB4IHJnYmEoMiwgOCwgMjAsIDAuMSksIDBweCA4cHggMTZweCByZ2JhKDIsIDgsIDIwLCAwLjA4KTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4ubXVzaWMtY2FyZCBoMiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFya2VyKTtcbn1cblxuLm11c2ljLWNhcmQgcCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbn1cblxuLm11c2ljLWNhcmQgaW9uLWJ1dHRvbiB7XG4gIC0tcGFkZGluZy1zdGFydDogN3B4O1xuICAtLXBhZGRpbmctZW5kOiA3cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLm11c2ljLWNhcmQgLmJ1dHRvbi1sYXJnZXN0IHtcbiAgZm9udC1zaXplOiAyOHB4O1xufVxuXG4ubXVzaWMtY2FyZCBpb24tcHJvZ3Jlc3MtYmFyIHtcbiAgbWFyZ2luOiAzMHB4IDAgMjBweDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWRhcmtlcik7XG4gIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogdmFyKC0tdGV4dC1kYXJrKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/ui-components/vertical-card/vertical-card.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/ui-components/vertical-card/vertical-card.page.ts ***!
    \*******************************************************************/

  /*! exports provided: VerticalCardPage */

  /***/
  function srcAppUiComponentsVerticalCardVerticalCardPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerticalCardPage", function () {
      return VerticalCardPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var VerticalCardPage = /*#__PURE__*/function () {
      function VerticalCardPage() {
        _classCallCheck(this, VerticalCardPage);
      }

      _createClass(VerticalCardPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VerticalCardPage;
    }();

    VerticalCardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-vertical-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./vertical-card.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/vertical-card/vertical-card.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./vertical-card.page.scss */
      "./src/app/ui-components/vertical-card/vertical-card.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], VerticalCardPage);
    /***/
  }
}]);
//# sourceMappingURL=ui-components-vertical-card-vertical-card-module-es5.js.map