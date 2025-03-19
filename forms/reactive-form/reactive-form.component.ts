import { CommonModule, JsonPipe, NgIf } from "@angular/common";
import { Component } from "@angular/core";
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-reactive-form",
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, NgIf, CommonModule],
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.css"],
})
export class ReactiveFormComponent {
  studentForm: FormGroup = new FormGroup({
    firstName: new FormControl("", [
      Validators.required,
      Validators.minLength(4),
    ]),
    lastName: new FormControl("", [
      Validators.required,
      Validators.minLength(4),
    ]),
    userName: new FormControl("", [Validators.required, Validators.email]),
    city: new FormControl("", Validators.required),
    state: new FormControl("", Validators.required),
    zip: new FormControl("", [
      Validators.required,
      Validators.pattern("^[0-9]{6}$"),
    ]),
    isAcceptTerm: new FormControl(false, Validators.requiredTrue),
    file: new FormControl(null, Validators.required),

    skills: new FormArray([
      new FormControl(""),
      new FormControl(""),
      // new FormControl(""),
    ]),
  });

  get skills() {
    return this.studentForm.get("skills") as FormArray;
  }

  formvalue: any;

  onSubmit() {
    if (this.studentForm.valid) {
      this.formvalue = this.studentForm.value;
    }
  }
  onFileChange(event: any) {
    const file = event.target.files[0];

    if (file) {
      const allowedTypes = ["image/png", "image/jpeg", "application/pdf"];
      const maxSize = 2 * 1024 * 1024; // 2MB

      if (!allowedTypes.includes(file.type)) {
        this.studentForm.controls["file"].setErrors({ invalidType: true });
        return;
      }

      if (file.size > maxSize) {
        this.studentForm.controls["file"].setErrors({ maxSize: true });
        return;
      }

      this.studentForm.patchValue({ file: file });
    }
  }
}
