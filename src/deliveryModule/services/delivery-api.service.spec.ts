import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DeliveryApiService } from './delivery-api.service';

describe('DeliveryApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeliveryApiService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([HttpTestingController, DeliveryApiService], 
      (httpMock: HttpTestingController, service: DeliveryApiService) => {
    expect(service).toBeTruthy();
  }));

});
