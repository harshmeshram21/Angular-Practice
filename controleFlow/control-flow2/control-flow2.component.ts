import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow2',
  imports: [FormsModule],
  templateUrl: './control-flow2.component.html',
  styleUrl: './control-flow2.component.css',
})
export class ControlFlow2Component {
  items: string[] = ['Apple', 'Banana', 'Cherry', 'orange', 'mango'];

  dayNumber: number = 1;

  studentList = [
    { name: 'John Doe', city: 'New York', isActive: true },
    { name: 'Jane Smith', city: 'Los Angeles', isActive: false },
    { name: 'Michael Johnson', city: 'Chicago', isActive: true },
    { name: 'Emily Davis', city: 'Houston', isActive: false },
  ];
}
