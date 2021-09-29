(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-components-datetime-datetime-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/datetime/datetime.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/datetime/datetime.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>datetime</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label>MMMM</ion-label>\n    <ion-datetime displayFormat=\"MMMM\" value=\"2012-12-15T13:47:20.789\"></ion-datetime>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label>MM DD YY</ion-label>\n    <ion-datetime displayFormat=\"MM DD YY\" placeholder=\"Select Date\"></ion-datetime>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label>Disabled</ion-label>\n    <ion-datetime id=\"dynamicDisabled\" displayFormat=\"MM DD YY\" disabled value=\"1994-12-15\"></ion-datetime>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label>YYYY</ion-label>\n    <ion-datetime [pickerOptions]=\"customPickerOptions\" placeholder=\"Custom Options\" displayFormat=\"YYYY\" min=\"1981\" max=\"2002\"></ion-datetime>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label position=\"stacked\">MMMM YY</ion-label>\n    <ion-datetime displayFormat=\"MMMM YY\" min=\"1989-06-04\" max=\"2004-08-23\" value=\"1994-12-15T13:47:20.789\"></ion-datetime>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label position=\"floating\">MM/DD/YYYY</ion-label>\n    <ion-datetime displayFormat=\"MM/DD/YYYY\" min=\"1994-03-14\" max=\"2012-12-09\" value=\"2002-09-23T15:03:46.789\"></ion-datetime>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label position=\"floating\">MM/DD/YYYY</ion-label>\n    <ion-datetime displayFormat=\"MM/DD/YYYY\" min=\"1994-03-14\" max=\"2012-12-09\"></ion-datetime>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label>DDD. MMM DD, YY (custom locale)</ion-label>\n    <ion-datetime value=\"1995-04-15\" min=\"1990-02\" max=\"2000\"\n      [dayShortNames]=\"customDayShortNames\"\n      displayFormat=\"DDD. MMM DD, YY\"\n      monthShortNames=\"jan, feb, mar, apr, mai, jun, jul, aug, sep, okt, nov, des\"></ion-datetime>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label>D MMM YYYY H:mm</ion-label>\n    <ion-datetime displayFormat=\"D MMM YYYY H:mm\" min=\"1997\" max=\"2010\" value=\"2005-06-17T11:06Z\"></ion-datetime>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label>DDDD MMM D, YYYY</ion-label>\n    <ion-datetime displayFormat=\"DDDD MMM D, YYYY\" min=\"2005\" max=\"2016\" value=\"2008-09-02\"></ion-datetime>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label>HH:mm</ion-label>\n    <ion-datetime displayFormat=\"HH:mm\"></ion-datetime>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label>h:mm a</ion-label>\n    <ion-datetime displayFormat=\"h:mm a\"></ion-datetime>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label>hh:mm A (15 min steps)</ion-label>\n    <ion-datetime displayFormat=\"h:mm A\" minuteValues=\"0,15,30,45\"></ion-datetime>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label>Leap years, summer months</ion-label>\n    <ion-datetime displayFormat=\"MM/YYYY\" pickerFormat=\"MMMM YYYY\" monthValues=\"6,7,8\" [yearValues]=\"customYearValues\"></ion-datetime>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label>Specific days/months/years</ion-label>\n    <ion-datetime monthValues=\"6,7,8\" yearValues=\"2014,2015\" dayValues=\"01,02,03,04,05,06,08,09,10, 11, 12, 13, 14\" displayFormat=\"DD/MMM/YYYY\"></ion-datetime>\n  </ion-item>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/ui-components/datetime/datetime-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/ui-components/datetime/datetime-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: DatetimePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatetimePageRoutingModule", function() { return DatetimePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _datetime_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datetime.page */ "./src/app/ui-components/datetime/datetime.page.ts");




const routes = [
    {
        path: '',
        component: _datetime_page__WEBPACK_IMPORTED_MODULE_3__["DatetimePage"]
    }
];
let DatetimePageRoutingModule = class DatetimePageRoutingModule {
};
DatetimePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DatetimePageRoutingModule);



/***/ }),

/***/ "./src/app/ui-components/datetime/datetime.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/ui-components/datetime/datetime.module.ts ***!
  \***********************************************************/
/*! exports provided: DatetimePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatetimePageModule", function() { return DatetimePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _datetime_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datetime-routing.module */ "./src/app/ui-components/datetime/datetime-routing.module.ts");
/* harmony import */ var _datetime_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datetime.page */ "./src/app/ui-components/datetime/datetime.page.ts");







let DatetimePageModule = class DatetimePageModule {
};
DatetimePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _datetime_routing_module__WEBPACK_IMPORTED_MODULE_5__["DatetimePageRoutingModule"]
        ],
        declarations: [_datetime_page__WEBPACK_IMPORTED_MODULE_6__["DatetimePage"]]
    })
], DatetimePageModule);



/***/ }),

/***/ "./src/app/ui-components/datetime/datetime.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/ui-components/datetime/datetime.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWNvbXBvbmVudHMvZGF0ZXRpbWUvZGF0ZXRpbWUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ui-components/datetime/datetime.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/ui-components/datetime/datetime.page.ts ***!
  \*********************************************************/
/*! exports provided: DatetimePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatetimePage", function() { return DatetimePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DatetimePage = class DatetimePage {
    constructor() {
        this.customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
        this.customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];
        this.customPickerOptions = {
            buttons: [{
                    text: 'Save',
                    handler: () => console.log('Clicked Save!')
                }, {
                    text: 'Log',
                    handler: () => {
                        console.log('Clicked Log. Do not Dismiss.');
                        return false;
                    }
                }]
        };
    }
    ngOnInit() {
    }
};
DatetimePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-datetime',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./datetime.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/datetime/datetime.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./datetime.page.scss */ "./src/app/ui-components/datetime/datetime.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DatetimePage);



/***/ })

}]);
//# sourceMappingURL=ui-components-datetime-datetime-module-es2015.js.map