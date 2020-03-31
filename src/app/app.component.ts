import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: number = 0;
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIncrement(value) {
    this.counter += value;

    if (this.counter % 2 === 0) {
      this.evenNumbers.push(this.counter);
    } else {
      this.oddNumbers.push(this.counter);
    }
  }
}
