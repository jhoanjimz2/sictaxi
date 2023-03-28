import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCrearEmpresaComponent } from './modal-crear-empresa.component';

describe('ModalCrearEmpresaComponent', () => {
  let component: ModalCrearEmpresaComponent;
  let fixture: ComponentFixture<ModalCrearEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCrearEmpresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCrearEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
