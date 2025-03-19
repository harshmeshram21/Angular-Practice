import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  imports: [FormsModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})
export class LoginComponent {
  http = inject(HttpClient);
  router = inject(Router);

  loginObj: any = {
    EmailId: "",
    Password: "",
  };
  onLogin() {
    this.http
      .post<any>(
        "https://projectapi.gerasim.in/api/UserApp/login",
        this.loginObj
      )
      .subscribe(
        (res) => {
          console.log(res);
          if (res?.result) {
            localStorage.setItem("token", res?.data?.token || "");
            this.router.navigateByUrl("/post-api");
          } else {
            alert("Wrong email or password");
          }
        },
        (error) => {
          alert("Something went wrong");
          console.error(error);
        }
      );
  }
}
