(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-layouts-form-form-home-form-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/form/form-home/form-home.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/form/form-home/form-home.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>signin-one</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<!-- ############# ionic input component ################ -->\n\n\n<ion-card>\n  <ion-card-header>\n   <h4>ionic input component</h4>\n  </ion-card-header>\n      <!-- Default Input -->\n      <ion-input></ion-input>\n\n      <!-- Input with value -->\n      <ion-input value=\"custom\"></ion-input>\n\n      <!-- Input with placeholder -->\n      <ion-input placeholder=\"Enter Input\"></ion-input>\n\n      <!-- Input with clear button when there is a value -->\n      <ion-input clearInput value=\"clear me\"></ion-input>\n\n      <!-- Number type input -->\n      <ion-input type=\"number\" value=\"333\"></ion-input>\n\n      <!-- Disabled input -->\n      <ion-input value=\"Disabled\" disabled></ion-input>\n\n      <!-- Readonly input -->\n      <ion-input value=\"Readonly\" readonly></ion-input>\n\n      <!-- Inputs with labels -->\n      <ion-item>\n        <ion-label>Default Label</ion-label>\n        <ion-input></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Floating Label</ion-label>\n        <ion-input></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"fixed\">Fixed Label</ion-label>\n        <ion-input></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Stacked Label</ion-label>\n        <ion-input></ion-input>\n      </ion-item>\n \n</ion-card>\n\n\n<ion-card>\n  <ion-card-header>\n    Textarea\n  </ion-card-header>\n  <ion-card-content>\n\n<!-- Textarea in an item with a placeholder -->\n<ion-item>\n  <ion-textarea placeholder=\"Enter more information here...\"></ion-textarea>\n</ion-item>\n\n<!-- Textarea in an item with a floating label -->\n<ion-item>\n  <ion-label position=\"floating\">Description</ion-label>\n  <ion-textarea></ion-textarea>\n</ion-item>\n\n<!-- Disabled and readonly textarea in an item with a stacked label -->\n<ion-item>\n  <ion-label position=\"stacked\">Summary</ion-label>\n  <ion-textarea\n    disabled\n    readonly\n    value=\"Ionic enables developers to build performant, high-quality mobile apps.\">\n  </ion-textarea>\n</ion-item>\n\n<!-- Textarea that clears the value on edit -->\n<ion-item>\n  <ion-label>Comment</ion-label>\n  <ion-textarea clearOnEdit=\"true\"></ion-textarea>\n</ion-item>\n\n<!-- Textarea with custom number of rows and cols -->\n<ion-item>\n  <ion-label>Notes</ion-label>\n  <ion-textarea rows=\"6\" cols=\"20\" placeholder=\"Enter any notes here...\"></ion-textarea>\n</ion-item>\n  </ion-card-content>\n</ion-card>\n\n\n<!-- ############# Style 1 : round border 8px ################ -->\n<ion-card class=\"ion-padding\">\n  <ion-card-header>\n    <h4>Rounded border : 8px</h4>\n  </ion-card-header>\n\n\n      <ion-list>\n\n        <ion-item lines=\"none\" class=\"roundedInput0px\">\n          <ion-label>\n            <ion-icon  name=\"person-add-outline\"></ion-icon>\n            </ion-label>\n          <ion-input placeholder=\"Username\" ></ion-input>\n        </ion-item>\n\n        <ion-item lines=\"none\" class=\"roundedInput25px\">\n          <ion-label>\n            <ion-icon size=\"large\" name=\"person-add-outline\"></ion-icon>\n            </ion-label>\n            <ion-textarea rows=\"6\" placeholder=\"Enter any notes here...\"></ion-textarea>\n          <!-- <ion-input placeholder=\"Username\" ></ion-input> -->\n        </ion-item>\n\n\n\n        <ion-item lines=\"none\" class=\"roundedInput\">\n          <ion-label>\n            <ion-icon name=\"person-add-outline\"></ion-icon>\n            </ion-label>\n          <ion-input placeholder=\"Username\" ></ion-input>\n        </ion-item>\n\n\n        <ion-item lines=\"none\" class=\"roundedInput\">\n          <ion-label position=\"floating\">Floating Input</ion-label>\n          <ion-input placeholder=\"Username\" ></ion-input>\n        </ion-item>\n\n\n\n        <ion-item lines=\"none\" class=\"roundedInput\">\n          <ion-label position=\"\">Default Input</ion-label>\n          <ion-input placeholder=\"Username\" ></ion-input>\n        </ion-item>\n\n\n        <ion-item lines=\"none\" class=\"roundedInput\">\n          <ion-label position=\"stacked\">Stacked Input</ion-label>\n          <ion-input></ion-input>\n        </ion-item>\n      \n        <ion-item lines=\"none\" mode=\"ios\" class=\"roundedInput\">\n          <ion-label >Rounded Input++++++</ion-label>\n          <ion-input placeholder=\"Username\" ></ion-input>\n        </ion-item>\n      \n      \n      \n      <!-- Default Input -->\n      <ion-item  lines=\"none\" class=\"roundedInput\">\n        <ion-input></ion-input>\n      </ion-item>\n      \n      <ion-item class=\"sharpedInput\"> \n        <!-- Input with value -->\n        <ion-input value=\"custom\"></ion-input>\n      </ion-item>\n      \n      \n      <ion-item  class=\"roundedInput25px\" >\n        <ion-label>Pepperoni</ion-label>\n        <ion-toggle ></ion-toggle>\n      </ion-item>\n      \n      \n      <ion-item class=\"roundedInput25px\">\n        <ion-label>Gender</ion-label>\n        <ion-select placeholder=\"Select One\">\n          <ion-select-option value=\"f\">Female</ion-select-option>\n          <ion-select-option value=\"m\">Male</ion-select-option>\n        </ion-select>\n      </ion-item>\n      \n      <!-- Input with placeholder -->\n      <ion-input placeholder=\"Enter Input\"></ion-input>\n      \n      <!-- Input with clear button when there is a value -->\n      <ion-input clearInput value=\"clear me\"></ion-input>\n      \n      <!-- Number type input -->\n      <ion-input type=\"number\" value=\"333\"></ion-input>\n      \n      <!-- Disabled input -->\n      <ion-input value=\"Disabled\" disabled></ion-input>\n      \n      <!-- Readonly input -->\n      <ion-input value=\"Readonly\" readonly></ion-input>\n      \n      \n      </ion-list>\n</ion-card>\n<div class=\"ion-margin\">\n\n\n\n  \n</div>\n \n\n\n\n\n\n\n\n<!-- ############# Style 2 ################ -->\n\n  <div id=\"topSection\">\n    <ion-card>\n      <ion-card-header>\n       <h4> Rounded border : 25px</h4>\n      </ion-card-header>\n        <ion-grid item-start>\n          <ion-row>\n            <ion-col id = \"userAvatarContainer\" size = \"1\" size-lg>\n              <ion-avatar id = \"userAvatar\">\n                <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\n              </ion-avatar>\n            </ion-col>\n\n            <ion-col>\n              <ion-input id=\"discussTitle\" placeholder=\"Title of the discussion\" pattern=\"text\"></ion-input>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-textarea class=\"sharpedInput\" wrap=\"soft\" placeholder=\"Write a discussion...\">\n            </ion-textarea>\n          </ion-row>\n        </ion-grid>\n\n\n      <ion-card-content>\n        <ion-button expand=\"full\">Publish</ion-button>\n      </ion-card-content>\n\n    </ion-card>\n  </div>\n\n\n\n\n<!-- ############# Style 3 ################ -->\n\n\n  <div text-center class=\"logo-container ion-margin\">\n    <img class=\"login-logo\" src=\"./assets/imgs/clean_connect.png\" alt=\"Logo of clean connect\">\n      <h4>Sign in to your account</h4>\n    </div>\n\n      <ion-list class=\"ion-margin\">  \n\n        <ion-item class=\"itemBg\">\n          <ion-label><ion-icon name=\"ios-person-outline\" item-left></ion-icon></ion-label>\n          <ion-input class=\"inputBg\" type=\"text\" value=\"agira\" placeholder=\"Username\" ></ion-input>\n        </ion-item>\n\n        <ion-item class=\"itemBg\">\n          <ion-label><ion-icon name=\"ios-lock-outline\" item-left></ion-icon></ion-label>\n          <ion-input class=\"inputBg\" type=\"password\" value=\"Agira1\" placeholder=\"Password\" ></ion-input>\n        </ion-item>\n  \n \n      </ion-list>\n      <button class=\"sign-in\" type=\"submit\" ion-button full favourite >Sign In</button>\n\n<!--  ##################################################### -->\n\n<ion-list>  \n\n  <ion-item>\n    <ion-label>\n      <ion-icon name=\"person-add-outline\"></ion-icon>\n      </ion-label>\n    <ion-input type=\"text\" value=\"agira\" placeholder=\"Username\" ></ion-input>\n  </ion-item>\n  <ion-item no-lines  >\n  <div>\n    Please enter valid Username\n  </div>\n  </ion-item>\n  <ion-item>\n    <ion-label>\n      <ion-icon name=\"today-outline\"></ion-icon>\n      </ion-label>\n    <ion-input type=\"password\" value=\"Agira1\" placeholder=\"Password\" ></ion-input>\n  </ion-item>\n  <ion-item no-lines >\n  <div>\n    Please enter Password\n  </div>\n  </ion-item>\n\n\n  <ion-item>\n\n    <ion-input type=\"text\" value=\"agira\" placeholder=\"Username\" ></ion-input>\n    <ion-label>\n      <ion-icon name=\"ribbon-outline\"></ion-icon>\n      </ion-label>\n  </ion-item>\n\n  <ion-item>\n\n    <ion-input type=\"password\" value=\"Agira1\" placeholder=\"Password\" ></ion-input>\n    <ion-label>\n      <ion-icon name=\"mail-open-outline\"></ion-icon>\n      </ion-label>\n  </ion-item>\n\n\n\n</ion-list>\n\n\n\n\n\n\n  <ion-list lines=\"none\">\n    <ion-item class=\"input-container\" lines=\"none\" align-items-center>\n      <ion-icon class=\"custom-icon\" name=\"mailgray\" slot=\"start\" no-padding></ion-icon>\n      <ion-label position=\"floating\" no-padding>Email</ion-label>\n      <ion-input no-padding ></ion-input>\n      <div class=\"email-pattern\" slot=\"end\">@company.edu</div>\n    </ion-item>\n    <ion-item class=\"input-container\" lines=\"none\">\n      <ion-icon name=\"passwordgray\" slot=\"start\"></ion-icon>\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input type=\"password\" ></ion-input>\n      <ion-icon name=\"mail-open-outline\"></ion-icon>\n\n    </ion-item>\n  </ion-list>\n\n\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/ui-layouts/form/form-home/form-home-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/ui-layouts/form/form-home/form-home-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: FormHomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormHomePageRoutingModule", function() { return FormHomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _form_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-home.page */ "./src/app/ui-layouts/form/form-home/form-home.page.ts");




const routes = [
    {
        path: '',
        component: _form_home_page__WEBPACK_IMPORTED_MODULE_3__["FormHomePage"]
    }
];
let FormHomePageRoutingModule = class FormHomePageRoutingModule {
};
FormHomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FormHomePageRoutingModule);



