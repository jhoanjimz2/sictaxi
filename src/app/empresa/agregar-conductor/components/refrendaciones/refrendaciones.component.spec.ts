import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefrendacionesComponent } from './refrendaciones.component';

describe('RefrendacionesComponent', () => {
  let component: RefrendacionesComponent;
  let fixture: ComponentFixture<RefrendacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefrendacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefrendacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
