import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGraficaComentariosNegComponent } from './card-grafica-comentarios-neg.component';

describe('CardGraficaComentariosNegComponent', () => {
  let component: CardGraficaComentariosNegComponent;
  let fixture: ComponentFixture<CardGraficaComentariosNegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGraficaComentariosNegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardGraficaComentariosNegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
