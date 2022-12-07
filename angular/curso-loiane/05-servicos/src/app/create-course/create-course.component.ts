import { Component, OnInit } from '@angular/core';

import { CoursesService } from './../courses/courses.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  courses: string[] = [];
  newCourse: string = '';

  constructor(private _cService: CoursesService) { }

  ngOnInit(): void {
    this.courses = this._cService.getCourses();
  }

  addCourse(courseInput: string) {
    this._cService.addCourse(courseInput);
    courseInput = '';
  }

}
