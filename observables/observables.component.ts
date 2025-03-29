import { Component, OnDestroy, OnInit } from "@angular/core";
import { filter, interval, map, Observable, Subscription } from "rxjs";

@Component({
  selector: "app-observables",
  templateUrl: "./observables.component.html",
  styleUrls: ["./observables.component.css"],
})
export class ObservablesComponent implements OnInit, OnDestroy {
  internalSubscription!: Subscription;
  customSubscription!: Subscription;

  ngOnInit() {
    this.internalSubscription = interval(1000).subscribe((count) => {
      // console.log(`Interval Count: ${count}`);
    });

    const customObservable = new Observable<number>((observer) => {
      let count = 0;
      const intervalId = setInterval(() => {
        if (count > 3) {
          observer.error("count is more that 3");
        }
        if (count > 2) {
          observer.complete();
        }

        observer.next(count);
        count++;
      }, 1000);
    });

    this.customSubscription = customObservable
      .pipe(
        filter((data) => {
          if (data === 1) {
            return false;
          }
          return true;
        }),
        map((count: number) => {
          return `Custom Observable Count: ${count}`;
        })
      )
      .subscribe(
        (data) => {
          // console.log(`Custom Observable Count: ${data}`); // used operator for this
          console.log(data);
        },
        (error) => {
          console.log(error);
        },
        () => {
          console.log("complete...");
        }
      );
  }

  ngOnDestroy(): void {
    this.internalSubscription.unsubscribe();
    this.customSubscription.unsubscribe();
  }
}
