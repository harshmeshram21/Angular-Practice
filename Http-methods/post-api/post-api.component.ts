import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DepartmentService } from "../../service/department.service";

@Component({
  selector: "app-post-api",
  imports: [CommonModule, FormsModule],
  templateUrl: "./post-api.component.html",
  styleUrl: "./post-api.component.css",
})
export class PostApiComponent implements OnInit {
  http = inject(HttpClient);

  constructor(private deptSrv: DepartmentService) {}

  showUpdateBtn = false;

  deptObject = {
    departmentName: "",
    departmentLogo: "",
  };

  deptList: any[] = [];

  ngOnInit(): void {
    this.getDepartments();
  }

  editDepartment(data: any) {
    this.deptObject = data;
    this.showUpdateBtn = true;
  }

  // fetchDepartments() {
  //   this.http
  //     .get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment")
  //     .subscribe((res: any) => {
  //       if (res.data) {
  //         this.deptList = res.data;
  //       } else {
  //         alert("Something went wrong while fetching departments");
  //       }
  //     });
  // }

  getDepartments() {
    this.deptSrv.fetchDepartments().subscribe((res: any) => {
      if (res.data) {
        this.deptList = res.data;
      } else {
        alert("Something went wrong while fetching departments");
      }
    });
  }

  addDepartment() {
    this.http
      .post(
        "https://projectapi.gerasim.in/api/Complaint/AddNewDepartment",
        this.deptObject
      )
      .subscribe((res: any) => {
        if (res.result) {
          alert("Department added successfully!");
          this.getDepartments();
        } else {
          alert("Failed to add department");
        }
      });
  }

  deleteDepartment(id: number) {
    this.http
      .delete(
        `https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=${id}`
      )
      .subscribe((res: any) => {
        if (res.result) {
          alert("Department deleted successfully!");
          this.getDepartments();
        } else {
          alert("Failed to add department");
        }
      });
  }

  updateDepartment() {
    this.http
      .post(
        "https://projectapi.gerasim.in/api/Complaint/UpdateDepartment",
        this.deptObject
      )
      .subscribe((res: any) => {
        if (res.result) {
          alert("Department updated successfully!");
          this.getDepartments();
        } else {
          alert("Failed to add department");
        }
      });
    this.deptObject = {
      departmentName: "",
      departmentLogo: "",
    };
    this.showUpdateBtn = false;
  }
}
