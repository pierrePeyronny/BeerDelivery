(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"src/app/deliveryModule/delivery.module": [
		"./src/app/deliveryModule/delivery.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: '', redirectTo: '/delivery', pathMatch: 'full' },
    { path: 'delivery', loadChildren: 'src/app/deliveryModule/delivery.module#DeliveryModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n</div>\n<router-outlet></router-outlet>\n\n<!-- <div>\n  <delivery-truck></delivery-truck>\n</div> -->\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'PragmaBreweryApp';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _deliveryModule_delivery_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deliveryModule/delivery.module */ "./src/app/deliveryModule/delivery.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//Modules


//Components

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _deliveryModule_delivery_module__WEBPACK_IMPORTED_MODULE_2__["DeliveryModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/deliveryModule/class/beer.ts":
/*!**********************************************!*\
  !*** ./src/app/deliveryModule/class/beer.ts ***!
  \**********************************************/
/*! exports provided: Beer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Beer", function() { return Beer; });
var Beer = /** @class */ (function () {
    function Beer(id, name, lowTemperature, highTemperature) {
        this.id = id;
        this.name = name;
        this.lowTemperature = lowTemperature;
        this.highTemperature = highTemperature;
    }
    Beer.prototype.temperatureIsLimitOutOfRange = function (currentTemperature) {
        return (currentTemperature == this.lowTemperature || currentTemperature == this.highTemperature);
    };
    Beer.prototype.temperatureIsOutOfRange = function (currentTemperature) {
        return (currentTemperature < this.lowTemperature || currentTemperature > this.highTemperature);
    };
    return Beer;
}());



/***/ }),

/***/ "./src/app/deliveryModule/class/container.ts":
/*!***************************************************!*\
  !*** ./src/app/deliveryModule/class/container.ts ***!
  \***************************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var _beer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./beer */ "./src/app/deliveryModule/class/beer.ts");

var Container = /** @class */ (function () {
    function Container(id, currentTemperature, beer) {
        this.id = id;
        this.currentTemperature = currentTemperature;
        this.beer = new _beer__WEBPACK_IMPORTED_MODULE_0__["Beer"](beer.id, beer.name, beer.lowTemperature, beer.highTemperature);
    }
    Container.prototype.getCurrentTemperature = function () {
        return this.currentTemperature;
    };
    Container.prototype.setCurrentTemperature = function (newTemperature) {
        this.currentTemperature = newTemperature;
    };
    Container.prototype.checkLimitTemperature = function () {
        return this.beer.temperatureIsLimitOutOfRange(this.currentTemperature);
    };
    Container.prototype.checkOutOfRangeTemperature = function () {
        return this.beer.temperatureIsOutOfRange(this.currentTemperature);
    };
    return Container;
}());



/***/ }),

/***/ "./src/app/deliveryModule/class/index.ts":
/*!***********************************************!*\
  !*** ./src/app/deliveryModule/class/index.ts ***!
  \***********************************************/
/*! exports provided: Beer, Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _beer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./beer */ "./src/app/deliveryModule/class/beer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Beer", function() { return _beer__WEBPACK_IMPORTED_MODULE_0__["Beer"]; });

/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container */ "./src/app/deliveryModule/class/container.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return _container__WEBPACK_IMPORTED_MODULE_1__["Container"]; });





/***/ }),

/***/ "./src/app/deliveryModule/components/beer/beer.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/deliveryModule/components/beer/beer.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".transportInformations ul{\n    list-style:none;\n}"

/***/ }),

/***/ "./src/app/deliveryModule/components/beer/beer.component.html":
/*!********************************************************************!*\
  !*** ./src/app/deliveryModule/components/beer/beer.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"beer\" class=\"row\">\n  <div class=\"col-xs-12\">\n      <h5>Beer {{beer.id}} <small>{{beer.name}}</small></h5>\n\n      <div class=\"transportInformations\">\n          <u>Transport informations:</u>\n          <ul>\n            <li>Low temperature: {{beer.lowTemperature}}°C</li>\n            <li>high temperature: {{beer.highTemperature}}°C</li>\n          </ul>\n        </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/deliveryModule/components/beer/beer.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/deliveryModule/components/beer/beer.component.ts ***!
  \******************************************************************/
/*! exports provided: BeerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeerComponent", function() { return BeerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../class */ "./src/app/deliveryModule/class/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//class

var BeerComponent = /** @class */ (function () {
    function BeerComponent() {
    }
    BeerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _class__WEBPACK_IMPORTED_MODULE_1__["Beer"])
    ], BeerComponent.prototype, "beer", void 0);
    BeerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'delivery-beer',
            template: __webpack_require__(/*! ./beer.component.html */ "./src/app/deliveryModule/components/beer/beer.component.html"),
            styles: [__webpack_require__(/*! ./beer.component.css */ "./src/app/deliveryModule/components/beer/beer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BeerComponent);
    return BeerComponent;
}());



