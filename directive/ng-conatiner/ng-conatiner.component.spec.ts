import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgConatinerComponent } from './ng-conatiner.component';

describe('NgConatinerComponent', () => {
  let component: NgConatinerComponent;
  let fixture: ComponentFixture<NgConatinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgConatinerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgConatinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
