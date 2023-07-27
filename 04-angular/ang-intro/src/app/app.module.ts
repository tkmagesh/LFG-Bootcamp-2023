import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreeterComponent } from "./greeter/greeter.component";
import { CalculatorComponent } from './calculator/calculator.component';
import { Calculator2Component } from './calcultor-2/calculator2.component';
import { ProductsComponent } from './products/products.component';
import { SalaryCalculatorComponent } from './salary-calculator/salary-calculator.component';
import { SalaryCalculatorModel } from './salary-calculator/salary-calculator.model';
import { SalaryCalculatorModelV2 } from './salary-calculator/salary-calculatorV2.model';

@NgModule({
  /* All the UI entities (component, directive, pipe) */
  declarations: [
    AppComponent,
    GreeterComponent,
    CalculatorComponent,
    Calculator2Component,
    ProductsComponent,
    SalaryCalculatorComponent
  ],
  /* All the dependency modules  */
  imports: [
    BrowserModule
  ],
  /* All the NON-UI entities (services) */
  providers: [
    // SalaryCalculatorModel
    // { provide : SalaryCalculatorModel, useClass : SalaryCalculatorModel }
    { provide :SalaryCalculatorModel, useClass : SalaryCalculatorModelV2 }
  ],

  /* top level components */
  bootstrap: [AppComponent]
})
export class AppModule { }
