import { Veiculo } from './../model/veiculo';
import { Component, OnInit } from '@angular/core';
import { VeiculosService } from '../services/veiculos.service';
import { catchError, Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.scss']
})
export class VeiculosComponent implements OnInit {

  veiculos$: Observable<Veiculo[]>;
  displayedColumns = ['_id', 'veiculo', 'marca', 'ano', 'vendido', 'acoes']

  constructor(private veiculoService: VeiculosService, private router: Router) {
    this.veiculos$ = this.veiculoService.findAll()
    .pipe(
      catchError(error => {
        console.log(error);
        return of([])
      })
    );
  }

  ngOnInit(): void {
  }

  deleteVeiculo(id: number) {
    this.veiculoService.delete(id).subscribe(response => {
      this.veiculos$ = this.veiculoService.findAll();
    });
  }

  saveVeiculo(veiculo: Veiculo) {
    this.veiculoService.save(veiculo).subscribe(response => {
      this.veiculos$ = this.veiculoService.findAll();
    })
  }

  findAll() {
    this.veiculos$ = this.veiculoService.findAll();
  }

  findNaoVendidos() {
    this.veiculos$ = this.veiculoService.find("isVendido", false);
  }

  findSemana() {
    this.veiculos$ = this.veiculoService.find("dia", 7);
  }

  findMarca(marca: string) {
    this.veiculos$ = this.veiculoService.find("marca", marca);
  }

  findDecada(anoInicial: number, anoFinal: number) {
    this.veiculos$ = this.veiculoService.findDecada(anoInicial, anoFinal);
  }

  editarVeiculo(veiculo: Veiculo) {
    this.router.navigateByUrl('/veiculos/editar', { state: { veiculo: veiculo } });
  }

  visualizarVeiculo(veiculo: Veiculo) {
    this.router.navigateByUrl('/veiculos/visualizar', { state: { veiculo: veiculo } });
  }

}
