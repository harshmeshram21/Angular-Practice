import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";

@Component({
  selector: "app-get-api",
  imports: [CommonModule],
  templateUrl: "./get-api.component.html",
  styleUrl: "./get-api.component.css",
})
export class GetApiComponent {
  userList: any;
  fetchError = false;
  constructor(private http: HttpClient) {}

  getAllUser() {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe(
      (res: any) => {
        this.userList = res;
      },
      (error) => {
        this.fetchError = true;
      }
    );
  }
}
