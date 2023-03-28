import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPerfilTaxistaComponent } from './modal-perfil-taxista.component';

describe('ModalPerfilTaxistaComponent', () => {
  let component: ModalPerfilTaxistaComponent;
  let fixture: ComponentFixture<ModalPerfilTaxistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPerfilTaxistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPerfilTaxistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
