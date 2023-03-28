import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertasVencimientoComponent } from './alertas-vencimiento.component';

describe('AlertasVencimientoComponent', () => {
  let component: AlertasVencimientoComponent;
  let fixture: ComponentFixture<AlertasVencimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertasVencimientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertasVencimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
