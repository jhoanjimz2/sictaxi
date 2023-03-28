import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrls: ['./barra-busqueda.component.scss']
})
export class BarraBusquedaComponent {
  @Output() searchEvent: EventEmitter<any> = new EventEmitter();
  @Input() placeholder: string = '';
  searching: FormGroup = new FormGroup({
    search: new FormControl(''),
  });
  buscar() {
    this.searchEvent.emit(this.searching.controls['search'].value);
  }
}
