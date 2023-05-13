import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTomarFotoComponent } from './modal-tomar-foto.component';

describe('ModalTomarFotoComponent', () => {
  let component: ModalTomarFotoComponent;
  let fixture: ComponentFixture<ModalTomarFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTomarFotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalTomarFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
