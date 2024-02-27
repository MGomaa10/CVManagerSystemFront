import { NgModule } from '@angular/core';
import { AuthGuard } from './auth.guard';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 { path: 'Home', loadChildren: () => import('./Home/home.module').then(m => m.HomeModule) },
 { path: 'CVSystem', loadChildren: () => import('./+CVsComponent/cv.module').then(m => m.CVModule), canActivate: [AuthGuard] },
 { path: 'Auth', loadChildren: () => import('./+AdminAuth/auth.module').then(m => m.AuthModule) },
 {
  path: '',
   redirectTo: 'Auth/Login',
   pathMatch: 'full'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
