import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DeliveryApiService } from './delivery-api.service';
describe('DeliveryApiService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [DeliveryApiService],
            imports: [HttpClientTestingModule]
        });
    });
    it('should be created', inject([HttpTestingController, DeliveryApiService], function (httpMock, service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=delivery-api.service.spec.js.map