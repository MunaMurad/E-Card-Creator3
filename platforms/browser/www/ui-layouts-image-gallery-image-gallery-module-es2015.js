(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-layouts-image-gallery-image-gallery-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/image-gallery/image-gallery.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/image-gallery/image-gallery.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Image gallery</ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n\n    \n    <ion-segment [(ngModel)]=\"styleView\"  >\n      <ion-segment-button value=\"style1\">2 colunms</ion-segment-button>\n      <ion-segment-button value=\"style2\">3colunms</ion-segment-button>\n      <ion-segment-button value=\"style3\">4colunms</ion-segment-button>\n    </ion-segment>\n\n\n  </ion-toolbar>\n</ion-header>,\n\n<ion-content class=\"ion-padding-top ion-text-center\">\n  <div *ngIf=\"themeView==='style1'\">\n\n  \n  </div>\n\n\n  <div *ngIf=\"themeView==='style2'\">\n\n  </div>\n\n  <div *ngIf=\"themeView==='style3'\">\n\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/ui-layouts/image-gallery/image-gallery-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/ui-layouts/image-gallery/image-gallery-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: ImageGalleryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageGalleryPageRoutingModule", function() { return ImageGalleryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _image_gallery_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image-gallery.page */ "./src/app/ui-layouts/image-gallery/image-gallery.page.ts");




const routes = [
    {
        path: '',
        component: _image_gallery_page__WEBPACK_IMPORTED_MODULE_3__["ImageGalleryPage"]
    }
];
let ImageGalleryPageRoutingModule = class ImageGalleryPageRoutingModule {
};
ImageGalleryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ImageGalleryPageRoutingModule);



/***/ }),

/***/ "./src/app/ui-layouts/image-gallery/image-gallery.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/ui-layouts/image-gallery/image-gallery.module.ts ***!
  \******************************************************************/
/*! exports provided: ImageGalleryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageGalleryPageModule", function() { return ImageGalleryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _image_gallery_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image-gallery-routing.module */ "./src/app/ui-layouts/image-gallery/image-gallery-routing.module.ts");
/* harmony import */ var _image_gallery_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image-gallery.page */ "./src/app/ui-layouts/image-gallery/image-gallery.page.ts");







let ImageGalleryPageModule = class ImageGalleryPageModule {
};
ImageGalleryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _image_gallery_routing_module__WEBPACK_IMPORTED_MODULE_5__["ImageGalleryPageRoutingModule"]
        ],
        declarations: [_image_gallery_page__WEBPACK_IMPORTED_MODULE_6__["ImageGalleryPage"]]
    })
], ImageGalleryPageModule);



/***/ }),

/***/ "./src/app/ui-layouts/image-gallery/image-gallery.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/ui-layouts/image-gallery/image-gallery.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWxheW91dHMvaW1hZ2UtZ2FsbGVyeS9pbWFnZS1nYWxsZXJ5LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ui-layouts/image-gallery/image-gallery.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/ui-layouts/image-gallery/image-gallery.page.ts ***!
  \****************************************************************/
/*! exports provided: ImageGalleryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageGalleryPage", function() { return ImageGalleryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _image_gallery_view_image_gallery_view_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../image-gallery-view/image-gallery-view.page */ "./src/app/ui-layouts/image-gallery-view/image-gallery-view.page.ts");




//*********** Import  gallery viewer modal **************//

let ImageGalleryPage = class ImageGalleryPage {
    constructor(firestore, menuCtrl, loadingController, modalController, loadingPopup) {
        this.firestore = firestore;
        this.menuCtrl = menuCtrl;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.loadingPopup = loadingPopup;
        this.imagesArray = [];
        //*********** View mode  **************/
        this.galleryView = "two";
    }
    ngOnInit() {
        this.images = this.firestore.collection('layout_gallery').valueChanges();
        this.images.subscribe(res => {
            this.imagesArray = res;
            console.log("imageArray=" + JSON.stringify(this.imagesArray));
            setTimeout(() => {
                // loadingPopup.dismiss();
            }, 1000);
        });
    }
    toggleSideMenu() {
        this.menuCtrl.toggle(); //Add this method to your button click function
    }
    openImageViewer(image) {
        console.log("openImageViewer");
        // let modal = this.modalCtrl.create(CartPage, { data: this.cart });
        this.modalController.create({
            component: _image_gallery_view_image_gallery_view_page__WEBPACK_IMPORTED_MODULE_4__["ImageGalleryViewPage"],
            componentProps: {
                data: this.imagesArray,
                index: image
            }
        }).then(modal => {
            modal.present();
        });
    }
};
ImageGalleryPage.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
ImageGalleryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-image-gallery',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./image-gallery.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/image-gallery/image-gallery.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./image-gallery.page.scss */ "./src/app/ui-layouts/image-gallery/image-gallery.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], ImageGalleryPage);



/***/ })

}]);
//# sourceMappingURL=ui-layouts-image-gallery-image-gallery-module-es2015.js.map