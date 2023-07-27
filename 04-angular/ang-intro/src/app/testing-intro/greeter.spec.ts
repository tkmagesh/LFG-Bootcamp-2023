import { Greeter } from "./greeter"


describe('greeter', () => {
    it('should greet the given user', () => {
        //arrange
        const greeter = new Greeter();
        const userName = 'Magesh';
        const expectedResult = 'Hi Magesh';

        //act
        const actualResult = greeter.greet(userName);

        //assert
        expect(actualResult).toBe(expectedResult);
    })
})