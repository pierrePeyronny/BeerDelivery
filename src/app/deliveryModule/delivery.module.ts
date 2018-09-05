import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

// Modules
import { DeliveryRoutingModule } from './delivery-routing.module';

// Components
import { TruckComponent, ContainerComponent, BeerComponent, TimerComponent } from './components';

// services
import { DeliveryApiService, AlertService, InMemoryDataService } from './services';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    DeliveryRoutingModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [TruckComponent, ContainerComponent, BeerComponent, TimerComponent],
  providers: [
    DeliveryApiService, AlertService
  ]
})
export class DeliveryModule { }
