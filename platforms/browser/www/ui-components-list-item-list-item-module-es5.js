function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-components-list-item-list-item-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/list-item/list-item.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/list-item/list-item.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiComponentsListItemListItemPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>List-item</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<!-- ############################ -->\n<!-- #### List of Text Items #### -->\n<!-- ############################ -->\n<ion-list-header>\n  <ion-label>Text items</ion-label>\n</ion-list-header>\n\n<ion-list>\n  <ion-item>\n    <ion-label>Pokémon Yellow</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>Mega Man X</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>The Legend of Zelda</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>Pac-Man</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>Super Mario World</ion-label>\n  </ion-item>\n</ion-list>\n\n\n\n\n<!-- ############################ -->\n<!-- #### List of Input Items #### -->\n<!-- ############################ -->\n<ion-list-header>\n  <ion-label>Input items </ion-label>\n</ion-list-header>\n\n<ion-list>\n  <ion-item>\n    <ion-label>Input</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Toggle</ion-label>\n    <ion-toggle slot=\"end\"></ion-toggle>\n  </ion-item>\n  <ion-item>\n    <ion-label>Radio</ion-label>\n    <ion-radio slot=\"end\"></ion-radio>\n  </ion-item>\n  <ion-item>\n    <ion-label>Checkbox</ion-label>\n    <ion-checkbox slot=\"start\"></ion-checkbox>\n  </ion-item>\n</ion-list>\n\n\n\n<!-- ############################ -->\n<!-- #### List of Sliding Items  #### -->\n<!-- ############################ -->\n<ion-list-header>\n  <ion-label>Sliding items</ion-label>\n</ion-list-header>\n\n<ion-list>\n  <ion-item-sliding>\n    <ion-item>\n      <ion-label>Item</ion-label>\n    </ion-item>\n    <ion-item-options side=\"end\">\n      <ion-item-option (click)=\"unread(item)\">Unread</ion-item-option>\n    </ion-item-options>\n  </ion-item-sliding>\n\n  <ion-item-sliding>\n    <ion-item>\n      <ion-label>Item</ion-label>\n    </ion-item>\n    <ion-item-options side=\"end\">\n      <ion-item-option (click)=\"unread(item)\">Unread</ion-item-option>\n    </ion-item-options>\n  </ion-item-sliding>\n  <ion-item>\n    <ion-label>Note</ion-label>\n    <ion-note slot=\"end\">99</ion-note>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Checkbox</ion-label>\n    <ion-checkbox slot=\"end\" checked></ion-checkbox>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Toggle</ion-label>\n    <ion-toggle slot=\"end\" checked></ion-toggle>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Input</ion-label>\n    <ion-input slot=\"end\" placeholder=\"Placeholder\"></ion-input>\n  </ion-item>\n  \n</ion-list>\n\n\n\n<!-- ##################### -->\n<!-- #### List header #### -->\n<!-- ##################### -->\n\n<!-- Default List Header -->\n<ion-list-header>\n  <ion-label>List header</ion-label>\n</ion-list-header>\n\n<!-- List Header with Button -->\n<ion-list-header>\n  <ion-label>List header </ion-label>\n  <ion-button>See All</ion-button>\n</ion-list-header>\n\n<!-- List Header with Outline Button -->\n<ion-list-header>\n  <ion-label>List header </ion-label>\n  <ion-button fill=\"outline\">See All</ion-button>\n</ion-list-header>\n\n<!-- List Header Full Lines -->\n<ion-list-header lines=\"full\">\n  <ion-label>List header full lines</ion-label>\n  <ion-button>See All</ion-button>\n</ion-list-header>\n\n<!-- List Header Inset Lines -->\n<ion-list-header lines=\"inset\">\n  <ion-label>List header inset</ion-label>\n  <ion-button>See All</ion-button>\n</ion-list-header>\n\n\n\n\n\n\n<!-- ############################ -->\n<!-- #### List of Sliding Items  #### -->\n<!-- ############################ -->\n\n<ion-list-header lines=\"inset\">\n  <ion-label>List header inset</ion-label>\n  <ion-button>Clear</ion-button>\n</ion-list-header>\n\n<ion-list>\n  <ion-item lines=\"none\">\n    <ion-label color=\"primary\">\n      <h1>I got you babe</h1>\n    </ion-label>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label color=\"primary\">\n      <h1>I got you babe</h1>\n    </ion-label>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label color=\"primary\">\n      <h1>I got you babe</h1>\n    </ion-label>\n  </ion-item>\n  <ion-item lines=\"full\">\n    <ion-label color=\"primary\">\n      <h1>I got you babe</h1>\n    </ion-label>\n  </ion-item>\n  <ion-item lines=\"inset\">\n    <ion-label color=\"primary\">\n      <h1>I got you babe</h1>\n    </ion-label>\n  </ion-item>\n</ion-list>\n\n\n\n\n<!-- ############################ -->\n<!-- #### List of Sliding Items  #### -->\n<!-- ############################ -->\n\n<ion-list>\n\n  <ion-list-header lines=\"inset\">\n    <ion-label>Trending</ion-label>\n  </ion-list-header>\n\n  <ion-item>\n    <ion-label color=\"primary\">\n      <h1>harry styles</h1>\n    </ion-label>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label color=\"primary\">\n      <h1>christmas</h1>\n    </ion-label>\n  </ion-item>\n\n  <ion-item lines=\"none\">\n    <ion-label color=\"primary\">\n      <h1>falling</h1>\n    </ion-label>\n  </ion-item>\n\n</ion-list>\n\n\n\n\n\n\n<ion-list>\n  <ion-list-header>\n    Recent Conversations\n  </ion-list-header>\n\n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <img src=\"https://ionicframework.com/docs/demos/api/list/avatar-luke.png\">\n    </ion-avatar>\n    <ion-label>\n      <h2>Finn</h2>\n      <h3>I'm a big deal</h3>\n      <p>Listen, I've had a pretty messed up day...</p>\n    </ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <img src=\"https://ionicframework.com/docs/demos/api/list/avatar-luke.png\">\n    </ion-avatar>\n    <ion-label>\n      <h2>Han</h2>\n      <h3>Look, kid...</h3>\n      <p>I've got enough on my plate as it is, and I...</p>\n    </ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <img src=\"https://ionicframework.com/docs/demos/api/list/avatar-luke.png\">\n    </ion-avatar>\n    <ion-label>\n      <h2>Rey</h2>\n      <h3>I can handle myself</h3>\n      <p>You will remove these restraints and leave...</p>\n    </ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <img src=\"https://ionicframework.com/docs/demos/api/list/avatar-luke.png\">\n    </ion-avatar>\n    <ion-label>\n      <h2>Luke</h2>\n      <h3>Your thoughts betray you</h3>\n      <p>I feel the good in you, the conflict...</p>\n    </ion-label>\n  </ion-item>\n</ion-list>\n\n<ion-list>\n  <ion-list-header>\n    Online\n  </ion-list-header>\n\n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <img src=\"https://ionicframework.com/docs/demos/api/list/avatar-luke.png\">\n    </ion-avatar>\n    <ion-label>\n      <h2>Poe</h2>\n      <h3>New Ride</h3>\n      <p>I just upgraded my X-Wing. Next time...</p>\n    </ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <img src=\"https://ionicframework.com/docs/demos/api/list/avatar-luke.png\">\n    </ion-avatar>\n    <ion-label>\n      <h2>Ben</h2>\n      <h3>Move Along</h3>\n      <p>These aren't the droids you're looking for...</p>\n    </ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <img src=\"https://ionicframework.com/docs/demos/api/list/avatar-luke.png\">\n    </ion-avatar>\n    <ion-label>\n      <h2>Leia</h2>\n      <h3>You're My Only Hope</h3>\n      <p>I've placed information vital to the survival...</p>\n    </ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <img src=\"https://ionicframework.com/docs/demos/api/list/avatar-luke.png\">\n    </ion-avatar>\n    <ion-label>\n      <h2>Yoda</h2>\n      <h3>Size matters not</h3>\n      <p>Do or do not. There is no try...</p>\n    </ion-label>\n  </ion-item>\n</ion-list>\n\n\n\n\n\n<!-- ###################### -->\n  <!-- Default Item -->\n\n<ion-list-header>Default</ion-list-header>\n<ion-item>\n  <ion-label>\n    Item\n  </ion-label>\n</ion-item>\n\n<!-- Item as a Button -->\n<ion-item button (click)=\"buttonClick()\">\n  <ion-label>\n    Button Item\n  </ion-label>\n</ion-item>\n\n<!-- Item as an Anchor -->\n<ion-item href=\"https://www.ionicframework.com\">\n  <ion-label>\n    Anchor Item\n  </ion-label>\n</ion-item>\n\n<ion-item color=\"secondary\">\n  <ion-label>\n    Secondary Color Item\n  </ion-label>\n</ion-item>\n\n<!-- ######################## -->\n\n<ion-item detail>\n  <ion-label>\n    Standard Item with Detail Arrow\n  </ion-label>\n</ion-item>\n\n<ion-item button (click)=\"buttonClick()\" detail>\n  <ion-label>\n    Button Item with Detail Arrow\n  </ion-label>\n</ion-item>\n\n<ion-item detail=\"false\" href=\"https://www.ionicframework.com\">\n  <ion-label>\n    Anchor Item with no Detail Arrow\n  </ion-label>\n</ion-item>\n\n\n<!-- ######################## -->\n<ion-list-header>Default</ion-list-header>\n<ion-list>\n  <ion-item>\n    <ion-label>\n      Item\n    </ion-label>\n  </ion-item>\n\n  <ion-item lines=\"none\">\n    <ion-label>\n      No Lines Item\n    </ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-label class=\"ion-text-wrap\">\n    Multiline text that should wrap when it is too long\n    to fit on one line in the item.\n    </ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-label class=\"ion-text-wrap\">\n      <ion-text color=\"primary\">\n        <h3>H3 Primary Title</h3>\n      </ion-text>\n      <p>Paragraph line 1</p>\n      <ion-text color=\"secondary\">\n        <p>Paragraph line 2 secondary</p>\n      </ion-text>\n    </ion-label>\n  </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-label>\n      Item with Full Lines\n    </ion-label>\n  </ion-item>\n\n</ion-list>\n\n<!-- ######################## -->\n\n<!-- Item Inset Lines -->\n<ion-item lines=\"inset\">\n  <ion-label>Item Lines Inset</ion-label>\n</ion-item>\n\n<!-- Item Full Lines -->\n<ion-item lines=\"full\">\n  <ion-label>Item Lines Full</ion-label>\n</ion-item>\n\n<!-- Item None Lines -->\n<ion-item lines=\"none\">\n  <ion-label>Item Lines None</ion-label>\n</ion-item>\n\n<!-- List Full Lines -->\n<ion-list lines=\"full\">\n  <ion-item>\n    <ion-label>Full Lines Item 1</ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Full Lines Item 2</ion-label>\n  </ion-item>\n</ion-list>\n\n<!-- List Inset Lines -->\n<ion-list lines=\"inset\">\n  <ion-item>\n    <ion-label>Inset Lines Item 1</ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Inset Lines Item 2</ion-label>\n  </ion-item>\n</ion-list>\n\n<!-- List No Lines -->\n<ion-list lines=\"none\">\n  <ion-item>\n    <ion-label>No lines Item 1</ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>No lines Item 2</ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>No lines Item 3</ion-label>\n  </ion-item>\n</ion-list>\n\n\n\n<!-- ######################## -->\n\n<ion-item button (click)=\"testClick()\">\n  <ion-avatar slot=\"start\">\n    <img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==\">\n  </ion-avatar>\n  <ion-label class=\"ion-text-wrap\">\n    <ion-text color=\"primary\">\n      <h3>H3 Primary Title</h3>\n    </ion-text>\n    <p>Paragraph line 1</p>\n    <ion-text color=\"secondary\">\n      <p>Paragraph line 2 secondary</p>\n    </ion-text>\n  </ion-label>\n</ion-item>\n\n<ion-item href=\"#\">\n  <ion-label>\n    Thumbnail End, Anchor Item\n  </ion-label>\n  <ion-thumbnail slot=\"end\">\n    <img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==\">\n  </ion-thumbnail>\n</ion-item>\n\n<ion-item>\n  <ion-thumbnail slot=\"start\">\n    <img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==\">\n  </ion-thumbnail>\n  <ion-label>\n    <h2>H2 Title Text</h2>\n    <p>Button on right</p>\n  </ion-label>\n  <ion-button fill=\"outline\" slot=\"end\">View</ion-button>\n</ion-item>\n\n<ion-item button (click)=\"testClick()\">\n  <ion-thumbnail slot=\"start\">\n    <img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==\">\n  </ion-thumbnail>\n  <ion-label>\n    <h3>H3 Title Text</h3>\n    <p>Icon on right</p>\n  </ion-label>\n  <ion-icon name=\"close-circle\" slot=\"end\"></ion-icon>\n</ion-item>\n\n<!-- ######################## -->\n\n<ion-item>\n  <ion-button slot=\"start\">\n    Start\n  </ion-button>\n  <ion-label>Button Start/End</ion-label>\n  <ion-button slot=\"end\">\n    End\n  </ion-button>\n</ion-item>\n\n<ion-item>\n  <ion-button slot=\"start\">\n    Start Icon\n    <ion-icon name=\"home\" slot=\"end\"></ion-icon>\n  </ion-button>\n  <ion-label>Buttons with Icons</ion-label>\n  <ion-button slot=\"end\">\n    <ion-icon name=\"star\" slot=\"end\"></ion-icon>\n    End Icon\n  </ion-button>\n</ion-item>\n\n<ion-item>\n  <ion-button slot=\"start\">\n    <ion-icon slot=\"icon-only\" name=\"navigate\"></ion-icon>\n  </ion-button>\n  <ion-label>Icon only Buttons</ion-label>\n  <ion-button slot=\"end\">\n    <ion-icon slot=\"icon-only\" name=\"star\"></ion-icon>\n  </ion-button>\n</ion-item>\n\n\n<!-- ######################## -->\n\n<ion-item>\n  <ion-label>\n    Icon End\n  </ion-label>\n  <ion-icon name=\"information-circle\" slot=\"end\"></ion-icon>\n</ion-item>\n\n<ion-item>\n  <ion-label>\n    Large Icon End\n  </ion-label>\n  <ion-icon name=\"information-circle\" size=\"large\" slot=\"end\"></ion-icon>\n</ion-item>\n\n<ion-item>\n  <ion-label>\n    Small Icon End\n  </ion-label>\n  <ion-icon name=\"information-circle\" size=\"small\" slot=\"end\"></ion-icon>\n</ion-item>\n\n<ion-item>\n  <ion-icon name=\"star\" slot=\"start\"></ion-icon>\n  <ion-label>\n    Icon Start\n  </ion-label>\n</ion-item>\n\n<ion-item>\n  <ion-label>\n    Two Icons End\n  </ion-label>\n  <ion-icon name=\"checkmark-circle\" slot=\"end\"></ion-icon>\n  <ion-icon name=\"shuffle\" slot=\"end\"></ion-icon>\n</ion-item>\n\n<!-- ######################## -->\n<ion-item>\n  <ion-label position=\"floating\">Datetime</ion-label>\n  <ion-datetime></ion-datetime>\n</ion-item>\n\n<ion-item>\n  <ion-label position=\"floating\">Select</ion-label>\n  <ion-select>\n    <ion-select-option value=\"\">No Game Console</ion-select-option>\n    <ion-select-option value=\"nes\">NES</ion-select-option>\n    <ion-select-option value=\"n64\" selected>Nintendo64</ion-select-option>\n    <ion-select-option value=\"ps\">PlayStation</ion-select-option>\n    <ion-select-option value=\"genesis\">Sega Genesis</ion-select-option>\n    <ion-select-option value=\"saturn\">Sega Saturn</ion-select-option>\n    <ion-select-option value=\"snes\">SNES</ion-select-option>\n  </ion-select>\n</ion-item>\n\n<ion-item>\n  <ion-label>Toggle</ion-label>\n  <ion-toggle slot=\"end\"></ion-toggle>\n</ion-item>\n\n<ion-item>\n  <ion-label position=\"floating\">Floating Input</ion-label>\n  <ion-input></ion-input>\n</ion-item>\n\n<ion-item>\n  <ion-label>Input (placeholder)</ion-label>\n  <ion-input placeholder=\"Placeholder\"></ion-input>\n</ion-item>\n\n<ion-item>\n  <ion-label>Checkbox</ion-label>\n  <ion-checkbox slot=\"start\"></ion-checkbox>\n</ion-item>\n\n<ion-item>\n  <ion-label>Checkbox</ion-label>\n  <ion-checkbox slot=\"end\"></ion-checkbox>\n</ion-item>\n\n<ion-item>\n  <ion-label>Range</ion-label>\n  <ion-range></ion-range>\n</ion-item>\n\n\n\n\n<!-- ######################## -->\n\n<ion-list>\n  <ion-list-header lines=\"full\">\n    <ion-label>\n      Icon Items\n    </ion-label>\n  </ion-list-header>\n\n  <ion-item>\n    <ion-icon slot=\"start\" size=\"large\" ios=\"star-outline\" md=\"star-sharp\"></ion-icon>\n    <ion-label>Label</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-icon slot=\"start\"  ios=\"star-outline\" md=\"star-sharp\"></ion-icon>\n    <ion-label>Label</ion-label>\n  </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-icon slot=\"start\" size=\"large\" ios=\"heart-outline\" md=\"heart-sharp\"></ion-icon>\n    <ion-label>Label</ion-label>\n  </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-icon slot=\"start\" ios=\"heart-outline\" md=\"heart-sharp\"></ion-icon>\n    <ion-label>Label</ion-label>\n  </ion-item>\n</ion-list>\n\n<ion-list>\n  <ion-list-header lines=\"full\">\n    <ion-label>\n      Media Items\n    </ion-label>\n  </ion-list-header>\n\n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <img src=\"https://ionic-docs-demo.herokuapp.com/assets/avatar.svg\"/>\n    </ion-avatar>\n    <ion-label>Label</ion-label>\n  </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-avatar slot=\"start\">\n      <img src=\"https://ionic-docs-demo.herokuapp.com/assets/avatar.svg\"/>\n    </ion-avatar>\n    <ion-label>Label</ion-label>\n  </ion-item>\n</ion-list>\n\n<ion-list>\n  <ion-list-header>\n    <ion-label>\n      Sliding Items\n    </ion-label>\n  </ion-list-header>\n\n  <ion-item-sliding>\n    <ion-item>\n      <ion-label>Label</ion-label>\n    </ion-item>\n\n    <ion-item-options side=\"start\">\n      <ion-item-option color=\"primary\">Archive</ion-item-option>\n    </ion-item-options>\n\n    <ion-item-options side=\"end\">\n      <ion-item-option expandable color=\"danger\">Delete</ion-item-option>\n    </ion-item-options>\n  </ion-item-sliding>\n\n  <ion-item-sliding>\n    <ion-item>\n      <ion-label>Label</ion-label>\n    </ion-item>\n\n    <ion-item-options side=\"start\">\n      <ion-item-option color=\"primary\">\n        <ion-icon slot=\"icon-only\" ios=\"share-outline\" md=\"share-sharp\"></ion-icon>\n      </ion-item-option>\n    </ion-item-options>\n\n    <ion-item-options side=\"end\">\n      <ion-item-option expandable color=\"danger\">\n        <ion-icon slot=\"icon-only\" ios=\"trash-outline\" md=\"trash-sharp\"></ion-icon>\n      </ion-item-option>\n    </ion-item-options>\n  </ion-item-sliding>\n</ion-list>\n\n<ion-list>\n  <ion-list-header>\n    <ion-label>\n      Inputs & Controls\n    </ion-label>\n  </ion-list-header>\n\n \n\n\n\n  <ion-list-header>Default</ion-list-header>\n  <ion-thumbnail class=\"big_thumbnail ion-margin-start\">\n    <img src=\"https://ionicframework.com/docs/demos/api/thumbnail/thumbnail.svg\">\n  </ion-thumbnail>\n\n  <ion-list>\n    <ion-list-header>Item thumbnails</ion-list-header>\n    <ion-item>\n      <ion-thumbnail class=\"large_thumbnail\" slot=\"start\">\n        <img src=\"https://ionicframework.com/docs/demos/api/thumbnail/thumbnail.svg\">\n      </ion-thumbnail>\n \n    </ion-item>\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <img src=\"https://ionicframework.com/docs/demos/api/thumbnail/thumbnail.svg\">\n      </ion-thumbnail>\n      <ion-label>\n        <h3>Lorem ipsum</h3>\n        <p>dolor sit amet</p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <img src=\"https://ionicframework.com/docs/demos/api/thumbnail/thumbnail.svg\">\n      </ion-thumbnail>\n      <ion-label>\n        <h3>Lorem ipsum</h3>\n        <p>dolor sit amet</p>\n        <p>consectetur adipiscing elit. Duis ut urna neque.</p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail slot=\"end\">\n        <img src=\"https://ionicframework.com/docs/demos/api/thumbnail/thumbnail.svg\">\n      </ion-thumbnail>\n      <ion-label>Lorem ipsum</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail slot=\"end\">\n        <img src=\"https://ionicframework.com/docs/demos/api/thumbnail/thumbnail.svg\">\n      </ion-thumbnail>\n      <ion-label>\n        <h3>Lorem ipsum</h3>\n        <p>dolor sit amet</p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail slot=\"end\">\n        <img src=\"https://ionicframework.com/docs/demos/api/thumbnail/thumbnail.svg\">\n      </ion-thumbnail>\n      <ion-label>\n        <h3>Lorem ipsum</h3>\n        <p>dolor sit amet</p>\n        <p>consectetur adipiscing elit. Duis ut urna neque.</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/ui-components/list-item/list-item-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/ui-components/list-item/list-item-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: ListItemPageRoutingModule */

  /***/
  function srcAppUiComponentsListItemListItemRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListItemPageRoutingModule", function () {
      return ListItemPageRoutingModule;
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


    var _list_item_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./list-item.page */
    "./src/app/ui-components/list-item/list-item.page.ts");

    var routes = [{
      path: '',
      component: _list_item_page__WEBPACK_IMPORTED_MODULE_3__["ListItemPage"]
    }];

    var ListItemPageRoutingModule = function ListItemPageRoutingModule() {
      _classCallCheck(this, ListItemPageRoutingModule);
    };

    ListItemPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ListItemPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/ui-components/list-item/list-item.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/ui-components/list-item/list-item.module.ts ***!
    \*************************************************************/

  /*! exports provided: ListItemPageModule */

  /***/
  function srcAppUiComponentsListItemListItemModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListItemPageModule", function () {
      return ListItemPageModule;
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


    var _list_item_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./list-item-routing.module */
    "./src/app/ui-components/list-item/list-item-routing.module.ts");
    /* harmony import */


    var _list_item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./list-item.page */
    "./src/app/ui-components/list-item/list-item.page.ts");

    var ListItemPageModule = function ListItemPageModule() {
      _classCallCheck(this, ListItemPageModule);
    };

    ListItemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _list_item_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListItemPageRoutingModule"]],
      declarations: [_list_item_page__WEBPACK_IMPORTED_MODULE_6__["ListItemPage"]]
    })], ListItemPageModule);
    /***/
  },

  /***/
  "./src/app/ui-components/list-item/list-item.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/ui-components/list-item/list-item.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiComponentsListItemListItemPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".big_thumbnail {\n  --size: 180px !important;\n}\n\n.large_thumbnail {\n  width: 200px;\n  height: 200px;\n}\n\n.large_thumbnail img {\n  width: auto !important;\n  height: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZXRoZWUvSW9uaWNQcm9qZWN0cy9faW9uaWM1L2lvbmljNWZ1bGxhcHBfZmluYWwvc3JjL2FwcC91aS1jb21wb25lbnRzL2xpc3QtaXRlbS9saXN0LWl0ZW0ucGFnZS5zY3NzIiwic3JjL2FwcC91aS1jb21wb25lbnRzL2xpc3QtaXRlbS9saXN0LWl0ZW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FDQ0o7O0FEQUk7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC91aS1jb21wb25lbnRzL2xpc3QtaXRlbS9saXN0LWl0ZW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJpZ190aHVtYm5haWx7XG4gICAgLS1zaXplIDogMTgwcHggIWltcG9ydGFudDsgXG59XG5cbi5sYXJnZV90aHVtYm5haWx7XG4gICAgd2lkdGg6MjAwcHg7XG4gICAgaGVpZ2h0OjIwMHB4O1xuICAgIGltZ3tcbiAgICAgICAgd2lkdGg6YXV0byAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6YXV0byAhaW1wb3J0YW50O1xuICAgIH1cbn0iLCIuYmlnX3RodW1ibmFpbCB7XG4gIC0tc2l6ZTogMTgwcHggIWltcG9ydGFudDtcbn1cblxuLmxhcmdlX3RodW1ibmFpbCB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cbi5sYXJnZV90aHVtYm5haWwgaW1nIHtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/ui-components/list-item/list-item.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/ui-components/list-item/list-item.page.ts ***!
    \***********************************************************/

  /*! exports provided: ListItemPage */

  /***/
  function srcAppUiComponentsListItemListItemPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListItemPage", function () {
      return ListItemPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ListItemPage = /*#__PURE__*/function () {
      function ListItemPage() {
        _classCallCheck(this, ListItemPage);
      }

      _createClass(ListItemPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ListItemPage;
    }();

    ListItemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list-item',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list-item.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-components/list-item/list-item.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list-item.page.scss */
      "./src/app/ui-components/list-item/list-item.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ListItemPage);
    /***/
  }
}]);
//# sourceMappingURL=ui-components-list-item-list-item-module-es5.js.map