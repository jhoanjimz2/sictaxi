import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGraficaCalificacionesComponent } from './card-grafica-calificaciones.component';

describe('CardGraficaCalificacionesComponent', () => {
  let component: CardGraficaCalificacionesComponent;
  let fixture: ComponentFixture<CardGraficaCalificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGraficaCalificacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardGraficaCalificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
