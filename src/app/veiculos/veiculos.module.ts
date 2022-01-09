import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { VeiculosRoutingModule } from './veiculos-routing.module';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { EditarComponent } from './editar/editar.component';
import { VisualizarComponent } from './visualizar/visualizar.component';
import { ConsultaAvancadaComponent } from './consulta-avancada/consulta-avancada.component';


@NgModule({
  declarations: [
    VeiculosComponent,
    CadastrarComponent,
    EditarComponent,
    VisualizarComponent,
    ConsultaAvancadaComponent,
  ],
  imports: [
    CommonModule,
    VeiculosRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDividerModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[

  ]
})
export class VeiculosModule { }
