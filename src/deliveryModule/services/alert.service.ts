import { Injectable } from '@angular/core';

@Injectable()
export class AlertService {

  alertContainers: number[];

  constructor() { 
    this.alertContainers = new Array<number>();
  }

  /** Get the number of alerts */
  numberOfAlerts(): number {
    return this.alertContainers.length;
  }

  /** Getter alert */
  getAlerts(): number[] {
    return this.alertContainers;
  }

  /**
   * Add the container to the alert array
   * @param containerNumber the number of the container
   */
  addAlert(containerNumber: number): void {
    const index = this.alertContainers.indexOf(containerNumber, 0);
    if (index === -1) {
      this.alertContainers.push(containerNumber);
    }
  }

  /**
   * Remove the container from the alert array
   * @param containerNumber the number of the container 
   */
  removeAlert(containerNumber: number): void {
    const index = this.alertContainers.indexOf(containerNumber, 0);
    if (index > -1) {
      this.alertContainers.splice(index, 1);
    }
  }


}
