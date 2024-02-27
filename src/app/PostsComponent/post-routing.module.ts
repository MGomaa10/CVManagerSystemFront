import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";

import { StoryComponentComponent } from "./Story/story-component/story-component.component";

//#region Errors
//#endregion

// Components

const routes: Routes = [
  {
    path: "Story",
    component: StoryComponentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {

}
