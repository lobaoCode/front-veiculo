import { Veiculo } from './../model/veiculo';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.scss']
})
export class VisualizarComponent implements OnInit {
  public form:FormGroup;
  veiculo = <Veiculo>{};

  constructor(private formBuilder: FormBuilder) {
    this.veiculo = window.history.state.veiculo;
    this.form = this.formBuilder.group({
      veiculo: this.veiculo.veiculo,
      ano: this.veiculo.ano,
      marca: this.veiculo.marca,
      descricao: this.veiculo.descricao,
    });
  }

  ngOnInit(): void {
  }

}
