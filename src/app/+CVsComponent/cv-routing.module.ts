import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";

import { CvsComponent } from "./cvs/cvs.component";

const routes: Routes = [
    {
      path: "CVSystem",
      component: CvsComponent,
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class CVRoutingModule {
  
  }