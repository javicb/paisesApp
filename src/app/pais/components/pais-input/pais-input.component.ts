import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
})
export class PaisInputComponent {

  @Output() eventKeyPress: EventEmitter<string> = new EventEmitter();
  busqueda = '';

  constructor() { }

  buscar(): void {
    this.eventKeyPress.emit(this.busqueda);
  }
}
