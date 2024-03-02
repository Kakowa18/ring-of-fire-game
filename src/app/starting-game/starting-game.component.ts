import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starting-game',
  standalone: true,
  imports: [],
  templateUrl: './starting-game.component.html',
  styleUrl: './starting-game.component.scss'
})
export class StartingGameComponent {

  constructor(private router: Router) {

  }

  newGame() {
    this.router.navigateByUrl('/game');
  }
}
