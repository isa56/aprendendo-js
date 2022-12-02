import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-course',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit {

  @Input('nameCourse') name: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
