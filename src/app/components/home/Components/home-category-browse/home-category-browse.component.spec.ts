import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCategoryBrowseComponent } from './home-category-browse.component';

describe('HomeCategoryBrowseComponent', () => {
  let component: HomeCategoryBrowseComponent;
  let fixture: ComponentFixture<HomeCategoryBrowseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeCategoryBrowseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeCategoryBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
