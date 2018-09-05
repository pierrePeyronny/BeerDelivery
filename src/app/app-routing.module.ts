import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/delivery', pathMatch: 'full' },
  { path: 'delivery', loadChildren: 'src/app/deliveryModule/delivery.module#DeliveryModule'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
