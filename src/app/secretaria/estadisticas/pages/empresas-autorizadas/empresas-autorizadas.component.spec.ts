import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresasAutorizadasComponent } from './empresas-autorizadas.component';

describe('EmpresasAutorizadasComponent', () => {
  let component: EmpresasAutorizadasComponent;
  let fixture: ComponentFixture<EmpresasAutorizadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresasAutorizadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpresasAutorizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
