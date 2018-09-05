var Beer = /** @class */ (function () {
    function Beer(id, name, lowTemperature, highTemperature) {
        this.id = id;
        this.name = name;
        this.lowTemperature = lowTemperature;
        this.highTemperature = highTemperature;
    }
    Beer.prototype.temperatureIsLimitOutOfRange = function (currentTemperature) {
        return (currentTemperature == this.lowTemperature || currentTemperature == this.highTemperature);
    };
    Beer.prototype.temperatureIsOutOfRange = function (currentTemperature) {
        return (currentTemperature < this.lowTemperature || currentTemperature > this.highTemperature);
    };
    return Beer;
}());
export { Beer };
//# sourceMappingURL=beer.js.map