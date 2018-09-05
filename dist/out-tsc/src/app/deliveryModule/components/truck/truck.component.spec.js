import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
//services
import { DeliveryApiService } from '../../services';
//component
import { TruckComponent } from './truck.component';
var CONTAINERS_DATA = [];
var MockDeliveryApiService = /** @class */ (function () {
    function MockDeliveryApiService() {
    }
    MockDeliveryApiService.prototype.getContainers = function () {
        var data = { id: 1,
            beer: {
                id: 1,
                name: "Beer 1",
                lowTemperature: -6,
                highTemperature: -4
            }
        };
        return Observable.create(data);
    };
    return MockDeliveryApiService;
}());
describe('TruckComponent', function () {
    var component;
    var fixture;
    var deliveryService;
    beforeEach(function () {
        TestBed.configureTestingModule({
            declarations: [
                TruckComponent
            ],
            providers: [
                { provide: DeliveryApiService, useClass: MockDeliveryApiService }
            ]
        });
        component = TestBed.createComponent(TruckComponent).componentInstance;
        deliveryService = TestBed.get(DeliveryApiService);
    });
    it('should create the component', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=truck.component.spec.js.map