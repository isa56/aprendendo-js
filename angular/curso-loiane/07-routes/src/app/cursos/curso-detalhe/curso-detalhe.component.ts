import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css'],
})
export class CursoDetalheComponent implements OnInit {
  id: number = -1;
  inscricao?: Subscription;
  curso: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private cursosService: CursosService
  ) {}

  ngOnInit(): void {
    this.inscricao = this.activeRoute.params.subscribe((params: any) => {
      this.id = params['id'];
      this.curso = this.cursosService.getCurso(this.id);
      if (!this.curso) {
        this.router.navigate(['/cursos/naoEncontrado']);
      }
    });
  }

  ngOnDestroy() {
    this.inscricao?.unsubscribe();
  }
}
