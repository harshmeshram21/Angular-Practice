import { Component, Inject, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { DepartmentService } from "../service/department.service";

@Component({
  selector: "app-layout",
  imports: [RouterOutlet, RouterLink, FormsModule],
  templateUrl: "./layout.component.html",
  styleUrl: "./layout.component.css",
})
export class LayoutComponent {
  selectedRole: string = "";

  router = inject(Router);
  constructor(private deptService: DepartmentService) {}

  onLogout() {
    localStorage.removeItem("token");
    this.router.navigateByUrl("/login");
  }

  onRoleChange(role: string) {
    this.deptService.onRoleChnage$.next(role);
  }
}
