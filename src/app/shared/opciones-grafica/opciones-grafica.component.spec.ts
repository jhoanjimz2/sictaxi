import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesGraficaComponent } from './opciones-grafica.component';

describe('OpcionesGraficaComponent', () => {
  let component: OpcionesGraficaComponent;
  let fixture: ComponentFixture<OpcionesGraficaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpcionesGraficaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpcionesGraficaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
