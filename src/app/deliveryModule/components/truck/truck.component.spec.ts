import { ComponentFixture, TestBed  } from '@angular/core/testing';
import {Observable} from 'rxjs';

// services
import { DeliveryApiService } from '../../services';

// component
import { TruckComponent } from './truck.component';

// class
import { Container } from '../../class';

const CONTAINERS_DATA: Container[] = [

  ];

class MockDeliveryApiService {
  getContainers(): Observable<any[]> {
  
    const data = { id: 1, 
      beer: {
        id: 1,
        name: 'Beer 1',
        lowTemperature: -6,
        highTemperature: -4
      }
    }; 
  return Observable.create(data);
  }
}

describe('TruckComponent', () => {
  let component: TruckComponent;
  let fixture: ComponentFixture<TruckComponent>;
  let deliveryService: DeliveryApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TruckComponent
      ],
      providers: [
        {provide: DeliveryApiService, useClass: MockDeliveryApiService}
      ]
    });
    component = TestBed.createComponent(TruckComponent).componentInstance;
    deliveryService = TestBed.get(DeliveryApiService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

});
