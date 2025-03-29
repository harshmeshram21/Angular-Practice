import { Component, signal } from "@angular/core";

@Component({
  selector: "app-signal",
  imports: [],
  templateUrl: "./signal.component.html",
  styleUrl: "./signal.component.css",
})
export class SignalComponent {
  fname = signal("harsh");
  age = signal<number>(24);

  constructor() {
    // to accees fname value in ts
    const firstName = this.fname();
    // debugger;
  }
}
