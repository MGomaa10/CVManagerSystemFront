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
import {HomeComponent} from 'src/app/Home/HomeComponent/home/home.component'
import { SlickCarouselModule } from 'ngx-slick-carousel';

//#region
import lottie from "lottie-web";
import { HomeRoutingModule } from './home-routing.module';
import { PaginationModule } from 'src/@shared/components/pagination/pagination.module';
//#endregion

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule,
    NgbCarouselModule,
    NgbToastModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    PaginationModule,
    MatDialogModule,
    MatPaginatorModule,
    SlickCarouselModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ],
})
export class HomeModule {
  constructor() {
    defineLordIconElement(lottie.loadAnimation);
  }
}