
/* 
export type SalaryCalculatorViewModel = {
    readonly basic : number,
    readonly hra : number,
    readonly da : number,
    readonly tax : number,
    readonly salary : number
} 
*/

import { SalaryCalculatorModel } from "./salary-calculator.model";

// the above can be dynamically created using the ReadOnly type in TS

export type SalaryCalculatorViewModel = Readonly<Omit<SalaryCalculatorModel, "calculate" | "view" | "reset">>



