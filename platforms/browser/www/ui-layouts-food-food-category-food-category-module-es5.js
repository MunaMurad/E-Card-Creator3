function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-layouts-food-food-category-food-category-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/food/food-category/food-category.page.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/food/food-category/food-category.page.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiLayoutsFoodFoodCategoryFoodCategoryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent={true}>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Food category</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Food category</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n\n  <!--*********** Menu View  ***********-->\n  <!-- <div *ngIf=\"viewType==='1col'\"> -->\n      <!-- tile 3:1 -->\n      <ion-card class=\"card-main card-conner-shape card-wide \" tappable  *ngFor=\"let category of categories | async\" >\n        <div class=\"card-wide-bg\" [ngStyle]=\"{'background-image': 'url(' + category.image+ ')'}\"  routerLink=\"/side-menu/food/tabs/tab2/food-item/{{category.id}}\" >\n            <h2 class=\"pong\"> {{category.name}}</h2>      \n        </div>\n      </ion-card>\n  <!-- </div> -->\n\n\n\n<!-- tile square -->\n  <!--*********** Promotion View  ***********-->\n  <!-- <div *ngIf=\"viewType==='2col'\"> -->\n\n    <ion-grid >\n        <ion-row wrap>\n          <ion-col size=\"6\"  tappable   *ngFor=\"let category of categories | async\" (click)=\"goToDetail(category.key)\" color=\"gray\">\n           \n            <ion-card class=\"card-grid \" >\n              \n              <div class=\"card-grid-bg\" [ngStyle]=\"{'background-image': 'url(' + category.image+ ')'}\">\n                <div class=\"bookmarkRibbon\"></div>\n                  <h2 class=\"card-grid-title\">  {{category.name}}</h2>                                \n              </div>\n              \n            </ion-card>\n          </ion-col>\n        </ion-row>\n    </ion-grid>\n\n  <!-- </div> -->\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/ui-layouts/food/food-category/food-category-routing.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/ui-layouts/food/food-category/food-category-routing.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: FoodCategoryPageRoutingModule */

  /***/
  function srcAppUiLayoutsFoodFoodCategoryFoodCategoryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodCategoryPageRoutingModule", function () {
      return FoodCategoryPageRoutingModule;
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


    var _food_category_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./food-category.page */
    "./src/app/ui-layouts/food/food-category/food-category.page.ts");

    var routes = [{
      path: '',
      component: _food_category_page__WEBPACK_IMPORTED_MODULE_3__["FoodCategoryPage"]
    }];

    var FoodCategoryPageRoutingModule = function FoodCategoryPageRoutingModule() {
      _classCallCheck(this, FoodCategoryPageRoutingModule);
    };

    FoodCategoryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FoodCategoryPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/ui-layouts/food/food-category/food-category.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/ui-layouts/food/food-category/food-category.module.ts ***!
    \***********************************************************************/

  /*! exports provided: FoodCategoryPageModule */

  /***/
  function srcAppUiLayoutsFoodFoodCategoryFoodCategoryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodCategoryPageModule", function () {
      return FoodCategoryPageModule;
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


    var _food_category_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./food-category-routing.module */
    "./src/app/ui-layouts/food/food-category/food-category-routing.module.ts");
    /* harmony import */


    var _food_category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./food-category.page */
    "./src/app/ui-layouts/food/food-category/food-category.page.ts");

    var FoodCategoryPageModule = function FoodCategoryPageModule() {
      _classCallCheck(this, FoodCategoryPageModule);
    };

    FoodCategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _food_category_routing_module__WEBPACK_IMPORTED_MODULE_5__["FoodCategoryPageRoutingModule"]],
      declarations: [_food_category_page__WEBPACK_IMPORTED_MODULE_6__["FoodCategoryPage"]]
    })], FoodCategoryPageModule);
    /***/
  },

  /***/
  "./src/app/ui-layouts/food/food-category/food-category.page.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/ui-layouts/food/food-category/food-category.page.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiLayoutsFoodFoodCategoryFoodCategoryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWxheW91dHMvZm9vZC9mb29kLWNhdGVnb3J5L2Zvb2QtY2F0ZWdvcnkucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ui-layouts/food/food-category/food-category.page.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/ui-layouts/food/food-category/food-category.page.ts ***!
    \*********************************************************************/

  /*! exports provided: FoodCategoryPage */

  /***/
  function srcAppUiLayoutsFoodFoodCategoryFoodCategoryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodCategoryPage", function () {
      return FoodCategoryPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_food_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/food.service */
    "./src/app/services/food.service.ts");

    var FoodCategoryPage = /*#__PURE__*/function () {
      function FoodCategoryPage(foodService, activatedRoute, navController, router) {
        _classCallCheck(this, FoodCategoryPage);

        this.foodService = foodService;
        this.activatedRoute = activatedRoute;
        this.navController = navController;
        this.router = router;
        this.viewType = "1col"; // ******** for Cart ***********//

        this.cart = [];
        this.cart = this.foodService.getCart();
      }

      _createClass(FoodCategoryPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // this.parentPath= this.router.url;
          // console.log("....Current route path"+this.parentPath);
          this.categories = this.foodService.getCategories();
        }
      }, {
        key: "changeView",
        value: function changeView(viewType) {
          this.viewType = viewType;
        }
      }]);

      return FoodCategoryPage;
    }();

    FoodCategoryPage.ctorParameters = function () {
      return [{
        type: _services_food_service__WEBPACK_IMPORTED_MODULE_4__["FoodService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    FoodCategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-food-category',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./food-category.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/food/food-category/food-category.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./food-category.page.scss */
      "./src/app/ui-layouts/food/food-category/food-category.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_food_service__WEBPACK_IMPORTED_MODULE_4__["FoodService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], FoodCategoryPage);
    /***/
  }
}]);
//# sourceMappingURL=ui-layouts-food-food-category-food-category-module-es5.js.map