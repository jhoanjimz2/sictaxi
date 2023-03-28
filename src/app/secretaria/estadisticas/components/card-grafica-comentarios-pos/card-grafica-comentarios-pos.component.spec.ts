import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGraficaComentariosPosComponent } from './card-grafica-comentarios-pos.component';

describe('CardGraficaComentariosPosComponent', () => {
  let component: CardGraficaComentariosPosComponent;
  let fixture: ComponentFixture<CardGraficaComentariosPosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGraficaComentariosPosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardGraficaComentariosPosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
