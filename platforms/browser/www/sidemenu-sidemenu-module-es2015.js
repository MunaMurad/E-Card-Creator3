(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sidemenu-sidemenu-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/sidemenu.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/sidemenu.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-content>\n        <ion-list id=\"inbox-list\">\n          <ion-list-header>Inbox</ion-list-header>\n          <ion-note>hi@ionicframework.com</ion-note>\n\n\n\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n\n            <ion-item (click)=\"selectedIndex = i\" routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" [class.selected]=\"selectedIndex == i\">\n              <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n              <ion-label>{{ p.title }}</ion-label>\n            </ion-item>\n\n            \n          </ion-menu-toggle>\n\n          \n        </ion-list>\n\n        <ion-list id=\"labels-list\">\n          <ion-list-header>Labels</ion-list-header>\n\n          <ion-item *ngFor=\"let label of labels\" lines=\"none\">\n            <ion-icon slot=\"start\" ios=\"bookmark-outline\" md=\"bookmark-sharp\"></ion-icon>\n            <ion-label>{{ label }}</ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n");

/***/ }),

/***/ "./src/app/sidemenu/sidemenu-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/sidemenu/sidemenu-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SidemenuPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidemenuPageRoutingModule", function() { return SidemenuPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sidemenu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidemenu.page */ "./src/app/sidemenu/sidemenu.page.ts");




const routes = [
    {
        path: '',
        component: _sidemenu_page__WEBPACK_IMPORTED_MODULE_3__["SidemenuPage"],
        children: [
            //***************************************//
            //********** Food delivery app **********//
            //***************************************//
            {
                path: 'food',
                loadChildren: () => __webpack_require__.e(/*! import() | ui-layouts-food-food-tabs-food-tabs-module */ "ui-layouts-food-food-tabs-food-tabs-module").then(__webpack_require__.bind(null, /*! ../ui-layouts/food/food-tabs/food-tabs.module */ "./src/app/ui-layouts/food/food-tabs/food-tabs.module.ts")).then(m => m.FoodTabsPageModule)
            },
            {
                path: 'food-category',
                loadChildren: () => Promise.all(/*! import() | ui-layouts-food-food-category-food-category-module */[__webpack_require__.e("common"), __webpack_require__.e("ui-layouts-food-food-category-food-category-module")]).then(__webpack_require__.bind(null, /*! ../ui-layouts/food/food-category/food-category.module */ "./src/app/ui-layouts/food/food-category/food-category.module.ts")).then(m => m.FoodCategoryPageModule)
            },
            {
                path: 'food-list',
                loadChildren: () => __webpack_require__.e(/*! import() | ui-layouts-food-food-list-food-list-module */ "ui-layouts-food-food-list-food-list-module").then(__webpack_require__.bind(null, /*! ../ui-layouts/food/food-list/food-list.module */ "./src/app/ui-layouts/food/food-list/food-list.module.ts")).then(m => m.FoodListPageModule)
            },
            {
                path: 'food-detail',
                loadChildren: () => __webpack_require__.e(/*! import() | ui-layouts-food-food-detail-food-detail-module */ "ui-layouts-food-food-detail-food-detail-module").then(__webpack_require__.bind(null, /*! ../ui-layouts/food/food-detail/food-detail.module */ "./src/app/ui-layouts/food/food-detail/food-detail.module.ts")).then(m => m.FoodDetailPageModule)
            },
            {
                path: 'food-cart',
                loadChildren: () => __webpack_require__.e(/*! import() | ui-layouts-food-food-cart-food-cart-module */ "ui-layouts-food-food-cart-food-cart-module").then(__webpack_require__.bind(null, /*! ../ui-layouts/food/food-cart/food-cart.module */ "./src/app/ui-layouts/food/food-cart/food-cart.module.ts")).then(m => m.FoodCartPageModule)
            },
        ]
    }
];
let SidemenuPageRoutingModule = class SidemenuPageRoutingModule {
};
SidemenuPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SidemenuPageRoutingModule);



/***/ }),

/***/ "./src/app/sidemenu/sidemenu.module.ts":
/*!*********************************************!*\
  !*** ./src/app/sidemenu/sidemenu.module.ts ***!
  \*********************************************/