/***/ }),

/***/ "./src/app/deliveryModule/components/container/container.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/deliveryModule/components/container/container.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".containerBloc{\n    margin: 10px;\n    padding: 10px;\n}\n\n.currentTemperature{\n    font-size: 35px;\n}"

/***/ }),

/***/ "./src/app/deliveryModule/components/container/container.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/deliveryModule/components/container/container.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div *ngIf=\"_container\" class=\"col-xs-6 col-md-3 containerBloc\" \n  [ngClass]=\"{'bg-success': true, 'bg-warning': this._container.checkLimitTemperature(), 'bg-danger': this._container.checkOutOfRangeTemperature()}\">\n  <h4><u>Container number:</u> {{_container.id}}</h4> \n\n  <!-- Beer component -->\n  <delivery-beer [beer]=\"_container.beer\"></delivery-beer>\n\n  <!-- Current temperature -->\n  <div class=\"text-center\">\n    <u>Current container temperature:</u>\n    <p class=\"currentTemperature\" [ngClass]=\"{'text-danger': this._container.checkOutOfRangeTemperature()}\">{{_container.currentTemperature}}°C</p>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/deliveryModule/components/container/container.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/deliveryModule/components/container/container.component.ts ***!
  \****************************************************************************/
/*! exports provided: ContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerComponent", function() { return ContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services */ "./src/app/deliveryModule/services/index.ts");
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../class */ "./src/app/deliveryModule/class/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Services

//Class

var ContainerComponent = /** @class */ (function () {
    function ContainerComponent(deliveryService) {
        this.deliveryService = deliveryService;
    }
    ContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._container = new _class__WEBPACK_IMPORTED_MODULE_2__["Container"](this.inputContainer.id, this.inputContainer.currentTemperature, this.inputContainer.beer);
        this.subscriptionDataLoaded = this.deliveryService.containersDatas$.subscribe(function (datas) {
            _this.updateTemperatureContainer(datas);
        });
    };
    ContainerComponent.prototype.updateTemperatureContainer = function (updatedContainers) {
        var _this = this;
        var newDatacontainer = updatedContainers.find(function (x) { return x.id == _this._container.id; });
        if (newDatacontainer) {
            this._container.setCurrentTemperature(newDatacontainer.getCurrentTemperature());
        }
    };
    ContainerComponent.prototype.ngOnDestroy = function () {
        if (this.subscriptionDataLoaded) {
            this.subscriptionDataLoaded.unsubscribe();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _class__WEBPACK_IMPORTED_MODULE_2__["Container"])
    ], ContainerComponent.prototype, "inputContainer", void 0);
    ContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'delivery-container',
            template: __webpack_require__(/*! ./container.component.html */ "./src/app/deliveryModule/components/container/container.component.html"),
            styles: [__webpack_require__(/*! ./container.component.css */ "./src/app/deliveryModule/components/container/container.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["DeliveryApiService"]])
    ], ContainerComponent);
    return ContainerComponent;
}());



/***/ }),

/***/ "./src/app/deliveryModule/components/index.ts":
/*!****************************************************!*\
  !*** ./src/app/deliveryModule/components/index.ts ***!
  \****************************************************/
/*! exports provided: TruckComponent, ContainerComponent, BeerComponent, TimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _truck_truck_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./truck/truck.component */ "./src/app/deliveryModule/components/truck/truck.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TruckComponent", function() { return _truck_truck_component__WEBPACK_IMPORTED_MODULE_0__["TruckComponent"]; });

/* harmony import */ var _container_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container/container.component */ "./src/app/deliveryModule/components/container/container.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContainerComponent", function() { return _container_container_component__WEBPACK_IMPORTED_MODULE_1__["ContainerComponent"]; });

/* harmony import */ var _beer_beer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./beer/beer.component */ "./src/app/deliveryModule/components/beer/beer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BeerComponent", function() { return _beer_beer_component__WEBPACK_IMPORTED_MODULE_2__["BeerComponent"]; });

/* harmony import */ var _timer_timer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timer/timer.component */ "./src/app/deliveryModule/components/timer/timer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimerComponent", function() { return _timer_timer_component__WEBPACK_IMPORTED_MODULE_3__["TimerComponent"]; });







/***/ }),

/***/ "./src/app/deliveryModule/components/timer/timer.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/deliveryModule/components/timer/timer.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <p>\n        <strong>Last temperature check:</strong> {{dateLastUpdate | date:'shortTime'}}\n    </p>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/deliveryModule/components/timer/timer.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/deliveryModule/components/timer/timer.component.ts ***!
  \********************************************************************/
