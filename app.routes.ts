import { Routes } from '@angular/router';

import { OneWayDataBindingComponent } from './components/one-way-data-binding/one-way-data-binding.component';
import { TwoDayDataBindingComponent } from './components/two-day-data-binding/two-day-data-binding.component';
import { NgifDirectiveComponent } from './directive/ngif-directive/ngif-directive.component';
import { AttriDirectiveComponent } from './directive/attri-directive/attri-directive.component';
import { CcontoleFlow1Component } from './controleFlow/ccontole-flow1/ccontole-flow1.component';
import { ControlFlow2Component } from './controleFlow/control-flow2/control-flow2.component';
import { PipeComponent } from './pipe/pipe.component';

export const routes: Routes = [
  {
    path: 'structural-directive',
    component: NgifDirectiveComponent,
  },
  {
    path: 'attribute-directive',
    component: AttriDirectiveComponent,
  },
  {
    path: 'one-way-data-binding',
    component: OneWayDataBindingComponent,
  },
  {
    path: 'two-way-data-binding',
    component: TwoDayDataBindingComponent,
  },
  {
    path: 'if-else-elseif',
    component: CcontoleFlow1Component,
  },
  {
    path: 'for-switch',
    component: ControlFlow2Component,
  },
  {
    path: 'pipe',
    component: PipeComponent,
  },
];
