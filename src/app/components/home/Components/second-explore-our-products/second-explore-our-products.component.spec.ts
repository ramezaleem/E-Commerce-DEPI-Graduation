import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondExploreOurProductsComponent } from './second-explore-our-products.component';

describe('SecondExploreOurProductsComponent', () => {
  let component: SecondExploreOurProductsComponent;
  let fixture: ComponentFixture<SecondExploreOurProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondExploreOurProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondExploreOurProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
