(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-da73c8fd.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-da73c8fd.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
const HapticEngine = {
    getEngine() {
        const win = window;
        return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
    },
    available() {
        return !!this.getEngine();
    },
    isCordova() {
        return !!window.TapticEngine;
    },
    isCapacitor() {
        const win = window;
        return !!win.Capacitor;
    },
    impact(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({ style });
    },
    notification(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({ style });
    },
    selection() {
        this.impact({ style: 'light' });
    },
    selectionStart() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionStart();
        }
        else {
            engine.gestureSelectionStart();
        }
    },
    selectionChanged() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionChanged();
        }
        else {
            engine.gestureSelectionChanged();
        }
    },
    selectionEnd() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionChanged();
        }
        else {
            engine.gestureSelectionChanged();
        }
    }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
    HapticEngine.impact(options);
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: (dur, index, total) => {
            const animationDelay = `${(dur * index / total) - dur}ms`;
            const angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: (dur, index, total) => {
            const step = index / total;
            const animationDelay = `${(dur * step) - dur}ms`;
            const angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: () => {
            return {
                r: 20,
                cx: 48,
                cy: 48,
                fill: 'none',
                viewBox: '24 24 48 48',
                transform: 'translate(0,0)',
                style: {}
            };
        }
    },
    'crescent': {
        dur: 750,
        circles: 1,
        fn: () => {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: (_, index) => {
            const animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': `${9 - (9 * index)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color) => {
    return (typeof color === 'string' && color.length > 0) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction);
        }
    }
    return false;
};




/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/image-gallery-view/image-gallery-view.page.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/image-gallery-view/image-gallery-view.page.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content fullscreen >\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" >\n      <ion-fab-button (click)=\"close()\" color=\"medium\">\n        <ion-icon name=\"ios-close-circle-outline\" ></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n  <!-- <ion-item class=\"close-fake\" lines=\"none\" text-center>\n    <ion-button (click)=\"close()\" fill=\"clear\" color=\"light\">\n      <ion-icon name=\"close\" slot=\"start\"></ion-icon>\n      Back\n    </ion-button>\n \n    <ion-button (click)=\"zoom(true)\" fill=\"clear\" color=\"light\">\n      <ion-icon name=\"add\" slot=\"start\"></ion-icon>\n      in\n    </ion-button>\n \n    <ion-button (click)=\"zoom(false)\" fill=\"clear\" color=\"light\">\n      <ion-icon name=\"remove\" slot=\"start\"></ion-icon>\n      out\n    </ion-button>\n  </ion-item>\n  -->\n\n  <ion-slides [options]=\"sliderOpts\" #slider>\n    <ion-slide *ngFor=\"let image of imgArray\" (pan)=\"close()\">\n      <div class=\"swiper-zoom-container\">\n\n        <img [src]=\"image.url\" >\n      </div>\n    </ion-slide>\n    <!-- <ion-slide>\n        <div class=\"swiper-zoom-container\">\n          <img src=\"{{ img }}\">\n        </div>\n      </ion-slide>\n      <ion-slide>\n          <div class=\"swiper-zoom-container\">\n            <img src=\"{{ img }}\">\n          </div>\n        </ion-slide> -->\n  </ion-slides>\n \n</ion-content>\n");

/***/ }),

/***/ "./src/app/services/food.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/food.service.ts ***!
  \******************************************/
