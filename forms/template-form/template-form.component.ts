import { JsonPipe } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-template-form",
  imports: [FormsModule, JsonPipe],
  templateUrl: "./template-form.component.html",
  styleUrl: "./template-form.component.css",
})
export class TemplateFormComponent {
  formObject: any = {
    firstName: "",
    lastName: "",
    userName: "",
    city: "",
    state: "",
    zip: "",
    isAcceptTerm: false,
  };

  formValue: any;

  onSubmit() {
    this.formValue = this.formObject;
  }
}
