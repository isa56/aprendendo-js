import { EventEmitter, Injectable } from "@angular/core";

import { LogService } from "../shared/log.service";

@Injectable()
export class CoursesService {

  emitCreatedCourse = new EventEmitter<string>();

  private courses: string[] = ['Angular 2', 'JavaScript', 'Phonegap'];

  constructor(private logService: LogService) {}

  getCourses() {
    this.logService.log('Obtendo lista de cursos');
    return this.courses;
  }

  addCourse(course: string) {
    this.logService.log(`Criando um novo curso: ${course}`);
    this.courses.push(course);
    this.emitCreatedCourse.emit(course);
  }

}