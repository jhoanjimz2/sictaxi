import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiasMesesAnhosComponent } from './dias-meses-anhos.component';

describe('DiasMesesAnhosComponent', () => {
  let component: DiasMesesAnhosComponent;
  let fixture: ComponentFixture<DiasMesesAnhosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiasMesesAnhosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiasMesesAnhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
