import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEliminarEmpresaComponent } from './modal-eliminar-empresa.component';

describe('ModalEliminarEmpresaComponent', () => {
  let component: ModalEliminarEmpresaComponent;
  let fixture: ComponentFixture<ModalEliminarEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEliminarEmpresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEliminarEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
