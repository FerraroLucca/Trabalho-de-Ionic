import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaMedicamentosPage } from './lista-medicamentos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaMedicamentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaMedicamentosPageRoutingModule {}
