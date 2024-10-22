import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabysToysComponent } from './babys-toys.component';

describe('BabysToysComponent', () => {
  let component: BabysToysComponent;
  let fixture: ComponentFixture<BabysToysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BabysToysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BabysToysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
