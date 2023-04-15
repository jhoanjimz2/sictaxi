import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCrearParametroComponent } from './modal-crear-parametro.component';

describe('ModalCrearParametroComponent', () => {
  let component: ModalCrearParametroComponent;
  let fixture: ComponentFixture<ModalCrearParametroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCrearParametroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCrearParametroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