/*! exports provided: SidemenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidemenuPageModule", function() { return SidemenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _sidemenu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidemenu-routing.module */ "./src/app/sidemenu/sidemenu-routing.module.ts");
/* harmony import */ var _sidemenu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidemenu.page */ "./src/app/sidemenu/sidemenu.page.ts");







let SidemenuPageModule = class SidemenuPageModule {
};
SidemenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sidemenu_routing_module__WEBPACK_IMPORTED_MODULE_5__["SidemenuPageRoutingModule"]
        ],
        declarations: [_sidemenu_page__WEBPACK_IMPORTED_MODULE_6__["SidemenuPage"]]
    })
], SidemenuPageModule);



/***/ }),

/***/ "./src/app/sidemenu/sidemenu.page.scss":
/*!*********************************************!*\
  !*** ./src/app/sidemenu/sidemenu.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu ion-content {\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\n/* Remove background transitions for switching themes */\n\nion-menu ion-item {\n  --transition: none;\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n/*\n * Material Design Menu\n*/\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-list-header {\n  padding-left: 18px;\n  padding-right: 18px;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  font-weight: 450;\n}\n\nion-menu.md ion-item {\n  --padding-start: 18px;\n  margin-right: 10px;\n  border-radius: 0 50px 50px 0;\n  font-weight: 500;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-item ion-icon {\n  color: var(--ion-color-step-650, #5f6368);\n}\n\nion-menu.md ion-list:not(:last-of-type) {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\n/*\n * iOS Menu\n*/\n\nion-menu.ios ion-list-header {\n  padding-left: 16px;\n  padding-right: 16px;\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZXRoZWUvSW9uaWNQcm9qZWN0cy9faW9uaWM1L2lvbmljNWZ1bGxhcHBfZmluYWwvc3JjL2FwcC9zaWRlbWVudS9zaWRlbWVudS5wYWdlLnNjc3MiLCJzcmMvYXBwL3NpZGVtZW51L3NpZGVtZW51LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFFQSwyRUFBQTtBQ0FKOztBREdFLHVEQUFBOztBQUNBO0VBQ0Usa0JBQUE7QUNBSjs7QURHRTtFQUNFLGlDQUFBO0FDQUo7O0FER0U7O0NBQUE7O0FBR0E7RUFDRSxlQUFBO0FDQUo7O0FER0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBRUEseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDREo7O0FESUU7RUFDRSxxQkFBQTtFQUVBLGtCQUFBO0VBRUEsNEJBQUE7RUFFQSxnQkFBQTtBQ0pKOztBRE9FO0VBQ0Usc0RBQUE7QUNKSjs7QURPRTtFQUNFLCtCQUFBO0FDSko7O0FET0U7O0VBRUUseUNBQUE7QUNKSjs7QURPRTtFQUNFLDJEQUFBO0FDSko7O0FEUUU7O0NBQUE7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBRUEsa0JBQUE7QUNOSjs7QURTRTtFQUNFLGlCQUFBO0FDTko7O0FEU0U7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FDTko7O0FEU0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ05KOztBRFNFO0VBQ0UsK0JBQUE7QUNOSiIsImZpbGUiOiJzcmMvYXBwL3NpZGVtZW51L3NpZGVtZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51IGlvbi1jb250ZW50IHtcbiAgICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIFxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbiAgfVxuICBcbiAgLyogUmVtb3ZlIGJhY2tncm91bmQgdHJhbnNpdGlvbnMgZm9yIHN3aXRjaGluZyB0aGVtZXMgKi9cbiAgaW9uLW1lbnUgaW9uLWl0ZW0ge1xuICAgIC0tdHJhbnNpdGlvbjogbm9uZTtcbiAgfVxuICBcbiAgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxuICBcbiAgLypcbiAgICogTWF0ZXJpYWwgRGVzaWduIE1lbnVcbiAgKi9cbiAgaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgfVxuICBcbiAgaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE4cHg7XG4gICAgcGFkZGluZy1yaWdodDogMThweDtcbiAgXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogLjFlbTtcbiAgICBmb250LXdlaWdodDogNDUwO1xuICB9XG4gIFxuICBpb24tbWVudS5tZCBpb24taXRlbSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxOHB4O1xuICBcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIFxuICAgIGJvcmRlci1yYWRpdXM6IDAgNTBweCA1MHB4IDA7XG4gIFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgXG4gIGlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG4gIH1cbiAgXG4gIGlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG4gIFxuICBpb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG4gIGlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjUwLCAjNWY2MzY4KTtcbiAgfVxuICBcbiAgaW9uLW1lbnUubWQgaW9uLWxpc3Q6bm90KDpsYXN0LW9mLXR5cGUpIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbiAgfVxuICBcbiAgXG4gIC8qXG4gICAqIGlPUyBNZW51XG4gICovXG4gIGlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICBcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIH1cbiAgXG4gIGlvbi1tZW51LmlvcyBpb24tbGlzdCB7XG4gICAgcGFkZGluZzogMjBweCAwIDA7XG4gIH1cbiAgXG4gIGlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAgIC0tbWluLWhlaWdodDogNTBweDtcbiAgfVxuICBcbiAgaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6ICM3Mzg0OWE7XG4gIH1cbiAgXG4gIGlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxuICAiLCJpb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbn1cblxuLyogUmVtb3ZlIGJhY2tncm91bmQgdHJhbnNpdGlvbnMgZm9yIHN3aXRjaGluZyB0aGVtZXMgKi9cbmlvbi1tZW51IGlvbi1pdGVtIHtcbiAgLS10cmFuc2l0aW9uOiBub25lO1xufVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLypcbiAqIE1hdGVyaWFsIERlc2lnbiBNZW51XG4qL1xuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0LWhlYWRlciB7XG4gIHBhZGRpbmctbGVmdDogMThweDtcbiAgcGFkZGluZy1yaWdodDogMThweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICBmb250LXdlaWdodDogNDUwO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMThweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAwIDUwcHggNTBweCAwO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02NTAsICM1ZjYzNjgpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdDpub3QoOmxhc3Qtb2YtdHlwZSkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn1cblxuLypcbiAqIGlPUyBNZW51XG4qL1xuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlciB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDAgMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM3Mzg0OWE7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/sidemenu/sidemenu.page.ts":
/*!*******************************************!*\
  !*** ./src/app/sidemenu/sidemenu.page.ts ***!
  \*******************************************/
/*! exports provided: SidemenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidemenuPage", function() { return SidemenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SidemenuPage = class SidemenuPage {
    constructor(
    // private platform: Platform,
    // private splashScreen: SplashScreen,
    // private statusBar: StatusBar
    ) {
        this.selectedIndex = 0;
        this.appPages = [
            {
                title: 'Nearby places',
                url: '/folder/Inbox',
                icon: 'mail'
            },
            {
                title: 'City guide app',
                url: '/side-menu/travel',
                icon: 'mail'
            },
            {
                title: 'Food delivery app',
                url: '/side-menu/food',
                icon: ''
            },
            {
                title: 'Shopping app',
                url: '/side-menu/shopping',
                icon: ''
            },
            {
                title: 'Real estate app',
                url: '/side-menu/realestate',
                icon: ''
            },
            {
                title: 'Radio station app',
                url: '/side-menu/radio',
                icon: ''
            },
            {
                title: 'chat',
                url: '/side-menu/chat',
                icon: ''
            },
            {
                title: 'feed',
                url: '/side-menu/feed',
                icon: ''
            },
            {
                title: 'intro',
                url: '/side-menu/intro',
                icon: ''
            },
            // {
            //   title: 'form',
            //   url: '/side-menu/form',
            //   icon: ''
            // },
            {
                title: 'image gallery',
                url: '/side-menu/gallery',
                icon: ''
            },
        ];
        this.labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
        //this.initializeApp();
    }
    ngOnInit() {
    }
};
SidemenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidemenu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidemenu.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidemenu/sidemenu.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidemenu.page.scss */ "./src/app/sidemenu/sidemenu.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SidemenuPage);



/***/ })

}]);
//# sourceMappingURL=sidemenu-sidemenu-module-es2015.js.map