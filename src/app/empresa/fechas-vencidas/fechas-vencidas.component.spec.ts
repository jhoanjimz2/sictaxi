import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechasVencidasComponent } from './fechas-vencidas.component';

describe('FechasVencidasComponent', () => {
  let component: FechasVencidasComponent;
  let fixture: ComponentFixture<FechasVencidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FechasVencidasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FechasVencidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
