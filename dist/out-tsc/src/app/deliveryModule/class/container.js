import { Beer } from './beer';
var Container = /** @class */ (function () {
    function Container(id, currentTemperature, beer) {
        this.id = id;
        this.currentTemperature = currentTemperature;
        this.beer = new Beer(beer.id, beer.name, beer.lowTemperature, beer.highTemperature);
    }
    Container.prototype.getCurrentTemperature = function () {
        return this.currentTemperature;
    };
    Container.prototype.setCurrentTemperature = function (newTemperature) {
        this.currentTemperature = newTemperature;
    };
    Container.prototype.checkLimitTemperature = function () {
        return this.beer.temperatureIsLimitOutOfRange(this.currentTemperature);
    };
    Container.prototype.checkOutOfRangeTemperature = function () {
        return this.beer.temperatureIsOutOfRange(this.currentTemperature);
    };
    return Container;
}());
export { Container };
//# sourceMappingURL=container.js.map