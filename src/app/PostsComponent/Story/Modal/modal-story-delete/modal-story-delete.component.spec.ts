import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalStoryDeleteComponent } from './modal-story-delete.component';

describe('ModalStoryDeleteComponent', () => {
  let component: ModalStoryDeleteComponent;
  let fixture: ComponentFixture<ModalStoryDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalStoryDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalStoryDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
