import { Component } from "@angular/core";
import { ProductsService } from "./services/products.service";
import { Product } from "./models/product";


@Component({
    selector : 'app-shopping-cart',
    templateUrl : 'shopping-cart.component.html',
    styleUrls : ['shopping-cart.component.css']
})
export class ShoppingCartComponent{
    // Hold the selected product to display in the UI
    selectedProduct: Product;

    constructor(public productsService : ProductsService){
        //initialize the products service to get the data from the source
        this.productsService.load()

        //initialize the selectedProduct to the "null" product so that the defaults can be displayed
        //before the user choosed a product from the dropdown
        this.selectedProduct = this.productsService.nullProduct;
    }

    chooseProduct(pid: string) {
        //get the product info for the selected product so that it can be displayed
        this.selectedProduct = this.productsService.getById(parseInt(pid));
    }
}