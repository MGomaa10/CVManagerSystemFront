import {MatTabsModule} from '@angular/material/tabs';
import { Component, OnInit, Inject } from '@angular/core';
import { CvsService } from 'src/app/+CVsComponent/Services/cvs.service';
import { FormGroup, Validators, FormBuilder, FormControl} from '@angular/forms';
import { NotificationService } from 'src/@shared/services/notification.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'; 
let formdata = new FormData();

@Component({
  selector: 'app-modal-cv-modified',
  templateUrl: './modal-cv-modified.component.html',
  styleUrls: ['./modal-cv-modified.component.css']
})
export class ModalCvModifiedComponent implements OnInit {
  CVForm !:FormGroup;
  actionBtn: string="Save"
  constructor(
    private _services:CvsService,
    private _notification: NotificationService,
    private formBuilder:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public cvData: any,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ModalCvModifiedComponent>
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

    if (this.cvData.id != null) {
      this.actionBtn="Update";
      this.CVForm.controls['Name'].setValue(this.cvData.name);
      this.CVForm.controls['CompanyName'].setValue(this.cvData.experienceInformation.companyName);
      this.CVForm.controls['CompanyCityName'].setValue(this.cvData.experienceInformation.cityName);
      this.CVForm.controls['CompanyField'].setValue(this.cvData.experienceInformation.companyField);
      this.CVForm.controls['FullName'].setValue(this.cvData.personalInformation.fullName);
      this.CVForm.controls['CityName'].setValue(this.cvData.personalInformation.cityName);
      this.CVForm.controls['Email'].setValue(this.cvData.personalInformation.email);
      this.CVForm.controls['MobileNumber'].setValue(this.cvData.personalInformation.mobileNumber);
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
    this.cvData.id == null ? this._services.addCV(formdata).pipe().subscribe({
      next:()=>{
        this.dialogRef.close();
        this._notification.success("Add CV", "Add Successfull");
        this.FormateFormData();
      }
    }) : this.EditStory();
  }

  EditStory() {
    formdata.append('Name', this.CVForm.controls['Name']?.value);
    formdata.append('CompanyName', this.CVForm.controls['CompanyName']?.value);
    formdata.append('CompanyCityName', this.CVForm.controls['CompanyCityName']?.value);
    formdata.append('CompanyField', this.CVForm.controls['CompanyField']?.value);
    formdata.append('FullName', this.CVForm.controls['FullName']?.value);
    formdata.append('CityName', this.CVForm.controls['CityName']?.value);
    formdata.append('Email', this.CVForm.controls['Email']?.value);
    formdata.append('MobileNumber', this.CVForm.controls['MobileNumber']?.value);
    this._services.editCv(formdata, this.cvData.id).pipe().subscribe({
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
