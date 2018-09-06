import { Beer } from './beer';

export class Container {
    id: number;
    currentTemperature: number;
    beer: Beer;


    constructor(id: number, currentTemperature: number, beer: Beer) {
      this.id = id;
      this.currentTemperature = currentTemperature;
      this.beer = new Beer(beer.id, beer.name, beer.lowTemperature, beer.highTemperature);
    }

    /** Setter current temperature */
    setCurrentTemperature(newTemperature: number) {
      this.currentTemperature = newTemperature;
    }

    /**
     * Check if the current temperature is equal to the lowest or highest temperature of the beer
     */
    checkLimitTemperature(): boolean {
      return this.beer.temperatureIsLimitOutOfRange(this.currentTemperature);
    }

    /**
     * Check if the current temperature is out of range
     */
    checkOutOfRangeTemperature(): boolean {
      return this.beer.temperatureIsOutOfRange(this.currentTemperature);
    }

  }
