import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarPessoasPage } from './cadastrar-pessoas.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarPessoasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrarPessoasPageRoutingModule {}
