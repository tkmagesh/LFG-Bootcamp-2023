import { TestBed } from "@angular/core/testing";
import * as moment from "moment";
import { ElapsedPipe } from "./elapsed.pipe";

fdescribe("Elapsed Pipe", () => {
    fit("Should return the elapsed time", () => {
        TestBed.configureTestingModule({
            providers : [ ElapsedPipe ]
        });

        var today = new Date()
        var expectedResult = moment(today).fromNow();

        jasmine.clock().mockDate(today); // mocking the global Date function to return the given date

        const elapsedPipe = TestBed.inject(ElapsedPipe)
        
        expect(elapsedPipe.transform(today)).toBe(expectedResult)

    })
})