import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'cadastrar-medicamentos',
    loadChildren: () =>
      import(
        './pages/cadastrar-medicamentos/cadastrar-medicamentos.module'
      ).then((m) => m.CadastrarMedicamentosPageModule),
  },
  {
    path: 'cadastrar-pessoas',
    loadChildren: () =>
      import('./pages/cadastrar-pessoas/cadastrar-pessoas.module').then(
        (m) => m.CadastrarPessoasPageModule
      ),
  },
  {
    path: 'mapa',
    loadChildren: () =>
      import('./pages/mapa/mapa.module').then((m) => m.MapaPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
