import { Component, EventEmitter, Input, Output } from "@angular/core";
import { SalaryCalculatorViewModel } from "../models/salary-calculator-view.model";

@Component({
    selector : 'app-salary-calculator-result',
    templateUrl : 'salary-calculator-result.component.html',
    styleUrls : ['salary-calculator-result.component.css'],
})
export class SalaryCalculatorResultComponent {


    @Input('data')
    model! : SalaryCalculatorViewModel;

    @Output()
    reset : EventEmitter<void> = new EventEmitter<void>()

    onBtnClearClick() {
        /* 
        this.model.basic = 20000
        this.model.calculate() 
        */
        this.reset.emit()
    }

}