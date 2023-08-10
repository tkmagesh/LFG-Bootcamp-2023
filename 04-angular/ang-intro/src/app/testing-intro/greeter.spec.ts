import { DateService, Greeter, IDateService } from "./greeter"

// used to create a mini angular runtime for testing
import { TestBed } from "@angular/core/testing";

/* 
class FakeDateServiceForMorning implements IDateService{
    getCurrent(): Date {
        return new Date(2023, 6, 27, 9, 0, 0)
    }
}


class FakeDateServiceForEvening implements IDateService{
    getCurrent(): Date {
        return new Date(2023, 6, 27, 15, 0, 0)
    }
} 
*/


fdescribe('greeter', () => {
    fit('should greet the given user with Good Morning when greeted before 12', () => {
        //arrange
        // const morningDateService = new FakeDateServiceForMorning()

        const morningDateService = jasmine.createSpyObj("DateService", {
            getCurrent: new Date(2023, 6, 27, 9, 0, 0)
        })
       
        //replace the below to use the angular DI 
        // const greeter = new Greeter(morningDateService);

        //using angular testbed
        TestBed.configureTestingModule({
            providers : [
                Greeter /* sut */,
                { provide : DateService, useValue : morningDateService }
            ]
        })
        const greeter = TestBed.inject(Greeter) // A new instance of the Greeter will be returned with the morningDateService injected

        const userName = 'Magesh';
        const expectedResult = 'Hi Magesh, Good Morning!';

        //act
        const actualResult = greeter.greet(userName);

        //assert
        expect(actualResult).toBe(expectedResult);
    })
    fit('should greet the given user with Good Day when greeted after 12', () => {
        //arrange
        const eveningDateService = jasmine.createSpyObj("DateService", {
            getCurrent: new Date(2023, 6, 27, 15, 0, 0)
        });
        
        //replace the below to use the angular DI 
        // const greeter = new Greeter(eveningDateService);

        //using angular testbed
        TestBed.configureTestingModule({
            providers: [
                Greeter /* sut */,
                { provide: DateService, useValue: eveningDateService }
            ]
        })
        const greeter = TestBed.inject(Greeter) // A new instance of the Greeter will be returned with the morningDateService injected
        const userName = 'Magesh';
        const expectedResult = 'Hi Magesh, Good Day!';

        //act
        const actualResult = greeter.greet(userName);

        //assert
        expect(actualResult).toBe(expectedResult);
    })
})