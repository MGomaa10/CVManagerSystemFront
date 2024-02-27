import { Component, OnInit, Inject } from '@angular/core';
import { NotificationService } from 'src/@shared/services/notification.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StoryServicesService } from 'src/app/PostsComponent/Services/Story-Services/story-services.service';

@Component({
  selector: 'app-modal-story-delete',
  templateUrl: './modal-story-delete.component.html',
  styleUrls: ['./modal-story-delete.component.css'],
})
export class ModalStoryDeleteComponent implements OnInit {
  constructor(
    private _services: StoryServicesService,
    private _notification: NotificationService,
    @Inject(MAT_DIALOG_DATA) public StoryData: any,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ModalStoryDeleteComponent>
  ) {}

  ngOnInit(): void {}

  DeleteStory() {
    this._services.deleteCV(this.StoryData.id).pipe().subscribe({
        next: () => {
          this.dialogRef.close();
          this._notification.success('Delete Story', 'Deleted Successfull');
        },
      });
  }
}
