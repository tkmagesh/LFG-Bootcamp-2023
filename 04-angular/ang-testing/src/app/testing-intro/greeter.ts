import { Injectable } from "@angular/core";

export interface IDateService {
    getCurrent() : Date
}

@Injectable({
    providedIn : 'root'
})
export class DateService {
    getCurrent() {
        return new Date()
    }
}

@Injectable({
    providedIn : 'root'
})
export class Greeter{
    constructor(private dateService : DateService){
        
    }

    greet(userName : string) : string {
        // const currentHour = new Date().getHours()
        const currentHour = this.dateService.getCurrent().getHours()
        if (currentHour < 12 ) {
            return `Hi ${userName}, Good Morning!`
        } 
        return `Hi ${userName}, Good Day!`
    }
}

// modify the above class as follows:
// when the greet() is invoked during morning ( < 12PM )
    // greet with 'Hi <username>, Good Morning!'
// else
    // greet with 'Hi <username>, Good Day!'

// Write the tests to test these changes