import { Component } from "@angular/core";
import { ProductsService } from "./services/products.service";
import { Product } from "./models/product";
import { CartService } from "./services/cart.service";


@Component({
    selector : 'app-shopping-cart',
    templateUrl : 'shopping-cart.component.html',
    styleUrls : ['shopping-cart.component.css']
})
export class ShoppingCartComponent{

    // Hold the selected product to display in the UI
    _selectedProduct: Product;

    // Hold the units that the user wants to order for the selected product
    _selectedProductUnits : number = 0;

    // getter & setter for selected product units
    get selectedProductUnits() : string {
        return this._selectedProductUnits.toString()
    }

    set selectedProductUnits(val : string){
        this._selectedProductUnits = parseInt(val);
    } 

    // getter for the selected product
    get selectedProduct() : Product {
        return this._selectedProduct;
    }

    constructor(public productsService : ProductsService, public cartService : CartService){

        //initialize the products service to get the data from the source
        this.productsService.load()

        //initialize the selectedProduct to the "null" product so that the defaults can be displayed
        //before the user choosed a product from the dropdown
        this._selectedProduct = this.productsService.nullProduct;
    }

    chooseProduct(pid: string) {
        //get the product info for the selected product so that it can be displayed
        this._selectedProduct = this.productsService.getById(parseInt(pid));
    }

    // reacting to the user wanting to add a new product to the cart
    onBtnAddClick() {
        this.cartService.addProduct(this.selectedProduct, this._selectedProductUnits)
    }
}