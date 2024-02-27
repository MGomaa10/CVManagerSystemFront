import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
// import { SharedDirectivesModule } from "../../directives/shared-directives.module";
// import { SharedPipesModule } from "../../pipes/pipes.module";
import { ReactiveFormsModule } from "@angular/forms";
// import { ReactiveValidationModule } from "angular-reactive-validation";
import { NgxMaskModule } from "ngx-mask";
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    PaginationComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    NgbTooltipModule,
  ],
  exports: [PaginationComponent]
})
export class PaginationModule {
}
