import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFormCommonComponent } from './product-form-common.component';

describe('ProductFormCommonComponent', () => {
  let component: ProductFormCommonComponent;
  let fixture: ComponentFixture<ProductFormCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFormCommonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFormCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
