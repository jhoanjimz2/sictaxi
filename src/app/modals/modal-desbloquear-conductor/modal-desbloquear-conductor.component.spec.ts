import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDesbloquearConductorComponent } from './modal-desbloquear-conductor.component';

describe('ModalDesbloquearConductorComponent', () => {
  let component: ModalDesbloquearConductorComponent;
  let fixture: ComponentFixture<ModalDesbloquearConductorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDesbloquearConductorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDesbloquearConductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
