import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCrearAsociacionComponent } from './modal-crear-asociacion.component';

describe('ModalCrearAsociacionComponent', () => {
  let component: ModalCrearAsociacionComponent;
  let fixture: ComponentFixture<ModalCrearAsociacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCrearAsociacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCrearAsociacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
