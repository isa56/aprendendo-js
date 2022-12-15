import { IFormCanDeactivate } from './form-candeacticate';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AlunoFormComponent } from './../alunos/aluno-form/aluno-form.component';

// Consider using this interface for all CanDeactivate guards,
// and have your components implement this interface, too.
//
//   e.g. export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
//
// export interface CanComponentDeactivate {
// canDeactivate: () => any;
// }

@Injectable()
// export class AlunosDeactivateGuard implements CanDeactivate<AlunoFormComponent> {
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {
  canDeactivate(component: IFormCanDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    /*
    if (component.formMudou && !confirm('Tem certeza que deseja sair dessa página?')) {
      return false;
    }
    return true;
    */
    return component.podeDesativar();
  }
}