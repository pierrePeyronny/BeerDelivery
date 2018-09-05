var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timer, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
var DeliveryApiService = /** @class */ (function () {
    function DeliveryApiService(http) {
        this.http = http;
        //API's url
        this.containersUrl = 'api/containers';
        // Kill subject to stop all requests for component
        this.killTrigger = new Subject();
    }
    /** Call the API to get the Containers Datas */
    DeliveryApiService.prototype.getContainers = function () {
        return this.http.get(this.containersUrl);
    };
    /** Init the timer and the request for updating the datas */
    DeliveryApiService.prototype.initDataLoader = function () {
        var _this = this;
        this.dataRequest$ = this.getContainers();
        this.refreshInterval$ = timer(0, 60000)
            .pipe(
        // This kills the request if the user closes the component 
        takeUntil(this.killTrigger), 
        // switchMap cancels the last request, if no response have been received since last tick
        switchMap(function () { return _this.dataRequest$; }));
        this.containersDatas$ = this.refreshInterval$;
    };
    /** Stop the timer  */
    DeliveryApiService.prototype.stopDataLoader = function () {
        this.killTrigger.next();
    };
    DeliveryApiService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], DeliveryApiService);
    return DeliveryApiService;
}());
export { DeliveryApiService };
//# sourceMappingURL=delivery-api.service.js.map