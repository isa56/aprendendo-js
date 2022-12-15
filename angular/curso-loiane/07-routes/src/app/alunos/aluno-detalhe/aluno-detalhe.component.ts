import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css'],
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {
  aluno: any;
  inscricao?: Subscription;
  id: string = '';

  constructor(
    private alunosService: AlunosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    /*
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      this.aluno = this.alunosService.getAluno(this.id);
      if (!this.aluno) {
        this.aluno = {
          nome: '',
          email: '',
        };
      }
    });
    */
    this.inscricao = this.route.data.subscribe((info) => {
      // console.log(info);
      this.aluno = info['aluno'];
    });
  }

  ngOnDestroy() {
    this.inscricao?.unsubscribe();
  }

  goToEdit(): void {
    this.router.navigate(['/alunos', this.id, 'editar']);
  }

}
