import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExcelCalificacionesComponent } from './modal-excel-calificaciones.component';

describe('ModalExcelCalificacionesComponent', () => {
  let component: ModalExcelCalificacionesComponent;
  let fixture: ComponentFixture<ModalExcelCalificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalExcelCalificacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalExcelCalificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
