import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    get sum(): number {
        let result = 0;
        this._items.forEach(element => {
            result += element.price;
        })
        return result
    }

    sumDiscount(discount: number) {
        return this.sum - discount;
    }

    remove(id: number): void {
        for (let i = 0; i < this._items.length; i++) {
            if (this._items[i].id === id) {
                this._items.splice(i, 1);
            }
        }
    }
}