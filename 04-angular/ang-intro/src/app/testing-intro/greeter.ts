
export interface IDateService {
    getCurrent() : Date
}

export class DateService {
    getCurrent() {
        return new Date()
    }
}

export class Greeter{
    _dateService : IDateService;

    constructor(dateService : IDateService){
        this._dateService = dateService;
    }

    greet(userName : string) : string {
        // const currentHour = new Date().getHours()
        const currentHour = this._dateService.getCurrent().getHours()
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