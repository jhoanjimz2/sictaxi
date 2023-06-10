import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmAlertComponent } from './modal-confirm-alert.component';

describe('ModalConfirmAlertComponent', () => {
  let component: ModalConfirmAlertComponent;
  let fixture: ComponentFixture<ModalConfirmAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConfirmAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalConfirmAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
