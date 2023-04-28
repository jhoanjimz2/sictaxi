import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReporteCalificacionesComponent } from './card-reporte-calificaciones.component';

describe('CardReporteCalificacionesComponent', () => {
  let component: CardReporteCalificacionesComponent;
  let fixture: ComponentFixture<CardReporteCalificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardReporteCalificacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardReporteCalificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
