import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Medicao } from 'src/@types';

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
  bpm: string = '';
  peso: string = '';
  indisposicao: string = '';
  observacao: string = '';

  constructor(private firebaseService: FirebaseService) {}

  async cadastrarMedicao() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if (user && user.id) {
      const dadosMedicao: Medicao = {
        idPaciente: user.id,
        pressao: this.pressao,
        temperatura: this.temperatura,
        glicose: this.glicose,
        oximetria: this.oximetria,
        bpm: this.bpm,
        peso: this.peso,
        indisposicao: this.indisposicao,
        observacao: this.observacao,
        dataMedicao: new Date(),
      };

      console.log('Dados da medição:', dadosMedicao);
      const userId = await this.firebaseService.cadastrarMedicao(dadosMedicao);
    } else {
      console.error('Usuário não encontrado ou id inválido');
    }
  }
}
