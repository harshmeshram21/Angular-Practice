import { CommonModule } from "@angular/common";
import {
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";

@Component({
  selector: "app-ng-template",
  imports: [CommonModule],
  templateUrl: "./ng-template.component.html",
  styleUrl: "./ng-template.component.css",
})
export class NgTemplateComponent {
  isLogginUser: boolean = false;
  userName: string = "harsh";

  @ViewChild("dynamcTeam") dynamicTemp: TemplateRef<any> | undefined;
  @ViewChild("dynamcContainer", { read: ViewContainerRef }) dynamicContainer:
    | ViewContainerRef
    | undefined;

  loadTemplate() {
    if (this.dynamicTemp)
      this.dynamicContainer?.createEmbeddedView(this.dynamicTemp);
  }
}
