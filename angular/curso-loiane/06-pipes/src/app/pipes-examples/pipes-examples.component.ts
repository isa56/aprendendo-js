import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pipes-examples',
  templateUrl: './pipes-examples.component.html',
  styleUrls: ['./pipes-examples.component.css'],
})
export class PipesExamplesComponent implements OnInit {
  book: any = {
    title: 'ANGULAR 2 First look at Components',
    price: 10.99,
    rating: 4.567,
    releaseDate: new Date(2016, 5, 23),
    numberOfPages: 300,
    url: 'http://www.amazon.com/Angular-2-First-look-Components/dp/1484217701',
  };

  filter: string = '';
  filter2: string = '';

  books: string[] = [
    'Angular Development with TypeScript',
    'AngularJS: Up and Running',
    'Pro AngularJS',
  ];

  valueAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise value is resolved!'), 5000);
  });

  valueAsync2 = interval(3000).pipe(map((v) => 'Async 2 value'));

    constructor() {}

  ngOnInit(): void {}

  addBook(newBook: string): void {
    this.books.push(newBook);
  }
}
