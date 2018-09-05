var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
//Services
import { DeliveryApiService } from '../../services';
//Class
import { Container } from '../../class';
var ContainerComponent = /** @class */ (function () {
    function ContainerComponent(deliveryService) {
        this.deliveryService = deliveryService;
    }
    ContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._container = new Container(this.inputContainer.id, this.inputContainer.currentTemperature, this.inputContainer.beer);
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
        Input(),
        __metadata("design:type", Container)
    ], ContainerComponent.prototype, "inputContainer", void 0);
    ContainerComponent = __decorate([
        Component({
            selector: 'delivery-container',
            templateUrl: './container.component.html',
            styleUrls: ['./container.component.css']
        }),
        __metadata("design:paramtypes", [DeliveryApiService])
    ], ContainerComponent);
    return ContainerComponent;
}());
export { ContainerComponent };
//# sourceMappingURL=container.component.js.map