import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Observable, of} from 'rxjs';

// services
import { DeliveryApiService } from '../../services';

// Component
import { TimerComponent } from './timer.component';

// class
import { Container, Beer } from '../../class';

class MockDeliveryApiService {
  public containersDatas$: Observable<Container[]>;

  constructor() {
    const container = new Container(1, -5, new Beer(1, 'test', -8, -3));
    const arrayContainer: Container[] = new Array<Container>();
    arrayContainer.push(container);
    this.containersDatas$ = of( arrayContainer );
  }
}

describe('TimerComponent', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerComponent ],
      providers: [
        {provide: DeliveryApiService, useClass: MockDeliveryApiService}
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
