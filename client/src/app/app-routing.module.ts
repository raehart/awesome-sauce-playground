import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  LandingComponent,
  KaiaComponent,
  RheaComponent,
  GamesComponent,
  SquanchComponent,
  PokedexComponent,
  StarwarsComponent
} from './pages';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'kaia', component: KaiaComponent },
  { path: 'rhea', component: RheaComponent },
  { path: 'games', component: GamesComponent },
  { path: 'squanch', component: SquanchComponent },
  { path: 'pokemon', component: PokedexComponent },
  { path: 'starwars', component: StarwarsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
