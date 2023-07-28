import { Component, Input } from "@angular/core";

@Component({
    selector : 'app-cart-stats',
    templateUrl : 'cart-stats.component.html',
    styleUrls: ['cart-stats.component.css'],
})
export class CartStatsComponent{
    @Input()
    ItemsCount : number = 0;

    @Input()
    Total : number = 0;
}