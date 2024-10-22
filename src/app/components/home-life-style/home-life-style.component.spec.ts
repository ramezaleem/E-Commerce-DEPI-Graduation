import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLifeStyleComponent } from './home-life-style.component';

describe('HomeLifeStyleComponent', () => {
  let component: HomeLifeStyleComponent;
  let fixture: ComponentFixture<HomeLifeStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeLifeStyleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeLifeStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
