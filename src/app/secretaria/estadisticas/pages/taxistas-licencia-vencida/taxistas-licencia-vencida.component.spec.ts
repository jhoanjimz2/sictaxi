import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxistasLicenciaVencidaComponent } from './taxistas-licencia-vencida.component';

describe('TaxistasLicenciaVencidaComponent', () => {
  let component: TaxistasLicenciaVencidaComponent;
  let fixture: ComponentFixture<TaxistasLicenciaVencidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxistasLicenciaVencidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxistasLicenciaVencidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
