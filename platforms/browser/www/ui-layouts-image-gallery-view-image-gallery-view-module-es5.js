function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-layouts-image-gallery-view-image-gallery-view-module"], {
  /***/
  "./src/app/ui-layouts/image-gallery-view/image-gallery-view-routing.module.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/ui-layouts/image-gallery-view/image-gallery-view-routing.module.ts ***!
    \************************************************************************************/

  /*! exports provided: ImageGalleryViewPageRoutingModule */

  /***/
  function srcAppUiLayoutsImageGalleryViewImageGalleryViewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageGalleryViewPageRoutingModule", function () {
      return ImageGalleryViewPageRoutingModule;
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


    var _image_gallery_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./image-gallery-view.page */
    "./src/app/ui-layouts/image-gallery-view/image-gallery-view.page.ts");

    var routes = [{
      path: '',
      component: _image_gallery_view_page__WEBPACK_IMPORTED_MODULE_3__["ImageGalleryViewPage"]
    }];

    var ImageGalleryViewPageRoutingModule = function ImageGalleryViewPageRoutingModule() {
      _classCallCheck(this, ImageGalleryViewPageRoutingModule);
    };

    ImageGalleryViewPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ImageGalleryViewPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/ui-layouts/image-gallery-view/image-gallery-view.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/ui-layouts/image-gallery-view/image-gallery-view.module.ts ***!
    \****************************************************************************/

  /*! exports provided: ImageGalleryViewPageModule */

  /***/
  function srcAppUiLayoutsImageGalleryViewImageGalleryViewModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageGalleryViewPageModule", function () {
      return ImageGalleryViewPageModule;
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


    var _image_gallery_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./image-gallery-view-routing.module */
    "./src/app/ui-layouts/image-gallery-view/image-gallery-view-routing.module.ts");
    /* harmony import */


    var _image_gallery_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./image-gallery-view.page */
    "./src/app/ui-layouts/image-gallery-view/image-gallery-view.page.ts");

    var ImageGalleryViewPageModule = function ImageGalleryViewPageModule() {
      _classCallCheck(this, ImageGalleryViewPageModule);
    };

    ImageGalleryViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _image_gallery_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["ImageGalleryViewPageRoutingModule"]],
      declarations: [_image_gallery_view_page__WEBPACK_IMPORTED_MODULE_6__["ImageGalleryViewPage"]]
    })], ImageGalleryViewPageModule);
    /***/
  }
}]);
//# sourceMappingURL=ui-layouts-image-gallery-view-image-gallery-view-module-es5.js.map