import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";

@Component({
  selector: "app-ng-conatiner",
  imports: [CommonModule],
  templateUrl: "./ng-conatiner.component.html",
  styleUrl: "./ng-conatiner.component.css",
})
export class NgConatinerComponent {
  isContainer = true;

  userList: any;
  isLoader = false;
  constructor(private http: HttpClient) {}

  getAllUser() {
    this.isLoader = true;
    this.http
      .get("https://jsonplaceholder.typicode.com/users")
      .subscribe((res: any) => {
        this.userList = res;
        this.isLoader = false;
      });
  }
}
