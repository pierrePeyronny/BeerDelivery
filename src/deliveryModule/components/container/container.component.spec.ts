import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Observable, of} from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

// services
import { DeliveryApiService, AlertService } from '../../services';

// Component
import { ContainerComponent } from './container.component';

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


describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;
  let expectedContainer: Container;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerComponent ],
      providers: [
        {provide: DeliveryApiService, useClass: MockDeliveryApiService},
        {provide: AlertService, useClass: AlertService}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;

    // mock the hero supplied by the parent component
    expectedContainer = new Container(1, 0, new Beer(1, 'beer test', -8, -4));

    // simulate the parent setting the input property with that hero
    component.inputContainer = expectedContainer;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
