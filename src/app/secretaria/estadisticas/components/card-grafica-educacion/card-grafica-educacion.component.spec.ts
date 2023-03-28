import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGraficaEducacionComponent } from './card-grafica-educacion.component';

describe('CardGraficaEducacionComponent', () => {
  let component: CardGraficaEducacionComponent;
  let fixture: ComponentFixture<CardGraficaEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGraficaEducacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardGraficaEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
