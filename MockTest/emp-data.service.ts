import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class EmpDataService {
  dataSubject = new BehaviorSubject<any[]>([]);
  sharedData$ = this.dataSubject.asObservable();

  updateData(data: any[]) {
    this.dataSubject.next([...this.dataSubject.getValue(), ...data]);
  }
}
