import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dias-meses-anhos',
  templateUrl: './dias-meses-anhos.component.html',
  styleUrls: ['./dias-meses-anhos.component.scss']
})
export class DiasMesesAnhosComponent {
  @Output() select: EventEmitter<any> = new EventEmitter();
  @Input()  formatGrafic: number = 1;

  seleccionar(type: number) {
    this.formatGrafic = type;
    this.select.emit(type);
  }

}
