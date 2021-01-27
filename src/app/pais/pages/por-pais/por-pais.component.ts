import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {

  busqueda = '';
  error = false;
  paises: Country[] = [];
  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(buscar: string): void {
    this.busqueda = buscar;
    this.error = false;

    this.paisService.buscarPais(this.busqueda)
      .subscribe((response) => {
        console.log(response);
        this.paises = response;
      }, (err) => {
        this.error = true;
        this.paises = [];
      });
  }

  sugerencias(busqueda: string): void {
    this.error = false;
    // TODO: crear sugerencias
  }

}
