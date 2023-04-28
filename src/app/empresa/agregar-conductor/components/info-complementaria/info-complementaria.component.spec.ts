import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoComplementariaComponent } from './info-complementaria.component';

describe('InfoComplementariaComponent', () => {
  let component: InfoComplementariaComponent;
  let fixture: ComponentFixture<InfoComplementariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoComplementariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoComplementariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
