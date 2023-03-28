import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bar-hoy-semana-mes',
  templateUrl: './bar-hoy-semana-mes.component.html',
  styleUrls: ['./bar-hoy-semana-mes.component.scss']
})
export class BarHoySemanaMesComponent {
  @Input() titulo: string = '';
  type:number = 1;
}