/*! exports provided: FoodService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodService", function() { return FoodService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let FoodService = class FoodService {
    constructor(firestore, fireAuth) {
        this.firestore = firestore;
        this.fireAuth = fireAuth;
        this.userId = "";
        //********* shopping cart array ************* */
        this.foodCart = [];
        this.fireAuth.authState.subscribe(user => {
            if (user) {
                console.log("foodService_______auth 1");
                this.userId = user.uid;
                this.userAuth = true;
            }
            else {
                console.log("foodService_______auth 0");
                this.userId = "";
                this.userAuth = false;
            }
        });
    }
    //*******************************//
    //******** Search Item *********//
    //******************************//
    searchItem() {
        console.log("called searchItem");
        // this.itemDoc = this.firestore.doc<any>(`food_item/${categoryId}`)
        // return this.itemDoc.valueChanges()
        return this.firestore.collection('food_item').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                // get id from firebase metadata 
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    //************************//
    //****** Categories ******//
    //************************//
    getCategories() {
        console.log("start getCategory");
        return this.firestore.collection('food_category').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                // get id from firebase metadata 
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    //****************************************//
    //****** Get popular item   ******//
    //****************************************//
    getPopularItems() {
        return this.firestore.collection('/food_item', ref => ref
            .where('rating', '>=', 4))
            //.orderBy("timestamp", "desc").limit(10))
            .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                // get id from firebase metadata 
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    //*************************************//
    //******** Item by categoryId *********//
    //*************************************//
    getItemByCatId(categoryId) {
        return this.firestore.collection('/food_item', ref => ref
            .where('food_categoryId', '==', categoryId))
            //.orderBy("timestamp", "desc").limit(10))
            .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                // get id from firebase metadata 
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    //****************************************//
    //****** Get promotion item  ******//
    //****************************************//
    getPromotionItems() {
        return this.firestore.collection('/food_item', ref => ref
            .where('promotion', '==', true))
            //.orderBy("timestamp", "desc").limit(10))
            .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                // get id from firebase metadata 
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    //************************//
    //******** Place *********//
    //************************//
    // getPlaces(){
    //   return this.firestore.collection<any>('travel_place').snapshotChanges().pipe(
    //     map(actions => {
    //       return actions.map(a => {
    //         const data = a.payload.doc.data();
    //         // get id from firebase metadata 
    //         const id = a.payload.doc.id; 
    //         return { id, ...data };
    //       });
    //     })
    //   );
    // }
    //******************************//
    //****** Get item detail  ******//
    //******************************//
    getItemDetail(itemId) {
        return this.firestore.doc('food_item/' + itemId).valueChanges();
    }
    getProducts() {
        // return this.data;
    }
    //******************************//
    //****** Get item in cart  ******//
    //******************************//
    getCart() {
        return this.foodCart;
    }
    //*******************************//
    //****** Generate order Id ******//
    //*******************************//
    createOrderId() {
        return Math.floor(100000 + Math.random() * 900000);
    }
    //***********************//
    //****** Get order ******//
    //**********************//
    getMyOrders() {
        console.log("getMyOrders");
        console.log("getMyOrders userProfileId=" + this.userId);
        return this.firestore.collection('/food_order', ref => ref
            .where('userProfileId', '==', this.userId))
            .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    getOrderDetail(orderId) {
        return this.firestore.doc('food_order/' + orderId).valueChanges();
    }
    //***********************//
    //****** Place order ******//
    //**********************//
    placeOrder(addressId, paymentType, orderItems, totalPrice) {
        console.log("______orderItems()" + JSON.stringify(orderItems));
        console.log("createOrderId()=" + this.createOrderId());
        //const itemCartJson = JSON.stringify(orderItems);
        //const itenCartParse  = JSON.parse(itemCart); JSON.parse(localStorage.getItem('avct_item')) || [];
        //const itenCartParse  = itemCart.replace(/\"([^(\")"]+)\":/g,"$1:");
        //console.log("_____itenCartParse="+itenCartParse);
        // https://stackoverflow.com/questions/48156234/function-documentreference-set-called-with-invalid-data-unsupported-field-val
        // const convertArray = itemCart.map((obj)=> {return Object.assign({}, obj)});
        // console.log("convertArray="+JSON.stringify(convertArray));
        //const testArray =  [{firstName:"ME", lastName:"KUU", age:10},{firstName:"John", lastName:"Doe", age:46}];
        const testArray = [{ "1111firstName": "ME", "lastName": "KUU", "age": 10, "addOn": [{ "isChecked": true, "name": "chilli" }, { "isChecked": true, "name": "chilli" }], }, { "firstName": "John", "lastName": "Doe", "age": 46 }]; //[5, true, "hello"],
        console.log('____testArray=' + JSON.stringify(testArray));
        return this.firestore.collection('food_order').add({
            userProfileId: this.userId,
            addressId: addressId,
            orderId: this.createOrderId(),
            paymentType: paymentType,
            orderItems: JSON.stringify(orderItems),
            status: "pending",
            totalPrice: totalPrice,
            createdTime: new Date()
        });
    }
    //*************************************//
    //*** Test: Add/set array of object ***//
    //************************************//
    testAddArrayObject() {
        //console.log("BEFORE PUSH___________FOODSERVICE addProduct()="+JSON.stringify());
        var docData = {
            stringExample: "NEEDED",
            booleanExample: true,
            numberExample: 3.14159265,
            //dateExample: this.firebase.firestore.Timestamp.fromDate(new Date("December 10, 1815")),
            tagArray: [{ "firstName": "ME", "lastName": "KUU", "age": 10, "addOn": [{ "isChecked": true, "name": "chilli" }], }, { "firstName": "John", "lastName": "Doe", "age": 46 }],
            nullExample: null,
            objectExample: {
                a: 5,
                b: {
                    nested: "foo"
                }
            }
        };
        this.firestore.collection("food_order").doc("79oFJZen1UfAoz29pIVL").set(docData).then(function () {
            console.log("Order successfully written!");
        });
    }
    //*******************//
    //****** Cart  ******//
    //*******************//
    addToCart(product) {
        console.log("BEFORE PUSH___________FOODSERVICE addProduct()=" + JSON.stringify(product));
        this.foodCart.push(product);
        console.log("+AFTER PUSH _________________FOODSERVICE 3cart array=" + JSON.stringify(this.foodCart));
    }
    removeItemCart(index) {
        console.log("removeItemCart");
        this.foodCart.splice(index, 1);
        //update total price//
    }
    removeAllItemCart() {
        console.log("removeAllItemCart");
        this.foodCart.length = 0;
        //update total price//
    }
};
FoodService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
];
FoodService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
], FoodService);



/***/ }),

