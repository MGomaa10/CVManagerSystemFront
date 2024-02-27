import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
// Libs
import { NgbCarouselModule, NgbModule, NgbToastModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxMaskModule } from "ngx-mask";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { defineLordIconElement } from "lord-icon-element";
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

// Components
import { LoginComponent } from './Login/login/login.component';
import { RegisterComponent } from './Register/register/register.component';

//#region
import lottie from "lottie-web";
import { AuthRoutingModule } from './auth-routing.module';
import { MatTableModule,MatTableDataSource } from '@angular/material/table';




//#endregion

@NgModule({
  declarations: [

  
    LoginComponent,
          RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NgbModule,
    NgbCarouselModule,
    NgbToastModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTableModule
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    MatTableDataSource,
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ],

})
export class AuthModule {
  constructor() {
    defineLordIconElement(lottie.loadAnimation);
  }
}