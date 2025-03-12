import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-two-day-data-binding',
  imports: [FormsModule],
  templateUrl: './two-day-data-binding.component.html',
  styleUrl: './two-day-data-binding.component.css',
})
export class TwoDayDataBindingComponent {
  name: string = 'harsh';
  city = signal('nagpur');
  constructor(private router: Router) {}

  nivigateToOneWay() {
    this.router.navigateByUrl('/one-way-data-binding');
  }

  changeName() {
    this.name = this.name == 'harsh' ? 'rahul' : 'harsh';
  }

  changeCity() {
    this.city.set(this.city() === 'nagpur' ? 'bangalore' : 'nagpur');
  }
}
