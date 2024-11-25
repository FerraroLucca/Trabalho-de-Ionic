import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarMedicamentosPageRoutingModule } from './cadastrar-medicamentos-routing.module';

import { CadastrarMedicamentosPage } from './cadastrar-medicamentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarMedicamentosPageRoutingModule
  ],
  declarations: [CadastrarMedicamentosPage]
})
export class CadastrarMedicamentosPageModule {}
