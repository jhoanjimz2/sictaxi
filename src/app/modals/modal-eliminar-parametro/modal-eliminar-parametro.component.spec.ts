import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEliminarParametroComponent } from './modal-eliminar-parametro.component';

describe('ModalEliminarParametroComponent', () => {
  let component: ModalEliminarParametroComponent;
  let fixture: ComponentFixture<ModalEliminarParametroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEliminarParametroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEliminarParametroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
