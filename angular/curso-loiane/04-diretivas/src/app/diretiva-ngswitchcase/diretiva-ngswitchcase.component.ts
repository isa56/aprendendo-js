import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngswitchcase',
  templateUrl: './diretiva-ngswitchcase.component.html',
  styleUrls: ['./diretiva-ngswitchcase.component.css'],
})
export class DiretivaNgswitchcaseComponent implements OnInit {
  aba: string = 'home';

  constructor() {}

  ngOnInit(): void {}
}
