import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GameLoading } from '../../models/game-loading';
import { PlayerComponent } from "../player/player.component";

@Component({
    selector: 'app-game',
    standalone: true,
    templateUrl: './game.component.html',
    styleUrl: './game.component.scss',
    imports: [CommonModule, PlayerComponent]
})
export class GameComponent {
  gamesLoading: GameLoading = new GameLoading;
  pickCardAnimation = false;

  currentCard: string = '';

  constructor() { }

  ngOnInit(): void {

  }

  takeCard() {
    if (!this.pickCardAnimation) {
      this.currentCard = this.gamesLoading.stack.pop()!;
      this.gamesLoading.currentCard = this.currentCard;
      this.pickCardAnimation = true;
      
      setTimeout(() => {
        this.gamesLoading.playedCards.push(this.currentCard);
        this.pickCardAnimation = false;
      }, 1500)
    }
  }
}
