import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxisTarjetaVigenteComponent } from './taxis-tarjeta-vigente.component';

describe('TaxisTarjetaVigenteComponent', () => {
  let component: TaxisTarjetaVigenteComponent;
  let fixture: ComponentFixture<TaxisTarjetaVigenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxisTarjetaVigenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxisTarjetaVigenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
