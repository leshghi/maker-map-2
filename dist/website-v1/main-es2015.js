(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, \nuser-scalable=no\">\n<div class=\"container\">\n  <div class=\"content\" id=\"content\">\n    <div class=\"bg\">\n      \n      <div class=\"filter\">\n        <div class=\"filter-format\">\n        <button  class=\"filter-button\" style=\"font-family:RobagaRoundedLight\" [matMenuTriggerFor]=\"filter1\">FILTER</button>\n            <mat-menu #filter1=\"matMenu\" yPosition=\"above\" >\n            <mat-list>\n              <div>\n                <mat-list-item >\n                  <mat-checkbox style=\"font-family:RobagaRoundedLight\" value=\"access\" [(ngModel)]=\"access.checked\" (change)=\"finalFilter()\" (click)=\"$event.stopPropagation()\">\n                    All Campus Access\n                  </mat-checkbox>\n                </mat-list-item>\n                <mat-list-item>\n                  <mat-checkbox style=\"font-family:RobagaRoundedLight\" value=\"open\" [(ngModel)]=\"open.checked\" (change)=\"hoursFilter()\" (click)=\"$event.stopPropagation()\">\n                    Open Now\n                  </mat-checkbox>\n                </mat-list-item>\n              </div>\n            </mat-list>\n            <button mat-menu-item style=\"font-family:RobagaRoundedLight\" [matMenuTriggerFor]=\"makingResources\">Resources</button>\n            <button mat-menu-item style=\"font-family:RobagaRoundedLight\" (click)=\"resetFilter()\">Reset</button>\n            </mat-menu>\n\n          <mat-menu #makingResources=\"matMenu\" yPosition=\"above\" xPosition=\"before\">\n            <mat-list>\n                <div class=\"resourceFilters\" *ngFor=\"let filter of allFilters\">\n                  <mat-list-item>\n                <mat-checkbox style=\"font-family:RobagaRoundedLight\" value=filter.name [(ngModel)]=\"filter.checked\" (change)=\"finalFilter()\"  (click)=\"$event.stopPropagation()\" >\n                  {{filter.name | uppercase}}</mat-checkbox>\n                  </mat-list-item>\n              </div>\n            </mat-list>\n          </mat-menu>\n\n        </div>\n      </div>\n        \n      <div class=\"learn-more\">\n          <div class=\"learn-more-card\" (click)=\"openLearnMoreDialog()\">\n          <img class=\"learn-image\" src=\"assets/images/Misc/Learn more icon-01.png\">\n        </div>\n      </div>\n\n      <div class=\"text-block\">\n        <div  *ngFor=\"let location of filteredLocations\">\n        <div class=\"example-card\" (click)=\"openLocationDialog(location)\">\n            <img class=\"main-image\" src={{location.key}} alt={{location.name}} >\n        </div>\n        </div>\n      </div>\n      \n      <ng-container *ngFor=\"let location of filteredLocations\">\n      <div class={{location.nameKey}} style=\"position:fixed\">\n        <div class=\"dotExample\" (click)=\"openLocationDialog(location)\">\n        <img class=\"dot-image\" src={{location.dot}}>\n      </div>\n    </div>\n      </ng-container>\n    </div>\n  </div>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog-overview-example-dialog.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog-overview-example-dialog.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div mat-dialog-content>\n        <mat-card-header>\n      <mat-card-title style=\"font-family:DaisyWheel\">{{data.location.name}}\n      </mat-card-title>\n        </mat-card-header><mat-card-header>\n      <mat-card-subtitle style=\"font-family:DaisyWheel\">{{data.location.location}}</mat-card-subtitle>\n    </mat-card-header>\n\n    <img mat-card-image class=\"mat-card-image\" src={{data.location.image}} alt={{data.location.key}}>\n      <div *ngIf=\"data.location.name != 'Smith Media Studios'\" class=\"tester\">\n      <mat-card-content>\n        <mat-list dense class=\"sidebarList\">\n          <h3 matSubheader style=\"font-family:DaisyWheel\">Resources/Equipment</h3>\n          <mat-list-item>\n          <h4 mat-line style=\"font-family:Odin-Bold\" *ngFor=\"let resource of data.location.resources\">•{{resource}}\n          </h4>\n        </mat-list-item>\n        <br>\n          <mat-divider></mat-divider>\n          <h3 matSubheader style=\"font-family:DaisyWheel\">Hours</h3>\n          \n          <mat-list-item *ngIf=\"data.location.hours.length !=0\">\n            \n            <h4 mat-line style=\"font-family:Odin-Bold\">Monday : {{data.location.hours[1]}}</h4>\n            <h4 mat-line style=\"font-family:Odin-Bold\">Tuesday : {{data.location.hours[2]}}</h4>\n            <h4 mat-line style=\"font-family:Odin-Bold\">Wednesday : {{data.location.hours[3]}}</h4>\n            <h4 mat-line style=\"font-family:Odin-Bold\">Thursday : {{data.location.hours[4]}}</h4>\n            <h4 mat-line style=\"font-family:Odin-Bold\">Friday : {{data.location.hours[5]}}</h4>\n            <h4 mat-line style=\"font-family:Odin-Bold\">Saturday : {{data.location.hours[6]}}</h4>\n            <h4 mat-line style=\"font-family:Odin-Bold\">Sunday : {{data.location.hours[0]}}</h4>\n          </mat-list-item>\n          <mat-list-item *ngIf=\"data.location.hours.length == 0\">\n          <h4  style=\"font-family:Odin-Bold\">\n            24/7 Access\n          </h4>\n        </mat-list-item>\n        <mat-list-item>\n          <h4 *ngIf=\"data.location.hourNotes !== ''\" style=\"font-family:Odin-Bold\"> Hour notes: {{data.location.hourNotes}}</h4>\n        </mat-list-item>\n        <mat-divider></mat-divider>\n          <h3 matSubheader style=\"font-family:DaisyWheel\">Access Notes</h3>\n          <mat-list-item>\n          <h4 style=\"font-family:Odin-Bold\">{{data.location.accessNotes}}</h4>\n        </mat-list-item>\n          <mat-divider></mat-divider>\n          <h3 matSubheader style=\"font-family:DaisyWheel\">Accessibility</h3>\n            <mat-list-item>\n            <h4 style=\"font-family:Odin-Bold\">{{data.location.accessibility}}</h4>\n          </mat-list-item>\n          <mat-divider></mat-divider>\n          <h3 matSubheader style=\"font-family:DaisyWheel\">Contact</h3>\n        <mat-list-item>\n          <h4 style=\"font-family:Odin-Bold\" *ngFor=\"let contact of data.location.contact\">{{contact.name}}: <a href=\"mailto:contact?\">{{contact.email}}</a></h4>\n        </mat-list-item>\n          \n          \n        </mat-list>\n        </mat-card-content>\n      </div>\n\n      <div *ngIf=\"data.location.name === 'Smith Media Studios'\" class=\"tester\">\n        <mat-card-content>\n          <mat-list class=\"sidebarList\">\n          <h3 matSubheader style=\"font-family:DaisyWheel\">Locations</h3>\n          </mat-list>\n\n          <mat-accordion>\n            <mat-expansion-panel *ngFor=\"let mediaStudio of data.mediaStudios\">\n              <mat-expansion-panel-header>\n                <mat-panel-title style=\"font-family:DaisyWheel\">{{mediaStudio.name}}</mat-panel-title>\n                <mat-panel-description style=\"font-family:DaisyWheel\">{{mediaStudio.location}}</mat-panel-description>\n              </mat-expansion-panel-header>\n          \n              <p>\n                <img class=\"mat-card-image\" src={{mediaStudio.image}} alt={{mediaStudio.key}}>\n                <mat-list dense class=\"mediaList\">\n                  <h3 matSubheader style=\"font-family:DaisyWheel\">Resources/Equipment</h3>\n                  \n                  <mat-list-item>\n                    <h4 mat-line style=\"font-family:Odin-Bold\" *ngFor=\"let resource of mediaStudio.resources\">•{{resource}}\n                    </h4>\n                  </mat-list-item>\n                  <mat-divider></mat-divider>\n                  <h3 matSubheader style=\"font-family:DaisyWheel\">Access Notes</h3>\n                  <mat-list-item>   \n                    <h4 style=\"font-family:Odin-Bold\">{{mediaStudio.accessNotes}}</h4>\n                  </mat-list-item>   \n                </mat-list>\n              </p>\n\n            </mat-expansion-panel>\n          </mat-accordion>\n          \n          \n          <mat-divider></mat-divider>\n            <mat-list dense class=\"mediaList\">\n            <h3 matSubheader style=\"font-family:DaisyWheel\">Hours</h3>\n            <mat-list-item *ngIf=\"data.location.hours.length != 0\">\n              <h4 mat-line style=\"font-family:Odin-Bold\">Monday : {{data.location.hours[1]}}</h4>\n              <h4 mat-line style=\"font-family:Odin-Bold\">Tuesday : {{data.location.hours[2]}}</h4>\n              <h4 mat-line style=\"font-family:Odin-Bold\">Wednesday : {{data.location.hours[3]}}</h4>\n              <h4 mat-line style=\"font-family:Odin-Bold\">Thursday : {{data.location.hours[4]}}</h4>\n              <h4 mat-line style=\"font-family:Odin-Bold\">Friday : {{data.location.hours[5]}}</h4>\n              <h4 mat-line style=\"font-family:Odin-Bold\">Saturday : {{data.location.hours[6]}}</h4>\n              <h4 mat-line style=\"font-family:Odin-Bold\">Sunday : {{data.location.hours[0]}}</h4>\n            </mat-list-item>\n            <mat-list-item *ngIf=\"data.location.hours.length == 0\">\n              <h4  style=\"font-family:Odin-Bold\">\n                24/7 Access\n              </h4>\n            </mat-list-item>  \n            <mat-list-item>\n              <h4 *ngIf=\"data.location.hourNotes !== ''\" style=\"font-family:Odin-Bold\"> Hour notes: {{data.location.hourNotes}}</h4>\n            </mat-list-item>\n            <mat-divider></mat-divider>\n            <h3 matSubheader style=\"font-family:DaisyWheel\">Accessibility</h3>\n              <mat-list-item class=\"sidebarList\">\n              <h4 style=\"font-family:Odin-Bold\">{{data.location.accessibility}}</h4>\n            </mat-list-item>\n            <mat-divider></mat-divider>\n            <h3 matSubheader style=\"font-family:DaisyWheel\">Contact</h3>\n            <mat-list-item class=\"sidebarList\">\n              <h4 style=\"font-family:Odin-Bold\" *ngFor=\"let contact of data.location.contact\">{{contact.name}}: <a href=\"mailto:contact?\">{{contact.email}}</a></h4>\n            </mat-list-item>\n          \n          </mat-list>\n        </mat-card-content>\n\n      </div>\n\n</div>\n  \n\n\n\n\n\n        \n\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/learn-more-dialog.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/learn-more-dialog.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-content>\n    <p style=\"font-family:Odin-Bold\">\n        Created by the <a href=\"https://www.smith.edu/academics/design-thinking\" target=\"_blank\">Design Thinking Initiative</a> at <a href=\"https://www.smith.edu/\" target=\"_blank\">Smith College</a>, \n        this project is the result of Smith students’ questions - Where can I make objects? \n        Where can I learn new skills? We have a woodshop on campus? How do I gain access to these spaces? \n        Our making spaces are scattered across campus but rich in resources - students of all majors have access to materials and tools from paint to CNC routers. \n        This map is an effort to consolidate these resources into one living document.</p>\n    <p style=\"font-family:Odin-Bold\">Many people have contributed to the success of this project, \n        with illustrations and design by <i>Zoe Zandbergen ‘18</i>, \n        web development by <i>Ali Eshghi ‘21 </i>, maintenance by <i>Yuhan Wang ‘25</i>,\n        photography by <i>Samantha Grossman ‘22</i> and <i>Isabelle Hodge ‘20</i>, \n        and project management by <i>Laura Lilienkamp ‘18.</i>\n    </p>\n    <p style=\"font-family:Odin-Bold\">Last Update: July 2022</p>\n\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body,\nhtml {\n  height: 100%;\n}\n\n\n::ng-deep .mat-list[dense] .mat-list-item .mat-line {\n  word-wrap: normal;\n  white-space: pre-wrap;\n}\n\n\n.bg {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%); /* for IE 9 */\n  -webkit-transform: translate(-50%, -50%); /* for Safari */\n\n  /* The image used */\n  background-image: url('MakersMap.png');\n  /* Full height */\n  height: 100vh;\n  width:80vh;\n  /* Center and scale the image nicely */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 100%; \n  background-attachment: scroll;\n  \n}\n\n\n.mat-menu-item{\n  line-height:35px;\n  height:35px;\n}\n\n\n.text-block {\n  position: fixed;\n  width: 25vh;\n  height: 37vh;\n  top: 55%;\n  left: 5%;\n  /* padding-left: 20px;\n  padding-right: 20px; */\n  overflow-y: scroll;\n}\n\n\n.main-image{\n  -o-object-fit: fill;\n     object-fit: fill; /*this makes the image in src fit to the size specified below*/\n  width: 100%; /* Here you can use wherever you want to specify the width and also the height of the <img>*/\n  height: 100%;\n  margin:0px;\n}\n\n\n.example-card {\n  width:100%;\n  max-width: 97%;\n  height: 10%;\n  max-height: 97%;\n  /* max-height:30px; */\n   box-sizing: border-box; \n  margin-left: 1%;\n  margin-bottom: -4.1%; \n  display: -webkit-box; \n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  -webkit-box-align: center;\n          align-items: center;\n  cursor: pointer;\n}\n\n\nmat-line{\n  word-break: break-all;\n  height: auto;\n}\n\n\n.popup{\n  position: absolute;\n  top:10%;\n  left: 20%;\n  width: 60%;\n  height: 60%;\n  background-color:white;\n  color: white;\n}\n\n\n.close-icon{\n  right:0px;\n  margin:0px;\n  top:0px;\n}\n\n\n.mat-card-image{\n  width: 100%;\n}\n\n\n.mediaList .mat-list-item {\n  height: auto;\n}\n\n\n.sidebarList .mat-list-item {\n  height: -webkit-min-content;\n  height: -moz-min-content;\n  height: min-content;\n}\n\n\n.mat-expansion-panel-header {\n  padding: 0px 16px;\n}\n\n\n.content {\n  top:0px;\n  left:0px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: start;\n          align-items: flex-start;\n}\n\n\n.CC{\n  top: 37.5%;\n  left: 64%;\n}\n\n\n.SAL{\n  top: 39.5%;\n  left: 48%;\n}\n\n\n.CDF{\n  top: 44%;\n  left: 52%;\n}\n\n\n.DTIS{\n  top: 6%;\n  left: 60.5%;\n}\n\n\n.CCJC{\n  top: 32%;\n  left: 54.5%;\n}\n\n\n.RR{\n  top:20.5%;\n  left:56%;\n}\n\n\n.TIC{\n  top:33.2%;\n  left:75.5%;\n}\n\n\n.TGL{\n  top:31.4%;\n  left:77.2%;\n}\n\n\n.THW{\n  top:32.5%;\n  left:79.8%;\n}\n\n\n.LSS{\n  top:37.9%;\n  left:50.2%;\n}\n\n\n.ES{\n  top:40.1%;\n  left:51%;\n}\n\n\n.MP{\n  top:53.6%;\n  left:63.1%;\n}\n\n\n.TSS{\n  top:55.5%;\n  left:57.3%;\n}\n\n\n.TCS{\n  top:53.5%;\n  left:56%;\n}\n\n\n.HAS{\n  top:31%;\n  left:74.5%;\n}\n\n\n.SMS{\n  top:41.5%;\n  left:61%;\n}\n\n\n.DML{\n  top:57%;\n  left:48.5%;\n}\n\n\n.dotExample{\n  width:100%;\n  max-width: 97%;\n  height: 10%;\n  max-height: 97%;\n  /* max-height:30px; */\n  box-sizing: border-box; \n\n  display: -webkit-box; \n\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  -webkit-box-align: center;\n          align-items: center;\n  cursor: pointer;\n}\n\n\n.dot-image{\n  -o-object-fit: fill;\n     object-fit: fill;\n  width: 2.8vh;\n  height: 2.8vh;\n  margin:0px;\n}\n\n\n.learn-more{\n  position: fixed;\n  top:96.2%;\n  left:41%;\n}\n\n\n.learn-more-card{\n  width:100%;\n  max-width: 97%;\n  height: 10%;\n  max-height: 97%;\n  /* max-height:30px; */\n   box-sizing: border-box; \n\n  display: -webkit-box; \n\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  -webkit-box-align: center;\n          align-items: center;\n  cursor: pointer;\n}\n\n\n.learn-image{\n  -o-object-fit: fill;\n     object-fit: fill;\n  width: 14.5vh;\n  height: 4vh;\n  margin:0px;\n}\n\n\n.filter{\n  position: fixed;\n  top: 51.5%;\n  left:5%;\n}\n\n\n.filter-format{\n  -webkit-box-align: center;\n          align-items: center;\n  cursor: pointer;\n  box-sizing: border-box; \n  display: -webkit-box; \n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  align-items: center;\n\n}\n\n\n.filter-button{\n  -o-object-fit: fill;\n     object-fit: fill;\n  width: 8vh;\n  height: 3vh;\n  margin: 0px;\n  cursor: pointer;\n  font-size: 2vh;\n  padding: 1px 2px;\n  border-color: black;\n  text-align: center;\n}\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsWUFBWTtBQUNkOzs7QUFHQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7OztBQUlBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsZ0NBQWdDO0VBQ2hDLG9DQUFvQyxFQUFFLGFBQWE7RUFDbkQsd0NBQXdDLEVBQUUsZUFBZTs7RUFFekQsbUJBQW1CO0VBQ25CLHNDQUE0RDtFQUM1RCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFVBQVU7RUFDVixzQ0FBc0M7RUFDdEMsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsNkJBQTZCOztBQUUvQjs7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOzs7QUFHQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLFFBQVE7RUFDUixRQUFRO0VBQ1I7d0JBQ3NCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7O0FBR0E7RUFDRSxtQkFBZ0I7S0FBaEIsZ0JBQWdCLEVBQUUsOERBQThEO0VBQ2hGLFdBQVcsRUFBRSw0RkFBNEY7RUFDekcsWUFBWTtFQUNaLFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLFdBQVc7RUFDWCxlQUFlO0VBQ2YscUJBQXFCO0dBQ3BCLHNCQUFzQjtFQUN2QixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFpQjtFQUFqQiw2QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtBQUNkOzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLE9BQU87QUFDVDs7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7OztBQUVBO0VBQ0UsWUFBWTtBQUNkOzs7QUFFQTtFQUNFLDJCQUFtQjtFQUFuQix3QkFBbUI7RUFBbkIsbUJBQW1CO0FBQ3JCOzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsUUFBUTtFQUNSLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHdCQUF1QjtVQUF2Qix1QkFBdUI7QUFDekI7OztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7QUFDWDs7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYOzs7QUFFQTtFQUNFLFFBQVE7RUFDUixTQUFTO0FBQ1g7OztBQUVBO0VBQ0UsT0FBTztFQUNQLFdBQVc7QUFDYjs7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsV0FBVztBQUNiOzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxRQUFRO0FBQ1Y7OztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7OztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsUUFBUTtBQUNWOzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7OztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsUUFBUTtBQUNWOzs7QUFFQTtFQUNFLE9BQU87RUFDUCxVQUFVO0FBQ1o7OztBQUVBO0VBQ0UsU0FBUztFQUNULFFBQVE7QUFDVjs7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QsV0FBVztFQUNYLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsc0JBQXNCOztFQUV0QixvQkFBYTs7RUFBYixhQUFhO0VBQ2IsNEJBQWlCO0VBQWpCLDZCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOzs7QUFFQTtFQUNFLG1CQUFnQjtLQUFoQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7RUFDYixVQUFVO0FBQ1o7OztBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxRQUFRO0FBQ1Y7OztBQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZUFBZTtFQUNmLHFCQUFxQjtHQUNwQixzQkFBc0I7O0VBRXZCLG9CQUFhOztFQUFiLGFBQWE7RUFDYiw0QkFBaUI7RUFBakIsNkJBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7OztBQUVBO0VBQ0UsbUJBQWdCO0tBQWhCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsV0FBVztFQUNYLFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLE9BQU87QUFDVDs7O0FBRUE7RUFDRSx5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQWlCO0VBQWpCLDZCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsbUJBQW1COztBQUVyQjs7O0FBRUE7RUFDRSxtQkFBZ0I7S0FBaEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixXQUFXO0VBQ1gsV0FBVztFQUNYLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHksXG5odG1sIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5cbjo6bmctZGVlcCAubWF0LWxpc3RbZGVuc2VdIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZSB7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG5cblxuXG4uYmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IC8qIGZvciBJRSA5ICovXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IC8qIGZvciBTYWZhcmkgKi9cblxuICAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2ltYWdlcy9NYXAvTWFrZXJzTWFwLnBuZ1wiKTtcbiAgLyogRnVsbCBoZWlnaHQgKi9cbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6ODB2aDtcbiAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlOyBcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XG4gIFxufVxuXG4ubWF0LW1lbnUtaXRlbXtcbiAgbGluZS1oZWlnaHQ6MzVweDtcbiAgaGVpZ2h0OjM1cHg7XG59XG5cblxuLnRleHQtYmxvY2sge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAyNXZoO1xuICBoZWlnaHQ6IDM3dmg7XG4gIHRvcDogNTUlO1xuICBsZWZ0OiA1JTtcbiAgLyogcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4OyAqL1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cblxuLm1haW4taW1hZ2V7XG4gIG9iamVjdC1maXQ6IGZpbGw7IC8qdGhpcyBtYWtlcyB0aGUgaW1hZ2UgaW4gc3JjIGZpdCB0byB0aGUgc2l6ZSBzcGVjaWZpZWQgYmVsb3cqL1xuICB3aWR0aDogMTAwJTsgLyogSGVyZSB5b3UgY2FuIHVzZSB3aGVyZXZlciB5b3Ugd2FudCB0byBzcGVjaWZ5IHRoZSB3aWR0aCBhbmQgYWxzbyB0aGUgaGVpZ2h0IG9mIHRoZSA8aW1nPiovXG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOjBweDtcbn1cblxuLmV4YW1wbGUtY2FyZCB7XG4gIHdpZHRoOjEwMCU7XG4gIG1heC13aWR0aDogOTclO1xuICBoZWlnaHQ6IDEwJTtcbiAgbWF4LWhlaWdodDogOTclO1xuICAvKiBtYXgtaGVpZ2h0OjMwcHg7ICovXG4gICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcbiAgbWFyZ2luLWxlZnQ6IDElO1xuICBtYXJnaW4tYm90dG9tOiAtNC4xJTsgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbm1hdC1saW5le1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLnBvcHVwe1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDoxMCU7XG4gIGxlZnQ6IDIwJTtcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiA2MCU7XG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNsb3NlLWljb257XG4gIHJpZ2h0OjBweDtcbiAgbWFyZ2luOjBweDtcbiAgdG9wOjBweDtcbn1cblxuLm1hdC1jYXJkLWltYWdle1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1lZGlhTGlzdCAubWF0LWxpc3QtaXRlbSB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLnNpZGViYXJMaXN0IC5tYXQtbGlzdC1pdGVtIHtcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgcGFkZGluZzogMHB4IDE2cHg7XG59XG5cbi5jb250ZW50IHtcbiAgdG9wOjBweDtcbiAgbGVmdDowcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uQ0N7XG4gIHRvcDogMzcuNSU7XG4gIGxlZnQ6IDY0JTtcbn1cblxuLlNBTHtcbiAgdG9wOiAzOS41JTtcbiAgbGVmdDogNDglO1xufVxuXG4uQ0RGe1xuICB0b3A6IDQ0JTtcbiAgbGVmdDogNTIlO1xufVxuXG4uRFRJU3tcbiAgdG9wOiA2JTtcbiAgbGVmdDogNjAuNSU7XG59XG5cbi5DQ0pDe1xuICB0b3A6IDMyJTtcbiAgbGVmdDogNTQuNSU7XG59XG5cbi5SUntcbiAgdG9wOjIwLjUlO1xuICBsZWZ0OjU2JTtcbn1cblxuLlRJQ3tcbiAgdG9wOjMzLjIlO1xuICBsZWZ0Ojc1LjUlO1xufVxuXG4uVEdMe1xuICB0b3A6MzEuNCU7XG4gIGxlZnQ6NzcuMiU7XG59XG5cbi5USFd7XG4gIHRvcDozMi41JTtcbiAgbGVmdDo3OS44JTtcbn1cblxuLkxTU3tcbiAgdG9wOjM3LjklO1xuICBsZWZ0OjUwLjIlO1xufVxuXG4uRVN7XG4gIHRvcDo0MC4xJTtcbiAgbGVmdDo1MSU7XG59XG5cbi5NUHtcbiAgdG9wOjUzLjYlO1xuICBsZWZ0OjYzLjElO1xufVxuXG4uVFNTe1xuICB0b3A6NTUuNSU7XG4gIGxlZnQ6NTcuMyU7XG59XG5cbi5UQ1N7XG4gIHRvcDo1My41JTtcbiAgbGVmdDo1NiU7XG59XG5cbi5IQVN7XG4gIHRvcDozMSU7XG4gIGxlZnQ6NzQuNSU7XG59XG5cbi5TTVN7XG4gIHRvcDo0MS41JTtcbiAgbGVmdDo2MSU7XG59XG5cbi5ETUx7XG4gIHRvcDo1NyU7XG4gIGxlZnQ6NDguNSU7XG59XG5cbi5kb3RFeGFtcGxle1xuICB3aWR0aDoxMDAlO1xuICBtYXgtd2lkdGg6IDk3JTtcbiAgaGVpZ2h0OiAxMCU7XG4gIG1heC1oZWlnaHQ6IDk3JTtcbiAgLyogbWF4LWhlaWdodDozMHB4OyAqL1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZG90LWltYWdle1xuICBvYmplY3QtZml0OiBmaWxsO1xuICB3aWR0aDogMi44dmg7XG4gIGhlaWdodDogMi44dmg7XG4gIG1hcmdpbjowcHg7XG59XG5cbi5sZWFybi1tb3Jle1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDo5Ni4yJTtcbiAgbGVmdDo0MSU7XG59XG5cbi5sZWFybi1tb3JlLWNhcmR7XG4gIHdpZHRoOjEwMCU7XG4gIG1heC13aWR0aDogOTclO1xuICBoZWlnaHQ6IDEwJTtcbiAgbWF4LWhlaWdodDogOTclO1xuICAvKiBtYXgtaGVpZ2h0OjMwcHg7ICovXG4gICBib3gtc2l6aW5nOiBib3JkZXItYm94OyBcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubGVhcm4taW1hZ2V7XG4gIG9iamVjdC1maXQ6IGZpbGw7XG4gIHdpZHRoOiAxNC41dmg7XG4gIGhlaWdodDogNHZoO1xuICBtYXJnaW46MHB4O1xufVxuXG4uZmlsdGVye1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTEuNSU7XG4gIGxlZnQ6NSU7XG59XG5cbi5maWx0ZXItZm9ybWF0e1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxufVxuXG4uZmlsdGVyLWJ1dHRvbntcbiAgb2JqZWN0LWZpdDogZmlsbDtcbiAgd2lkdGg6IDh2aDtcbiAgaGVpZ2h0OiAzdmg7XG4gIG1hcmdpbjogMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMnZoO1xuICBwYWRkaW5nOiAxcHggMnB4O1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuXG5cblxuIl19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent, LocationDialog, LearnMoreDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationDialog", function() { return LocationDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearnMoreDialog", function() { return LearnMoreDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _locationsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locationsList */ "./src/app/locationsList.ts");
/* harmony import */ var _smithMediaStudiosList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./smithMediaStudiosList */ "./src/app/smithMediaStudiosList.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");





let AppComponent = class AppComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.open = { checked: false };
        this.mediaStudios = _smithMediaStudiosList__WEBPACK_IMPORTED_MODULE_3__["MEDIASTUDIOS"];
        this.locations = _locationsList__WEBPACK_IMPORTED_MODULE_2__["LOCATIONS"];
        this.filteredLocations = _locationsList__WEBPACK_IMPORTED_MODULE_2__["LOCATIONS"];
        // Filters for the filter menu
        this.allFilters = [{ name: "Lasercutter", checked: false }, { name: "3D printer", checked: false }, { name: "Other fabrication tools", checked: false },
            { name: "Arts and craft supplies", checked: false }, { name: "Software support", checked: false },
            { name: "Computers", checked: false }, { name: "Printing", checked: false },
            { name: "Whiteboard", checked: false }];
        this.access = { name: "All Campus Access Only", checked: false };
        this.title = 'Smith Makers Map';
        this.show = false;
    }
    ngOnInit() {
        this.showPopup(_locationsList__WEBPACK_IMPORTED_MODULE_2__["LOCATIONS"][0]);
    }
    showPopup(location) {
        this.selectedLocation = location;
    }
    // Handles filters for various locations
    finalFilter() {
        this.filteredLocations = _locationsList__WEBPACK_IMPORTED_MODULE_2__["LOCATIONS"];
        if (this.access.checked == true) {
            this.filteredLocations = this.filteredLocations.filter(location => location.access === true);
        }
        ;
        if (this.open.checked === true) {
            this.hoursFilterHelper();
        }
        this.allFilters.forEach(element => {
            if (element.checked) {
                this.filteredLocations = this.filteredLocations.filter(location => location.filtResources.includes(element.name) === true);
            }
        });
    }
    hoursFilter() {
        if (this.open.checked === true) {
            this.hoursFilterHelper();
        }
        else {
            this.filteredLocations = _locationsList__WEBPACK_IMPORTED_MODULE_2__["LOCATIONS"];
            this.finalFilter();
        }
    }
    // Logic for filtering by hours for "open now"
    hoursFilterHelper() {
        var registerDate = new Date();
        var day = registerDate.getDay();
        var hour = registerDate.getHours();
        var minute = registerDate.getMinutes();
        this.filteredLocations = this.filteredLocations.filter(location => {
            var openHour = Number(location.filtHours[day].split("-")[0].split(":")[0]);
            var openMinute = Number(location.filtHours[day].split("-")[0].split(":")[1]);
            var closedHour = Number(location.filtHours[day].split("-")[1].split(":")[0]);
            var closedMinute = Number(location.filtHours[day].split("-")[1].split(":")[1]);
            if (openHour < hour && closedHour > hour) {
                return location;
            }
            else if (openHour === hour) {
                if (openMinute < minute) {
                    return location;
                }
            }
            else if (closedHour === hour) {
                if (closedMinute > minute) {
                    return location;
                }
            }
        });
    }
    // Clear all filters
    resetFilter() {
        this.filteredLocations = _locationsList__WEBPACK_IMPORTED_MODULE_2__["LOCATIONS"];
        this.allFilters.forEach(element => {
            element.checked = false;
        });
        if (this.open.checked == true) {
            this.hoursFilterHelper();
        }
        this.access.checked = false;
    }
    openLocationDialog(location) {
        this.dialog.open(LocationDialog, {
            width: '60%',
            maxWidth: "400px",
            autoFocus: false,
            data: { location: location, mediaStudios: this.mediaStudios }
        });
    }
    openLearnMoreDialog() {
        this.dialog.open(LearnMoreDialog, {
            width: '60%',
            maxWidth: "400px",
            autoFocus: false,
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);

let LocationDialog = class LocationDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
LocationDialog.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] }
];
LocationDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'location-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-overview-example-dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog-overview-example-dialog.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]))
], LocationDialog);

