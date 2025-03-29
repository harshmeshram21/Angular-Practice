import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { EmpDataService } from "../emp-data.service";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-add-list",
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: "./add-list.component.html",
  styleUrl: "./add-list.component.css",
})
export class AddListComponent {
  employeeForm = new FormGroup({
    employeeName: new FormControl("", Validators.required),
    employeeRole: new FormControl("", Validators.required),
    skills: new FormArray([
      new FormControl("", Validators.required),
      new FormControl("", Validators.required),
    ]),
  });

  get skills() {
    return this.employeeForm.get("skills") as FormArray;
  }

  constructor(private empDataService: EmpDataService) {}
  formValue: any = [];

  onSubmit() {
    this.formValue.push(this.employeeForm.value);
    this.empDataService.updateData([...this.formValue]);
    console.log(this.formValue);

    this.employeeForm.reset();
    this.skills.clear();
    this.skills.push(new FormControl(""));
    this.skills.push(new FormControl(""));
  }
}
