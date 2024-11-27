import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar-pessoas',
  templateUrl: './cadastrar-pessoas.page.html',
  styleUrls: ['./cadastrar-pessoas.page.scss'],
})
export class CadastrarPessoasPage {
  // Propriedades gerais
  nomeCompleto: string = '';
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
  motivo: string = '';

  // Propriedades para Médico
  CRM: string = '';
  instituicaoFormacao: string = '';
  anoFormacao: number | null = null;
  especialidade: string = '';

  // Propriedades para Acompanhante
  relacionamento: string = '';

  constructor() {}

  // Método para capturar a imagem enviada
  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.foto = file;
    }
  }

  // Método para cadastrar uma pessoa
  cadastrarPessoa(): void {
    // Validação básica de senha
    if (this.senha !== this.confirmacaoSenha) {
      console.error('As senhas não coincidem.');
      return;
    }

    // Criando o objeto da pessoa
    const pessoa = {
      nomeCompleto: this.nomeCompleto,
      email: this.email,
      senha: this.senha,
      dataDeNascimento: this.dataDeNascimento,
      RG: this.RG,
      CPF: this.CPF,
      endereco: this.endereco,
      telefone: this.telefone,
      tipoUsuario: this.tipoUsuario,
      foto: this.foto,
      // Campos adicionais baseados no tipo de usuário
      telefoneEmergencia:
        this.tipoUsuario === 'paciente' ? this.telefoneEmergencia : null,
      altura: this.tipoUsuario === 'paciente' ? this.altura : null,
      peso: this.tipoUsuario === 'paciente' ? this.peso : null,
      motivo: this.tipoUsuario === 'paciente' ? this.motivo : null,
      CRM: this.tipoUsuario === 'medico' ? this.CRM : null,
      instituicaoFormacao:
        this.tipoUsuario === 'medico' ? this.instituicaoFormacao : null,
      anoFormacao: this.tipoUsuario === 'medico' ? this.anoFormacao : null,
      especialidade: this.tipoUsuario === 'medico' ? this.especialidade : null,
      relacionamento:
        this.tipoUsuario === 'acompanhante' ? this.relacionamento : null,
    };

    console.log('Dados do formulário:', pessoa);

    // Lógica adicional para enviar os dados ao backend ou salvar localmente
    // Você pode fazer uma requisição HTTP aqui, por exemplo
  }
}
