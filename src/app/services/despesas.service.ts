import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

interface Despesa {
  cod_desp: number;
  Unidade: string;
  desc_desp: string;
  tp_desp: number;
  valor_unit: number;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class DespesasService {

  url = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  getDespesas(): Observable<Despesa[]> {
    return this.http.get<Despesa[]>(this.url, this.getHttpOptions());
  }

  getDespesaById(id: number): Observable<Despesa> {
    return this.http.get<Despesa>(`${this.url}/${id}`, this.getHttpOptions());
  }

  addDespesa(despesa: Despesa): Observable<Despesa> {
    return this.http.post<Despesa>(this.url, despesa, this.getHttpOptions());
  }

  updateDespesa(despesa: Despesa): Observable<Despesa> {
    return this.http.put<Despesa>(this.url, despesa, this.getHttpOptions());
  }

  deleteDespesa(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`, this.getHttpOptions());
  }

  private getHttpOptions() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('super:super')
    });
    return { headers };
  }
}
