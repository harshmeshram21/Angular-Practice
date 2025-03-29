import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "role",
})
export class RolePipe implements PipeTransform {
  transform(value: string): string {
    const roles: any = {
      "Human Resource": "HR",
      Selling: "SE",
      Manager: "ME",
    };
    return value in roles ? roles[value] : value;
  }
}
