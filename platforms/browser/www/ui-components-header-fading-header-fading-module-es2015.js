(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-components-header-fading-header-fading-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/header-fading/header-fading.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/header-fading/header-fading.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content  fullscreen=true (ionScroll)=\"onScroll($event)\" [scrollEvents]=\"true\" [class.transition]=\"transition\">\n\n\n<!-- ##############  Fading header  ############ -->\n<ion-header class=\"ion-no-border\" slot=\"fixed\">\n\n  <ion-toolbar class=\"first\"  [class.show-background]=\"showToolbar\">\n \n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\" auto-hide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title [class.show-title]=\"show-title\" color=\"light\">header-fading</ion-title>\n    <ion-buttons  color=\"light\" slot=\"end\">\n\n      <ion-button color=\"light\"  (click)=\"openContact(speaker)\">\n        <ion-icon slot=\"icon-only\" ios=\"call-outline\" md=\"call-sharp\"></ion-icon>\n      </ion-button>\n  \n      <ion-button color=\"light\"  (click)=\"openSpeakerShare(speaker)\">\n        <ion-icon slot=\"icon-only\" ios=\"share-outline\" md=\"share-sharp\"></ion-icon>\n      </ion-button>\n\n    </ion-buttons>\n    \n  </ion-toolbar>\n  \n\n</ion-header>\n\n\n\n\n\n\n\n\n  \n\n  <!-- skeleton thumbnail -->\n  <div class=\"top-grey-box\" ></div>\n  <ion-item *ngFor=\"let i of [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]\">\n     <ion-thumbnail slot=\"start\">\n       <ion-skeleton-text ></ion-skeleton-text>\n     </ion-thumbnail>\n     <!-- <ion-avatar slot=\"start\">\n         <ion-skeleton-text animated></ion-skeleton-text>\n       </ion-avatar> -->\n     <ion-label>\n       <h3>\n         <ion-skeleton-text  style=\"width: 50%\"></ion-skeleton-text>\n       </h3>\n       <p>\n         <ion-skeleton-text  style=\"width: 80%\"></ion-skeleton-text>\n       </p>\n       <p>\n         <ion-skeleton-text  style=\"width: 60%\"></ion-skeleton-text>\n       </p>\n     </ion-label>\n   </ion-item>\n </ion-content>\n \n");

/***/ }),

/***/ "./src/app/ui-components/header-fading/header-fading-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/ui-components/header-fading/header-fading-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: HeaderFadingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderFadingPageRoutingModule", function() { return HeaderFadingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _header_fading_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header-fading.page */ "./src/app/ui-components/header-fading/header-fading.page.ts");




const routes = [
    {
        path: '',
        component: _header_fading_page__WEBPACK_IMPORTED_MODULE_3__["HeaderFadingPage"]
    }
];
let HeaderFadingPageRoutingModule = class HeaderFadingPageRoutingModule {
};
HeaderFadingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HeaderFadingPageRoutingModule);



/***/ }),

/***/ "./src/app/ui-components/header-fading/header-fading.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/ui-components/header-fading/header-fading.module.ts ***!
  \*********************************************************************/
/*! exports provided: HeaderFadingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderFadingPageModule", function() { return HeaderFadingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _header_fading_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header-fading-routing.module */ "./src/app/ui-components/header-fading/header-fading-routing.module.ts");
/* harmony import */ var _header_fading_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header-fading.page */ "./src/app/ui-components/header-fading/header-fading.page.ts");







let HeaderFadingPageModule = class HeaderFadingPageModule {
};
HeaderFadingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _header_fading_routing_module__WEBPACK_IMPORTED_MODULE_5__["HeaderFadingPageRoutingModule"]
        ],
        declarations: [_header_fading_page__WEBPACK_IMPORTED_MODULE_6__["HeaderFadingPage"]]
    })
], HeaderFadingPageModule);



/***/ }),

