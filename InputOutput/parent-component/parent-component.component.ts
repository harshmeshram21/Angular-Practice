import { Component } from "@angular/core";
import { AlretComponent } from "../../reusableComponent/alret/alret.component";
import { NgModel } from "@angular/forms";
import { NgClass } from "@angular/common";
import { MybtnComponent } from "../../reusableComponent/mybtn/mybtn.component";

@Component({
  selector: "app-parent-component",
  imports: [AlretComponent, MybtnComponent],
  templateUrl: "./parent-component.component.html",
  styleUrl: "./parent-component.component.css",
})
export class ParentComponentComponent {
  receivedData: string = "";

  receiveData(data: string) {
    this.receivedData = data;
  }
}
