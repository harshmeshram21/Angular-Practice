import { Routes } from "@angular/router";

import { OneWayDataBindingComponent } from "./components/one-way-data-binding/one-way-data-binding.component";
import { TwoDayDataBindingComponent } from "./components/two-day-data-binding/two-day-data-binding.component";
import { NgifDirectiveComponent } from "./directive/ngif-directive/ngif-directive.component";
import { AttriDirectiveComponent } from "./directive/attri-directive/attri-directive.component";
import { CcontoleFlow1Component } from "./controleFlow/ccontole-flow1/ccontole-flow1.component";
import { ControlFlow2Component } from "./controleFlow/control-flow2/control-flow2.component";
import { PipeComponent } from "./pipe/pipe.component";
import { TemplateFormComponent } from "./forms/template-form/template-form.component";
import { ReactiveFormComponent } from "./forms/reactive-form/reactive-form.component";
import { LifeCycleCompoComponent } from "./LIfeCycle/life-cycle-compo/life-cycle-compo.component";
import { ParentComponentComponent } from "./InputOutput/parent-component/parent-component.component";
import { GetApiComponent } from "./Http-methods/get-api/get-api.component";
import { PostApiComponent } from "./Http-methods/post-api/post-api.component";
import { NgTemplateComponent } from "./directive/ng-template/ng-template.component";
import { NgConatinerComponent } from "./directive/ng-conatiner/ng-conatiner.component";
import { ViewChildComponent } from "./view-child/view-child.component";
import { LoginComponent } from "./login/login.component";
import { LayoutComponent } from "./layout/layout.component";
import { authGuard } from "./service/auth.guard";

export const routes: Routes = [
  {
    // default route
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "",
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: "structural-directive",
        component: NgifDirectiveComponent,
      },
      {
        path: "attribute-directive",
        component: AttriDirectiveComponent,
      },
      {
        path: "ng-template",
        component: NgTemplateComponent,
      },
      {
        path: "ng-container",
        component: NgConatinerComponent,
      },
      {
        path: "one-way-data-binding",
        component: OneWayDataBindingComponent,
      },
      {
        path: "two-way-data-binding",
        component: TwoDayDataBindingComponent,
      },
      {
        path: "if-else-elseif",
        component: CcontoleFlow1Component,
      },
      {
        path: "for-switch",
        component: ControlFlow2Component,
      },
      {
        path: "pipe",
        component: PipeComponent,
      },
      {
        path: "view-child",
        component: ViewChildComponent,
      },
      {
        path: "template-form",
        component: TemplateFormComponent,
      },
      {
        path: "reactive-form",
        component: ReactiveFormComponent,
      },
      {
        path: "life-cycle",
        component: LifeCycleCompoComponent,
      },
      {
        path: "input-output",
        component: ParentComponentComponent,
      },
      {
        path: "get-api",
        component: GetApiComponent,
      },
      {
        path: "post-api",
        component: PostApiComponent,
      },
    ],
  },
];
