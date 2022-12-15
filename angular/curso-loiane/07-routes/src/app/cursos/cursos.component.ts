import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit {
  cursos: any[] = [];
  pagina?: number;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursosService: CursosService
  ) {
    this.inscricao = this.route.queryParams.subscribe((queryParams: any) => {
      this.pagina = queryParams['pagina'];
    });
  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }

  changePage(): void {
    if (this.pagina) {
      // this.pagina++;
      this.router.navigate(['/cursos'], {
        queryParams: { pagina: ++this.pagina },
      });
    }
  }
}
