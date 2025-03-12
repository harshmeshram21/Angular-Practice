import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcontoleFlow1Component } from './ccontole-flow1.component';

describe('CcontoleFlow1Component', () => {
  let component: CcontoleFlow1Component;
  let fixture: ComponentFixture<CcontoleFlow1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CcontoleFlow1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CcontoleFlow1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
