import { Container } from './container';
import { Beer } from './beer';

describe('Container', () => {

    let container: Container;

    beforeEach(() => {
        // initialize
        container = new Container(1, 0, new Beer(1, 'beer test', -8, -4));
    });

    it('CurrentTemperature should be -5', () => {
        container.setCurrentTemperature(-5);
        expect(container.currentTemperature).toEqual(-5);
    });
    
    it('checkLimitTemperature should be true', () => {

        container.setCurrentTemperature(-4);
        expect(container.checkLimitTemperature()).toBeTruthy();
    });

    it('checkLimitTemperature should false', () => {

        container.setCurrentTemperature(-5);
        expect(container.checkLimitTemperature()).toBeFalsy();
    });

    it('checkOutOfRangeTemperature should be true', () => {
        container.setCurrentTemperature(-2);
        expect(container.checkOutOfRangeTemperature()).toBeTruthy();
    }); 

    it('checkOutOfRangeTemperature should be false', () => {
        container.setCurrentTemperature(-4);
        expect(container.checkOutOfRangeTemperature()).toBeFalsy();
    }); 
});
 