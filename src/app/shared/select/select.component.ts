import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comentarios } from 'src/app/interfaces';
import { Subject } from 'rxjs/internal/Subject';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() placeholder: string = '';
  @Input() comentarios!: Comentarios[];
  @Output() select: EventEmitter<any> = new EventEmitter();
  debounceSelect: Subject<string> = new Subject();

  ngOnInit() {
    this.debounceSelect.pipe(debounceTime(1000)).subscribe(valor => {
      this.cambio(valor);
    })
  }
  debounce(event: any) {
    this.debounceSelect.next(event.value);
  }
  cambio(value: any) {
    this.select.emit(value);
  }
}
