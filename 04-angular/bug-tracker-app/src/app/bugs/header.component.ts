import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
    selector: 'app-bugs-header',
    template: `<h3>{{this.getCurrentTime()}}</h3>`
})
export class BugsHeaderComponent implements OnInit, OnDestroy {
    
    constructor() {
        console.log('bugsHeader - component instantiated')
    }
    ngOnDestroy(): void {
        console.log('bugsHeader - component destroyed')
    }
    ngOnInit() {
        console.log('bugsHeader - component initialized')
    }

    getCurrentTime()  : Date {
        return new Date()
    }
}