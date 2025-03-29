import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DepartmentService {
  onRoleChnage$: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient) {}

  fetchDepartments() {
    return this.http.get(
      "https://projectapi.gerasim.in/api/Complaint/GetParentDepartment"
    );
  }
}

//********* */ What is a Service in Angular?**************
// In Angular, a service is a class that provides shared functionality across components, such as:

// Fetching data from an API
// Managing application state
// Handling business logic
// Performing reusable operations (e.g., logging, authentication, data transformation)

// ***********Why Use Services?***********
// Code Reusability – Prevents code duplication by centralizing logic.
// Separation of Concerns – Keeps components lightweight and focused only on the UI.
// Dependency Injection (DI) – Services are injected into components, making them easier to manage and test.
