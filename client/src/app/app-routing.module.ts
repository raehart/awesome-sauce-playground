import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { KaiaComponent } from './kaia/kaia.component';
import { RheaComponent } from './rhea/rhea.component';
import { GamesComponent } from './games/games.component';
import { SquanchComponent } from './squanch/squanch.component';
import { StarwarsComponent } from './starwars/starwars.component';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'kaia', component: KaiaComponent },
  { path: 'rhea', component: RheaComponent },
  { path: 'games', component: GamesComponent },
  { path: 'squanch', component: SquanchComponent },
  { path: 'starwars', component: StarwarsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
