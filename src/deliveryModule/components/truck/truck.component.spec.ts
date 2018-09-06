import { TestBed  } from '@angular/core/testing';
import {Observable, of} from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// services
import { DeliveryApiService, AlertService } from '../../services';

// component
import { TruckComponent } from './truck.component';


const data = { id: 1, 
  beer: {
    id: 1,
    name: 'Beer 1',
    lowTemperature: -6,
    highTemperature: -4
  }
}; 

class MockDeliveryApiService {

}

describe('TruckComponent', () => {
  let component: TruckComponent;
  let deliveryService: DeliveryApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TruckComponent
      ],
      providers: [
        {provide: DeliveryApiService, useClass: MockDeliveryApiService},
        {provide: AlertService, useClass: AlertService},
        {provide: ActivatedRoute, useValue: {
          params: of(data)
        }}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    component = TestBed.createComponent(TruckComponent).componentInstance;
    deliveryService = TestBed.get(DeliveryApiService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

});
