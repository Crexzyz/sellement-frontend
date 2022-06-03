import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonArrayComponent } from './button-array.component';

describe('ButtonArrayComponent', () => {
  let component: ButtonArrayComponent;
  let fixture: ComponentFixture<ButtonArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
