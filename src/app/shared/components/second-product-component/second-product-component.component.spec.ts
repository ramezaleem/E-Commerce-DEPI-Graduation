import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondProductComponentComponent } from './second-product-component.component';

describe('SecondProductComponentComponent', () => {
  let component: SecondProductComponentComponent;
  let fixture: ComponentFixture<SecondProductComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondProductComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondProductComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
