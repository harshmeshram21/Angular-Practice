import { Component, OnInit } from "@angular/core";
import { EmpDataService } from "../emp-data.service";
import { CommonModule } from "@angular/common";
import { RolePipe } from "../role.pipe";

@Component({
  selector: "app-display-list",
  imports: [CommonModule, RolePipe],
  templateUrl: "./display-list.component.html",
  styleUrl: "./display-list.component.css",
})
export class DisplayListComponent implements OnInit {
  employees: any[] = [];

  constructor(private empDataService: EmpDataService) {}

  ngOnInit() {
    this.empDataService.sharedData$.subscribe((data) => {
      this.employees = data;
      console.log(data);
    });
  }
}
