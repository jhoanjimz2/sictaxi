import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBloquearConductorComponent } from './modal-bloquear-conductor.component';

describe('ModalBloquearConductorComponent', () => {
  let component: ModalBloquearConductorComponent;
  let fixture: ComponentFixture<ModalBloquearConductorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBloquearConductorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalBloquearConductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
