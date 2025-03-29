import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { appState } from "../store/app.state";
import { AsyncPipe } from "@angular/common";
import { incrementCounter, decrementCounter } from "../store/counter.action";
import { selectCount } from "../store/counter.selector";

@Component({
  selector: "app-counter-app",
  imports: [AsyncPipe],
  templateUrl: "./counter-app.component.html",
  styleUrl: "./counter-app.component.css",
})
export class CounterAppComponent {
  count$: Observable<number>;

  constructor(private store: Store<appState>) {
    // Selecting the counter state from the store
    // this.count$ = this.store.select((state) => state.counter.count);  //or
    this.count$ = this.store.select(selectCount);
  }

  increment() {
    this.store.dispatch(incrementCounter());
  }

  decrement() {
    this.store.dispatch(decrementCounter());
  }
}
