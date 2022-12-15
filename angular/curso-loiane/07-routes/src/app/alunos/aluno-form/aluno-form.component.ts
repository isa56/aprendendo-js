import { Aluno } from './../Aluno';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { AlunosService } from './../alunos.service';
import { IFormCanDeactivate } from './../../guards/form-candeacticate';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css'],
})
export class AlunoFormComponent implements OnInit, IFormCanDeactivate {
  aluno: Aluno | null = null;
  inscricao?: Subscription;
  formMudou: boolean = false;

  constructor(
    private alunosService: AlunosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    /*
    this.inscricao = this.route.params.subscribe((params: any) => {
      const id = params['id'];
      this.aluno = this.alunosService.getAluno(id);
    });
    */
    this.inscricao = this.route.data.subscribe((info) => {
      this.aluno = info['aluno'];
    });
  }

  ngOnDestroy() {
    this.inscricao?.unsubscribe();
  }

  editarContato() {
    this.router.navigate(['/alunos', this.aluno!.id, 'editar']);
  }

  onInput() {
    this.formMudou = true;
  }

  podeDesativar(): boolean {
    return !(this.formMudou && !confirm('Tem certeza que deseja sair dessa página?'));
  }

}
