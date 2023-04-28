import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBuenasCalificacionesComponent } from './modal-buenas-calificaciones.component';

describe('ModalBuenasCalificacionesComponent', () => {
  let component: ModalBuenasCalificacionesComponent;
  let fixture: ComponentFixture<ModalBuenasCalificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBuenasCalificacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalBuenasCalificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
