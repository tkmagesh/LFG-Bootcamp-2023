
/* 
type CartItem = {
    id : number,
    name : string,
    cost : number,
    category : string,
    units : number
} 
*/

import { Product } from "./product";

//Converted the CartItem from a "type" to a "class" because we want the entity to encapsulate some behaviors (calculate the cart item value [cost * units])
export class CartItem {
    id: number = 0
    name: string = ''
    cost: number = 0;
    category: string = '';
    units: number = 0

    constructor({ id, name, cost, category }: Product, units: number) {
        this.id = id;
        this.name = name;
        this.cost = cost;
        this.category = category;
        this.units = units;
    }
    get value(): number {
        return this.units * this.cost;
    }
}