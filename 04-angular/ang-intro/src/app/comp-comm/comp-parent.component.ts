import { Component } from "@angular/core";

@Component({
    selector : 'app-parent',
    templateUrl : 'comp-parent.component.html'
})
export class ComponentParent{
    x : number = 2000;

    onClear(){
        this.x = 0;
    }
    
}