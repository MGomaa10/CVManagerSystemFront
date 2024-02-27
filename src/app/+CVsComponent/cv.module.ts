import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// Libs
import { NgxMaskModule } from "ngx-mask";
import { defineLordIconElement } from "lord-icon-element";
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbCarouselModule, NgbModule, NgbToastModule } from "@ng-bootstrap/ng-bootstrap";

// Components
import { CvsComponent } from './cvs/cvs.component';

//#region
import lottie from "lottie-web";
import { CVRoutingModule } from './cv-routing.module';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalCvDeleteComponent } from './Modal/modal-cv-delete/modal-cv-delete.component';
import { ModalCvModifiedComponent } from './Modal/modal-cv-modified/modal-cv-modified.component';
import { PaginationModule } from 'src/@shared/components/pagination/pagination.module';
import {RichTextEditorModule, ToolbarService, LinkService, ImageService, HtmlEditorService} from '@syncfusion/ej2-angular-richtexteditor';

//#endregion

@NgModule({
  declarations: [
    CvsComponent,
    ModalCvDeleteComponent,
    ModalCvModifiedComponent,
  ],
  imports: [
    CommonModule,
    CVRoutingModule,
    NgbModule,
    NgbCarouselModule,
    NgbToastModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTabsModule,
    PaginationModule,
    RichTextEditorModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    ToolbarService, LinkService, ImageService, HtmlEditorService
  ],
})
export class CVModule {
  constructor() {
    defineLordIconElement(lottie.loadAnimation);
  }
}