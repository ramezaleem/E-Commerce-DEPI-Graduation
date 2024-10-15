import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFootComponent } from './about-foot.component';

describe('AboutFootComponent', () => {
  let component: AboutFootComponent;
  let fixture: ComponentFixture<AboutFootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutFootComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutFootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
