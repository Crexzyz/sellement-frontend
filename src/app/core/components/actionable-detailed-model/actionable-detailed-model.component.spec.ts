import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionableDetailedModelComponent } from './actionable-detailed-model.component';

describe('ActionableDetailedModelComponent', () => {
  let component: ActionableDetailedModelComponent;
  let fixture: ComponentFixture<ActionableDetailedModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionableDetailedModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionableDetailedModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
