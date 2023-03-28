import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxisRegistradosComponent } from './taxis-registrados.component';

describe('TaxisRegistradosComponent', () => {
  let component: TaxisRegistradosComponent;
  let fixture: ComponentFixture<TaxisRegistradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxisRegistradosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxisRegistradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
