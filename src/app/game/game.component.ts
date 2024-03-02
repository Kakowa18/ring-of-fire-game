import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GameLoading } from '../../models/game-loading';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  gamesLoading: GameLoading | undefined;
  pickCardAnimation = false;

  constructor () {}

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.gamesLoading = new GameLoading();
    console.log(this.gamesLoading);
  }

  takeCard() {
    this.pickCardAnimation = true;

  }
}
