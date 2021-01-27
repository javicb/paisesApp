import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  busqueda = '';
  error = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(buscar: string): void {
    this.busqueda = buscar;
    this.error = false;

    this.paisService.buscarCapital(this.busqueda)
      .subscribe((response) => {
        this.paises = response;
      }, (err) => {
        this.error = true;
        this.paises = [];
      });
  }
}
