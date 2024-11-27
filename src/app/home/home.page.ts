import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  pressao: string = '';
  temperatura: string = '';
  glicose: string = '';
  oximetria: string = '';
  batimentos: string = '';
  peso: string = '';
  indisposicao: string = '';
  sentimento: string = '';
  observacao: string = '';

  constructor() {}

  cadastrarMedicao() {
    const dadosMedicao = {
      pressao: this.pressao,
      temperatura: this.temperatura,
      glicose: this.glicose,
      oximetria: this.oximetria,
      batimentos: this.batimentos,
      peso: this.peso,
      indisposicao: this.indisposicao,
      sentimento: this.sentimento,
      observacao: this.observacao,
    };

    console.log('Dados do medição:', dadosMedicao);
  }
}
