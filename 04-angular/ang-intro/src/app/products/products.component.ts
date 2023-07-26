import { Component } from "@angular/core";


@Component({
    selector : 'app-products',
    templateUrl : 'products.component.html',
    styleUrls : ['products.component.css']
})
export class ProductsComponent {

    productNames : string[] = [];
    newProductName : string = '';

    onBtnAddProductClick(){
        this.productNames.push(this.newProductName);
        this.newProductName = '';
    }

    onBtnRemoveClick(idx : number) {
        this.productNames.splice(idx,1)
    }
}