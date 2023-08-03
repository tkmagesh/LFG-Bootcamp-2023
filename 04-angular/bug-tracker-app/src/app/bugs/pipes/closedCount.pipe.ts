import { Pipe, PipeTransform } from "@angular/core";
import { Bug } from "../models/bug";

@Pipe({
    name : 'closedCount'
})
export class ClosedCountPipe implements PipeTransform{
    transform(bugs: Bug[]) : number {
        return bugs.reduce((prevResult, bug) => bug.isClosed ? prevResult + 1 : prevResult, 0)
    }

}