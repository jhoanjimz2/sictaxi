import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectNegComponent } from './select-neg.component';

describe('SelectNegComponent', () => {
  let component: SelectNegComponent;
  let fixture: ComponentFixture<SelectNegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectNegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectNegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
