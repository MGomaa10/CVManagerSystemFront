import { Component, OnInit, Inject } from '@angular/core';
import { CvsService } from 'src/app/+CVsComponent/Services/cvs.service';
import { NotificationService } from 'src/@shared/services/notification.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-cv-delete',
  templateUrl: './modal-cv-delete.component.html',
  styleUrls: ['./modal-cv-delete.component.css']
})
export class ModalCvDeleteComponent implements OnInit {
  constructor(
    private _services: CvsService,
    private _notification: NotificationService,
    @Inject(MAT_DIALOG_DATA) public cvData: any,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ModalCvDeleteComponent>
  ) {}

  ngOnInit(): void {}

  DeleteStory() {
    this._services.deleteCV(this.cvData.id).pipe().subscribe({
        next: () => {
          this.dialogRef.close();
          this._notification.success('Delete Story', 'Deleted Successfull');
        },
      });
  }

}
