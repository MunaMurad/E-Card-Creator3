(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-layouts-profile-profile-one-profile-one-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/profile/profile-one/profile-one.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/profile/profile-one/profile-one.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"speaker-detail\" (ionScroll)=\"onScroll($event)\" [scrollEvents]=\"true\" [class.transition]=\"transition\">\n\n\n\n  <!-- ##############  Fading header  ############ -->\n    <ion-header class=\"ion-no-border\" slot=\"fixed\">\n  \n      <ion-toolbar class=\"first\"  [class.show-background]=\"showToolbar\">\n        <!-- ######## -->\n        <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"/app/tabs/speakers\"></ion-back-button>\n        </ion-buttons>\n        <!-- ######## -->\n        <ion-title [class.show-title]=\"showTitle\">header-fading</ion-title>\n  \n  \n        <!-- ######## -->\n        <ion-buttons *ngIf=\"speaker\" slot=\"end\">\n        <!-- ######## -->\n          <ion-button (click)=\"openContact(speaker)\">\n            <ion-icon slot=\"icon-only\" ios=\"call-outline\" md=\"call-sharp\"></ion-icon>\n          </ion-button>\n        <!-- ######## -->\n          <ion-button (click)=\"openSpeakerShare(speaker)\">\n            <ion-icon slot=\"icon-only\" ios=\"share-outline\" md=\"share-sharp\"></ion-icon>\n          </ion-button>\n  \n        </ion-buttons>\n        \n  \n      </ion-toolbar>\n  \n    </ion-header>\n  \n  \n  <!-- ##############  Image header  ############ -->\n  \n    <div class=\"speaker-background\">\n      <img [src]=\"speaker?.profilePic\" [alt]=\"speaker?.name\">\n      <h2>{{speaker?.name}}</h2>\n    </div>\n  \n    <div class=\"ion-padding speaker-detail\">\n      <p>{{speaker?.about}} Say hello on social media!</p>\n  \n      <hr>\n  \n  <!-- ##############  ion-chip  ############ -->\n  \n      <ion-chip color=\"twitter\" button (click)=\"openExternalUrl('https://twitter.com/' + speaker.twitter)\">\n        <ion-icon name=\"logo-twitter\"></ion-icon>\n        <ion-label>Twitter</ion-label>\n      </ion-chip>\n  \n      <ion-chip color=\"dark\" button (click)=\"openExternalUrl('https://github.com/ionic-team/ionic')\">\n        <ion-icon name=\"logo-github\"></ion-icon>\n        <ion-label>GitHub</ion-label>\n      </ion-chip>\n  \n      <ion-chip color=\"instagram\" button (click)=\"openExternalUrl('https://instagram.com/ionicframework')\">\n        <ion-icon name=\"logo-instagram\"></ion-icon>\n        <ion-label>Instagram</ion-label>\n      </ion-chip>\n    </div>\n  \n  \n  \n  \n  <!-- ##############  skeleton thumbnail ############ -->\n  \n    <div class=\"top-grey-box\" ></div>\n    <ion-item *ngFor=\"let i of [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]\">\n       <ion-thumbnail slot=\"start\">\n         <ion-skeleton-text ></ion-skeleton-text>\n       </ion-thumbnail>\n       <!-- <ion-avatar slot=\"start\">\n           <ion-skeleton-text animated></ion-skeleton-text>\n         </ion-avatar> -->\n       <ion-label>\n         <h3>\n           <ion-skeleton-text  style=\"width: 50%\"></ion-skeleton-text>\n         </h3>\n         <p>\n           <ion-skeleton-text  style=\"width: 80%\"></ion-skeleton-text>\n         </p>\n         <p>\n           <ion-skeleton-text  style=\"width: 60%\"></ion-skeleton-text>\n         </p>\n       </ion-label>\n     </ion-item>\n  </ion-content>\n  ");

/***/ }),

/***/ "./src/app/ui-layouts/profile/profile-one/profile-one-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/ui-layouts/profile/profile-one/profile-one-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: ProfileOnePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileOnePageRoutingModule", function() { return ProfileOnePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profile_one_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-one.page */ "./src/app/ui-layouts/profile/profile-one/profile-one.page.ts");




