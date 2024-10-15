import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMidComponent } from './about-mid.component';

describe('AboutMidComponent', () => {
  let component: AboutMidComponent;
  let fixture: ComponentFixture<AboutMidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutMidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutMidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
