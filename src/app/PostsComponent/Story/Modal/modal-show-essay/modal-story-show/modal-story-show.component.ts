import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog,MatDialogRef , MAT_DIALOG_DATA} from '@angular/material/dialog'; 
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { StoryServicesService } from '../../../../Services/Story-Services/story-services.service';
@Component({
  selector: 'app-modal-story-show',
  templateUrl: './modal-story-show.component.html',
  styleUrls: ['./modal-story-show.component.css']
})
export class ModalStoryShowComponent implements OnInit {

  story: any = {};
  StoryForm !:FormGroup;
  constructor(
    private _services:StoryServicesService,
    private formBuilder:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public StoryData: any,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ModalStoryShowComponent>
   
  ) { }

  ngOnInit(): void {
    this.StoryForm = this.formBuilder.group({
      title:['', Validators.required],
      essay:['', Validators.required]
    })
    if (this.StoryData.id != null) {
      this.story = {StoryEssay:this.StoryData.essay, StoryTitle:this.StoryData.title}  
    }
  }

}
