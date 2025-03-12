import { NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-ngif-directive',
  imports: [NgIf, FormsModule, NgForOf],
  templateUrl: './ngif-directive.component.html',
  styleUrl: './ngif-directive.component.css',
})
export class NgifDirectiveComponent {
  isDiv1Visible: boolean = true;
  isDiv2Visible: boolean = true;

  val1: string = '';
  val2: string = '';

  isCheck: boolean = true;

  cities: String[] = ['Nagpur', 'Pune', 'Mumbai', 'Bangalore'];

  studentList: { id: number; name: string; city: string; isActive: boolean }[] =
    [
      { id: 13, name: 'John Doe', city: 'New York', isActive: true },
      { id: 24, name: 'Jane Smith', city: 'Los Angeles', isActive: false },
      { id: 38, name: 'Mike Johnson', city: 'Chicago', isActive: true },
      { id: 84, name: 'Emily Davis', city: 'Houston', isActive: false },
    ];

  showBtn() {
    this.isDiv1Visible = true;
  }
  removeBtn() {
    this.isDiv1Visible = false;
  }

  toggleBtn() {
    this.isDiv2Visible = !this.isDiv2Visible;
  }
}
