import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  JsonPipe,
  LowerCasePipe,
  PercentPipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    CurrencyPipe,
    DecimalPipe,
    PercentPipe,
    JsonPipe,
    TitleCasePipe,
    DatePipe,
    SlicePipe,
  ],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css',
})
export class PipeComponent {
  today: Date = new Date();
  message: string = 'hello world';
  price: number = 2500;
  number: number = 1234.5678944;
  percentage: number = 0.75;
  jsonData: object = { name: 'John', age: 30 };
  numbersArray: number[] = [10, 20, 30, 40, 50];
}