const routes = [
    {
        path: '',
        component: _profile_one_page__WEBPACK_IMPORTED_MODULE_3__["ProfileOnePage"]
    }
];
let ProfileOnePageRoutingModule = class ProfileOnePageRoutingModule {
};
ProfileOnePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfileOnePageRoutingModule);



/***/ }),

/***/ "./src/app/ui-layouts/profile/profile-one/profile-one.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/ui-layouts/profile/profile-one/profile-one.module.ts ***!
  \**********************************************************************/
/*! exports provided: ProfileOnePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileOnePageModule", function() { return ProfileOnePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_one_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-one-routing.module */ "./src/app/ui-layouts/profile/profile-one/profile-one-routing.module.ts");
/* harmony import */ var _profile_one_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-one.page */ "./src/app/ui-layouts/profile/profile-one/profile-one.page.ts");







let ProfileOnePageModule = class ProfileOnePageModule {
};
ProfileOnePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_one_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileOnePageRoutingModule"]
        ],
        declarations: [_profile_one_page__WEBPACK_IMPORTED_MODULE_6__["ProfileOnePage"]]
    })
], ProfileOnePageModule);



/***/ }),

/***/ "./src/app/ui-layouts/profile/profile-one/profile-one.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/ui-layouts/profile/profile-one/profile-one.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n * Speaker Background\n */\n/* Transparent standard */\nion-toolbar.first {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n.show-title {\n  -webkit-transition: opacity 1s ease-in-out;\n  -moz-transition: opacity 1s ease-in-out;\n  -ms-transition: opacity 1s ease-in-out;\n  -o-transition: opacity 1s ease-in-out;\n  opacity: 1;\n}\n/* Show background if class is active */\n.show-background {\n  border-style: none;\n  animation: fadein 0.5s;\n  -moz-animation: fadein 0.5s;\n  /* Firefox */\n  -webkit-animation: fadein 0.9s;\n  /* Safari and Chrome */\n  -o-animation: fadein 0.5s;\n  /* Opera */\n  background: #009f34;\n}\n.hide-title {\n  border-style: none;\n  animation: fadeout 0.5s;\n  -moz-animation: fadeout 0.5s;\n  /* Firefox */\n  -webkit-animation: fadeout 0.5s;\n  /* Safari and Chrome */\n  -o-animation: fadeout 0.5s;\n  /* Opera */\n  background: var(--ion-color-danger);\n}\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes fadeout {\n  /* Safari and Chrome */\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@keyframes fadeout {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@-webkit-keyframes fadeout {\n  /* Safari and Chrome */\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n.top-grey-box {\n  width: 100%;\n  height: 250px;\n  background-color: #dddddd;\n}\nion-toolbar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  --background: transparent;\n  --color: white;\n}\nion-toolbar ion-button,\nion-toolbar ion-back-button,\nion-toolbar ion-menu-button {\n  --color: white;\n}\n.speaker-background {\n  position: relative;\n  display: flex;\n  padding-top: var(--ion-safe-area-top);\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  height: calc(250px + var(--ion-safe-area-top));\n  background: center/cover url(/assets/speaker-background.png) no-repeat;\n}\n.speaker-background img {\n  width: 70px;\n  border-radius: 50%;\n  margin-top: calc(-1 * var(--ion-safe-area-top));\n}\n.speaker-background h2 {\n  position: absolute;\n  bottom: 10px;\n  color: white;\n}\n.md .speaker-background {\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n}\n.ios .speaker-background {\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 16px;\n}\n/*\n * Speaker Details\n */\n.speaker-detail p {\n  margin-left: 6px;\n  margin-right: 6px;\n}\n.speaker-detail hr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  background: var(--ion-color-step-150, #d7d8da);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZXRoZWUvSW9uaWNQcm9qZWN0cy9faW9uaWM1L2lvbmljNWZ1bGxhcHBfZmluYWwvc3JjL2FwcC91aS1sYXlvdXRzL3Byb2ZpbGUvcHJvZmlsZS1vbmUvcHJvZmlsZS1vbmUucGFnZS5zY3NzIiwic3JjL2FwcC91aS1sYXlvdXRzL3Byb2ZpbGUvcHJvZmlsZS1vbmUvcHJvZmlsZS1vbmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUFBO0FBV0UseUJBQUE7QUFDQTtFQUNFLHlCQUFBO0VBQ0Esd0NBQUE7QUNQSjtBRFVFO0VBT0UsMENBQUE7RUFDQSx1Q0FBQTtFQUNBLHNDQUFBO0VBQ0EscUNBQUE7RUFDQyxVQUFBO0FDYkw7QURnQkUsdUNBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUE2QixZQUFBO0VBQzdCLDhCQUFBO0VBQWdDLHNCQUFBO0VBQ2hDLHlCQUFBO0VBQTJCLFVBQUE7RUFFM0IsbUJBQUE7QUNYSjtBRGFFO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQThCLFlBQUE7RUFDOUIsK0JBQUE7RUFBaUMsc0JBQUE7RUFDakMsMEJBQUE7RUFBNEIsVUFBQTtFQUU1QixtQ0FBQTtBQ1JKO0FEV0U7RUFDRTtJQUNJLFVBQUE7RUNSTjtFRFVFO0lBQ0ksVUFBQTtFQ1JOO0FBQ0Y7QURFRTtFQUNFO0lBQ0ksVUFBQTtFQ1JOO0VEVUU7SUFDSSxVQUFBO0VDUk47QUFDRjtBRG9CRTtFQUE2QixzQkFBQTtFQUMzQjtJQUNJLFVBQUE7RUNSTjtFRFVFO0lBQ0ksVUFBQTtFQ1JOO0FBQ0Y7QURXRTtFQUNFO0lBQ0ksVUFBQTtFQ1ROO0VEV0U7SUFDSSxVQUFBO0VDVE47QUFDRjtBRG1CRTtFQUE2QixzQkFBQTtFQUMzQjtJQUNJLFVBQUE7RUNQTjtFRFNFO0lBQ0ksVUFBQTtFQ1BOO0FBQ0Y7QURXRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUNUSjtBRGVFO0VBQ0Usa0JBQUE7RUFFQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFFQSx5QkFBQTtFQUNBLGNBQUE7QUNkSjtBRGlCRTs7O0VBR0UsY0FBQTtBQ2RKO0FEaUJFO0VBQ0Usa0JBQUE7RUFFQSxhQUFBO0VBRUEscUNBQUE7RUFFQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsc0JBQUE7RUFFQSw4Q0FBQTtFQUVBLHNFQUFBO0FDcEJKO0FEdUJFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsK0NBQUE7QUNwQko7QUR1QkU7RUFDRSxrQkFBQTtFQUVBLFlBQUE7RUFFQSxZQUFBO0FDdEJKO0FEeUJFO0VBQ0UseUhBQUE7QUN0Qko7QUR5QkU7RUFDRSw0Q0FBQTtBQ3RCSjtBRHlCRTs7RUFBQTtBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ3ZCSjtBRDBCRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFFQSw4Q0FBQTtBQ3hCSiIsImZpbGUiOiJzcmMvYXBwL3VpLWxheW91dHMvcHJvZmlsZS9wcm9maWxlLW9uZS9wcm9maWxlLW9uZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU3BlYWtlciBCYWNrZ3JvdW5kXG4gKi9cblxuIGlvbi1jb250ZW50IHtcbiAgICAvLyAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIC8vIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gICAgLy8gLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xuICAgLy8gLS1wYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC8qIFRyYW5zcGFyZW50IHN0YW5kYXJkICovXG4gIGlvbi10b29sYmFyLmZpcnN0IHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5zaG93LXRpdGxle1xuICBcbiAgICAvLyBhbmltYXRpb246IGZhZGVpbiAwLjRzO1xuICAgIC8vIC1tb3otYW5pbWF0aW9uOiBmYWRlaW4gMC40czsgLyogRmlyZWZveCAqL1xuICAgIC8vIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMC40czsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgICAvLyAtby1hbmltYXRpb246IGZhZGVpbiAwLjRzOyAvKiBPcGVyYSAqL1xuICAgIC8vIC0tY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UtaW4tb3V0O1xuICAgIC1tcy10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UtaW4tb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQ7XG4gICAgIG9wYWNpdHk6IDE7XG4gIFxuICB9XG4gIC8qIFNob3cgYmFja2dyb3VuZCBpZiBjbGFzcyBpcyBhY3RpdmUgKi9cbiAgLnNob3ctYmFja2dyb3VuZCB7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIGFuaW1hdGlvbjogZmFkZWluIDAuNXM7XG4gICAgLW1vei1hbmltYXRpb246IGZhZGVpbiAwLjVzOyAvKiBGaXJlZm94ICovXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAwLjlzOyAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuICAgIC1vLWFuaW1hdGlvbjogZmFkZWluIDAuNXM7IC8qIE9wZXJhICovXG4gICAgXG4gICAgYmFja2dyb3VuZDogIzAwOWYzNDtcbiAgfVxuICAuaGlkZS10aXRsZSB7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIGFuaW1hdGlvbjogZmFkZW91dCAwLjVzO1xuICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlb3V0IDAuNXM7IC8qIEZpcmVmb3ggKi9cbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZW91dCAwLjVzOyAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuICAgIC1vLWFuaW1hdGlvbjogZmFkZW91dCAwLjVzOyAvKiBPcGVyYSAqL1xuICBcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBmYWRlaW4ge1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OjA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eToxO1xuICAgIH1cbiAgfVxuICBALW1vei1rZXlmcmFtZXMgZmFkZWluIHsgLyogRmlyZWZveCAqL1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OjA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eToxO1xuICAgIH1cbiAgfVxuICBcbiAgLy8jIyMjIyMjIyMjIy8vXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlb3V0IHsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eToxO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6MDtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgZmFkZW91dCB7XG4gICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6MTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBvcGFjaXR5OjA7XG4gICAgfVxuICB9XG4gIEAtbW96LWtleWZyYW1lcyBmYWRlb3V0IHsgLyogRmlyZWZveCAqL1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OjE7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eTowO1xuICAgIH1cbiAgfVxuICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZW91dCB7IC8qIFNhZmFyaSBhbmQgQ2hyb21lICovXG4gICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6MTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBvcGFjaXR5OjA7XG4gICAgfVxuICB9XG4gIFxuICBcbiAgLnRvcC1ncmV5LWJveHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG4gIH1cbiAgXG4gIFxuICBcbiAgLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIFxuICBpb24tdG9vbGJhciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICBcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbixcbiAgaW9uLXRvb2xiYXIgaW9uLWJhY2stYnV0dG9uLFxuICBpb24tdG9vbGJhciBpb24tbWVudS1idXR0b24ge1xuICAgIC0tY29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICAuc3BlYWtlci1iYWNrZ3JvdW5kIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gIFxuICAgIHBhZGRpbmctdG9wOiB2YXIoLS1pb24tc2FmZS1hcmVhLXRvcCk7XG4gIFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIFxuICAgIGhlaWdodDogY2FsYygyNTBweCArIHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wKSk7XG4gIFxuICAgIGJhY2tncm91bmQ6IGNlbnRlciAvIGNvdmVyIHVybCgvYXNzZXRzL3NwZWFrZXItYmFja2dyb3VuZC5wbmcpIG5vLXJlcGVhdDtcbiAgfVxuICBcbiAgLnNwZWFrZXItYmFja2dyb3VuZCBpbWcge1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW4tdG9wOiBjYWxjKC0xICogdmFyKC0taW9uLXNhZmUtYXJlYS10b3ApKTtcbiAgfVxuICBcbiAgLnNwZWFrZXItYmFja2dyb3VuZCBoMiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICBcbiAgICBib3R0b206IDEwcHg7XG4gIFxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgLm1kIC5zcGVha2VyLWJhY2tncm91bmQge1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggM3B4IDFweCAtMnB4LCByZ2JhKDAsIDAsIDAsIDAuMTQpIDBweCAycHggMnB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggMXB4IDVweCAwcHg7XG4gIH1cbiAgXG4gIC5pb3MgLnNwZWFrZXItYmFja2dyb3VuZCB7XG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggNHB4IDE2cHg7XG4gIH1cbiAgXG4gIC8qXG4gICAqIFNwZWFrZXIgRGV0YWlsc1xuICAgKi9cbiAgXG4gIC5zcGVha2VyLWRldGFpbCBwIHtcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICB9XG4gIFxuICAuc3BlYWtlci1kZXRhaWwgaHIge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbiAgfVxuICAiLCIvKlxuICogU3BlYWtlciBCYWNrZ3JvdW5kXG4gKi9cbi8qIFRyYW5zcGFyZW50IHN0YW5kYXJkICovXG5pb24tdG9vbGJhci5maXJzdCB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5zaG93LXRpdGxlIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UtaW4tb3V0O1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKiBTaG93IGJhY2tncm91bmQgaWYgY2xhc3MgaXMgYWN0aXZlICovXG4uc2hvdy1iYWNrZ3JvdW5kIHtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBhbmltYXRpb246IGZhZGVpbiAwLjVzO1xuICAtbW96LWFuaW1hdGlvbjogZmFkZWluIDAuNXM7XG4gIC8qIEZpcmVmb3ggKi9cbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAwLjlzO1xuICAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuICAtby1hbmltYXRpb246IGZhZGVpbiAwLjVzO1xuICAvKiBPcGVyYSAqL1xuICBiYWNrZ3JvdW5kOiAjMDA5ZjM0O1xufVxuXG4uaGlkZS10aXRsZSB7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgYW5pbWF0aW9uOiBmYWRlb3V0IDAuNXM7XG4gIC1tb3otYW5pbWF0aW9uOiBmYWRlb3V0IDAuNXM7XG4gIC8qIEZpcmVmb3ggKi9cbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVvdXQgMC41cztcbiAgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgLW8tYW5pbWF0aW9uOiBmYWRlb3V0IDAuNXM7XG4gIC8qIE9wZXJhICovXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBmYWRlaW4ge1xuICAvKiBGaXJlZm94ICovXG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlb3V0IHtcbiAgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlb3V0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGZhZGVvdXQge1xuICAvKiBGaXJlZm94ICovXG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlb3V0IHtcbiAgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuLnRvcC1ncmV5LWJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi10b29sYmFyIGlvbi1idXR0b24sXG5pb24tdG9vbGJhciBpb24tYmFjay1idXR0b24sXG5pb24tdG9vbGJhciBpb24tbWVudS1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnNwZWFrZXItYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy10b3A6IHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogY2FsYygyNTBweCArIHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wKSk7XG4gIGJhY2tncm91bmQ6IGNlbnRlci9jb3ZlciB1cmwoL2Fzc2V0cy9zcGVha2VyLWJhY2tncm91bmQucG5nKSBuby1yZXBlYXQ7XG59XG5cbi5zcGVha2VyLWJhY2tncm91bmQgaW1nIHtcbiAgd2lkdGg6IDcwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXRvcDogY2FsYygtMSAqIHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wKSk7XG59XG5cbi5zcGVha2VyLWJhY2tncm91bmQgaDIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWQgLnNwZWFrZXItYmFja2dyb3VuZCB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggM3B4IDFweCAtMnB4LCByZ2JhKDAsIDAsIDAsIDAuMTQpIDBweCAycHggMnB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggMXB4IDVweCAwcHg7XG59XG5cbi5pb3MgLnNwZWFrZXItYmFja2dyb3VuZCB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDRweCAxNnB4O1xufVxuXG4vKlxuICogU3BlYWtlciBEZXRhaWxzXG4gKi9cbi5zcGVha2VyLWRldGFpbCBwIHtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG59XG5cbi5zcGVha2VyLWRldGFpbCBociB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/ui-layouts/profile/profile-one/profile-one.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/ui-layouts/profile/profile-one/profile-one.page.ts ***!
  \********************************************************************/
/*! exports provided: ProfileOnePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileOnePage", function() { return ProfileOnePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfileOnePage = class ProfileOnePage {
    constructor() { }
    ngOnInit() {
    }
};
ProfileOnePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-one',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-one.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/profile/profile-one/profile-one.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile-one.page.scss */ "./src/app/ui-layouts/profile/profile-one/profile-one.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProfileOnePage);



/***/ })

}]);
//# sourceMappingURL=ui-layouts-profile-profile-one-profile-one-module-es2015.js.map