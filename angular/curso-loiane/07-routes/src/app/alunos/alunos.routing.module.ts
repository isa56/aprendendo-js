import { AlunoDetalheResolver } from './guards/aluno-detalhes.resolver';
import { AlunosDeactivateGuard } from './../guards/alunos-deactivate.guards';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

const alunosRoutes: Routes = [
  {
    path: '',
    component: AlunosComponent,
    children: [
      { path: 'novo', component: AlunoFormComponent, canDeactivate: [AlunosDeactivateGuard] },
      { path: ':id', component: AlunoDetalheComponent, resolve: { aluno: AlunoDetalheResolver } },
      { path: ':id/editar', component: AlunoFormComponent, canDeactivate: [AlunosDeactivateGuard], resolve: { aluno: AlunoDetalheResolver } },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule],
})
export class AlunosRoutingModule {}
