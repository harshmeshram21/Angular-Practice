import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-mybtn",
  imports: [],
  templateUrl: "./mybtn.component.html",
  styleUrl: "./mybtn.component.css",
})
export class MybtnComponent {
  @Output() dataEvent = new EventEmitter<string>(); 

  dataSend() {
    this.dataEvent.emit('Hello from Child');
  }
}
