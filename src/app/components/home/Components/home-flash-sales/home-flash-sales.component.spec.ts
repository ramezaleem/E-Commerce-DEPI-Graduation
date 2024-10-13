import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFlashSalesComponent } from './home-flash-sales.component';

describe('HomeFlashSalesComponent', () => {
  let component: HomeFlashSalesComponent;
  let fixture: ComponentFixture<HomeFlashSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeFlashSalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeFlashSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
