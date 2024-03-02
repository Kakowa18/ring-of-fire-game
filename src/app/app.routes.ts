import { Routes } from '@angular/router';
import { StartingGameComponent } from './starting-game/starting-game.component';
import { GameComponent } from './game/game.component';

export const routes: Routes = [
        {
        path: '',
        component: StartingGameComponent
        }, {
                path: 'game',
                component: GameComponent
        }
];
