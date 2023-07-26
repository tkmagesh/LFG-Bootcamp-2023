import { Component } from "@angular/core";


@Component({
    selector : 'app-products',
    templateUrl : 'products.component.html',
    styleUrls : ['products.component.css']
})
export class ProductsComponent {

    productNames : string[] = [];

    onBtnAddProductClick(newProductName : string){
        this.productNames.push(newProductName);
    }

    onBtnRemoveClick(idx : number) {
        this.productNames.splice(idx,1)
    }
}