'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var Base64ToGallery = /** @class */ (function (_super) {
    tslib.__extends(Base64ToGallery, _super);
    function Base64ToGallery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Base64ToGallery.prototype.base64ToGallery = function (data, options) { return core.cordova(this, "base64ToGallery", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    Base64ToGallery.pluginName = "Base64ToGallery";
    Base64ToGallery.plugin = "cordova-base64-to-gallery";
    Base64ToGallery.pluginRef = "cordova";
    Base64ToGallery.repo = "https://github.com/Nexxa/cordova-base64-to-gallery";
    Base64ToGallery.platforms = ["Android", "iOS", "Windows Phone 8"];
    Base64ToGallery.decorators = [
        { type: core$1.Injectable }
    ];
    return Base64ToGallery;
}(core.IonicNativePlugin));

exports.Base64ToGallery = Base64ToGallery;
