import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGraficaModelosComponent } from './card-grafica-modelos.component';

describe('CardGraficaModelosComponent', () => {
  let component: CardGraficaModelosComponent;
  let fixture: ComponentFixture<CardGraficaModelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGraficaModelosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardGraficaModelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
