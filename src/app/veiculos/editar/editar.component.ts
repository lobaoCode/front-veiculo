import { Veiculo } from './../model/veiculo';
import { VeiculosService } from './../services/veiculos.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  public form:FormGroup;
  veiculo = <Veiculo>{};

  constructor(private veiculoService: VeiculosService, private router: Router, private formBuilder: FormBuilder) {
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

  updateVeiculo(){
    this.veiculo.ano = this.form.get('ano')?.value;
    this.veiculo.descricao = this.form.get('descricao')?.value;
    this.veiculo.veiculo = this.form.get('veiculo')?.value;
    this.veiculo.marca = this.form.get('marca')?.value;
    this.veiculo.vendido = false;
    this.veiculoService.update(this.veiculo).subscribe(response => {
      this.router.navigateByUrl("/veiculos");
    });
  }



}
