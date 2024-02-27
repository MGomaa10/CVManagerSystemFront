import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
// Libs
import { NgbCarouselModule, NgbModule, NgbToastModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxMaskModule } from "ngx-mask";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { defineLordIconElement } from "lord-icon-element";
import { MatPaginatorModule } from '@angular/material/paginator';

// Components
import { StoryComponentComponent } from './Story/story-component/story-component.component';

//#region
import lottie from "lottie-web";
import { PostRoutingModule } from './post-routing.module';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalStoryShowComponent } from './Story/Modal/modal-show-essay/modal-story-show/modal-story-show.component';
import { ModalStoryModifiedComponent } from './Story/Modal/modal-story-modified/modal-story-modified.component';
import { ModalStoryDeleteComponent } from './Story/Modal/modal-story-delete/modal-story-delete.component';
import { PaginationModule } from 'src/@shared/components/pagination/pagination.module';

//#endregion

@NgModule({
  declarations: [
    StoryComponentComponent,
    ModalStoryShowComponent,
    ModalStoryModifiedComponent,
    ModalStoryDeleteComponent,
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    NgbModule,
    NgbCarouselModule,
    NgbToastModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatPaginatorModule,
    PaginationModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
  ],

})
export class PostModule {
  constructor() {
    defineLordIconElement(lottie.loadAnimation);
  }
}