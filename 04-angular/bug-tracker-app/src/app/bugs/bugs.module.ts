import { NgModule } from "@angular/core";

import { UtilsModule } from "../utils/utils.module";
import { CommonModule } from "@angular/common";

import { BugsComponent } from "./bugs.component";
import { BugsHeaderComponent } from "./header.component";
import { BugStatsComponent } from "./components/bug-stats/bug-stats.component";
import { ClosedCountPipe } from "./pipes/closedCount.pipe";
import { BugEditComponent } from "./components/bug-edit/bug-edit.component";
import { BugSortComponent } from "./components/bug-sort/bug-sort.component";
import { BugListComponent } from "./components/bug-list/bug-list.component";
import { BugItemComponent } from "./components/bug-item/bug-item.component";
import { BugsService } from "./services/bugs.service";
import { BugOperationService } from "./services/bugOperation.service";

@NgModule({
    declarations : [
        BugsComponent,
        BugsHeaderComponent,
        BugStatsComponent,
        ClosedCountPipe,
        BugEditComponent,
        BugSortComponent,
        BugListComponent,
        BugItemComponent
    ],
    providers : [
        BugsService,
        BugOperationService
    ],
    imports : [
        CommonModule,
        UtilsModule
    ],
    exports : [
        BugsComponent
    ]
})
export class BugsModule{

}