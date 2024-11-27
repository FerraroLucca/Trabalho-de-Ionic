import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Router } from '@angular/router'; // Corrigindo a importação do Router

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  senha: string = '';

  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) {}

  async login() {
    try {
      const user = await this.firebaseService.realizarLogin(
        this.email,
        this.senha
      );

      if (user.codigo === 200) {
        localStorage.setItem('user', JSON.stringify(user.conteudo));
        this.router.navigate(['/home']);
      } else {
        console.error('Credenciais inválidas');
      }
    } catch (error) {
      console.error('Erro ao realizar login', error);
    }
  }

  ngOnInit() {}
}
