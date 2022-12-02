import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.training';
  urlImage: string = 'https://placeimg.com/640/480/';
  currentValue: string = '';
  savedValue: string = '';
  isMouseOver: boolean = false;

  courseName: string = 'Angular';
  countValue: number = 5;

  constructor() { }

  ngOnInit(): void {}

  getValor (): number {
    return 1;
  }

  createAlert (): void {
    alert('Alerta criado!');
  }

  onkeyup (event: KeyboardEvent): void {
    this.currentValue = (<HTMLInputElement>event.target).value;
  }

  onSave (value: string): void {
    this.savedValue = value;
  }

  onMouseOverOut (): void {
    this.isMouseOver = !this.isMouseOver;
  }

  onCounterValueChange(event: any): void {
    this.countValue = event.newValue;
  }

}
