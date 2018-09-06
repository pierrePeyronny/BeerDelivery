import { DeliveryRoutingModule } from './delivery-routing.module';

describe('DeliveryRoutingModule', () => {
  let deliveryRoutingModule: DeliveryRoutingModule;

  beforeEach(() => {
    deliveryRoutingModule = new DeliveryRoutingModule();
  });

  it('should create an instance', () => {
    expect(deliveryRoutingModule).toBeTruthy();
  });
});
