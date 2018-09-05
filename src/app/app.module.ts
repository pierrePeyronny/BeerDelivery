import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules
import { DeliveryModule } from './deliveryModule/delivery.module';
import { AppRoutingModule } from './/app-routing.module';

// Components
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DeliveryModule,
    AppRoutingModule
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
