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
import { map } from 'rxjs/operators';
//Services
import { DeliveryApiService } from './delivery-api.service';
var ContainerResolver = /** @class */ (function () {
    function ContainerResolver(service) {
        this.service = service;
    }
    ContainerResolver.prototype.resolve = function () {
        return this.service.getContainers().pipe(map(function (containers) {
            return containers;
        }));
    };
    ContainerResolver = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [DeliveryApiService])
    ], ContainerResolver);
    return ContainerResolver;
}());
export { ContainerResolver };
//# sourceMappingURL=delivery-resolver.service.js.map