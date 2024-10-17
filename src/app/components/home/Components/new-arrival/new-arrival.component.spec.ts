import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArrivalComponent } from './new-arrival.component';

describe('NewArrivalComponent', () => {
  let component: NewArrivalComponent;
  let fixture: ComponentFixture<NewArrivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewArrivalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewArrivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
