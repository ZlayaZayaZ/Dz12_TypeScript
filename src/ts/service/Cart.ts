import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        if (item.isPhisiacal) {
            if (item.count > 0) {
                this._items.push(item);
            }
        } else {
            item.count = 1
            this._items.push(item);
        } 
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    calculate(): number {
        let result = 0
        // const cart = this.items
        for (let item of this.items) {
            result += item.price * item.count
        }
        return result
    }

    calculateDiscount(discount: number): number {
        return this.calculate() * discount * 0.01
    }

    deleteProduct(id: number): void {
        let index = this.items.findIndex(el => el.id === id)
        this._items.splice(index, 1);
    }

    plusProduct(item: Buyable): void {
        let index = this.items.findIndex(el => el.id === item.id)
        if (index === -1) {
            this.add(item)
        }
        if (item.isPhisiacal) {
            this.items[index].count += item.count
        }
    }

    minusProduct(item: Buyable): void {
        let index = this.items.findIndex(el => el.id === item.id)
        if (index > -1) {
            this.items[index].count -= item.count
            if (this.items[index].count < 1) {
                this.deleteProduct(item.id)
            } 
        }
    }
}