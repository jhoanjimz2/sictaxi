import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCambiarImgProfileComponent } from './modal-cambiar-img-profile.component';

describe('ModalCambiarImgProfileComponent', () => {
  let component: ModalCambiarImgProfileComponent;
  let fixture: ComponentFixture<ModalCambiarImgProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCambiarImgProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCambiarImgProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
