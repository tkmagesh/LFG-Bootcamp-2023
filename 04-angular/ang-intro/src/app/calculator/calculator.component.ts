import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";


@Component({
    selector : 'app-calculator',
    templateUrl : 'calculator.component.html',
    styleUrls : ['calculator.component.css']
})
export class CalculatorComponent{
    result : number = 0;

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

    onCalculateClick(){
        
    }
}