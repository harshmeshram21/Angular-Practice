import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ccontole-flow1',
  imports: [CommonModule, FormsModule],
  templateUrl: './ccontole-flow1.component.html',
  styleUrl: './ccontole-flow1.component.css',
})
export class CcontoleFlow1Component {
  isDiv1Active: boolean = true;
  isDiv2Active: boolean = true;
  isCheckBox: boolean = false;
  val1: string = '';
  val2: string = '';

  selectStatus: string = '';

  div1Show() {
    this.isDiv1Active = true;
  }

  div1Hide() {
    this.isDiv1Active = false;
  }
  toggleBg() {
    this.isDiv2Active = !this.isDiv2Active;
  }
}
