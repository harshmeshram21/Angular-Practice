import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { OneWayDataBindingComponent } from './components/one-way-data-binding/one-way-data-binding.component';
import { TwoDayDataBindingComponent } from './components/two-day-data-binding/two-day-data-binding.component';
import { NgifDirectiveComponent } from './directive/ngif-directive/ngif-directive.component';
import { AttributeDirectiveComponent } from './directive/attribute-directive/attribute-directive.component';
import { AttriDirectiveComponent } from './directive/attri-directive/attri-directive.component';
import { RouterEvent, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular_demo';
  name: string = 'harsh';
  textColor: string = 'text-primary';
  bgColor: string = 'bg-info';

  getHeight(): string {
    return `im 5'5`;
  }
}