/***/ "./src/app/ui-layouts/image-gallery-view/image-gallery-view.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/ui-layouts/image-gallery-view/image-gallery-view.page.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".close-fake {\n  --background: transparent;\n}\n.close-fake ion-icon {\n  font-size: 2rem;\n}\nion-content {\n  --background: rgba(44, 39, 45, 0.84);\n}\nion-slides {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZXRoZWUvSW9uaWNQcm9qZWN0cy9faW9uaWM1L2lvbmljNWZ1bGxhcHBfZmluYWwvc3JjL2FwcC91aS1sYXlvdXRzL2ltYWdlLWdhbGxlcnktdmlldy9pbWFnZS1nYWxsZXJ5LXZpZXcucGFnZS5zY3NzIiwic3JjL2FwcC91aS1sYXlvdXRzL2ltYWdlLWdhbGxlcnktdmlldy9pbWFnZS1nYWxsZXJ5LXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUNDSjtBREFJO0VBQ0ksZUFBQTtBQ0VSO0FER0E7RUFDSSxvQ0FBQTtBQ0FKO0FER0E7RUFDSSxZQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC91aS1sYXlvdXRzL2ltYWdlLWdhbGxlcnktdmlldy9pbWFnZS1nYWxsZXJ5LXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsb3NlLWZha2Uge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgfVxuICAgIC8vbWFyZ2luLXRvcDogNDBweDtcbn1cbiBcbmlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoNDQsIDM5LCA0NSwgMC44NCk7XG59XG4gXG5pb24tc2xpZGVzIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59IiwiLmNsb3NlLWZha2Uge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmNsb3NlLWZha2UgaW9uLWljb24ge1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDQ0LCAzOSwgNDUsIDAuODQpO1xufVxuXG5pb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/ui-layouts/image-gallery-view/image-gallery-view.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/ui-layouts/image-gallery-view/image-gallery-view.page.ts ***!
  \**************************************************************************/
/*! exports provided: ImageGalleryViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageGalleryViewPage", function() { return ImageGalleryViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let ImageGalleryViewPage = class ImageGalleryViewPage {
    constructor(navParams, modalController) {
        this.navParams = navParams;
        this.modalController = modalController;
        this.imgArray = [];
        this.imgArray = this.navParams.get('data');
        console.log("_____get index=" + this.navParams.get('index'));
        console.log("get data=" + this.imgArray);
        console.log("_________this.img  = " + JSON.stringify(this.imgArray));
        this.sliderOpts = {
            initialSlide: this.navParams.get('index'),
            //effect:	'cube',
            spaceBetween: 10,
            zoom: {
                maxRatio: 5
            }
        };
    }
    ngOnInit() {
    }
    zoom(zoomIn) {
        console.log("call zoom function");
        let zoom = this.slider.nativeElement.swiper.zoom;
        if (zoomIn) {
            zoom.in();
        }
        else {
            zoom.out();
        }
    }
    close() {
        this.modalController.dismiss();
    }
};
ImageGalleryViewPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slider', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], ImageGalleryViewPage.prototype, "slider", void 0);
ImageGalleryViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-image-gallery-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./image-gallery-view.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/image-gallery-view/image-gallery-view.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./image-gallery-view.page.scss */ "./src/app/ui-layouts/image-gallery-view/image-gallery-view.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], ImageGalleryViewPage);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map