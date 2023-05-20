import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxistasRegistradosComponent } from './taxistas-registrados.component';

describe('TaxistasRegistradosComponent', () => {
  let component: TaxistasRegistradosComponent;
  let fixture: ComponentFixture<TaxistasRegistradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxistasRegistradosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxistasRegistradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
