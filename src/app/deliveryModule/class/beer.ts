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

    temperatureIsLimitOutOfRange(currentTemperature: number): boolean {
      return (currentTemperature === this.lowTemperature || currentTemperature === this.highTemperature);
    }

    temperatureIsOutOfRange(currentTemperature: number): boolean {
      return (currentTemperature < this.lowTemperature || currentTemperature > this.highTemperature);
    }
  }
  