/*! exports provided: TimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerComponent", function() { return TimerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services */ "./src/app/deliveryModule/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Services

var TimerComponent = /** @class */ (function () {
    function TimerComponent(deliveryService) {
        this.deliveryService = deliveryService;
        this.dateLastUpdate = new Date();
    }
    TimerComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Init and launch the timer
        this.deliveryService.initDataLoader();
        //Every time the datas are uptated, dateLastUpdate is set to the current Date
        this.subscriptionDataLoaded = this.deliveryService.containersDatas$.subscribe(function (datas) {
            _this.dateLastUpdate = new Date();
        });
    };
    TimerComponent.prototype.ngOnDestroy = function () {
        if (this.subscriptionDataLoaded) {
            this.subscriptionDataLoaded.unsubscribe();
        }
        //If the TimerComponent doesn't exist anymore, we stop the timer
        this.deliveryService.stopDataLoader();
    };
    TimerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'delivery-timer',
            template: __webpack_require__(/*! ./timer.component.html */ "./src/app/deliveryModule/components/timer/timer.component.html")
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["DeliveryApiService"]])
    ], TimerComponent);
    return TimerComponent;
}());



/***/ }),

/***/ "./src/app/deliveryModule/components/truck/truck.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/deliveryModule/components/truck/truck.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/deliveryModule/components/truck/truck.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/deliveryModule/components/truck/truck.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-danger\" role=\"alert\">\n        <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Error:</span>\n        Enter a valid email address\n</div>\n\n<delivery-timer></delivery-timer>\n\n<div class=\"row\">\n    <delivery-container *ngFor='let container of containers' [inputContainer]=\"container\"></delivery-container>\n</div>\n\n"

/***/ }),

/***/ "./src/app/deliveryModule/components/truck/truck.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/deliveryModule/components/truck/truck.component.ts ***!
  \********************************************************************/
/*! exports provided: TruckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruckComponent", function() { return TruckComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/app/deliveryModule/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Services

var TruckComponent = /** @class */ (function () {
    function TruckComponent(deliveryService, route) {
        this.deliveryService = deliveryService;
        this.route = route;
    }
    TruckComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            _this.containers = data.containers;
        });
    };
    TruckComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'delivery-truck',
            template: __webpack_require__(/*! ./truck.component.html */ "./src/app/deliveryModule/components/truck/truck.component.html"),
            styles: [__webpack_require__(/*! ./truck.component.css */ "./src/app/deliveryModule/components/truck/truck.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["DeliveryApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TruckComponent);
    return TruckComponent;
}());



/***/ }),

/***/ "./src/app/deliveryModule/delivery-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/deliveryModule/delivery-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: DeliveryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryRoutingModule", function() { return DeliveryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./src/app/deliveryModule/components/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services */ "./src/app/deliveryModule/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//components

//services

var routes = [
    {
        path: 'delivery',
        component: _components__WEBPACK_IMPORTED_MODULE_2__["TruckComponent"],
        resolve: {
            containers: _services__WEBPACK_IMPORTED_MODULE_3__["ContainerResolver"]
        }
    }
];
var DeliveryRoutingModule = /** @class */ (function () {
    function DeliveryRoutingModule() {
    }
    DeliveryRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [_services__WEBPACK_IMPORTED_MODULE_3__["ContainerResolver"]]
        })
    ], DeliveryRoutingModule);
    return DeliveryRoutingModule;
}());



/***/ }),

/***/ "./src/app/deliveryModule/delivery.module.ts":
/*!***************************************************!*\
  !*** ./src/app/deliveryModule/delivery.module.ts ***!
  \***************************************************/
/*! exports provided: DeliveryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryModule", function() { return DeliveryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _delivery_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delivery-routing.module */ "./src/app/deliveryModule/delivery-routing.module.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components */ "./src/app/deliveryModule/components/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services */ "./src/app/deliveryModule/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//Modules

//Components

//services

var DeliveryModule = /** @class */ (function () {
    function DeliveryModule() {
    }
    DeliveryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _delivery_routing_module__WEBPACK_IMPORTED_MODULE_4__["DeliveryRoutingModule"],
                // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
                // and returns simulated server responses.
                // Remove it when a real server is ready to receive requests.
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_3__["HttpClientInMemoryWebApiModule"].forRoot(_services__WEBPACK_IMPORTED_MODULE_6__["InMemoryDataService"], { dataEncapsulation: false })
            ],
            declarations: [_components__WEBPACK_IMPORTED_MODULE_5__["TruckComponent"], _components__WEBPACK_IMPORTED_MODULE_5__["ContainerComponent"], _components__WEBPACK_IMPORTED_MODULE_5__["BeerComponent"], _components__WEBPACK_IMPORTED_MODULE_5__["TimerComponent"]],
            providers: [
                _services__WEBPACK_IMPORTED_MODULE_6__["DeliveryApiService"]
            ]
        })
    ], DeliveryModule);
    return DeliveryModule;
}());



