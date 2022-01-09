import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EditarComponent } from './editar/editar.component';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { VisualizarComponent } from './visualizar/visualizar.component';

const routes: Routes = [
  { path:'', component: VeiculosComponent },
  { path:'cadastrar', component: CadastrarComponent },
  { path:'editar', component: EditarComponent },
  { path:'visualizar', component: VisualizarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeiculosRoutingModule { }
