import { Beer } from './beer';

describe('beer', () => {

    let beer: Beer;

    beforeEach(() => {
        beer = new Beer(1, 'beer test', -8, -4);
    });
    
    it('temperatureIsLimitOutOfRange should be true', () => {
        expect(beer.temperatureIsLimitOutOfRange(-8)).toBeTruthy();
    });

    it('temperatureIsLimitOutOfRange should be false', () => {
        expect(beer.temperatureIsLimitOutOfRange(-10)).toBeFalsy();
    });

    it('temperatureIsOutOfRange should be true', () => {
        expect(beer.temperatureIsOutOfRange(-1)).toBeTruthy();
    });

    it('temperatureIsOutOfRange should be false', () => {
        expect(beer.temperatureIsOutOfRange(-6)).toBeFalsy();
    });
});
