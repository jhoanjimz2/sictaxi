import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDesvincularComponent } from './modal-desvincular.component';

describe('ModalDesvincularComponent', () => {
  let component: ModalDesvincularComponent;
  let fixture: ComponentFixture<ModalDesvincularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDesvincularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDesvincularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
