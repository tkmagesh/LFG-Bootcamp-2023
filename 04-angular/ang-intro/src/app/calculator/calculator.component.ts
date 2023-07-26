import { Component } from "@angular/core";


@Component({
    selector : 'app-calculator',
    templateUrl : 'calculator.component.html',
    styleUrls : ['calculator.component.css']
})
export class CalculatorComponent{
    result : number = 0;

    private _n1 : number = 0;
    private _n2 : number = 0;


    /* 
    setN1(val : string){
        this._n1 = parseInt(val)
    }

    setN2(val : string){
        this._n2 = parseInt(val)
    } 
    */

    set n1(val : string){
        this._n1 = parseInt(val)
    }

    set n2(val : string){
        this._n2 = parseInt(val)
    }

    onAddClick() {
        this.result = this._n1 + this._n2
    }
    onSubtractClick() {
        this.result = this._n1 - this._n2
    }
    onMultiplyClick() {
        this.result = this._n1 * this._n2
    }
    onDivideClick() {
        this.result = this._n1 / this._n2
    }
}