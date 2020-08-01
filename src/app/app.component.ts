import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = '';
  date: string = '';
  amount: string = '';
  miles: number;
  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2000,
  };

  onNameChange(value: string): void {
    this.name = value;
  }

  onDateChange(value: string): void {
    this.date = value;
  }

  onAmountChange(value: string): void {
    this.amount = value;
  }

  onMilesChange(value) {
    this.miles = value;
  }
}
