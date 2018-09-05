import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timer, Observable, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

// Class
import { Container } from '../class';

@Injectable()
export class DeliveryApiService {

  // API's url
  private containersUrl = 'api/containers';

    // Kill subject to stop all requests for component
    private killTrigger: Subject<void> = new Subject();
    // Observable to collect information from an api
    private dataRequest$: Observable<Container[]>;
    private refreshInterval$: Observable<any>;
    public containersDatas$: Observable<Container[]>;

  constructor(private http: HttpClient) { }

  /** Call the API to get the Containers Datas */
  getContainers() {
    return this.http.get<Container[]>(this.containersUrl);
  }

  /** Init the timer and the request for updating the datas */
 initDataLoader() {

  this.dataRequest$ = this.getContainers();

  this.refreshInterval$ = timer(0, 60000)
    .pipe(
      // This kills the request if the user closes the component 
      takeUntil(this.killTrigger),
      // switchMap cancels the last request, if no response have been received since last tick
      switchMap(() => this.dataRequest$ )
    );

  this.containersDatas$ = this.refreshInterval$;
 }

 /** Stop the timer  */
  stopDataLoader() {
    this.killTrigger.next();
  }
}
