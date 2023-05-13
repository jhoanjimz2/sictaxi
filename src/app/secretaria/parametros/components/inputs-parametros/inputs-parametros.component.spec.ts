import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsParametrosComponent } from './inputs-parametros.component';

describe('InputsParametrosComponent', () => {
  let component: InputsParametrosComponent;
  let fixture: ComponentFixture<InputsParametrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputsParametrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputsParametrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
