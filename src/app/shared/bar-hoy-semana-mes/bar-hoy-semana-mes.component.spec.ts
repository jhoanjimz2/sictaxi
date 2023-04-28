import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarHoySemanaMesComponent } from './bar-hoy-semana-mes.component';

describe('BarHoySemanaMesComponent', () => {
  let component: BarHoySemanaMesComponent;
  let fixture: ComponentFixture<BarHoySemanaMesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarHoySemanaMesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarHoySemanaMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
