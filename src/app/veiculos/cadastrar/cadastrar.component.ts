import { Veiculo } from './../model/veiculo';
import { VeiculosService } from './../services/veiculos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {
  public form:FormGroup;
  veiculo = <Veiculo>{};

  constructor(private veiculoService: VeiculosService, private router: Router, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      veiculo: [],
      ano: [],
      marca: [],
      descricao: [],
    });
  }

  ngOnInit(): void {}

  saveVeiculo(){
    console.log(this.form.get('ano')?.value);
    this.veiculo.ano = this.form.get('ano')?.value;
    this.veiculo.descricao = this.form.get('descricao')?.value;
    this.veiculo.veiculo = this.form.get('veiculo')?.value;
    this.veiculo.marca = this.form.get('marca')?.value;
    this.veiculo.vendido = false;
    this.veiculoService.save(this.veiculo).subscribe(response => {
      this.router.navigateByUrl("/veiculos");
    });
  }

}
