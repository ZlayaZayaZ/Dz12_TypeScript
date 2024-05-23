import Buyable from './Buyable';

export default class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,
        readonly release: number,
        readonly country: string,
        readonly tagline: string,
        readonly genre: string,
        readonly time: number,
        readonly isPhisiacal: boolean = false,
        public count: number = 1,
    ) { }
}
