import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarConductoresComponent } from './buscar-conductores.component';

describe('BuscarConductoresComponent', () => {
  let component: BuscarConductoresComponent;
  let fixture: ComponentFixture<BuscarConductoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarConductoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarConductoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
