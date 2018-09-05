import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { TruckComponent } from './components';

// services
import { ContainerResolver } from './services';

const routes: Routes = [
  {
    path: 'delivery',
    component: TruckComponent,
    resolve: {
     containers: ContainerResolver
		}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ContainerResolver]
})
export class DeliveryRoutingModule { }
