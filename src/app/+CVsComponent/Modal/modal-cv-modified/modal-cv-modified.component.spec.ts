import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCvModifiedComponent } from './modal-cv-modified.component';

describe('ModalCvModifiedComponent', () => {
  let component: ModalCvModifiedComponent;
  let fixture: ComponentFixture<ModalCvModifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCvModifiedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCvModifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
