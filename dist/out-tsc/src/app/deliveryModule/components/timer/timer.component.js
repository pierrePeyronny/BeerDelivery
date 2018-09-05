var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
//Services
import { DeliveryApiService } from '../../services';
/**
 * TimerComponent show the time of the last temperature check
 */
var TimerComponent = /** @class */ (function () {
    function TimerComponent(deliveryService) {
        this.deliveryService = deliveryService;
        this.dateLastUpdate = new Date();
    }
    TimerComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Every time the datas are uptated, dateLastUpdate is set to the current Date
        this.subscriptionDataLoaded = this.deliveryService.containersDatas$.subscribe(function (datas) {
            _this.dateLastUpdate = new Date();
        });
    };
    TimerComponent.prototype.ngOnDestroy = function () {
        if (this.subscriptionDataLoaded) {
            this.subscriptionDataLoaded.unsubscribe();
        }
    };
    TimerComponent = __decorate([
        Component({
            selector: 'delivery-timer',
            templateUrl: './timer.component.html'
        }),
        __metadata("design:paramtypes", [DeliveryApiService])
    ], TimerComponent);
    return TimerComponent;
}());
export { TimerComponent };
//# sourceMappingURL=timer.component.js.map