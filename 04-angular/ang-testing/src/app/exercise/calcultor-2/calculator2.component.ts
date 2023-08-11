import { Component } from "@angular/core";
import { Calculator } from "./services/calculator.service";

@Component({
    selector  :'app-calculator-2',
    templateUrl : 'calculator2.component.html',
    styleUrls:['calculator2.component.css']
})
export class Calculator2Component{
    public result : number = 0;

    private _n1 : number = 0;
    private _n2 : number = 0;
    private _operation : string = '';

    constructor(private calculator : Calculator){

    }

    public operations = [
        { text : 'Add', value : 'add'},
        { text : 'Subtract', value : 'subtract'},
        { text : 'Multiply', value : 'multiply'},
        { text : 'Divide', value : 'divide'}
    ]

    set n1(val : string){
        this._n1 = parseInt(val)
    }

    set n2(val : string){
        this._n2 = parseInt(val)
    }

    set operation(val : string){
        this._operation = val;
    }

    get operation() : string {
        return this._operation;
    }

    onBtnCalculateClick(){
        switch (this._operation) {
            case "add":
                this.result = this.calculator.add(this._n1, this._n2)
                break;
            case "subtract":
                this.result = this.calculator.subtract(this._n1, this._n2)
                break;
            case "multiply":
                this.result = this.calculator.multiply(this._n1, this._n2)
                break;
            case "divide":
                this.result = this.calculator.divide(this._n1, this._n2)
                break;
            default:
                break;
        }
    }
}