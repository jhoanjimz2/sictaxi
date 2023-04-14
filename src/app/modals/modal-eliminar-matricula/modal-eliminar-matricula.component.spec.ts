import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEliminarMatriculaComponent } from './modal-eliminar-matricula.component';

describe('ModalEliminarMatriculaComponent', () => {
  let component: ModalEliminarMatriculaComponent;
  let fixture: ComponentFixture<ModalEliminarMatriculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEliminarMatriculaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEliminarMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
