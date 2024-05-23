import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Despesa } from '../model/despesa';
import { environment } from '../environment/environment';


@Injectable({
  providedIn: 'root'
})
export class DespesasService {

  user = {
    username: 'super',
    password: 'super'
  };

  private apiUrl = environment.apiUrl;
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.user.username + ':' + this.user.password),
      'Content-Type': 'application/json'
    });
  }

  getDespesas(): Observable<Despesa[]> {
    return this.http.get<Despesa[]>(this.apiUrl, { headers: this.headers });
  }

  getDespesasById(id: number): Observable<Despesa[]> {
    return this.http.get<any>(`${this.apiUrl}/bycod/${id}`, { headers: this.headers }).pipe(
      map(response => {
        if (response && response.items && response.items.length > 0) {
          // Desaninha os dados aqui
          const despesasArray = response.items.map((item: any) => item.ds_desppad.desp_pad).flat();
          return despesasArray;
        } else {
          return [];
        }
      }),
      catchError(error => {
        console.error('Erro ao buscar despesa por ID', error);
        return of([]);
      })
    );
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
