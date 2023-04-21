import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPosComponent } from './select-pos.component';

describe('SelectPosComponent', () => {
  let component: SelectPosComponent;
  let fixture: ComponentFixture<SelectPosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectPosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectPosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
