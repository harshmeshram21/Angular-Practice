import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-one-way-data-binding',
  imports: [RouterLink],
  templateUrl: './one-way-data-binding.component.html',
  styleUrl: './one-way-data-binding.component.css',
})
export class OneWayDataBindingComponent {
  message: string = 'text commming from ts via Interpolation';
  text_color: string = 'text-primary';

  currentTimestamp: number = new Date().getTime(); // Gets the current timestam
  currentDate: Date = new Date(); // Current date and time

  constructor() {}

  showAlert(message: string) {
    alert(message);
  }
}
