import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Medicamento } from 'src/@types';

@Component({
  selector: 'app-lista-medicamentos',
  templateUrl: './lista-medicamentos.page.html',
  styleUrls: ['./lista-medicamentos.page.scss'],
})
export class ListaMedicamentosPage implements OnInit {
  medicamentos: Medicamento[] = [];
  carregando: boolean = false;
  erro: string | null = null;

  constructor(private firebaseService: FirebaseService) {}

  async ngOnInit(): Promise<void> {
    await this.carregarMedicamentos();
  }

  async carregarMedicamentos(): Promise<void> {
    this.carregando = true;
    this.erro = null;

    try {
      const user = JSON.parse(localStorage.getItem('idUsuario') || '{}');

      const resposta = await this.firebaseService.buscarMedicamentosUsuario(
        user
      );
      console.log('Resposta do serviço:', resposta); // Verifique a resposta

      if (resposta?.codigo === 200 && resposta.conteudo) {
        this.medicamentos = resposta.conteudo;
      } else {
        this.erro =
          resposta?.mensagem || 'Erro desconhecido ao carregar medicamentos.';
      }
    } catch (error: any) {
      console.error('Erro ao carregar medicamentos:', error);
      this.erro = 'Não foi possível carregar os medicamentos.';
    } finally {
      this.carregando = false;
    }
  }
}
