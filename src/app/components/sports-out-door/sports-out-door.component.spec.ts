import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsOutDoorComponent } from './sports-out-door.component';

describe('SportsOutDoorComponent', () => {
  let component: SportsOutDoorComponent;
  let fixture: ComponentFixture<SportsOutDoorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SportsOutDoorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportsOutDoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
