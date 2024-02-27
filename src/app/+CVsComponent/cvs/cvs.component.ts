import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {CvsService} from '../Services/cvs.service';
import { ModalCvDeleteComponent } from '../Modal/modal-cv-delete/modal-cv-delete.component';
import { ModalCvModifiedComponent } from '../Modal/modal-cv-modified/modal-cv-modified.component';

@Component({
  selector: 'app-cvs',
  templateUrl: './cvs.component.html',
  styleUrls: ['./cvs.component.css']
})
export class CvsComponent implements OnInit {
  Story: any;
  TotalStories = 0;
  filteredStory: any[] = [];
  filterText: string = '';
  FormStory!: FormGroup;

  constructor(
    public dialog: MatDialog,
    private _service: CvsService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  onInputChange(event: any) {
    this.filterText = event.target.value;
  }

  loadData() { 
    this._service.getAllCVs().subscribe({
      next: (stories) => {
        this.Story = stories;
        this.applyFilter();
      }
    });
  }

  applyFilter() {
    if (!this.filterText) {
      this.filteredStory = this.Story;
    } else {
      this.filteredStory = this.Story.filter((story: any) =>
        story.personalInformation.cityName.toLowerCase().includes(this.filterText.toLowerCase())
      );
    }
  }

  filterData() { this._service.GetCVsFilteredByCity("Alexandria").pipe().subscribe({ next: (stories) => { this.Story = stories } }) }
  
  pageChange(pageNumber: any) {
    this.FormStory.controls['pageNumber'].patchValue(pageNumber, { emitEvent: false });
    this.loadData();
  }

  openModal(): void {
    const dialogRef = this.dialog.open(ModalCvModifiedComponent, { width: '50%', data: {} });
    dialogRef.afterClosed().subscribe(() => { this.loadData() });
  }

  openModalDelete(e: any): void {
    const dialogRef = this.dialog.open(ModalCvDeleteComponent, { width: '50%', data: e });
    dialogRef.afterClosed().subscribe(() => {
      this.loadData();
    });
  }

  EditModal(e: any): void {
    const dialogRef = this.dialog.open(ModalCvModifiedComponent, { width: '100%', data: e });
    dialogRef.afterClosed().subscribe(() => { this.loadData() });
  }
}
