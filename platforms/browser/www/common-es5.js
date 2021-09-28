function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
    \**************************************************************************/

  /*! exports provided: a, d */

  /***/
  function node_modulesIonicCoreDistEsmFrameworkDelegateD1eb6504Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return attachComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return detachComponent;
    });

    var attachComponent = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
        var el;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!delegate) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

              case 2:
                if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                  _context.next = 4;
                  break;
                }

                throw new Error('framework delegate is missing');

              case 4:
                el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                if (cssClasses) {
                  cssClasses.forEach(function (c) {
                    return el.classList.add(c);
                  });
                }

                if (componentProps) {
                  Object.assign(el, componentProps);
                }

                container.appendChild(el);

                if (!el.componentOnReady) {
                  _context.next = 11;
                  break;
                }

                _context.next = 11;
                return el.componentOnReady();

              case 11:
                return _context.abrupt("return", el);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function attachComponent(_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      };
    }();

    var detachComponent = function detachComponent(delegate, element) {
      if (element) {
        if (delegate) {
          var container = element.parentElement;
          return delegate.removeViewFromDom(container, element);
        }

        element.remove();
      }

      return Promise.resolve();
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/haptic-da73c8fd.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/haptic-da73c8fd.js ***!
    \**************************************************************/

  /*! exports provided: a, b, c, d, h */

  /***/
  function node_modulesIonicCoreDistEsmHapticDa73c8fdJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return hapticImpact;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "b", function () {
      return hapticSelectionStart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return hapticSelectionChanged;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return hapticSelectionEnd;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hapticSelection;
    });

    var HapticEngine = {
      getEngine: function getEngine() {
        var win = window;
        return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
      },
      available: function available() {
        return !!this.getEngine();
      },
      isCordova: function isCordova() {
        return !!window.TapticEngine;
      },
      isCapacitor: function isCapacitor() {
        var win = window;
        return !!win.Capacitor;
      },
      impact: function impact(options) {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({
          style: style
        });
      },
      notification: function notification(options) {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({
          style: style
        });
      },
      selection: function selection() {
        this.impact({
          style: 'light'
        });
      },
      selectionStart: function selectionStart() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionStart();
        } else {
          engine.gestureSelectionStart();
        }
      },
      selectionChanged: function selectionChanged() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionChanged();
        } else {
          engine.gestureSelectionChanged();
        }
      },
      selectionEnd: function selectionEnd() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionChanged();
        } else {
          engine.gestureSelectionChanged();
        }
      }
    };
    /**
     * Trigger a selection changed haptic event. Good for one-time events
     * (not for gestures)
     */

    var hapticSelection = function hapticSelection() {
      HapticEngine.selection();
    };
    /**
     * Tell the haptic engine that a gesture for a selection change is starting.
     */


    var hapticSelectionStart = function hapticSelectionStart() {
      HapticEngine.selectionStart();
    };
    /**
     * Tell the haptic engine that a selection changed during a gesture.
     */


    var hapticSelectionChanged = function hapticSelectionChanged() {
      HapticEngine.selectionChanged();
    };
    /**
     * Tell the haptic engine we are done with a gesture. This needs to be
     * called lest resources are not properly recycled.
     */


    var hapticSelectionEnd = function hapticSelectionEnd() {
      HapticEngine.selectionEnd();
    };
    /**
     * Use this to indicate success/failure/warning to the user.
     * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
     */


    var hapticImpact = function hapticImpact(options) {
      HapticEngine.impact(options);
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
    \***********************************************************************/

  /*! exports provided: S */

  /***/
  function node_modulesIonicCoreDistEsmSpinnerConfigsC78e170eJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S", function () {
      return SPINNERS;
    });

    var spinners = {
      'bubbles': {
        dur: 1000,
        circles: 9,
        fn: function fn(dur, index, total) {
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          var angle = 2 * Math.PI * index / total;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circles': {
        dur: 1000,
        circles: 8,
        fn: function fn(dur, index, total) {
          var step = index / total;
          var animationDelay = "".concat(dur * step - dur, "ms");
          var angle = 2 * Math.PI * step;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: function fn() {
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
        fn: function fn() {
          return {
            r: 26,
            style: {}
          };
        }
      },
      'dots': {
        dur: 750,
        circles: 3,
        fn: function fn(_, index) {
          var animationDelay = -(110 * index) + 'ms';
          return {
            r: 6,
            style: {
              'left': "".concat(9 - 9 * index, "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 17,
            y2: 29,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines-small': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 12,
            y2: 20,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      }
    };
    var SPINNERS = spinners;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js ***!
    \*************************************************************/

  /*! exports provided: c, g, h, o */

  /***/
  function node_modulesIonicCoreDistEsmThemeC2dc54d9Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createColorClasses;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getClassMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hostContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "o", function () {
      return openURL;
    });

    var hostContext = function hostContext(selector, el) {
      return el.closest(selector) !== null;
    };
    /**
     * Create the mode and color classes for the component based on the classes passed in
     */


    var createColorClasses = function createColorClasses(color) {
      return typeof color === 'string' && color.length > 0 ? _defineProperty({
        'ion-color': true
      }, "ion-color-".concat(color), true) : undefined;
    };

    var getClassList = function getClassList(classes) {
      if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array.filter(function (c) {
          return c != null;
        }).map(function (c) {
          return c.trim();
        }).filter(function (c) {
          return c !== '';
        });
      }

      return [];
    };

    var getClassMap = function getClassMap(classes) {
      var map = {};
      getClassList(classes).forEach(function (c) {
        return map[c] = true;
      });
      return map;
    };

    var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

    var openURL = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction) {
        var router;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                  _context2.next = 5;
                  break;
                }

                router = document.querySelector('ion-router');

                if (!router) {
                  _context2.next = 5;
                  break;
                }

                if (ev != null) {
                  ev.preventDefault();
                }

                return _context2.abrupt("return", router.push(url, direction));

              case 5:
                return _context2.abrupt("return", false);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function openURL(_x6, _x7, _x8) {
        return _ref3.apply(this, arguments);
      };
    }();
    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/image-gallery-view/image-gallery-view.page.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/image-gallery-view/image-gallery-view.page.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiLayoutsImageGalleryViewImageGalleryViewPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<ion-content fullscreen >\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" >\n      <ion-fab-button (click)=\"close()\" color=\"medium\">\n        <ion-icon name=\"ios-close-circle-outline\" ></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n  <!-- <ion-item class=\"close-fake\" lines=\"none\" text-center>\n    <ion-button (click)=\"close()\" fill=\"clear\" color=\"light\">\n      <ion-icon name=\"close\" slot=\"start\"></ion-icon>\n      Back\n    </ion-button>\n \n    <ion-button (click)=\"zoom(true)\" fill=\"clear\" color=\"light\">\n      <ion-icon name=\"add\" slot=\"start\"></ion-icon>\n      in\n    </ion-button>\n \n    <ion-button (click)=\"zoom(false)\" fill=\"clear\" color=\"light\">\n      <ion-icon name=\"remove\" slot=\"start\"></ion-icon>\n      out\n    </ion-button>\n  </ion-item>\n  -->\n\n  <ion-slides [options]=\"sliderOpts\" #slider>\n    <ion-slide *ngFor=\"let image of imgArray\" (pan)=\"close()\">\n      <div class=\"swiper-zoom-container\">\n\n        <img [src]=\"image.url\" >\n      </div>\n    </ion-slide>\n    <!-- <ion-slide>\n        <div class=\"swiper-zoom-container\">\n          <img src=\"{{ img }}\">\n        </div>\n      </ion-slide>\n      <ion-slide>\n          <div class=\"swiper-zoom-container\">\n            <img src=\"{{ img }}\">\n          </div>\n        </ion-slide> -->\n  </ion-slides>\n \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/services/food.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/food.service.ts ***!
    \******************************************/

  /*! exports provided: FoodService */

  /***/
  function srcAppServicesFoodServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodService", function () {
      return FoodService;
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


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var FoodService = /*#__PURE__*/function () {
      function FoodService(firestore, fireAuth) {
        var _this = this;

        _classCallCheck(this, FoodService);

        this.firestore = firestore;
        this.fireAuth = fireAuth;
        this.userId = ""; //********* shopping cart array ************* */

        this.foodCart = [];
        this.fireAuth.authState.subscribe(function (user) {
          if (user) {
            console.log("foodService_______auth 1");
            _this.userId = user.uid;
            _this.userAuth = true;
          } else {
            console.log("foodService_______auth 0");
            _this.userId = "";
            _this.userAuth = false;
          }
        });
      } //*******************************//
      //******** Search Item *********//
      //******************************//


      _createClass(FoodService, [{
        key: "searchItem",
        value: function searchItem() {
          console.log("called searchItem"); // this.itemDoc = this.firestore.doc<any>(`food_item/${categoryId}`)
          // return this.itemDoc.valueChanges()

          return this.firestore.collection('food_item').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data(); // get id from firebase metadata 

              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          }));
        } //************************//
        //****** Categories ******//
        //************************//

      }, {
        key: "getCategories",
        value: function getCategories() {
          console.log("start getCategory");
          return this.firestore.collection('food_category').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data(); // get id from firebase metadata 

              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          }));
        } //****************************************//
        //****** Get popular item   ******//
        //****************************************//

      }, {
        key: "getPopularItems",
        value: function getPopularItems() {
          return this.firestore.collection('/food_item', function (ref) {
            return ref.where('rating', '>=', 4);
          }) //.orderBy("timestamp", "desc").limit(10))
          .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data(); // get id from firebase metadata 

              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          }));
        } //*************************************//
        //******** Item by categoryId *********//
        //*************************************//

      }, {
        key: "getItemByCatId",
        value: function getItemByCatId(categoryId) {
          return this.firestore.collection('/food_item', function (ref) {
            return ref.where('food_categoryId', '==', categoryId);
          }) //.orderBy("timestamp", "desc").limit(10))
          .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data(); // get id from firebase metadata 

              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          }));
        } //****************************************//
        //****** Get promotion item  ******//
        //****************************************//

      }, {
        key: "getPromotionItems",
        value: function getPromotionItems() {
          return this.firestore.collection('/food_item', function (ref) {
            return ref.where('promotion', '==', true);
          }) //.orderBy("timestamp", "desc").limit(10))
          .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data(); // get id from firebase metadata 

              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          }));
        } //************************//
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

      }, {
        key: "getItemDetail",
        value: function getItemDetail(itemId) {
          return this.firestore.doc('food_item/' + itemId).valueChanges();
        }
      }, {
        key: "getProducts",
        value: function getProducts() {} // return this.data;
        //******************************//
        //****** Get item in cart  ******//
        //******************************//

      }, {
        key: "getCart",
        value: function getCart() {
          return this.foodCart;
        } //*******************************//
        //****** Generate order Id ******//
        //*******************************//

      }, {
        key: "createOrderId",
        value: function createOrderId() {
          return Math.floor(100000 + Math.random() * 900000);
        } //***********************//
        //****** Get order ******//
        //**********************//

      }, {
        key: "getMyOrders",
        value: function getMyOrders() {
          var _this2 = this;

          console.log("getMyOrders");
          console.log("getMyOrders userProfileId=" + this.userId);
          return this.firestore.collection('/food_order', function (ref) {
            return ref.where('userProfileId', '==', _this2.userId);
          }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data();
              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          }));
        }
      }, {
        key: "getOrderDetail",
        value: function getOrderDetail(orderId) {
          return this.firestore.doc('food_order/' + orderId).valueChanges();
        } //***********************//
        //****** Place order ******//
        //**********************//

      }, {
        key: "placeOrder",
        value: function placeOrder(addressId, paymentType, orderItems, totalPrice) {
          console.log("______orderItems()" + JSON.stringify(orderItems));
          console.log("createOrderId()=" + this.createOrderId()); //const itemCartJson = JSON.stringify(orderItems);
          //const itenCartParse  = JSON.parse(itemCart); JSON.parse(localStorage.getItem('avct_item')) || [];
          //const itenCartParse  = itemCart.replace(/\"([^(\")"]+)\":/g,"$1:");
          //console.log("_____itenCartParse="+itenCartParse);
          // https://stackoverflow.com/questions/48156234/function-documentreference-set-called-with-invalid-data-unsupported-field-val
          // const convertArray = itemCart.map((obj)=> {return Object.assign({}, obj)});
          // console.log("convertArray="+JSON.stringify(convertArray));
          //const testArray =  [{firstName:"ME", lastName:"KUU", age:10},{firstName:"John", lastName:"Doe", age:46}];

          var testArray = [{
            "1111firstName": "ME",
            "lastName": "KUU",
            "age": 10,
            "addOn": [{
              "isChecked": true,
              "name": "chilli"
            }, {
              "isChecked": true,
              "name": "chilli"
            }]
          }, {
            "firstName": "John",
            "lastName": "Doe",
            "age": 46
          }]; //[5, true, "hello"],

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
        } //*************************************//
        //*** Test: Add/set array of object ***//
        //************************************//

      }, {
        key: "testAddArrayObject",
        value: function testAddArrayObject() {
          //console.log("BEFORE PUSH___________FOODSERVICE addProduct()="+JSON.stringify());
          var docData = {
            stringExample: "NEEDED",
            booleanExample: true,
            numberExample: 3.14159265,
            //dateExample: this.firebase.firestore.Timestamp.fromDate(new Date("December 10, 1815")),
            tagArray: [{
              "firstName": "ME",
              "lastName": "KUU",
              "age": 10,
              "addOn": [{
                "isChecked": true,
                "name": "chilli"
              }]
            }, {
              "firstName": "John",
              "lastName": "Doe",
              "age": 46
            }],
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
        } //*******************//
        //****** Cart  ******//
        //*******************//

      }, {
        key: "addToCart",
        value: function addToCart(product) {
          console.log("BEFORE PUSH___________FOODSERVICE addProduct()=" + JSON.stringify(product));
          this.foodCart.push(product);
          console.log("+AFTER PUSH _________________FOODSERVICE 3cart array=" + JSON.stringify(this.foodCart));
        }
      }, {
        key: "removeItemCart",
        value: function removeItemCart(index) {
          console.log("removeItemCart");
          this.foodCart.splice(index, 1); //update total price//
        }
      }, {
        key: "removeAllItemCart",
        value: function removeAllItemCart() {
          console.log("removeAllItemCart");
          this.foodCart.length = 0; //update total price//
        }
      }]);

      return FoodService;
    }();

    FoodService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }];
    };

    FoodService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])], FoodService);
    /***/
  },

  /***/
  "./src/app/ui-layouts/image-gallery-view/image-gallery-view.page.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/ui-layouts/image-gallery-view/image-gallery-view.page.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiLayoutsImageGalleryViewImageGalleryViewPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".close-fake {\n  --background: transparent;\n}\n.close-fake ion-icon {\n  font-size: 2rem;\n}\nion-content {\n  --background: rgba(44, 39, 45, 0.84);\n}\nion-slides {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZXRoZWUvSW9uaWNQcm9qZWN0cy9faW9uaWM1L2lvbmljNWZ1bGxhcHBfZmluYWwvc3JjL2FwcC91aS1sYXlvdXRzL2ltYWdlLWdhbGxlcnktdmlldy9pbWFnZS1nYWxsZXJ5LXZpZXcucGFnZS5zY3NzIiwic3JjL2FwcC91aS1sYXlvdXRzL2ltYWdlLWdhbGxlcnktdmlldy9pbWFnZS1nYWxsZXJ5LXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUNDSjtBREFJO0VBQ0ksZUFBQTtBQ0VSO0FER0E7RUFDSSxvQ0FBQTtBQ0FKO0FER0E7RUFDSSxZQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC91aS1sYXlvdXRzL2ltYWdlLWdhbGxlcnktdmlldy9pbWFnZS1nYWxsZXJ5LXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsb3NlLWZha2Uge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgfVxuICAgIC8vbWFyZ2luLXRvcDogNDBweDtcbn1cbiBcbmlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoNDQsIDM5LCA0NSwgMC44NCk7XG59XG4gXG5pb24tc2xpZGVzIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59IiwiLmNsb3NlLWZha2Uge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmNsb3NlLWZha2UgaW9uLWljb24ge1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDQ0LCAzOSwgNDUsIDAuODQpO1xufVxuXG5pb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ui-layouts/image-gallery-view/image-gallery-view.page.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/ui-layouts/image-gallery-view/image-gallery-view.page.ts ***!
    \**************************************************************************/

  /*! exports provided: ImageGalleryViewPage */

  /***/
  function srcAppUiLayoutsImageGalleryViewImageGalleryViewPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageGalleryViewPage", function () {
      return ImageGalleryViewPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var ImageGalleryViewPage = /*#__PURE__*/function () {
      function ImageGalleryViewPage(navParams, modalController) {
        _classCallCheck(this, ImageGalleryViewPage);

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

      _createClass(ImageGalleryViewPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "zoom",
        value: function zoom(zoomIn) {
          console.log("call zoom function");
          var zoom = this.slider.nativeElement.swiper.zoom;

          if (zoomIn) {
            zoom["in"]();
          } else {
            zoom.out();
          }
        }
      }, {
        key: "close",
        value: function close() {
          this.modalController.dismiss();
        }
      }]);

      return ImageGalleryViewPage;
    }();

    ImageGalleryViewPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slider', {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], ImageGalleryViewPage.prototype, "slider", void 0);
    ImageGalleryViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-image-gallery-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./image-gallery-view.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-layouts/image-gallery-view/image-gallery-view.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./image-gallery-view.page.scss */
      "./src/app/ui-layouts/image-gallery-view/image-gallery-view.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], ImageGalleryViewPage);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map