/***/ }),

/***/ "./src/app/ui-layouts/form/form-home/form-home.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/ui-layouts/form/form-home/form-home.module.ts ***!
  \***************************************************************/
/*! exports provided: FormHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormHomePageModule", function() { return FormHomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _form_home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-home-routing.module */ "./src/app/ui-layouts/form/form-home/form-home-routing.module.ts");
/* harmony import */ var _form_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-home.page */ "./src/app/ui-layouts/form/form-home/form-home.page.ts");







let FormHomePageModule = class FormHomePageModule {
};
FormHomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _form_home_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormHomePageRoutingModule"]
        ],
        declarations: [_form_home_page__WEBPACK_IMPORTED_MODULE_6__["FormHomePage"]]
    })
], FormHomePageModule);



/***/ }),

/***/ "./src/app/ui-layouts/form/form-home/form-home.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/ui-layouts/form/form-home/form-home.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWxheW91dHMvZm9ybS9mb3JtLWhvbWUvZm9ybS1ob21lLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ui-layouts/form/form-home/form-home.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/ui-layouts/form/form-home/form-home.page.ts ***!
  \*************************************************************/
/*! exports provided: FormHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormHomePage", function() { return FormHomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FormHomePage = class FormHomePage {
    constructor() { }
    ngOnInit() {
    }
};
FormHomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/form/form-home/form-home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-home.page.scss */ "./src/app/ui-layouts/form/form-home/form-home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FormHomePage);



/***/ })

}]);
//# sourceMappingURL=ui-layouts-form-form-home-form-home-module-es2015.js.map