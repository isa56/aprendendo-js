import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

import { User } from './User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    if (!this.user.username) {
      alert('Nome de usuário é obrigatório!');
      return;
    }
    if (!this.user.password) {
      alert('Senha é obrigatória!');
      return;
    }
    if (this.authService.login(this.user)) {
      this.router.navigate(['/']);
    } else {
      alert('Usuário ou senha inválidos!');
    }
  }
}
