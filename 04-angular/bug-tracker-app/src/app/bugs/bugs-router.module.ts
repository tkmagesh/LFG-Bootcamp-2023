import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BugsComponent } from "./bugs.component";

const routes : Routes = [
    {
        path : "bugs", 
        component : BugsComponent,
        /* children : [
            { path: "create", component: BugEditComponent }
        ] */
    }
]
@NgModule({
    imports : [
        RouterModule.forChild(routes)
    ],
    exports : [RouterModule]
})
export class BugsRoutingModule{

}