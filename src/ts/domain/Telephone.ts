import Buyable from './Buyable';

export default class Telephone implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,
        readonly isPhisiacal: boolean = true,
        public count: number = 1,
    ) { }
}