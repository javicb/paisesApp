import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`li {
    cursor: pointer;
  }`
  ]
})
export class PorPaisComponent implements OnInit {

  busqueda = '';
  error = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias = false;

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(buscar: string): void {
    this.busqueda = buscar;
    this.error = false;
    this.mostrarSugerencias = false;

    this.paisService.buscarPais(this.busqueda)
      .subscribe((response) => {
        this.paises = response;
      }, (err) => {
        this.error = true;
        this.paises = [];
      });
  }

  sugerencias(busqueda: string): void {
    this.error = false;
    this.busqueda = busqueda;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais(busqueda)
      .subscribe(paises => this.paisesSugeridos = paises.splice(0, 5),
        (err) => this.paisesSugeridos = []);
  }

  buscarSugerido(busqueda: string): void {
    this.buscar(busqueda);
  }

}
