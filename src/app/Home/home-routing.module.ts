import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";

// Components
import { HomeComponent } from "./HomeComponent/home/home.component";

const routes: Routes = [
    {
        path: "Home",
        component: HomeComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {

}