/***/ }),

/***/ "./src/app/deliveryModule/services/delivery-api.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/deliveryModule/services/delivery-api.service.ts ***!
  \*****************************************************************/
/*! exports provided: DeliveryApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryApiService", function() { return DeliveryApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeliveryApiService = /** @class */ (function () {
    function DeliveryApiService(http) {
        this.http = http;
        //API's url
        this.containersUrl = 'api/containers';
        // Kill subject to stop all requests for component
        this.killTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /** Call the API do get the Containers Datas */
    DeliveryApiService.prototype.getContainers = function () {
        return this.http.get(this.containersUrl);
    };
    /** Init the timer and the request for updating the datas */
    DeliveryApiService.prototype.initDataLoader = function () {
        var _this = this;
        this.dataRequest$ = this.getContainers();
        this.refreshInterval$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, 60000)
            .pipe(
        // This kills the request if the user closes the component 
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.killTrigger), 
        // switchMap cancels the last request, if no response have been received since last tick
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () { return _this.dataRequest$; }));
        this.containersDatas$ = this.refreshInterval$;
    };
    /** Stop the timer for the container update */
    DeliveryApiService.prototype.stopDataLoader = function () {
        this.killTrigger.next();
    };
    DeliveryApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DeliveryApiService);
    return DeliveryApiService;
}());



/***/ }),

/***/ "./src/app/deliveryModule/services/delivery-resolver.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/deliveryModule/services/delivery-resolver.service.ts ***!
  \**********************************************************************/
/*! exports provided: ContainerResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerResolver", function() { return ContainerResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _delivery_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delivery-api.service */ "./src/app/deliveryModule/services/delivery-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Services

var ContainerResolver = /** @class */ (function () {
    function ContainerResolver(service) {
        this.service = service;
    }
    ContainerResolver.prototype.resolve = function () {
        return this.service.getContainers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (containers) {
            return containers;
        }));
    };
    ContainerResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_delivery_api_service__WEBPACK_IMPORTED_MODULE_2__["DeliveryApiService"]])
    ], ContainerResolver);
    return ContainerResolver;
}());



/***/ }),

/***/ "./src/app/deliveryModule/services/in-memory-data.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/deliveryModule/services/in-memory-data.service.ts ***!
  \*******************************************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        //Mock Datas
        var containers = [
            { id: 1,
                currentTemperature: -5,
                beer: {
                    id: 1,
                    name: "Pilsner",
                    lowTemperature: -6,
                    highTemperature: -4
                }
            },
            { id: 2,
                currentTemperature: -5,
                beer: {
                    id: 2,
                    name: "IPA",
                    lowTemperature: -6,
                    highTemperature: -5
                }
            },
            { id: 3,
                currentTemperature: -3,
                beer: {
                    id: 3,
                    name: "Lager",
                    lowTemperature: -7,
                    highTemperature: -4
                }
            },
            { id: 4,
                currentTemperature: -7.5,
                beer: {
                    id: 4,
                    name: "Stout",
                    lowTemperature: -8,
                    highTemperature: -6
                }
            },
            { id: 5,
                currentTemperature: -4,
                beer: {
                    id: 5,
                    name: "Wheat beer",
                    lowTemperature: -5,
                    highTemperature: -3
                }
            },
            { id: 6,
                currentTemperature: -5,
                beer: {
                    id: 6,
                    name: "Pale Ale",
                    lowTemperature: -6,
                    highTemperature: -4
                }
            }
        ];
        return { containers: containers };
    };
    return InMemoryDataService;
}());



/***/ }),

/***/ "./src/app/deliveryModule/services/index.ts":
/*!**************************************************!*\
  !*** ./src/app/deliveryModule/services/index.ts ***!
  \**************************************************/
/*! exports provided: DeliveryApiService, InMemoryDataService, ContainerResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _delivery_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delivery-api.service */ "./src/app/deliveryModule/services/delivery-api.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeliveryApiService", function() { return _delivery_api_service__WEBPACK_IMPORTED_MODULE_0__["DeliveryApiService"]; });

/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./in-memory-data.service */ "./src/app/deliveryModule/services/in-memory-data.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return _in_memory_data_service__WEBPACK_IMPORTED_MODULE_1__["InMemoryDataService"]; });

/* harmony import */ var _delivery_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delivery-resolver.service */ "./src/app/deliveryModule/services/delivery-resolver.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContainerResolver", function() { return _delivery_resolver_service__WEBPACK_IMPORTED_MODULE_2__["ContainerResolver"]; });






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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/popeye/Projects/PragmaBreweryApp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map