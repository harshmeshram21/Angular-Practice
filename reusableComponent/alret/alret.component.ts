import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-alret",
  imports: [CommonModule],
  templateUrl: "./alret.component.html",
  styleUrl: "./alret.component.css",
})
export class AlretComponent {
  @Input() message: string = "";
  @Input() alertType = "";

  demoText: string = "hi from demo text";
}
