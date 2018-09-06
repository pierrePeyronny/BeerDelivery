import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Services
import { DeliveryApiService, AlertService } from '../../services';

// class
import { Container } from '../../class';

/**
 * TruckComponent is in charge of showing the containers
 * It also Init and stop the automatical uptate of the datas
 */
@Component({
  selector: 'delivery-truck',
  templateUrl: './truck.component.html'
})
export class TruckComponent implements OnInit, OnDestroy {

  containers: Container[];

  constructor(
    private deliveryService: DeliveryApiService,
    private route: ActivatedRoute,
    public alertService: AlertService) { }

  ngOnInit() {
    // Get the first datas from the resolver
    this.route.data
    .subscribe((data: { containers: Container [] }) => {
    this.containers = data.containers;
    });

      // Init and launch the uptade
      this.deliveryService.initDataLoader();

  }

  ngOnDestroy() {
    // If the TruckComponent doesn't exist anymore, we stop to update containersDatas
    this.deliveryService.stopDataLoader();
  }

}
