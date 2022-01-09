import { Veiculo } from './../model/veiculo';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {
private readonly API_base = 'api/veiculos'

  constructor(private httpClient: HttpClient) { }

  findAll(){
    return this.httpClient.get<Veiculo[]>(this.API_base);
  }

  findById(id: number) {
    return this.httpClient.get<Veiculo>(this.API_base + '/' + id);
  }

  find(paramKey: any, paramValue: any) {
    let params = new HttpParams().set(paramKey, paramValue);
    return this.httpClient.get<Veiculo[]>(this.API_base + '/find', {params: params});
  }

  findDecada(anoInicial: number, anoFinal: number) {
    let params = new HttpParams();
    params.set("anoInicial", anoInicial);
    params.set("anoFinal", anoFinal);
    return this.httpClient.get<Veiculo[]>(this.API_base + '/find', {params: params});
  }

  save(veiculo: Veiculo) {
    return this.httpClient.post(this.API_base, veiculo);
  }

  update(veiculo: Veiculo) {
    return this.httpClient.put(this.API_base + "/" + veiculo._id, veiculo);
  }

  vendido(isVendido: boolean, id: number) {
    return this.httpClient.patch(this.API_base + "/" + id, isVendido);
  }

  delete(id: number) {
    return this.httpClient.delete<Veiculo>(this.API_base + '/' + id)
  }



}
