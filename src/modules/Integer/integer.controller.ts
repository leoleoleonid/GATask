export default class IntegerController {
    private readonly THREE : number = 3;
    private readonly FIVE : number = 5;
    constructor() {}

    static createInstance(): IntegerController {
        //we need it to implement dependency injection, but we don't have them for this example
        return new IntegerController()
    }

    calc(integer: number): string {
        let result = this.isMulOfThree(integer) + this.isMulOfFive(integer);
        return result || String(integer);
    }

    private isMulOfThree(integer: number): string {
        return integer%this.THREE ? '' : 'G';
    }

    private isMulOfFive(integer: number): string {
        return integer%this.FIVE ? '' : 'N';
    }
}