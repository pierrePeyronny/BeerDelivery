import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/delivery', pathMatch: 'full' },

  /** lazy loading on the deliveryModule */
  { path: 'delivery', loadChildren: 'src/deliveryModule/delivery.module#DeliveryModule'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
