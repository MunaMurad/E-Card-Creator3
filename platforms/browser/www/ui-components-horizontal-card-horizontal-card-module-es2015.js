(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-components-horizontal-card-horizontal-card-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/horizontal-card/horizontal-card.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/horizontal-card/horizontal-card.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent={true}>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Card</ion-title>\n  </ion-toolbar>\n</ion-header>,\n\n<ion-content fullscreen={true}>\n  <div class=\"horizontal-scroll ion-margin-top\">\n\n    <ion-card class=\"horizontal-card action-card\" *ngFor=\"let i of [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]\">\n      <img class=\"header-img\" src=\"https://ionic-docs-demo.herokuapp.com/assets/card-top-img.png\" />\n      <ion-card-header>\n        <ion-card-subtitle>Card Subtitle</ion-card-subtitle>\n        <ion-card-title>Card Title</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        Here's a small text description for the card content. Nothing more, nothing less.\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <ion-button size=\"small\">Action</ion-button>\n            </ion-col>\n            <ion-col>\n              <ion-button fill=\"clear\">\n                <ion-icon slot=\"icon-only\" ios=\"heart\" md=\"heart-sharp\"></ion-icon>\n              </ion-button>\n              <ion-button fill=\"clear\">\n                <ion-icon slot=\"icon-only\" ios=\"share\" md=\"share-sharp\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/ui-components/horizontal-card/horizontal-card-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/ui-components/horizontal-card/horizontal-card-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: HorizontalCardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalCardPageRoutingModule", function() { return HorizontalCardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _horizontal_card_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./horizontal-card.page */ "./src/app/ui-components/horizontal-card/horizontal-card.page.ts");




const routes = [
    {
        path: '',
        component: _horizontal_card_page__WEBPACK_IMPORTED_MODULE_3__["HorizontalCardPage"]
    }
];
let HorizontalCardPageRoutingModule = class HorizontalCardPageRoutingModule {
};
HorizontalCardPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HorizontalCardPageRoutingModule);



/***/ }),

/***/ "./src/app/ui-components/horizontal-card/horizontal-card.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/ui-components/horizontal-card/horizontal-card.module.ts ***!
  \*************************************************************************/
/*! exports provided: HorizontalCardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalCardPageModule", function() { return HorizontalCardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _horizontal_card_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./horizontal-card-routing.module */ "./src/app/ui-components/horizontal-card/horizontal-card-routing.module.ts");
/* harmony import */ var _horizontal_card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./horizontal-card.page */ "./src/app/ui-components/horizontal-card/horizontal-card.page.ts");







let HorizontalCardPageModule = class HorizontalCardPageModule {
};
HorizontalCardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _horizontal_card_routing_module__WEBPACK_IMPORTED_MODULE_5__["HorizontalCardPageRoutingModule"]
        ],
        declarations: [_horizontal_card_page__WEBPACK_IMPORTED_MODULE_6__["HorizontalCardPage"]]
    })
], HorizontalCardPageModule);



/***/ }),

