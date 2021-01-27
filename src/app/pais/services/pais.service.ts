import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private baseUrl = 'https://restcountries.eu/rest/v2';

  get httpParams(): HttpParams {
    return new HttpParams().set('fields', 'name;capital;alpha2Code;flag;population');
  }

  constructor(private http: HttpClient) { }

  buscarPais(busqueda: string): Observable<Country[]> {
    const url = `${this.baseUrl}/name/${busqueda}`;
    return this.http.get<Country[]>(url);
  }

  buscarCapital(busqueda: string): Observable<Country[]> {
    const url = `${this.baseUrl}/capital/${busqueda}`;
    return this.http.get<Country[]>(url);
  }

  buscarPaisAlpha(id: string): Observable<Country> {
    const url = `${this.baseUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  buscarRegion(region: string): Observable<Country[]> {
    const url = `${this.baseUrl}/region/${region}`;
    return this.http.get<Country[]>(url, { params: this.httpParams })
      .pipe(
        tap(console.log)
      );
  }
}
