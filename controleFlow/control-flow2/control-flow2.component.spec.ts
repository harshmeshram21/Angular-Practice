import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFlow2Component } from './control-flow2.component';

describe('ControlFlow2Component', () => {
  let component: ControlFlow2Component;
  let fixture: ComponentFixture<ControlFlow2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlFlow2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlFlow2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
