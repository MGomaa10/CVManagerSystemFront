import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCvDeleteComponent } from './modal-cv-delete.component';

describe('ModalCvDeleteComponent', () => {
  let component: ModalCvDeleteComponent;
  let fixture: ComponentFixture<ModalCvDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCvDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCvDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
