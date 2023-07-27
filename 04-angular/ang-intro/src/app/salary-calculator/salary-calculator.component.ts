import { Component } from "@angular/core";
import { SalaryCalculatorModel } from "./salary-calculator.model";

@Component({
    selector : 'app-salary-calculator',
    templateUrl : 'salary-calculator.component.html',
    styleUrls : ['salary-calculator.component.css']
})
export class SalaryCalculatorComponent{

    // Violation of Dependency Inversion Principle (DIP)
    // public model : SalaryCalculatorModel = new SalaryCalculatorModel();

    //adhering to Dependency Inversion Principle
    /* 
    public model : SalaryCalculatorModel;

    constructor(model : SalaryCalculatorModel){
        this.model = model;
    } 
    */

    constructor(public model : SalaryCalculatorModel){

    }

    set basic(val : string){
        this.model.basic = parseInt(val);
    }

    set hra(val : string){
        this.model.hra = parseInt(val);
    }

    set da(val : string){
        this.model.da = parseInt(val);
    }

    set tax(val : string){
        this.model.tax = parseInt(val);
    }

    onBtnCalculateClick(){
        this.model.calculate()
    }
}