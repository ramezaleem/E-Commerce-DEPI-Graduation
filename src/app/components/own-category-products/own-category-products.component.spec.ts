import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnCategoryProductsComponent } from './own-category-products.component';

describe('OwnCategoryProductsComponent', () => {
  let component: OwnCategoryProductsComponent;
  let fixture: ComponentFixture<OwnCategoryProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OwnCategoryProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OwnCategoryProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
