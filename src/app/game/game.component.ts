import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GameLoading } from '../../models/game-loading';
import { PlayerComponent } from "../player/player.component";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  MatDialog,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { GameDescriptionComponent } from '../game-description/game-description.component';
import { MatCardModule } from '@angular/material/card';



@Component({
  selector: 'app-game',
  standalone: true,
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
  imports: [CommonModule, PlayerComponent, MatIconModule, MatButtonModule,
    MatCardModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    GameDescriptionComponent]
})
export class GameComponent {
  gamesLoading: GameLoading = new GameLoading;
  pickCardAnimation = false;

  currentCard: string = '';
  dialogRef: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  takeCard() {
    if (!this.pickCardAnimation) {
      this.currentCard = this.gamesLoading.stack.pop()!;
      this.gamesLoading.currentCard = this.currentCard;
      this.pickCardAnimation = true;

      this.gamesLoading.currentPlayer++;
      this.gamesLoading.currentPlayer = this.gamesLoading.currentPlayer % this.gamesLoading.players.length; 

      setTimeout(() => {
        this.gamesLoading.playedCards.push(this.currentCard);
        this.pickCardAnimation = false;
      }, 1500)
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent)

    dialogRef.afterClosed().subscribe(name => {
      if(name && name.length > 0) {
        this.gamesLoading.players.push(name);
      }
    });
  }


}


