import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectsParametrosComponent } from './selects-parametros.component';

describe('SelectsParametrosComponent', () => {
  let component: SelectsParametrosComponent;
  let fixture: ComponentFixture<SelectsParametrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectsParametrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectsParametrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
