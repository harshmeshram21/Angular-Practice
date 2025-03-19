import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleCompoComponent } from './life-cycle-compo.component';

describe('LifeCycleCompoComponent', () => {
  let component: LifeCycleCompoComponent;
  let fixture: ComponentFixture<LifeCycleCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeCycleCompoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeCycleCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
