import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoDayDataBindingComponent } from './two-day-data-binding.component';

describe('TwoDayDataBindingComponent', () => {
  let component: TwoDayDataBindingComponent;
  let fixture: ComponentFixture<TwoDayDataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoDayDataBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoDayDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
