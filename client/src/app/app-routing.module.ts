import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { KaiaHomeComponent } from './kaia-home/kaia-home.component';
import { RheaHomeComponent } from './rhea-home/rhea-home.component';
import { GamesComponent } from './games/games.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'kaia', component: KaiaHomeComponent },
  { path: 'rhea', component: RheaHomeComponent },
  { path: 'games', component: GamesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
