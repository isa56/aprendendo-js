import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { CoursesService } from './courses/courses.service';
import { CreateCourseModule } from './create-course/create-course.module';
import { CoursesModule } from './courses/courses.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CreateCourseModule,
    CoursesModule
  ],
  // providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
