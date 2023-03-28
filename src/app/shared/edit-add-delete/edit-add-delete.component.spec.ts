import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddDeleteComponent } from './edit-add-delete.component';

describe('EditAddDeleteComponent', () => {
  let component: EditAddDeleteComponent;
  let fixture: ComponentFixture<EditAddDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAddDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAddDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
