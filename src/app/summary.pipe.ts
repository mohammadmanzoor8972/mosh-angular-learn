import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'summary'
})
export class SummaryPipe implements PipeTransform{
    transform(value:string, limt?:number){
        if(!value){
            return null;
        }
        let actualLimit = (limt) ? limt:50;
        return value.substring(0,actualLimit)+"...";
    }
}