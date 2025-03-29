import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  JsonPipe,
  LowerCasePipe,
  PercentPipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from "@angular/common";
import { Component } from "@angular/core";
import { UpparCasePipePipe } from "../customePipes/uppar-case-pipe.pipe";
import { DepartmentService } from "../service/department.service";

@Component({
  selector: "app-pipe",
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    CurrencyPipe,
    DecimalPipe,
    PercentPipe,
    JsonPipe,
    TitleCasePipe,
    DatePipe,
    SlicePipe,
    UpparCasePipePipe,
  ],
  templateUrl: "./pipe.component.html",
  styleUrl: "./pipe.component.css",
})
export class PipeComponent {
  today: Date = new Date();
  message: string = "hello world";
  price: number = 2500;
  number: number = 1234.5678944;
  percentage: number = 0.75;
  jsonData: object = { name: "John", age: 30 };
  numbersArray: number[] = [10, 20, 30, 40, 50];
  currentRole: string = "";
  constructor(private deptService: DepartmentService) {
    this.deptService.onRoleChnage$.subscribe((role: string) => {
      this.currentRole = role;
    });
  }
}
