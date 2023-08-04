/* Custom pipe to truncate the string */

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'trimtext' // used in the component template
})
export class TrimTextPipe implements PipeTransform{

    //when the pipe is used in the component templates, the "transform" method is invoked to transform the given data
    transform(value: string, maxLength : number = 30) : string {
        
        // return truncated string + '...' if the given value > 30 charactors, else return the given string
        return value.length > maxLength ? value.substring(0,maxLength) + '...' : value;
    }

}