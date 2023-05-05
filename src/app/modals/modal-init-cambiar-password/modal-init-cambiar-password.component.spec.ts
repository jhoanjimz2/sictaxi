import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInitCambiarPasswordComponent } from './modal-init-cambiar-password.component';

describe('ModalInitCambiarPasswordComponent', () => {
  let component: ModalInitCambiarPasswordComponent;
  let fixture: ComponentFixture<ModalInitCambiarPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalInitCambiarPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalInitCambiarPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
