(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-layouts-map-map-home-map-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/map/map-home/map-home.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/map/map-home/map-home.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>map-home</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <h3>Ionic Google Map</h3>\n  <div #map style=\"height:100%;\"></div>\n  <!-- <div id=\"map_canvas\">\n    <button ion-button (click)=\"onButtonClick($event)\">Start demo</button>\n  </div> -->\n</ion-content>\n");

/***/ }),

/***/ "./src/app/ui-layouts/map/map-home/map-home-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/ui-layouts/map/map-home/map-home-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: MapHomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapHomePageRoutingModule", function() { return MapHomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _map_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map-home.page */ "./src/app/ui-layouts/map/map-home/map-home.page.ts");




const routes = [
    {
        path: '',
        component: _map_home_page__WEBPACK_IMPORTED_MODULE_3__["MapHomePage"]
    }
];
let MapHomePageRoutingModule = class MapHomePageRoutingModule {
};
MapHomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MapHomePageRoutingModule);



/***/ }),

/***/ "./src/app/ui-layouts/map/map-home/map-home.module.ts":
/*!************************************************************!*\
  !*** ./src/app/ui-layouts/map/map-home/map-home.module.ts ***!
  \************************************************************/
/*! exports provided: MapHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapHomePageModule", function() { return MapHomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _map_home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map-home-routing.module */ "./src/app/ui-layouts/map/map-home/map-home-routing.module.ts");
/* harmony import */ var _map_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map-home.page */ "./src/app/ui-layouts/map/map-home/map-home.page.ts");







let MapHomePageModule = class MapHomePageModule {
};
MapHomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _map_home_routing_module__WEBPACK_IMPORTED_MODULE_5__["MapHomePageRoutingModule"]
        ],
        declarations: [_map_home_page__WEBPACK_IMPORTED_MODULE_6__["MapHomePage"]]
    })
], MapHomePageModule);



/***/ }),

/***/ "./src/app/ui-layouts/map/map-home/map-home.page.scss":
/*!************************************************************!*\
  !*** ./src/app/ui-layouts/map/map-home/map-home.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map_canvas {\n  height: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZXRoZWUvSW9uaWNQcm9qZWN0cy9faW9uaWM1L2lvbmljNWZ1bGxhcHBfZmluYWwvc3JjL2FwcC91aS1sYXlvdXRzL21hcC9tYXAtaG9tZS9tYXAtaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3VpLWxheW91dHMvbWFwL21hcC1ob21lL21hcC1ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3VpLWxheW91dHMvbWFwL21hcC1ob21lL21hcC1ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXBfY2FudmFze1xuICAgIGhlaWdodDogOTAlO1xufSIsIiNtYXBfY2FudmFzIHtcbiAgaGVpZ2h0OiA5MCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/ui-layouts/map/map-home/map-home.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/ui-layouts/map/map-home/map-home.page.ts ***!
  \**********************************************************/
/*! exports provided: MapHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapHomePage", function() { return MapHomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/google-maps */ "./node_modules/@ionic-native/google-maps/index.js");



//import { GoogleMaps, GoogleMap} from '@ionic-native/google-maps/ngx';

let MapHomePage = class MapHomePage {
    constructor(googleMaps, plt, nav) {
        this.googleMaps = googleMaps;
        this.plt = plt;
        this.nav = nav;
    }
    ngOnInit() {
        // await this.platform.ready();
        // await this.loadMap();
    }
    ngAfterViewInit() {
        this.plt.ready().then(() => {
            this.initMap();
        });
    }
    initMap() {
        let map = this.googleMaps.create(this.mapElement.nativeElement);
        map.one(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMapsEvent"].MAP_READY).then((data) => {
            let coordinates = new _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["LatLng"](33.6396965, -84.4304574);
            let position = {
                target: coordinates,
                zoom: 17
            };
            map.animateCamera(position);
            let markerOptions = {
                position: coordinates,
                icon: "assets/images/icons8-Marker-64.png",
                title: 'Our first POI'
            };
            const marker = map.addMarker(markerOptions)
                .then((marker) => {
                marker.showInfoWindow();
            });
        });
    }
};
MapHomePage.ctorParameters = () => [
    { type: _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMaps"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], MapHomePage.prototype, "mapElement", void 0);
MapHomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-map-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./map-home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/map/map-home/map-home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./map-home.page.scss */ "./src/app/ui-layouts/map/map-home/map-home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMaps"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], MapHomePage);



/***/ })

}]);
//# sourceMappingURL=ui-layouts-map-map-home-map-home-module-es2015.js.map