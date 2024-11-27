import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaMedicamentosPageRoutingModule } from './lista-medicamentos-routing.module';

import { ListaMedicamentosPage } from './lista-medicamentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaMedicamentosPageRoutingModule
  ],
  declarations: [ListaMedicamentosPage]
})
export class ListaMedicamentosPageModule {}
