function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-layouts-masonry-masonry-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/masonry/masonry.page.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/masonry/masonry.page.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiLayoutsMasonryMasonryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>masonry</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<!-- This is HTML code -> class=\"pins\" and class=\"pin\" is required -->\n<!-- imageUrlArray will contain the URL source of images -->\n<!-- example: imageUrlArray = ['path/to/imageurl-1', 'path/to/imageurl-2', etc...] -->\n<!-- CSS file -> https://gist.github.com/AnkitMaheshwariIn/143f8d50902da7efdc1761a198bdbf7d -->\n\n<div class=\"pins2\">\n  <ion-card class=\"pin2\" *ngFor=\"let imageURL of imageUrlArray\">\n      <img [src]=\"imageURL.image\" >\n      <ion-card-content>\n        <!-- <ion-list lines=\"none\">\n          <ion-item>\n            <ion-avatar slot=\"start\">\n              <img src=\"https://ionic-docs-demo.herokuapp.com/assets/card-coworker-avatar.png\"/>\n            </ion-avatar>\n            <ion-label>\n              <h1>John Parks</h1>\n              <p>Co-worker</p>\n            </ion-label>\n          </ion-item>\n        </ion-list> -->\n      </ion-card-content>\n  </ion-card>\n</div>\n\n\n\n  <div class=\"pins\">\n    <ion-card class=\"pin\" *ngFor=\"let post of posts\">\n      <img [src]=\"post.image\" />\n      <div *ngIf=\"post.description\" class=\"post-description\">\n        <small>{{ post.description }}</small>\n      </div>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src=\"assets/img/avatar/marty-avatar.png\">\n        </ion-avatar>\n        <small>McFly</small>\n        <p><small>Category</small></p>\n      </ion-item>\n    </ion-card>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/ui-layouts/masonry/masonry-routing.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/ui-layouts/masonry/masonry-routing.module.ts ***!
    \**************************************************************/

  /*! exports provided: MasonryPageRoutingModule */

  /***/
  function srcAppUiLayoutsMasonryMasonryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MasonryPageRoutingModule", function () {
      return MasonryPageRoutingModule;
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


    var _masonry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./masonry.page */
    "./src/app/ui-layouts/masonry/masonry.page.ts");

    var routes = [{
      path: '',
      component: _masonry_page__WEBPACK_IMPORTED_MODULE_3__["MasonryPage"]
    }];

    var MasonryPageRoutingModule = function MasonryPageRoutingModule() {
      _classCallCheck(this, MasonryPageRoutingModule);
    };

    MasonryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MasonryPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/ui-layouts/masonry/masonry.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/ui-layouts/masonry/masonry.module.ts ***!
    \******************************************************/

  /*! exports provided: MasonryPageModule */

  /***/
  function srcAppUiLayoutsMasonryMasonryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MasonryPageModule", function () {
      return MasonryPageModule;
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


    var _masonry_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./masonry-routing.module */
    "./src/app/ui-layouts/masonry/masonry-routing.module.ts");
    /* harmony import */


    var _masonry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./masonry.page */
    "./src/app/ui-layouts/masonry/masonry.page.ts");

    var MasonryPageModule = function MasonryPageModule() {
      _classCallCheck(this, MasonryPageModule);
    };

    MasonryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _masonry_routing_module__WEBPACK_IMPORTED_MODULE_5__["MasonryPageRoutingModule"]],
      declarations: [_masonry_page__WEBPACK_IMPORTED_MODULE_6__["MasonryPage"]]
    })], MasonryPageModule);
    /***/
  },

  /***/
  "./src/app/ui-layouts/masonry/masonry.page.scss":
  /*!******************************************************!*\
    !*** ./src/app/ui-layouts/masonry/masonry.page.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiLayoutsMasonryMasonryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".pins {\n  -moz-column-count: 2;\n       column-count: 2;\n}\n\n.pin {\n  display: inline-block;\n}\n\n.card {\n  margin-top: 10px;\n}\n\nion-avatar {\n  margin: 0 !important;\n}\n\n.item ion-avatar img {\n  width: 9vw;\n  height: 9vw;\n}\n\n.post-description {\n  padding: 8px;\n  border-bottom: 1px solid #eee;\n}\n\n@media (min-width: 480px) {\n  .pins {\n    -moz-column-count: 3;\n         column-count: 3;\n  }\n\n  .item ion-avatar img {\n    width: 7vw !important;\n    height: 7vw !important;\n  }\n}\n\n@media (min-width: 640px) {\n  .pins {\n    -moz-column-count: 4;\n         column-count: 4;\n  }\n\n  .item ion-avatar img {\n    width: 5vw !important;\n    height: 5vw !important;\n    margin: 6px;\n  }\n}\n\n/* This CSS is used in HTML file -> https://gist.github.com/AnkitMaheshwariIn/20954763f4aabdd5524891cb8e0ad01c */\n\n.pins2 {\n  -moz-column-count: 2;\n       column-count: 2;\n  padding: 7px;\n}\n\n.pin2 {\n  display: inline-block;\n  margin: 0 2px 10px;\n  padding: 5px;\n  background: #f8f8ff;\n}\n\n@media (min-width: 480px) {\n  .pins2 {\n    -moz-column-count: 3;\n         column-count: 3;\n  }\n}\n\n@media (min-width: 640px) {\n  .pins2 {\n    -moz-column-count: 4;\n         column-count: 4;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZXRoZWUvSW9uaWNQcm9qZWN0cy9faW9uaWM1L2lvbmljNWZ1bGxhcHBfZmluYWwvc3JjL2FwcC91aS1sYXlvdXRzL21hc29ucnkvbWFzb25yeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3VpLWxheW91dHMvbWFzb25yeS9tYXNvbnJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLG9CQUFBO09BQUEsZUFBQTtBQ0FSOztBRElJO0VBQ0kscUJBQUE7QUNEUjs7QURJSTtFQUNJLGdCQUFBO0FDRFI7O0FESUk7RUFDSSxvQkFBQTtBQ0RSOztBRElJO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUNEUjs7QURJSTtFQUNJLFlBQUE7RUFDQSw2QkFBQTtBQ0RSOztBREtJO0VBQ0k7SUFDSSxvQkFBQTtTQUFBLGVBQUE7RUNGVjs7RURJTTtJQUNJLHFCQUFBO0lBQ0Esc0JBQUE7RUNEVjtBQUNGOztBRElJO0VBQ0k7SUFDSSxvQkFBQTtTQUFBLGVBQUE7RUNGVjs7RURJTTtJQUNJLHFCQUFBO0lBQ0Esc0JBQUE7SUFDQSxXQUFBO0VDRFY7QUFDRjs7QURPSSxnSEFBQTs7QUFDSjtFQUNJLG9CQUFBO09BQUEsZUFBQTtFQUNBLFlBQUE7QUNMSjs7QURRRTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNMSjs7QURRQTtFQUNBO0lBQ0ksb0JBQUE7U0FBQSxlQUFBO0VDTEY7QUFDRjs7QURTQTtFQUNJO0lBQ0ksb0JBQUE7U0FBQSxlQUFBO0VDUE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3VpLWxheW91dHMvbWFzb25yeS9tYXNvbnJ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5waW5zIHtcbiAgICAgICAgY29sdW1uLWNvdW50OiAyO1xuICAgIH1cblxuXG4gICAgLnBpbiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG5cbiAgICAuY2FyZCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuXG4gICAgaW9uLWF2YXRhciB7XG4gICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5pdGVtIGlvbi1hdmF0YXIgaW1nIHtcbiAgICAgICAgd2lkdGg6IDl2dyA7XG4gICAgICAgIGhlaWdodDogOXZ3O1xuICAgIH1cblxuICAgIC5wb3N0LWRlc2NyaXB0aW9uIHtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgICB9XG5cbiAgICAvLyBNZWRpYSBxdWVyaWVzXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgIC5waW5zIHtcbiAgICAgICAgICAgIGNvbHVtbi1jb3VudDogMztcbiAgICAgICAgfVxuICAgICAgICAuaXRlbSBpb24tYXZhdGFyIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogIDd2dyAhaW1wb3J0YW50O1xuICAgICAgICAgICAgaGVpZ2h0OiA3dncgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xuICAgICAgICAucGlucyB7XG4gICAgICAgICAgICBjb2x1bW4tY291bnQ6IDQ7XG4gICAgICAgIH1cbiAgICAgICAgLml0ZW0gaW9uLWF2YXRhciBpbWcge1xuICAgICAgICAgICAgd2lkdGg6ICA1dncgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGhlaWdodDogNXZ3ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW46IDZweDtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgXG4gICAgLy8vIHZlcnNpb24gMyB3aXRob3V0IHJlc3BvbnNpdmUgLy8vXG4gICAgLyogVGhpcyBDU1MgaXMgdXNlZCBpbiBIVE1MIGZpbGUgLT4gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vQW5raXRNYWhlc2h3YXJpSW4vMjA5NTQ3NjNmNGFhYmRkNTUyNDg5MWNiOGUwYWQwMWMgKi9cbi5waW5zMntcbiAgICBjb2x1bW4tY291bnQ6IDI7XG4gICAgcGFkZGluZzogN3B4O1xuICB9XG4gIFxuICAucGluMiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogMCAycHggMTBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmZjtcbiAgfVxuLy8gTWVkaWEgcXVlcmllc1xuQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG4ucGluczIge1xuICAgIGNvbHVtbi1jb3VudDogMztcbn1cblxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcbiAgICAucGluczIge1xuICAgICAgICBjb2x1bW4tY291bnQ6IDQ7XG4gICAgfVxuXG59IiwiLnBpbnMge1xuICBjb2x1bW4tY291bnQ6IDI7XG59XG5cbi5waW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5jYXJkIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuaW9uLWF2YXRhciB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG4uaXRlbSBpb24tYXZhdGFyIGltZyB7XG4gIHdpZHRoOiA5dnc7XG4gIGhlaWdodDogOXZ3O1xufVxuXG4ucG9zdC1kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuICAucGlucyB7XG4gICAgY29sdW1uLWNvdW50OiAzO1xuICB9XG5cbiAgLml0ZW0gaW9uLWF2YXRhciBpbWcge1xuICAgIHdpZHRoOiA3dncgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDd2dyAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcbiAgLnBpbnMge1xuICAgIGNvbHVtbi1jb3VudDogNDtcbiAgfVxuXG4gIC5pdGVtIGlvbi1hdmF0YXIgaW1nIHtcbiAgICB3aWR0aDogNXZ3ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA1dncgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDZweDtcbiAgfVxufVxuLyogVGhpcyBDU1MgaXMgdXNlZCBpbiBIVE1MIGZpbGUgLT4gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vQW5raXRNYWhlc2h3YXJpSW4vMjA5NTQ3NjNmNGFhYmRkNTUyNDg5MWNiOGUwYWQwMWMgKi9cbi5waW5zMiB7XG4gIGNvbHVtbi1jb3VudDogMjtcbiAgcGFkZGluZzogN3B4O1xufVxuXG4ucGluMiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIDJweCAxMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNmOGY4ZmY7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuICAucGluczIge1xuICAgIGNvbHVtbi1jb3VudDogMztcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XG4gIC5waW5zMiB7XG4gICAgY29sdW1uLWNvdW50OiA0O1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/ui-layouts/masonry/masonry.page.ts":
  /*!****************************************************!*\
    !*** ./src/app/ui-layouts/masonry/masonry.page.ts ***!
    \****************************************************/

  /*! exports provided: MasonryPage */

  /***/
  function srcAppUiLayoutsMasonryMasonryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MasonryPage", function () {
      return MasonryPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MasonryPage = /*#__PURE__*/function () {
      function MasonryPage() {
        _classCallCheck(this, MasonryPage);

        this.posts = [];
        this.imageUrlArray = [];
      }

      _createClass(MasonryPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.imageUrlArray = [{
            image: 'https://image.freepik.com/free-photo/portrait-collection-adorable-puppies_53876-64793.jpg'
          }, {
            image: 'https://www.prachachat.net/wp-content/uploads/2020/01/7-Hotline-Bling-01-GettyImages-166291140-731x1024.jpg'
          }, {
            image: 'https://image.freepik.com/free-photo/tiger_42044-2072.jpg'
          }, {
            image: 'https://image.freepik.com/free-photo/friendly-dog-with-tongue-out-copy-space_23-2148326231.jpg'
          }, {
            image: 'https://www.prachachat.net/wp-content/uploads/2020/01/7-Hotline-Bling-01-GettyImages-166291140-731x1024.jpg'
          }, {
            image: 'https://image.freepik.com/free-photo/portrait-collection-adorable-puppies_53876-64793.jpg'
          }, {
            image: 'https://www.prachachat.net/wp-content/uploads/2020/01/7-Hotline-Bling-01-GettyImages-166291140-731x1024.jpg'
          }, {
            image: 'https://image.freepik.com/free-photo/portrait-collection-adorable-puppies_53876-64793.jpg'
          }, {
            image: 'https://image.freepik.com/free-photo/tiger_42044-2072.jpg'
          }, {
            image: 'https://image.freepik.com/free-photo/friendly-dog-with-tongue-out-copy-space_23-2148326231.jpg'
          }, {
            image: 'https://image.freepik.com/free-photo/portrait-collection-adorable-puppies_53876-64793.jpg'
          }, {
            image: 'https://image.freepik.com/free-photo/adult-jaguar_133548-137.jpg'
          }, {
            image: 'https://image.freepik.com/free-photo/tiger_42044-2072.jpg'
          }];
          this.posts = [{
            description: 'Trying out digital painting',
            image: 'https://s-media-cache-ak0.pinimg.com/564x/d5/63/b0/d563b08194f0a92cc7d381f7f8582a08.jpg'
          }, {
            description: '',
            image: 'https://s-media-cache-ak0.pinimg.com/236x/43/f3/3d/43f33de6f96ca8e6f8dc6ff1ad86b586.jpg'
          }, {
            description: 'Look at this amazing clay humming bird I crafted!',
            image: 'https://s-media-cache-ak0.pinimg.com/236x/68/68/a2/6868a2f821e5d15cc8fcd8cfa1694606.jpg'
          }, {
            description: 'Origami tullip tutorial',
            image: 'https://s-media-cache-ak0.pinimg.com/236x/38/6f/8e/386f8ec1725f09883d827094228d0f82.jpg'
          }, {
            description: '',
            image: 'https://s-media-cache-ak0.pinimg.com/564x/f6/61/5c/f6615ca7068da18157588890f9e9e03a.jpg'
          }, {
            description: '',
            image: 'https://s-media-cache-ak0.pinimg.com/564x/0d/29/35/0d2935d14c17aff1baab75360c9e2bd6.jpg'
          }, {
            description: 'Delicious chocolate bread recipe!',
            image: 'https://s-media-cache-ak0.pinimg.com/564x/06/a9/8e/06a98e67111aae83a481a2c1dbb594a4.jpg'
          }, {
            description: '',
            image: 'https://s-media-cache-ak0.pinimg.com/564x/d5/8c/37/d58c3783d6ebf79db0f9c057726800a0.jpg'
          }, {
            description: '',
            image: 'https://s-media-cache-ak0.pinimg.com/564x/f5/35/97/f53597bf16aff91315a0beca27ffdbda.jpg'
          }, {
            description: '',
            image: 'https://s-media-cache-ak0.pinimg.com/564x/cf/fe/6d/cffe6dd7dece1cb0562f65cd3bfba1ac.jpg'
          }, {
            description: 'Fastest car of all times',
            image: 'https://s-media-cache-ak0.pinimg.com/564x/5f/bf/34/5fbf3414f9de301c8f4b868b1c2e2339.jpg'
          }];
        }
      }]);

      return MasonryPage;
    }();

    MasonryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-masonry',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./masonry.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/masonry/masonry.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./masonry.page.scss */
      "./src/app/ui-layouts/masonry/masonry.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], MasonryPage);
    /***/
  }
}]);
//# sourceMappingURL=ui-layouts-masonry-masonry-module-es5.js.map