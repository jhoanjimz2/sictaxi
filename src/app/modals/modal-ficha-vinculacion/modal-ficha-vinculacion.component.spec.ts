import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFichaVinculacionComponent } from './modal-ficha-vinculacion.component';

describe('ModalFichaVinculacionComponent', () => {
  let component: ModalFichaVinculacionComponent;
  let fixture: ComponentFixture<ModalFichaVinculacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFichaVinculacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalFichaVinculacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
