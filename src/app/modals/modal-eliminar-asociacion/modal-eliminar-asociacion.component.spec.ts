import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEliminarAsociacionComponent } from './modal-eliminar-asociacion.component';

describe('ModalEliminarAsociacionComponent', () => {
  let component: ModalEliminarAsociacionComponent;
  let fixture: ComponentFixture<ModalEliminarAsociacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEliminarAsociacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEliminarAsociacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
