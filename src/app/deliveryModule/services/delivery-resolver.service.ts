import { Injectable } from '@angular/core';
import { Resolve  } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Services
import { DeliveryApiService } from './delivery-api.service';

// Class
import { Container } from '../class';

@Injectable()
export class ContainerResolver implements Resolve<Container[]> {
  constructor(private service: DeliveryApiService) {}

  resolve(): Observable<Container[]> {

    return this.service.getContainers().pipe(
      map(containers => {
        return containers;
      })
    );
  }
}
