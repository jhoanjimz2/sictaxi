import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-export-excel',
  templateUrl: './export-excel.component.html',
  styleUrls: ['./export-excel.component.scss']
})
export class ExportExcelComponent {
  @Output() export: EventEmitter<any> = new EventEmitter();

  exportar() {
    this.export.emit();
  }

}
