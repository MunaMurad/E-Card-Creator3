(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-components-alert-alert-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/alert/alert.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/alert/alert.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent={true}>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Alert</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen class=\"component-content\">\n  <component-details description={description} url={url}></component-details>\n\n  <div class=\"ion-padding-start ion-padding-end\">\n    <ion-button expand=\"block\" click={this.open}>Open Alert</ion-button>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/ui-components/alert/alert-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/ui-components/alert/alert-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AlertPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertPageRoutingModule", function() { return AlertPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _alert_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert.page */ "./src/app/ui-components/alert/alert.page.ts");




const routes = [
    {
        path: '',
        component: _alert_page__WEBPACK_IMPORTED_MODULE_3__["AlertPage"]
    }
];
let AlertPageRoutingModule = class AlertPageRoutingModule {
};
AlertPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AlertPageRoutingModule);



/***/ }),

/***/ "./src/app/ui-components/alert/alert.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/ui-components/alert/alert.module.ts ***!
  \*****************************************************/
/*! exports provided: AlertPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertPageModule", function() { return AlertPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _alert_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alert-routing.module */ "./src/app/ui-components/alert/alert-routing.module.ts");
/* harmony import */ var _alert_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alert.page */ "./src/app/ui-components/alert/alert.page.ts");







let AlertPageModule = class AlertPageModule {
};
AlertPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _alert_routing_module__WEBPACK_IMPORTED_MODULE_5__["AlertPageRoutingModule"]
        ],
        declarations: [_alert_page__WEBPACK_IMPORTED_MODULE_6__["AlertPage"]]
    })
], AlertPageModule);



/***/ }),

/***/ "./src/app/ui-components/alert/alert.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/ui-components/alert/alert.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWNvbXBvbmVudHMvYWxlcnQvYWxlcnQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ui-components/alert/alert.page.ts":
/*!***************************************************!*\
  !*** ./src/app/ui-components/alert/alert.page.ts ***!
  \***************************************************/
/*! exports provided: AlertPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertPage", function() { return AlertPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let AlertPage = class AlertPage {
    constructor(alertController) {
        this.alertController = alertController;
    }
    presentAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Alert',
                subHeader: 'Subtitle',
                message: 'This is an alert message.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    presentAlertMultipleButtons() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Alert',
                subHeader: 'Subtitle',
                message: 'This is an alert message.',
                buttons: ['Cancel', 'Open Modal', 'Delete']
            });
            yield alert.present();
        });
    }
    presentAlertConfirm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirm!',
                message: 'Message <strong>text</strong>!!!',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Okay',
                        handler: () => {
                            console.log('Confirm Okay');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentAlertPrompt() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Prompt!',
                inputs: [
                    {
                        name: 'name1',
                        type: 'text',
                        placeholder: 'Placeholder 1'
                    },
                    {
                        name: 'name2',
                        type: 'text',
                        id: 'name2-id',
                        value: 'hello',
                        placeholder: 'Placeholder 2'
                    },
                    // multiline input.
                    {
                        name: 'paragraph',
                        id: 'paragraph',
                        type: 'textarea',
                        placeholder: 'Placeholder 3'
                    },
                    {
                        name: 'name3',
                        value: 'http://ionicframework.com',
                        type: 'url',
                        placeholder: 'Favorite site ever'
                    },
                    // input date with min & max
                    {
                        name: 'name4',
                        type: 'date',
                        min: '2017-03-01',
                        max: '2018-01-12'
                    },
                    // input date without min nor max
                    {
                        name: 'name5',
                        type: 'date'
                    },
                    {
                        name: 'name6',
                        type: 'number',
                        min: -5,
                        max: 10
                    },
                    {
                        name: 'name7',
                        type: 'number'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Ok',
                        handler: () => {
                            console.log('Confirm Ok');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentAlertRadio() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Radio',
                inputs: [
                    {
                        name: 'radio1',
                        type: 'radio',
                        label: 'Radio 1',
                        value: 'value1',
                        checked: true
                    },
                    {
                        name: 'radio2',
                        type: 'radio',
                        label: 'Radio 2',
                        value: 'value2'
                    },
                    {
                        name: 'radio3',
                        type: 'radio',
                        label: 'Radio 3',
                        value: 'value3'
                    },
                    {
                        name: 'radio4',
                        type: 'radio',
                        label: 'Radio 4',
                        value: 'value4'
                    },
                    {
                        name: 'radio5',
                        type: 'radio',
                        label: 'Radio 5',
                        value: 'value5'
                    },
                    {
                        name: 'radio6',
                        type: 'radio',
                        label: 'Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 ',
                        value: 'value6'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Ok',
                        handler: () => {
                            console.log('Confirm Ok');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentAlertCheckbox() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Checkbox',
                inputs: [
                    {
                        name: 'checkbox1',
                        type: 'checkbox',
                        label: 'Checkbox 1',
                        value: 'value1',
                        checked: true
                    },
                    {
                        name: 'checkbox2',
                        type: 'checkbox',
                        label: 'Checkbox 2',
                        value: 'value2'
                    },
                    {
                        name: 'checkbox3',
                        type: 'checkbox',
                        label: 'Checkbox 3',
                        value: 'value3'
                    },
                    {
                        name: 'checkbox4',
                        type: 'checkbox',
                        label: 'Checkbox 4',
                        value: 'value4'
                    },
                    {
                        name: 'checkbox5',
                        type: 'checkbox',
                        label: 'Checkbox 5',
                        value: 'value5'
                    },
                    {
                        name: 'checkbox6',
                        type: 'checkbox',
                        label: 'Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6',
                        value: 'value6'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Ok',
                        handler: () => {
                            console.log('Confirm Ok');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    ngOnInit() {
    }
};
AlertPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
AlertPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alert',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alert.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/alert/alert.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./alert.page.scss */ "./src/app/ui-components/alert/alert.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], AlertPage);



/***/ })

}]);
//# sourceMappingURL=ui-components-alert-alert-module-es2015.js.map