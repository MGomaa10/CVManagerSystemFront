import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalStoryDeleteComponent } from '../Modal/modal-story-delete/modal-story-delete.component';
import {StoryServicesService} from 'src/app/PostsComponent/Services/Story-Services/story-services.service';
import { ModalStoryModifiedComponent } from '../Modal/modal-story-modified/modal-story-modified.component';
import { ModalStoryShowComponent } from '../Modal/modal-show-essay/modal-story-show/modal-story-show.component';

@Component({
  selector: 'app-story-component',
  templateUrl: './story-component.component.html',
  styleUrls: ['./story-component.component.css'],
})

export class StoryComponentComponent implements OnInit {
  Story: any;
  TotalStories = 0;
  FormStory!: FormGroup;

  constructor(
    public dialog: MatDialog,
    private _service: StoryServicesService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() { this._service.getAllCVs().pipe().subscribe({ next: (stories) => { this.Story = stories } }) }
  
  pageChange(pageNumber: any) {
    this.FormStory.controls['pageNumber'].patchValue(pageNumber, { emitEvent: false });
    this.loadData();
  }

  openDialog(e: any): void {
    const dialogRef = this.dialog.open(ModalStoryShowComponent, { data: e });
    dialogRef.afterClosed().subscribe(() => {});
  }

  openModal(): void {
    const dialogRef = this.dialog.open(ModalStoryModifiedComponent, { width: '50%', data: {} });
    dialogRef.afterClosed().subscribe(() => { this.loadData() });
  }

  openModalDelete(e: any): void {
    const dialogRef = this.dialog.open(ModalStoryDeleteComponent, { width: '50%', data: e });
    dialogRef.afterClosed().subscribe(() => {
      this.loadData();
    });
  }

  EditModal(e: any): void {
    const dialogRef = this.dialog.open(ModalStoryModifiedComponent, { width: '100%', data: e });
    dialogRef.afterClosed().subscribe(() => { this.loadData() });
  }
}
