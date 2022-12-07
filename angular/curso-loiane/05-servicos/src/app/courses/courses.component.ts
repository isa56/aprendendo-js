import { Component, OnInit } from '@angular/core';

import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses: string[] = [];
  // coursesService: CoursesService;

  constructor(private _coursesService: CoursesService) {
    // this.coursesService = new CoursesService();
  }

  ngOnInit(): void {
    this.courses = this._coursesService.getCourses();
    this._coursesService.emitCreatedCourse.subscribe((course) =>
      this.courses.push(course)
    );
  }
}
