import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParqueAutomotorComponent } from './parque-automotor.component';

describe('ParqueAutomotorComponent', () => {
  let component: ParqueAutomotorComponent;
  let fixture: ComponentFixture<ParqueAutomotorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParqueAutomotorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParqueAutomotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
