import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalStoryModifiedComponent } from './modal-story-modified.component';

describe('ModalStoryModifiedComponent', () => {
  let component: ModalStoryModifiedComponent;
  let fixture: ComponentFixture<ModalStoryModifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalStoryModifiedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalStoryModifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
