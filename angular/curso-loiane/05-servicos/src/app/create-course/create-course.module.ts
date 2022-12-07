import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateCourseComponent } from './create-course.component';
import { CoursesService } from '../courses/courses.service';
import { ReceiveCreatedCourseComponent } from '../receive-created-course/receive-created-course.component';

@NgModule({
  declarations: [CreateCourseComponent, ReceiveCreatedCourseComponent],
  imports: [CommonModule],
  providers: [CoursesService],
  exports: [CreateCourseComponent],
})
export class CreateCourseModule {}
