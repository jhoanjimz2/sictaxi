import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculasCanceladasComponent } from './matriculas-canceladas.component';

describe('MatriculasCanceladasComponent', () => {
  let component: MatriculasCanceladasComponent;
  let fixture: ComponentFixture<MatriculasCanceladasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatriculasCanceladasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatriculasCanceladasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
