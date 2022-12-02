import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCourses (): string[] {
    return ['Angular', 'JavaScript', 'VueJS', 'ReactJS', 'NodeJS'];
  }
}
