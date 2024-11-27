import { Component } from '@angular/core';

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

  constructor() {}

  cadastrarMedicamento() {
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
