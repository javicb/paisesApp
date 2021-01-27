import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {

  busqueda = '';
  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(): void {
    console.log(this.busqueda);
    this.paisService.buscarPais(this.busqueda)
      .subscribe(response => {
        console.log(response);
      });
  }

}
