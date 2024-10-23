import { Component } from '@angular/core';
import { Usuario } from 'src/@types';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  users: any[] = [];
  email: string = 'Guilherme@gmail.com';
  senha: string = '123456';
  selectedFile: File | null = null;
  user: Usuario = {
    foto: "gs://ionic-fa850.appspot.com/images/Captura de tela 2024-10-20 171036.png",
    nome: "Guilherme",
    email: "Guilherme@gmail.com",
    senha: "123456",
    tipoUser: "PACIENTE",
    dataDeNacimento: "01/08/2002",
    rg: "00.000.000-00",
    cpf: "000.000.000-00",
    telefone: "(11) 00000-0000",
    telefoneEmergencia: "(11) 00000-0000",
    altura: "1.71",
    peso: "80",
    endereco: {
      cep: "00000-000",
      logradouro: "Rua 1",
      numero: 3,
      bairro: "Jardim Ingá",
      cidade: "São Paulo",
      estado: "SP"
    }
  }

  constructor(private firebaseService: FirebaseService) {}

  async addUser() {
    if (this.user) {
      const userId = await this.firebaseService.cadastrarUsuario(this.user);
      console.log(userId);
    } else {
      console.log('Please fill in both name and email fields.');
    }
  }

  async verificarUsuarios() {
    this.users = await this.firebaseService.getUsers();
    console.log(this.users);
  }

  async login(){
    const login = await this.firebaseService.realizarLogin(this.email, this.senha);
    console.log(login);
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0]; 
  }

  async uploadImage() {
    if (this.selectedFile) {
      const URLImage = await this.firebaseService.uploadImageStorage(this.selectedFile);
      return 
    } else {
      console.log('Nenhuma imagem foi selecionada');
    }
  }

}
