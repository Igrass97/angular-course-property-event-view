import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval;
  intervalRunning = false;

  @Output() increment: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  onGameStart() {
    this.intervalRunning = true;
    this.interval = setInterval(() => {
      console.log('emitted');
      this.increment.emit(1);
    }, 1000);
  }

  onGameStop() {
    this.intervalRunning = false;
    clearInterval(this.interval);
  }
}
