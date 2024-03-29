import { Injectable } from '@angular/core';
import { NotificationService } from "../services";

@Injectable({
  providedIn: 'root'
})
export class filesService {

  defaultMaxFileSizeInKilobytes = 800;

  constructor(private notificationService: NotificationService) {
  }

  isValidFilesSize(files: Array<File>, maxFileSize: number = this.defaultMaxFileSizeInKilobytes): boolean {
    for (let i = 0; i < files.length; i++) {
      if (!this.isValidFileSize(files[i], maxFileSize)) return false;
    }
    return true;
  }

  isValidFileSize(file: File, maxFileSize: number = this.defaultMaxFileSizeInKilobytes): boolean {
    let fileSizeInKilobytes = file.size / 1024;
    if (fileSizeInKilobytes > maxFileSize) {
      this.notificationService.error('File Size', `Image size should not exceed ${maxFileSize} KB.`);
      return false;
    }
    return true;
  }

  isValidImageExtensions(files: File[]): boolean {
    for (let i = 0; i < files.length; i++) {
      if (!this.isValidImageExtension(files[i])) return false
    }
    return true;
  }

  isValidImageExtension(file: File): boolean {
    let allowedExtensions: Array<any> = ['png', 'jpg', 'jpeg', 'gif', 'tiff', 'bpg'];
    let fileExtension = file.name.split(".").pop() || '';
    if (!allowedExtensions.includes(fileExtension.trim().toLowerCase())) {
      this.notificationService.error('Invalid Image', 'Please select a valid image');
      return false;
    }
    return true;
  }

  isValidPDFExtension(file: File): boolean {
    let allowedExtensions: Array<any> = ['pdf'];
    let fileExtension = file.name.split(".").pop() || '';
    if (!allowedExtensions.includes(fileExtension.trim().toLowerCase())) {
      this.notificationService.error('Invalid pdf', 'Please select a valid pdf file');
      return false;
    }
    return true;
  }

  isValidExcelExtensions(files: File[]): boolean {
    for (let i = 0; i < files.length; i++) {
      if (!this.isValidExcelExtension(files[i])) return false
    }
    return true;
  }

  isValidExcelExtension(file: File): boolean {
    let allowedExtensions: Array<any> = ['xlsx', 'csv'];
    let fileExtension = file.name.split(".").pop() || '';
    if (!allowedExtensions.includes(fileExtension.trim().toLowerCase())) {
      this.notificationService.error('Invalid Excel', 'Please select a valid "Excel" sheet');
      return false;
    }
    return true;
  }

}
