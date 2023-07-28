import { CartItem } from "../models/cartItem"
import { Product } from "../models/product"


export class CartService{
    private _cartItems : CartItem[] = []

    get items() : CartItem[] {
        return [...this._cartItems]
    }

    get total() : number {
        //calculate the total of the product values in the cartitems array
        return this._cartItems.reduce((prevResult, cartItem) => prevResult + cartItem.value, 0)
    }

    addProduct(product : Product, units : number){
        /* 
        const newCartItem : CartItem = {
            product : product,
            units : units
        }  
        */
        const newCartItem: CartItem = new CartItem(product, units)
        this._cartItems.push(newCartItem)
    }
}