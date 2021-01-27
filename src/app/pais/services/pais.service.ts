import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private baseUrl = 'https://restcountries.eu/rest/v2'

  constructor(private http: HttpClient) { }

  buscarPais(busqueda: string): Observable<any> {
    const url = `${this.baseUrl}/name/${busqueda}`;
    return this.http.get(url);
  }
}
