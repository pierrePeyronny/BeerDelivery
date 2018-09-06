
export class Beer {
    id: number;
    name: string;
    lowTemperature: number;
    highTemperature: number;


    constructor(id: number, name: string, lowTemperature: number, highTemperature: number) {
      this.id = id;
      this.name = name;
      this.lowTemperature = lowTemperature;
      this.highTemperature = highTemperature;
    }

    /**
     * Check if the current temperature is egal to a range 
     * @param currentTemperature 
     */
    temperatureIsLimitOutOfRange(currentTemperature: number): boolean {
      return (currentTemperature === this.lowTemperature || currentTemperature === this.highTemperature);
    }

    /**
     * Check if the current temperature is out of range
     * @param currentTemperature 
     */
    temperatureIsOutOfRange(currentTemperature: number): boolean {
      return (currentTemperature < this.lowTemperature || currentTemperature > this.highTemperature);
    }
  }
  