import { CadastrarComponent } from './veiculos/cadastrar/cadastrar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'veiculos'},
  {
    path: 'veiculos',
    loadChildren: () => import('./veiculos/veiculos.module').then(m => m.VeiculosModule)
  },
  {path: 'veiculos/cadastrar', component: CadastrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
