import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Components
import { LoginComponent } from "./Login/login/login.component";
import { RegisterComponent } from "./Register/register/register.component";

//#region Errors
//#endregion

// Components

const routes: Routes = [
  {
    path: "Login",
    component: LoginComponent,
  },
  {
    path: "Register",
    component: RegisterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}