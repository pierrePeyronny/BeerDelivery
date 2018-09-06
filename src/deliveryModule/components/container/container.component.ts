import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';

// Services
import { DeliveryApiService, AlertService } from '../../services';

// Class
import { Container } from '../../class';

@Component({
  selector: 'delivery-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, OnDestroy {
@Input() inputContainer: Container;
_container: Container;

subscriptionDataLoaded: Subscription;

  constructor(
    private deliveryService: DeliveryApiService,
    private alertService: AlertService) { }

  ngOnInit() {
    this._container = new Container(this.inputContainer.id, this.inputContainer.currentTemperature, this.inputContainer.beer);

    // Subscribe to the change of datas
    this.subscriptionDataLoaded = this.deliveryService.containersDatas$.subscribe(datas => {
      this.updateTemperatureContainer(datas);
    });
  }

  /**
   * Update the current temperature of the container and send alert if necessary
   * @param updatedContainers 
   */
  updateTemperatureContainer(updatedContainers: Container[]): void {
    const newDatacontainer: Container = updatedContainers.find(x => x.id === this._container.id);

    if (newDatacontainer) {
      this._container.setCurrentTemperature(newDatacontainer.currentTemperature);
      this.alertTemperatureContainer();
    }
  }

  /**
   * send alert to the alertService if necessary
   */
  alertTemperatureContainer(): void {
    if (this._container.checkOutOfRangeTemperature()) {
      this.alertService.addAlert(this._container.id);
    } else {
      this.alertService.removeAlert(this._container.id);
    }
  }

   
   ngOnDestroy() {
     if (this.subscriptionDataLoaded) {
       this.subscriptionDataLoaded.unsubscribe();
     }
   }

}