/***/ "./src/app/ui-components/horizontal-card/horizontal-card.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/ui-components/horizontal-card/horizontal-card.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ios body.dark {\n  --ion-item-background: #1c1c1e;\n}\n\nion-card .header-img {\n  width: 100%;\n  height: 120px;\n}\n\nion-card ion-card-subtitle {\n  color: var(--text-lighter);\n}\n\nion-card ion-card-title {\n  color: var(--text-darker);\n}\n\nion-card ion-card-content {\n  color: var(--text-light);\n}\n\nion-card ion-list ion-item {\n  --padding-start: 0;\n}\n\n/* Action Card */\n\n.action-card {\n  width: 200px !important;\n}\n\n.action-card ion-grid {\n  --ion-grid-column-padding: 0;\n  padding: 10px 0 0;\n}\n\n.action-card ion-col:last-child {\n  text-align: right;\n}\n\n.md .action-card .button-clear {\n  --background-hover: currentColor;\n  --background-focused: currentColor;\n}\n\n.action-card .button-clear {\n  --color: #c6cede;\n  --border-radius: 50%;\n  --padding-top: 0;\n  --padding-end: 0;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  margin: 0;\n  height: 36px;\n  width: 36px;\n}\n\n/* Apps Card */\n\n.apps-card ion-list ion-thumbnail {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  --border-radius: 14px;\n}\n\n/* Coworker Card */\n\n.coworker-card .header-img {\n  height: 160px;\n}\n\n.coworker-card h1 {\n  font-weight: 600;\n  font-size: 18px;\n}\n\n.coworker-card p {\n  color: var(--text-light);\n}\n\n.coworker-card ion-icon {\n  align-self: start;\n  margin-top: 10px;\n  margin-right: 29px;\n  color: var(--text-lightest);\n}\n\n/* Music Card */\n\n.music-card ion-card-header,\n.music-card ion-card-content {\n  text-align: center;\n}\n\n.music-card img {\n  width: 248px;\n  height: 248px;\n  box-shadow: 0px 2px 8px rgba(2, 8, 20, 0.1), 0px 8px 16px rgba(2, 8, 20, 0.08);\n  border-radius: 6px;\n}\n\n.music-card h2 {\n  font-weight: 600;\n  font-size: 16px;\n  color: var(--text-darker);\n}\n\n.music-card p {\n  color: var(--text-light);\n}\n\n.music-card ion-button {\n  --padding-start: 7px;\n  --padding-end: 7px;\n  margin: 0;\n}\n\n.music-card .button-largest {\n  font-size: 28px;\n}\n\n.music-card ion-progress-bar {\n  margin: 30px 0 20px;\n  --background: var(--background-darker);\n  --progress-background: var(--text-dark);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZXRoZWUvSW9uaWNQcm9qZWN0cy9faW9uaWM1L2lvbmljNWZ1bGxhcHBfZmluYWwvc3JjL2FwcC91aS1jb21wb25lbnRzL2hvcml6b250YWwtY2FyZC9ob3Jpem9udGFsLWNhcmQucGFnZS5zY3NzIiwic3JjL2FwcC91aS1jb21wb25lbnRzL2hvcml6b250YWwtY2FyZC9ob3Jpem9udGFsLWNhcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7QUNDSjs7QURhRztFQUNDLFdBQUE7RUFDQSxhQUFBO0FDVko7O0FEYUc7RUFDQywwQkFBQTtBQ1ZKOztBRGFHO0VBQ0MseUJBQUE7QUNWSjs7QURhRztFQUNDLHdCQUFBO0FDVko7O0FEYUc7RUFDQyxrQkFBQTtBQ1ZKOztBRGFFLGdCQUFBOztBQUNBO0VBRUUsdUJBQUE7QUNYSjs7QURhRztFQUNDLDRCQUFBO0VBRUEsaUJBQUE7QUNYSjs7QURjRztFQUNDLGlCQUFBO0FDWEo7O0FEY0U7RUFDRSxnQ0FBQTtFQUNBLGtDQUFBO0FDWEo7O0FEY0c7RUFDQyxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSxTQUFBO0VBRUEsWUFBQTtFQUNBLFdBQUE7QUNiSjs7QURnQkUsY0FBQTs7QUFFQztFQUNDLGVBQUE7RUFDQSxrQkFBQTtFQUVBLHFCQUFBO0FDZko7O0FEa0JFLGtCQUFBOztBQUVDO0VBQ0MsYUFBQTtBQ2hCSjs7QURtQkc7RUFDQyxnQkFBQTtFQUNBLGVBQUE7QUNoQko7O0FEbUJHO0VBQ0Msd0JBQUE7QUNoQko7O0FEbUJHO0VBQ0MsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBRUEsMkJBQUE7QUNqQko7O0FEb0JFLGVBQUE7O0FBRUM7O0VBRUMsa0JBQUE7QUNsQko7O0FEcUJHO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFFQSw4RUFBQTtFQUNBLGtCQUFBO0FDbkJKOztBRHNCRztFQUNDLGdCQUFBO0VBQ0EsZUFBQTtFQUVBLHlCQUFBO0FDcEJKOztBRHVCRztFQUNDLHdCQUFBO0FDcEJKOztBRHVCRztFQUNDLG9CQUFBO0VBQ0Esa0JBQUE7RUFFQSxTQUFBO0FDckJKOztBRHdCRztFQUNDLGVBQUE7QUNyQko7O0FEd0JHO0VBQ0MsbUJBQUE7RUFFQSxzQ0FBQTtFQUNBLHVDQUFBO0FDdEJKIiwiZmlsZSI6InNyYy9hcHAvdWktY29tcG9uZW50cy9ob3Jpem9udGFsLWNhcmQvaG9yaXpvbnRhbC1jYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pb3MgYm9keS5kYXJrICB7XG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMWMxYzFlO1xuICB9XG4gIFxuLy8gICAge1xuLy8gICAgIC0tYmFja2dyb3VuZC1kYXJrZXI6IHZhcigtLWlvbi1jb2xvci1zdGVwLTIwMCwgI2U5ZWRmMyk7XG4gIFxuLy8gICAgIC0tdGV4dC1kYXJrOiB2YXIoLS1pb24tY29sb3Itc3RlcC04NTAsICMyNzMyM2YpO1xuLy8gICAgIC0tdGV4dC1kYXJrZXI6IHZhcigtLWlvbi1jb2xvci1zdGVwLTk1MCwgIzBlMTUxZik7XG4gIFxuLy8gICAgIC0tdGV4dC1saWdodDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjUwLCAjNWI3MDhiKTtcbi8vICAgICAtLXRleHQtbGlnaHRlcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNTUwLCAjNzM4NDlhKTtcbi8vICAgICAtLXRleHQtbGlnaHRlc3Q6IHZhcigtLWlvbi1jb2xvci1zdGVwLTMwMCwgI2IyYmVjZCk7XG4vLyAgIH1cbiAgXG4gICBpb24tY2FyZCAuaGVhZGVyLWltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgfVxuICBcbiAgIGlvbi1jYXJkIGlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodGVyKTtcbiAgfVxuICBcbiAgIGlvbi1jYXJkIGlvbi1jYXJkLXRpdGxlIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrZXIpO1xuICB9XG4gIFxuICAgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCB7XG4gICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICB9XG4gIFxuICAgaW9uLWNhcmQgaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgfVxuICBcbiAgLyogQWN0aW9uIENhcmQgKi9cbiAgLmFjdGlvbi1jYXJkICB7XG5cbiAgICB3aWR0aDogMjAwcHggIWltcG9ydGFudDtcbiAgfVxuICAgLmFjdGlvbi1jYXJkIGlvbi1ncmlkIHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwO1xuICAgXG4gICAgcGFkZGluZzogMTBweCAwIDA7XG4gIH1cbiAgXG4gICAuYWN0aW9uLWNhcmQgaW9uLWNvbDpsYXN0LWNoaWxkIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuICBcbiAgLm1kICAuYWN0aW9uLWNhcmQgLmJ1dHRvbi1jbGVhciB7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBjdXJyZW50Q29sb3I7XG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IGN1cnJlbnRDb2xvcjtcbiAgfVxuICBcbiAgIC5hY3Rpb24tY2FyZCAuYnV0dG9uLWNsZWFyIHtcbiAgICAtLWNvbG9yOiAjYzZjZWRlO1xuICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC0tcGFkZGluZy10b3A6IDA7XG4gICAgLS1wYWRkaW5nLWVuZDogMDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgXG4gICAgbWFyZ2luOiAwO1xuICBcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgd2lkdGg6IDM2cHg7XG4gIH1cbiAgXG4gIC8qIEFwcHMgQ2FyZCAqL1xuICBcbiAgIC5hcHBzLWNhcmQgaW9uLWxpc3QgaW9uLXRodW1ibmFpbCB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNHB4O1xuICB9XG4gIFxuICAvKiBDb3dvcmtlciBDYXJkICovXG4gIFxuICAgLmNvd29ya2VyLWNhcmQgLmhlYWRlci1pbWcge1xuICAgIGhlaWdodDogMTYwcHg7XG4gIH1cbiAgXG4gICAuY293b3JrZXItY2FyZCBoMSB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgXG4gICAuY293b3JrZXItY2FyZCBwIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIH1cbiAgXG4gICAuY293b3JrZXItY2FyZCBpb24taWNvbiB7XG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDI5cHg7XG4gIFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0ZXN0KTtcbiAgfVxuICBcbiAgLyogTXVzaWMgQ2FyZCAqL1xuICBcbiAgIC5tdXNpYy1jYXJkIGlvbi1jYXJkLWhlYWRlcixcbiAgIC5tdXNpYy1jYXJkIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgIC5tdXNpYy1jYXJkIGltZyB7XG4gICAgd2lkdGg6IDI0OHB4O1xuICAgIGhlaWdodDogMjQ4cHg7XG4gIFxuICAgIGJveC1zaGFkb3c6IDBweCAycHggOHB4IHJnYmEoMiwgOCwgMjAsIDAuMSksIDBweCA4cHggMTZweCByZ2JhKDIsIDgsIDIwLCAwLjA4KTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIH1cbiAgXG4gICAubXVzaWMtY2FyZCBoMiB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmtlcik7XG4gIH1cbiAgXG4gICAubXVzaWMtY2FyZCBwIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG4gIH1cbiAgXG4gICAubXVzaWMtY2FyZCBpb24tYnV0dG9uIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDdweDtcbiAgICAtLXBhZGRpbmctZW5kOiA3cHg7XG4gIFxuICAgIG1hcmdpbjogMDtcbiAgfVxuICBcbiAgIC5tdXNpYy1jYXJkIC5idXR0b24tbGFyZ2VzdCB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICB9XG4gIFxuICAgLm11c2ljLWNhcmQgaW9uLXByb2dyZXNzLWJhciB7XG4gICAgbWFyZ2luOiAzMHB4IDAgMjBweDtcbiAgXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWRhcmtlcik7XG4gICAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiB2YXIoLS10ZXh0LWRhcmspO1xuICB9IiwiLmlvcyBib2R5LmRhcmsge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICMxYzFjMWU7XG59XG5cbmlvbi1jYXJkIC5oZWFkZXItaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTIwcHg7XG59XG5cbmlvbi1jYXJkIGlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHRlcik7XG59XG5cbmlvbi1jYXJkIGlvbi1jYXJkLXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFya2VyKTtcbn1cblxuaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbn1cblxuaW9uLWNhcmQgaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG59XG5cbi8qIEFjdGlvbiBDYXJkICovXG4uYWN0aW9uLWNhcmQge1xuICB3aWR0aDogMjAwcHggIWltcG9ydGFudDtcbn1cblxuLmFjdGlvbi1jYXJkIGlvbi1ncmlkIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMDtcbiAgcGFkZGluZzogMTBweCAwIDA7XG59XG5cbi5hY3Rpb24tY2FyZCBpb24tY29sOmxhc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLm1kIC5hY3Rpb24tY2FyZCAuYnV0dG9uLWNsZWFyIHtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBjdXJyZW50Q29sb3I7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiBjdXJyZW50Q29sb3I7XG59XG5cbi5hY3Rpb24tY2FyZCAuYnV0dG9uLWNsZWFyIHtcbiAgLS1jb2xvcjogI2M2Y2VkZTtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDM2cHg7XG4gIHdpZHRoOiAzNnB4O1xufVxuXG4vKiBBcHBzIENhcmQgKi9cbi5hcHBzLWNhcmQgaW9uLWxpc3QgaW9uLXRodW1ibmFpbCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDE0cHg7XG59XG5cbi8qIENvd29ya2VyIENhcmQgKi9cbi5jb3dvcmtlci1jYXJkIC5oZWFkZXItaW1nIHtcbiAgaGVpZ2h0OiAxNjBweDtcbn1cblxuLmNvd29ya2VyLWNhcmQgaDEge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5jb3dvcmtlci1jYXJkIHAge1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XG59XG5cbi5jb3dvcmtlci1jYXJkIGlvbi1pY29uIHtcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMjlweDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHRlc3QpO1xufVxuXG4vKiBNdXNpYyBDYXJkICovXG4ubXVzaWMtY2FyZCBpb24tY2FyZC1oZWFkZXIsXG4ubXVzaWMtY2FyZCBpb24tY2FyZC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubXVzaWMtY2FyZCBpbWcge1xuICB3aWR0aDogMjQ4cHg7XG4gIGhlaWdodDogMjQ4cHg7XG4gIGJveC1zaGFkb3c6IDBweCAycHggOHB4IHJnYmEoMiwgOCwgMjAsIDAuMSksIDBweCA4cHggMTZweCByZ2JhKDIsIDgsIDIwLCAwLjA4KTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4ubXVzaWMtY2FyZCBoMiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFya2VyKTtcbn1cblxuLm11c2ljLWNhcmQgcCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbn1cblxuLm11c2ljLWNhcmQgaW9uLWJ1dHRvbiB7XG4gIC0tcGFkZGluZy1zdGFydDogN3B4O1xuICAtLXBhZGRpbmctZW5kOiA3cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLm11c2ljLWNhcmQgLmJ1dHRvbi1sYXJnZXN0IHtcbiAgZm9udC1zaXplOiAyOHB4O1xufVxuXG4ubXVzaWMtY2FyZCBpb24tcHJvZ3Jlc3MtYmFyIHtcbiAgbWFyZ2luOiAzMHB4IDAgMjBweDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWRhcmtlcik7XG4gIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogdmFyKC0tdGV4dC1kYXJrKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/ui-components/horizontal-card/horizontal-card.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/ui-components/horizontal-card/horizontal-card.page.ts ***!
  \***********************************************************************/
/*! exports provided: HorizontalCardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalCardPage", function() { return HorizontalCardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HorizontalCardPage = class HorizontalCardPage {
    constructor() { }
    ngOnInit() {
    }
};
HorizontalCardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-horizontal-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./horizontal-card.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/horizontal-card/horizontal-card.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./horizontal-card.page.scss */ "./src/app/ui-components/horizontal-card/horizontal-card.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HorizontalCardPage);



/***/ })

}]);
//# sourceMappingURL=ui-components-horizontal-card-horizontal-card-module-es2015.js.map