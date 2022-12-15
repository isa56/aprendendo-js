import { Injectable } from '@angular/core';

import { Aluno } from './Aluno';

@Injectable({
  providedIn: 'root',
})
export class AlunosService {
  
  alunos: Aluno[] = [
    { id: '1', nome: 'João', email: 'joao@email.com' },
    { id: '2', nome: 'Maria', email: 'maria@email.com' },
    { id: '3', nome: 'José', email: 'jose@email.com' },
  ];

  getAlunos() {
    return this.alunos;
  }

  getAluno(id: string): Aluno | null {
    const alunos = this.getAlunos();
    for (let i = 0; i < alunos.length; i++) {
      const aluno = alunos[i];
      if (aluno.id == id) {
        return aluno;
      }
    }
    return null;
  }

  constructor() {}
}
