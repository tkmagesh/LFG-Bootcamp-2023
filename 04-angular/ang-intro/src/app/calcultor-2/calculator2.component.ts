import { Component } from "@angular/core";

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

    public operations = [
        { text : 'Add', value : 'add'},
        { text : 'Subtract', value : 'subtract'},
        { text : 'Multiply', value : 'multiply'},
        { text : 'Divide', value : 'divide'},
        { text : 'Modulus', value : 'modulus'}, 
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
                this.result = this._n1 + this._n2
                break;
            case "subtract":
                this.result = this._n1 - this._n2
                break;
            case "multiply":
                this.result = this._n1 * this._n2
                break;
            case "divide":
                this.result = this._n1 / this._n2
                break;
            default:
                break;
        }
    }
}