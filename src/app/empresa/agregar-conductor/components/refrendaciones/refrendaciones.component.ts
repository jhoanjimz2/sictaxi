import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { GetConductorIDVinculacion, Refrendaciones } from 'src/app/interfaces';
import { AddConductorService } from 'src/app/services/add-conductor.service';

@Component({
  selector: 'app-refrendaciones',
  templateUrl: './refrendaciones.component.html',
  styleUrls: ['./refrendaciones.component.scss']
})
export class RefrendacionesComponent implements OnInit {
  @Output() refrendar: EventEmitter<any> = new EventEmitter();
  @Input() conductor!: GetConductorIDVinculacion;
  @Input() id = '';
  refrendaciones: Refrendaciones[] = [];

  constructor(
    private aC: AddConductorService
  ) {}

  ngOnInit() {
    if ( this.id ) this.cargarData();
  }

  cargarData() {
    this.aC.getRefrendaciones(this.id).subscribe({
      next: (data: Refrendaciones[]) => {
        this.refrendaciones = data;
      }
    })
  }

  _refrendar() {
    this.refrendar.emit();
    setTimeout(() => {
      this.cargarData();
    }, 1500)
  }
}
