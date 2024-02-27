import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalStoryShowComponent } from './modal-story-show.component';

describe('ModalStoryShowComponent', () => {
  let component: ModalStoryShowComponent;
  let fixture: ComponentFixture<ModalStoryShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalStoryShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalStoryShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
