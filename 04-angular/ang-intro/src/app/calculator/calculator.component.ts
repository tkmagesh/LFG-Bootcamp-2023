import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";


@Component({
    selector : 'app-calculator',
    templateUrl : 'calculator.component.html',
    styleUrls : ['calculator.component.css']
})
export class CalculatorComponent{
    result : number = 0;

   /* 
    n1 : FormControl = new FormControl('', [
        Validators.required,
        Validators.min(0),
        Validators.max(10000)
    ])

    n2: FormControl = new FormControl('', [
        Validators.required,
        Validators.min(0),
        Validators.max(10000)
    ]) 
    */
    calculatorForm = new FormGroup({
        n1: new FormControl('', [
            Validators.required,
            Validators.min(0),
            Validators.max(10000)
        ]),
        n2: new FormControl('', [
            Validators.required,
            Validators.min(0),
            Validators.max(10000)
        ])
    })

    get n1(){
        return this.calculatorForm.get('n1')
    } 
    get n2(){
        return this.calculatorForm.get('n2')
    }
    
    onSetValues(){
        this.calculatorForm.setValue({
            n1 : '10000',
            n2 : '2000'
        })
    }

    onCalculateClick(){
        
        console.log(this.calculatorForm.errors)
    }
}