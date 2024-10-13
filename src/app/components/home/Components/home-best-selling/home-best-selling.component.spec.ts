import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBestSellingComponent } from './home-best-selling.component';

describe('HomeBestSellingComponent', () => {
  let component: HomeBestSellingComponent;
  let fixture: ComponentFixture<HomeBestSellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeBestSellingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeBestSellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
