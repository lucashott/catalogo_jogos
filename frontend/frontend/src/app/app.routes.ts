import { Routes } from '@angular/router';
import { GamesListComponent } from './pages/games-list/games-list.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'games' },
  { path: 'games', component: GamesListComponent },
];
