import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FasesExportarComponent } from './fases-exportar.component';

describe('FasesExportarComponent', () => {
  let component: FasesExportarComponent;
  let fixture: ComponentFixture<FasesExportarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasesExportarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FasesExportarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
