import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarPessoasPageRoutingModule } from './cadastrar-pessoas-routing.module';

import { CadastrarPessoasPage } from './cadastrar-pessoas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarPessoasPageRoutingModule
  ],
  declarations: [CadastrarPessoasPage]
})
export class CadastrarPessoasPageModule {}
