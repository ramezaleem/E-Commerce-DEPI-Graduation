import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceriesPetsComponent } from './groceries-pets.component';

describe('GroceriesPetsComponent', () => {
  let component: GroceriesPetsComponent;
  let fixture: ComponentFixture<GroceriesPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroceriesPetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroceriesPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
