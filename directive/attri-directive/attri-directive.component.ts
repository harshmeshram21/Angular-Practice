import { CommonModule, NgFor, NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attri-directive',
  imports: [CommonModule, FormsModule, NgForOf],
  templateUrl: './attri-directive.component.html',
  styleUrl: './attri-directive.component.css',
})
export class AttriDirectiveComponent {
  div1bgColor: string = 'bg-primary';
  isDiv2Active: boolean = true;
  isCheckBox: boolean = false;

  val1: string = '';
  val2: string = '';

  toggleBg() {
    this.isDiv2Active = !this.isDiv2Active;
  }

  addRedBg() {
    this.div1bgColor = 'bg-danger';
  }

  addBlueBg() {
    this.div1bgColor = 'bg-primary';
  }

  containerStyle: any = {
    height: '300px',
    width: '100%',
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
  };

  circleStyle: any = {
    height: '200px',
    width: '200px',
    'background-color': '#92e3ef',
    'border-radius': '50%',
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
  };

  studentList: {
    id: number;
    name: string;
    totalMarks: string;
    city: string;
    isActive: boolean;
  }[] = [
    {
      id: 13,
      name: 'John Doe',
      totalMarks: '56%',
      city: 'New York',
      isActive: true,
    },
    {
      id: 24,
      name: 'Jane Smith',
      totalMarks: '15%',
      city: 'Los Angeles',
      isActive: false,
    },
    {
      id: 38,
      name: 'Mike Johnson',
      totalMarks: '20%',
      city: 'Chicago',
      isActive: true,
    },
    {
      id: 84,
      name: 'Emily Davis',
      totalMarks: '70%',
      city: 'Houston',
      isActive: false,
    },
  ];
}
