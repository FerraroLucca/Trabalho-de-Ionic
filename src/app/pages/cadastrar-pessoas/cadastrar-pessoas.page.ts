import { Component } from '@angular/core';
import { Usuario } from 'src/@types';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-cadastrar-pessoas',
  templateUrl: './cadastrar-pessoas.page.html',
  styleUrls: ['./cadastrar-pessoas.page.scss'],
})
export class CadastrarPessoasPage {
  // Propriedades gerais
  nome: string = '';
  email: string = '';
  senha: string = '';
  confirmacaoSenha: string = '';
  foto: File | null = null;
  dataDeNascimento: string = '';
  RG: string = '';
  CPF: string = '';
  endereco: string = '';
  telefone: string = '';
  tipoUsuario: string = '';

  // Propriedades para Paciente
  telefoneEmergencia: string = '';
  altura: number | null = null;
  peso: number | null = null;
  motivoUsoApp: string = '';

  // Propriedades para Médico
  CRM: string = '';
  instituicaoFormacao: string = '';
  anoFormacao: number | null = null;
  especialidade: string = '';

  // Propriedades para Acompanhante
  relacionamento: string = '';

  // Método para capturar a imagem enviada
  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.foto = file;
    }
  }

  constructor(private firebaseService: FirebaseService) {}

  // Método para cadastrar uma pessoa
  async cadastrarUsuario() {
    if (this.senha !== this.confirmacaoSenha) {
      console.error('As senhas não coincidem.');
      return;
    }

    // Criando o objeto da pessoa
    const pessoa: Usuario = {
      nome: this.nome,
      email: this.email,
      senha: this.senha,
      dataDeNacimento: this.dataDeNascimento,
      rg: this.RG,
      cpf: this.CPF,
      telefone: this.telefone,
      tipoUser: this.tipoUsuario,
      telefoneEmergencia: null,
      altura: this.tipoUsuario === 'paciente' ? this.altura : null,
      peso: this.tipoUsuario === 'paciente' ? this.peso : null,
      motivoUsoApp: null,
      crm: null,
      instituicaoFormacao: null,
      anoFormacao: this.tipoUsuario === 'medico' ? this.anoFormacao : null,
      especialidade: null,
      logradouro: '',
      numero: 0,
      cidade: '',
      estado: '',
    };

    console.log('Dados do formulário:', pessoa);

    if (pessoa) {
      const userId = await this.firebaseService.cadastrarUsuario(pessoa);
      console.log(userId);
    } else {
      console.log('Please fill in both name and email fields.');
    }
  }
}