let LearnMoreDialog = class LearnMoreDialog {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
LearnMoreDialog.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] }
];
LearnMoreDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'learn-more-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./learn-more-dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/learn-more-dialog.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], LearnMoreDialog);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");





















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _app_component__WEBPACK_IMPORTED_MODULE_4__["LocationDialog"], _app_component__WEBPACK_IMPORTED_MODULE_4__["LearnMoreDialog"]
        ],
        imports: [
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__["MatButtonToggleModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__["MatSlideToggleModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
        ],
        exports: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        entryComponents: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["LocationDialog"], _app_component__WEBPACK_IMPORTED_MODULE_4__["LearnMoreDialog"]
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/app/locationsList.ts":
/*!**********************************!*\
  !*** ./src/app/locationsList.ts ***!
  \**********************************/
/*! exports provided: LOCATIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCATIONS", function() { return LOCATIONS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const LOCATIONS = [
    { key: "assets/images/1-CC/conway_center.png",
        name: "Conway Center",
        nameKey: "CC",
        resources: ["Prototyping supplies", "Poster-making supplies", "Arts & crafts supplies"],
        filtResources: ["Arts and crafts supplies"],
        hourNotes: "Open and accessible when the library is open, swipe card access may be required. Hours subject to change during breaks.",
        hours: [],
        filtHours: ["0:00-24:00", "0:00-24:00", "0:00-24:00", "0:00-24:00", "0:00-24:00", "0:00-24:00", "0:00-24:00"],
        accessNotes: "Available when Neilson Library is open",
        access: true,
        location: "Inside Neilson Library",
        accessibility: "Wheelchair accessible",
        image: "assets/images/1-CC/picture.jpg",
        contact: [{ name: "CIEC", email: "ciec@smith.edu " }],
        dot: "assets/images/1-CC/1-01.png",
    },
    { key: "assets/images/2-Spatial Analysis Lab/2_SAL-01.png",
        name: "Spatial Analysis Lab",
        nameKey: "SAL",
        resources: ["20 Windows computers with standard Science Center software profile", "GIS, Remote Sensing, Photogrammetry applications."],
        filtResources: ["Software Support", "Computers", "Whiteboard"],
        hourNotes: "Not available during classes or workshops or meetings.  See Spatial Analysis Lab calendar for staffed hours.",
        hours: ["8:00AM-10:00PM", "7:00AM - 11:00PM", "7:00AM - 11:00PM", "7:00AM - 11:00PM", "7:00AM - 11:00PM", "7:00AM - 11:00PM",
            "8:00AM-10:00PM",],
        filtHours: ["8:00-22:00", "7:00-23:00", "7:00-23:00", "7:00-23:00", "7:00-23:00", "7:00-23:00", "8:00-22:00"],
        accessNotes: "Priority given to students enrolled in classes using the SAL.  Not available during class use.  Project system for instructor use only.",
        access: true,
        location: "Sabin-Reed 104",
        accessibility: "Wheelchair accessible",
        image: "assets/images/2-Spatial Analysis Lab/picture.jpeg",
        contact: [{ name: "Jon Caris", email: "jcaris@smith.edu" }],
        dot: "assets/images/2-Spatial Analysis Lab/2-01.png",
    },
    { key: "assets/images/3-CDF/3_CDF-01.png",
        name: "The Center for Design and Fabrication",
        nameKey: "CDF",
        resources: ["Machine shop tools including Lathes, Mills and CNC router.", "Laser cutting and engraving.", "Four 3D printers.", "Wood working tools, saws, sanders, etc.", "Computer Aided Design teaching and support."],
        filtResources: ["Lasercutter", "3D printer", "Other fabrication tools", "Woodworking", "Computers", "Printing", "Whiteboard"],
        hourNotes: "Scheduled appointments take precedence over drop in, though dropins are welcome!",
        hours: ["Closed", "8:30AM - 4:30PM", "8:30AM - 4:30PM", "8:30AM - 4:30PM", "8:30AM - 4:30PM", "8:30AM - 4:30PM", "Closed"],
        filtHours: ["24:00-0:00", "8:30-16:30", "8:30-16:30", "8:30-16:30", "8:30-16:30", "8:30-16:30", "24:00-0:00"],
        access: true,
        accessNotes: "Schedule an Appointment at https://tinyurl.com/y49evypk",
        location: "McConnell B07/B09",
        accessibility: "Wheelchair accessible. Elevator.",
        image: "assets/images/3-CDF/picture.jpeg",
        contact: [{ name: "Eric Jensen", email: "ejensen@smith.edu" }, { name: "Dale Renfrow", email: "drenfrow@smith.edu" }],
        dot: "assets/images/3-CDF/3-01.png",
    },
    { key: "assets/images/4-DTI/4_DTI-01.png",
        name: "Design Thinking Initiative Studios",
        nameKey: "DTIS",
        resources: ["Vinyl cutter", "3D printer", "Laser cutter", "Craft supplies", "Sewing machine and hand tools!"],
        filtResources: ["Lasercutter", "3D printer", "Other fabrication tools", "Arts and crafts supplies",
            "Computers", "Whiteboard"],
        hourNotes: "The prototyping studio is open during 9am to 5pm on weekdays when the college is open, and during student staffed Open Hours: https://www.smith.edu/academics/design-thinking/studio#hours",
        hours: ["Closed", "9:00AM - 5:00PM", "9:00AM - 5:00PM", "9:00AM - 5:00PM", "9:00AM - 5:00PM", "9:00AM - 5:00PM", "Closed"],
        filtHours: ["24:00-0:00", "9:00-17:00", "9:00-17:00", "9:00-17:00", "9:00-17:00", "9:00-17:00", "24:00-0:00"],
        access: true,
        accessNotes: "You may gain OneCard access to Design Thinking Initiative from 6 am to 1 am after completing our Safety Training Quiz: https://www.smith.edu/academics/design-thinking/studio/safety-training",
        location: "Capen Annex Room 203",
        accessibility: "While the Downstairs prototyping studio is wheelchair accessible, the upstairs prototyping studio is not. Please contact us if you need to arrange for appropriate accommodations.",
        image: "assets/images/4-DTI/picture.jpeg",
        contact: [{ name: "Capen Annex", email: "capenannex@smith.edu" }],
        dot: "assets/images/4-DTI/4-01.png",
    },
    { key: "assets/images/5-JMM/5_creative_co_op-01.png",
        name: "Creative Co-op at Jandon",
        nameKey: "CCJC",
        resources: ["Support but not limited to our Crafting for Community STEAM Outreach Initiative"],
        filtResources: ["Arts and craft supplies"],
        hourNotes: "Hours subject to change during breaks and over the summer.",
        hours: ["Closed", "4:00PM - 6:00PM", "Closed", "Closed", "Closed", "1:00PM - 3:00PM", "Closed"],
        filtHours: ["24:00-0:00", "16:00-18:00", "24:00-0:00", "24:00-0:00", "24:00-0:00", "13:00-15:00", "24:00-0:00"],
        access: true,
        accessNotes: "Special activities, workshops and requests may fall outside regular hours",
        location: "Wright Hall Room 13",
        accessibility: "1st Floor is wheelchair accessible",
        image: "assets/images/5-JMM/Jandon_1.jpg",
        contact: [{ name: "Deborah Day", email: "dday@smith.edu" }],
        dot: "assets/images/5-JMM/5-01.png",
    },
    { key: "assets/images/6-Resource Room/6_resourcerm-01.png",
        name: "The Resource Room",
        nameKey: "RR",
        resources: ["Poster-making supplies", "Photocopier", "Markerpaints", "Arts & crafts supplies"],
        filtResources: ["Arts and craft supplies", "Whiteboard"],
        hourNotes: "Hours subject to change during breaks",
        hours: ["9:00AM - 11:30PM", "7:30AM - 11:30PM", "7:30AM - 11:30PM", "7:30AM - 11:30PM", "7:30AM - 11:30PM", "7:30AM - 11:30PM", "9:30AM - 11:30PM"],
        filtHours: ["9:00-23:30", "7:30-23:30", "7:30-23:30", "7:30-23:30", "7:30-23:30", "7:30-23:30", "9:30-23:30"],
        access: true,
        accessNotes: "Available when Campus Center is open",
        location: "Campus Center Room 203",
        accessibility: "Wheelchair accessible via elevator",
        image: "assets/images/6-Resource Room/picture.jpeg",
        contact: [{ name: "OSE", email: "ose@smith.edu" }],
        dot: "assets/images/6-Resource Room/6-01.png",
    },
    { key: "assets/images/7-Imaging Center/7_imagingctr-01.png",
        name: "The Imaging Center",
        nameKey: "TIC",
        resources: ["3D printers", "Large paper cutter", "Adobe Suite and 3D editing software", "iMac computers", "Large format printers", "Contact staff for 3D scanning and poster printing support."],
        filtResources: ["3D printer", "Software support", "Computers", "Printing", "Whiteboard"],
        hourNotes: "No use during lectures",
        hours: ["Closed", "8:30AM -4:30PM", "8:30AM - 4:30PM", "8:30AM - 4:30PM", "8:30AM - 4:30PM", "8:30AM - 4:30PM", "Closed"],
        filtHours: ["24:00-0:00", "8:30-16:30", "8:30-16:30", "8:30-16:30", "8:30-16:30", "8:30-16:30", "24:00-0:00"],
        access: true,
        accessNotes: "Open to students enrolled in Art Department courses.",
        location: "Hillyer H324",
        accessibility: "Wheelchair accessible",
        image: "assets/images/7-Imaging Center/imaging center photo.jpg",
        contact: [{ name: "Nick Baker", email: "ncbaker@smith.edu" }],
        dot: "assets/images/7-Imaging Center/7-01.png",
    },
    { key: "assets/images/8-Gaming Lab/8_gaminglab-01.png",
        name: "The Gaming Lab",
        nameKey: "TGL",
        resources: ["Gaming equipment includes:", "3 gaming PCs", "Arcade cabinet", "HTC Vive", "Oculus Rift", "Playstation VR", "2 PS4s", "Xbox One", "PS3", "XBox 360", "Nintendo Switch", "Game library"],
        filtResources: ["Computers"],
        hourNotes: "Occasionally reserved for class projects",
        hours: [],
        filtHours: ["0:00-24:00", "0:00-24:00", "0:00-24:00", "0:00-24:00", "0:00-24:00", "0:00-24:00", "0:00-24:00"],
        access: true,
        accessNotes: "Check the Facebook page for current semester hours: https://www.facebook.com/gaminglabatsmithcollege/",
        location: "Hillyer H326",
        accessibility: "Wheelchair accessible via elevator",
        image: "assets/images/8-Gaming Lab/picture.jpeg",
        contact: [{ name: "Andrew Maurer", email: "ajmaurer@smith.edu" }],
        dot: "assets/images/8-Gaming Lab/8-01.png",
    },
    { key: "assets/images/9-Hilyer Woodshop/9_hwoodshop-01.png",
        name: "The Hillyer Woodshop",
        nameKey: "THW",
        resources: ["Woodworking"],
        filtResources: ["Woodworking"],
        hourNotes: "When Drew is available",
        hours: ["Closed", "Closed", "8:00AM - 5:00PM", "8:00AM - 5:00PM", "Closed", "8:00AM - 5:00PM", "Closed"],
        filtHours: ["24:00-0:00", "24:00-0:00", "8:00-17:00", "8:00-17:00", "24:00-0:00", "8:00-17:00", "24:00-0:00"],
        access: true,
        accessNotes: "Available to drop-in when Drew Palmore is in the Woodshop",
        location: "Hillyer Basement",
        accessibility: "Wheelchair accessible",
        image: "assets/images/9-Hilyer Woodshop/Woodshop_1.jpg",
        contact: [{ name: "Drew Palmore", email: "apalmore@smith.edu" }],
        dot: "assets/images/9-Hilyer Woodshop/9-01.png",
    },
    { key: "assets/images/10-Landscape Studies Studio/10_lss-01.png",
        name: "Landscape Studies Studio",
        nameKey: "LSS",
        resources: ["10 Windows machines", "Spiral binding machine", "Large format printer", "Low fidelity model building tools and supplies", "Tracing paper", "Milk crates"],
        filtResources: ["Other fabrication tools", "Arts and craft supplies", "Software support", "Computers", "Printing", "Whiteboard"],
        hourNotes: "OneCard Accessible 24/7",
        hours: [],
        filtHours: ["0:00-24:00", "0:00-24:00", "0:00-24:00", "0:00-24:00", "0:00-24:00", "0:00-24:00", "0:00-24:00"],
        access: false,
        accessNotes: "Access to space is only upon request",
        location: "Burton Room 406",
        accessibility: "Wheelchair accessible via Sabin-Burton elevator",
        image: "assets/images/10-Landscape Studies Studio/picture.jpeg",
        contact: [{ name: "Reid Bertone-Johnson", email: "rbertone@smith.edu" }],
        dot: "assets/images/10-Landscape Studies Studio/10-01.png",
    },
    { key: "assets/images/11-EGR Studio/11_egr studio-01.png",
        name: "Engineering Studio",
        nameKey: "ES",
        resources: ["Hand tools", "Electronics", "Craft & proto materials", "Floor drain"],
        filtResources: ["Arts and crafts supplies", "Computers", "Whiteboard"],
        hourNotes: "No use during lectures",
        hours: [],
        filtHours: ["0:00-24:00", "0:00-24:00", "0:00-24:00", "0:00-24:00", "0:00-24:00", "0:00-24:00", "0:00-24:00"],
        access: false,
        accessNotes: "24/7 swipe for EGR students, others by request; staff support by request",
        location: "Burton B016, B017",
        accessibility: "Wheelchair accessible via Sabin/Burton elevator; power assist door B016",
        image: "assets/images/11-EGR Studio/picture.jpeg",
        contact: [{ name: "Sue Froehlich", email: "sfroehli@smith.edu" }],
        dot: "assets/images/11-EGR Studio/11-01.png",
    },
    { key: "assets/images/12-Mechanics Playground/12_mechanics playground-01.png",
        name: "Mechanics Playground",
        nameKey: "MP",
        resources: ["Hand tools", "Concrete station", "Sewing machine", "Craft & proto materials", "Electronics", "Soldering", "Basic lab equipment", "Overhead lift points", "Unistrut wall; overhead water", "Air & exhaust", "Bike tools", "Ladders", "Lasercutter", "3D printer in FH002", "Tornado machine!"],
        filtResources: ["Lasercutter", "3D printer", "Other fabrication tools", "Arts and craft supplies", "Software support", "Computers", "Printing", "Whiteboard"],
        hourNotes: "Scheduled lecture/lab needs take priority, but 022 workspace available during lectures in 024.",
        hours: [],
        filtHours: ["0:00-24:00", "0:00-24:00", "0:00-24:00", "0:00-24:00", "0:00-24:00", "0:00-24:00", "0:00-24:00"],
        access: false,
        accessNotes: "24/7 swipe for EGR students, others by request; staff support weekdays",
        location: "Ford Hall LL 022, 024, 002",
        accessibility: "Accessible for humans & most projects via exterior 1.5-door @ grade level; 'forklift accessible' but no cars",
        image: "assets/images/12-Mechanics Playground/picture.jpeg",
        contact: [{ name: "Sue Froehlich", email: "sfroehli@smith.edu" }],
        dot: "assets/images/12-Mechanics Playground/12-01.png",
    },
    { key: "assets/images/13-Theater Scene Shop/13_theater_scene-01.png",
        name: "Theatre Scene Shop",
        nameKey: "TSS",
        resources: ["Wood-shop and scene-shop tools", "Painting supplies", "Cloth-dying", "Hand tools", "Table saw", "Drill press", "Spray booth", "Upholstery equipment and supplies", "etc"],
        filtResources: ["Woodworking"],
        hourNotes: "Accesssible per request",
        hours: ["Closed", "10:00AM - 5:00PM", "10:00AM - 5:00PM", "10:00AM - 5:00PM", "10:00AM - 5:00PM", "10:00AM - 5:00PM", "Closed"],
        filtHours: ["24:00-0:00", "10:00-17:00", "10:00-17:00", "10:00-17:00", "10:00-17:00", "10:00-17:00", "24:00-0:00"],
        access: false,
        accessNotes: "Available by appointment.",
        location: "Mendenhall [behind the stage]",
        accessibility: "Wheelchair accessible",
        image: "assets/images/13-Theater Scene Shop/theater set shop photo.JPG",
        contact: [{ name: "Daniel D. Rist", email: "drist@smith.edu" }, { name: "Alan Schneider", email: "awschneider@smith.edu" }],
        dot: "assets/images/13-Theater Scene Shop/13-01.png",
    },
    { key: "assets/images/14-Costume Shop/14_costume shop-01.png",
        name: "The Costume Shop",
        nameKey: "TCS",
        resources: ["Sewing machines", "Dress forms", "Iron and steaming", "Flat patterning tools"],
        filtResources: ["Other fabrication tools", "Arts and craft supplies", "Computers", "Printing"],
        hours: ["Closed", "9:00AM - 5:00PM", "9:00AM - 5:00PM", "9:00AM - 5:00PM", "9:00AM - 5:00PM", "9:00AM - 5:00PM", "Closed"],
        hourNotes: "Closed for lunch from 12-1",
        filtHours: ["24:00-0:00", "9:00-17:00", "9:00-17:00", "9:00-17:00", "9:00-17:00", "9:00-17:00", "24:00-0:00"],
        accessNotes: "Limited to students enrolled in Costume Classes",
        access: false,
        location: "Mendenhall Room T12",
        accessibility: "Wheelchair accessible via elevator",
        image: "assets/images/14-Costume Shop/CostumeShop_2.jpg",
        contact: [{ name: "Emily Dunn", email: "edunn2@smith.edu" }],
        dot: "assets/images/14-Costume Shop/14-01.png",
    },
    { key: "assets/images/15-Hillyer Art Studios/15_hilyer studios-01.png",
        name: "Hillyer Art Studios",
        nameKey: "HAS",
        resources: ["Discipline specific studios including:", "Darkrooms", "Digital labs", "Print studio", "Sculpture studio", "Typography studio"],
        filtResources: ["Other fabrication tools", "Arts and craft supplies"],
        hours: [],
        hourNotes: "24/7 access for students enrolled in classes.",
        filtHours: ["0:00-24:00", "0:00-24:00", "0:00-24:00", "0:00-24:00", "0:00-24:00", "0:00-24:00", "0:00-24:00"],
        access: false,
        accessNotes: "Open to students in art classes using studio space only.",
        location: "Hillyer Art Building",
        accessibility: "Wheelchair accessible",
        image: "assets/images/15-Hillyer Art Studios/HilyerClassroom_1.jpg",
        contact: [{ name: "Lindsey Clark-Ryan", email: "lclarkry@smith.edu" }],
        dot: "assets/images/15-Hillyer Art Studios/15-01.png",
    },
    { key: "assets/images/16-Smith Media Studios/16_smith media studios-01.png",
        name: "Smith Media Studios",
        nameKey: "SMS",
        resources: [],
        filtResources: ["Software Support", "Computers", "Printing", "Whiteboard"],
        hours: [],
        hourNotes: "Open during Library Hours (varies)",
        filtHours: ["0:00-24:00", "0:00-24:00", "0:00-24:00", "0:00-24:00", "0:00-24:00", "0:00-24:00", "0:00-24:00"],
        access: true,
        accessNotes: "",
        location: "",
        accessibility: "Wheelchair accessible",
        image: "assets/images/16-Smith Media Studios/SmithMediaStudios-1.jpg",
        contact: [{ name: "Dan Bennett", email: " dbennett@smith.edu" }],
        dot: "assets/images/16-Smith Media Studios/16-01.png",
    },
    { key: "assets/images/17-Digital Music Lab/17_digital music lab-01.png",
        name: "Digital Media Lab",
        nameKey: "DML",
        resources: ["13 workstations with MIDI keyboards", "Computers whose software includes Reaper and Audacity (digital audio workstations)", "Sibelius and Musescore (music notation software)", "Max/MSP"],
        filtResources: ["Software Support", "Computers"],
        hours: [],
        hourNotes: "Anytime with card swipe access (see below)",
        filtHours: ["0:00-24:00", "0:00-24:00", "0:00-24:00", "0:00-24:00", "0:00-24:00", "0:00-24:00", "0:00-24:00"],
        access: true,
        accessNotes: "Students enrolled in a music course that uses the DML, or any student (or other) who writes to me and Anna to gain access.",
        location: "Sage Hall room 315",
        accessibility: "Accessible via elevator to the 3rd floor.",
        image: "assets/images/17-Digital Music Lab/DigitalMusicLab-1.jpg",
        contact: [{ name: "Anna Goudreau", email: "agoudreau@smith.edu" }, { name: "Kate Soper", email: "ksoper@smith.edu" }],
        dot: "assets/images/17-Digital Music Lab/17-01.png",
    }
];


/***/ }),

