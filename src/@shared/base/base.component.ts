
import { Component, Injector, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpService } from '../services';
import { NotificationService } from '../services';
import { takeUntil } from "rxjs/operators";

// Lib
export class ServiceLocator {
  static injector: Injector;
}

@Component({
  template: '',
})
export class BaseComponent implements OnDestroy {

  ngUnsubscribe = new Subject<void>();

  //#region Services
  public spinner: NgxSpinnerService;
  public httpService: HttpService;
  public notificationService: NotificationService;
  //#endregion

  constructor(public injector: Injector) {
    this.spinner = this.injector.get(NgxSpinnerService);
    this.httpService = this.injector.get(HttpService);
    this.notificationService = this.injector.get(NotificationService);

    // Set current user
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
