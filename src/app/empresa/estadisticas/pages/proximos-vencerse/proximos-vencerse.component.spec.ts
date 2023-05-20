import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximosVencerseComponent } from './proximos-vencerse.component';

describe('ProximosVencerseComponent', () => {
  let component: ProximosVencerseComponent;
  let fixture: ComponentFixture<ProximosVencerseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProximosVencerseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProximosVencerseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
