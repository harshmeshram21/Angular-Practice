import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttriDirectiveComponent } from './attri-directive.component';

describe('AttriDirectiveComponent', () => {
  let component: AttriDirectiveComponent;
  let fixture: ComponentFixture<AttriDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttriDirectiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttriDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
