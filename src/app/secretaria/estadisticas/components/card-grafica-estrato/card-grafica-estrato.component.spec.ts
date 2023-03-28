import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGraficaEstratoComponent } from './card-grafica-estrato.component';

describe('CardGraficaEstratoComponent', () => {
  let component: CardGraficaEstratoComponent;
  let fixture: ComponentFixture<CardGraficaEstratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGraficaEstratoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardGraficaEstratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
