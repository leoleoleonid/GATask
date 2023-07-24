import IntegerController from './integer.controller';

describe('IntegerController', () => {
    describe('calc', () => {
        it('should return "G" for multiples of 3', () => {
            const controller = new IntegerController();
            expect(controller.calc(6)).toBe('G');
            expect(controller.calc(9)).toBe('G');
        });

        it('should return "N" for multiples of 5', () => {
            const controller = new IntegerController();
            expect(controller.calc(10)).toBe('N');
            expect(controller.calc(20)).toBe('N');
        });

        it('should return "GN" for multiples of both 3 and 5', () => {
            const controller = new IntegerController();
            expect(controller.calc(15)).toBe('GN');
            expect(controller.calc(30)).toBe('GN');
        });

        it('should return the input number as a string for non-multiples of 3 or 5', () => {
            const controller = new IntegerController();
            expect(controller.calc(2)).toBe('2');
            expect(controller.calc(7)).toBe('7');
        });
    });

    describe('isMulOfThree', () => {
        it('should return "G" for multiples of 3', () => {
            const controller = new IntegerController();
            expect(controller['isMulOfThree'](6)).toBe('G');
            expect(controller['isMulOfThree'](9)).toBe('G');
        });

        it('should return an empty string for non-multiples of 3', () => {
            const controller = new IntegerController();
            expect(controller['isMulOfThree'](2)).toBe('');
            expect(controller['isMulOfThree'](7)).toBe('');
        });
    });

    describe('isMulOfFive', () => {
        it('should return "N" for multiples of 5', () => {
            const controller = new IntegerController();
            expect(controller['isMulOfFive'](10)).toBe('N');
            expect(controller['isMulOfFive'](20)).toBe('N');
            // Add more test cases for other multiples of 5
        });

        it('should return an empty string for non-multiples of 5', () => {
            const controller = new IntegerController();
            expect(controller['isMulOfFive'](3)).toBe('');
            expect(controller['isMulOfFive'](8)).toBe('');
        });
    });
});
