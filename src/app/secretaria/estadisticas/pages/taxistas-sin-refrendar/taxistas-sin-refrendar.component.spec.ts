import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxistasSinRefrendarComponent } from './taxistas-sin-refrendar.component';

describe('TaxistasSinRefrendarComponent', () => {
  let component: TaxistasSinRefrendarComponent;
  let fixture: ComponentFixture<TaxistasSinRefrendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxistasSinRefrendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxistasSinRefrendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
