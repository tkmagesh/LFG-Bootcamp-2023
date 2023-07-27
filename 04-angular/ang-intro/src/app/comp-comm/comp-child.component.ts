import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-child',
    templateUrl : 'comp-child.component.html'
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