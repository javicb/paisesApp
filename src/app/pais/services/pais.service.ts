import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private baseUrl = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) { }

  buscarPais(busqueda: string): Observable<Country[]> {
    const url = `${this.baseUrl}/name/${busqueda}`;
    return this.http.get<Country[]>(url);
  }

  buscarCapital(busqueda: string): Observable<Country[]> {
    const url = `${this.baseUrl}/capital/${busqueda}`;
    return this.http.get<Country[]>(url);
  }
}
