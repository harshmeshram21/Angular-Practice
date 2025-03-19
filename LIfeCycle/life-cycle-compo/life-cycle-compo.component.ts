import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
} from "@angular/core";

@Component({
  selector: "app-life-cycle-compo",
  imports: [],
  templateUrl: "./life-cycle-compo.component.html",
  styleUrl: "./life-cycle-compo.component.css",
})
export class LifeCycleCompoComponent
  implements
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  constructor() {
    console.log("constuctor");
  }

  ngOnInit() {
    console.log("ngOnInit ");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }
}
