import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  courses: string[] = ['Angular', 'Java', 'JavaScript'];
  shouldShowCourses: boolean = false;

  constructor() { }

  ngOnInit(): void {}

  toggleCourseShow(): void {
    this.shouldShowCourses = !this.shouldShowCourses;
  }

}