/***/ "./src/app/smithMediaStudiosList.ts":
/*!******************************************!*\
  !*** ./src/app/smithMediaStudiosList.ts ***!
  \******************************************/
/*! exports provided: MEDIASTUDIOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDIASTUDIOS", function() { return MEDIASTUDIOS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const MEDIASTUDIOS = [
    { key: "assets/images/16-SMS/16_smith media studios-01.png",
        name: "Digital Media Hub",
        nameKey: "",
        resources: ["iMacs and PCs with full Adobe Creative Cloud & GIS Software suite", "012A Self Service Studio with Audio Recording Setup for voice over or podcasting", "012A Also includes studio lighting, black backdrop and green screen for video recording", "Access and reservations for use of studio spaces is the same as for equipment (see above)"],
        filtResources: ["Software Support", "Computers", "Printing"],
        hourNotes: "Open during Library Hours (varies)",
        hours: [],
        filtHours: ["0:00-24:00", "0:00-24:00", "0:00-24:00", "0:00-24:00", "0:00-24:00", "0:00-24:00", "0:00-24:00"],
        accessNotes: "Assistance would be needed for opening studio doors, which is available at the Central Service Point desk. **** NOTE: 012B will be an advanced assisted studio, however it is not currently online yet.",
        access: true,
        location: "Neilson Library Level G",
        accessibility: "",
        image: "assets/images/16-Smith Media Studios/SmithMediaStudios-3.jpg",
        contact: [{ name: "Dan Bennett", email: " dbennett@smith.edu" }],
        dot: "assets/images/16-Smith Media Studios/16-01.png",
    },
    { key: "assets/images/16-SMS/16_smith media studios-01.png",
        name: "Equipment Loan",
        nameKey: "",
        resources: ["Canon Vixia G20 Camcorders", "Canon 80D DSLRs", "Rode VideoMics", "LED light boxes", "Zoom H4N and H6 Portable Audio Recorders", "18'' Ring Lights",
            "Tripods", "Azden Wireless Lav Mics", "Audio Technica AT2020 USB Condenser Mics", "Logitech Brio and C390 Webcam Kits", "Phone video kits with tripod mount and USB Lav Mic (for use with USB-A or USB-C devices)"],
        filtResources: ["Software Support", "Computers"],
        hourNotes: "Open during Library Hours (varies)",
        hours: [],
        filtHours: ["0:00-24:00", "0:00-24:00", "0:00-24:00", "0:00-24:00", "0:00-24:00", "0:00-24:00", "0:00-24:00"],
        accessNotes: "Equipment is available on a walk-in basis, but reservations are recommended. Reservations can be made in-person at the CSP desk, or by using the Request Help link on the Smith Digital Support Site.",
        access: true,
        location: "Neilson Central Service Point",
        accessibility: "",
        image: "assets/images/16-Smith Media Studios/SmithMediaStudios-2.jpg",
        contact: [{ name: "Dan Bennett", email: " dbennett@smith.edu" }],
        dot: "assets/images/16-Smith Media Studios/16-01.png",
    },
    { key: "assets/images/16-SMS/16_smith media studios-01.png",
        name: "Knowledge Lab",
        nameKey: "",
        resources: ["27 iMacs with secondary monitors and full Adobe Creative Cloud"],
        filtResources: ["Computers", "Printing", "Whiteboard"],
        hourNotes: "Open during Library Hours (varies)",
        hours: [],
        filtHours: ["0:00-24:00", "0:00-24:00", "0:00-24:00", "0:00-24:00", "0:00-24:00", "0:00-24:00", "0:00-24:00"],
        accessNotes: "1st floor spaces are accessible",
        access: true,
        location: "Alumnae Gymnasium 202",
        accessibility: "",
        image: "assets/images/16-Smith Media Studios/SmithMediaStudios-4.jpg",
        contact: [{ name: "Dan Bennett", email: " dbennett@smith.edu" }],
        dot: "assets/images/16-Smith Media Studios/16-01.png",
    },
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yuhanw/Documents/GitHub/maker-map-2/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map