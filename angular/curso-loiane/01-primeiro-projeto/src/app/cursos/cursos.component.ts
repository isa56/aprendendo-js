import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  portalName: string;
  courses: string[];

  constructor(private cursosService: CursosService) {
    this.portalName = 'Portalzinho';

    this.courses = cursosService.getCourses();

  }

  ngOnInit(): void {
  }

}
