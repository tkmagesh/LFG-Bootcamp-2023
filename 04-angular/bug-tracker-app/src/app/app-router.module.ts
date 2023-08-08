import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { PathNotFoundComponent } from "./path-not-found.component";

const routes: Routes = [
    { path: "", component: HomeComponent, pathMatch: "full" },
    { path: "**", component: PathNotFoundComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}