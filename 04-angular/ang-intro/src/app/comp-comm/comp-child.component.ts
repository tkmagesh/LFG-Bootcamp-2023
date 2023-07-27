import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-child',
    template: `
        <h3>Child</h3>
        <div>Data From Parent : {{data}}</div>
        <button (click)="onClearClick()">Clear</button>
    `
})
export class ComponentChild {
    @Input()
    data : number = 0;

    @Output()
    reset : EventEmitter<void> = new EventEmitter<void>()

    onClearClick(){
        this.reset.emit()
    }
}