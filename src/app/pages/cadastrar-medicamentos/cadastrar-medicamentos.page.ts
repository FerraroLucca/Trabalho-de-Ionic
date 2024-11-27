import { Component } from '@angular/core';
import { Medicamento } from 'src/@types';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-cadastrar-medicamentos',
  templateUrl: './cadastrar-medicamentos.page.html',
  styleUrls: ['./cadastrar-medicamentos.page.scss'],
})
export class CadastrarMedicamentosPage {
  nomeMedicamento: string = '';
  principioAtivo: string = '';
  nomeCientifico: string = '';
  periodoTomado: number = 0;
  intervaloDoses: number = 0;
  quantidadeDosesDiarias: number = 0;
  viaAdministracao: string = '';
  observacoes: string = '';

  constructor(private firebaseService: FirebaseService) {}

  async cadastrarMedicamento() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if (user && user.id) {
      const dadosMedicamento: Medicamento = {
        idUsuario: user.id,
        nomeMedicamento: this.nomeMedicamento,
        principioAtivo: this.principioAtivo,
        nomeCientifico: this.nomeCientifico,
        periodoTomado: this.periodoTomado,
        intervaloDoses: this.intervaloDoses,
        quantidadeDosesDiarias: this.quantidadeDosesDiarias,
        viaAdministracao: this.viaAdministracao,
        observacoes: this.observacoes,
      };

      console.log('Dados da medicamento:', dadosMedicamento);
      const userId = await this.firebaseService.cadastrarMedicamento(
        dadosMedicamento
      );
    } else {
      console.error('Medicamento não encontrado ou id inválido');
    }
  }

  cadastrarMedicamentos() {
    const medicamento = {
      nomeMedicamento: this.nomeMedicamento,
      principioAtivo: this.principioAtivo,
      nomeCientifico: this.nomeCientifico,
      periodoTomado: this.periodoTomado,
      intervaloDoses: this.intervaloDoses,
      quantidadeDosesDiarias: this.quantidadeDosesDiarias,
      viaAdministracao: this.viaAdministracao,
      observacoes: this.observacoes,
    };

    console.log('Medicamento cadastrado:', medicamento);
  }
}
