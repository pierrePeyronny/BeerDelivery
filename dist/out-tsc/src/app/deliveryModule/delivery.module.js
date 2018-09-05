var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//Modules
import { DeliveryRoutingModule } from './delivery-routing.module';
//Components
import { TruckComponent, ContainerComponent, BeerComponent, TimerComponent } from './components';
//services
import { DeliveryApiService, InMemoryDataService } from './services';
var DeliveryModule = /** @class */ (function () {
    function DeliveryModule() {
    }
    DeliveryModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                HttpClientModule,
                DeliveryRoutingModule,
                // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
                // and returns simulated server responses.
                // Remove it when a real server is ready to receive requests.
                HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
            ],
            declarations: [TruckComponent, ContainerComponent, BeerComponent, TimerComponent],
            providers: [
                DeliveryApiService
            ]
        })
    ], DeliveryModule);
    return DeliveryModule;
}());
export { DeliveryModule };
//# sourceMappingURL=delivery.module.js.map