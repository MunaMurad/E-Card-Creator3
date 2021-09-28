(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-layouts-search-search-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/search/search.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/search/search.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <!-- <ion-searchbar (ionInput)=\"getItems($event)\"></ion-searchbar> -->\n    <!-- <ion-searchbar showcancelbutton (ionInput)=\"filterList($event)\" (ionCancel)=\"close()\" cancelButtonText=\"close\"></ion-searchbar> -->\n    <ion-searchbar  #searchbar placeholder=\"cafe ....\" showCancelButton  (ionInput)=\"filterList($event)\" (ionCancel)=\"close()\" cancelButtonText=\"close\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-list-header>Recommended</ion-list-header>\n  <p>\n    <ion-chip outline color=\"primary\" (click)=\"searchByTag('coffee')\">\n      <ion-label>coffee</ion-label>\n    </ion-chip>\n    <ion-chip outline color=\"secondary\" (click)=\"searchByTag('cake')\">\n      <ion-label>cake</ion-label>\n    </ion-chip>\n    <ion-chip outline color=\"tertiary\" (click)=\"searchByTag('a')\">\n      <ion-label>a</ion-label>\n    </ion-chip>\n    <ion-chip outline color=\"success\" (click)=\"searchByTag('b')\">\n      <ion-label>b</ion-label>\n    </ion-chip>\n    <ion-chip outline color=\"warning\" (click)=\"searchByTag('bl')\">\n      <ion-label>bl</ion-label>\n    </ion-chip>\n  \n  </p>\n        <!-- <ion-button   routerLink=\"/side-menu/travel/tabs/tab1/travel-home\">\n          <ion-icon color=\"medium\" slot=\"icon-only\" name=\"map\" ></ion-icon>\n        </ion-button> -->\n\n<ion-list class=\"ion-margin-top\">\n    <ion-item *ngFor=\"let result of resultList\" lines=\"none\" button  (click)=\"openDetail(result.id)\"     >\n        <ion-thumbnail slot=\"start\">\n            <ion-img [src]=\"result.image\"></ion-img>\n        </ion-thumbnail>\n        <ion-label>\n            <h2>{{result.name}}</h2>\n            <p>{{result.description}}</p>\n            <ion-icon style=\"font-size: 14px !important;\" color=\"warning\" *ngFor=\"let i of [0,1,2,3,4]\" [name]=\"i < result.rating ? 'star' : 'star-outline'\">\n          </ion-icon>\n        </ion-label>\n    </ion-item>\n</ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/ui-layouts/search/search-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/ui-layouts/search/search-routing.module.ts ***!
  \************************************************************/
/*! exports provided: SearchPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageRoutingModule", function() { return SearchPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.page */ "./src/app/ui-layouts/search/search.page.ts");




const routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_3__["SearchPage"]
    }
];
let SearchPageRoutingModule = class SearchPageRoutingModule {
};
SearchPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SearchPageRoutingModule);



/***/ }),

/***/ "./src/app/ui-layouts/search/search.module.ts":
/*!****************************************************!*\
  !*** ./src/app/ui-layouts/search/search.module.ts ***!
  \****************************************************/
/*! exports provided: SearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-routing.module */ "./src/app/ui-layouts/search/search-routing.module.ts");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search.page */ "./src/app/ui-layouts/search/search.page.ts");







let SearchPageModule = class SearchPageModule {
};
SearchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _search_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchPageRoutingModule"]
        ],
        declarations: [_search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]]
    })
], SearchPageModule);



/***/ }),

/***/ "./src/app/ui-layouts/search/search.page.scss":
/*!****************************************************!*\
  !*** ./src/app/ui-layouts/search/search.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWxheW91dHMvc2VhcmNoL3NlYXJjaC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ui-layouts/search/search.page.ts":
/*!**************************************************!*\
  !*** ./src/app/ui-layouts/search/search.page.ts ***!
  \**************************************************/
/*! exports provided: SearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPage", function() { return SearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_food_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/food.service */ "./src/app/services/food.service.ts");






let SearchPage = class SearchPage {
    constructor(firestore, foodService, modalController, activatedRoute, navController, router) {
        this.firestore = firestore;
        this.foodService = foodService;
        this.modalController = modalController;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
    }
    ngOnInit() {
        console.log("--------------first time loaded-------------");
        this.foodService.searchItem().subscribe(results => {
            console.log(results);
            this.loadedResultList = results;
        });
        // this.firestore.collection<any>('/travel_place').valueChanges().subscribe( results => {
        //     //this.resultList = results;
        //     this.loadedResultList = results;
        // });
        let timeoutID = setTimeout(() => {
            this.searchbar.setFocus();
            console.log("setFocus()=======");
            clearTimeout(timeoutID);
        }, 200);
    }
    initializeItems() {
        console.log("call initialize");
        this.resultList = this.loadedResultList;
    }
    filterList(evt) {
        console.log("call filter");
        this.initializeItems();
        const searchTerm = evt.srcElement.value;
        console.log("search value=" + searchTerm);
        if (!searchTerm) {
            console.log("return>>>>");
            this.resultList = [];
            return;
        }
        this.resultList = this.resultList.filter(currentGoal => {
            if (currentGoal.name && searchTerm) {
                if (currentGoal.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
                    console.log("Number of result value : true");
                    return true;
                }
                console.log("Unmatch vlaue : false");
                return false;
            }
        });
    }
    searchByTag(searchTerm) {
        console.log("call searchByTag");
        this.searchbar.value = "";
        this.initializeItems();
        this.resultList = this.resultList.filter(currentGoal => {
            if (currentGoal.name && searchTerm) {
                if (currentGoal.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
                    console.log("searchByTag: Number of result value : true");
                    return true;
                }
                console.log("searchByTag:Unmatch vlaue : false");
                return false;
            }
        });
    }
};
SearchPage.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _services_food_service__WEBPACK_IMPORTED_MODULE_5__["FoodService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchbar', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSearchbar"])
], SearchPage.prototype, "searchbar", void 0);
SearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/search/search.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.page.scss */ "./src/app/ui-layouts/search/search.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
        _services_food_service__WEBPACK_IMPORTED_MODULE_5__["FoodService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], SearchPage);



/***/ })

}]);
//# sourceMappingURL=ui-layouts-search-search-module-es2015.js.map