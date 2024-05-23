import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Despesa } from '../model/despesa';
import { environment } from '../environment/environment';

const API_URL = 'http://191.23.83.141:8080/api/esp/v3/despesapadrao';
const USERNAME = 'super';
const PASSWORD = 'super';

@Injectable({
  providedIn: 'root'
})
export class DespesasService {
  private apiUrl = environment.apiUrl;
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(USERNAME + ':' + PASSWORD),
      'Content-Type': 'application/json'
    });
  }

  getDespesas(): Observable<Despesa[]> {
    return this.http.get<Despesa[]>(API_URL, { headers: this.headers });
  }

  createDespesa(despesa: Despesa): Observable<Despesa> {
    return this.http.post<Despesa>(this.apiUrl, despesa, { headers: this.headers });
  }

  updateDespesa(despesa: Despesa): Observable<Despesa> {
    return this.http.put<Despesa>(this.apiUrl, despesa, { headers: this.headers });
  }

  deleteDespesa(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { headers: this.headers });
  }
}
