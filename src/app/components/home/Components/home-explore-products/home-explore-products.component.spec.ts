import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeExploreProductsComponent } from './home-explore-products.component';

describe('HomeExploreProductsComponent', () => {
  let component: HomeExploreProductsComponent;
  let fixture: ComponentFixture<HomeExploreProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeExploreProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeExploreProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
