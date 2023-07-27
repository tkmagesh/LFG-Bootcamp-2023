import { SalaryCalculatorViewModel } from "./salary-calculator-view.model";

export class SalaryCalculatorModel {
    
    //state
    basic = 0;
    hra = 0;
    da = 0;
    tax = 0;
    salary = 0;

    //behavior
    calculate(){
        const gross = this.basic + this.hra + this.da,
            net = gross * ((100-this.tax)/100);
        this.salary = net + 1000;
    }

    get view () : SalaryCalculatorViewModel {
        return {
            basic : this.basic,
            hra : this.hra,
            da : this.da,
            tax : this.tax,
            salary : this.salary
        } 
    }

    reset() {
        this.basic = this.hra = this.da = this.tax = this.salary = 0;
    }
}