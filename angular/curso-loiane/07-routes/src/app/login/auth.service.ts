import { EventEmitter, Injectable } from '@angular/core';

import { User } from './User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  admin: User = new User();
  mostrarMenuEmitter = new EventEmitter<boolean>();
  authenticatedUser: boolean = false;

  login(user: User) {
    if (
      user.username === this.admin.username &&
      user.password === this.admin.password
    ) {
      this.authenticatedUser = true;
      this.mostrarMenuEmitter.emit(true);
      return true;
    }
    this.authenticatedUser = false;
    this.mostrarMenuEmitter.emit(false);
    return false;
  }

  usuarioEstaAutenticado(): boolean {
    return this.authenticatedUser;
  }

  constructor() {
    this.admin.username = 'admin';
    this.admin.password = '123';
  }
}
