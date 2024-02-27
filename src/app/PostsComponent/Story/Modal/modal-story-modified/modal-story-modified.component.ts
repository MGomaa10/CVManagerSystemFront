import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog,MatDialogRef , MAT_DIALOG_DATA} from '@angular/material/dialog'; 
import { FormGroup, Validators, FormBuilder, FormControl} from '@angular/forms';
import { StoryServicesService } from '../../../Services/Story-Services/story-services.service';
import { NotificationService } from 'src/@shared/services/notification.service';
let formdata = new FormData();
@Component({
  selector: 'app-modal-story-modified',
  templateUrl: './modal-story-modified.component.html',
  styleUrls: ['./modal-story-modified.component.css']
})
export class ModalStoryModifiedComponent implements OnInit {

  CVForm !:FormGroup;
  actionBtn: string="Save"
  constructor(
    private _services:StoryServicesService,
    private _notification: NotificationService,
    private formBuilder:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public StoryData: any,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ModalStoryModifiedComponent>
  ) { }


  ngOnInit(): void {
    this.CVForm = this.formBuilder.group({
      Name:new FormControl('', Validators.required),
      CompanyName:['', Validators.required],
      CompanyCityName:['', Validators.required],
      CompanyField:['', Validators.required],
      FullName:['', Validators.required],
      CityName:['', Validators.required],
      Email:['', Validators.required],
      MobileNumber:['', Validators.required]
    })

    if (this.StoryData.id != null) {
      this.actionBtn="Update";
      this.CVForm.controls['Name'].setValue(this.StoryData.name);
      this.CVForm.controls['CompanyName'].setValue(this.StoryData.experienceInformation.companyName);
      this.CVForm.controls['CompanyCityName'].setValue(this.StoryData.experienceInformation.cityName);
      this.CVForm.controls['CompanyField'].setValue(this.StoryData.experienceInformation.companyField);
      this.CVForm.controls['FullName'].setValue(this.StoryData.personalInformation.fullName);
      this.CVForm.controls['CityName'].setValue(this.StoryData.personalInformation.cityName);
      this.CVForm.controls['Email'].setValue(this.StoryData.personalInformation.email);
      this.CVForm.controls['MobileNumber'].setValue(this.StoryData.personalInformation.mobileNumber);
    }
  }

  AddStory(){
    formdata.append('Name', this.CVForm.controls['Name']?.value);
    formdata.append('CompanyName', this.CVForm.controls['CompanyName']?.value);
    formdata.append('CompanyCityName', this.CVForm.controls['CompanyCityName']?.value);
    formdata.append('CompanyField', this.CVForm.controls['CompanyField']?.value);
    formdata.append('FullName', this.CVForm.controls['FullName']?.value);
    formdata.append('CityName', this.CVForm.controls['CityName']?.value);
    formdata.append('Email', this.CVForm.controls['Email']?.value);
    formdata.append('MobileNumber', this.CVForm.controls['MobileNumber']?.value);
    this.StoryData.id == null ? this._services.addCV(formdata).pipe().subscribe({
      next:()=>{
        this.dialogRef.close();
        this._notification.success("Add CV", "Add Successfull");
        this.FormateFormData();
      }
    }) : this.EditStory();
  }

  EditStory() {
    formdata.append('Description', this.CVForm.controls['description']?.value);
    formdata.append('Essay', this.CVForm.controls['essay']?.value);
    formdata.append('Title', this.CVForm.controls['title']?.value);
    this._services.editCv(formdata, this.StoryData.id).pipe().subscribe({
      next: () => {
        this.dialogRef.close();
        this._notification.success("Edit Story", "Edit Successfull");
        this.FormateFormData();
      }
    })
  }

 FormateFormData(){
  formdata.delete("Name");
  formdata.delete("CompanyName");
  formdata.delete("CompanyCityName");
  formdata.delete("CompanyField");
  formdata.delete("FullName");
  formdata.delete("CityName");
  formdata.delete("Email");
  formdata.delete("MobileNumber");
  }
}
