import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

// Services
import { DeliveryApiService } from '../../services';

/**
 * TimerComponent show the time of the last temperature check
 */
@Component({
  selector: 'delivery-timer',
  templateUrl: './timer.component.html'
})
export class TimerComponent implements OnInit, OnDestroy {

  dateLastUpdate: Date = new Date();
  subscriptionDataLoaded: Subscription;

  constructor(private deliveryService: DeliveryApiService) { }

  ngOnInit() {
    // Every time the datas are uptated, dateLastUpdate is set to the current Date
    this.subscriptionDataLoaded = this.deliveryService.containersDatas$.subscribe(datas => {
      this.dateLastUpdate = new Date();
    });
  }
   
   ngOnDestroy() {
     if (this.subscriptionDataLoaded) {
       this.subscriptionDataLoaded.unsubscribe();
     }
   }

}
