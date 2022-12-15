import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { AuthGuard } from '../guards/auth.guard';

const cursosRoutes: Routes = [
  { path: '', component: CursosComponent },
  { path: 'cursos/naoEncontrado', component: CursoNaoEncontradoComponent },
  { path: 'cursos/:id', component: CursoDetalheComponent }
];

@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)],
  exports: [RouterModule],
})

export class CursosRoutingModule {}
