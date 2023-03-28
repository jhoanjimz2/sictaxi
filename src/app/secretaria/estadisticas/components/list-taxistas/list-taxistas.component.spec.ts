import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTaxistasComponent } from './list-taxistas.component';

describe('ListTaxistasComponent', () => {
  let component: ListTaxistasComponent;
  let fixture: ComponentFixture<ListTaxistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTaxistasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTaxistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
