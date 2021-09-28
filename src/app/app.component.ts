import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  leftDice = '../assets/dice/1.png';
  rightDice = '../assets/dice/2.png';
  number1: number = 1;
  number2: number = 2;

  diceThrow(): void {
    this.number1 = Math.round(Math.random() * 5) + 1;
    this.number2 = Math.round(Math.random() * 5) + 1;
    this.leftDice = '../assets/dice/'+ this.number1 +'.png';
    this.rightDice = '../assets/dice/'+ this.number2 +'.png';
  }
}
