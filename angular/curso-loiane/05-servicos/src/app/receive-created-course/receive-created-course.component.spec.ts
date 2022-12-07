import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveCreatedCourseComponent } from './receive-created-course.component';

describe('ReceiveCreatedCourseComponent', () => {
  let component: ReceiveCreatedCourseComponent;
  let fixture: ComponentFixture<ReceiveCreatedCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiveCreatedCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiveCreatedCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