/***/ "./src/app/ui-components/header-fading/header-fading.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/ui-components/header-fading/header-fading.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Transparent */\nion-toolbar.first {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n/* Show background if class is active */\n.show-background {\n  border-style: none;\n  animation: fadein 0.5s;\n  -moz-animation: fadein 0.5s;\n  /* Firefox */\n  -webkit-animation: fadein 0.5s;\n  /* Safari and Chrome */\n  -o-animation: fadein 0.5s;\n  /* Opera */\n  background: var(--ion-color-danger);\n}\n.hide-title {\n  border-style: none;\n  animation: fadeout 0.5s;\n  -moz-animation: fadein 0.5s;\n  /* Firefox */\n  -webkit-animation: fadein 0.5s;\n  /* Safari and Chrome */\n  -o-animation: fadein 0.5s;\n  /* Opera */\n  background: var(--ion-color-danger);\n}\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes fadein {\n  /* Safari and Chrome */\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.top-grey-box {\n  width: 100%;\n  height: 250px;\n  background-color: #dddddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZXRoZWUvSW9uaWNQcm9qZWN0cy9faW9uaWM1L2lvbmljNWZ1bGxhcHBfZmluYWwvc3JjL2FwcC91aS1jb21wb25lbnRzL2hlYWRlci1mYWRpbmcvaGVhZGVyLWZhZGluZy5wYWdlLnNjc3MiLCJzcmMvYXBwL3VpLWNvbXBvbmVudHMvaGVhZGVyLWZhZGluZy9oZWFkZXItZmFkaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQSxnQkFBQTtBQUNBO0VBQ0kseUJBQUE7RUFDQSx3Q0FBQTtBQ1BKO0FEMkJBLHVDQUFBO0FBQ0E7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFBNkIsWUFBQTtFQUM3Qiw4QkFBQTtFQUFnQyxzQkFBQTtFQUNoQyx5QkFBQTtFQUEyQixVQUFBO0VBQzNCLG1DQUFBO0FDckJKO0FEd0JBO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQTZCLFlBQUE7RUFDN0IsOEJBQUE7RUFBZ0Msc0JBQUE7RUFDaEMseUJBQUE7RUFBMkIsVUFBQTtFQUUzQixtQ0FBQTtBQ25CSjtBRHNCQTtFQUNJO0lBQ0ksVUFBQTtFQ25CTjtFRHFCRTtJQUNJLFVBQUE7RUNuQk47QUFDRjtBRDZCQTtFQUE0QixzQkFBQTtFQUN4QjtJQUNJLFVBQUE7RUNqQk47RURtQkU7SUFDSSxVQUFBO0VDakJOO0FBQ0Y7QURxQkE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FDbkJKIiwiZmlsZSI6InNyYy9hcHAvdWktY29tcG9uZW50cy9oZWFkZXItZmFkaW5nL2hlYWRlci1mYWRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tY29udGVudCB7XG4gICAgLy8gLS1wYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAvLyAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICAgIC8vIC0tcGFkZGluZy1zdGFydDogMjBweDtcbiAgIC8vIC0tcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuICB9XG5cbi8qIFRyYW5zcGFyZW50ICovXG5pb24tdG9vbGJhci5maXJzdCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIC8vIGlvbi10aXRsZSB7XG4gICAgLy8gICAgIG9wYWNpdHk6IDA7XG4gICAgLy8gfVxufVxuXG4uc2hvdy10aXRsZXtcblxuICAgIC8vIGFuaW1hdGlvbjogZmFkZWluIDAuNHM7XG4gICAgLy8gLW1vei1hbmltYXRpb246IGZhZGVpbiAwLjRzOyAvKiBGaXJlZm94ICovXG4gICAgLy8gLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAwLjRzOyAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuICAgIC8vIC1vLWFuaW1hdGlvbjogZmFkZWluIDAuNHM7IC8qIE9wZXJhICovXG4gICAgLy8gLS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIC8vIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLWluLW91dDtcbiAgICAvLyAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQ7XG4gICAgLy8gLW1zLXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQ7XG4gICAgLy8gLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLWluLW91dDtcbiAgICAvLyAgb3BhY2l0eTogMTtcblxufVxuLyogU2hvdyBiYWNrZ3JvdW5kIGlmIGNsYXNzIGlzIGFjdGl2ZSAqL1xuLnNob3ctYmFja2dyb3VuZCB7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIGFuaW1hdGlvbjogZmFkZWluIDAuNXM7XG4gICAgLW1vei1hbmltYXRpb246IGZhZGVpbiAwLjVzOyAvKiBGaXJlZm94ICovXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAwLjVzOyAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuICAgIC1vLWFuaW1hdGlvbjogZmFkZWluIDAuNXM7IC8qIE9wZXJhICovXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgLy9iYWNrZ3JvdW5kOiAjMDA5ZjM0O1xufVxuLmhpZGUtdGl0bGUge1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICBhbmltYXRpb246IGZhZGVvdXQgMC41cztcbiAgICAtbW96LWFuaW1hdGlvbjogZmFkZWluIDAuNXM7IC8qIEZpcmVmb3ggKi9cbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDAuNXM7IC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXG4gICAgLW8tYW5pbWF0aW9uOiBmYWRlaW4gMC41czsgLyogT3BlcmEgKi9cblxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XG4gICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6MDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBvcGFjaXR5OjE7XG4gICAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGZhZGVpbiB7IC8qIEZpcmVmb3ggKi9cbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTowO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6MTtcbiAgICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluIHsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTowO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6MTtcbiAgICB9XG59XG5cblxuLnRvcC1ncmV5LWJveHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG59IiwiLyogVHJhbnNwYXJlbnQgKi9cbmlvbi10b29sYmFyLmZpcnN0IHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLyogU2hvdyBiYWNrZ3JvdW5kIGlmIGNsYXNzIGlzIGFjdGl2ZSAqL1xuLnNob3ctYmFja2dyb3VuZCB7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgYW5pbWF0aW9uOiBmYWRlaW4gMC41cztcbiAgLW1vei1hbmltYXRpb246IGZhZGVpbiAwLjVzO1xuICAvKiBGaXJlZm94ICovXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMC41cztcbiAgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgLW8tYW5pbWF0aW9uOiBmYWRlaW4gMC41cztcbiAgLyogT3BlcmEgKi9cbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG5cbi5oaWRlLXRpdGxlIHtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBhbmltYXRpb246IGZhZGVvdXQgMC41cztcbiAgLW1vei1hbmltYXRpb246IGZhZGVpbiAwLjVzO1xuICAvKiBGaXJlZm94ICovXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMC41cztcbiAgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgLW8tYW5pbWF0aW9uOiBmYWRlaW4gMC41cztcbiAgLyogT3BlcmEgKi9cbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG5cbkBrZXlmcmFtZXMgZmFkZWluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGZhZGVpbiB7XG4gIC8qIEZpcmVmb3ggKi9cbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVpbiB7XG4gIC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi50b3AtZ3JleS1ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/ui-components/header-fading/header-fading.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/ui-components/header-fading/header-fading.page.ts ***!
  \*******************************************************************/
/*! exports provided: HeaderFadingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderFadingPage", function() { return HeaderFadingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderFadingPage = class HeaderFadingPage {
    constructor() {
        //**** toolbar for hide and show ****/
        this.showToolbar = false;
        this.showTitle = false;
        this.transition = false;
    }
    ngOnInit() {
    }
    //********** scroll event  *************/
    onScroll($event) {
        if ($event && $event.detail && $event.detail.scrollTop) {
            const scrollTop = $event.detail.scrollTop;
            this.transition = true;
            this.showToolbar = scrollTop >= 100;
            //console.log("showToolbar="+this.showToolbar);
            this.showTitle = scrollTop >= 100;
            //console.log("showTitle="+this.showTitle);
        }
        else {
            this.transition = false;
        }
    }
};
HeaderFadingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header-fading',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header-fading.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/header-fading/header-fading.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header-fading.page.scss */ "./src/app/ui-components/header-fading/header-fading.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HeaderFadingPage);



/***/ })

}]);
//# sourceMappingURL=ui-components-header-fading-header-fading-module-es2015.js.map