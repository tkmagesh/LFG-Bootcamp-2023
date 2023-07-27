import { SalaryCalculatorModel } from "./salary-calculator.model";

export class SalaryCalculatorModelV2 extends SalaryCalculatorModel {
    override calculate(): void {
        super.calculate();
        this.salary += 1000;
    }
}