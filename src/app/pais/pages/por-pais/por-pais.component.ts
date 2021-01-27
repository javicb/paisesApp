import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {

  busqueda = '';
  constructor() { }

  ngOnInit(): void {
  }

  buscar(): void {
    console.log(this.busqueda);
  }

}
