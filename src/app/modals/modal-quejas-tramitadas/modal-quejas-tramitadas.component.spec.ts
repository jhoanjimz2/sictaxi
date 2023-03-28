import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalQuejasTramitadasComponent } from './modal-quejas-tramitadas.component';

describe('ModalQuejasTramitadasComponent', () => {
  let component: ModalQuejasTramitadasComponent;
  let fixture: ComponentFixture<ModalQuejasTramitadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalQuejasTramitadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalQuejasTramitadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
