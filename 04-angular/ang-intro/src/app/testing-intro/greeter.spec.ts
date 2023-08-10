import { DateService, Greeter, IDateService } from "./greeter"


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
       
        
        const greeter = new Greeter(morningDateService);
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
        const greeter = new Greeter(eveningDateService);
        const userName = 'Magesh';
        const expectedResult = 'Hi Magesh, Good Day!';

        //act
        const actualResult = greeter.greet(userName);

        //assert
        expect(actualResult).toBe(expectedResult);
    })
})