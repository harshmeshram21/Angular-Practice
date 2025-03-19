import {
  AfterViewInit,
  Component,
  ElementRef,
  viewChild,
  ViewChild,
} from "@angular/core";
import { AlretComponent } from "../reusableComponent/alret/alret.component";

@Component({
  selector: "app-view-child",
  imports: [AlretComponent],
  templateUrl: "./view-child.component.html",
  styleUrl: "./view-child.component.css",
})
export class ViewChildComponent implements AfterViewInit {
  @ViewChild("txt") textBox?: ElementRef;
  @ViewChild(AlretComponent) alertComp?: AlretComponent;

  ngAfterViewInit(): void {
    const value = this.textBox?.nativeElement.value;
    const demo_text = this.alertComp?.demoText;
    // debugger;
  }
}
