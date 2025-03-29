import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "upparCasePipe",
})
export class UpparCasePipePipe implements PipeTransform {
  transform(value: string): unknown {
    return value.toUpperCase();
  }
}
