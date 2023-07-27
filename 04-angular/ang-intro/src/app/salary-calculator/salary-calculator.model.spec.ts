import { SalaryCalculatorModel } from "./salary-calculator.model"

describe('Salary Calculator Model', () => {
    it("Should calculcate the salary", () => {
        const model = new SalaryCalculatorModel()
        model.basic = 10000
        model.hra = 2000
        model.da = 3000
        model.tax = 10
        model.calculate()
        expect(model.salary).toBe(13500)
    })
})