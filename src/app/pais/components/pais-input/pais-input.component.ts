import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
})
export class PaisInputComponent implements OnInit {

  @Output() eventKeyPress: EventEmitter<string> = new EventEmitter();
  @Output() eventDevounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  busqueda = '';

  constructor() { }

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe(valor => {
        this.eventDevounce.emit(valor);
      });
  }

  buscar(): void {
    this.eventKeyPress.emit(this.busqueda);
  }

  keyPress(): void {
    this.debouncer.next(this.busqueda);
  }
}
