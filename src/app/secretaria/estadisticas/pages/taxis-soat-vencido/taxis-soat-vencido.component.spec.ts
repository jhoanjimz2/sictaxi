import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxisSoatVencidoComponent } from './taxis-soat-vencido.component';

describe('TaxisSoatVencidoComponent', () => {
  let component: TaxisSoatVencidoComponent;
  let fixture: ComponentFixture<TaxisSoatVencidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxisSoatVencidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxisSoatVencidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
