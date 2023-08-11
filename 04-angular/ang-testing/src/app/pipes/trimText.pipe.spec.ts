import { TrimTextPipe } from "./trimText.pipe";

describe("Trim text pipe", () => {
    it("should trim the given text when exceeded the given length", () => {
        //arrange
        const txt = 'Consequat id eu aute occaecat nostrud elit.',
            maxLength = 10,
            expectedResult = 'Consequat ...';
        const sut = new TrimTextPipe();

        //act
        const actualResult = sut.transform(txt, maxLength);

        //assert
        expect(actualResult).toBe(expectedResult)
    })
    it("should return the given text when not exceeding the given length", () => {
        //arrange
        const txt = 'Consequat id eu aute occaecat nostrud elit.',
            maxLength = 100,
            expectedResult = 'Consequat id eu aute occaecat nostrud elit.';
        const sut = new TrimTextPipe();

        //act
        const actualResult = sut.transform(txt, maxLength);

        //assert
        expect(actualResult).toBe(expectedResult)
    })
})