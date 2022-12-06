import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elvis-operator',
  templateUrl: './elvis-operator.component.html',
  styleUrls: ['./elvis-operator.component.css']
})
export class ElvisOperatorComponent implements OnInit {

  task: any = {
    description: 'Descrição da tarefa',
    assignee: null
  };

  constructor() { }

  ngOnInit(): void {
  }

}
