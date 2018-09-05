var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        //Mock Datas
        var containers = [
            { id: 1,
                currentTemperature: -5,
                beer: {
                    id: 1,
                    name: "Pilsner",
                    lowTemperature: -6,
                    highTemperature: -4
                }
            },
            { id: 2,
                currentTemperature: -5,
                beer: {
                    id: 2,
                    name: "IPA",
                    lowTemperature: -6,
                    highTemperature: -5
                }
            },
            { id: 3,
                currentTemperature: -3,
                beer: {
                    id: 3,
                    name: "Lager",
                    lowTemperature: -7,
                    highTemperature: -4
                }
            },
            { id: 4,
                currentTemperature: -7.5,
                beer: {
                    id: 4,
                    name: "Stout",
                    lowTemperature: -8,
                    highTemperature: -6
                }
            },
            { id: 5,
                currentTemperature: -4,
                beer: {
                    id: 5,
                    name: "Wheat beer",
                    lowTemperature: -5,
                    highTemperature: -3
                }
            },
            { id: 6,
                currentTemperature: -5,
                beer: {
                    id: 6,
                    name: "Pale Ale",
                    lowTemperature: -6,
                    highTemperature: -4
                }
            }
        ];
        return { containers: containers };
    };
    return InMemoryDataService;
}());
export { InMemoryDataService };
//# sourceMappingURL=in-memory-data.service.js.map