import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifDirectiveComponent } from './ngif-directive.component';

describe('NgifDirectiveComponent', () => {
  let component: NgifDirectiveComponent;
  let fixture: ComponentFixture<NgifDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgifDirectiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgifDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
